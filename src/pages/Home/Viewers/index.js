import React from 'react';

// My imports
import Card from './Card';

// API
import api from '../../../services/api';

// Hooks
import { useState, useEffect } from 'react';

const Viewers = () => {
  // váriaveis de estado
  const [mostView, setMostView] = useState([]);

  // faça isso qnd o componente carregar
  useEffect(() => {
    api.get('/posts?_limit=3').then((res) => {
      setMostView(res.data);
    });
  }, []);

  return (
    <section className="bg-section">
      <article className="container">
        <h3 className="ml-2 mb-3">Mais vistos</h3>
        <div className="row">
          {mostView.map((item) => {
            return <Card key={item.id} content={item} />;
          })}
        </div>
      </article>
    </section>
  );
};

export default Viewers;
