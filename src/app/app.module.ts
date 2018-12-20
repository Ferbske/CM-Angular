import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthService} from './components/auth/auth.service';
import {AuthGuardService} from './components/auth/auth-guard.service';
import { FormsModule} from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DeleteModalComponent } from './components/dashboard/delete-modal/delete-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    NavigationComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule,
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
