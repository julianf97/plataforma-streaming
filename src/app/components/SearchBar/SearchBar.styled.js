import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`;

export const LupaContainer = styled.div`
  max-height: 1.2rem;
  font-size: 1.2rem;
  color: #fff;
  fill: #fff;
`;

export const Lupa = styled(FontAwesomeIcon).attrs(({ icon }) => ({
  icon,
}))`
  color: #fff;
  font-size: 1.2rem;
  margin-left: 10px;
  margin-bottom: 2px;
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
