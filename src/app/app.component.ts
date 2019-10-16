import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'blogOC';

 post1 : Post = new Post("Premier post","Sed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosam.",1);
 post2 : Post = new Post("Second post","Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis parcens nec urbium primatibus nec plebeiis.",10);
 post3 : Post = new Post("Troisième post","Sed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosam.",0);
 post4 : Post = new Post("Quatrième post","Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis parcens nec urbium primatibus nec plebeiis.",-2);
 post5 : Post = new Post("Cinquième post","Sed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosam.",-3);

 blogPosts : Post [] = [this.post1,this.post2,this.post3,this.post4,this.post5];
};

export class Post{
  title : string;
  content : string;
  loveIts : number;
  createdAt : Date;

  constructor(public pTitle : string, public pContent : string, public pLoveIts : number){
    this.title = pTitle;
    this.content = pContent;
    this.loveIts = pLoveIts;
    this.createdAt = new Date();
  };
};




