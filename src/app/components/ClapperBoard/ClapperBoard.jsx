import * as React from 'react';
const ClapperBoard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1.2em"
    fill="#FD4746"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      stroke="#fff"
      d="M448 32H361.9l-1 1-127 127h92.1l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40l-104 104H512zM294.1 32H201.9l-1 1L73.9 160h92.1l1-1 127-127zM64 32C28.7 32 0 60.7 0 96v64H6.1l1-1 127-127H64zM512 192H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192z"
    />
  </svg>
);
export default ClapperBoard;