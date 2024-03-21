import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Status } from 'src/app/enums/status';
import {Observable} from "rxjs";
import {Friend} from "../../models/friend/friend";
import {FriendRequest} from "../../models/friend/friend-request";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private apiurl="http://localhost:8222/api/friend"
  private token="eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJ5YXNzaW5lQGdtYWlsLmNvbSIsInN1YiI6Inlhc3NpbmUiLCJpYXQiOjE3MTEwMTQ1NzMsImV4cCI6MTcxMTAxNjM3M30.TUSu8DJ1gozPemgmqsO70iAp5BWXWT90LsV9T1eWXbs";
  constructor(private httpclient:HttpClient) { }
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });

  private requestOptions = { headers: this.headers };
  getFriends(){
    return this.httpclient.get<Friend[]>(this.apiurl+"/all", this.requestOptions);
  }
  getFriendById(id:any){
    return this.httpclient.get(this.apiurl+"/"+id, this.requestOptions);
  }
  getAllFriendsProfile(){
    return this.httpclient.get(this.apiurl+"/profiles/all", this.requestOptions);
  }
  deleteFriend(id:any){
    return this.httpclient.delete(this.apiurl+"/"+id, this.requestOptions);
  }

}
