import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`;

export const SearchBarInput = styled.input`
  width: 200px;
  height: 100%;
  display: flex;
  border-radius: 0px 20px 20px 0px;
  outline: 0;
  border: 0;
  color: #fff;
  padding-left: 15px;

  &:focus {
    outline: 0;
    border: 0;
  }

  &::placeholder {
    color: #ffffff9d;
  }
`;
