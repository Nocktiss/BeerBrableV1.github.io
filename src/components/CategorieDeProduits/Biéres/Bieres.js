
import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';


import { Link } from 'react-router-dom';
import { Button, CardTitle, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup, } from 'reactstrap';

import BiereJson from '../../../Api/BiereJson.json'

import './Biéres.scss'
import BieresProduct from './BieresProduct';

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

    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;

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



            </Button>

            <Modal className="openModalButtomButtomModalOpen" isOpen={this.state.modal} toggle={this.toggle} external={externalCloseBtn}>


              <ModalHeader className="headerModalTitreHeaderModal">Combien t'en prends ?</ModalHeader>
              <ModalBody className="modalBodyQuantiterModalBody">

                <InputGroup className="inputGroupQuantiterInputGroup">
                  <Button onClick={() => this.props.clickMinus1()} className="buttonProduct" type="button"> -  </Button>
                  <Input type="text" className="formControlProduct" value={this.props.quantity2} readOnly />
                  <Button onClick={() => this.props.clickPlus1()} className="buttonProductbutton" type="button">+</Button>
                </InputGroup>

              </ModalBody>
              <ModalFooter className='footerModalPlanchesModalFooter'>
                <Button className="buttonAddPanierButtonQuandtiter" onClick={this.toggle}>AJOUTER AU PANIER</Button>{' '}

              </ModalFooter>
            </Modal>
          </div>
          <div>
            {BiereJson.map((data) => <BieresProduct {...data} />)}
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
