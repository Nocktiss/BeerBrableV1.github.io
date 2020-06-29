import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import {Container,} from 'reactstrap';
import { connect } from 'react-redux'
import Home from '../components/Home'
import Header from '../components/lib/Header/Header'
import NavBar from '../components/lib/Navbar/NavBar'
import ButtonNav from '../components/lib/Button/ButtonNav'
import { Link } from 'react-router-dom';



class HomeScreen extends Component {

	render() {
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
				 						<Header className="cartTextTextForHeader1"text='Je suis la carte' />
										<NavBar />
									</div>
								</header>
							)}
					</Sticky>
					<Home />
				</StickyContainer>

				{Boolean(this.props.total) && <Container className='productContainerScreen'>  
				<Link to="/CartScreen">
					<ButtonNav text="VOIR LE PANIER" price={this.props.total}  euro="€" />
				</Link>
				</Container>}
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


export default connect(mapStateToProps, )(HomeScreen)

