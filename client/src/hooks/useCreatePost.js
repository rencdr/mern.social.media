// useCreatePost.js
import { useState } from "react";
import axios from "axios";

const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPost = async (newPost) => {
    try {
      setLoading(true);

      // Get userId from localStorage
      const userId = localStorage.getItem('userId');

      // If userId exists, update newPost with userId
      if (userId) {
        newPost.userId = userId;
      }

      const response = await axios.post('http://localhost:5000/api/post', newPost);
      console.log(response.data); // You can process information about the created post here.
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, createPost };
};

export default useCreatePost;
