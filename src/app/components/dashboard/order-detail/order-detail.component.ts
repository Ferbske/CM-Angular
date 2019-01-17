import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {CheckService} from '../../../services/check.service';
import {ActivatedRoute} from '@angular/router';
import {Order} from './Order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: Order;

  constructor(private _location: Location, private checkService: CheckService,private route: ActivatedRoute) { }

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    let param = this.route.snapshot.params['id'];

    if (!(param === undefined)) {
      this.checkService.getOrder(param)
        .subscribe(
          (response) => {
            console.log(response);
            this.order = response.items[0];
          },
          (error) => console.log(error)
        );
    }
  }

}
