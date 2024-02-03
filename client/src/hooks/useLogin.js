import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const login = async () => {
    try {
      const response = await axios.post('your_backend_api_url/login', {
        username,
        password,
      });

      console.log(response.data); 

    } catch (error) {
      setError(error.response.data.error);
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
