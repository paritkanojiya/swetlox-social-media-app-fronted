import ChatApp from "./Chatapp";
import "../css/c.css";
function Messagebar() {
  return (
    <>
      <div className="w-[710px] h-[630px] mt-24 rounded-xl ml-[400px] bg-[#0c0a15] fixed ">
        <div className=" h-full w-full  shadow-md rounded-xl bg-[#181424] overflow-hidden">
          <div className="flex items-center bg-cyan-700 w-full p-3">
            <h1 className="text-white font-medium text-xl ml-5">Messages</h1>
            <div className="ml-auto mr-1">
              <img
                src="src/image/nandp.png" // Ensure this path is correct relative to your public or src folder
                alt="Icon"
                className="w-[20px] h-[20px] hover:cursor-pointer"
              />
            </div>
          </div>

          <div className="flex w-[700px] ">
            <div className="w-[700px] flex m-5">
              <img
                src="src/image/glass.svg"
                alt=""
                className="w-12 h-[43px] p-2.5    bg-black rounded-l-full pl-4 hover:cursor-pointer"
              />
              <input
                type="text"
                className="w-[600px] h-[43px]  rounded-r-full bg-black focus:outline-none hover:cursor-pointer caret-white pl-2 text-gray-200"
              />
            </div>
          </div>

          <div className="flex pl-[35px]">
            <div className="pr-5">
              <h2 className="text-white font-medium hover:cursor-pointer">
                Primary
              </h2>
            </div>
            <div className="pr-5">
              <h2 className="text-white font-medium hover:cursor-pointer">
                General
              </h2>
            </div>
            <div className="pr-5 ml-auto mr-5">
              <h2 className="text-red-500 font-medium hover:cursor-pointer">
                Requests(2)
              </h2>
            </div>
          </div>

          <div className="w-[635px] bg-white h-[4px] rounded-l-full mt-2 ml-7 rounded-r-full"></div>
          <div className="w-[670px]  h-[443px]  mt-[15px] ml-3  rounded-xl mb-5  overflow-y-scroll no-scrollbar ">
              <ChatApp></ChatApp>
          </div>
        </div>
      </div>
    </>
  );
}
export default Messagebar;
