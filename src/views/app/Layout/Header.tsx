import { Button } from 'antd';
import { PATHNAMES } from 'constants/pathnames';
import { getLastPathName } from 'helpers/common-functions';
import { useAppDispatch } from 'hooks/redux-hooks';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { signOut } from 'redux/actions/Auth';

const Header = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const lastPath = getLastPathName(pathname) || '';
  const title = PATHNAMES[lastPath];

  const signOutHandler = () => {
    dispatch(signOut());
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button type="primary" danger onClick={signOutHandler}>
        Выход
      </Button>
    </header>
  );
};

export default Header;
