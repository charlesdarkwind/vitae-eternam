import React from 'react';
import { render } from 'react-dom';
import './css/index.css';

import MainPage from './components/MainPage';
import App from './components/App';
import Login from './components/Login';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

import reduxApp from './components/reduxApp';

import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
	    	<Route path="/" component={MainPage}/>
	      	<Route path="boutique" component={reduxApp}/>
	    	<Route path="connexion" component={Login}/>
	    	<Route path="panier" component={Cart}/>
	  	</Router>
	</Provider> 
)


render(router, document.querySelector('#root'));