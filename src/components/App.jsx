import React from 'react';
import CityDropdown from './CityDropdown';
import CurrentWeather from './CurrentWeather';

const App = () => {
	return (
		<div className="container mt-3">
			<CityDropdown />
			<CurrentWeather />
		</div>
	);
};
export default App;
