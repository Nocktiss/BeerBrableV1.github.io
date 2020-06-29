import React from 'react';

import { Link } from 'react-router-dom';

import './ModalRegister.scss';

const modal = (props) => {
	return (
		<div>
			<div className="modalRegisterModalAntho"
				style={{
					transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
					visibility: props.show ? '0' : '1'
				}}>

				<p className="textH1ModalRegisterAntho">Connecte-toi vite !</p>
				<p className="textModalRegisterAntho">Nous te conseillons de te créer un compte si tu souhaite commander à nouveau sans retaper tes coordonnées.</p>
				
				
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

					<p>
						{props.children}
					</p>
					<div className="linkPaymentScreen">  
					<Link to="/PaymentScreen">
					<button className="petitTextModalRegisterAntho" >Je ne veux pas créer de compte</button>
					</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default modal;