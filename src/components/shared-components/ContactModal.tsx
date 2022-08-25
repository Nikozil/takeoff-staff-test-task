import { CloseOutlined } from '@ant-design/icons';
import ColorButton from 'antd-button-color';
import { useAppSelector } from 'hooks/redux-hooks';
import React from 'react';
import { selectContactById } from 'redux/selectors/Contacts';
import ContactForm from './ContactForm';

const ContactModal: React.FC<IContactModal> = ({ id, closeHandler }) => {
  const contact = useAppSelector(selectContactById(id));

  return (
    <section className="contact-modal">
      <div className="contact-modal__card">
        <ColorButton
          className="contact-modal__exit-btn"
          type="danger"
          icon={<CloseOutlined />}
          onClick={closeHandler}
        />
        <ContactForm contact={contact} closeHandler={closeHandler} />
      </div>
    </section>
  );
};

export default ContactModal;
interface IContactModal {
  id: number | 'new';
  closeHandler: () => void;
}
