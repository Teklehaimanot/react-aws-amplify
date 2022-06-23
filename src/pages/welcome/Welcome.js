import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const Welcome = () => {
  const [userConfirmed, setUserConfirmed] = useState();
  const username = 'teklehaimanotbelete@gmail.com';
  const code = '357753';

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
      setUserConfirmed(true);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
  return (
    <div>
      {userConfirmed && <div>user is conformed</div>}
      <div>
        <p>email confirmation</p>
        <input type="text" />
        <button onClick={confirmSignUp}>send</button>
      </div>
    </div>
  );
};

export default Welcome;
