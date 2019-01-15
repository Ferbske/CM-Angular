export class PaymentCheck implements Check {
  _id: string;
  createdOn: string;
  checkName: string;
  type: string;
  amount: string;
  currency: string;
  paymentMethod: string;
  time: number;

  constructor(_id: string, createdOn: string, checkName: string, amount: string, currency: string, paymentMethod: string, time: number) {
    this._id = _id;
    this.createdOn = createdOn;
    this.checkName = checkName;
    this.amount = amount;
    this.currency = currency;
    this.paymentMethod = paymentMethod;
    this.time = time;
  }

}
