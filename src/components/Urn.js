import React from 'react';
import { Glyphicon, Modal, Button } from 'react-bootstrap';

class Urn extends React.Component {
	constructor() {
		super();	
		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.state = {
			show: false
		}
	}

	showModal() {
	   this.setState({show: true});
	}

  hideModal() {
    this.setState({show: false});
  }	

	render() {
		const { details, index } = this.props;
		return (
			<div className="item">												
					<div className="spacerDiv"></div>
					<div className="imageCont" onClick={this.showModal}>					
						<Glyphicon className="zoomIcon" glyph="zoom-in" />
						<img src={details.image} alt={details.name}/>	
					</div>
				<div className="itemInner">
					<div className="urnName">
						<h3>{details.name}</h3>
					</div>
					<div className="urnDesc">
						<p>{details.desc}</p>
					</div>
					<div className="btnCart">
						<Button onClick={() => this.props.setOrderItem(index)}>Ajouter au panier<Glyphicon className="cart" glyph="heart-empty"/></Button>			
					</div>
				</div>
				<Modal
		         {...this.props}
		         show={this.state.show}
		         onHide={this.hideModal}
		         bsSize="lg" aria-labelledby="contained-modal-title-lg"
		         className="modalWindow"		         
	         >
		          <Modal.Header closeButton>
		            <Modal.Title id="contained-modal-title-lg">{details.name}</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		          	<img src={details.imageLarge} alt={details.name}/>	
		          </Modal.Body>
        		</Modal>
			</div>
		)
	}
}

export default Urn;