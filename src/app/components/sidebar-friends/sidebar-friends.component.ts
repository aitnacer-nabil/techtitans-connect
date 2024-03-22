import { Component, OnInit } from '@angular/core';
import {Friend} from "../../models/friend/friend";
import {FriendService} from "../../services/friend/friend.service";

@Component({
  selector: 'app-sidebar-friends',
  templateUrl: './sidebar-friends.component.html',
  styleUrls: ['./sidebar-friends.component.css']
})
export class SidebarFriendsComponent implements OnInit {

  friends: Friend[];

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(){
    this.friendService.getFriends().subscribe(
      data => {
        this.friends = data
      });
  }

}
