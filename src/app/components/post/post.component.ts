import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Media } from 'src/app/models/media.model';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

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

}
