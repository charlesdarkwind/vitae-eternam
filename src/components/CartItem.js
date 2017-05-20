import React from 'react';
import { Button } from 'react-bootstrap';


class CartItem extends React.Component {
/*
	removeFromOrder(key) {
    const order = {...this.props.order};
  }*/
	render() {
		return (
			<div>
				<div className="cartItemWrap">	
					<div className="cartItem">
						{this.props.details}
						<Button onClick={() => this.props.removeOrderItemFromOrder}>x</Button>
					</div>	
				</div>
			</div>
		)
	}
}

export default CartItem;