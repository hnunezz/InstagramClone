import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { LoginComponent } from './access/login/login.component';
import { RegisterComponent } from './access/register/register.component';
import { BannerComponent } from './access/banner/banner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Service/auth.service';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './home/feed/feed.component';
import { AuthGuard } from './guard/auth-guard.service';
import { AddPostComponent } from './home/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    LoginComponent,
    RegisterComponent,
    BannerComponent,
    HomeComponent,
    FeedComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule


  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
