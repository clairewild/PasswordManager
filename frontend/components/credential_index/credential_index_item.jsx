import React from 'react';
import { Link } from 'react-router';

class CredentialIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const info = this.props.info;
    const link = `/credential/${info.id}`;

    return (
      <div className="index-item">
        <Link to={ link }>
          <h3 className="index-title">{info.website}</h3>
          <p>{info.username}</p>
          <i className="arrow fa fa-angle-right" aria-hidden="true"></i>
        </Link>
      </div>
    );
  }
}

export default CredentialIndexItem;
