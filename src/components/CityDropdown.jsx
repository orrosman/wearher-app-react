import { useDispatch } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import cities from '../utils/cities.json';
import { changeCity } from '../state/actions/weather';

const CityDropdown = () => {
	const dispatch = useDispatch();

	return (
		<DropdownButton
			title="Select City"
			className="text-center"
			onSelect={(cityName) => {
				dispatch(changeCity(cityName));
			}}
		>
			{cities.map((city) => (
				<Dropdown.Item key={city.name} eventKey={city.name}>
					{city.name}
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
};
export default CityDropdown;
