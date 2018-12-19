import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()

export class AuthService {
  url: String = 'https://a2-cm-csfwp-api.herokuapp.com/api';

  constructor(private http: Http, private router: Router) {
  }

  signupUser(username: string, email: string, password: string) {
    this.http.post(this.url + '/register',
      {
        username: username,
        email: email,
        password: password
      })
      .subscribe(
        (response) => {
          this.router.navigate(['/signin']);
          return response.status;
        },
        (error) => {
          console.log(error);
          return error.status;
        }
      );
    return 409;
  }

  signinUser(username: string, password: string) {
    this.http.post(this.url + '/login',
      {
        username: username,
        password: password
      })
      .subscribe(
        (response) => {
          this.router.navigate(['/dashboard']);
          localStorage.setItem('Token', response.json().token);
          return response.json().response.statusCode;
        },
        (error) => {
          console.log(error);
          return error.status;
        }
      );
    return 401;
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
