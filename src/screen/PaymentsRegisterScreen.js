import React, { Component } from 'react';

import Payment from '../components/Payments/Payment';
import LogoPaymentsPage from '../components/PaymentsPage/LogoPaymentsPage/LogoPaymentsPage';
import PaymentStripeLogo from '../components/PaymentsPage/LogoPaymentsPage/PaymentStripeLogo';
import PaymentsRegisterFooter from '../components/PaymentsPage/PaymentsFooter/PaymentsRegisterFooter';
import Header2 from '../components/lib/Header/Header2'

import "../components/PaymentsPage/FormikPhone/FormikPhone.scss"

class PaymentScreen extends Component {
	render() {
		return (
			<div>
				<div className="backgroundScreen">
					<Header2 text="Paiement" />
					<LogoPaymentsPage />
					<Payment />
					<PaymentStripeLogo />
          <PaymentsRegisterFooter />
				</div>
			</div>
		);
	}
}
export default PaymentScreen