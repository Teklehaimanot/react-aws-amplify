import { useState, createContext, useEffect } from 'react';
import { Auth } from 'aws-amplify';

export const userContext = createContext('default');

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    console.log('auth session');
    try {
      console.log('auth session 2');
      await Auth.currentSession();
      console.log('auth session3');
      userHasAuthenticated(true);
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  };

  return (
    <userContext.Provider
      value={{
        user,
        isAuthenticating,
        setIsAuthenticating,
        userHasAuthenticated,
        isAuthenticated,
      }}
    >
      <div>{props.children}</div>
    </userContext.Provider>
  );
};

export default UserProvider;
