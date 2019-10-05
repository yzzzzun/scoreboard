import React from "react";
import {Counter} from "./Counter";

export class Player extends React.PureComponent {

	render() {
		console.log(this.props.name, ' rendered');
		return (
			<div className='player'>
    <span className='player-name'>
      <button className='remove-player'
							onClick={() => this.props.removePlayer(this.props.id)}>x</button>
    </span>
				<span className='player-name'>{this.props.name}</span>
				<Counter score={this.props.score} changeScore={this.props.changeScore} id={this.props.id}/>
			</div>
		)
	}
} 
	
	