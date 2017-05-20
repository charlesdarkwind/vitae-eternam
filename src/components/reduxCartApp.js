import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Cart from './Cart';

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

const reduxCartApp = connect(mapStateToProps, mapDispachToProps)(Cart);

export default reduxCartApp;