import { createSlice } from '@reduxjs/toolkit';
import { deleteContactThunk, fetchData } from './contactsOps';

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: 'phoneBook',
  initialState,
  // reducers: {
  //   removeContact: (state, { payload }) => {
  //     state.contacts.items = state.contacts.items.filter(
  //       (item) => item.id !== payload
  //     );
  //   },
  //   addContact: (state, { payload }) => {
  //     state.contacts.items.push(payload);
  //   },
  //   isLoading: (state, { payload }) => {
  //     state.isLoading = payload;
  //   },
  //   isError: (state, { payload }) => {
  //     state.isError = payload;
  //   },
  //   dataFetched: (state, { payload }) => {
  //     state.contacts = payload;
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(fetchData.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload);
      });
  },
  selectors: {
    selectPhoneBook: (state) => {
      return state.contacts.items;
    },
    selectIsLoading: (state) => {
      return state.isLoading;
    },
    selectIsError: (state) => {
      return state.isError;
    },
  },
});

export const phoneBookReduser = slice.reducer;
export const { addContact, removeContact, isLoading, isError, dataFetched } =
  slice.actions;
export const { selectPhoneBook, selectIsError, selectIsLoading } =
  slice.selectors;
