import { createAsyncThunk } from '@reduxjs/toolkit';
import ContactsService from 'services/contacts-service';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const contacts = await ContactsService.getContacts();

    return contacts;
  }
);

export const deleteContactById = createAsyncThunk(
  'contacts/deleteContactById',
  async (id: number) => {
    await ContactsService.deleteContact(id);

    return id;
  }
);
