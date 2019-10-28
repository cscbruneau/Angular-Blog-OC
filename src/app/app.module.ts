import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { NewPostComponent } from './new-post/new-post.component';
import { QuatreCentQuatreComponent } from './quatre-cent-quatre/quatre-cent-quatre.component';
import { HeaderComponent } from './header/header.component';
import { PostsService } from './services/posts.service';
import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes =[
  {path: 'posts', component: PostListComponentComponent},
  {path: 'posts/new', component: NewPostComponent},
  {path: '', component: PostListComponentComponent},
  {path: 'not-found', component: QuatreCentQuatreComponent},
  {path: '**', redirectTo:'/not-found'}]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponent,
    QuatreCentQuatreComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
