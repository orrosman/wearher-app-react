import React from 'react';
import weatherLogo from '../assets/weather-logo.png';

const Header = () => {
	return (
		<nav className="navbar navbar-dark bg-dark p-1">
			<i className="navbar-brand mx-auto text-center">
				<img src={weatherLogo} width="80" height="80" alt="weather logo"></img>
				<div>Weather Forecast</div>
			</i>
		</nav>
	);
};

export default Header;
