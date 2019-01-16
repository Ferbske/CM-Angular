// import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
// import 'rxjs-compat/add/operator/map';
// import { AuthService } from '../components/auth/auth.service';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AlertService {
//   url: 'https://a2-cm-csfwp-api.herokuapp.com/api/alerts/';
//
//   constructor(private http: Http, private authService: AuthService) { }
//
//   createAuthorizationHeader() {
//     const headers = new Headers();
//     headers.append('X-Access-Token', this.authService.getToken());
//     return headers;
//   }
//
//   // get Alerts from SQL
//   getAlerts() {
//     const headers = this.createAuthorizationHeader();
//     return this.http.get(this.url, {
//       headers: headers
//     })
//       .map(
//         (response) => {
//           return response.json().results;
//         }
//       );
//   }
//
//   // get a Alert from SQL
//   getAAlert(alertID: String) {
//     const headers = this.createAuthorizationHeader();
//     return this.http.get(this.url + alertID, {
//       headers: headers
//     })
//       .map(
//         (response) => {
//           return response.json().results;
//         }
//       );
//   }
// }
