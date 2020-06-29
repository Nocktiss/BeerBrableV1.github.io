import React from 'react';
import { CardImg, Col, } from 'reactstrap';
import logoBrable from '../../../assets/logoBrable.png';
import brableSolo from '../../../assets/brableSolo.png';

import './LogoPaymentsPage.scss'


export default class LogoPaymentsPage extends React.Component {


  render() {

    return (
      <div>

        <div className="">
          <Col sm="12" className='logoLogoPaymentsPageLogo'>
            <CardImg className='logobrable1' src={logoBrable} alt="Logo" />
            <CardImg className='brableSolo' src={brableSolo} alt="Logo" />

          </Col>

        </div>
      </div>
    );
  }
};
