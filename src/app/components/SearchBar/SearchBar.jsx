import React from 'react';
import { SearchBarContainer, SearchBarInput } from './SearchBar.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./searchBar.css"


export default function SearchBar() {

  
  return (
    <SearchBarContainer>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='lupa'></FontAwesomeIcon>
      <SearchBarInput placeholder='Search for movies or TV series'></SearchBarInput>
    </SearchBarContainer>
  );
}
