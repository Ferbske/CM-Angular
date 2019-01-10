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


  constructor(private http: HttpClient, private authService: AuthService) { }

  createPaymentCheck(amount: String, currency: String, time: Number, paymentMethod: String) {
    this.http.post<any>(this.apiURL + '/paymentchecks', {amount, currency, time, paymentMethod}, this.headers)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  createMerchantCheck(countries: Array<String>, category: String) {
    this.http.post<any>(this.apiURL + '/merchantchecks', {countries, category}, this.headers)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  // // get Check from mongo
  // getChecks() {
  //   const headers = this.createAuthorizationHeader();
  //   return this.http.get(this.url, {
  //     headers: headers
  //   })
  //     .map(
  //       (response) => {
  //         return response.json().results;
  //       }
  //     );
  // }
  //
  // // get a Check from mongo
  // getACheck(checkID: String) {
  //   const headers = this.createAuthorizationHeader();
  //   return this.http.get(this.url + checkID, {
  //     headers: headers
  //   })
  //     .map(
  //       (response) => {
  //         return response.json().results;
  //       }
  //     );
  // }
  //
  // // add a check to mongo
  // addCheck(aa: number, bb: string, cc: string, dd: string) {
  //   const headers = this.createAuthorizationHeader();
  //   return this.http.post(this.url, {
  //     'aa': aa,
  //     'bb': bb,
  //     'cc': cc,
  //     'dd': dd
  //   }, {
  //     headers: headers
  //   });
  // }
  //
  // // edit a check to mongo
  // editCheck(aa: number, bb: string, cc: string, dd: string) {
  //   const headers = this.createAuthorizationHeader();
  //   return this.http.put(this.url, {
  //     'aa': aa,
  //     'bb': bb,
  //     'cc': cc,
  //     'dd': dd
  //   }, {
  //     headers: headers
  //   });
  // }
  //
  // // delete a check to mongo
  // deleteCheck(checkID: number) {
  //   const headers = this.createAuthorizationHeader();
  //   return this.http.delete(this.url + checkID, {
  //     headers: headers
  //   });
  // }
}
