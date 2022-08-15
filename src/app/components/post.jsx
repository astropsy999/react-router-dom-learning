import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = ({ id, posts }) => {
  const history = useHistory();
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };

  const post = getPostById(id);

  const handleSave = () => {
    history.replace('/posts');
  };

  return (
    <>
      <h2>{post ? post.label : `Допис з id ${id} не знайдено...`}</h2>
      <button
        onClick={() => {
          handleSave();
        }}
      >
        Зберегти
      </button>
    </>
  );
};

export default Post;
