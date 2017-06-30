import React from 'react';

class CredentialDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="credential-detail">
        <h3>{this.props.details.website}</h3>
      </div>
    );
  }
}

export default CredentialDetail;
