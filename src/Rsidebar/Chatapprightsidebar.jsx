import React, { useState } from "react";
import Chatsidebar from "./Chatsidebar";

function Chatapprightsidebar() {
  const [chats, setChats] = useState([
    {
      id: 1,
      profileImg: "src/image/profile.jpg",
      username: "Aryan Babariya",
      message: "Hyy, What's up",
    },
    {
      id: 2,
      profileImg: "src/image/profile.jpg",
      username: "John Doe",
      message: "Are you coming to the party ?",
    },
    {
      id: 3,
      profileImg: "src/image/profile.jpg",
      username: "Jane Smith",
      message: "Good morning!",
    },
    {
      id: 3,
      profileImg: "src/image/profile.jpg",
      username: "Jane Smith",
      message: "Good morning!",
    },
    {
      id: 3,
      profileImg: "src/image/profile.jpg",
      username: "Jane Smith",
      message: "Good morning!",
    },
    {
      id: 3,
      profileImg: "src/image/profile.jpg",
      username: "Jane Smith",
      message: "Good morning!",
    },
    {
      id: 3,
      profileImg: "src/image/profile.jpg",
      username: "Jane Smith",
      message: "Good morning!",
    },
    {
      id: 3,
      profileImg: "src/image/profile.jpg",
      username: "Jane Smith",
      message: "Good morning!",
    },
    {
      id: 3,
      profileImg: "src/image/profile.jpg",
      username: "Jane Smith",
      message: "Good morning!",
    },
    
  ]);

  return (
    <div className=" ">
      {chats.map((chat, index) => {
        const bgColor = index % 2 === 0 ? "bg-gray-400" : "bg-white";
        return (
          <Chatsidebar
            key={chat.id}
            profileImg={chat.profileImg}
            username={chat.username}
            message={chat.message}
            className={`${bgColor} p-4 rounded-lg`}
          />
        );
      })}
    </div>
  );
}

export default Chatapprightsidebar;
