import React, { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Logo } from '../Logo';
import { TopMenu } from '../TopMenu';
import './Header.scss';

export const Header: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleQueryFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value) {
      searchParams.set('query', value);
    } else {
      searchParams.delete('query');
    }

    setSearchParams(searchParams);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Logo />
          <div>
            <input
              className="search-query"
              type="text"
              placeholder="Search"
              onChange={handleQueryFilter}
            />
          </div>
          <TopMenu />
        </div>
      </div>
    </header>
  );
};
