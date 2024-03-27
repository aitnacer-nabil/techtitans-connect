import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  createPost: FormGroup;
  constructor(private postservice: PostService) {}
  ngOnInit(): void {
    this.createPost = new FormGroup({
      body: new FormControl(''),
      multipartFiles: new FormControl(''),
    });
  }
  onSubmit(form: FormGroup) {
    console.log('Body : ', form.value.body);
    console.log('multipartFiles : ', form.value.multipartFiles);
    const data = this.createPost.value;
    this.postservice.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.createPost.reset();
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.createPost.patchValue({ multipartFiles: file });
    console.log('Image : ', file);
  }
}
