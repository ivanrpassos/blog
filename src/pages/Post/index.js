// useParams
import { useParams } from 'react-router-dom';

// Hooks
import { useState, useEffect } from 'react';
import api from '../../services/api';

const Posts = () => {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);

  const { idPost } = useParams();

  useEffect(() => {
    if (idPost) {
      api.get('/posts/' + idPost).then((res) => {
        setPost(res.data);

        api.get('/users/' + res.data.id_user).then((r) => {
          setUser(r.data);
        });
      });
    }
  }, []);

  return (
    <section className="container">
      <h6 className="uppercase color-primary text-center">{post.category}</h6>
      <h3 className="text-center">{post.tittle}</h3>

      <div className="flex-center my-3">
        <div className="profile">
          <img src={user.imageProfile} className="profile-img" />
        </div>

        <div className="ml-2">
          <h6 className="color-primary">
            {user.name} {user.surname}
          </h6>
          <h6 className="color-gray">{user.user}</h6>
        </div>
        <p className="ml-4">
          {post.date} - {post.duration} read
        </p>
      </div>

      <div className="img-banner hidden">
        <img src={post.imageURL} />
      </div>

      <div className="row my-4">
        <h4>{post.tittle}</h4>
        <p className="mt-1">{post.content}</p>
      </div>

      <div className="row">
        <div className="grid-3 dissapear"></div>
        <div className="grid-6 card">
          <div className="row">
            <div className="grid-3 flex-center pl-1">
              <div className="profile-big">
                <img className="profile-img" src={user.imageProfile} />
              </div>
            </div>
            <div className="grid-9">
              <h6 className="color-primary">
                {user.name} {user.surname}
              </h6>
              <h6 className="color-gray">{user.user}</h6>
              <p className="mt-1">{user.description}</p>
            </div>
          </div>
        </div>
        <div className="grid-3 dissapear"></div>
      </div>
    </section>
  );
};

export default Posts;
