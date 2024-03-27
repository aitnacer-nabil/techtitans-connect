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
        'Authorization': `Bearer ${environment.token}` 
      })
    };

    const endpoint: string = `${this.url}/${postId}`;
    return this.http.post(endpoint, {userId}, httpOptions); 
  }

}
