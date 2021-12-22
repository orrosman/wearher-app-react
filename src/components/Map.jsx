import { TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ position }) => {
	return (
		<>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Marker position={position}>
				<Popup>
					{position.lat},{position.long}
				</Popup>
			</Marker>
		</>
	);
};

export default Map;
