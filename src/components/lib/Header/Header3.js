import React from 'react';
import { Link } from 'react-router-dom';
import arrowLeftwhite from '../../../assets/fontIcons/arrowLeftwhite.svg'
import { CardTitle, Col, Button, CardText } from 'reactstrap';

import './Header.scss'

const Header = ({ text, qty}) => {

    return (
        <Col sm="12" className='containerHeader'>

            <CardTitle className='textHeader'>
                <Col sm="2" className='headerColSmHeader' >
                    <Link to="CartScreen">
                    <Button className="buttoniconsArrow">< img src={arrowLeftwhite} className="iconsArrow" alt="arrow" /> </Button>
                    </Link>
                </Col>
                <Col sm="10" className='headerColSmHeaderCol' >
                    <CardText>  {text}  </CardText>

                </Col>
            </CardTitle>

        </Col>
    );
}
export default Header;