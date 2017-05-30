import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import urns from './SampleUrns';
const user = {name: null, email: null, photoURL: null, uid: null, adress: {}};
const order = ["urn1", "urn2", "urn3", "urn4"];


// create an object for the default data
const defaultState = {
  urns,
  user,
  order
};

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;