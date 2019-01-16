import { Injectable } from '@angular/core';
import 'rxjs-compat/add/operator/map';
import {AuthService} from '../components/auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  private apiURL = 'https://a2-cm-csfwp-api.herokuapp.com/api';
  private headers = {headers: {'X-Access-Token': localStorage.getItem('Token')}};


  constructor(private http: HttpClient) { }

  createPaymentCheck(amount: string, currency: string, time: number, paymentMethod: string, checkName: string) {
    this.http.post<any>(this.apiURL + '/paymentchecks', {amount, currency, time, paymentMethod, checkName}, this.headers)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  createMerchantCheck(countries: string[], category: string, checkName: string) {
    this.http.post<any>(this.apiURL + '/merchantchecks', {countries, category, checkName}, this.headers)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  updatePaymentCheck(amount: string, currency: string, time: number, paymentMethod: string, checkName: string, checkId: string) {
    this.http.put<any>(this.apiURL + '/paymentchecks/' + checkId, {amount, currency, time, paymentMethod, checkName}, this.headers)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  updateMerchantCheck(countries: string[], category: string, checkName: string, checkId: string) {
    this.http.post<any>(this.apiURL + '/merchantchecks/' + checkId, {countries, category, checkName}, this.headers)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  getcheck(checkId: string) {
    return this.http.get<any>(this.apiURL + '/checks/' + checkId , this.headers);

  }

  getPaymentChecks() {
    return this.http.get<any>(this.apiURL + '/paymentchecks', this.headers);
  }

  deletePaymentCheck(checkId: string) {
    return this.http.delete(this.apiURL + '/paymentchecks/' + checkId, this.headers);
  }

  getMerchantChecks() {
    return this.http.get<any>(this.apiURL + '/merchantchecks', this.headers);
  }

  deleteMerchantCheck(checkId: string) {
    return this.http.delete(this.apiURL + '/merchantchecks/' + checkId, this.headers);
  }
}
