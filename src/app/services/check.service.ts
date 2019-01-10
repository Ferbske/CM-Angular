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

  createPaymentCheck(amount: string, currency: string, time: number, paymentMethod: string) {
    this.http.post<any>(this.apiURL + '/paymentchecks', {amount, currency, time, paymentMethod}, this.headers)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  createMerchantCheck(countries: string[], category: string) {
    this.http.post<any>(this.apiURL + '/merchantchecks', {countries, category}, this.headers)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
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
