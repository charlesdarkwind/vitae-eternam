import React from 'react';
import { Button } from 'react-bootstrap';
import base from '../base';
import NavbarTop from './NavbarTop';

class Login extends React.Component {
	componentDidMount() {
		base.onAuth((user) => {
			if(user) {
				this.authHandler(null, { user });
			}
		});
	}
/*
	renderLogin() {
    return (
      <nav className="login">
        <p>Connexion</p>
        <Button bsStyle="primary" className="facebook" onClick={() => this.props.authenticate('facebook')}>Connexion avec FaceBook</Button>
        <Button bsStyle="danger" className="google" onClick={() => this.authenticate('google')}>Connexion avec Google</Button>
      </nav>
    )
  }
*/
	render() {
		return (
			<div>
				<NavbarTop />
				<div className="loginWrap">
					<nav className="login">
	        			<p>Connexion</p>
	        			<Button bsStyle="primary" className="facebook" onClick={() => this.props.authenticate('facebook')}>Connexion avec FaceBook</Button>
	        			<Button bsStyle="danger" className="google" onClick={() => this.props.authenticate('google')}>Connexion avec Google</Button>
	      		</nav>				
				</div>
			</div>
		)
	}
}

export default Login;