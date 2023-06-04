import * as React from 'react'

export default function ClearFormat({ size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.25 7.25v-1.5H8.5m-2.75 0v1.5M12 6v3.5m0 8.75h-1.25m1.25 0h1.25m-1.25 0V12.5M5 5l13 13"
      />
    </svg>
  )
}
