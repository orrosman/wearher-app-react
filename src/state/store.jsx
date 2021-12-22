import { createStore } from 'redux';
import weatherReducer from './reducers/weather';

const initialState = {
	city: { name: 'New York', long: -74.01, lat: 40.71 },
};

const store = createStore(weatherReducer, initialState);
export default store;
