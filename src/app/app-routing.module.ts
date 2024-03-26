import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import { LoginComponent } from './components/login/login.component';
import { SinUpComponent } from './components/sin-up/sin-up.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SinUpComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
