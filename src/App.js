import React from 'react';
import './App.css';
import {Header} from './Header';
import {Player} from "./Player";

class App extends React.Component {
	state = {
		players: [
			{name: 'LDK', score: 30, id: 1},
			{name: 'HONG', score: 40, id: 2},
			{name: 'KIM', score: 50, id: 3},
			{name: 'PARK', score: 60, id: 4},
		]
	}
	// 1) player 삭제 콜백 펑션 정의
	handleRemovePlayer = (id) => {
		console.log(id);

		this.setState(prevState => ({
			players: prevState.players.filter(item => item.id !== id)
		}))
	}

	render() {
		return (
			<div className='scoreboard'>
				<Header title='My Scoreboard' totalPlayers={11}/>

				{
					this.state.players.map(player => (
						<Player name={player.name} key={player.id} id={player.id}
										removePlayer={this.handleRemovePlayer}/>
					))
				}
			</div>
		);
	}
}

export default App;
