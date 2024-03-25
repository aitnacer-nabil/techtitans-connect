import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private url: string = environment.url + "/shareds/post";

  constructor(
    private http: HttpClient
  ) {
  }
  sharePost(postId: any,userId:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJvbW91c2xpaEBnbWFpbC5jb20iLCJzdWIiOiJtYXJvdWFuZSIsImlhdCI6MTcxMTM2Njg4MywiZXhwIjoxNzExMzY4NjgzfQ.Y13FDNpKE3idQV4D5qv7EUGp4d0yIpIoWmuApGP1xys` 
      })
    };

    const endpoint: string = `${this.url}/${postId}`;
    return this.http.post(endpoint, {userId}, httpOptions); 
  }

}
