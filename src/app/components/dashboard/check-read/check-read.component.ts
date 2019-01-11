import { Component, OnInit } from '@angular/core';
import {CheckService} from '../../../services/check.service';
import {PaymentCheck} from './PaymentCheck';
import {CheckNameGenerator} from './CheckNameGenerator';
import {MerchantCheck} from './MerchantCheck';

@Component({
  selector: 'app-check-read',
  templateUrl: './check-read.component.html',
  styleUrls: ['./check-read.component.css'],
  providers: [CheckNameGenerator]
})
export class CheckReadComponent implements OnInit {
  paymentChecks: PaymentCheck[];
  merchantChecks: MerchantCheck[];

  constructor(private checkService: CheckService, private checkNameGenerator: CheckNameGenerator) { }

  ngOnInit() {
    this.checkService.getPaymentChecks()
      .subscribe(
        (response) => {
          this.paymentChecks = response.paymentChecks;

          for (let check of this.paymentChecks) {
            check.name = this.checkNameGenerator.generatePaymentCheckName(check.amount, check.currency, check.time, check.paymentMethod);
            check.type = 'payment';
          }
        },
        (error) => console.log(error)
      );

    this.checkService.getMerchantChecks()
      .subscribe(
        (response) => {
          this.merchantChecks = response.message;

          for (let check of this.merchantChecks) {
            check.name = this.checkNameGenerator.generateMerchantCheckName(check.countries, check.category);
            check.type = 'merchant';
          }
        },
        (error) => console.log(error)
      );
  }

}
