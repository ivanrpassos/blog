import React from 'react';

// My imports
import Hero from './Hero';
import Main from './Main';
import Viewers from './Viewers';
import Banner from './Banner';
import Recent from './Recent';

// API
import api from '../../services/api';

// Hooks
import { useState, useEffect } from 'react';

const Home = () => {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* MAIN */}
      <Main />

      {/* MORE VIEWERS */}
      <Viewers />

      {/* BANNER */}
      <Banner />

      {/* MOST RECENT */}
      <Recent />
    </>
  );
};

export default Home;
