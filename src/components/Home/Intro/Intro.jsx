import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import "./Intro.css";
import introhai from '../../../images/intro.mp4';

const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className='app__video'>
      <video
        src={introhai}
        ref={vidRef}
        typeof='video/mp4'
        loop
        controls={false}
        muted
      />

      <div className='app__video-overlay flex__center'>
        <div className='app_video-overlay_circle flex__center' onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : <BsFillPlayFill color='#fff' fontSize={30} />
          }
        </div>
      </div>

    </div>
  )
}

export default Intro;
