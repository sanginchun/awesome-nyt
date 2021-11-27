import './SearchBar.scss';
import React, { ChangeEventHandler, FC } from 'react';

type SearchBarProps = {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const SearchBar: FC<SearchBarProps> = ({ value, placeholder, onChange }) => {
  return (
    <input
      className="search-bar"
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
