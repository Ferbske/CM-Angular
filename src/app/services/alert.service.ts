import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs-compat/add/operator/map';
import { authService } from '../components/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  url: String = 'https://a2-cm-csfwp-api.herokuapp.com/api/alerts/';

  constructor(private http: Http) { }

  createAuthorizationHeader() {
    const headers = new Headers();
    headers.append('X-Access-Token', authService.getToken());
    return headers;
  }

  // get Alerts from SQL
  getAlerts() {
    const headers = this.createAuthorizationHeader();
    return this.http.get(this.url, {
      headers: headers
    })
      .map(
        (response) => {
          return response.json().results;
        }
      );
  }

  // get a Alert from SQL
  getAAlert(alertID: int) {
    const headers = this.createAuthorizationHeader();
    return this.http.get(this.url + alertID, {
      headers: headers
    })
      .map(
        (response) => {
          return response.json().results;
        }
      );
  }
}
