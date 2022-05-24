import React from 'react';

const MostRecent = () => {
  return (
    <div className="grid-4 card hidden p-0">
      <div className="row">
        <div className="grid-nobreak-3">
          <h6 className="color-gray text-center mb-2">NOV</h6>
          <h3 className="color-primary text-center bt-black py-2">12</h3>
        </div>
        <div className="grid-nobreak-9">
          <div>
            <h6 className="uppercase color-primary">GAMES</h6>
            <a href="" className="link-title">
              <h4 className="mt-1">Novo console da SONY: o PS5</h4>
            </a>

            <p className="my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.
            </p>
            <a href="" className="link p-0">
              Ler mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostRecent;
