import React, { Component } from "react";

import { logout } from "../../../../services/auth";
import { withRouter } from "react-router-dom";

class LogoutButton  extends Component {
  handleLogout = e => {
    logout();
    this.props.history.push('/');
  };
  render () {
    return (
      <button onClick={this.handleLogout}>
        Sair
      </button>
    );
  };
}
export const LogoutButtonWithRouter = withRouter(LogoutButton);