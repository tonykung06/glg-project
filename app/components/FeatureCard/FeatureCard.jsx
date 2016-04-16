import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'react-toolbox/lib/card';
import style from './style.scss';

const FeatureCard = (props) => (
  <Card className={style['feature-card']}>
    <CardMedia
      className={style['feature-card-img']}
      image={props.imgSrc}
    />
    <CardTitle
      className={style['feature-card-title']}
      title={props.title}
    />
    <CardText>{props.text}</CardText>
  </Card>
);

FeatureCard.propTypes = {
  imgSrc: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

export default FeatureCard;
