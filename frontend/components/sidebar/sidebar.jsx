import React from 'react';

import CredentialIndexContainer from '../credential_index/credential_index_container.js'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: "all"
    }
    this.changeSetting = this.changeSetting.bind(this)
  }

  changeSetting(option) {
    return (e) => {
      e.stopPropagation();
      this.setState({
        setting: option
      });
    }
  }

  render() {
    return (
      <div>
        <aside className="sidebar">
          <ul>
            <div onClick={this.changeSetting("all")}
                 className={`${this.state.setting === "all" ? "active" : ""} sidebar-item`}>
              <p>All</p>
            </div>

            <div className="sidebar-item">
              <p>Most used</p>
            </div>

            <div onClick={this.changeSetting("shared_with_others")}
                 className={`${this.state.setting === "shared_with_others" ? "active" : ""} sidebar-item`}>
              <p>My shared logins</p>
            </div>

            <div onClick={this.changeSetting("shared_with_me")}
                 className={`${this.state.setting === "shared_with_me" ? "active" : ""} sidebar-item`}>
              <p>Shared with me</p>
            </div>
          </ul>
        </aside>

        <CredentialIndexContainer setting={this.state.setting}/>
        {this.props.children}
      </div>
    );
  }
}

export default Sidebar;
