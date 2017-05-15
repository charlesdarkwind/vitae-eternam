import React from 'react';
import { Button } from 'react-bootstrap';
import NavbarTop from './NavbarTop';
import Footer from './Footer';
import base from '../base';
import Offline from './Offline';
import { authHandler } from '../auth';

class Login extends React.Component {
	componentWillMount() {
		base.onAuth((user) => {
			if(user) {					
				//	authHandler(this, null, { user });
				this.props.setUser(user.displayName, user.email, user.photoURL, user.uid);
			}
		});
	}

	authenticate(provider) {
    	console.log(`Tentative de connexion avec ${provider}`);
    	base.authWithOAuthPopup(provider, authHandler);
  	}

  	unauth() {
  		base.unauth();
  		this.props.removeUser();
  	}

  	renderContent() {	
  		if (this.props.user.uid) {
  			const firstName = this.props.user.name.split(" ")[0];
  			const tempArr = this.props.user.name.split(" ");
  			const lastName = this.props.user.name.split(" ")[tempArr.length-1]
	  		return (
	  			<div>	
		  			<div className="userInfo">
		  				{this.props.user.name}
		  				<div className="photoUser"><img src={this.props.user.photoURL}/></div>
		  				<p>Informations</p>
		  				<div className="userFormWrap">
		  					<form ref={(input) => this.userForm = input} className="userForm" onSubmit={(e) => this.handleChange(e)} >
		  						<input ref={(input) => this.firstName = input} className="firstName" defaultValue={firstName} placeholder="Prénom"></input>
		  						<input ref={(input) => this.lastName = input} className="lastName" defaultValue={lastName} placeholder="Nom"></input>
		  						<input ref={(input) => this.road = input} className="road" placeholder="Adresse"></input>
		  						<input ref={(input) => this.city = input} className="city" placeholder="Ville"></input>
		  						<select ref={(input) => this.state = input} className="state" placeholder="Province">
		  							<option selected disabled>Province</option>
		  							<option disabled>_________</option>
		  							<option value="Alberta">Alberta</option>
		  							<option value="Colombie-Britannique">Colombie-Britannique</option>
		  							<option value="Île-du-Prince-Édouard">Île-du-Prince-Édouard</option>
		  							<option value="Manitoba">Manitoba</option>
		  							<option value="Nouveau-Brunswick">Nouveau-Brunswick</option>
		  							<option value="Nouvelle Écosse">Nouvelle Écosse</option>
		  							<option value="Ontario">Ontario</option>
		  							<option value="Québec">Québec</option>
		  							<option value="Saskatchewan">Saskatchewan</option>
		  							<option value="Terre-Neuve-et-Labrador">Terre-Neuve-et-Labrador</option>
		  						</select>
		  						<input ref={(input) => this.state = input} className="ZIP" placeholder="Code Postal"></input>
		  						<input ref={(input) => this.phoneNumber = input} className="phoneNumber" placeholder="Num. Téléphone"></input>
		  						<button type="submit">Enregistrer</button>
		  					</form>
		  				</div>
		  			</div>		
		  			<Button bsStyle="warning" className="unauth" onClick={() => this.unauth()}>Déconnexion</Button>
				</div>			
			)  	
		} else {
			return (
	  			<Offline 
	  				authenticate={this.authenticate}
	  			/>
  			)
		} 		
  	}

	render() {
		return (
			<div>
				<NavbarTop />
				<div className="loginWrap">
					{this.renderContent()}
				</div>
			</div>
		)
	}
}

export default Login;
