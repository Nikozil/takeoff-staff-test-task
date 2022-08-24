import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { List } from 'antd';
import ColorButton from 'antd-button-color';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import React, { useEffect } from 'react';
import { getContacts } from 'redux/actions/Contacts';
import { selectIsLoading, selectList } from 'redux/selectors/Contacts';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectList);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <List
      className="contacts-list"
      loading={isLoading}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <ColorButton type="info" icon={<EditOutlined />} />,
            <ColorButton type="danger" icon={<DeleteOutlined />} />,
          ]}>
          <List.Item.Meta title={<div>{item.name}</div>} />
          <div>{item.phone}</div>
          <div>{item.mail}</div>
        </List.Item>
      )}
    />
  );
};

export default App;
