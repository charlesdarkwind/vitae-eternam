import React from 'react';
import NavbarTop from './NavbarTop';
import Footer from './Footer';

import base from '../base';
import { authHandler } from '../auth';

class Cart extends React.Component {
	componentWillMount() {
    	base.onAuth((user) => {
   		if(user) {
     			authHandler(this, null, { user });
   		}
    	});
  	}
	render() {
		return (
			<div>
				<NavbarTop />
				<div className="cartWrap">
					<h2>Panier d'achat</h2>			
									
				</div>
				<Footer />
			</div>
		)
	}
}

export default Cart;