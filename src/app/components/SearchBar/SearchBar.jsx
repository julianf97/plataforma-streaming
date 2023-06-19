import React from 'react';
import {
  SearchBarContainer,
  Lupa,
  SearchBarInput,
  LupaContainer,
} from './SearchBar.styled';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <LupaContainer>
        <Lupa icon={faMagnifyingGlass} />
      </LupaContainer>
      <SearchBarInput placeholder="Search for movies or TV series"></SearchBarInput>
    </SearchBarContainer>
  );
}
