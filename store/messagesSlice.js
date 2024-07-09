import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    list: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
