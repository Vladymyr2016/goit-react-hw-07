import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReduser } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReduser,
    filter: filterReducer,
  },
});
