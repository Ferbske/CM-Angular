export class Currency {
  public CurrencyCode: string;
  public Description: string;

  constructor(CurrencyCode: string, Description: string) {
    this.CurrencyCode = CurrencyCode;
    this.Description = Description;
  }
}
