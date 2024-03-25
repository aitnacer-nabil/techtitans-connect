import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactionsService {
  private baseUrl = 'http://localhost:8222/api/v1/reactions/post';

  constructor(private http: HttpClient) { }

  saveReaction(postId: number, reaction: any): Observable<any> {
     return this.http.post(`${this.baseUrl}/${postId}`, reaction);
  }
 
  updateReaction(id: number, reaction: any): Observable<any> {
     return this.http.put(`${this.baseUrl}/${id}`, reaction);
  }
 
  deleteReaction(id: number): Observable<any> {
     return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
