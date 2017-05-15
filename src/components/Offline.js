import React from 'react';
import { Button } from 'react-bootstrap';
import { authHandler } from '../auth';
import base from '../base';
import '../css/index.css';



class Offline extends React.Component {
	constructor() {
		super();
		
	}
	authenticate(provider) {
    	console.log(`Tentative de connexion avec ${provider}`);
    	base.authWithOAuthPopup(provider, authHandler);
  	}
  	render() {
  		return (
	<div className="login">
		<p>Connexion</p>
		<Button bsStyle="primary" className="facebook" onClick={() => this.authenticate('facebook')}>Connexion avec FaceBook</Button>
		<Button bsStyle="danger" className="google" onClick={() => this.authenticate('google')}>Connexion avec Google</Button>
	</div>
	)
}
}

export default Offline;