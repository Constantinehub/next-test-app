'use client';

import { useState } from 'react';

import { usePosts } from '@/store/usePostStore';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const getAllPostsBySearch = usePosts((state) => state.getAllPostsBySearch);

  const handleSearch = () => {
    console.log('searching ', searchQuery);
    getAllPostsBySearch(searchQuery);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
      event.preventDefault();
    }
  };

  return (
    <form className='flex items-stretch'>
      <input
        value={searchQuery}
        placeholder='Search...'
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        className='p-3 border bg-white rounded-md w-full'
      />
      <button
        type='button'
        onClick={handleSearch}
        className='px-3 ml-2 bg-sky-600 text-white font-bold uppercase rounded-md'
      >
        Search
      </button>
    </form>
  );
};

export default Search;
