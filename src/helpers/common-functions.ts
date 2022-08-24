import { ContactsType } from 'services/contacts-service';

export const getLastPathName = (path: string) =>
  path
    .split('/')
    .filter((entry) => entry !== '')
    .pop();

export const filterList = (search: string, list: ContactsType) =>
  list.filter(({ name, phone, mail }) => {
    const lowCaseSearch = search.toLowerCase();

    return (
      name.toLowerCase().includes(lowCaseSearch) ||
      phone.toLowerCase().includes(lowCaseSearch) ||
      mail.toLowerCase().includes(lowCaseSearch)
    );
  });
