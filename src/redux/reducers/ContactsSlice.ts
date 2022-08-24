import { createSlice } from '@reduxjs/toolkit';
import { CONTACTS_CONFIG } from 'config/ContactsConfig';
import { deleteContactById, getContacts } from 'redux/actions/Contacts';

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
      });
  },
});

export const { changeSearch } = ContactsSlice.actions;

export default ContactsSlice.reducer;
