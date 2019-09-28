import React from 'react';

export const Stats = (props) => {

	console.log(props);

	const getTotalScore = (players) => {
		let sum = 0;
		players.forEach(player => {
			sum += player.score;
		})
		return sum;
	}

	let totalPlayers = props.players.length;
	let totalScore = getTotalScore(props.players);

	return (
		<table className="stats">
			<tbody>
				<tr>
					<td>Players:</td>
					<td>{totalPlayers}</td>
				</tr>
				<tr>
					<td>Total Points:</td>
					<td>{totalScore}</td>
				</tr>
			</tbody>
		</table>
	);
}