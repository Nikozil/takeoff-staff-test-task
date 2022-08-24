import { Input } from 'antd';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { ChangeEvent } from 'react';
import { changeSearch } from 'redux/reducers/ContactsSlice';
import { selectSearch } from 'redux/selectors/Contacts';

const placeholder = 'Введите имя, телефон или почту';

const Search = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(selectSearch);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearch(e.target.value));
  };

  return (
    <div>
      <Input
        className="search__input"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Search;
