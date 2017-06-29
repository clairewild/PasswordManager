import React from 'react';

import CredentialIndexItem from './credential_index_item.jsx'

class CredentialIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.credentials.map(item => <CredentialIndexItem key={item.website} info={item} />)

    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default CredentialIndex;
