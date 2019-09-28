import React from "react";
import {Counter} from "./Counter";

export const Player = (props) => (
	<div className='player'>
    <span className='player-name'>
      <button className='remove-player'
							onClick={() => props.removePlayer(props.id)}>x</button>
    </span>
		<span className='player-name'>{props.name}</span>
		<Counter score={props.score} changeScore={props.changeScore} id={props.id}/>
	</div>
);