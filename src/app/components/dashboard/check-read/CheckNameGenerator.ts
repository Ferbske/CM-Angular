import {Injectable} from '@angular/core';

@Injectable()
export class CheckNameGenerator {
    generatePaymentCheckName(amount: string, currency: string, time: number, paymentMethod: string) {
        let name: string;

        console.log(amount);

        name = 'The total amount of the orders is above ' + amount + ' ' + currency + ' within ' + time + ' hours' + ' and the payment method is ' + paymentMethod;

        if (paymentMethod === null || paymentMethod === 'all' || paymentMethod === undefined) {
          name = 'The total amount of the orders is above ' +  amount + ' ' + currency + ' within ' + time + ' hours';
        }

        if (time === 0 || time === null) {
          name = 'The amount of the order is above ' +  amount + ' ' + currency + ' and the payment method is ' + paymentMethod;
        }

        if ((time === 0 || time === null) && (paymentMethod === null || paymentMethod === 'all' || paymentMethod === undefined)) {
          name = 'The amount of the order is above ' +  amount.toString() + ' ' + currency;
        }

        return name;
    }

    generateMerchantCheckName(countries: string[], category: string) {
      let name: string;

      name = 'The merchant is from ' + countries.toString() + ' and has the ' + category + ' category';

      if (countries === null || countries[0] === 'all' || countries === undefined) {
        name = 'The merchant has the ' + category + ' category';
      }

      if (category === null || category === 'all' || category === undefined) {
        name = 'The merchant is from ' + countries.toString();
      }

      return name;
    }
}
