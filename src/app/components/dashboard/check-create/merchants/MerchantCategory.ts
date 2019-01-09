export class Country {
  public Mcc: String;
  public Name: String;


  constructor(IsoCode: String, Name: String) {
    this.IsoCode = IsoCode;
    this.Name = Name;
  }
}
