import React from 'react';
import {Link} from 'react-router';
import {Card, CardMedia} from 'react-toolbox/lib/card';
import FontIcon from 'react-toolbox/lib/font_icon';
import style from './style.scss';

const PartnerCard = (props) => {
  return (
    <Link className={style['partner-card']} to="/">
      <Card className={style['partner-card-content']}>
        <CardMedia
          className={style['partner-main-img']}
          image={`/images/partner-${props.partner}.jpg`}
        >
          <div className={style['content']}>
            {
              props.description ? <div>{props.description}</div> : null
            }
            <FontIcon value="play_arrow" />
          </div>
        </CardMedia>
        <div className={style['partner-logo']}>
          <img src={`/images/partner-logo-${props.partner}.jpg`} alt="partnar logo"/>
        </div>
      </Card>
    </Link>
  );
};

PartnerCard.propTypes = {
  partner: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
};

export default PartnerCard;
