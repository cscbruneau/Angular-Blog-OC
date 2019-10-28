import { Post } from '../models/post.models';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';

export class PostsService {
    posts : Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor(){}

    emitPosts(){
        this.postsSubject.next(this.posts);
    }

    savePosts(){
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts(){
        firebase.database().ref('/posts').on('value',(data) => {
            this.posts = data.val() ? data.val() : [];
            this.emitPosts();
        });
    }

    createPost(newPost: Post){
        this.posts.push(newPost);
        console.log(newPost);
        this.savePosts();
        this.emitPosts();
    }

    deletePost(post:Post){
        
        const idPostToDelete = this.posts.findIndex(
            (rPost) => {
                if(post === rPost){
                    return true;
                }
            }
        );

        this.posts.splice(idPostToDelete,1);
        this.savePosts();
        this.emitPosts();
    }

}