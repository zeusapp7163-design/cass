import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function SpadeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.2c-.3 0-.55.16-.72.42C9.9 5.02 5.4 10.5 4.3 12.24c-1.2 1.9-.3 4.36 1.86 4.9 1.5.38 2.9-.3 3.9-1.4-.12 1.9-.6 3.3-1.35 4.2-.24.3-.03.76.36.76h6.86c.4 0 .6-.46.36-.76-.75-.9-1.23-2.3-1.35-4.2 1 1.1 2.4 1.78 3.9 1.4 2.16-.54 3.06-3 1.86-4.9C18.6 10.5 14.1 5.02 12.72 2.62A.87.87 0 0 0 12 2.2Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.6l2.7 5.86 6.42.72-4.78 4.36 1.3 6.34L12 16.72l-5.64 3.16 1.3-6.34L2.88 9.18l6.42-.72L12 2.6Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3l7 3v5.4c0 4.3-2.9 7.7-7 9.6-4.1-1.9-7-5.3-7-9.6V6l7-3Z" />
      <path d="m9 12 2.1 2.1L15.2 10" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" />
    </svg>
  );
}

export function GiftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 11h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9Z" />
      <path d="M3 7.5h18V11H3z" />
      <path d="M12 7.5V21" />
      <path d="M12 7.5S11 3 8.5 3 6.5 7.5 12 7.5Zm0 0S13 3 15.5 3 17.5 7.5 12 7.5Z" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3H6a2.5 2.5 0 0 0-2.5 2.5V12" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h13" />
      <path d="m12.5 5.5 6.5 6.5-6.5 6.5" />
    </svg>
  );
}
