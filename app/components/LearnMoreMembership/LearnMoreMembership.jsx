import React from 'react';
import {Link} from 'react-router';
import {Button} from 'react-toolbox/lib/button';
import style from './style.scss';

const LearnMoreMembership = (props) => {
  return (
    <div className={style['learn-more-membership']}>
      <Link className={style['member-btn']} to="/">
        <Button raised={true}>
          <div>become a</div>
          <div><strong>council member</strong></div>
          <div className={style['learn-more']}>learn more</div>
        </Button>
      </Link>
      <Link className={style['client-btn']} to="/">
        <Button raised={true}>
          <div>become a</div>
          <div><strong>client</strong></div>
          <div className={style['learn-more']}>learn more</div>
        </Button>
      </Link>
    </div>
  );
};

export default LearnMoreMembership;
