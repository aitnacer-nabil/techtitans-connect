import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from 'src/app/models/media.model';
import { Post } from 'src/app/models/post.model';

const baseUrl = 'http://localhost:8222/api/v1';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  api_key =
    'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJ5YXNzaW5lQGdtYWlsLmNvbSIsInN1YiI6Inlhc3NpbmUiLCJpYXQiOjE3MTEwMzI0NzYsImV4cCI6MTcxMTAzNDI3Nn0.MxgsjTgoXhPAbCbidq8Rk8xr4Tj36cskh7xZzU3SihM';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: Bearer ${this.api_key},
  });
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) {}

  create(data: Post): Observable<Post> {
    console.log('Data : ', data);
    return this.http.post(
      ${baseUrl}/post,
      data,
      this.requestOptions
    );
  }

  getAll(): Observable<Post[]>{
    return this.http.get<Post[]>(${baseUrl}/post/all);
  }

  getMedia(id: any): Observable<Media[]>{
    return this.http.get<Media[]>(${baseUrl}/medias/post/${id});
  }

}