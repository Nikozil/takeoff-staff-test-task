import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { CONTACTS_CONFIG } from 'config/ContactsConfig';
import {
  changeContactById,
  createContact,
  deleteContactById,
  getContacts,
} from 'redux/actions/Contacts';

const initContacts = { ...CONTACTS_CONFIG };

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: initContacts,
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(getContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        message.error('Ошибка');
      })
      .addCase(deleteContactById.fulfilled, (state, action) => {
        state.list = state.list.filter(({ id }) => id !== action.payload);
        state.isLoading = false;
      })
      .addCase(deleteContactById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContactById.rejected, (state, action) => {
        state.isLoading = false;
        message.error('Ошибка');
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.isLoading = false;
      })
      .addCase(createContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false;
        message.error('Ошибка');
      })
      .addCase(changeContactById.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          ({ id }) => id === action.payload.id
        );

        state.list[index] = action.payload;

        state.isLoading = false;
      })
      .addCase(changeContactById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changeContactById.rejected, (state, action) => {
        state.isLoading = false;
        message.error('Ошибка');
      });
  },
});

export const { changeSearch } = ContactsSlice.actions;

export default ContactsSlice.reducer;
