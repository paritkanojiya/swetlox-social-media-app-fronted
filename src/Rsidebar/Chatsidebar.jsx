function Chatsidebar({ profileImg, username, message,className }) {
  return (
    <div className="w-[245px]  h-15 rounded-xl flex flex-row  hover:cursor-pointer ">
      <div className="mr-2">
        <img src={profileImg} className="w-[50px] m-[7px]  rounded-full hover:cursor-pointer" alt="Profile" />
      </div>
      <div className="my-1  ml-2 overflow-hidden flex-grow w-[200px]">
        <h1 className="font-bold text-white mt-[2px]">{username}</h1>
        <h5 className="text-white truncate">{message}</h5>
      </div>
    </div>
  );
}

export default Chatsidebar;