import React from 'react';
import {Button, CardTitle,Col, Container,} from 'reactstrap';

import './CocktailVin.scss'
import { Link } from 'react-router-dom';


import CocktailsVin from '../../../Api/CocktailsVin.json'
import CocktailVinProduct from '../Planches/PlanchesProduct'


export default class CategorieDeProduits extends React.Component {


  render() {

    return (
      <div>
       

        <div>   
              
        {CocktailsVin.map((data) => <CocktailVinProduct {...data} />)} 
      </div>
      <div>
    
           <Link to="/PaymentScreen">
      <Container className='pute1'>  
      <Col sm="12" className='colCategoriePlanchesColCategorie'>
      <Button className="buttonPasserAuPaiementButtonPlanches" >
      <CardTitle className='pute'>VOIR LE PANIER </CardTitle>
           <CardTitle className='pute'>{this.props.totalPrice} €  </CardTitle>
              </Button>
              </Col>
    
               </Container>
              </Link>
         </div>   
      </div>
    );
  }
};
