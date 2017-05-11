import React from 'react';
import NavbarTop from './NavbarTop';
import Footer from './Footer';
import imgBackground from '../img/Woodturning2.jpg';
import urn1 from '../img/urn1.png';
import { Parallax } from 'react-parallax';

import base from '../base';
import { authHandler } from '../auth';

import '../css/index.css';

class MainPage extends React.Component {
	componentWillMount() {
    	base.onAuth((user) => {
      		if(user) {
        		authHandler(this, null, { user });
      		}
    	});
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
			          	Vitae Aeternam
		          	</div>
		          	<a href="/boutique"><button type="button" className="btn1" >Nos urnes</button></a>
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
		      <Footer />
	      </div>
    	)
   }
}

export default MainPage;