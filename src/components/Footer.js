import React from 'react';
import { Well, Glyphicon } from 'react-bootstrap';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<Well>
			   	<div className="footerInfos">
			   		<div className="footerInfoDiv footerPayment">
			   			<div className="footerPaymentText">
			   				Paiement Sécurisé
			   				<br/>
			   				<Glyphicon className="credit-card" glyph="credit-card" />
			   			</div>   			
			   		</div>
			   		<div className="footerInfoDiv footerShipping">
			   			<div className="footerShippingText">
			   				Livraison Gratuite
			   				<br/>
			   				<i className="fa fa-truck" aria-hidden="true"></i>
			   			</div>
			   		</div>
			   	</div>
			   	<div className="footerIcons">
			   	</div>
			   </Well>
		   </div>
		)
	}
}

export default Footer;