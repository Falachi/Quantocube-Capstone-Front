import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.phoneNumber;
      // Assuming we store roles based on phone number for simplicity
      state.role = getRoleByPhoneNumber(action.payload.phoneNumber); // Implement this function as needed
    },
    signup: (state, action) => {
      state.user = action.payload.phoneNumber;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
    },
  },
});

export const { login, signup, logout } = authSlice.actions;

export default authSlice.reducer;

// Dummy function to get role by phone number
function getRoleByPhoneNumber(phoneNumber) {
  // Replace this with real logic to get role by phone number
  if (phoneNumber === '1234567890') return 'homeowner';
  if (phoneNumber === '0987654321') return 'contractor';
  return null;
}
