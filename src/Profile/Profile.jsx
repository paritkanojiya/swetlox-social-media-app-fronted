import Profiledetails from "./Profiledetails";
import React, { useState } from "react";
function Profile() {
  const profiledetails = {
    profileImg: "src/image/profile.jpg",
    username: "aaary.1",
    postcount: 5,
    followercount: 156,
    followingcount: 341,
  };
  const [posts, setPosts] = useState([
    {
      id: 1,
      profileImg: "src/image/designer1.png", // Adjust path if needed
    },
    {
      id: 1,
      profileImg: "src/image/designer1.png", // Adjust path if needed
    },

    {
      id: 1,
      profileImg: "src/image/designer1.png", // Adjust path if needed
    },
    {
      id: 1,
      profileImg: "src/image/designer1.png", // Adjust path if needed
    },
    {
      id: 1,
      profileImg: "src/image/designer1.png", // Adjust path if needed
    },
    {
      id: 2,
      profileImg: "src/image/p2.jpg", // Adjust path if needed
    },
    {
      id: 3,
      profileImg: "src/image/p1.jpg", // Adjust path if needed
    },
    {
      id: 4,
      profileImg: "src/image/p1.jpg", // Adjust path if needed
    },
  ]);
  return (
    <>
      <Profiledetails profiledetails={profiledetails} postdata={posts} />
    </>
  );
}

export default Profile;
