import { Component, OnInit } from '@angular/core';
import { EditprofileService } from '../../services/editprofile/editprofile.service';
import { Router } from '@angular/router';
import {User} from "../../models/user"; // Import Router


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: User = {} as User;

  constructor(
    private editProfileService: EditprofileService,
    private router: Router // Inject Router
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

  onSubmit(): void {
    this.editProfileService.updateProfile(this.user).subscribe(
      response => {
        console.log('Profile updated successfully:', response);
        window.alert('Updated successfully'); // Show alert box
        this.router.navigate(['/home']); // Navigate to home
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
