import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AuthService]
})

export class DashboardComponent implements OnInit {

  constructor(public authenticationService: AuthService) { }

  ngOnInit() {
  }
}
