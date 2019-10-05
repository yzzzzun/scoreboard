import React, {Component} from 'react';

export class AddPlayerForm extends Component {

	textInput = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addPlayer(this.textInput.current.value);
		e.currentTarget.reset();
	}

	render() {
		return (
			<form className="form" id="form" onSubmit={this.handleSubmit} noValidate>
				<input className="input" id="player" ref={this.textInput} type="text" placeholder="enter a player's name" required></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}