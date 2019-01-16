import {Injectable} from '@angular/core';

@Injectable()
export class CheckNameGenerator {
  generatePaymentCheckName(amount: number, currency: string, time: number, paymentMethod: string) {
    let name: string;

    name = 'The total amount of the orders is above ' + amount + ' ' + currency + ' within ' + time + ' hours' + ' and the payment method is ' + paymentMethod;

    if (paymentMethod === null || paymentMethod === 'all' || paymentMethod === undefined) {
      name = 'The total amount of the orders is above ' + amount + ' ' + currency + ' within ' + time + ' hours';
    }

    if (time === 0 || time === null) {
      name = 'The amount of the order is above ' + amount + ' ' + currency + ' and the payment method is ' + paymentMethod;
    }

    if ((time === 0 || time === null) && (paymentMethod === null || paymentMethod === 'all' || paymentMethod === undefined)) {
      name = 'The amount of the order is above ' + amount + ' ' + currency;
    }

    if ((amount === null || amount === undefined || amount === 0) || (currency === null || currency === undefined || currency === 'PleaseSelect')) {
      name = undefined;
    }

    return name;
  }

  generateMerchantCheckName(countries: string, category: string) {
    let name: string;

    name = 'The merchant is from ' + countries + ' and has the ' + category + ' category';

    if (countries === null || countries === 'all' || countries === undefined) {
      name = 'The merchant has the ' + category + ' category';
    }

    if (category === null || category === 'all' || category === undefined) {
      name = 'The merchant is from ' + countries;
    }

    if ((category === null || category === 'all' || category === undefined) && (countries === null || countries === 'all' || countries === undefined)){
      name = undefined;
    }

    return name;
  }
}
