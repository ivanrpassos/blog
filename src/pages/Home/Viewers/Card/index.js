import React from 'react';

// My imports
import { Link } from 'react-router-dom';

const Card = ({ content }) => {
  return (
    <div className="grid-4 card hidden p-0">
      <div className="thumb hidden">
        <Link to={'/post/' + content.id} className="p-0">
          <img src={content.imageURL} alt="" />
        </Link>
      </div>
      <div className="p-2">
        <h6 className="color-gray">{content.date}</h6>
        <h6 className="uppercase color-primary">{content.category}</h6>
        <Link to={'/post/' + content.id} className="link-title">
          <h4 className="mt-1">{content.tittle}</h4>
        </Link>

        <p className="my-2">{content.resume}</p>
        <Link to={'/post/' + content.id} className="link p-0">
          Ler mais
        </Link>
      </div>
    </div>
  );
};

export default Card;
