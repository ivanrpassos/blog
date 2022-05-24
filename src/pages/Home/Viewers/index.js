import React from 'react';

// My imports
import Card from './Card';

const Viewers = () => {
  return (
    <section className="bg-section">
      <article className="container">
        <h3 className="ml-2 mb-3">Mais vistos</h3>
        <div className="row">
          <Card />
          <Card />
          <Card />
        </div>
      </article>
    </section>
  );
};

export default Viewers;
