import type { SVGProps } from 'react';

export const SnbdLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z"
    />
    <path
      fill="currentColor"
      d="M168 88a40 40 0 0 0-75.16 22.34A32 32 0 1 0 112 176h56a40 40 0 0 0 0-80Zm0 64h-56a16 16 0 0 1 0-32h1.42A40 40 0 0 0 168 104a24 24 0 0 1 0 48Z"
    />
  </svg>
);
