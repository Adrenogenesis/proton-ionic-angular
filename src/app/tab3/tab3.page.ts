import { Component } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    paymentAmount = '2.99';
    currency = 'EUR';
    currencyIcon = '€';
    // tslint:disable-next-line: variable-name
    stripe_key = '';
    cardDetails: any = {};

  constructor(private stripe: Stripe, private http: HttpClient) {}

  payWithStripe() {
    this.stripe.setPublishableKey(this.stripe_key);

    this.cardDetails = {
      number: '4242424242424242',
      expMonth: 12,
      expYear: 2020,
      cvc: '220'
    };

    this.stripe.createCardToken(this.cardDetails)
      .then(token => {
        console.log(token);
        this.makePayment(token.id);
      })
      .catch(error => console.error(error));
  }

  makePayment(token) {
    this.http
      .post('https://us-central1-ionic-4-firebase-crud-de-55a43.cloudfunctions.net/payWithStripe', {
        token: token.id
      })
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}


