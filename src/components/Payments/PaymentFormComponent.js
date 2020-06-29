import React, { Component } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from 'react-stripe-elements';
import queryString from 'query-string';
import Alert from '../../Alert';
import { Card, CardTitle, Container, CardText } from 'reactstrap';
import './Payment.scss'
import ClienInfo from '../Clients/ClientInfo'

class _Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alertMessage: '',
      alertStyle: ''
    };
  }

  handleSubmit(ev) {
    ev.preventDefault();

    this.props.stripe.createToken({ name:this.props.clientName })
      .then(result => {
        if (typeof (result.error) !== 'undefined') {
          this.setState({ error: result.error.message, success: '' });
        } else {
          this.stripeCreateCharge(result.token, this.props.totalPrice);
        }
      });
  } 

  stripeCreateCharge(token, amount) {
    const params = { token: token.id, amount: amount };
    const qParams = queryString.stringify(params);
    const url = ['/api', qParams].join('?');

    fetch(url)
      .then(response => response.json())
      .then(val => {
        if (val.ok) {
          return val.message;
        } else {
          throw val.message;
        }
      })
      .then(success => this.setState({ alertMessage: success, alertStyle: 'success' }))
      .catch(error => this.setState({ alertMessage: error, alertStyle: 'danger' }));
  }

  render() {
    return (
      <div>
        <Container onSubmit={(ev) => this.handleSubmit(ev)}>
          <CardTitle className='cardTitlePaymentFormComponent'>Entre ton moyen de paiement</CardTitle>

          <Card className="CardPaymenntFormComponenentCard">
            <form >

              <Alert msg={this.state.alertMessage} style={this.state.alertStyle} />

              <div className="col12PaymentFormComponent">
                <div className="col8PaymentFormComponent">
                <CardText className=''>Numéro de Carte</CardText>
                <CardNumberElement className="cardNumberElementPaymentFormComponent" />
                </div>

                <div className="col4PaymentFormComponent">
                <CardText className=''> Expiration</CardText>
                <CardExpiryElement className="cardExpiryElementPaymentFormComponent" />
                </div>
              </div>
              <div className="col12PaymentFormComponent">
                <div className="col8PaymentFormComponent">

                <ClienInfo />
                
                </div>

                <div className="col4PaymentFormComponent">

                <CardText className=''>Cryptogramme</CardText>
                <CardCVCElement className="cardCVCElementPaymentFormComponent" />
                </div>
              </div>

              {/* <div className="col12PaymentFormComponent">
              <div className="col8PaymentFormComponent">   
                <ClienInfo />
                </div>
                <div className="col4PaymentFormComponent">
                  <CardText className=''>Cryptogramme</CardText>
                    <CardCVCElement className="cardCVCElementPaymentFormComponent" />
                </div>
              </div> */}
<div className="buttonPayPaymentFormComponenent"> 
              <button type="submit" className="btn btn-primary">Pay!</button>
              </div>
            </form>
          </Card>
        </Container>
      </div>
    );
  }


}



export default  injectStripe (_Form)



