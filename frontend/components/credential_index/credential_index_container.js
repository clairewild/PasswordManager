import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import CredentialIndex from './credential_index.jsx';

const mapStateToProps = (state, ownProps) => {
  let credentials;
  console.log(ownProps);
  switch(ownProps.params.setting) {
    case "all":
      credentails = state.own_credentials.concat(state.shared_with_me).concat(state.shared_with_others);
    case "shared_with_me":
      credentials = state.shared_with_me;
    case "shared_with_others":
      credentials = state.shared_with_others;
  }
  return ({
    credentials: credentials
  });
}

export default connect(mapStateToProps, null)(withRouter(CredentialIndex));
