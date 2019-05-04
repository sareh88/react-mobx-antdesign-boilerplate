import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router-dom";
//import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react';

import App from "../App/container/App";

// import LoginPage from '../Auth/containers/LoginPage';

class Root extends React.Component {
  // componentWillMount() {
  //   const { authStore, history } = this.props;
  //   authStore.getCurrentSession();
  //   if (authStore.isUserLoggedIn || authStore.isAuthenticated) {
  //     history.push('/');
  //   } else {
  //     history.push('/login');
  //   }
  // }

  render() {
    return (
      <Switch>
        <Route exact component={App} path="/" />
        {/* <Route component={LoginPage} path="/login" /> */}
      </Switch>
    );
  }
}

Root.propTypes = {
  // authStore: MobxPropTypes.observableObject.isRequired,
  history: PropTypes.object
};
Root.defaultProps = {
  history: {}
};
const RootWithAuth = withRouter(Root);

export default RootWithAuth;
