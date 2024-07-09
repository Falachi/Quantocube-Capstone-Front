// sortSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortBy: 'all',  // Initial state for sortBy
  filterBy: 'all'
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setFilterBy(state, action) {
      state.filterBy = action.payload;
    }
  }
});


export const { setSortBy } = sortSlice.actions;
export const { setFilterBy } = sortSlice.actions;

export default sortSlice.reducer;
