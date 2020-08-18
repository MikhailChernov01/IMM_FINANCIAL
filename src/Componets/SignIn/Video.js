import React, { useContext } from 'react';
import '../SignIn/SignIn.css';
import BackgroundVideo from '../SignIn/Video/background.mp4';
import { AuthContext } from '../../Auth';

function BackVideo() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  

  return (
    <>
      <div className="video-bg">
        <video autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="effects"></div>
        <div className="video-bg__content">
          <h1>
            You can start to work
            <br /> {currentUser.displayName}
          </h1>
        </div>
      </div>
    </>
  );
}

export default BackVideo;
