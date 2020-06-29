import React from 'react';
import { Link } from 'react-router-dom';
import arrowLeftwhite from '../../../assets/fontIcons/arrowLeftwhite.svg'
import { CardTitle,  Button, CardText } from 'reactstrap';

import './Header.scss'

const Header = ({ text, qty}) => {

    return (
        <div className='containerHeader'>

            <CardTitle className='textHeader'>
                <div className='headerColSmHeader' >
                    <Link to="HomeScreen">
                    <Button className="buttoniconsArrow">< img src={arrowLeftwhite} className="iconsArrow" alt="arrow" /> </Button>
                    </Link>
                </div>
                <div className='headerColSmHeaderCol' >
                    <CardText className="cartTextTextForHeader1">  {text}  </CardText>

                </div>
            </CardTitle>

        </div>
    );
}
export default Header;  








