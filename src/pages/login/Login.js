import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    closeOpen();
  };

  const closeOpen = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <p>Login to SG Account</p>
      <input
        label="Email"
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        label="Password"
        type="password"
        placeholder="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="login-button">
        <button onClick={closeOpen}>Cancel</button>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
