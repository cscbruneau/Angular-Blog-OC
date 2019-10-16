import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

@Input() blogPost : Post;

  constructor() { }

  ngOnInit() {
    console.log("toto "+this.blogPost.content);
  }

  positiveLike(){
    return this.blogPost.loveIts ++;
  }

  negativeLike(){
    return this.blogPost.loveIts --;
  }

}
