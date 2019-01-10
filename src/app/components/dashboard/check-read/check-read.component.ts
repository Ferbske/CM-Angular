import { Component, OnInit } from '@angular/core';
import {CheckService} from '../../../services/check.service';
import {PaymentCheck} from './PaymentCheck';
import {CheckNameGenerator} from './CheckNameGenerator';

@Component({
  selector: 'app-check-read',
  templateUrl: './check-read.component.html',
  styleUrls: ['./check-read.component.css'],
  providers: [CheckNameGenerator]
})
export class CheckReadComponent implements OnInit {
  paymentChecks: PaymentCheck[];

  constructor(private checkService: CheckService, private checkNameGenerator: CheckNameGenerator) { }

  ngOnInit() {
    this.checkService.getPaymentChecks()
      .subscribe(
        (response) => {
          this.paymentChecks = response.message;

          for (let check of this.paymentChecks) {
            check.name = this.checkNameGenerator.generatePaymentCheckName(check.amount, check.currency, check.time, check.paymentMethod);
          }
        },
        (error) => console.log(error)
      );
  }

}
