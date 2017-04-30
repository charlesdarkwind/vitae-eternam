import React from 'react';

import NavbarTop from './NavbarTop';
import Store from './Store';
import SampleUrns from '../SampleUrns';
import base from '../base';

class App extends React.Component {
  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.addUrn = this.addUrn.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.logout = this.logout.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this); 

    // get initial state
   /* this.state = {
      urns: {},
      order: {}
    };  */

  }

  state = {
    urns: {},
    order: {},
    uid: null
  };  

  componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user });
      }
    });
  }

  authenticate(provider) {
    console.log(`Tentative de connexion avec ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData) {
    console.log(err, authData);
    if(err) {
      console.error(err);
      return; 
    }

    // grab the cart/order info
    const orderRef = base.database().ref(this.props.uid); //NEED SOME ID REFERING TO CURRENT ORDER CART

    // query the firebase ref once for the cart data and set the state
    orderRef.once('value', (snapshot) => {
      const data = snapshot.val()  || {};
      this.setState({
        uid: authData.user.uid
      });
    });   
  }

  componentWillMount() {
    //this runs  before <App> is rendered
  this.ref = base.syncState(`/store/urns`
    , {
      context: this,
      state: 'urns'
    });

    // check if customer has any order/items in localstorage
    const localStorageRef = localStorage.getItem(`order-${this.props.uid}`);

    if(localStorageRef) {
      //update our App components's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.customerID}`,
      JSON.stringify(nextState.order));
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
    // ! can only set to 1 for now since we won't have two of the same :P !
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
      </div>          
    );
  }
}

export default App;
