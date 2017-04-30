import React from 'react';
import NavbarTop from './NavbarTop';
import imgBackground from '../img/Woodturning2.jpg';
import urn1 from '../img/urn1.png';
import { Parallax } from 'react-parallax';
import '../css/index.css';

class MainPage extends React.Component {
	goToStore() {
		this.context.router.transitionTo(`/store`);
	}

	render() {
    	return (
	    	<div>
	    	<NavbarTop />
		      <div  className="parallaxWrap">
		        <Parallax bgImage={imgBackground} strength={400}  className="parallax">
		          <div className="parallaxInner">
		          	<div className="parallaxText">
			          	Les Urnes<br/>
			          	Vitam Aeternam
		          	</div>
		          	<button type="button" className="btn1" onClick={() => this.goToStore()}>Nos urnes</button>
		          </div>	      
		        </Parallax>
		      </div>

		      <div className="mainSection1">
		      	<div className="section1Img">
		        		<img src={urn1} alt="Wood Urn"/>
		        	</div>

		        	<div className="section1Text">
		        		<h2>Titre Urne</h2>
		        		<p>
			        		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. 
			        		Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et 
			        		interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.
		        		</p>
		        	</div>
		      </div>
	      </div>
    	)
   }
}

MainPage.contextTypes = {
	router: React.PropTypes.object
}

export default MainPage;