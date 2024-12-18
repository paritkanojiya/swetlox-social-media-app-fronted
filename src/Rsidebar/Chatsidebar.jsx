import { useNavigate } from "react-router-dom";

function Chatsidebar({ userData }) {
  const navigate = useNavigate();
  const handleChatOpen = () => {
    navigate("/chat?id=" + userData.email);
  };

  return (
    <div
      className="w-[250px]  h-15 rounded-xl flex flex-row  hover:cursor-pointer border mx-1 my-1"
      onClick={handleChatOpen}
    >
      <div className="mr-2">
        <img
          src={userData.profileURL}
          className="w-[50px] h-[50px] m-[7px]  rounded-full hover:cursor-pointer"
          alt="Profile"
        />
      </div>
      <div className="my-1  ml-2 overflow-hidden flex-grow w-[200px]">
        <h1 className="font-bold text-white mt-[2px]">{userData.userName}</h1>
        <h5 className="text-white truncate">Hey' whatsapp</h5>
      </div>
    </div>
  );
}

export default Chatsidebar;
