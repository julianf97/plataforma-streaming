import React from 'react';
import { SearchBarContainer, SearchBarInput } from './SearchBar.styled';
import MagnifyingGlass from '../MagnifyingGlass/MagnifyingGlass';

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <MagnifyingGlass />
      <SearchBarInput placeholder="Search for movies or TV series"></SearchBarInput>
    </SearchBarContainer>
  );
}
