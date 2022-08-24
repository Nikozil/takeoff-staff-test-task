import { Input } from 'antd';
import React from 'react';

const Search = () => {
  const placeholder = 'Введите имя, телефон или почту';
  const onChange = () => {};

  return (
    <div>
      <Input
        className="search__input"
        placeholder={placeholder}
        onChange={onChange}
        // value={value}
      />
    </div>
  );
};

export default Search;
