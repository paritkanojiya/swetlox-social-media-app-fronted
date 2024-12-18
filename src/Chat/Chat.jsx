function Chat({ profileImg, username }) {
  return (
    <div className="w-[665px] h-16 rounded-xl  flex flex-row ml-[5px] hover:cursor-pointer bg-[#493389]">
      <div className="mr-2">
        <img
          src={profileImg}
          className="w-[50px] m-[7px] h-[50px] ml-3 rounded-full hover:cursor-pointer"
          alt="Profile"
        />
      </div>
      <div className="my-1  ml-2 overflow-hidden flex-grow w-[200px]">
        <h1 className="font-bold text-white mt-[2px]">{username}</h1>
      </div>
    </div>
  );
}
export default Chat;
