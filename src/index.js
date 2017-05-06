import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './css/index.css';

import MainPage from './components/MainPage';
import App from './components/App';
import Login from './components/Login';
import Cart from './components/Cart';
import NotFound from './components/NotFound';



const router = (
		<Router history={browserHistory}>
    		<Route path="/" component={MainPage}/>
      		<Route path="boutique" component={App}/>
    		<Route path="connexion" component={Login}/>
    		<Route path="panier" component={Cart}/>
  		</Router>
)


render(router, document.querySelector('#root'));