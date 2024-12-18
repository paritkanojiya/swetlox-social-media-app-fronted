import React from "react";

function Istory({ storyImg, profileImg, isUserStory, onAddStory, userName }) {
  console.log(userName);
  return (
    <div className="relative w-[110px] h-[193px]  rounded-xl overflow-hidden bg-gray-200 hover:cursor-pointer ">
      <h1 className="z-40 font-bold text-center">{userName?.toUpperCase()}</h1>
      <img
        src={profileImg}
        className="absolute w-[100%] h-[100%] object-cover blur-sm"
      ></img>
      {isUserStory ? (
        <>
          <div className="w-full h-full flex items-center relative justify-center">
            <div className="w-12 h-12 bg-[#1c1c1c] rounded-full relative text-center flex items-center justify-center text-white text-3xl font-bold">
              +
            </div>
          </div>
        </>
      ) : (
        <>
          <img
            src={storyImg}
            alt="Story"
            className="w-full h-full object-cover blur-sm z-0"
          />

          <div className="absolute bottom-2 left-2 w-12 h-12 ml-5 rounded-full overflow-hidden border-2 border-white">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Istory;
