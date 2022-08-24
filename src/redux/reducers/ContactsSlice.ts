import { createSlice } from '@reduxjs/toolkit';
import { CONTACTS_CONFIG } from 'config/ContactsConfig';
import { getContacts } from 'redux/actions/Contacts';

const initContacts = { ...CONTACTS_CONFIG };

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: initContacts,
  reducers: {},
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
      });
  },
});

export default ContactsSlice.reducer;
