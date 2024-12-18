import React, { useEffect, useState } from "react";
import { privateApi } from "../utils/api";
import Chatsidebar from "./Chatsidebar";

function Chatapprightsidebar({ query }) {
  const [userConnection, setUserConnection] = useState([]);
  const [searchUser, setSearchUser] = useState([]);
  const fetchUserConnectionData = async () => {
    const { data } = await privateApi.get("/user/get-user-connection");
    setUserConnection(data);
  };

  useEffect(() => {
    fetchUserConnectionData();
  }, []);
  useEffect(() => {
    setSearchUser(
      userConnection.filter((user) => user.userName.includes(query))
    );
  }, [query]);
  console.log(searchUser);
  return (
    <div className="w-[100%] h-[100%] overflow-auto">
      {searchUser != null &&
        searchUser.map((chat, index) => {
          const bgColor = index % 2 === 0 ? "bg-gray-400" : "bg-white";
          return <Chatsidebar key={index} userData={chat} />;
        })}

      {searchUser.length == 0 &&
        userConnection.map((chat, index) => {
          const bgColor = index % 2 === 0 ? "bg-gray-400" : "bg-white";
          return <Chatsidebar key={index} userData={chat} />;
        })}
    </div>
  );
}

export default Chatapprightsidebar;
