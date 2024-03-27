import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReactionsService {
  private baseUrl = 'http://localhost:8222/api/v1/reactions/post';

  constructor(private http: HttpClient) { }

  saveReaction(postId: number, reaction: any): Observable<any> {
   const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.token}`
    });
     return this.http.post(`${this.baseUrl}/${postId}`, reaction,{ headers });
  }
 
  updateReaction(id: number, reaction: any): Observable<any> {
   const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.token}`
    });
     return this.http.put(`${this.baseUrl}/${id}`, reaction,{headers});
  }
 
  deleteReaction(id: number): Observable<any> {
     return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getReactionById(postId: number,userId:number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.token}`
    });
    return this.http.get(`${this.baseUrl}/${postId}/${userId}`, { headers });

  }
}
