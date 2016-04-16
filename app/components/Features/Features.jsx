import React from 'react';
import FeatureCard from '../FeatureCard';
import style from './style.scss';

const Features = () => {
  return (
    <div className={style['features']}>
      <FeatureCard title="Specificity" text="Precise expertise to gain complete understanding of any topic" imgSrc="/images/features-specificity.png" />
      <FeatureCard title="Availability" text="Expertise – fast, within a few hours or days, ensuring learning is timely" imgSrc="/images/features-availability.png" />
      <FeatureCard title="Interactivity" text="Ongoing conversations that facilitate superior knowledge exchange" imgSrc="/images/features-interactivity.png" />
      <FeatureCard title="Trust" text="Learning one-on-one or in small groups, making it easy, effective and comfortable for the learner" imgSrc="/images/features-trust.png" />
    </div>
  );
};

export default Features;
