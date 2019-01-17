export class Alert {
  public ID: string;
  public MerchantID: string;
  public BuyerName: string;
  public Amount: string;
  public Currency: string;

  constructor(ID: string, MerchantID: string, BuyerName: string, Amount: string, Currency: string) {
    this.ID = ID;
    this.MerchantID = MerchantID;
    this.BuyerName = BuyerName;
    this.Amount = Amount;
    this.Currency = Currency;
  }
}
