import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Media } from 'src/app/models/media.model';
import { PostService } from 'src/app/services/post/post.service';
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


  posts?: Post[];
  medias?: Media[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.retrievePosts();
  }

  retrievePosts(): void {
    this.postService.getAll().subscribe({
      next: (data) =>{
        this.posts = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  retrieveMedias(id: number): void {
    this.postService.getMedia(id).subscribe({
      next: (data) => {
        this.medias = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  toggleCommentSection() {
    this.showCommentSection = !this.showCommentSection;
  }

}
