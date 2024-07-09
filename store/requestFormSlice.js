import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const requestFormSlice = createSlice({
  name: 'requestForm',
  initialState,
  reducers: {
    sendRequestForm: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { sendRequestForm } = requestFormSlice.actions;
export default requestFormSlice.reducer;
