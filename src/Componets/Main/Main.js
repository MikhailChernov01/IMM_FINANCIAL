import React, { useContext } from 'react';
import { AuthContext } from '../../Auth';
import BackVideo from '../SignIn/Video';

function Main() {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return (
      <>
        <BackVideo />
      </>
    );
  }
  return <></>;
}

export default Main;
