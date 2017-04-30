import React from 'react';
import Store from './Store';
import SampleUrns from '../SampleUrns';

class App extends React.Component {
  constructor() {
    super();

    this.addUrn = this.addUrn.bind(this);
    // get initial state
    this.state = {
      urns: {},
      order: {}
    };
  }

  addUrn(urn) {
    // update our state
    const urns = {...this.state.urns};
    // add in our new urn
    const timestamp = Date.now();
    urns[`urn-${timestamp}`] = urn;
    // set state
    this.setState({ urns })
  }

  loadSamples = () => {
      this.setState({
        urns: SampleUrns
    });
  };

  render() {
    return (
      <div>
        <Store addUrn={this.addUrn}/>
      </div>          
    );
  }
}

export default App;
