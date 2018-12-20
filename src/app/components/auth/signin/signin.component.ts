import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService]
})

export class SigninComponent implements OnInit {
  @ViewChild('f') singInForm: NgForm;
  errorcode: number;

  constructor(private authenticationService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.errorcode = this.authenticationService.signinUser(this.singInForm.value.username, this.singInForm.value.password);
  }
}
