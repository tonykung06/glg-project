import React from 'react';
import {IconMenu, MenuItem} from 'react-toolbox/lib/menu';
import Dialog from 'react-toolbox/lib/dialog';

class LoginMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginModelActive: false
    };

    this.toggleLoginModel = this.toggleLoginModel.bind(this);

    this.actions = [{
      label: 'Login',
      onClick: this.toggleLoginModel
    }];
  }

  toggleLoginModel() {
    this.setState({
      loginModelActive: !this.state.loginModelActive
    });
  }

  render() {
    return (
      <IconMenu icon="supervisor_account" position="auto" menuRipple={true}>
        <MenuItem onClick={this.toggleLoginModel} value="clients" caption="CLIENTS" />
        <MenuItem value="client_compliance" caption="CLIENT COMPLIANCE" />
        <MenuItem value="council_members" caption="COUNCIL MEMBERS" />
        <Dialog
          actions={this.actions}
          active={this.state.loginModelActive}
          onEscKeyDown={this.toggleLoginModel}
          onOverlayClick={this.toggleLoginModel}
          title="Login"
        >
          <p>login form here</p>
        </Dialog>
      </IconMenu>
    );
  }
}

export default LoginMenu;
