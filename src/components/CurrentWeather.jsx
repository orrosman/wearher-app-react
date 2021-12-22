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
				center={position}
				zoom={9}
				scrollWheelZoom={true}
				style={{
					height: '20vh',
					width: '50wh',
					marginTop: '3em',
					marginBottom: '10em',
				}}
			>
				<Map position={position} />
			</MapContainer>
		</div>
	);
};
export default CurrentWeather;
