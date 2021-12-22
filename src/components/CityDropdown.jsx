import { Dropdown, DropdownButton } from 'react-bootstrap';
import cities from '../utils/cities.json';
const CityDropdown = () => {
	return (
		<DropdownButton
			title="Select City"
			className="text-center"
			onSelect={(e) => console.log(e)}
		>
			{cities.map((city) => (
				<Dropdown.Item key={city.name} eventKey={`${city.long},${city.lat}`}>
					{city.name}
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
};
export default CityDropdown;
