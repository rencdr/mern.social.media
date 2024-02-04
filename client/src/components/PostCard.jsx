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
    <div className="grid grid-cols-1 gap-6 mx-auto my-auto w-2/3 p-1">
      {posts.map(post => (
        <div key={post._id} className="bg-white p-4 rounded-md shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-2">{post.content}</h2>
          <div className="flex items-center text-gray-600 mb-2">
            <span className="mr-2">User:</span>
            <span>{post.user.username}</span>
          </div>
          <ul>
            {post.comments && post.comments.length > 0 && (
              <div className="mb-2 text-gray-500">
                <span className="font-semibold">Comments:</span>
                {post.comments.map(comment => (
                  <li key={comment._id} className="ml-2">
                    {comment.content} - {comment.user.username}
                  </li>
                ))}
              </div>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}  

export default PostCard;
