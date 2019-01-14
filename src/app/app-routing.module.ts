import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignupComponent} from './components/auth/signup/signup.component';
import {SigninComponent} from './components/auth/signin/signin.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuardService} from './components/auth/auth-guard.service';
import {CheckDetailComponent} from './components/dashboard/check-detail/check-detail.component';
import {OrderDetailComponent} from './components/dashboard/order-detail/order-detail.component';
import {CheckCreateComponent} from './components/dashboard/check-create/check-create.component';
import {ResolvePaymentMethodService} from './services/resolve.paymentMethod.service';
import {ResolveCountriesService} from './services/resolve.countries.service';
import {ResolveCategoriesService} from './services/resolve.categories.service';
import {ResolveCurrenciesService} from './services/resolve.currencies.service';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'check', component: CheckCreateComponent, canActivate: [AuthGuardService], resolve: {paymentMethod: ResolvePaymentMethodService, countries: ResolveCountriesService, categories: ResolveCategoriesService, currencies: ResolveCurrenciesService}},
  { path: 'check/id', component: CheckDetailComponent, canActivate: [AuthGuardService] },
  { path: 'order/id', component: OrderDetailComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
