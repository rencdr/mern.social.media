import React, { useState } from 'react';
import useRegister from '../hooks/useRegister';
import useLogin from '../hooks/useLogin';

const AuthCard = () => {
  const [isRegister, setIsRegister] = useState(true);

  const {
    username: registerUsername,
    setUsername: setRegisterUsername,
    email,
    setEmail,
    password: registerPassword,
    setPassword: setRegisterPassword,
    error: registerError,
    register,
  } = useRegister();

  const {
    username: loginUsername,
    setUsername: setLoginUsername,
    password: loginPassword,
    setPassword: setLoginPassword,
    error: loginError,
    login,
  } = useLogin();

  const switchAuthMode = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{isRegister ? 'Register' : 'Login'}</h2>
        {isRegister ? (
          <>
            <input type="text" placeholder="Username" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} className="mb-2 p-2 border border-gray-300 rounded-md w-full" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2 p-2 border border-gray-300 rounded-md w-full" />
            <input type="password" placeholder="Password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded-md w-full" />
            <button onClick={register} className="bg-blue-500 text-white p-2 rounded-md w-full">Register</button>
            {registerError && <p className="text-red-500 mt-2">{registerError}</p>}
          </>
        ) : (
          <>
            <input type="text" placeholder="Username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} className="mb-2 p-2 border border-gray-300 rounded-md w-full" />
            <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded-md w-full" />
            <button onClick={login} className="bg-blue-500 text-white p-2 rounded-md w-full">Login</button>
            {loginError && <p className="text-red-500 mt-2">{loginError}</p>}
          </>
        )}
        <p onClick={switchAuthMode} className="text-blue-500 cursor-pointer mt-2">
          {isRegister ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
        </p>
      </div>
    </div>
  );
};

export default AuthCard;
