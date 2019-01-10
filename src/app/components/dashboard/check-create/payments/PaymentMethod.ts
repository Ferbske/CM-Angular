export class PaymentMethod {
  public PaymentMethod: String;
  public IsPrepaid: Boolean;
  public IsCreditCard: Boolean;

  constructor(PaymentMethod: String, IsPrepaid: Boolean, IsCreditCard: Boolean) {
    this.PaymentMethod = PaymentMethod;
    this.IsPrepaid = IsPrepaid;
    this.IsCreditCard = IsCreditCard;
  }
}
