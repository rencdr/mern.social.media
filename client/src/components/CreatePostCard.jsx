import React, { useState } from 'react';
import useCreatePost from '../hooks/useCreatePost';

const CreatePostCard = () => {
  const { posts, loading, error, createPost } = useCreatePost();
  const [newPost, setNewPost] = useState('');

  const handleCreatePost = async () => {
    try {
      await createPost(newPost);

      // Gönderi başarıyla oluşturulduğunda işlemler burada yapılabilir
      console.log('Post created successfully');
    } catch (error) {
      // Hata durumunda yapılacak işlemler burada yapılabilir
      console.error('Error creating post:', error.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
        <textarea
          placeholder="Write your post here..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md w-full"
        />
        <button onClick={handleCreatePost} className="bg-blue-500 text-white p-2 rounded-md w-full">Create Post</button>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Existing Posts</h3>
          {posts.map((post) => (
            <div key={post.id} className="border p-2 mb-2 rounded-md">
              {post.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatePostCard;