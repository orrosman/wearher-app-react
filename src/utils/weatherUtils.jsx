import axios from 'axios';
const getWeather = async (long, lat) => {
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const response = await axios.get(
		`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature&timezone=${timezone}`
	);
	return response.data;
};

export { getWeather };
