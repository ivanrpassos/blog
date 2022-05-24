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
  // váriaveis de estado
  const [mostView, setMostView] = useState([]);
  const [banner, setBanner] = useState([]);

  // faça isso qnd o componente carregar
  useEffect(() => {
    // Requisição para os posts mais vistos
    api.get('/posts?_limit=3').then((res) => {
      setMostView(res.data);
    });

    // Requisição para banner
    api.get('/posts?_order=desc&_limit=1').then((res) => {
      setBanner(res.data);
    });
  }, []);

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
