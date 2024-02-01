// PostList.js

import React from 'react';
import usePostList from '../hooks/usePostList';

const PostList = () => {
  const { posts, loading, error } = usePostList();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h2>{post.content}</h2>
            <p>User: {post.user.username}</p>
            <p>Likes: {post.likes.length}</p>
            <ul>
              {post.comments.map(comment => (
                <li key={comment._id}>
                  <p>{comment.content} - {comment.user.username}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
