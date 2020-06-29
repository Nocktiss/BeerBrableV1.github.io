import React from 'react'

import './Checkbox.scss'

class Checkbox extends React.Component {
	state = {
		isGoing: false,
	};

	handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<form className="container-checkbox">
				<input
					name="isGoing"
					type="checkbox"
					checked={this.state.isGoing}
					onChange={this.handleInputChange} />
					<p className="text-checkbox">Je reconnais avoir lu et pris connaissance des termes, de la <strong>charte de confidebtialité</strong> et des <strong>CGU</strong>, et les accepte.</p>
			</form>
		);
	}
}

export default Checkbox