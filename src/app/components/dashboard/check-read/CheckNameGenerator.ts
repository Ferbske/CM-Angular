import {Injectable} from '@angular/core';

@Injectable()
export class CheckNameGenerator {
    generatePaymentCheckName(amount: number, currency: String, time: number, paymentMethod: String) {
        let name: String;

        name = 'The total amount of the orders is above ' + amount.toString() + ' ' + currency + ' within ' + time + ' hours' + ' and the payment method is ' + paymentMethod;

        if (paymentMethod === null || paymentMethod === 'all' || paymentMethod === undefined) {
          name = 'The total amount of the orders is above ' +  amount.toString() + ' ' + currency + ' within ' + time + ' hours';
        }

        if (time === 0 || time === null) {
          name = 'The amount of the order is above ' +  amount.toString() + ' ' + currency + ' and the payment method is ' + paymentMethod;
        }

        if ((time === 0 || time === null) && (paymentMethod === null || paymentMethod === 'all' || paymentMethod === undefined)) {
          name = 'The amount of the order is above ' +  amount.toString() + ' ' + currency;
        }

        return name;
    }
}
