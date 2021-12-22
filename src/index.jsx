import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './state/store';
import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Provider store={store}>
			<App />
		</Provider>
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);
