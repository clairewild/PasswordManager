import React from 'react';

import CredentialIndexItem from './credential_index_item.jsx'

class CredentialIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const setting = this.props.setting;
    const items = Object.keys(this.props.credentials).map(key => {
      const credential = this.props.credentials[key];
      let tag = null;
      if (credential.lender_user_id) { tag = "BORROWING" }
      if (credential.borrower_user_id) { tag = "SHARED" }
      return (
        <CredentialIndexItem key={credential.website} info={credential} tag={tag} />
      );
    });

    return (
      <div>
        <ul className="credential-index">
          {items}
        </ul>
      </div>
    );
  }
}

export default CredentialIndex;
