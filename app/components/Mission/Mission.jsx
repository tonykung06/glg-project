import React from 'react';
import style from './style.scss';

const Mission = () => {
  return (
    <article className={style['mission']}>
      <header>
        <h1>Our Mission</h1>
      </header>
      <div>
        <p>GLG is a professional learning platform. We pair top professionals with our Council Members - the leading experts in every field - thousands of times a week and around the world, to teach and learn from one another. This all happens within our rigorous compliance framework.</p>
        <p>A world of increasing complexity and connectedness demands agility, accuracy, and insight. Working with GLG, professionals have countless options to learn, make better decisions, and grow.</p>
        <p>GLG’s principles of learning set us apart:</p>
      </div>
    </article>
  );
};

export default Mission;
