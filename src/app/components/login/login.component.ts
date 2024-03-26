// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {LoginRequest} from "../../models/loginRequest";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthenticationService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;
    let loginRequest: LoginRequest = {
      username: username !== null ? username : undefined,
      password: password !== null ? password : undefined
    };
    this.authService.login(loginRequest).subscribe(
      data => {
        // Assuming the login method returns an object with an accessToken property
        // Save the token and user information as needed
        console.log('Login successful', data);
        this.authService.setToken(data);
        // Redirect to the home page
        this.router.navigate(['/home']);
      },
      err => {
        console.error('Login failed', err);
      }
    );
  }
}
