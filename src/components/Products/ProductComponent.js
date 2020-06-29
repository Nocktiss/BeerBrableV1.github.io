import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardTitle, Container, Col, CardBody, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

import mojito from '../../assets/mojito.jpg'

import './Product.scss'

class ProductComponent extends Component {
  render() {
    return (
      <Container>
      <Col className='colProductComponent' xl="6" lg="6">
        <Card>
          <CardImg top width="100%"  height="200px" style={{ backgroundImage: `url(${mojito}` }} alt="" />
          <CardBody className='cardBodyProduct'>
            <CardTitle>Hype PA (5,3°)</CardTitle>
            <CardText>Une bière houblonnée, fruité et légèrement amère</CardText>
          </CardBody>
        </Card>
        <div>
          <CardText className="formControlProduct">Combien t'en veux ?</CardText>
         
         
          <InputGroup>
            <Button onClick={() => this.props.clickMinus1()} className="buttonProduct" type="button"> -  </Button>
            <Input type="text" className="formControlProduct" value={this.props.quantity2} readOnly />
            <Button onClick={() => this.props.clickPlus1()} className="buttonProductbutton" type="button">+</Button>
          </InputGroup>






          
          <br />
        </div>
        <div>
          <InputGroup >
            <Input className="inputGroupProduct" type="text" aria-describedby="sizing-addon2" value={this.props.beerbeerbeer} readOnly />
            <InputGroupAddon addonType="prepend">€</InputGroupAddon>
          </InputGroup>
        </div>
  
        <div>   <InputGroup >
            <Input className="inputGroupProduct" type="text" aria-describedby="sizing-addon2" value={this.props.petitTotal} readOnly />
            <InputGroupAddon addonType="prepend">€</InputGroupAddon>
          </InputGroup></div>
        <div>
        <Link to="/PaymentScreen">
          <Button outline color="success">Ajouter</Button>
          </Link>
          <Link to="/PanierScreen">  
          <Button outline color="success">Panier</Button>
          </Link>
        </div>
      </Col>
      <Col className='colProductComponent' xl="6" lg="6">
        <Card>
          <CardImg top width="100%"  height="200px" style={{ backgroundImage: `url(${mojito}` }} alt="" />
          <CardBody className='cardBodyProduct'>
            <CardTitle>Hype PA (5,3°)</CardTitle>
            <CardText>Une bière houblonnée, fruité et légèrement amère</CardText>
          </CardBody>
        </Card>
        <div>
          <CardText className="formControlProduct">Combien t'en veux ?</CardText>
          <InputGroup>
            <Button onClick={() => this.props.clickMinus()} className="buttonProduct" type="button"> -  </Button>
            <Input type="text" className="formControlProduct" value={this.props.quantity} readOnly />
            <Button onClick={() => this.props.clickPlus()} className="buttonProductbutton" type="button">+</Button>
          </InputGroup>
          <br />
        </div>
        <div>
          <InputGroup >
            <Input className="inputGroupProduct" type="text" aria-describedby="sizing-addon2" value={this.props.beerbeer} readOnly />
            <InputGroupAddon addonType="prepend">€</InputGroupAddon>
          </InputGroup>
        </div>
        <div>   
          <InputGroup >
            <Input className="inputGroupProduct" type="text" aria-describedby="sizing-addon2" value={this.props.petitTotal2} readOnly />
            <InputGroupAddon addonType="prepend">€</InputGroupAddon>
          </InputGroup>
          </div>
        <div>
        <Link to="/PaymentScreen">
          <Button outline color="success">Ajouter</Button>
          </Link>
          <Link to="/PanierScreen">  
          <Button outline color="success">Panier</Button>
          </Link>
          <div>   
            <p> value={this.props.totalPrice} </p>
          <InputGroup >
            <Input className="inputGroupProduct" type="text" aria-describedby="sizing-addon2" value={this.props.totalPrice} readOnly />
            <InputGroupAddon addonType="prepend">€</InputGroupAddon>
          </InputGroup>
          </div>
        </div>
        `<div></div>
      </Col>
    </Container>
    );
  }
}

export default ProductComponent;


