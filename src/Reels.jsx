import "/src/css/c.css";
import React, { useRef, useEffect, useState } from "react";
import Reel from "./Reel";
import { privateApi } from "./utils/api";
import Loadder from "./loadder/Loadder";

// const reels = [
//   {
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
//     username: "user1",
//     profileImg: "https://randomuser.me/api/portraits/men/1.jpg", // Example profile image
//     likes: 120,
//     comments: 30,
//   },
//   {
//     videoUrl: "https://www.w3schools.com/html/movie.mp4", // Example video URL
//     username: "user2",
//     profileImg: "https://randomuser.me/api/portraits/women/2.jpg", // Example profile image
//     likes: 250,
//     comments: 45,
//   },
//   {
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
//     username: "user3",
//     profileImg: "https://randomuser.me/api/portraits/men/3.jpg", // Example profile image
//     likes: 180,
//     comments: 20,
//   },
// ];

const Reels = () => {
  const containerRef = useRef(null);
  const [currentReel, setCurrentReel] = useState(0);
  const [reelsData, setReelsData] = useState([]);
  const [reelPageNum, setPageNum] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  // Fetch Reels Data from API
  useEffect(() => {
    const fetchReelsData = async () => {
      setLoading(true);
      const { data } = await privateApi.get(`/reel/load-reels/${reelPageNum}`);
      setLoading(false);
      setReelsData((prev) => [...prev, ...data.content]);
      setHasMore(!data.last);
    };

    if (hasMore) {
      fetchReelsData();
    }
  }, [reelPageNum]);

  // Infinite scrolling to fetch more reels
  const handleScrollInfinite = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 10 &&
      hasMore
    ) {
      setPageNum((prevPage) => prevPage + 1);
    }
  };

  // Intersection Observer to handle play/pause of video
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElement = entry.target.querySelector("video");
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.75 }
    );

    const reelElements = document.querySelectorAll(".reel-container");
    reelElements.forEach((el) => observer.observe(el));

    return () => {
      reelElements.forEach((el) => observer.unobserve(el));
    };
  }, [reelsData]);

  // Infinite scroll detection
  useEffect(() => {
    window.addEventListener("scroll", handleScrollInfinite);
    return () => window.removeEventListener("scroll", handleScrollInfinite);
  }, [hasMore]);

  if (loading && reelsData.length === 0) {
    return (
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <Loadder />
      </div>
    );
  }
  return (
    <div
      ref={containerRef}
      className="snap-y snap-mandatory overflow-y-scroll no-scrollbar w-[710px] h-[630px] ml-[400px] shadow-md mt-24 fixed rounded-xl bg-[#0a1117]"
    >
      <div className="bg-black w-[400px] h-[630px] rounded-xl ml-[150px]">
        {reelsData.map((reel, index) => (
          <div key={index} className="reel-container snap-start">
            <Reel reel={reel} isPlaying={index === currentReel} />
          </div>
        ))}
        {loading && <Loadder />}
      </div>
    </div>
  );
};

export default Reels;
