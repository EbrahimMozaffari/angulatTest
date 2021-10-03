import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { Post } from './posts/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  storedPosts:any = [] ;
  //storedPosts = null;

  onPostAdded(post: Post[]){
    console.log(post)
    this.storedPosts.push(post)


  }


}
