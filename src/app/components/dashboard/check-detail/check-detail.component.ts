import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {CheckService} from '../../../services/check.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-check-detail',
  templateUrl: './check-detail.component.html',
  styleUrls: ['./check-detail.component.css']
})
export class CheckDetailComponent implements OnInit {
  check = undefined;

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
          },
          (error) => console.log(error)
        );
    }
  }

}
