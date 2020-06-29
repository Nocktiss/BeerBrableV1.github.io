import React from 'react';

// import bierreMain5 from '../../../assets/bierreMain5.jpg';
import { CardText, CardBody, CardImg } from 'reactstrap';

const Product = (PlanchesJson) => (
  <div className="Product">
  <CardBody className='cardBodyCategorieDeProduits'>
    <div className="cardTitleCategorieDeProduits">
      <CardText className='textH1CategorieDeProduits'>{PlanchesJson.title}</CardText>
      <CardImg className="cardImgPlancheMixCardImg" top width="100%" src={PlanchesJson.img} alt="Logo" />
    </div>
    <CardText className='textCategorieDeProduits'>{PlanchesJson.desc}</CardText>
    <CardText className='textH1CategorieDeProduits'>{PlanchesJson.price}</CardText>
  </CardBody>
</div>
)
export default Product






