import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-check-detail',
  templateUrl: './check-detail.component.html',
  styleUrls: ['./check-detail.component.css']
})
export class CheckDetailComponent implements OnInit {

  constructor(private _location: Location) { }

  backClicked() {
    this._location.back();
  }
  ngOnInit() {
  }

}
