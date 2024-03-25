import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status } from 'src/app/enums/status';

@Injectable({
  providedIn: 'root'
})
export class FriendRequestService {

  private apiurl="http://localhost:8222/api/friend";
  private token="eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJ5YXNzaW5lQGdtYWlsLmNvbSIsInN1YiI6Inlhc3NpbmUiLCJpYXQiOjE3MTEwMTQ1NzMsImV4cCI6MTcxMTAxNjM3M30.TUSu8DJ1gozPemgmqsO70iAp5BWXWT90LsV9T1eWXbs";
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });
  constructor(private httpclient:HttpClient) { }

  private requestOptions = { headers: this.headers };

  getFriendsRequest(){
    return this.httpclient.get(this.apiurl+"/requests/received", this.requestOptions);
  }
  sendFriendRequest(friendId:any){

    return this.httpclient.post(this.apiurl+"/requests/user/",friendId, this.requestOptions);
  }
  acceptFriendRequest(id:any){
    return this.httpclient.put(this.apiurl+"/requests/"+id+"/accept", this.requestOptions);
  }
  rejectFriendRequest(id:any){
    return this.httpclient.put(this.apiurl+"/requests/"+id+"/reject", this.requestOptions);
  }
  deleteFriendRequest(id:any){
    return this.httpclient.delete(this.apiurl+"/requests/"+id, this.requestOptions);
  }
  getAllSentRequests(){
    return this.httpclient.get(this.apiurl+"/requests/send", this.requestOptions);
  }
  getAllReceivedRequests(){
    return this.httpclient.get(this.apiurl+"/requests/received", this.requestOptions);
  }
  getAllRequestByStatus(status:Status){
    return this.httpclient.get(this.apiurl+"/requests/all/status?status="+status, this.requestOptions);
  }

}
