import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [
    trigger('commentSectionAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])
  ]
})
export class PostComponent implements OnInit {
  showCommentSection: boolean = false;
  postId: number = 1;
  userId: number = 1;


  constructor() { }

  ngOnInit(): void {
  }
  toggleCommentSection() {
    this.showCommentSection = !this.showCommentSection;
  }

}
