import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StickyContainer, Sticky } from 'react-sticky';
import Cart from '../components/Cart'
import { Container, CardText } from 'reactstrap';
import Header1 from '../components/lib/Header/Header1'
import { Link } from 'react-router-dom';

import '../components/lib/Modals/ModalRegister/ModalRegister.scss';
import { Modal, ModalBody,} from 'reactstrap';

class CartScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}


	render() {
		const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
		return (
			<div>
				<StickyContainer>
					<Sticky>
						{({
							style,

							// the following are also available but unused in this example
							isSticky,
							wasSticky,
							distanceFromTop,
							distanceFromBottom,
							calculatedHeight
						}) => (
								<header style={style}>

									<div className="stickyProductScreen">

										<Header1 text="Panier" />
										<CardText className="NameBarPanier"> Selky </CardText>

									</div>
								</header>
							)}
					</Sticky>
					< Cart />
				</StickyContainer>
				<div>





					<div>
						
							{Boolean(this.props.total) && <Container className='productContainerCartrScreen'>
								<div className="totalPricePaymentCartScreen">
									<CardText> Total  </CardText>
									<CardText>{this.props.total} € </CardText>
								</div>
								<div>
									<button onClick={this.toggle} className="buttonPaiement"> Passer au paiement{this.props.buttonLabel} </button>
								</div>
							</Container>}
						
					</div>

					<Modal isOpen={this.state.modal} toggle={this.toggle} className="modalCartScreenConnexionCart" external={externalCloseBtn}>
						<CardText className="textH1ModalRegisterAntho">Connecte-toi vite !</CardText>
						<CardText className="textModalRegisterAntho">Nous te conseillons de te créer un compte si tu souhaite commander à nouveau sans retaper tes coordonnées. </CardText>
						<ModalBody className="paddingModalBodyLeft">
							
				<div className="">
					<div className="linkRegisterPageScreen"> 
					<Link to="/RegisterPageScreen">
						<button className="buttonCreeCompteModal">Créer un compte</button>
					</Link>
					</div>
					
					<div className="linkLoginPageScreen"> 
					<Link to="/LoginPageScreen">
					<button className="buttonCreeCompteModal1">Connexion à un compte</button>
					</Link>
					</div>
					<div className="linkPaymentScreen">  
					<Link to="/PaymentScreen">
					<button className="petitTextModalRegisterAntho" >Je ne veux pas créer de compte</button>
					</Link>
					</div>
				</div>
          </ModalBody>
					</Modal>









				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.items,
		total: state.total,
	}
}


export default connect(mapStateToProps)(CartScreen)