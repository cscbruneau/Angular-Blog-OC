import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.models';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit{

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private router: Router, private postsService: PostsService){}

  ngOnInit(){

    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (rPosts: Post[]) => {
        this.posts = rPosts;
      }
    );
    this.postsService.getPosts();
    
    this.postsService.emitPosts();
  }

  onNewPost(){
    this.router.navigate(['/posts','new']);
  }

}
