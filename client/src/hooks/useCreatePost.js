import { useState, useEffect } from "react";
import axios from "axios";

const useCreatePost = () => {
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreatePosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/post');
        setPosts(response.data); 
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCreatePosts();
  }, []);

  return { posts, loading, error }; 
};

export default useCreatePost;
