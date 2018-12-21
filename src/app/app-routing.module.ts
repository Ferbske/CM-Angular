import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignupComponent} from './components/auth/signup/signup.component';
import {SigninComponent} from './components/auth/signin/signin.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuardService} from './components/auth/auth-guard.service';
import {CheckDetailComponent} from './components/dashboard/check-detail/check-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'check/id', component: CheckDetailComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
