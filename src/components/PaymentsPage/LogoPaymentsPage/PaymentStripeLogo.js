import React from 'react';
import { CardImg, Col, } from 'reactstrap';

import paymentStripeLogo from '../../../assets/paymentStripeLogo.png'
import './PaymentStripeLogo.scss'


export default class PaymentStripeLogo extends React.Component {


  render() {
    return (
      <div>
        <div className="">
          <Col sm="12" className='logoPaymentStripeLogoLogo'>
            <CardImg className='paymentStripeLogo' src={paymentStripeLogo} alt="Logo" />
          </Col>
        </div>
      </div>
    );
  }
};
