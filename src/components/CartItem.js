import React from 'react';
import { Button } from 'react-bootstrap';


class CartItem extends React.Component {
/*
	removeFromOrder(key) {
    const order = {...this.props.order};
  }*/
	render() {
		const { name, image } = this.props.details;
		return (
			<div>
				<div className="cartItemWrap">	
					<div className="cartItem">
						{ name }
						<img src={image} className="cartImg" />
						<Button onClick={() => this.props.removeOrderItem}>x</Button>
					</div>	
				</div>
			</div>
		)
	}
}

export default CartItem;