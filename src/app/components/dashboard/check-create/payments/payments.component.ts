import { Component, OnInit } from '@angular/core';
import {InfoService} from '../../../../services/info.service';
import {PaymentMethod} from './PaymentMethod';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  paymentMethods: PaymentMethod[];

  constructor(private infoService: InfoService) {
    this.getPaymentMethods();
  }

  ngOnInit() {
  }

  getPaymentMethods() {
    this.infoService.getPaymentMethods()
      .subscribe((response) => {
          this.paymentMethods = response.paymentMethods;
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
