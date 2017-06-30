import React from 'react';

class CredentialIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const info = this.props.info;
    return (
      <div className="index-item">
        <h3 className="index-title">{info.website}</h3>
        <p>{info.username}</p>
        <i className="arrow fa fa-angle-right" aria-hidden="true"></i>
      </div>
    );
  }
}

export default CredentialIndexItem;
