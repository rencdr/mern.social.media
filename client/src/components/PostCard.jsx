import React from 'react';
import usePostList from '../hooks/usePostList';

const PostCard = () => {
  const { posts, loading, error } = usePostList();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Post List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map(post => (
          <div key={post._id} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">{post.content}</h2>
            <p className="text-gray-600">User: {post.user.username}</p>
            <p className="text-gray-600">Likes: {post.likes.length}</p>
            <ul className="mt-2">
              {post.comments.map(comment => (
                <li key={comment._id} className="text-sm text-gray-500">
                  {comment.content} - {comment.user.username}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
