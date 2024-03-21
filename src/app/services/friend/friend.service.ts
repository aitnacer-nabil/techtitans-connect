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

  getFriends(){
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      });

    const requestOptions = { headers: headers };
    return this.httpclient.get<Friend[]>(this.apiurl+"/all", requestOptions);
  }
  getFriendsRequest(){
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      });

    const requestOptions = { headers: headers };
    return this.httpclient.get<FriendRequest[]>(this.apiurl+"/requests/received", requestOptions);
  }
  sendFriendRequest(friendId:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers };
    return this.httpclient.post(this.apiurl+"/requests/user/",friendId, requestOptions);
  }
  acceptFriendRequest(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers };
    return this.httpclient.put(this.apiurl+"/requests/"+id+"/accept", requestOptions);
  }
  rejectFriendRequest(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers };
    return this.httpclient.put(this.apiurl+"/requests/"+id+"/reject", requestOptions);
  }
  deleteFriendRequest(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers };
    return this.httpclient.delete(this.apiurl+"/requests/"+id, requestOptions);
  }
  getAllSentRequests(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers };
    return this.httpclient.get(this.apiurl+"/requests/send", requestOptions);
  }
  getAllReceivedRequests(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers };
    return this.httpclient.get(this.apiurl+"/requests/received", requestOptions);
  }

  getAllRequestByStatus(status:Status){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers };
    return this.httpclient.get(this.apiurl+"/requests/all/status?status="+status, requestOptions);
  }

  getFriendById(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers };
    return this.httpclient.get(this.apiurl+"/"+id, requestOptions);
  }
  getAllFriendsProfile(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers };
    return this.httpclient.get(this.apiurl+"/profiles/all", requestOptions);
  }

  deleteFriend(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers };
    return this.httpclient.delete(this.apiurl+"/"+id, requestOptions);
  }

}
