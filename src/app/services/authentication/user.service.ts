import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private apiBaseUrl : string = 'http://localhost:8222/api/v1/users/';
  constructor(private  http: HttpClient) { }
  public getUserById(id: string) {
    return this.http.get(`${this.apiBaseUrl}${id}`);
  }
}
