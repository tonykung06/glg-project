import React from 'react';
import PartnerCard from '../PartnerCard';
import style from './style.scss';

const Partners = () => {
  return (
    <section className={style['partners']}>
      <header>
        <h1>Learn with our Leading Learners</h1>
        <h2>Watch how these top professionals (all GLG clients) are transforming the way they get smart, make decisions, and innovate.</h2>
      </header>
      <div className={style['content']}>
        <PartnerCard
          partner="cisco"
          description="For us, learning is about examining the whole landscape of possibilities."
        />
        <PartnerCard
          partner="cisco"
          description="For us, learning is about examining the whole landscape of possibilities."
        />
        <PartnerCard
          partner="cisco"
          description="For us, learning is about examining the whole landscape of possibilities."
        />
        <PartnerCard
          partner="cisco"
          description="For us, learning is about examining the whole landscape of possibilities."
        />
        <PartnerCard
          partner="cisco"
          description="For us, learning is about examining the whole landscape of possibilities."
        />
        <PartnerCard
          partner="cisco"
          description="For us, learning is about examining the whole landscape of possibilities."
        />
      </div>
    </section>
  );
};

export default Partners;
