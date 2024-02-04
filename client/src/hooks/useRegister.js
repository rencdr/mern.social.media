// hooks/useRegister.js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // useNavigate hook'u ile navigate fonksiyonunu al
  const navigate = useNavigate();

  const register = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password,
      });

      // response.data var mı kontrol et
      if (response && response.data && response.data.userId) {
        // Başarılı kayıt durumunda userId'yi localStorage'a kaydet ve ana sayfaya yönlendir
        localStorage.setItem('userId', response.data.userId);
        // useNavigate hook'u ile ana sayfaya yönlendir
        navigate('/');
      } else {
        setError('Registration failed. User ID not found in the response.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during registration.');
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    error,
    register,
  };
};

export default useRegister;
