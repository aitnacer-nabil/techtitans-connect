import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
