import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from './App';

function mapStateToProps(state) {
  return {
    urns: state.urns,
    user: state.user,
    order: state.order
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const reduxApp = connect(mapStateToProps, mapDispachToProps)(App);

export default reduxApp;