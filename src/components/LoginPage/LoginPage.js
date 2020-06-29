import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import axios from 'axios'

import validate from '../RegisterPage/ValidateSchema/validate-spected'
import getValidationSchema from '../RegisterPage/ValidateSchema/getValidationSchema-spected'

import '../RegisterPage/RegisterPage.scss'

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
	password: '',
}

export default function SignInForm() {
	const token = localStorage.getItem("JWT")
	const [logged, setLogged] = useState(false);
	
	const onSubmit = async function onSubmit(values) {
		axios({
			method: 'POST',
			url: 'http://localhost:4242/loginUser',
			data: values,
			headers: { 'Authorization': `Bearer ${token}` },
		})
			.then((res) => {
				localStorage.setItem("JWT", res.data.token)
				setLogged(true);
			})
			.catch(function (erreur) {
				//On traite ici les erreurs éventuellement survenues
				console.log(erreur);
			})
	}

	return (
		<>
			{logged && <Redirect to="/PaymentsRegisterScreen" />}
			{
				!logged && <div className="container-all-form">
					<Formik
						initialValues={initialValues}
						validate={validate(getValidationSchema)}
						onSubmit={onSubmit}
					>
						{({ isSubmitting, errors, handleChange, handleSubmit }) => (
							<div className="form-create-account">

								<div>
									<div className="title-name-register">
										<label htmlFor="username">Choisi un identifiant</label>
									</div>
									<div className="containerInput">
										<input className="form-input-nameLogin"
											placeholder="Pseudo"
											name="username"
											type="username"
											onChange={handleChange}
										/>
									</div>
									<div className="form-field-error">{errors.username}</div>
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

								<Link to="">
									<label className="forget-password" href="">Code oublié ?</label>
								</Link>

								<div className="container-check-buttonLogin">
									<button type="submit" className="button-create-account" onClick={handleSubmit}>
										{isSubmitting ? 'Redirection' : 'Je me connecte'}
									</button>
								</div>
							</div>
						)}</Formik>
				</div>
			}
		</>
	)
}