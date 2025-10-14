import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/videos.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }

    const player = useRef(null);
  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
