import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import './EmailConfirm.scss';
import { Link, useNavigate } from 'react-router-dom';

const EmailConfirm = () => {
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
      navigate('/');
    } catch (error) {
      console.log('error confirming sign up', error);
      setError(error.message);
    }
  }
  return (
    <div className="modal">
      <div className="modal-popup">
        <p>pleace insert and submit your confirmation code from your email</p>
        <span style={{ color: 'red', marginTop: '1rem' }}>{error}</span>

        <input
          label="username"
          type="text"
          placeholder="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          label="verification code"
          type="text"
          placeholder="Verification code"
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={confirmSignUp}>send</button>
      </div>
    </div>
  );
};

export default EmailConfirm;
