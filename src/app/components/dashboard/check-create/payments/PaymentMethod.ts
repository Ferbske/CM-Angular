export class PaymentMethod {
  public PaymentMethod: string;
  public IsPrepaid: boolean;
  public IsCreditCard: boolean;

  constructor(PaymentMethod: string, IsPrepaid: boolean, IsCreditCard: boolean) {
    this.PaymentMethod = PaymentMethod;
    this.IsPrepaid = IsPrepaid;
    this.IsCreditCard = IsCreditCard;
  }
}
