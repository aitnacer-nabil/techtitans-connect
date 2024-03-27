import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import { LoginComponent } from './components/login/login.component';
import { SinUpComponent } from './components/sin-up/sin-up.component';
import { HomeComponent } from './components/home/home.component';
import {AuthGuard} from "./guard/auth.guard";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import { FriendsComponent } from './components/friends/friends.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'editProfile', component: EditProfileComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent ,},
  { path: 'signup', component: SinUpComponent , },
  {path:'logout',component:AuthenticationComponent},
  {path: 'friends', component: FriendsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
