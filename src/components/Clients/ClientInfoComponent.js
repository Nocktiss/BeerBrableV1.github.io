import React, { Component } from 'react';
import {Col,CardText } from 'reactstrap';

class ClientInfoComponent extends Component {
  render() {
    return (
      <div>
          
        <Col  className="col8PaymentFormComponent">  
        <CardText className='col8PaymentFormComponent'>Prénom et Nom du titulaire</CardText>
              <input type="text" className="yoloptueez" id="exampleInputEmail1"
               placeholder="Jason BINOUSE"/>
      </Col>
    
      </div>
    );
  }
}

export default ClientInfoComponent;
