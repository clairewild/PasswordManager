import React from 'react';

import CredentialIndexContainer from '../credential_index/credential_index_container.js'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: "all"
    }
    this.changeSelector = this.changeSelector.bind(this)
  }

  changeSelector(option) {
    return () => {
      this.setState({
        index: option
      });
    }
  }

  render() {
    return (
      <div>
        <aside className="sidebar">
          <ul>
            <li onClick={this.changeSelector("all")}>All</li>
            <li>Most used</li>
            <li onClick={this.changeSelector("shared_with_others")}>My shared logins</li>
            <li onClick={this.changeSelector("shared_with_me")}>Shared with me</li>
          </ul>
        </aside>

        <CredentialIndexContainer setting={ this.state.setting }/>
      </div>
    );
  }
}

export default Sidebar;
