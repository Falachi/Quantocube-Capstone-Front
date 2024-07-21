import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  role: null,
  error: null,
  password: null,
  valid: false,
  newpassword: null,
  confirmPassword: null,
  resetvalid:false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { phoneNumber, password } = action.payload;

      if (!phoneNumberRegex.test(phoneNumber)) {
        state.error = 'Phone number must be 9 or 10 numerical characters.';
        return;
      }

      else if (password == state.password && phoneNumber == state.user) {
        state.valid = true;
        return;
      }
      else {
        state.error = 'User does not exist or wrong password';
        return;
      }



    },
    signup: (state, action) => {
      const { phoneNumber, role, email, password } = action.payload;

      if (!phoneNumberRegex.test(phoneNumber)) {
        state.error = 'Phone number must be 9 or 10 numerical characters.';
        return;
      }

      if (!passwordRegex.test(password)) {
        state.error = 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.';
        return;
      }


      if (!emailRegex.test(email)) {
        state.error = 'Invalid email address.';
        return;
      }

      // Replace the following logic with your real registration validation
      if (phoneNumber === 'alreadyRegisteredPhoneNumber') { // Replace with real check for existing phone number
        state.error = 'Phone number already registered.';
        return;
      }

      state.user = phoneNumber;
      state.role = role;
      state.error = null;
      state.password = password;
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.error = null;
      state.password = null;
      state.valid = false;
    },
    resetpassword: (state, action) => {
      const { newPassword, confirmPassword } = action.payload;

      if (!passwordRegex.test(newPassword)) {
        state.error = 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.';
        return;
      }
      if (!passwordRegex.test(confirmPassword)) {
        state.error = 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.';
        return;
      }
      if (newPassword!==confirmPassword){
        state.error="Passwords do not match";
      }
      if (newPassword==confirmPassword){
        state.error=null;
        state.resetvalid=true;
      }


    },

    emptyfield: (state) => {
      state.error = 'Please fill in all fields';
    },
  },
});

export const { login, signup, logout, emptyfield, resetpassword } = authSlice.actions;

export default authSlice.reducer;

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneNumberRegex = /^\d{9,10}$/;