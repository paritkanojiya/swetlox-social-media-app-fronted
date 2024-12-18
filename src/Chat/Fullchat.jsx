import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/c.css";
import { privateApi } from "../utils/api";
import { useSelector } from "react-redux";

function Fullchat() {
  const location = useLocation();
  const [chatUser, setChatUser] = useState(null);
  const chatRef = useRef();
  const messageEndRef = useRef(null); // Ref to scroll to the last message
  const userDetails = useSelector((state) => state.userDetails);
  const messageData = useSelector((state) => state.webSocket.messages); // Redux state for WebSocket messages
  const [messages, setMessages] = useState([]);

  const searchParam = new URLSearchParams(location.search);
  const id = searchParam.get("id");

  const fetchChatUser = async () => {
    const { data } = await privateApi.get(`/user/get-user/${id}`);
    setChatUser(data);
  };

  const createChatRoom = async () => {
    await privateApi.get(`/chat/create-chatroom/${id}`);
  };

  const handleSendMessage = async () => {
    const messageInput = chatRef.current;
    const message = messageInput.value;
    if (message.trim() === "") return;

    const formData = new FormData();
    formData.append("sender", userDetails.user.email);
    formData.append("recipient", id);
    formData.append("content", message);
    setMessages((prev) => [
      ...prev,
      { sender: userDetails.user.email, recipient: id, content: message },
    ]);
    await privateApi.post("/message/send-message", formData);
    messageInput.value = "";
    scrollToBottom();
  };

  const fetchMessage = async () => {
    const { data } = await privateApi.get(`/message/load-message/${id}`);
    setMessages((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    setMessages([]);
    fetchChatUser();
    createChatRoom();
    fetchMessage();
  }, [id]);

  useEffect(() => {
    if (messageData && messageData.length > 0) {
      const lastMessage = messageData[messageData.length - 1];
      if (lastMessage.recipient === id || lastMessage.sender === id) {
        setMessages((prev) => [...prev, lastMessage]);
      }
    }
  }, [messageData, id]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="w-[710px] h-[590px] mt-24 rounded-xl ml-[400px] bg-[#0c0a15] fixed p-2">
        <div className="bg-[#170e30] w-full h-16 rounded-xl flex flex-row ">
          <div>
            <img
              src={chatUser?.profileURL}
              className="w-[50px] m-[7px] ml-3 h-[49px] rounded-full hover:cursor-pointer"
              alt=""
            />
          </div>
          <div className="my-2 ml-1">
            <h1 className="font-bold text-white">{chatUser?.fullName}</h1>
            <h5 className="text-white hover:cursor-pointer">
              @{chatUser?.userName}
            </h5>
          </div>
        </div>

        <div className="flex flex-col w-full h-[450px] mt-2 overflow-y-scroll no-scrollbar">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.sender === userDetails.user.email
                  ? "self-end bg-blue-500"
                  : "self-start bg-gray-700"
              } w-fit max-w-[300px] mb-2 rounded-xl `}
            >
              <h1 className="text-white font-medium m-2 p-1">
                {message.content}
              </h1>
            </div>
          ))}
          <div ref={messageEndRef} />
        </div>

        <div className="absolute inset-x-0 bottom-0 mx-2">
          <div className="flex">
            <div>
              <button className="bg-black w-[60px] h-12 rounded-l-md">
                <img
                  src="src/image/Message1.png"
                  alt=""
                  className="w-[30px] ml-4"
                />
              </button>
            </div>
            <div>
              <input
                type="text"
                className="w-[585px] h-12 bg-black focus:outline-none hover:cursor-pointer caret-white pl-2 text-gray-200 pb-1"
                placeholder="Type here your messages......"
                ref={chatRef}
              />
            </div>
            <div>
              <button
                className="bg-black w-[50px] h-12 rounded-r-md"
                onClick={handleSendMessage}
              >
                <img src="src/image/Msgicon.png" alt="" className="w-[30px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fullchat;
