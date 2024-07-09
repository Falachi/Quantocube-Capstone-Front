// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import sortReducer from './slices/sortSlice';
import messagesReducer from './store/messagesSlice';
import requestFormReducer from './store/requestFormSlice';

export default configureStore({
  reducer: {
    sort: sortReducer,
    auth: authReducer,
    messages: messagesReducer,
    requestForm: requestFormReducer,
    // other reducers can be added here
  },
});
