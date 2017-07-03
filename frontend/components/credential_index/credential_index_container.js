import { connect } from 'react-redux';
import { merge } from 'lodash/merge';

import { createObject } from '../helpers.js';
import CredentialIndex from './credential_index.jsx';

const mapStateToProps = (state, ownProps) => {
  switch(ownProps.setting) {
    case "all":
      return ({
        credentials: createObject(state.own_credentials, state.shared_with_me, state.shared_with_others),
        setting: ownProps.setting
      });
    case "shared_with_me":
      return ({
        credentials: state.shared_with_me,
        setting: ownProps.setting
      });
    case "shared_with_others":
      return ({
        credentials: state.shared_with_others,
        setting: ownProps.setting
      });
  };
}

export default connect(mapStateToProps, null)(CredentialIndex);
