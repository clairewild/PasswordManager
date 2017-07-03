import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import SidebarContainer from './sidebar/sidebar_container.js';
import CredentialDetailContainer from './credential_detail/credential_detail_container.js';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/" component={SidebarContainer}>
            <Route path="/credential/:website" component={CredentialDetailContainer} />
          </Route>
      </Router>
    </Provider>
  );
};

export default Root;
