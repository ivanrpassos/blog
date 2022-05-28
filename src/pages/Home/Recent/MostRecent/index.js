import React from 'react';

// API
import api from '../../../../services/api';

// Hooks
import { useState, useEffect } from 'react';

const MostRecent = () => {
  /**
   * Variáveis de estado
   */
  const [mostRecent, setMosRecent] = useState([]);

  /**
   * Faça isso quando o componente carregar
   */
  useEffect(() => {
    api
      .get('/posts?_sort=date&_order=desc&_limit=3')
      .then((res) => {
        setMosRecent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {mostRecent.map((res) => {
        return (
          <div key={res.id} className="grid-4 card hidden p-0">
            <div className="row">
              <div className="grid-nobreak-3">
                <h6 className="color-gray text-center mb-2">
                  {res.date[3]}
                  {res.date[4]}
                  {res.date[5]}
                </h6>
                <h3 className="color-primary text-center bt-black py-2">
                  {res.date[0]}
                  {res.date[1]}
                </h3>
              </div>
              <div className="grid-nobreak-9">
                <div>
                  <h6 className="uppercase color-primary">{res.category}</h6>
                  <a href="" className="link-title">
                    <h4 className="mt-1">{res.tittle}</h4>
                  </a>

                  <p className="my-2">{res.resume}</p>
                  <a href="" className="link p-0">
                    Ler mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MostRecent;
