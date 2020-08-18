import React, { useContext } from 'react';
import '../VideoMain/VideoMain.css';
import BackgroundVideo from '../VideoMain/videoMain.mp4';
import { AuthContext } from '../../Auth';

function VideoMain() {
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
            We do all things
          </h1>
        </div>
      </div>
    </>
  );
}

export default VideoMain;
