import React from 'react';

// My imports
import { Link } from 'react-router-dom';

// API
import api from '../../../services/api';

// Hooks
import { useState, useEffect } from 'react';

const Publications = ({ content }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (content) {
      api
        .get('/users/' + content.id_user)
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="py-3 bb-black">
      <h6 className="color-gray">{content.date}</h6>
      <h6 className="uppercase color-primary">{content.category}</h6>
      <Link to={'/post/' + content.id} className="link-title">
        <h4 className="mt-1">{content.tittle}</h4>
      </Link>

      <p className="mt-1">{content.resume}</p>
      <div className="mt-2 flex-space">
        <div className="flex-start-row">
          <div className="profile">
            <img src={user.imageProfile} className="profile-img" alt="profile_img" />
          </div>
          <div className="ml-2">
            <h6 className="color-primary">
              {user.name} {user.surname}
            </h6>
            <h6 className="color-gray">{user.user}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
