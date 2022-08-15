import Post from './post';
import PostsList from './postsList';
import { useParams } from 'react-router-dom';
// import query from 'query-string';
// import _ from 'lodash';

const Posts = () => {
  const params = useParams();
  const posts = [
    { id: 1, label: 'post 1' },
    { id: 2, label: 'post 2' },
    { id: 3, label: 'post 3' },
  ];

  const { postId } = params;

  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
};

export default Posts;
