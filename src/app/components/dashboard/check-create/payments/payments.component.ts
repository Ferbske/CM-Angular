import {Component, OnInit, ViewChild} from '@angular/core';
import {InfoService} from '../../../../services/info.service';
import {PaymentMethod} from './PaymentMethod';
import {NgForm} from '@angular/forms';
import {CheckService} from '../../../../services/check.service';
import {ActivatedRoute, Router, Data} from '@angular/router';
import {Currency} from './Currency';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  @ViewChild('f') createCheckForm: NgForm;
  paymentMethods: PaymentMethod[];
  currencies: Currency[];

  constructor(private infoService: InfoService, private checkService: CheckService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
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
