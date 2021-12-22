import { useSelector } from 'react-redux';
const CurrentWeather = () => {
	const city = useSelector((state) => state.city);
	return (
		<div className="text-center mt-3">
			<div>{city.name}</div>
			<div>lat: {city.lat}</div>
			<div>long: {city.long}</div>
		</div>
	);
};
export default CurrentWeather;
