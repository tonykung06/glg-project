import React from 'react';
import style from './style.scss';

const Footer = () => {
  console.log('what is the footer style', style);
  return (
    <div className={style['footer']}>
      <div className={style['content']}>
        <div className={style['logo']}>GLG</div>
        <div>
          <h1>contact</h1>
          <ul>
            <li>+1212 984 8500</li>
            <li className={style['email']}>
              <a href="mailto:info@glg.it">info@glg.it</a>
            </li>
            <li>icons</li>
          </ul>
        </div>
        <div>
          <h1>learn</h1>
          <ul>
            <li>who we are</li>
            <li>council memebrs</li>
            <li>clients</li>
            <li>videos</li>
            <li>careers</li>
            <li>news</li>
            <li>contact</li>
            <li>compliance</li>
            <li>research store</li>
            <li>terms & privacy</li>
          </ul>
        </div>
        <div>
          <h1>log in</h1>
          <ul>
            <li>clients</li>
            <li>client compliance</li>
            <li>council members</li>
          </ul>
        </div>
      </div>
      <div className={style['trademark-text']}>
        © 2016, Gerson Lehrman Group, Inc. All rights reserved. GLG and the GLG logo are trademarks of Gerson Lehrman Group, Inc.
      </div>
    </div>
  );
};

export default Footer;
