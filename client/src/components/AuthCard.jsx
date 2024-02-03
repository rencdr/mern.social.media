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
    <div>
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      {isRegister ? (
        <>
          <input type="text" placeholder="Username" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
          <button onClick={register}>Register</button>
          {registerError && <p>{registerError}</p>}
        </>
      ) : (
        <>
          <input type="text" placeholder="Username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
          <button onClick={login}>Login</button>
          {loginError && <p>{loginError}</p>}
        </>
      )}
      <p onClick={switchAuthMode}>{isRegister ? 'Already have an account? Login' : 'Don\'t have an account? Register'}</p>
    </div>
  );
};

export default AuthCard;
