import React from 'react';
import TopMenu from '../components/TopMenu';
import Mission from '../components/Mission';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import LearnMoreMembership from '../components/LearnMoreMembership';
import Masthead from '../components/Masthead';
import style from './style.scss';

const HomePage = () => {
  return (
    <div>
      <TopMenu />
      <Masthead />
      <LearnMoreMembership />
      <Mission />
      <Features />
      <p className={style['prompt']}>
        Learn more about who we are and how to engage with us.
      </p>
      <Partners />
      <Footer />
    </div>
  );
};

export default HomePage;
