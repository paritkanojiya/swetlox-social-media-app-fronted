import React, { useEffect, useState } from "react";
import { privateApi } from "../utils/api";
import Chat from "./Chat";

function ChatApp() {
  const [userConnection, setUserConnection] = useState([]);
  const fetchUserConnectionData = async () => {
    const { data } = await privateApi.get("/user/get-user-connection");
    setUserConnection(data);
  };
  useEffect(() => {
    fetchUserConnectionData();
  }, []);

  return (
    <div className="space-y-4">
      {userConnection.map((user, index) => {
        const bgColor = index % 2 === 0 ? "bg-gray-400" : "bg-white";
        return (
          <Chat
            key={index}
            profileImg={user.profileURL}
            username={user.userName}
            className={`${bgColor} p-4 rounded-lg`}
          />
        );
      })}
    </div>
  );
}

export default ChatApp;
