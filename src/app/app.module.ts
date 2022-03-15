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

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    LoginComponent,
    RegisterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
