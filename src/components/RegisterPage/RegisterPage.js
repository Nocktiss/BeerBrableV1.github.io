
import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';

import axios from 'axios';

import { Modal, ModalBody } from 'reactstrap';
import validate from './ValidateSchema/validate-spected';
import getValidationSchema from './ValidateSchema/getValidationSchema-spected';

import tchin from '../../assets/tchin.gif'
import brable from '../../assets/logoBrable.png'
import './RegisterPage.scss'

const styleInput = {
	background: 'white',
	height: '72px',
	width: '119px',
	borderRadius: '20px',
	textAlign: 'center',
	border: 'none',
	fontSize: '30px',
}

const initialValues = {
	username: '',
	phone: '',
	password: '',
	passwordConfirmation: '',
	consent: false,
}

export default function RegisterPageContainer() {
	const [modalOpen, setModalOpen] = useState(false);
	const [username, setUsername] = useState('');
	const [redirect, setRedirect] = useState(false);
	const [count, setCount] = useState(0);
	const history = useHistory();

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(count => count - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		let interval = null;
		if (redirect) {
			setRedirect(true);
			interval = setInterval(() => {
				history.replace("/PaymentsRegisterScreen")
			}, 3000);
		}
		return () => interval ? clearInterval(interval) : null;
	}, [redirect, history])

	// useRef for stock value (username)
	let nameRef = useRef();

	const onSubmit = async function onSubmit(values) {
		await axios({
			method: 'POST',
			url: 'http://localhost:4242/registerUser',
			data: values,
			headers: { 'Content-Type': 'application/json' },
		})
			.then((response) => {
				setModalOpen(true);
				setUsername(nameRef.current.value);
				setRedirect(true);
				setCount(4);
			})
			.catch((error) => {
				if (error.response.status === 403) {
					alert('Pseudo ou téléphone déjà éxistant !');
			};
		})
	};

	return (
		<div className="container-all-form">
			<Formik
				initialValues={initialValues}
				validate={validate(getValidationSchema)}
				onSubmit={onSubmit}
			>
				{({ errors, handleChange, handleSubmit }) => (
					<div className="form-create-account">
						<div className="">

							<div>
								<div className="title-name-register">
									<label htmlFor="username">Choisis un identifiant</label>
								</div>
								<div className="containerInput">
									<input className="form-input-name"
										ref={nameRef}
										placeholder="Pseudo"
										name="username"
										type="username"
										onChange={handleChange}
									/>
								</div>
								<div className="form-field-error">{errors.username}</div>

							</div>

							<div>
								<div className="title-phone-register">
									<label htmlFor="phone">Entrée ton numéro de téléphone</label>
								</div>
								<div className="containerInput">
									<input className="form-input-name"
										placeholder="06 XX XX XX XX"
										name="phone"
										type="phone"
										onChange={handleChange}
									/>
								</div>
								<div className="form-field-error">{errors.phone}</div>
							</div>

							<div>
								<label className="title-password">Saisi ton code à 4 chiffres</label>

								<div name="pincode" className="pincode-input-container" onChange={handleChange} >
									<label className="form-field" htmlFor="password">
										<input className="box-holder"
											placeholder="0  0  0  0"
											minLength="4"
											maxLength="4"
											style={styleInput}
											name="password"
											type="password"
										/>
									</label>
								</div>
								<div className="form-field-error">{errors.password}</div>
							</div>

							<div>
								<label className="title-password-confirm">Confirme le code</label>

								<div className="pincode-input-container" onChange={handleChange}>
									<label className="form-field" htmlFor="passwordConfirmation">
										<input className="box-holder" placeholder="0  0  0  0" minLength="4" maxLength="4" style={styleInput} name="passwordConfirmation" type="password" />
									</label>
								</div>
								<div className="form-field-error">{errors.passwordConfirmation}</div>
							</div>
						</div>

						<div>
							<div className="checkConsent">
								<label htmlFor="consent">
									<input
										name="consent"
										type="checkbox"
										onChange={handleChange}
									/>
									<span>Je reconnais avoir lu et pris connaissance des termes, de la charte de confidentialité et des CGU, et les accéptes.</span>
								</label>
							</div>
							<div className="form-field-error-check">{errors.consent}</div>
						</div>

						<div className="container-check-button">
							<button className="button-create-account" type="submit" onClick={handleSubmit}>Je créé mon compte</button>
						</div>
					</div>
				)}</Formik>

			<Modal className="modalValidateRegister" isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} >
				<div className="containerModaluser">
					<ModalBody>
						<h1 className="welcomeRegister" >Bienvenue chez</h1> <img className="iconBrableRegister" src={brable} alt="icone-user" /> <span className="userRegister">{username}</span>
						<img className="iconBeer" src={tchin} alt="icone-user" />
						<Link to="/PaymentScreen">
							<label className="linkPayment" href="">C'est l'heure de payer ta tournée !</label>
						</Link>
						<img className="iconBeer2" src={tchin} alt="icone-user" />
						<p className="redirectCount">Redirection dans {count}s.</p>
					</ModalBody>
				</div>
			</Modal>
		</div>
	)
};