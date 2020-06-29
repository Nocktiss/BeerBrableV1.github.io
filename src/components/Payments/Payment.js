import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import PaymentForm from '../Payments/PaymentForm';
import pjson from '../../../package.json';

class Payment extends Component {
  render() {
    return (
      <div >
        <div >
          <StripeProvider apiKey={pjson.stripePublicKey}>
            <div className="Checkout">
              <Elements>
                <PaymentForm/>
              </Elements>
            </div>
          </StripeProvider>

        </div>
      </div>
    );
  }
}

export default Payment;
