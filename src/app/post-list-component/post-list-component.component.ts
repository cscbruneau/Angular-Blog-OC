import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent {

@Input() listPosts : Post[];


  constructor() { }

  ngOnInit() {
    console.log("baba "+this.listPosts[0].content);
  }

}
