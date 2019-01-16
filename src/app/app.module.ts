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
import { CheckCreateComponent } from './components/dashboard/check-create/check-create.component';
import { CheckReadComponent } from './components/dashboard/check-read/check-read.component';
import { CheckDetailComponent } from './components/dashboard/check-detail/check-detail.component';
import { OrderDetailComponent } from './components/dashboard/order-detail/order-detail.component';
import { PaymentsComponent } from './components/dashboard/check-create/payments/payments.component';
import { MerchantsComponent } from './components/dashboard/check-create/merchants/merchants.component';
import {InfoService} from './services/info.service';
import {HttpClientModule} from '@angular/common/http';
import {ResolvePaymentMethodService} from './services/resolve.paymentMethod.service';
import {ResolveCountriesService} from './services/resolve.countries.service';
import {ResolveCategoriesService} from './services/resolve.categories.service';
import {ResolveCurrenciesService} from './services/resolve.currencies.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    NavigationComponent,
    DeleteModalComponent,
    CheckCreateComponent,
    CheckReadComponent,
    CheckDetailComponent,
    OrderDetailComponent,
    PaymentsComponent,
    MerchantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [AuthService, AuthGuardService, InfoService, ResolvePaymentMethodService, ResolveCountriesService, ResolveCategoriesService, ResolveCurrenciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
