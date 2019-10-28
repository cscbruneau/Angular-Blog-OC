import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.models';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService, private router : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      titre: ['',Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost(){
    const titre = this.postForm.get('titre').value;
    const content = this.postForm.get('content').value;

    const newPost = new Post (titre, content);

    this.postsService.createPost(newPost);
    this.router.navigate(['/posts']);
  }

}
