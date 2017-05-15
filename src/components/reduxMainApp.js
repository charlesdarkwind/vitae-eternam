import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import MainPage from './MainPage';

function mapStateToProps(state) {
  return {
    urns: state.urns,
    user: state.user
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const reduxMainApp = connect(mapStateToProps, mapDispachToProps)(MainPage);

export default reduxMainApp;