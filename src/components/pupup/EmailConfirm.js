import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import './EmailConfirm.scss';
import { useNavigate } from 'react-router-dom';

const EmailConfirm = () => {
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(username);
      alert('code resent succesfully');
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
      setError(err.message);
    }
  }

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
      navigate('/welcome');
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
        <div style={{ marginTop: '2rem' }}>
          <span>
            click{' '}
            <span
              style={{ textDecoration: 'underline', color: 'blue' }}
              onClick={resendConfirmationCode}
            >
              {' '}
              this{' '}
            </span>
            for resend code
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirm;
