import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private  router: Router) { }

  ngOnInit(): void {
    this.logout();
  }
  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);

  }
}
