import React from 'react';
import { Link } from 'react-router';

class CredentialIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderTag = this.renderTag.bind(this);
  }

  renderTag() {
    if (this.props.tag) {
      return (
        <div className="index-tag">
          <p>{this.props.tag}</p>
        </div>
      );
    }
  }

  render() {
    const info = this.props.info;
    const imgLink = `http://s2.googleusercontent.com/s2/favicons?domain_url=http://${info.website}`;
    const link = `/credential/${info.website}`;

    return (
      <div className="index-item">
        <Link to={link}>
          <div className="index-header">
            <img className="index-favicon" src={imgLink} />
            <h3 className="index-title">{info.website}</h3>
          </div>

          <div className="index-username">
            <p>{info.username}</p>
            {this.renderTag()}
          </div>

          <i className="arrow fa fa-angle-right" aria-hidden="true"></i>
        </Link>
      </div>
    );
  }
}

export default CredentialIndexItem;
