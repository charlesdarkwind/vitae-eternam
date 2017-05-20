import React from 'react';
import CartItem from './CartItem';
import NavbarTop from './NavbarTop';
import Footer from './Footer';

import base from '../base';
import { authHandler } from '../auth';

class Cart extends React.Component {
	componentWillMount() {
    	base.onAuth((user) => {
   		if(user) {
     			//authHandler(this, null, { user });
     			this.props.setUser(user.displayName, user.email, user.photoURL, user.uid);
   		}
    	});

  	}
	render() {
		return (
			<div>
				<NavbarTop />
				<div className="cartWrap">
					<h2>Panier d'achat</h2>			
					<div className="cartInner">
							{
								Object.keys(JSON.parse(localStorage.getItem('order'))).map(key => 
										<CartItem
											key={key}
											index={key}
											details={this.props.urns[key]}
											removeFromOrder={this.props.removeFromOrder}
										/>
									)
							}
					</div>	
				</div>
				<Footer />
			</div>
		)
	}
}

export default Cart;