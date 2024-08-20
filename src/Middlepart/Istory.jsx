import React from 'react';

function Istory({ storyImg, profileImg, isUserStory, onAddStory }) {
  return (
    <div className="relative w-[110px] h-[193px] rounded-xl overflow-hidden bg-gray-200 hover:cursor-pointer ">
      {isUserStory ? (

        <>
          
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              +
            </div>
          </div>    
          
          
        </>
      ) : (
        <>
          <img
            src={storyImg}
            alt="Story"
            className="w-full h-full object-cover blur-sm"
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

