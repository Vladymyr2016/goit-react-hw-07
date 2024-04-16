import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
  },
};

const slice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    removeContact: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== payload
      );
    },
    addContact: (state, { payload }) => {
      state.contacts.items.push(payload);
    },
  },
  selectors: {
    selectPhoneBook: state => {
      return state.contacts.items;
    },
  },
});

export const phoneBookReduser = slice.reducer;
export const { addContact, removeContact } = slice.actions;
export const { selectPhoneBook } = slice.selectors;
