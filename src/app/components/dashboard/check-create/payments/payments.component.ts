import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {InfoService} from '../../../../services/info.service';
import {PaymentMethod} from './PaymentMethod';
import {NgForm} from '@angular/forms';
import {CheckService} from '../../../../services/check.service';
import {ActivatedRoute, Router, Data} from '@angular/router';
import {Currency} from './Currency';
import {PaymentCheck} from '../../check-read/PaymentCheck';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  @Input() check: PaymentCheck;
  @ViewChild('f') createCheckForm: NgForm;
  paymentMethods: PaymentMethod[];
  currencies: Currency[];
  currencyValue = 'PleaseSelect';
  paymentMethodValue = 'all';
  amountValue;
  timeValue = 0;

  constructor(private infoService: InfoService, private checkService: CheckService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    console.log(this.check);
    if (!(this.check === undefined)) {
      this.currencyValue = this.check.currency;
      this.amountValue = this.check.amount;
      this.timeValue = this.check.time;
      this.paymentMethodValue = this.check.paymentMethod;
      console.log('amount: ' + this.amountValue + ', time: ' + this.timeValue);
    }

    this.route.data
      .subscribe(
        (data: Data) => {
          this.paymentMethods = data['paymentMethod'].items;
        }
      );

    this.route.data
      .subscribe(
        (data: Data) => {
          this.currencies = data['currencies'].items;
        }
      );
  }

  onCreate() {
    console.log("Amount: " + this.createCheckForm.value.amount + " Currency: " + this.createCheckForm.value.currency + " Time: " + this.createCheckForm.value.time + " Paymentmethod: " + this.createCheckForm.value.paymentMethod);
    this.checkService.createPaymentCheck(this.createCheckForm.value.amount, this.createCheckForm.value.currency, this.createCheckForm.value.time, this.createCheckForm.value.paymentMethod);
    this.router.navigate(['/dashboard']);
  }


}
