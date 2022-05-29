import React from 'react';

// My imports
import Publications from './publications';
import star from '../../assets/svg/icon-star.svg';
import { Link } from 'react-router-dom';

// API
import api from '../../services/api';

// Hooks
import { useState, useEffect } from 'react';

const Main = () => {
  /**
   * Variáveis de estado
   */
  const [main, setMain] = useState([]);

  /**
   * Faça isso quando o componente carregar
   */
  useEffect(() => {
    api.get('/posts?star=5&_limit=2&_order=desc').then((res) => {
      setMain(res.data);
    });
  }, []);

  return (
    <section className="container">
      <div className="row">
        <div className="grid-5 pt-5 pb-3 ">
          <img src={star} className="icon-m" alt="star_icon" />
          <a className="link-title">
            <h2 className="mt-1">Os melhores e mais bem votados posts do mês.</h2>
          </a>

          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.
          </p>
        </div>
        <div className="grid-7">
          {main.map((item) => {
            return <Publications key={item.id} content={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Main;
