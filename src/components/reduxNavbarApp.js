import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import NavbarTop from './NavbarTop';

function mapStateToProps(state) {
  return {
    urns: state.urns,
    user: state.user
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const reduxNavbarApp = connect(mapStateToProps, mapDispachToProps)(NavbarTop);

export default reduxNavbarApp;