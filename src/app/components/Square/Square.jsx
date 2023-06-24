import * as React from 'react';
const Square = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="0.5em"
    fill="#fff"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      stroke="#fff"
      d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"
    />
  </svg>
);
export default Square;
