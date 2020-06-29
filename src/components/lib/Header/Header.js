import React from 'react';


import { CardTitle, Col, CardText } from 'reactstrap';

import './Header.scss'

const Header = ({ text, }) => {

    return (
        <Col sm="12" className='containerHeader'>

            <CardTitle className='textHeader0'>
            
                    <CardText>  {text}  </CardText>
            </CardTitle>

        </Col>
    );
}
export default Header;