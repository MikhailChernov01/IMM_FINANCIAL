import React from 'react';
import '../SignIn/SignIn.css'
import BackgroundVideo from '../SignIn/Video/background.mp4'


function BackVideo() {
  return (
    <>
      <div className="video-bg">
        <video autoPlay loop muted >
          <source src={BackgroundVideo} type="video/mp4"/>
        </video>
        <div className="effects"></div>
        <div className="video-bg__content">
          <h1>Video Background</h1>
        </div>
      </div>
    </>
  );
}

export default BackVideo;
