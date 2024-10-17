import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userChat: {
    id: "",
    name: "",
    chatId: "",
    lastMsg: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userChat.id = action.payload.id;
      state.userChat.name = action.payload.name;
      state.userChat.chatId = action.payload.chatId;
    },
    lastMsgEdit: (state, action) => {
      state.userChat.lastMsg = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, lastMsgEdit } = userSlice.actions;

export default userSlice.reducer;
