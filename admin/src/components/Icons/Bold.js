import * as React from 'react';
import styled from 'styled-components';

export default function Bold({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24">
      <StyledPath
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 4.75h5.75a3.75 3.75 0 110 7.5H6.75v-7.5zM6.75 12.25h7a3.5 3.5 0 110 7h-7v-7z"
      />
    </svg>
  );
}

const StyledPath = styled.path`
  fill: none !important;
`;
