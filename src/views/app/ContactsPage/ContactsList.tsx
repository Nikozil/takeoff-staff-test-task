import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { List } from 'antd';
import ColorButton from 'antd-button-color';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { deleteContactById, getContacts } from 'redux/actions/Contacts';
import { selectFilteredList, selectIsLoading } from 'redux/selectors/Contacts';
import { selectedIdType } from '.';

const ContactsList: React.FC<IContactsList> = ({ setSelectedId }) => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectFilteredList);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const changeHandler = (id: number) => setSelectedId(id);
  const deleteHandler = (id: number) => dispatch(deleteContactById(id));

  return (
    <List
      className="contacts-list"
      loading={isLoading}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <ColorButton
              type="info"
              icon={<EditOutlined />}
              onClick={() => changeHandler(item.id)}
            />,
            <ColorButton
              type="danger"
              icon={<DeleteOutlined />}
              onClick={() => deleteHandler(item.id)}
            />,
          ]}>
          <List.Item.Meta title={<div>{item.name}</div>} />
          <div>{item.phone}</div>
          <div>{item.mail}</div>
        </List.Item>
      )}
    />
  );
};

export default ContactsList;

interface IContactsList {
  setSelectedId: Dispatch<SetStateAction<selectedIdType>>;
}
