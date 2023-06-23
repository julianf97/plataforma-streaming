import React from 'react';
import { SearchBarContainer, SearchBarInput } from './SearchBar.styled';


export default function SearchBar() {

  
  return (
    <SearchBarContainer>
      <SearchBarInput placeholder='Search for movies or TV series'></SearchBarInput>
    </SearchBarContainer>
  );
}


