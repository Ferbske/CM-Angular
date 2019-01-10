export class MerchantCheck implements Check {
  _id: string;
  createdOn: string;
  name: string;
  type: string;
  countries: string[];
  category: string;


  constructor(_id: string, createdOn: string, name: string, countries: string[], category: string) {
    this._id = _id;
    this.createdOn = createdOn;
    this.name = name;
    this.countries = countries;
    this.category = category;
  }

}
