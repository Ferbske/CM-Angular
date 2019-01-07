import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs-compat/add/operator/map';
import {authService} from '../components/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckServiceService {
  url: String = 'https://a2-cm-csfwp-api.herokuapp.com/api/checks/';

  constructor(private http: Http) { }

  createAuthorizationHeader() {
    const headers = new Headers();
    headers.append('X-Access-Token', authService.getToken());
    return headers;
  }

  // get Check from mongo
  getChecks() {
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

  // get a Check from mongo
  getACheck(checkID: int) {
    const headers = this.createAuthorizationHeader();
    return this.http.get(this.url + checkID, {
      headers: headers
    })
      .map(
        (response) => {
          return response.json().results;
        }
      );
  }

  // add a check to mongo
  addCheck(aa: number, bb: string, cc: string, dd: string) {
    const headers = this.createAuthorizationHeader();
    return this.http.post(this.url, {
      'aa': aa,
      'bb': bb,
      'cc': cc,
      'dd': dd
    }, {
      headers: headers
    });
  }

  // edit a check to mongo
  editCheck(aa: number, bb: string, cc: string, dd: string) {
    const headers = this.createAuthorizationHeader();
    return this.http.put(this.url, {
      'aa': aa,
      'bb': bb,
      'cc': cc,
      'dd': dd
    }, {
      headers: headers
    });
  }

  // delete a check to mongo
  deleteCheck(checkID: number) {
    const headers = this.createAuthorizationHeader();
    return this.http.delete(this.url + checkID, {
      headers: headers
    });
  }
}
