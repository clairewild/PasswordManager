import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allObject } from '../helpers.js';
import { removeCredential } from '../../actions/credentials_actions.js';
import { removeBorrow } from '../../actions/borrowing_actions.js';
import { removeLend } from '../../actions/lending_actions.js';

import CredentialDetail from './credential_detail.jsx';

const mapStateToProps = (state, ownProps) => {
  const credentials = allObject(state.own_credentials, state.shared_with_me, state.shared_with_others);
  return ({
    details: credentials[ownProps.params.website]
  });
};

const mapDispatchToProps = dispatch => ({
  delete: credential => {
    dispatch(removeCredential(credential));
    dispatch(removeBorrow(credential));
    dispatch(removeLend(credential));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CredentialDetail));
