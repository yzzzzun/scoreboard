import React from "react";
import {Counter} from "./Counter";

export class Player extends React.Component {

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
	
	