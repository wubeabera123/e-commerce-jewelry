import React from "react";
import  { useState, useRef } from 'react';
import jewvideo from '../resources/jewvideo.mp4';
import play from '../resources/play.png';
import pause from '../resources/pause.png';
//import { FaPlay, FaPause } from 'react-icons/fa';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OurStyle = () => {
    
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlayPause = () => {
        const video = videoRef.current;
        if(isPlaying){
            video.pause();
        }
        else{
            video.play();
        }
        setIsPlaying(!isPlaying);
    }
    const handleVideoPlay = () => {
        setIsPlaying(true);  
    };
    const handleVideoPause = () => {
        setIsPlaying(false);
    }; 
    
    return ( 
    <div className="ourStyle">
      <h2 style={{textAlign: "center",fontWeight:'bold',fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif',marginTop: "2rem",letterSpacing: "-1px"}}>Our Style</h2>
       <div className="video-container">
        <video
         ref={videoRef} 
         width="90%" 
         height="auto" 
         style={{marginTop: "2rem",borderRadius: "1rem"}} 
         controls
         onPlay={handleVideoPlay}
         onPause={handleVideoPause}>
           <source src={jewvideo} type="video/mp4" />
           Your browser does not support the video tag.
        </video>
        <div id="playPauseButton" onClick={togglePlayPause}>
           {isPlaying ? "pause" : "Play"}
        </div>
       </div>
    </div> 
    )
};
 
export default OurStyle;