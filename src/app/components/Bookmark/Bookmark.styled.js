import styled from 'styled-components';

export const BookmarkButton = styled.button`
  all: unset;
  background-color: #0000009e;
  height: 20px;
  min-width: 20px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 30px;
  top: 10px;

  &:hover {
    cursor: pointer;
    background-color: black;
    transform: scale(1.1);
  }
`;
