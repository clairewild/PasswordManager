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
    return (e) => {
      e.stopPropagation();
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
            <div onClick={this.changeSelector("all")} className="sidebar-item">
              <p>All</p>
            </div>

            <div className="sidebar-item">
              <p>Most used</p>
            </div>

            <div onClick={this.changeSelector("shared_with_others")} className="sidebar-item">
              <p >My shared logins</p>
            </div>

            <div onClick={this.changeSelector("shared_with_me")} className="sidebar-item">
              <p>Shared with me</p>
            </div>
          </ul>
        </aside>

        <CredentialIndexContainer setting={ this.state.setting }/>
        { this.props.children }
      </div>
    );
  }
}

export default Sidebar;
