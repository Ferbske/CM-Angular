export class MerchantCheck implements Check {
  _id: string;
  createdOn: string;
  checkName: string;
  type: string;
  countries: string[];
  category: string;


  constructor(_id: string, createdOn: string, name: string, countries: string[], category: string) {
    this._id = _id;
    this.createdOn = createdOn;
    this.checkName = name;
    this.countries = countries;
    this.category = category;
  }

}
