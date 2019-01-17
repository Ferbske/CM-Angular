export class Alert {
  public id: string;
  public MerchantID: string;
  public BuyerName: string;
  public Amount: string;
  public Currency: string;

  constructor(id: string, MerchantID: string, BuyerName: string, Amount: string, Currency: string) {
    this.id = id;
    this.MerchantID = MerchantID;
    this.BuyerName = BuyerName;
    this.Amount = Amount;
    this.Currency = Currency;
  }
}
