import { Component,Input } from "@angular/core";
import { Post } from '../post.model';
@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']


})
export class PostListComponent {
  panelOpenState = false;
  // posts = [
  //   {title:'t1', content:'c1'},
  //   {title:'t2', content:'c2'},
  //   {title:'t3', content:'c3'},
  //   {title:'t4', content:'c4'},
  // ]
  @Input() posts: Post[] = [];

}
