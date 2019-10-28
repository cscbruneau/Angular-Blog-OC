import { Component } from '@angular/core';
import * as firebase from 'firebase'; 
import { PostsService } from './services/posts.service';
import { Router } from '@angular/router';
import { Post } from './models/post.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'blogOC';

// post1 : Post = new Post("Premier post","Sed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosam.",1);
// post2 : Post = new Post("Second post","Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis parcens nec urbium primatibus nec plebeiis.",10);
// post3 : Post = new Post("Troisième post","Sed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosam.",0);
// post4 : Post = new Post("Quatrième post","Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis parcens nec urbium primatibus nec plebeiis.",-2);
// post5 : Post = new Post("Cinquième post","Sed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosam.",-3);

// blogPosts : Post [] = [this.post1,this.post2,this.post3,this.post4,this.post5];

  constructor(private postsService: PostsService, private router: Router){

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAx3jVV90rQIv_eumCY6xlDgRv7Ab9vjrY",
      authDomain: "blogoc-e8948.firebaseapp.com",
      databaseURL: "https://blogoc-e8948.firebaseio.com",
      projectId: "blogoc-e8948",
      storageBucket: "blogoc-e8948.appspot.com",
      messagingSenderId: "1200865323",
      appId: "1:1200865323:web:47829669a698d4a988aa6e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  posts: Post[];
  postsSubscription: Subscription;

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (rPosts: Post[]) => {
        this.posts = rPosts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }


};








