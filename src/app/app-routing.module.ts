import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import { LoginComponent } from './components/login/login.component';
import { SinUpComponent } from './components/sin-up/sin-up.component';
import { HomeComponent } from './components/home/home.component';
import {AuthGuard} from "./guard/auth.guard";
const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'editProfile', component: EditProfileComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent ,},
  { path: 'signup', component: SinUpComponent , },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
