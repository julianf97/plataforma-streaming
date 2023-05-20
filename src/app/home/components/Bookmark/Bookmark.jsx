import * as React from 'react';
import { BookmarkButton } from './Bookmark.styled';
const Bookmark = (props) => {
  return (
    <BookmarkButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5h-7.5C7.56 5 7 5.588 7 6.313V19l5-3.5 5 3.5V6.312C17 5.588 16.44 5 15.75 5Z"
        />
      </svg>
    </BookmarkButton>
  );
};

export default Bookmark;
