import React from 'react';

import { Button,CardTitle, } from 'reactstrap';


import './Button.scss'

export default class ButtonPrice extends React.Component 
{ render ()
    {
        return (
            <div>

                <Button className='ButtonNav'>

                <CardTitle className='pute'>VOIR LE PANIER </CardTitle>
           <CardTitle className='pute'> {this.props.totalPrice} €  </CardTitle>
                </Button>
                
            </div>
        );
    }
}









