import "/src/css/c.css";
import React, { useRef, useEffect, useState } from 'react';
import Reel from './Reel';

const Reels = ({ reels }) => {
  const containerRef = useRef(null);
  const [currentReel, setCurrentReel] = useState(0);

  const scrollToReel = (index) => {
    setCurrentReel(index);
    const reelHeight = containerRef.current.clientHeight;
    containerRef.current.scrollTo({
      top: index * reelHeight,
      behavior: 'smooth',
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowDown' && currentReel < reels.length - 1) {
      scrollToReel(currentReel + 1);
    } else if (event.key === 'ArrowUp' && currentReel > 0) {
      scrollToReel(currentReel - 1);
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      const reelHeight = containerRef.current.clientHeight;
      const index = Math.round(scrollTop / reelHeight);

      if (index !== currentReel) {
        setCurrentReel(index);
      }
    }
  };

  const handleMouseWheel = (event) => {
    if (event.deltaY > 0 && currentReel < reels.length - 1) {
      scrollToReel(currentReel + 1);
    } else if (event.deltaY < 0 && currentReel > 0) {
      scrollToReel(currentReel - 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    
    if (container) {
      window.addEventListener('keydown', handleKeyPress);
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('wheel', handleMouseWheel);

      return () => {
        window.removeEventListener('keydown', handleKeyPress);
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('wheel', handleMouseWheel);
      };
    }
  }, [currentReel]);

  return (
    <div
      ref={containerRef}
      className="overflow-y-scroll no-scrollbar w-[710px] h-[630px] ml-[400px] shadow-md mt-24 fixed rounded-xl bg-[#0a1117]"
    >
      <div className="bg-black w-[400px] h-[630px] rounded-xl aryan ml-[150px]">
        {reels.map((reel, index) => (
          <div key={index} className="">
            <Reel reel={reel} isPlaying={index === currentReel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
