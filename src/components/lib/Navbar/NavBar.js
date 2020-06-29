import React from 'react';

import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';

import './NavBar.scss'

const NavBar = () => {
  
    return (
      <Container className='containerNavBar'>
        <NavLink activeClassName="selected" className="inactive" to="/Homescreen">
          <p className="textNavBar1">Biéres</p>
        </NavLink>
        
          <p className="textNavBar">Cocktails/Vin</p>
     
      
          <p className="textNavBar">Soft</p>
        
        
          <p className="textNavBar">Planches</p>
      
      </Container>
    );
}
export default NavBar;
