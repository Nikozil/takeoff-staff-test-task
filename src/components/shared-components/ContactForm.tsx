import { Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { ContactDataType, ContactType } from 'services/contacts-service';
import ColorButton from 'antd-button-color';
import { questionScriptForm } from 'config/forms/ContactsForm';
import { useAppDispatch } from 'hooks/redux-hooks';
import { changeContactById, createContact } from 'redux/actions/Contacts';

const ContactForm: React.FC<IContactForm> = ({ contact, closeHandler }) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...contact,
    });
  }, [form, contact]);

  const handleFinish = (value: ContactDataType) => {
    contact
      ? dispatch(changeContactById({ id: contact.id, data: value }))
      : dispatch(createContact(value));
    closeHandler();
  };
  return (
    <section className="contact-form">
      <Form form={form} onFinish={handleFinish} layout={'vertical'}>
        {questionScriptForm.map(({ name, title, rules, placeholder }) => (
          <Form.Item key={name} name={name} label={title} rules={rules}>
            <Input autoComplete="off" placeholder={placeholder} />
          </Form.Item>
        ))}

        <Form.Item>
          <ColorButton type="primary" htmlType="submit">
            Сохранить
          </ColorButton>
        </Form.Item>
      </Form>
    </section>
  );
};

export default ContactForm;

interface IContactForm {
  contact: null | ContactType | undefined;
  closeHandler: () => void;
}
