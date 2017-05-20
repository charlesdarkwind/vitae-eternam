import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import urns from './urns';
import user from './user';
import order from './order';


const rootReducer = combineReducers({urns, user, order, routing: routerReducer});

export default rootReducer;