import {CheckNameGenerator} from './CheckNameGenerator';

export class PaymentCheck implements Check {
  _id: String;
  createdOn: String;
  name: String;
  amount: number;
  currency: String;
  paymentMethod: String;
  time: number;

  constructor(_id: String, createdOn: String, name: String, amount: number, currency: String, paymentMethod: String, time: number, private checkNameGenerator: CheckNameGenerator) {
    this._id = _id;
    this.createdOn = createdOn;
    this.name = name;
    this.amount = amount;
    this.currency = currency;
    this.paymentMethod = paymentMethod;
    this.time = time;
  }

}
