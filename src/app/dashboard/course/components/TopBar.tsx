'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { UserAuth } from '@/context/authContext';
import SearchBar from './SearchBar';
import UserAvatar from './UserAvatar';

const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { currentUser } = UserAuth();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    let debounceTimer: string | number | NodeJS.Timeout | undefined;
    const handleSearch = () => {
      console.log('searching');
    };
    const debounceSearch = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(handleSearch, 300);
    };
    debounceSearch();
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchQuery]);

  return (
    <div className="flex items-center justify-between">
      <SearchBar
        searchQuery={searchQuery}
        handleInputChange={handleInputChange}
      />
      <UserAvatar />
    </div>
  );
};

export default TopBar;
