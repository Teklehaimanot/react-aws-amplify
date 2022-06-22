import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './Signup.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [given_name, setGiven_name] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email,
          phone_number: phoneNumber,
          given_name: given_name,
        },
      });
      console.log(user);
      navigate('/welcome');
    } catch (error) {
      console.log('error signing up:', error);
      setError(error.message);
    }
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Signup to SG Account</h3>
      <span style={{ color: 'red', marginTop: '1rem' }}>{error}</span>
      <input
        label="Given Name"
        type="text"
        placeholder="Given Name"
        required
        value={given_name}
        onChange={(e) => setGiven_name(e.target.value)}
      />
      <input
        label="User Name"
        type="text"
        placeholder="user name"
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
      <input
        label="Email"
        type="email"
        placeholder="Email Address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PhoneInput
        international
        defaultCountry="US"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={setPhoneNumber}
      />

      <div className="signup-button">
        <div>
          <span>have an account? </span>
          <Link to="/login"> Login</Link>
        </div>
        <button type="submit">Signup</button>
      </div>
    </form>
  );
};

export default Signup;
