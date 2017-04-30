import React from 'react';

class Inventory extends React.Component {
	constructor() {
		super();
		this.renderInventory = this.renderInventory.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		//this.updateUrn = this.updateUrn.bind(this);
		//this.removeUrn = this.removeUrn.bind(this);
	}

	handleChange(e, key) {
		//take a copy of that urn and update it with the new data
		const urn = this.props.urns[key];
		const updateUrn = {
			...urn,
			[e.target.name]: e.target.value
		}
		this.updateUrn(key, updateUrn);
	}

	updateUrn = (key, updatedUrn) => {
    	const urns = {...this.props.urns};
    	urns[key] = updatedUrn;
    	this.setState({ urns });
  	};

  	removeUrn = (key) => {
    	const urns = {...this.props.urns};
    	urns[key] = null;
    	this.setState({ urns });
  	};

	renderInventory(key) {
		const urn = this.props.urns[key];
		return (
			<div className="urn-edit" key={key}>
				<div className="urnInner">
					<input type="text" name="name"  value={urn.name} placeholder="Nom urne" onChange={(e) => this.handleChange(e, key)} />
					<input type="text" name="prix"  value={urn.price} placeholder="Prix urne" onChange={(e) => this.handleChange(e, key)} />
					<input className="imageInput" type="text" name="image"  value={urn.image} placeholder="Image petit" onChange={(e) => this.handleChange(e, key)} />
					<textarea type="text" name="imageLarge"  value={urn.imageLarge} placeholder="Image grand format" onChange={(e) => this.handleChange(e, key)}></textarea>
					<textarea type="text" name="description"  value={urn.desc} placeholder="description" onChange={(e) => this.handleChange(e, key)} ></textarea>
					<button onClick={() => this.props.removeUrn(key)}>Effacer</button>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="inventoryWrap">
				<h2>Inventaire</h2>
				<div>
					{
						Object
						.keys(this.props.urns)
						.map(this.renderInventory)
					}
					<button onClick={this.props.loadSamples}>Load Samples</button>
				</div>
			</div>
		)
	}
}

export default Inventory;