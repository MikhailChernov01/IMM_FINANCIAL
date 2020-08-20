import React from 'react';
import '../VideoMain/VideoMain.css';
import BackgroundVideo from '../VideoMain/videoMain.mp4';


function VideoMain() {
 

  return (
    <>
      <div className="video-bg">
        <video autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="effects"></div>
        <div className="video-bg__content">
          <h1 className="allThings">
            We do all things
          </h1>
        </div>
      </div>
    </>
  );
}

export default VideoMain;
