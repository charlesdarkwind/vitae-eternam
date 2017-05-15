import React from 'react';
import NavbarTop from './NavbarTop';
import Store from './Store';
import SampleUrns from '../SampleUrns';
import Footer from './Footer';

import base from '../base';
import { authHandler } from '../auth';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadSamples = this.loadSamples.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.logout = this.logout.bind(this);
    //this.authenticate = this.authenticate.bind(this);
    //this.authHandler = this.authHandler.bind(this); 
  }
  
  componentWillMount() {

    base.onAuth((user) => {
      if(user) {
        //authHandler(this, null, { user });
        this.props.setUser(user.displayName, user.email, user.photoURL, user.uid);
      } 
    });
    
    // two way data binding with state and firebase
    /*
    this.ref = base.syncState(`/store/urns`
      , {
        context: this,
        state: 'urns'
    });
    */
  }
/*
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("order", JSON.stringify(nextState.order));
  }
*/
  //+++ TO CHANGE AFTER 
  loadSamples = () => {
    console.log("loading sample")
      this.setState({
        urns: this.props.urns
    });
  };

  addToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order};
    // update or add the new number of urns/items ordered
     //order[key] = order[key] + 1 || 1;  eventually with more than one of the same item to sell!
    order[key] = 1;
    // update our state
    this.setState({ order });
  }

  removeFromOrder(key) {
    const order = {...this.state.order};
    delete order[key];
    this.setState({ order });
  }

  logout() {
    base.unAuth();
    this.setState({ uid: null });
  }

  render() {
    return (
      <div>
        <NavbarTop />      
        <Store 
          addUrn={this.props.addUrn}
          loadSamples={this.loadSamples}
          urns={this.props.urns}
          updateUrn={this.props.updateUrn}
          removeUrn={this.props.removeUrn}
          addToOrder={this.addToOrder}
        />
        <Footer />
      </div>          
    );
  }
}

export default App;
