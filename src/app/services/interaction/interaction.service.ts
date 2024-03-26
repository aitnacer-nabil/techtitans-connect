import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private url: string = environment.url + "/interactions/post";

  constructor(
    private http: HttpClient
  ) { }

  getAllInteractions(postId: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.token}` 
      })
    };

    const endpoint: string = `${this.url}/${postId}`;
    return this.http.get(endpoint, httpOptions);
  }
}
