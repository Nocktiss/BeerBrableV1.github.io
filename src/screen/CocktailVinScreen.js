import React, { Component } from 'react';

import CocktailVin from '../components/CategorieDeProduits/CocktailsVin/CocktailVin'
import Header from '../components/lib/Header/Header'
import NavBar from '../components/lib/Navbar/NavBar'
class SoftScreen extends Component {
    render() {
        return (
            <div>
                <Header text="Je suis la carte" />
                <NavBar />
                <CocktailVin />
            </div>
        );
    }
}
export default SoftScreen