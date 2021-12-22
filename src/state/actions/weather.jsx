import cities from '../../utils/cities.json';
const changeCity = (cityName) => {
	const city = cities.find((city) => city.name === cityName);
	return {
		type: 'CHANGE_CITY',
		payload: { city: city },
	};
};

export { changeCity };
