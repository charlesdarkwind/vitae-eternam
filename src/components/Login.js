import React from 'react';
import { Button } from 'react-bootstrap';
import base from '../base';
import { authHandler } from '../auth';
import NavbarTop from './NavbarTop';
import Footer from './Footer';


class Login extends React.Component {
	componentWillMount() {
		base.onAuth((user) => {
			if(user) {
				authHandler(this, null, { user });
			}
		});
	}

	authenticate(provider) {
    	console.log(`Tentative de connexion avec ${provider}`);
    	base.authWithOAuthPopup(provider, authHandler);
  	}

	render() {
		return (
			<div>
				<NavbarTop />
				<div className="loginWrap">
					<nav className="login">
	        			<p>Connexion</p>
	        			<Button bsStyle="primary" className="facebook" onClick={() => this.authenticate('facebook')}>Connexion avec FaceBook</Button>
	        			<Button bsStyle="danger" className="google" onClick={() => this.authenticate('google')}>Connexion avec Google</Button>
	      		</nav>				
				</div>
				<Footer />
			</div>
		)
	}
}

export default Login;