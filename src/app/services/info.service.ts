import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class InfoService {
  private apiURL = 'https://a2-cm-csfwp-api.herokuapp.com/api';
  private headers = {headers: {'X-Access-Token': localStorage.getItem('Token')}};

  constructor(private http: HttpClient, private router: Router) {
  }

  getPaymentMethods() {
    return this.http.get<any>(this.apiURL + '/paymentMethods', this.headers);
  }

  getCountries() {
    return this.http.get<any>(this.apiURL + '/countries', this.headers);
  }

  getMerchantCategories() {
    return this.http.get<any>(this.apiURL + '/merchantCategories', this.headers);
  }

  getCurrencies() {
    return this.http.get<any>(this.apiURL + '/currencies', this.headers);
  }
}
