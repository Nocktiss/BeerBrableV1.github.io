import React, { Component } from 'react';

import Header from '../components/lib/Header/Header'
import Soft from '../components/CategorieDeProduits/Soft/Soft'
import NavBar from '../components/lib/Navbar/NavBar'


class SoftScreen extends Component {

    render() {
        return (
            <div>
                <Header text="Je suis la carte" />
                <NavBar />
                <Soft />
            </div>
        );
    }
}

export default SoftScreen