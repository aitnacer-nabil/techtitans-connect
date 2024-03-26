import { Component, OnInit } from '@angular/core';
import {Friend} from "../../models/friend/friend";
import { FriendRequest } from "../../models/friend/friend-request";
import { FriendService } from "../../services/friend/friend.service";
import { FriendRequestService } from "../../services/friend/friend-request.service";
import {Profile} from "../../models/friend/profile";
import {Status} from "../../enums/status";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit{


  friends: Profile[] = [
    {
      id: 1,
      username: 'JohnDoe',
      password: 'password',
      email: '' ,
      firstname: 'John',
      lastname: 'Doe',
      dateOfBirth: new Date(),
      country: 'USA',
      createdAt: new Date()
    },
    {
      id: 2,
      username: 'JaneDoe',
      password: 'password',
      email: '' ,
      firstname: 'Jane',
      lastname: 'Doe',
      dateOfBirth: new Date(),
      country: 'USA',
      createdAt: new Date()
    }
  ];

  // @ts-ignore
  friendRequests: FriendRequest[] = [
    {
      id: 1,
      userIdSender: 1,
      friendId: 3,
      // @ts-ignore
      status: 'PENDING',
      createdAt: new Date(),
      updatedAt: new Date(),
      friend: {
        id: 3,
        username: 'qwerty',
        password: 'password',
        email: '' ,
        firstname: 'qwerty',
        lastname: 'Doe',
        dateOfBirth: new Date(),
        country: 'USA',
        createdAt: new Date()
      }
    }
  ];
  selectedStatus: number = 0;
  constructor(private friendService: FriendService, private friendRequestService: FriendRequestService) { }

  ngOnInit(): void {
    this.getFriends();
    this.getFriendsRequest();
  }
  onChange($event: Event,id?:number) {
    if(Status[this.selectedStatus] == "ACCEPTED"){
      this.acceptFriendRequest(id);
    }else if(Status[this.selectedStatus] == "REJECTED"){
      this.rejectFriendRequest(id);
    }
  }
  getFriends() {
    this.friendService.getAllFriendsProfile().subscribe(
      data => {
        this.friends = data as Profile[];
      },
      (error) => {
        console.error('Erreur lors de la récupération des amis : ', error);
      }
    );
  }

  getFriendsRequest() {
    this.friendRequestService.getFriendsRequest().subscribe(
      (response: any) => {
        this.friendRequests = response as FriendRequest[];
        this.friendRequests.forEach((friendRequest) => {
          this.friendService.getFriendById(friendRequest.friendId).subscribe(
            (response: any) => {
              friendRequest.friend = response as Profile;
            },
            (error) => {
              console.error('Erreur lors de la récupération des amis : ', error);
            }
          );
        });
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

  protected readonly Status = Status;


}
