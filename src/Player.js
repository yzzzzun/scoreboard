import React from "react";
import {Counter} from "./Counter";
import PropTypes from 'prop-types';

export class Player extends React.Component {

	static price = 1000; //Player.price
	static propTypes = {
		removePlayer: PropTypes.func,
		id: PropTypes.number,
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.score !== this.props.score ? true : false
	}

	render() {
		const {removePlayer, id, changeScore, score, name} = this.props;

		console.log(name, ' rendered');
		return (
			<div className='player'>
    <span className='player-name'>
      <button className='remove-player'
							onClick={() => removePlayer(id)}>x</button>
    </span>
				<span className='player-name'>{name}</span>
				<Counter score={score} changeScore={changeScore} id={id}/>
			</div>
		)
	}
}