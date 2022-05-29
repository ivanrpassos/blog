import React from 'react';

// My imports
import { Link } from 'react-router-dom';

// API
import api from '../../services/api';

// Hooks
import { useState, useEffect } from 'react';

const Banner = () => {
  /**
   * Variáveis de estado
   */
  const [banner, setBanner] = useState([]);

  /**
   * Faça isso quando o componente carregar
   */
  useEffect(() => {
    api
      .get('/posts?_order=desc&_limit=1')
      .then((res) => {
        setBanner(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {banner.map((res) => {
        return (
          <section key={res.id} className="container">
            <div className="img-banner hidden">
              <img src={res.imageURL} alt="profile_image" />
            </div>
            <div className="row mt-3">
              <h6 className="color-gray text-center">{res.date}</h6>
              <h6 className="uppercase color-primary text-center">{res.category}</h6>
              <Link to={'/post/' + res.id} className="link-title">
                <h2 className="mt-1 text-center">{res.tittle}</h2>
              </Link>

              <p className="my-2 text-center">{res.resume}</p>
              <div className="flex-center">
                <Link to={'/post/' + res.id} className="link p-0">
                  Ler mais
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Banner;
