import React from 'react';
import { Button, CardTitle, Col, Container,} from 'reactstrap';
import { StickyContainer, Sticky } from 'react-sticky';

import './Soft.scss'
import { Link } from 'react-router-dom';
import SoftProduct from './SoftProduct';
import SoftDrink from '../../../Api/SoftDrink.json'


export default class CategorieDeProduits extends React.Component {


  render() {

    return (
      <div>
        <StickyContainer>
          {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}
          <Sticky>
            {({
              style,

              // the following are also available but unused in this example
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
            }) => (
                <header style={style}>
                  <div className="testplanchetest">
                 
                  
                  </div>
                </header>
              )}
          </Sticky>
          <div>


          {SoftDrink.map((data) => <SoftProduct {...data} />)}   


            <div className='footerSlickMarginbottom'>

            </div>
          </div>
        </StickyContainer>
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
    );
  }
};
