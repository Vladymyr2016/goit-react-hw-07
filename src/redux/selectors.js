import { selectPhoneBook } from './contactsSlice';
import { selectFilter } from './filterSlice';
import { createSelector } from '@reduxjs/toolkit';

export const selectFilteredContacts = createSelector(
  [selectPhoneBook, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase()?.includes(filter?.toLowerCase());
    });
  }
);
