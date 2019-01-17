import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {CheckService} from '../../../services/check.service';
import {ActivatedRoute} from '@angular/router';
import {Alert} from './Alert';

@Component({
  selector: 'app-check-detail',
  templateUrl: './check-detail.component.html',
  styleUrls: ['./check-detail.component.css']
})
export class CheckDetailComponent implements OnInit {
  check = undefined;
  alerts: Alert[];

  constructor(private _location: Location, private checkService: CheckService, private route: ActivatedRoute) { }

  backClicked() {
    this._location.back();
  }
  ngOnInit() {
    let param = this.route.snapshot.params['id'];

    if (!(param === undefined)) {
      this.checkService.getcheck(param)
        .subscribe(
          (response) => {
            this.check = response.check;
            this.getAlerts();
          },
          (error) => console.log(error)
        );
    }

  }

  getAlerts() {
    this.checkService.getAlerts(this.check._id)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }
}
