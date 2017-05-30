import React from 'react';
import CartItem from './CartItem';
import NavbarTop from './NavbarTop';
import Footer from './Footer';

import base from '../base';
import { authHandler } from '../auth';

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.removeOrderItem = this.removeOrderItem.bind(this);
	}
	componentWillMount() {
    	base.onAuth((user) => {
	   		if(user) {
	     		//authHandler(this, null, { user });
	     		this.props.setUser(user.displayName, user.email, user.photoURL, user.uid);
	   		}
	   	});
    }

    removeOrderItem(key) {
    	console.log("hi");
    	this.props.removeOrderItem(this.props.order, key);
  	}

  	
	render() {
		const order = this.props.order
		return (
			<div>
				<NavbarTop />
				<div className="cartWrap">
					<h2>Panier d'achat</h2>			
					<div className="cartInner">
							{
								order.map(item => <CartItem 
									key={order.indexOf(item)} 
									index={order.indexOf(item)} 
									details={this.props.urns[item]}
									removeOrderItem={this.removeOrderItem}
									/>)
							}
					</div>	
				</div>
				<Footer />
			</div>
		)
	}
}

export default Cart;

//Object.keys(JSON.parse(localStorage.getItem('order')))
/*

{
								this.props.order.map(key => 
										<CartItem
											key={key}
											index={key}
											details={this.props.urns[key]}
											removeFromOrder={this.props.removeFromOrder}
										/>
									)
							}
							*/