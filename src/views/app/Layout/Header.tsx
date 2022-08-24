import { Button } from 'antd';
import CustomSpin from 'components/shared-components/CustomSpin';
import { PATHNAMES } from 'constants/pathnames';
import { getLastPathName } from 'helpers/common-functions';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { signOut } from 'redux/actions/Auth';
import { selectIsLogoutLoading } from 'redux/selectors/Auth';

const Header = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const isLogoutLoading = useAppSelector(selectIsLogoutLoading);

  const lastPath = getLastPathName(pathname) || '';
  const title = PATHNAMES[lastPath];

  const signOutHandler = () => {
    dispatch(signOut());
  };

  return (
    <header className="header">
      <h1>{title}</h1>

      <Button
        className="header__exit-btn"
        type="primary"
        danger
        disabled={isLogoutLoading}
        onClick={signOutHandler}>
        {isLogoutLoading ? <CustomSpin size={20} /> : 'Выход'}
      </Button>
    </header>
  );
};

export default Header;
