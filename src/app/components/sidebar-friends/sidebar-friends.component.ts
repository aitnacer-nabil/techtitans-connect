import { Component, OnInit } from '@angular/core';
import {FriendService} from "../../services/friend/friend.service";
import {Profile} from "../../models/friend/profile";

@Component({
  selector: 'app-sidebar-friends',
  templateUrl: './sidebar-friends.component.html',
  styleUrls: ['./sidebar-friends.component.css']
})
export class SidebarFriendsComponent implements OnInit {

  profiles!: Profile[];

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(){
    this.friendService.getAllFriendsProfile().subscribe(
      data => {
        this.profiles = data
      },
      error =>{
       console.error('Error:',error);
      }
      );
  }
}
