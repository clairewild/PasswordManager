import React from 'react';

class CredentialDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.delete(this.props.details);
    this.props.router.push("/");
  }

  render() {
    const info = this.props.details;
    const imgLink = `http://s2.googleusercontent.com/s2/favicons?domain_url=http://${info.website}`;

    return (
      <div className="credential-detail">
        <div className="index-header">
          <img className="index-favicon" src={imgLink} />
          <h3 className="index-title">{info.website}</h3>

          <div onClick={this.handleDelete} className="delete-button">
            <i className="fa fa-trash"></i>
          </div>
        </div>

        <div className="detail-section">
          <div className="detail-section-header">
            <p>Login Info</p>
          </div>

          <form>
            <label className="form-label">URL
              <input type="text" value={info.website}/>
            </label>

            <label className="form-label">User Name
              <input type="text" value={info.username}/>
            </label>

            <label className="form-label">Password
              <input type="password" value={info.password_id}/>
            </label>
          </form>
        </div>

        <div className="detail-section">
          <div className="detail-section-header">
            <p>My Usage</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CredentialDetail;
