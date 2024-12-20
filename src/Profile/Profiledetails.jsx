import ProfilePosts from "./Profilepost";
import "../css/c.css";
import EditProfileModel from "./EditProfileModel";
import { useState } from "react";

function Profiledetails({ profiledetails }) {
  const [opne, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="w-[710px] h-[630px] mt-24 rounded-xl ml-[400px] bg-[#181424] fixed">
        <div className="overflow-y-scroll no-scrollbar">
          <div className="flex justify-center border-2 border-indigo-500/100 mt-5 mx-5 h-[250px] border-b-0">
            <div>
              <img
                src={profiledetails?.profileURL}
                className="w-[100px] h-[100px] ml-6 mt-6 rounded-full hover:cursor-pointer"
                alt="Profile"
              />
              <div className="mt-2 ml-6">
                <h1 className="text-white font-medium text-lg hover:cursor-pointer text-center">
                  {profiledetails?.userName}
                </h1>
              </div>
            </div>
            <div>
              <div className=" w-[240px] h-[70px] mt-[30px] ml-[120px] flex space-x-4">
                <div className="w-[50px] h-full ">
                  <h1 className="text-white font-medium text-2xl hover:cursor-pointer  ">
                    {profiledetails?.postCount}
                  </h1>
                  <h5 className="text-white text-lg hover:cursor-pointer ">
                    Posts
                  </h5>
                </div>
                <div className="w-[] h-full ">
                  <h1 className="text-white  text-2xl hover:cursor-pointer ">
                    {profiledetails?.follower}
                  </h1>
                  <h5 className="text-white  text-lg hover:cursor-pointer ">
                    Followers
                  </h5>
                </div>
                <div className="w-[] h-full">
                  <h1 className="text-white  text-2xl hover:cursor-pointer ">
                    {profiledetails?.following}
                  </h1>
                  <h5 className="text-white  text-lg hover:cursor-pointer ">
                    Following
                  </h5>
                </div>
              </div>
              <div className="text-white text-lg px-4 h-[110px] w-[400px] ml-[100px] mt-2 overflow-y-scroll no-scrollbar ">
                {profiledetails?.bio?.map((bio) => {
                  return <p className="text-sm">{bio}</p>;
                })}
              </div>
            </div>
          </div>
          <div className="ml-5">
            <button
              type="button"
              className="text-white bg-indigo-500/100 hover:bg-blue-800 font-medium rounded-b-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[670px]"
              onClick={handleOpen}
            >
              Edit Profile
            </button>
          </div>
          <div>
            <div className="ml-[290px] mt-3">
              <h1 className="text-white font-medium text-xl hover:cursor-pointer ml-[43px]">
                POST
              </h1>
            </div>
            <div className="bg-indigo-500/100 h-1 w-[670px] ml-5 m-1" />
          </div>
          <div className="h-[250px] mx-5 w-[670px] pt-5 h-42">
            <ProfilePosts />
          </div>
        </div>
      </div>
      <EditProfileModel
        open={opne}
        handleClose={handleClose}
        data={profiledetails}
      ></EditProfileModel>
    </>
  );
}

export default Profiledetails;
