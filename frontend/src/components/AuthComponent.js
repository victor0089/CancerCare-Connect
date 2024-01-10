import React, { useState } from 'react';
import axios from 'axios';

const AuthComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/auth/login', { username, password })
      .then(response => {
        // Handle successful login (store token, redirect, etc.)
        console.log('Login successful', response.data);
      })
      .catch(error => {
        // Handle login error
        console.error('Login failed', error.response.data);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default AuthComponent;

