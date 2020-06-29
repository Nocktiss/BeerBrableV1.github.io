import React, { Component } from 'react';

import { CardText, CardImg, Card, CardImgOverlay } from 'reactstrap';
import ButtonNav from '../lib/Button/ButtonNav';

import logoBrable from '../../assets/logoBrable.png';
import bierreMainDegrade from '../../assets/bierreMainDegrade.png';
import { logout, isLogin } from '../../redux/actions/LoginActions';

import { Link } from 'react-router-dom';

// import profil from '../../assets/profil.png'
import './PageDAccueil.scss'

class MainAcc extends Component {
    // state = {
    //     isLogin: isLogin()
    // }

    // handleLogout = () => {
    //     logout();
    //     this.setState({
    //         isLogin: false
    //     })
    // }

    render() {
        return (
            <div className="carouselAcc">
                <Card inverse>
                    <CardImg className="cardImgBiereMainDegrade" src={bierreMainDegrade} alt="Card image cap" />
                    <CardImgOverlay className="cardImgOverlayPage">
                        <CardText className="treasureEggs"> datejokemaybephonemeforfreebeer</CardText>
                        <CardText className='titleHome'> Bienvenue sur </CardText>
                        <div>
                            <CardImg className='logobrable' src={logoBrable} alt="Logo" />
                        </div>
                        <CardText className='textHome'> La meilleure façon de commander et payer dans les bars. Profitez du moment !</CardText>
                        <CardText className="treasureEggs"> datejokemaybephonemeforfreebeer</CardText>
                        
                        <Link to="/HomeScreen">
                            <ButtonNav text="Voir la carte du bar" />
                        </Link>

                        {/* {this.state.isLogin ?
                            <button className='buttonNavyolo' onClick={() => this.handleLogout()}> Déconnexion </button>
                            : <Link className='buttonNavyolo' to="/LoginPageScreen"></Link>
                        } */}

                        <CardText className='textFooterHome'> L'abus d'alcool est dangereux pour la santé, à consommer avec modération</CardText>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    }
}
export default MainAcc;
