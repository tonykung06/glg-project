import React from 'react';
import {IconMenu, MenuItem} from 'react-toolbox/lib/menu';

const LoginMenu = () => (
  <IconMenu icon="supervisor_account" position="auto" menuRipple={true}>
    <MenuItem value="clients" caption="CLIENTS" />
    <MenuItem value="client_compliance" caption="CLIENT COMPLIANCE" />
    <MenuItem value="council_members" caption="COUNCIL MEMBERS" />
  </IconMenu>
);

export default LoginMenu;
