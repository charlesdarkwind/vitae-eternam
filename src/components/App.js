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
    this.setOrderItem = this.setOrderItem.bind(this);
    this.removeOrderItem = this.bind.removeOrderItem(this);
    this.logout = this.logout.bind(this);
    //this.authenticate = this.authenticate.bind(this);
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
    /*
    const localStorageRef = localStorage.getItem('order');
    if(localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
    */
  }

  //+++ TO CHANGE AFTER 
  loadSamples = () => {
    console.log("loading sample")
      this.setState({
        urns: this.props.urns
    });
  };

  setOrderItem(key) { 
    if (this.props.order.indexOf(key) == -1) this.props.setOrderItem(key);
  }

  removeOrderItem(key) {
    this.props.removeOrderItem(this.props.removeOrderItem, key);
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
          setOrderItem={this.setOrderItem}
          removeOrderItem={this.removeOrderItem}
        />
        <Footer />
      </div>          
    );
  }
}

export default App;
