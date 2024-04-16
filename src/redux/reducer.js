import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './contactsSlice';
import { filterContact } from './filterSlice';

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: '',
  },
};

export const phoneBookReduser = createReducer(initialState, (builder) => {
  builder
    .addCase(removeContact, (state, action) => {
      state.phoneBook.contacts.items = state.phoneBook.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    })
    .addCase(addContact, (state, action) => {
      state.phoneBook.contacts.items.push(action.payload);
    })
    .addCase(filterContact, (state, action) => {
      state.filter.filters.name = action.payload;
    });
});
