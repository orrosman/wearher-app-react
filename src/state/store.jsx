import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/weather';
import weatherMiddleware from './middlewares/weather';

const store = createStore(
	weatherReducer,
	applyMiddleware(thunk, weatherMiddleware)
);
export default store;
