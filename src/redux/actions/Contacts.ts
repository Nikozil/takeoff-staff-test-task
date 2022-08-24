import { createAsyncThunk } from '@reduxjs/toolkit';
import ContactsService from 'services/contacts-service';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const contacts = await ContactsService.getContacts();

    return contacts;
  }
);
