import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ReactionBarComponent,
    CommentSectionComponent,
    CommentInputComponent,
    ReactionIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
