import React from 'react';
import {Stats} from "./Stats";
import {StopWatch} from './StopWatch';
import PropTypes from 'prop-types';

export const Header = ({title, players}) => {

	return (
		<header className="header">
			<Stats players = {players}/>
			<h1 className="h1">{title}</h1>
			<StopWatch/>
		</header>
	);
}

Header.propTypes = {
	players: PropTypes.arrayOf(PropTypes.shape({
		id : PropTypes.number,
		score : PropTypes.number,
		name : PropTypes.string,
	})),
	title : PropTypes.string
}

Header.defaultProps = {
	title: 'ScoreBoard'
}