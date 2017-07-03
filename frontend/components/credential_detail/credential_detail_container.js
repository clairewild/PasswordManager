import { connect } from 'react-redux';

import { createObject } from '../helpers.js';
import CredentialDetail from './credential_detail.jsx';

const mapStateToProps = (state, ownProps) => {
  const credentials = createObject(state.own_credentials, state.shared_with_me, state.shared_with_others);

  return ({
    details: credentials[ownProps.params.website]
  });
};

export default connect(mapStateToProps, null)(CredentialDetail);
