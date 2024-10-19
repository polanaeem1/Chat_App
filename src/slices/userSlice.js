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
    clearUser: (state) => {
      state.userChat.id = "";
      state.userChat.name = "";
      state.userChat.chatId = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, lastMsgEdit,clearUser } = userSlice.actions;

export default userSlice.reducer;
