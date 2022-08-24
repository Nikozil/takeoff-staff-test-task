import Contols from './Contols';
import List from './List';
import Search from './Search';

const ContactsPage = () => {
  return (
    <article className="contacts-page">
      <Contols />
      <Search />
      <List />
    </article>
  );
};

export default ContactsPage;
