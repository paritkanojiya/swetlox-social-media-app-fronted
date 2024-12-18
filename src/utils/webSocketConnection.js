import { Client, Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { store } from "../main";
import { addMessage, addNotification } from "../reducer/webSocketSlice";

export let stompClient = null;
export const connect = () => {
  const state = store.getState();
  const userEmail = state.userDetails.user.email;
  const socket = new SockJS("http://localhost:9000/swetlox/ws");
  stompClient = Stomp.over(socket);
  stompClient.connect({}, () => {
    stompClient.subscribe(`/topic/notifications/${userEmail}`, (message) => {
      const notification = JSON.parse(message.body);
      console.log(notification);
      store.dispatch(addNotification(notification));
    });

    stompClient.subscribe(`/topic/messages/${userEmail}`, (message) => {
      const messageData = JSON.parse(message.body);
      store.dispatch(addMessage(messageData));
    });

    stompClient.subscribe(`/user/chat/message/${userEmail}`, (message) => {
      const messageData = JSON.parse(message.body);
      store.dispatch(addMessage(messageData));
    });
  });
  stompClient.activate();
};
