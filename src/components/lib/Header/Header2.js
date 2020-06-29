import React from 'react';
import { Link } from 'react-router-dom';
import arrowLeftwhite from '../../../assets/fontIcons/arrowLeftwhite.svg'

import { CardTitle, Button, CardText } from 'reactstrap';

import './Header.scss'

const Header = ({ text, qty}) => {

    return (
        <div className='containerHeader'>

            <CardTitle className='textHeader'>
                <div sm="2" className='headerColSmHeader' >
                    <Link to="CartScreen">
                    <Button className="buttoniconsArrow">< img src={arrowLeftwhite} className="iconsArrow" alt="arrow" /> </Button>
                    </Link>
                </div>
                <div className='headerColSmHeaderCol' >
                    <CardText>  {text}  </CardText>

                </div>
            </CardTitle>

        </div>
    );
}
export default Header;










