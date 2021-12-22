import { useSelector } from 'react-redux';
import { MapContainer } from 'react-leaflet';
import Map from './Map';
import Graph from './WeatherGraph';

const CurrentWeather = () => {
	const city = useSelector((state) => state.city);
	const { name, lat, long } = city;
	const position = [lat, long];

	return (
		<div className="text-center mt-3">
			<div>{name}</div>
			<div>
				latitude: {lat}, longitude: {long}
			</div>
			{city.weatherData ? <Graph weatherData={city.weatherData} /> : null}

			<MapContainer
				key={position}
				center={position}
				zoom={9}
				scrollWheelZoom={true}
				style={{
					height: '20vh',
					marginTop: '3em',
					marginBottom: '9em',
				}}
			>
				<Map position={{ lat, long }} />
			</MapContainer>
		</div>
	);
};
export default CurrentWeather;
