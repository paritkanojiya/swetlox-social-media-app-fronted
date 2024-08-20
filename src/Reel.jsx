import "/src/css/c.css"
import React, { useRef, useEffect } from 'react';
import "/src/css/c.css";

const Reel = ({ reel, isPlaying }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="relative w-full h-[630px]  flex items-center justify-center ">
      <video
        ref={videoRef}
        src={reel.videoUrl}
        controls
        loop
        className="w-full h-[630px] object-cover rounded-xl"
      />
      <div className="absolute bottom-4 left-4 flex items-center space-x-3">
        <img
          src={reel.profileImg}
          alt="Profile"
          className="w-14 h-14 rounded-full border-2 border-white"
        />
        <span className="text-white font-semibold">{reel.username}</span>
      </div>
      <div className="absolute bottom-6 right-4 flex flex-row items-center space-y-4 ">

        <button className="text-white flex items-center space-x-1 mt-4 mr-3">
          <img src="src/image/Like.png" alt="Like" className="h-8 mt-2 ml-4" />

          <i className="fa fa-heart text-2xl"></i>
          <span>{reel.likes}</span>
        </button>

        <button className="text-white flex items-center space-x-1 ">
          <img src="src/image/Comment.png" alt="Comment" className="h-10 " />
          <i className="fa fa-comment text-2xl"></i>
          <span>{reel.comments}</span>
        </button>
       
      </div>
    </div>
  );
};

export default Reel;


