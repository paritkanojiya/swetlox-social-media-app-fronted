import { createSlice } from "@reduxjs/toolkit";

const webSocketSlice = createSlice({
  name: "webSocket",
  initialState: {
    notifications: [],
    messages: [],
  },
  reducers: {
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    
  },
});

export const { addNotification, addMessage } = webSocketSlice.actions;
export const webSocketReducer = webSocketSlice.reducer;
