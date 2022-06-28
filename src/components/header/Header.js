import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserProvider, { userContext } from '../../context/UserProvider';

const Header = () => {
  const { user, setUser, userHasAuthenticated } = useContext(userContext);
  const navigate = useNavigate();
  const signOut = async () => {
    try {
      await Auth.signOut();
      navigate('/');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
    <header className="header">
      <ul className="header-left">
        <Link to="/file">File</Link>
        <Link to="/view">View</Link>
        <Link to="/maps">Maps</Link>
        <Link to="/help">Help</Link>
      </ul>
      <div className="header-right">
        <Link to="/profile">{user.attributes.given_name}</Link>
        <span></span>
        <button onClick={signOut}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
