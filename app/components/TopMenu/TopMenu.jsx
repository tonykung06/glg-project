import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import TopMenuTabs from '../TopMenuTabs';
import LanguageMenu from '../LanguageMenu';
import LoginMenu from '../LoginMenu';
import {Link} from 'react-router';
import style from './style.scss';

const TopMenu = () => {
  return (
    <AppBar className={style['top-main-nav']} fixed={true} flat={false}>
      <Link className={style['home-logo']} to="/">GLG</Link>
      <Navigation>
        <TopMenuTabs />
      </Navigation>
      <Navigation className={style['lang-account-menus']}>
        <LanguageMenu />
        <LoginMenu />
      </Navigation>
    </AppBar>
  );
};

export default TopMenu;
