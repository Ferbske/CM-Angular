export class MerchantCheck implements Check {
  _id: string;
  createdOn: string;
  checkName: string;
  type: string;
  countries: string[];
  category: string;


  constructor(_id: string, createdOn: string, checkName: string, countries: string[], category: string) {
    this._id = _id;
    this.createdOn = createdOn;
    this.checkName = checkName;
    this.countries = countries;
    this.category = category;
  }

}
