import React from 'react';

// My imports
import Hero from '../../components/Hero';
import Main from '../../components/Main';
import Viewers from '../../components/Viewers';
import Banner from '../../components/Banner';
import Recent from '../../components/Recent';

// API

const Home = () => {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* MAIN */}
      <Main />

      {/* MORE VIEWERS */}
      <Viewers pageTittle={'Mais vistos'} />

      {/* BANNER */}
      <Banner />

      {/* MOST RECENT */}
      <Recent />
    </>
  );
};

export default Home;
