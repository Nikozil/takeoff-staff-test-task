import ContactModal from 'components/shared-components/ContactModal';
import { useState } from 'react';
import Contols from './Contols';
import ContactsList from './ContactsList';
import Search from './Search';

const ContactsPage = () => {
  const [selectedId, setSelectedId] = useState<selectedIdType>(null);
  const closeHandler = () => setSelectedId(null);
  return (
    <article className="contacts-page">
      <Contols setSelectedId={setSelectedId} />
      <Search />
      <ContactsList setSelectedId={setSelectedId} />
      {!!selectedId && (
        <ContactModal id={selectedId} closeHandler={closeHandler} />
      )}
    </article>
  );
};

export default ContactsPage;

export type selectedIdType = null | 'new' | number;
