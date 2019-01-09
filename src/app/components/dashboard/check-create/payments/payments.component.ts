import {Component, OnInit, ViewChild} from '@angular/core';
import {InfoService} from '../../../../services/info.service';
import {PaymentMethod} from './PaymentMethod';
import {NgForm} from '@angular/forms';
import {CheckService} from '../../../../services/check.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  @ViewChild('f') createCheckForm: NgForm;
  paymentMethods: PaymentMethod[];

  constructor(private infoService: InfoService, private checkService: CheckService) {
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

  onCreate() {
    this.checkService.createPaymentCheck(this.createCheckForm.value.amount, "EUR", this.createCheckForm.value.time, this.createCheckForm.value.paymentMethod)
  }


}
