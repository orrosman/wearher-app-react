import { TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Map = ({ position }) => {
	const DefaultIcon = L.icon({
		iconUrl: icon,
		shadowUrl: iconShadow,
	});
	L.Marker.prototype.options.icon = DefaultIcon;

	return (
		<>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Marker position={[position.lat, position.long]}>
				<Popup>
					{position.lat},{position.long}
				</Popup>
			</Marker>
		</>
	);
};

export default Map;
