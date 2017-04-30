import React from 'react';
import NavbarTop from './NavbarTop';

class Cart extends React.Component {
	render() {
		/*
		if(!this.state.uid) {
			return <div>{this.renderLogin()}</div>
		}
*/
		

		return (
			<div>
				<NavbarTop />
				<div className="cartWrap">
					<h2>Panier d'achat</h2>	
						
				</div>
			</div>
		)
	}
}

export default Cart;