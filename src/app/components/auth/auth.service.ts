import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()

export class AuthService {
  url: String = 'https://a2-cm-csfwp-api.herokuapp.com/api';

  constructor(private http: Http, private router: Router) {
  }

  signupUser(username: string, email: string, password: string) {
    return this.http.post(this.url + '/register',
      {
        username: username,
        email: email,
        password: password
      });
  }

  signinUser(username: string, password: string) {
    return this.http.post(this.url + '/login',
      {
        username: username,
        password: password
      });
  }

  logout() {
    localStorage.removeItem('Token');
    this.router.navigate(['/signin']);
  }

  getToken() {
    return localStorage.getItem('Token');
  }

  isAuthenticated() {
    return localStorage.getItem('Token') != null;
  }
}
