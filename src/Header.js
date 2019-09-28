import React from 'react';
import {Stats} from "./Stats";

export const Header = (props) => {
	console.log(props);

	const {title, totalPlayers} = props;
	return (
		<header className="header">
			<Stats/>
			<h1 className="h1">{title}</h1>
		</header>
	);
}