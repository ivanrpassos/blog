import React from 'react';

// My imports
import MostRecent from './MostRecent';

const Recent = () => {
  return (
    <section className="container">
      <h3 className="ml-2 mb-3">Mais recentes</h3>
      <div className="row">
        <MostRecent />
      </div>
    </section>
  );
};

export default Recent;
