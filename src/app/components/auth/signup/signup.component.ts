import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})

export class SignupComponent implements OnInit {
  @ViewChild('f') singUpForm: NgForm;
  errorcode: number;

  constructor(private authenticationService: AuthService) { }

  ngOnInit() {
  }

  onRegister() {
    this.errorcode = this.authenticationService.signupUser(this.singUpForm.value.username, this.singUpForm.value.email, this.singUpForm.value.password);
  }

}
