import React from 'react';

function Lsidebar({ setActiveComponent }) {
  const handleHomeClick = () => {
    console.log("Home clicked");
    setActiveComponent('Middlepart');
  };

  const handleReelsClick = () => {
    console.log("Reels clicked");
    setActiveComponent('Reels');
  };
  const handleMessagebarClick = () => {
    console.log("Chat clicked");
    setActiveComponent('Messagebar');
  };

  return (
    <div className="w-64 h-[650px] shadow-md ml-32 mt-24 fixed">
      <div className="bg-[#152331] w-64 h-16 rounded-xl flex flex-row">
        <div>
          <img 
            src="src/image/profile.jpg" 
            className="w-[50px] m-[7px] ml-3 rounded-full hover:cursor-pointer"
            alt="" 
          />
        </div>
        <div className="my-2 ml-1">
          <h1 className="font-bold text-white">Aryan Babariya</h1>
          <h5 className="text-white hover:cursor-pointer">@aaary.1</h5>
        </div>
      </div>
      <div className="bg-[#152331] w-64 h-[490px] rounded-xl flex-row mt-4">
        <div 
          className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer"
          onClick={handleHomeClick}
        >
          <div className="w-[45px] h-[45px]">
            <img src="src/image/Home.png" alt="" className="w-[30px]" />
          </div>
          <div className="ml-[20px] text-xl">
            <h2 className="text-white font-medium">Home</h2>
          </div>
        </div>
        <div 
          className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer"
          onClick={handleReelsClick}
        >
          <div className="w-[45px] h-[45px]">
            <img src="src/image/Explore.png" alt="" className="w-[30px]" />
          </div>
          <div className="ml-[20px] text-xl">
            <h2 className="text-white font-medium">Reels</h2>
          </div>
        </div>
        {/* Add more sidebar items here */}
        <div className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer">
            <div className=" w-[45px] h-[45px] ">
              <img src="src/image/Notification.png " alt="" className="w-[30px]"/>
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white font-medium">Notification</h2>
            </div>
        </div>
        <div className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer" onClick={handleMessagebarClick}>
            <div className=" w-[45px] h-[45px] ">
              <img src="src/image/Message.png " alt="" className="w-[30px]"/>
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white font-medium">Message</h2>
            </div>
        </div>
        <div className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer">
            <div className=" w-[45px] h-[45px] ">
              <img src="src/image/Bookmark.png " alt="" className="w-[30px]"/>
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white font-medium">Bookmark</h2>
            </div>
        </div>
        <div className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer">
            <div className=" w-[45px] h-[45px] ">
              <img src="src/image/Analaytics.png " alt="" className="w-[30px]"/>
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white font-medium">Analytics</h2>
            </div>
        </div>
        <div className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer">
            <div className=" w-[45px] h-[45px] ">
              <img src="src/image/Theme.png " alt="" className="w-[30px]"/>
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white font-medium">Theme</h2>
            </div>
        </div>
        <div className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer">
            <div className=" w-[45px] h-[45px] ">
              <img src="src/image/Setting.png " alt="" className="w-[25px] ml-1 m-[2px]"/>
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white font-medium">Settings</h2>
            </div>
        </div>
      </div>
      <div>
        <button className="w-64 bg-red-600 rounded-3xl text-white h-12 mt-3">Create Post</button>
      </div>
    </div>
  );
}

export default Lsidebar;
