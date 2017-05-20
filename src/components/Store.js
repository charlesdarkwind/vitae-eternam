import React from 'react';
import Inventory from './Inventory';
import AddUrnForm from './AddUrnForm';
import { Well } from 'react-bootstrap';
import Urn from './Urn';

class Store extends React.Component {
	render() {
		return (
			<div>
				<div className="storeWrap">
					<Well>
						{
							Object
								.keys(this.props.urns)
								.map(key => <Urn 
													key={key} 
													index={key}
													details={this.props.urns[key]} 
													setOrderItem={this.props.setOrderItem}
												/>
									)
						}
					</Well>
				</div>
				<div className="inventory">
					<AddUrnForm 
						addUrn={this.props.addUrn}
					/>	
					<Inventory 
						urns={this.props.urns} 
						loadSamples={this.props.loadSamples}
						updateUrn={this.props.updateUrn}
						removeUrn={this.props.removeUrn}
					/>
				</div>
			</div>
		)
	}
}

export default Store;