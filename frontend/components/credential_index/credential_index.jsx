import React from 'react';

import CredentialIndexItem from './credential_index_item.jsx'

class CredentialIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const setting = this.props.setting;
    let items = [];
    if (setting === "all") {
      items = Object.keys(this.props.credentials).map(key => {
        const credential = this.props.credentials[key];
        let tag = null;
        if (credential.lender_user_id) { tag = "Borrowing" }
        if (credential.borrower_user_id) { tag = "Shared" }
        return (
          <CredentialIndexItem key={credential.website} info={credential} tag={tag} />
        );
      });
    }
    else {
      items = this.props.credentials.map(credential => {
        const tag = ((setting === "shared_with_me") ? "Borrowing" : "Shared");
        return (
          <CredentialIndexItem key={credential.website} info={credential} tag={tag} />
        );
      });
    }

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
