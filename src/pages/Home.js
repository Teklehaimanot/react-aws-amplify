import React from 'react';
import Welcome from './welcome/Welcome';
import { userContext } from '../context/UserProvider';
import { useContext } from 'react';

const Home = () => {
  const { isAuthenticating, isAuthenticated, user } = useContext(userContext);

  console.log(isAuthenticating);
  console.log(isAuthenticated);
  console.log(user);
  return (
    !isAuthenticating && (
      <div>
        <Welcome />
      </div>
    )
  );
};

export default Home;
