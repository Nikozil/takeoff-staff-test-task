import { createAsyncThunk } from '@reduxjs/toolkit';
import ContactsService, { ContactDataType } from 'services/contacts-service';

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

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (data: ContactDataType) => {
    const contact = await ContactsService.postContact(data);

    return contact;
  }
);

export const changeContactById = createAsyncThunk(
  'contacts/changeContactById',
  async ({ id, data }: payloadChangeContactType) => {
    const contact = await ContactsService.patchContact(id, data);

    return contact;
  }
);

type payloadChangeContactType = { id: number; data: ContactDataType };
