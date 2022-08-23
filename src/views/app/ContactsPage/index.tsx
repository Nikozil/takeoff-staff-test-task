import { Button } from 'antd';
import { useAppDispatch } from 'hooks/redux-hooks';
import React from 'react';
import { signOut } from 'redux/actions/Auth';

const ContactsList = () => {
  const dispatch = useAppDispatch();
  const signOutHandler = () => {
    dispatch(signOut());
    console.log('signOut');
  };
  return (
    <article>
      ContactsList
      <Button type="primary" danger onClick={signOutHandler}>
        Выход
      </Button>
    </article>
  );
};

export default ContactsList;
