import React from 'react';


class AddUrnForm extends React.Component {
	createUrn(event) {
		event.preventDefault();
		const urn = {
			name: this.name.value,
			price: this.price.value,
			image: this.image.value,
			imageLarge: this.imageLarge.value,
			desc: this.desc.value
		}
		this.props.addUrn(urn);
		this.urnForm.reset();
	}

	render() {
		return (
			<div className="formWrap">
				<form ref={(input) => this.urnForm = input} className="urnForm" onSubmit={(e) => this.createUrn(e)}>
					<input ref={(input) => this.name = input} type="text" placeholder="Nom"></input>
					<input ref={(input) => this.price = input} type="text" placeholder="Prix"></input>
					<input ref={(input) => this.image = input} type="text" placeholder="Image Petit (210x280)" className="imageInput"></input>
					<textarea ref={(input) => this.imageLarge = input} placeholder="Image Grand format"></textarea>
					<textarea ref={(input) => this.desc = input} placeholder="Description"></textarea>			
					<button type="submit">+ Ajout Item</button>
				</form>
			</div>
		)
	}
}

export default AddUrnForm;