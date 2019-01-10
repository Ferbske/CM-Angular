import {Injectable} from '@angular/core';
import {PaymentCheck} from '../components/dashboard/check-read/PaymentCheck';

@Injectable()
export class TransferCheckService {
  paymentCheck: PaymentCheck;

  setPaymentCheck(paymentCheck: PaymentCheck) {
    this.paymentCheck = paymentCheck;
  }

  getPaymentCheck() {
    return this.paymentCheck;
  }
}

