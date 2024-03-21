import { Component, OnInit } from '@angular/core';
import { EditprofileService } from '../../services/editprofile/editprofile.service';
import {User} from "./user";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: User = {} as User;

  constructor(
    private editProfileService: EditprofileService
  ) { }

  ngOnInit(): void {
    this.editProfileService.getProfile().subscribe(
      (response: any) => {
        console.log(response);
        this.user = response;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

// Add this method inside the EditProfileComponent class
  onSubmit(): void {
    this.editProfileService.updateProfile(this.user).subscribe(
      response => {
        console.log('Profile updated successfully:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
