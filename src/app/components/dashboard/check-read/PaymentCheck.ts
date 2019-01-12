export class PaymentCheck implements Check {
  _id: string;
  createdOn: string;
  name: string;
  type: string;
  amount: string;
  currency: string;
  paymentMethod: string;
  time: number;

  constructor(_id: string, createdOn: string, name: string, amount: string, currency: string, paymentMethod: string, time: number) {
    this._id = _id;
    this.createdOn = createdOn;
    this.name = name;
    this.amount = amount;
    this.currency = currency;
    this.paymentMethod = paymentMethod;
    this.time = time;
  }

}
