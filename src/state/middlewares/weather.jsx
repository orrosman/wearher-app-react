import { getWeather } from '../../utils/weatherUtils';

const weatherMiddleware = (store) => (next) => async (action) => {
	const { long, lat } = action.payload.city;
	const weatherData = await getWeather(long, lat);
	action.payload.city = { ...action.payload.city, weatherData };
	return next(action);
};

export default weatherMiddleware;
