import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import base from '../base';
import { authHandler } from '../auth';

import NavbarTop from './NavbarTop';
import Footer from './Footer';
import Offline from './Offline';

const adressObj = {};

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
		const adressObj = this.props.user.adress;	
		this.state = {
			firstName: adressObj.firstName || '',
			lastName: adressObj.lastName || '',
			adress: adressObj.adress || '',
			city: adressObj.city || '',
			state: adressObj.state || '',
			ZIP: adressObj.ZIP || '',
			phone: adressObj.phone || ''
		}
	}
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

  	handleChange(e) {
  		const target = e.target;
  		const value = target.value;
  		const id = target.id;
    	this.setState({ 
    		[id]: value
    	});
  	}

  	handleSubmit(e) {
  		e.preventDefault();
  		const { firstName, lastName, adress, city, state, ZIP, phone } = this.state;
  		this.props.setAdress(firstName, lastName, adress, city, state, ZIP, phone);
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
		  				<div className="userFormWrap">
		  				<p>Adresse de livraison</p>
		  					<form onSubmit={(e) => this.handleSubmit(e)}>
							   <FieldGroup
							   	defaultValue={this.state.firstName}
							   	onChange={(e) => this.handleChange(e)}
							      id="firstName"
							      type="text"
							      label="Prénom"
							      placeholder="Prénom"
							   />
							   <FieldGroup
							   defaultValue={this.state.lastName}
							   onChange={(e) => this.handleChange(e)}
							      id="lastName"
							      type="text"
							      label="Nom"
							      placeholder="Nom"
							   />
							   <FieldGroup
							   defaultValue={this.state.adress}
							   onChange={(e) => this.handleChange(e)}
							      id="adress"
							      label="Adresse"
							      type="text"
							      placeholder="Adresse"
							   />
							   <FieldGroup
							   defaultValue={this.state.city}
							   onChange={(e) => this.handleChange(e)}
							      id="city"
							      label="Ville"
							      type="text"
							      placeholder="Ville"
							   />
							   <FormGroup controlId="state">
							      <ControlLabel>Province</ControlLabel>
							      <FormControl componentClass="select" placeholder="Select" defaultValue={this.state.state} onChange={(e) => this.handleChange(e)}>
							        <option value="select">Sélection</option>
							        <option disabled>____________________</option>
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
							      </FormControl>
							   </FormGroup>
							   <FieldGroup
							   defaultValue={this.state.ZIP}
							   onChange={(e) => this.handleChange(e)}
							      id="ZIP"
							      label="Code Postal"
							      type="text"
							      placeholder="Code Postal"
							   />
							   <FieldGroup
							   defaultValue={this.state.phone}
							   onChange={(e) => this.handleChange(e)}
							      id="phone"
							      label="Téléphone"
							      type="tel"
							      placeholder="Téléphone"
							   />
							   <Button type="submit">
							     Enregistrer
							   </Button>
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
/*
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
</form>*/
