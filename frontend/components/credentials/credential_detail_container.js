import { connect } from 'react-redux';

import CredentialDetail from './credential_detail.jsx';

const mapStateToProps = (state, ownProps) => {
  const credentials = state.own_credentials.concat(state.shared_with_me).concat(state.shared_with_others);
  let info = null;
  credentials.forEach(obj => {
    if (obj.id == ownProps.params.credentialId) {
      info = obj;
    }
  });
  return ({
    details: info
  });
};

export default connect(mapStateToProps, null)(CredentialDetail);
