import { connect } from 'react-redux';
import { merge } from 'lodash/merge';

import { allObject, simpleObject } from '../helpers.js';
import CredentialIndex from './credential_index.jsx';

const mapStateToProps = (state, ownProps) => {
  switch(ownProps.setting) {
    case "all":
      return ({
        credentials: allObject(state.own_credentials, state.shared_with_me, state.shared_with_others),
        setting: ownProps.setting
      });
    case "shared_with_me":
      return ({
        credentials: simpleObject(state.shared_with_me),
        setting: ownProps.setting
      });
    case "shared_with_others":
      return ({
        credentials: simpleObject(state.shared_with_others),
        setting: ownProps.setting
      });
  };
}

export default connect(mapStateToProps, null)(CredentialIndex);
