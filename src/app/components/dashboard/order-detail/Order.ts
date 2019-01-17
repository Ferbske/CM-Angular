export class Order {
  Amount: string;
  BuyerBillingCountry: string;
  BuyerName: string;
  BuyerShippingCountry: string;
  Currency: string;
  Description: string;
  ID: string;
  MerchantCreatedOrderOn: string;
  MerchantID: string;
  OrderCreatedOn: string;
  Reference: string;
  City: string;
  Country: string;
  CreditCardBin: string;
  MerchantAmount: string;
  MerchantCategoryCode: string;
  Name: string;
  OrganizationID: string;
  PaymentCreatedOn: string;
  PaymentID: string;
  PaymentMethod: string;
  Status: string;
  StatusDetails: string;


  constructor(ID: string, Amount: string, BuyerBillingCountry: string, BuyerName: string, BuyerShippingCountry: string, Currency: string, Description: string, MerchantCreatedOrderOn: string, MerchantID: string, OrderCreatedOn: string, Reference: string
  , City: string, Country: string, CreditCardBin: string, MerchantAmount: string, MerchantCategoryCode: string, Name: string, OrganizationID: string, PaymentCreatedOn: string, PaymentID: string, PaymentMethod: string, Status: string, StatusDetails: string) {
    this.ID = ID;
    this.Amount = Amount;
    this.BuyerBillingCountry = BuyerBillingCountry;
    this.BuyerName = BuyerName;
    this.BuyerShippingCountry = BuyerShippingCountry;
    this.Currency = Currency;
    this.Description = Description;
    this.MerchantCreatedOrderOn = MerchantCreatedOrderOn;
    this.MerchantID = MerchantID;
    this.OrderCreatedOn = OrderCreatedOn;
    this.Reference = Reference;
    this.City = City;
    this.Country = Country;
    this.CreditCardBin = CreditCardBin;
    this.MerchantAmount = MerchantAmount;
    this.MerchantCategoryCode = MerchantCategoryCode;
    this.Name = Name;
    this.OrganizationID = OrganizationID;
    this.PaymentCreatedOn = PaymentCreatedOn;
    this.PaymentID = PaymentID;
    this.PaymentMethod = PaymentMethod;
    this.Status = status;
    this.StatusDetails = StatusDetails;
  }
}
