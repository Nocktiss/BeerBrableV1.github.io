import React, { Component } from 'react';
import LoginPage from '../components/LoginPage/LoginPage';
import Header3 from '../components/lib/Header/Header3'

import "../components/PaymentsPage/FormikPhone/FormikPhone.scss"

class LoginPageScreen extends Component {

    render() { 
        return ( 
            <div className="backgroundScreen">
            	<Header3 text="Connexion de compte" />
        <LoginPage />
            </div>
         );
    } 
}
 
export default LoginPageScreen