import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './test/test.component';
import { PostComponent } from './components/post/post.component';
import { HeaderComponent } from './components/header/header.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarFriendsComponent } from './components/sidebar-friends/sidebar-friends.component';
import { SidebarSuggestionComponent } from './components/sidebar-suggestion/sidebar-suggestion.component';
import {AuthenticationService} from "./services/authentication/authentication.service";
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import {AuthGuard} from "./guard/auth.guard";
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, } from '@angular/forms';
import { SinUpComponent } from './components/sin-up/sin-up.component';
import { Router } from '@angular/router';
import { FriendService } from './services/friend/friend.service';
import { FriendRequestService } from './services/friend/friend-request.service';
import { ReactionBarComponent } from './components/reaction-bar/reaction-bar.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { CommentInputComponent } from './components/comment-input/comment-input.component';
import { ReactionIconsComponent } from './components/reaction-icons/reaction-icons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent,
    CommentsComponent,
    FriendsComponent,
    ProfileComponent,
    AuthenticationComponent,
    NotificationComponent,
    HomeComponent,
    TestComponent,
    PostComponent,
    HeaderComponent,
    AddPostComponent,
    SidebarComponent,
    SidebarFriendsComponent,
    SidebarSuggestionComponent,
    EditProfileComponent,
    LoginComponent,
    SinUpComponent,
    SidebarSuggestionComponent,
    ReactionBarComponent,
    CommentSectionComponent,
    CommentInputComponent,
    ReactionIconsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [AuthGuard,AuthenticationService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
 // providers: [HttpClient,FriendService,FriendRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
