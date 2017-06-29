import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import SidebarContainer from './sidebar/sidebar_container.js';
import CredentialDetailContainer from './credentials/credential_detail_container.js';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
          <Route path="/" component={ SidebarContainer }>
            <Route path="/credential/:credentialId" component={ CredentialDetailContainer } />
          </Route>
      </Router>
    </Provider>
  );
};

export default Root;
