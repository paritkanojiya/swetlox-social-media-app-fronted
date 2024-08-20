import React, { useState } from "react";
import "../css/c.css";
function Middlepart() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Parit Pandit",
      location: "India",
      time: "1 HOUR AGO",
      profileImg: "src/image/p1.jpg",
      postImg: "src/image/p2.jpg",
      caption: "Decisions define destiny...",
      hashtags:
        "#inclabjindabad #independentsurat #voteforindia #jaiho #olympic2024 #losangeles #Loksabhastream",
    },
    {
      id: 3,
      username: "Parit Pandit",
      location: "India",
      time: "1 HOUR AGO",
      profileImg: "src/image/p1.jpg",
      postImg: "src/image/balcony.png",
      caption: "Decisions define destiny...",
      hashtags:
        "#inclabjindabad #independentsurat #voteforindia #jaiho #olympic2024 #losangeles #Loksabhastream",
    },
    {
      id: 4,
      username: "Parit Pandit",
      location: "India",
      time: "1 HOUR AGO",
      profileImg: "src/image/p1.jpg",
      postImg: "src/image/ss.png",
      caption: "Decisions define destiny...",
      hashtags:
        "#inclabjindabad #independentsurat #voteforindia #jaiho #olympic2024 #losangeles #Loksabhastream",
    },
  ]);

  return (
    <>
      <div className=" w-[700px]   ml-[405px] mt-24  h-[640px]  fixed rounded-xl">
        <div className="overflow-y-scroll no-scrollbar  h-[640px] rounded-t-xl">
          <Story />
          <Postbar />
          <div>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Middlepart;
import Postbar from "./Postbar";
import Story from "./Story";
import Post from "./Post";

