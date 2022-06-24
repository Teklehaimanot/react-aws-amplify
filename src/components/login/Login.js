import React, { useState, useContext } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/UserProvider';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const { userHasAuthenticated } = useContext(userContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(username, password);
      userHasAuthenticated(true)
      console.log('navigate')
      navigate('/welcome');
    } catch (error) {
      console.log('error signing in', error);
      setError(error.message);
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login to SG Account</h3>
      <span style={{ color: 'red', marginTop: '1rem' }}>{error}</span>
      <input
        label="username"
        type="email"
        placeholder="User Name"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
        <div>
          <span>have no account? </span>
          <Link to="/signup">Register</Link>
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
