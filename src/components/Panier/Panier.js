import React from 'react';
import { Button, CardTitle, Col, Container, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

import ModalRegister from '../lib/Modals/ModalRegister/ModalRegister';
import './Panier.scss'

class CategorieDeProduits extends React.Component {
  state = {
    isShowing: false
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  render() {
    return (
      <div className="">
        <Col sm="12" className='col12PanierCol'>
          <div>
            <div>
              <CardTitle className='cardTitlePanier'>
                <Link to="BieresScreen">
                  <Button close aria-label="Cancel"></Button>
                </Link>
                Panier ()
        </CardTitle>
            </div>
          </div>
        </Col>
        <div>
        </div>

        <Container className='containerTitlePanierContainer'>
          <CardText className="NameBarPanier"> Selky </CardText>
        </Container>

        <Container className='pute1'>
          <Col sm="12" className='colCategoriePlanchesColCategorie'>
            <button className="buttonPaiement" onClick={this.openModalHandler}> Passer au paiement </button>
          </Col>
        </Container>

        <div>
            {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
            <ModalRegister
              className="modal"
              show={this.state.isShowing}
              close={this.closeModalHandler}>
            </ModalRegister>
          </div>

      </div>
    );
  };
}

export default CategorieDeProduits;
