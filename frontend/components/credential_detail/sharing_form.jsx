import React from 'react';
import merge from 'lodash/merge';

class SharingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareUsername: ""
    }
    this.update = this.update.bind(this);
    this.shareCredential = this.shareCredential.bind(this);
    this.renderBorrowers = this.renderBorrowers.bind(this);
  }

  update(e) {
    this.setState({
      shareUsername: e.target.value
    });
  }

  shareCredential(e) {
    e.preventDefault();
    const credential = merge({}, this.props.info);
    credential["borrower_user_id"] = this.state.shareUsername;
    this.props.shareCredential(credential);
  }

  renderBorrowers() {
    if (this.props.info.borrower_user_id) {
      return (
        <div className="borrower">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
          <p>{this.props.info.borrower_user_id}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderBorrowers()}

        <form onSubmit={this.shareCredential} className="sharing-form">
          <label className="form-label">Username
            <input onChange={this.update} type="text" value={this.state.shareUsername} />
          </label>

          <input type="submit" value="Send invitation" />
        </form>
      </div>
    );
  }
}

export default SharingForm;
