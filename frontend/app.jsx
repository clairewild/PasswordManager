import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root.jsx';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  store = configureStore();
	window.store = store;
	const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
