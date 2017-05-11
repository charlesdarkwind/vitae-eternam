import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import urns from './urns';
import user from './user';

const rootReducer = combineReducers({urns, user, routing: routerReducer});

export default rootReducer;