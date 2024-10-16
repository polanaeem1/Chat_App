import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userChat: {
    id: "",
    name: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userChat.id = action.payload.id;
      state.userChat.name = action.payload.name;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
