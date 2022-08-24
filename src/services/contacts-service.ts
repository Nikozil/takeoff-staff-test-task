import service from './service';

const ContactsService: IContactsService = {
  getContacts: () => {
    return service({
      url: '/contacts/',
      method: 'get',
    });
  },

  deleteContact: (id) => {
    return service({
      url: `/contacts/${id}`,
      method: 'delete',
    });
  },
  postContact: (data) => {
    return service({
      url: `/contacts/`,
      method: 'post',
      data,
    });
  },
  patchContact: (id, data) => {
    return service({
      url: `/contacts/${id}`,
      method: 'patch',
      data,
    });
  },
};

export default ContactsService;

export type ContactType = {
  id: number;
  name: string;
  phone: string;
  mail: string;
};
export type ContactDataType = Omit<ContactType, 'id'>;
export type ContactsType = ContactType[];

interface IContactsService {
  getContacts: () => Promise<ContactsType>;
  deleteContact: (id: number) => void;
  postContact: (data: ContactDataType) => Promise<ContactType>;
  patchContact: (id: number, data: ContactDataType) => Promise<ContactType>;
}
