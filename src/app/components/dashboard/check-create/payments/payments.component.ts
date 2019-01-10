import {Component, OnInit, ViewChild} from '@angular/core';
import {InfoService} from '../../../../services/info.service';
import {PaymentMethod} from './PaymentMethod';
import {NgForm} from '@angular/forms';
import {CheckService} from '../../../../services/check.service';
import {ActivatedRoute, Router, Data} from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  @ViewChild('f') createCheckForm: NgForm;
  paymentMethods: PaymentMethod[];

  constructor(private infoService: InfoService, private checkService: CheckService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.paymentMethods = data['paymentMethod'].items;
        }
      );
  }

  onCreate() {
    console.log("Amount: " + this.createCheckForm.value.amount + " Currency: " + "EUR" + " Time: " + this.createCheckForm.value.time + " Paymentmethod: " + this.createCheckForm.value.paymentMethod);
    this.checkService.createPaymentCheck(this.createCheckForm.value.amount, "EUR", this.createCheckForm.value.time, this.createCheckForm.value.paymentMethod);
    this.router.navigate(['/dashboard']);
  }


}
