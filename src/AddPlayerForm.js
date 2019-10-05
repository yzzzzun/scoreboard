import React, {Component} from 'react';

export class AddPlayerForm extends Component {

	state = {
		value: ''
	}

	handleValueChange = (e) => {
		this.setState({
			value : e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const form = document.getElementById("form");
		const player = document.getElementById("player");

		console.log(form.checkValidity());
		console.log(player.validity.valid);

		this.props.addPlayer(this.state.value);
		this.setState({value: ''});
	}

	render() {
		return (
			<form className="form" id="form" onSubmit={this.handleSubmit} noValidate>
				<input className="input" id="player" type="text" placeholder="enter a player's name" value={this.state.value} onChange={this.handleValueChange} required></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}