import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { HttpModule } from "@angular/http";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthService} from "./components/auth/auth.service";
import {AuthGuardService} from "./components/auth/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
