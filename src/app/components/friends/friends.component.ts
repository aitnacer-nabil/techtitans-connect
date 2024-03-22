import { Component, OnInit } from '@angular/core';
import {FriendService} from "../../services/friend/friend.service";
import {Friend} from "../../models/friend/friend";
import {FriendRequest} from "../../models/friend/friend-request";
import {FriendRequestService} from "../../services/friend/friend-request.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: Friend[] = [];
  friendRequests: FriendRequest[] = [];
  id: any;


  constructor(private friendService: FriendService,private friendRequestService:FriendRequestService) { }

  ngOnInit(): void {
    this.getFriends()
    this.getFriendsRequest()
    this.acceptFriendRequest(this.id)
    this.rejectFriendRequest(this.id)
    this.deleteFriendRequest(this.id)
    this.deleteFriend(this.id)
  }
  getFriends() {
    this.friendService.getFriends().subscribe(
      (response: Friend[]) => {
        this.friends = response;
      },
      (error) => {
        console.error('Erreur lors de la récupération des amis : ', error);
      }
    );
  }

  getFriendsRequest() {
    this.friendRequestService.getFriendsRequest().subscribe(
      (response: any) => {
        this.friendRequests = response as FriendRequest[];  []
      },
      (error) => {
        console.error('Erreur lors du chargement des demandes d\'ami : ', error);
      }
    );
  }
  acceptFriendRequest(id: any) {
    this.friendRequestService.acceptFriendRequest(id).subscribe(
      (response) => {
        // Handle successful response if needed
        console.log('Friend request accepted successfully:', response);
      },
      (error) => {
        // Handle error if needed
        console.error('Error accepting friend request:', error);
      }
    );
  }
  rejectFriendRequest(id: any) {
    this.friendRequestService.rejectFriendRequest(id).subscribe(
      (response) => {
        // Handle successful response if needed
        console.log('Friend request rejected successfully:', response);
      },
      (error) => {
        // Handle error if needed
        console.error('Error rejecting friend request:', error);
      }
    );
  }

  deleteFriendRequest(id: any) {
    this.friendRequestService.deleteFriendRequest(id).subscribe(
      (response) => {
        // Handle successful response if needed
        console.log('Friend request deleted successfully:', response);
      },
      (error) => {
        // Handle error if needed
        console.error('Error deleting friend request:', error);
      }
    );
  }
  deleteFriend(id: any) {
    this.friendService.deleteFriend(id).subscribe(
      (response) => {
        console.log('Friend deleted successfully:', response);
        // Optionally, perform any other logic after successful deletion
      },
      (error) => {
        console.error('Error deleting friend:', error);
        // Handle the error appropriately
      }
    );
  }

}
