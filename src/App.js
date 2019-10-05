import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Player} from "./Player";
import {AddPlayerForm} from "./AddPlayerForm";

class App extends React.Component {

	maxId = 4;

	state = {
		players: [
			{name: 'LDK', score: 30, id: 1},
			{name: 'HONG', score: 40, id: 2},
			{name: 'KIM', score: 50, id: 3},
			{name: 'PARK', score: 60, id: 4}
		]
	}
	render() {
		return (
			<div className="scoreboard">
				<Header title="My Scoreboard" players={this.state.players} />


				{
					this.state.players.map((player) => {
						return (
							<Player name={player.name} score={player.score} id={player.id} key={player.id}
								// 2. props로 콜백 펑션을 전달
											removePlayer={this.handleRemovePlayer}
											changeScore={this.handleChangeScore} />
						)
					})
				}
				<AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
			</div>
		);
	}

	handleAddPlayer = (name) => {
		console.log(name);
		this.setState((prevState) => {
			// prevState.players.push({name: name, id: ++this.maxId, score: 0});
			// return {
			// 	players : [...prevState.players]
			// }

			const players = [...prevState.players];
			players.push({name: name, id: ++this.maxId, score: 0});

			return {
				players
			}
		});
	}

	// 1. 콜백 펑션 정의
	handleRemovePlayer = (id) => {
		this.setState(prevState => ({
			players: prevState.players.filter(player => player.id !== id)
		}));
	}

	handleChangeScore = (id, delta) => {
		console.log('handleChangeScore: ', id, delta);
		this.setState(prevState => {
			const player = prevState.players.find(player => player.id === id);
			player.score += delta;

			return {
				player: [
					...prevState.players,
				]
			}
		})

	}
}

export default App;
