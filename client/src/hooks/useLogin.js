// hooks/useLogin.js
import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      // Başarılı login durumunda userId'yi localStorage'a kaydet ve ana sayfaya yönlendir
      localStorage.setItem('userId', response.data.userId);
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
