// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messagesSlice';
import requestFormReducer from './requestFormSlice';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    requestForm: requestFormReducer,
  },
});

export default store;
