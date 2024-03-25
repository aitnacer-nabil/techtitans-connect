import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
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

  sharePost(postId: any): Observable<any> {
    const endpoint: string = `${this.url}/${postId}`;
    return this.http.post(endpoint, null);
  }


}
