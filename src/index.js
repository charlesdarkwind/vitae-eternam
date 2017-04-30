import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/index.css';

import MainPage from './components/MainPage';
import App from './components/App';
import Footer from './components/Footer';
import Login from './components/Login';
import Cart from './components/Cart';
import NotFound from './components/NotFound';



const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="" component={MainPage}/>
				<Match exactly pattern="/store/" component={App}/>
				<Match exactly pattern="/panier/" component={Cart}/>
				<Match exactly pattern="/connexion/" component={Login}/>
				<Miss component={NotFound} />
				<Footer />
			</div>
		</BrowserRouter>
	)
}


render(<Root />, document.querySelector('#root'));