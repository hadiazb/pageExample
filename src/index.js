import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import { Provider } from 'react-redux';
import App from './App';
import Store from './store/index';

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
