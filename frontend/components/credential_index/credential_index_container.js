import { connect } from 'react-redux';

import CredentialIndex from './credential_index.jsx';

const mapStateToProps = (state, ownProps) => {
  switch(ownProps.setting) {
    case "all":
      return ({
        credentials: state.own_credentials.concat(state.shared_with_me).concat(state.shared_with_others)
      });
    case "shared_with_me":
      return ({
        credentials: state.shared_with_me
      });
    case "shared_with_others":
      return ({
        credentials: state.shared_with_others
      });
  };
}

export default connect(mapStateToProps, null)(CredentialIndex);
