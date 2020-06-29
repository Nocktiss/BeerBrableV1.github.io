import React from 'react';

import { Button, CardText } from 'reactstrap';

import './Button.scss'


const ButtonNav = ({ text, price,euro, }) => {
    
        return (
           
                <Button className='buttonNav'>
                <CardText className='cardTextButtonNav'>  {text} </CardText>
                   
                    {price}
                    {euro}
                </Button>
          
        );
}

export default ButtonNav;




