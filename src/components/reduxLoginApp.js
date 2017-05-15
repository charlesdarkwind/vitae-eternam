import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Login from './Login';

function mapStateToProps(state) {
  return {
    urns: state.urns,
    user: state.user
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const reduxLoginApp = connect(mapStateToProps, mapDispachToProps)(Login);

export default reduxLoginApp;