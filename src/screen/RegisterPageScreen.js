import React, { Component } from 'react';
import RegisterPage from '../components/RegisterPage/RegisterPage';
import Header3 from '../components/lib/Header/Header3'
import "../components/PaymentsPage/FormikPhone/FormikPhone.scss"

class RegisterPageScreen extends Component {

    render() { 
        return ( 
            <div className="backgroundScreen">
            	<Header3 text="Création de compte" />
        <RegisterPage />
            </div>
         );
    }
}
 
export default RegisterPageScreen