import React from 'react';
import { Button, Col, Container,Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup,} from 'reactstrap';
import { StickyContainer, Sticky } from 'react-sticky';

import { Link } from 'react-router-dom';

import PlanchesJson from '../../../Api/PlanchesJson.json'
import PlanchesProduct from '../Planches/PlanchesProduct'
import ButtonNav from '../../lib/Button/ButtonNav'


import '../../lib/Modals/ModalsQuantity/ModalsQuantity.scss'
import './Planches.scss'

export default class Planches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {

    const externalCloseBtn = <button className="crossModal" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;

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
        <Button className="buttonModalButtonDisplayModal" onClick={this.toggle}>{this.props.buttonLabel}
        
        {PlanchesJson.map((data) => <PlanchesProduct {...data} />)}     
        </Button>     

        <Modal isOpen={this.state.modal} toggle={this.toggle}  external={externalCloseBtn}>

         
          <ModalHeader className="titleModal">Combirends ?</ModalHeader>


          <ModalBody className="modalBodyQuantity">

          <InputGroup className="inputGroupQuantiterInputGroup">

            <Button onClick={() => this.props.clickMinus()} className="buttonProductLess" type="button">-</Button>

            <Input type="text" className="formControlProduct" value={this.props.quantity2} readOnly />


            <Button onClick={() => this.props.clickPlus()} className="buttonProductbutton" type="button">+</Button>


          </InputGroup>   

          </ModalBody>
          
          <ModalFooter className='footerModalPlanchesModalFooter'>
          <Button className="buttonModalQuantity"onClick={this.toggle}>AJOUTER AU PANIER</Button>{' '}
      
          </ModalFooter>
        </Modal>
      </div>
      </StickyContainer>

      <Link to="/CartScreen">
      
      <Container className='pute1'>  
      <Col sm="12">
      
      <ButtonNav text="VOIR LE PANIER" price={this.props.totalPrice} euro='€'/> 

    
              </Col>
               </Container>
              </Link>

      </div>

    );
  }
}; 
