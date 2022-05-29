import React from 'react';

// My imports
import Card from './Card';

// API
import api from '../../services/api';

// Hooks
import { useState, useEffect } from 'react';
import { useHeader } from '../../context/headerContext';

const Viewers = ({ pageTittle }) => {
  // váriaveis de estado
  const [posts, setPosts] = useState([]);

  // Context
  const { form } = useHeader();

  useEffect(() => {
    const fetchPostsSearch = async () => {
      const { data } = await api.get(`/posts?q=${form.search}`);

      setPosts(data);
    };
    fetchPostsSearch();
  }, [form.search]);

  useEffect(() => {
    if (!form.search) {
      const fetchPosts = async () => {
        const { data } = await api.get('/posts?_limit=3');

        setPosts(data);
      };
      fetchPosts();
    }
  }, [form.search]);

  return (
    <section className="bg-section">
      <article className="container">
        <h3 className="ml-2 mb-3">{pageTittle}</h3>

        <div className="row">
          {posts.map((res) => {
            return <Card key={res.id} content={res} />;
          })}
        </div>
      </article>
    </section>
  );
};

export default Viewers;
