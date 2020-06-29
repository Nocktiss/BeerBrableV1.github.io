import React, { Component } from 'react';
import Bieres from '../components/CategorieDeProduits/Biéres/Bieres'

import Header from '../components/lib/Header/Header'

import NavBar from '../components/lib/Navbar/NavBar'

class BieresScreen extends Component {

	render() {
		return (
			<div>
				<Header text="Je suis la carte" />
				<NavBar />
				<Bieres />
			</div>
		);
	}
}

export default BieresScreen; 