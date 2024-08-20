import Chatapprightsidebar from "./Chatapprightsidebar";
import Requests from "./Requests";
function Rsidebar() {
  return (
    <>
      <div className=" h-[640px] w-[280px] mt-24 rounded-t-lg fixed ml-[1125px]">
        <div className=" h-[470px] w-[280px]  shadow-md rounded-xl bg-[#152331] overflow-hidden">
          <div className="flex pt-3">
            <h1 className="text-white font-medium ml-4">Messages</h1>
            <img
              src="src/image/nandp.png"
              alt=""
              className="w-[20px] h-[20px] absolute  right-4 mt-[2px] hover:cursor-pointer "
            />
          </div>
          <div className="flex mx-4 mt-1">
            <img
              src="src/image/glass.svg"
              alt=""
              className="w-12 h-[43px] p-2.5  my-[12px]  bg-black rounded-l-full pl-4 hover:cursor-pointer"
            />
            <input
              type="text"
              className="w-[200px] h-[43px] my-[12px] rounded-r-full bg-black focus:outline-none hover:cursor-pointer caret-white pl-2 text-gray-200"
            />
          </div>
          <div className="flex mx-[22px]">
            <div className="mr-5">
              <h2 className="text-white font-medium hover:cursor-pointer">
                Primary
              </h2>
            </div>
            <div className="mr-5">
              <h2 className="text-white font-medium hover:cursor-pointer">
                General
              </h2>
            </div>
            <div className="mr-5">
              <h2 className="text-red-500 font-medium hover:cursor-pointer">
                Requests(2)
              </h2>
            </div>
          </div>
          <div className="w-[250px] bg-white h-[4px] rounded-l-full mt-2 ml-[15px] rounded-r-full"></div>
          <div className="w-full h-[294px] rounded-xl mt-[11px]">
          <div className="w-[670px]  h-[443px]  mt-[15px] ml-3  rounded-xl mb-5  overflow-y-scroll no-scrollbar ">
              <Chatapprightsidebar/>
          </div>
          </div>
        </div>


        <div className="text-white mx-3 mt-2 mb-2 font-bold">
          <h1>Requests</h1>
        </div> 
        <div className=" h-[120px] w-[280px] pt-2 shadow-md rounded-xl bg-[#152331]">
          <div>
            <Requests />
          </div>
        </div>
      </div>
    </>
  );
}
export default Rsidebar;
