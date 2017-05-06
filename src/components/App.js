import React from 'react';

import NavbarTop from './NavbarTop';
import Store from './Store';
import SampleUrns from '../SampleUrns';
import Footer from './Footer';
import base from '../base';
import { authHandler } from '../auth';

class App extends React.Component {
  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.addUrn = this.addUrn.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.logout = this.logout.bind(this);
    //this.authenticate = this.authenticate.bind(this);
    //this.authHandler = this.authHandler.bind(this); 
  }

  state = {
    urns: {},
    order: {}
  };  

  componentWillMount() {
    base.onAuth((user) => {
      if(user) {
        authHandler(this, null, { user });
      }
    });

    //this runs  before <App> is rendered
    this.ref = base.syncState(`/store/urns`
      , {
        context: this,
        state: 'urns'
    });

    // check if customer has any order/items in localstorage
    if(localStorage.getItem("order")) {
      //update our App components's order state
      this.setState({
        order: JSON.parse(localStorage.getItem("order"))
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("order", JSON.stringify(nextState.order));
  }

  loadSamples = () => {
    console.log("loading sample")
      this.setState({
        urns: SampleUrns
    });
  };

   updateUrn = (key, updatedUrn) => {
    const urns = {...this.state.urns};
    urns[key] = updatedUrn;
    this.setState({ urns });
  }

  removeUrn = (key) => {
    const urns = {...this.props.urns};
    urns[key] = null;
    this.setState({ urns });
  };


  addUrn(urn) {
    // update our state
    const urns = {...this.state.urns};
    // add in our new urn
    const timestamp = Date.now();
    urns[`urn-${timestamp}`] = urn;
    // set state
    this.setState({ urns })
  }

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
          addUrn={this.addUrn}
          loadSamples={this.loadSamples}
          urns={this.state.urns}
          updateUrn={this.updateUrn}
          removeUrn={this.removeUrn}
          addToOrder={this.addToOrder}
        />
        <Footer />
      </div>          
    );
  }
}

export default App;
