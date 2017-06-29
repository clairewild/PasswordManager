import React from 'react';

class CredentialIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const info = this.props.info;
    return (
      <div>
        <h3>{info.website}</h3>
        <p>{info.username}</p>
      </div>
    );
  }
}

export default CredentialIndexItem;
