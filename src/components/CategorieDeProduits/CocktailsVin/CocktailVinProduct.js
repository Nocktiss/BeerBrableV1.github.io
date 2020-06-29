import React from 'react';

// import bierreMain5 from '../../../assets/bierreMain5.jpg';
import { CardText, CardBody, CardImg } from 'reactstrap';

const SoftProduct = (SoftDrink) => (
  <div className="Product">
  <CardBody className='cardBodyCategorieDeProduits'>
    <div className="cardTitleCategorieDeProduits">
      <CardText className='textH1CategorieDeProduits'>{CocktailsVin.title}{CocktailsVin.quantity} </CardText>
      <CardImg className="cardImgPlancheMixCardImg" top width="100%" src={CocktailsVin.image} alt="Logo" />
    </div>
    <CardText className='textCategorieDeProduits'>{CocktailsVin.description}</CardText>
    <CardText className='textH1CategorieDeProduits'>{CocktailsVin.prix}</CardText>
  </CardBody>
</div>
)
export default SoftProduct;






