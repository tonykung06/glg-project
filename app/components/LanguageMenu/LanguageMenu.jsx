import React from 'react';
import {IconMenu, MenuItem} from 'react-toolbox/lib/menu';

const LanguageMenu = () => (
  <IconMenu icon="language" position="auto" menuRipple={true}>
    <MenuItem value="english" caption="English" />
    <MenuItem value="chinese" caption="中文" />
  </IconMenu>
);

export default LanguageMenu;
