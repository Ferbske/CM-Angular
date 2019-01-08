import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-check-create',
  templateUrl: './check-create.component.html',
  styleUrls: ['./check-create.component.css']
})
export class CheckCreateComponent implements OnInit {
  value = "Payments";

  constructor(private _location: Location) { }

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
  }

}
