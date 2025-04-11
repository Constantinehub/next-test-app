'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import useSearch from '@/store/useSearch';
import useDebounce from '@/hooks/useDebounce';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const setQuery = useSearch((state) => state.setQuery);
  const debouncedQuery = useDebounce(searchQuery, 1000);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = e;

    setSearchQuery(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (debouncedQuery.length) {
      setQuery(debouncedQuery);
    }
  }, [debouncedQuery, setQuery]);

  return (
    <div className='flex items-center ml-auto w-full max-w-[400px]'>
      <TextField
        value={searchQuery}
        label='Search'
        size='medium'
        className='w-full'
        variant='outlined'
        placeholder='Type to search news...'
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
