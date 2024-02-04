// hooks/useLogin.js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      // Check if userId exists in localStorage before saving it
      if (!localStorage.getItem('userId')) {
        localStorage.setItem('userId', response.data.userId);

        // Use useNavigate to navigate to the home page ("/") after successful login
        navigate('/');
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    login,
  };
};

export default useLogin;
