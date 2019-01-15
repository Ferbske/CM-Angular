import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService]
})

export class SigninComponent implements OnInit {
  @ViewChild('f') singInForm: NgForm;
  errorcode: number;

  constructor(private authenticationService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.authenticationService.signinUser(this.singInForm.value.username, this.singInForm.value.password)
      .subscribe(
        (response) => {
          this.router.navigate(['/dashboard']);
          localStorage.setItem('Token', response.json().token);
          this.errorcode = response.json().response.statusCode;
        },
        (error) => {
          console.log(error);
          this.errorcode = error.status;
        }
      );
  }
}
