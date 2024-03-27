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
    'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJ5YXNzaW5lQGdtYWlsLmNvbSIsInN1YiI6Inlhc3NpbmUiLCJpYXQiOjE3MTE0NjMwMDEsImV4cCI6MTcxMTQ2NDgwMX0.gNOpiZisFchI6-FK3Q9ndsQHcqIfU5nOXiF4s5bo4Ik';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.api_key}`,
  });
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) {}

  create(data: Post): Observable<Post> {
    console.log('Data : ', data);
    let fd = new FormData();
    fd.append('body', data.body);
    fd.append('multipartFiles', data.multipartFiles);
    return this.http.post(
      `http://localhost:8222/api/v1/post`,
      fd,
      this.requestOptions
    );
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${baseUrl}/post/all`);
  }

  getMedia(id: any): Observable<Media[]> {
    return this.http.get<Media[]>(`${baseUrl}/medias/post/${id}`);
  }
}
