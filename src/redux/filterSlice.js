import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    filters: '',
  },
  reducers: {
    filterContact: (state, action) => {
      state.filters = action.payload;
    },
  },
  selectors: {
    selectFilter: state => {
      return state.filters;
    },
  },
});

export const filterReducer = slice.reducer;
export const { filterContact } = slice.actions;
export const { selectFilter } = slice.selectors;
