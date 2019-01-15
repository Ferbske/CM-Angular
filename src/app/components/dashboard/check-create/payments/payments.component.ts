import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {InfoService} from '../../../../services/info.service';
import {PaymentMethod} from './PaymentMethod';
import {NgForm} from '@angular/forms';
import {CheckService} from '../../../../services/check.service';
import {ActivatedRoute, Router, Data} from '@angular/router';
import {Currency} from './Currency';
import {PaymentCheck} from '../../check-read/PaymentCheck';
import {CheckNameGenerator} from '../../check-read/CheckNameGenerator';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
  providers: [CheckNameGenerator]
})
export class PaymentsComponent implements OnInit {
  @Input() check: PaymentCheck;
  @ViewChild('f') createCheckForm: NgForm;
  paymentMethods: PaymentMethod[];
  currencies: Currency[];
  currencyValue = 'PleaseSelect';
  paymentMethodValue = 'all';
  amountValue = '10000';
  timeValue = 0;
  checkNameValue = '';

  constructor(private infoService: InfoService, private checkService: CheckService, private route: ActivatedRoute, private router: Router, private checkNameGenerator: CheckNameGenerator) {

  }

  ngOnInit() {
    console.log('CHECK: ' + this.check);
    if (this.check !== undefined) {
      console.log(this.check);

      this.currencyValue = this.check.currency;
      this.amountValue = this.check.amount;
      this.timeValue = this.check.time;
      this.paymentMethodValue = this.check.paymentMethod;
      this.checkNameValue = this.check.checkName;
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
    if (this.check === undefined) {
      this.checkService.createPaymentCheck(this.createCheckForm.value.amount, this.createCheckForm.value.currency, this.createCheckForm.value.time, this.createCheckForm.value.paymentMethod, this.checkNameGenerator.generatePaymentCheckName(this.createCheckForm.value.amount, this.createCheckForm.value.currency, this.createCheckForm.value.time, this.createCheckForm.value.paymentMethod));
    } else if (this.check !== undefined) {
      console.log(this.check);
      this.checkService.updatePaymentCheck(this.createCheckForm.value.amount, this.createCheckForm.value.currency, this.createCheckForm.value.time, this.createCheckForm.value.paymentMethod, this.createCheckForm.value.name, this.check._id);
    };

    this.router.navigate(['/dashboard']);
  }


}
