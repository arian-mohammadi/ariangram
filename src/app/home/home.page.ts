import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor() {}



  // isLike: boolean = false;

  // toggleLike() {
  //   this.isLike = !this.isLike;
  //   } 


likedPosts: { [key: number]: boolean } = {};

toggleLike(postId: number) {
  this.likedPosts[postId] = !this.likedPosts[postId];
}
}
