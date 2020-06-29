import React, { Component } from 'react';

import { Header, NavBar } from '../components/lib'
import Product from '../components/Products/Product'

class PlanchesScreen extends Component {

    render() {

        return (
            <div>
                <Header text="Je suis la carte" />
                <NavBar />
                <Product />
            </div>
        );
    }
}

export default PlanchesScreen