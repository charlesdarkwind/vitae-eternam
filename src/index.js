import React from 'react';
import { render } from 'react-dom';
import './css/index.css';

import reduxApp from './components/reduxApp';
import reduxLoginApp from './components/reduxLoginApp';
import reduxMainApp from './components/reduxMainApp';
import reduxCartApp from './components/reduxCartApp';

import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
	    	<Route path="/" component={reduxMainApp}/>
	      	<Route path="boutique" component={reduxApp}/>
	    	<Route path="connexion" component={reduxLoginApp}/>
	    	<Route path="panier" component={reduxCartApp}/>
	  	</Router>
	</Provider> 
)


render(router, document.querySelector('#root'));