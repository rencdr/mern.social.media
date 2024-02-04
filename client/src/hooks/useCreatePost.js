// useCreatePost.js
import { useState } from "react";
import axios from "axios";

const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPost = async (newPost) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/post', newPost);
      console.log(response.data); // Oluşturulan post hakkındaki bilgileri burada işleyebilirsiniz.
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, createPost };
};

export default useCreatePost;
