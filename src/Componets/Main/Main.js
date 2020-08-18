import React, { useContext } from 'react';
import { AuthContext } from '../../Auth';
import BackVideo from '../SignIn/Video';
import VideoMain from '../VideoMain/VideoMain';

function Main() {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return (
      <>
        <BackVideo />
      </>
    );
  }
  return <><VideoMain/></>;
}

export default Main;
