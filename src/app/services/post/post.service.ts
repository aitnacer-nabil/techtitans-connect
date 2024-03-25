import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  api_key =
    'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJ5YXNzaW5lQGdtYWlsLmNvbSIsInN1YiI6Inlhc3NpbmUiLCJpYXQiOjE3MTEwMzI0NzYsImV4cCI6MTcxMTAzNDI3Nn0.MxgsjTgoXhPAbCbidq8Rk8xr4Tj36cskh7xZzU3SihM';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.api_key}`,
  });
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) {}

  create(data: Post): Observable<Post> {
    console.log('Data : ', data);
    return this.http.post(
      `http://localhost:8222/api/v1/post`,
      data,
      this.requestOptions
    );
  }

  

}
