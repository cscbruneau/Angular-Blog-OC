import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.models';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent{

@Input() blogPost : Post;

  constructor(private postService: PostsService) { }

  positiveLike(){

    this.blogPost.loveIts ++;

    this.updateRecords();

    return this.blogPost.loveIts;
  }

  negativeLike(){
    this.blogPost.loveIts --;

    this.updateRecords();

    return this.blogPost.loveIts;
  }

  updateRecords(){
    this.postService.savePosts();
    this.postService.emitPosts();
  }

  onDeletePost(post: Post){
    this.postService.deletePost(post);
  }

}
