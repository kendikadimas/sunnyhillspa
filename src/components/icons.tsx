import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.031 2a9.96 9.96 0 0 0-8.566 15.065L2 22l5.099-1.336A9.964 9.964 0 1 0 12.03 2zm0 18.238a8.24 8.24 0 0 1-4.207-1.15l-.302-.18-3.123.818.833-3.044-.197-.314A8.252 8.252 0 1 1 12.03 20.238zm4.529-6.183c-.248-.124-1.468-.724-1.695-.807-.227-.083-.393-.124-.559.124-.165.248-.641.807-.786.972-.145.165-.29.186-.538.062-.248-.124-1.048-.386-1.996-1.231-.738-.658-1.237-1.47-1.382-1.718-.145-.248-.015-.382.109-.505.112-.111.248-.29.372-.435.124-.145.165-.248.248-.414.083-.165.041-.31-.021-.435-.062-.124-.559-1.347-.765-1.842-.201-.482-.405-.417-.559-.425l-.476-.008c-.165 0-.434.062-.661.31-.227.248-.869.849-.869 2.071 0 1.222.89 2.401 1.013 2.566.124.165 1.751 2.674 4.242 3.75.593.256 1.056.409 1.417.524.595.189 1.136.162 1.564.098.477-.071 1.468-.6 1.674-1.18.207-.579.207-1.075.145-1.18-.062-.105-.227-.166-.475-.29z"/>
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function StarFourIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  );
}

export function LampPendantIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M100 0v80" stroke="#70875c" strokeWidth="4" />
      <path
        d="M50 110c0-22 22-40 50-40s50 18 50 40H50Z"
        fill="#70875c"
        stroke="#596f48"
        strokeWidth="3"
      />
      <ellipse cx="100" cy="110" rx="50" ry="10" fill="#8ba376" />
      <circle cx="100" cy="110" r="14" fill="#faf6ed" opacity="0.9" />
    </svg>
  );
}

export function MushroomArtIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M50 15C30 15 14 30 14 48c0 3 2 5 6 5h60c4 0 6-2 6-5 0-18-16-33-36-33Z"
        opacity="0.9"
      />
      <rect x="44" y="53" width="12" height="32" rx="6" />
      <circle cx="50" cy="22" r="3" fill="#faf6ed" opacity="0.4" />
      <circle cx="34" cy="36" r="4" fill="#faf6ed" opacity="0.4" />
      <circle cx="66" cy="36" r="4" fill="#faf6ed" opacity="0.4" />
    </svg>
  );
}

export function KnotArtIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M35 35c-12 12-12 30 0 42s30 12 42 0-6-30-18-42-30-6-42 6 0 30 18 42 30 6 42-6" />
    </svg>
  );
}

export function StackedStonesIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <ellipse cx="38" cy="35" rx="14" ry="14" />
      <ellipse cx="64" cy="38" rx="15" ry="15" />
      <path d="M35 55c0-10 14-16 26-16s26 6 26 16-12 28-26 28-26-18-26-28Z" />
    </svg>
  );
}

export function TotemSculptIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 60 120"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <circle cx="30" cy="20" r="14" />
      <ellipse cx="30" cy="50" rx="18" ry="12" />
      <path d="M12 70h36v20c0 10-8 18-18 18s-18-8-18-18V70Z" />
    </svg>
  );
}

export function CapsuleStackIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <rect x="20" y="15" width="26" height="32" rx="13" />
      <rect x="54" y="15" width="26" height="32" rx="13" />
      <rect x="15" y="48" width="70" height="8" rx="4" />
      <rect x="20" y="58" width="26" height="32" rx="13" />
      <rect x="54" y="58" width="26" height="32" rx="13" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function LotusIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C11.5 5 9.5 8 8 10C6.5 12 6 14.5 7 16.5C8 18.5 10 19.5 12 19.5C14 19.5 16 18.5 17 16.5C18 14.5 17.5 12 16 10C14.5 8 12.5 5 12 2Z" opacity="0.95" />
      <path d="M12 7C9.5 9 6 12 5 15C4 17.5 5.5 20 8.5 20.5C10 20.7 11.5 20.2 12 19.5C10.5 18 9.5 16 9.5 13.5C9.5 11 11 9 12 7Z" opacity="0.85" />
      <path d="M12 7C14.5 9 18 12 19 15C20 17.5 18.5 20 15.5 20.5C14 20.7 12.5 20.2 12 19.5C13.5 18 14.5 16 14.5 13.5C14.5 11 13 9 12 7Z" opacity="0.85" />
      <path d="M12 11C8 13.5 3 16 2.5 18.5C2 20.5 4 22 7 21.5C9.5 21 11.5 19 12 18C10.5 17 9 15 9 13C9 12 10.5 11.5 12 11Z" opacity="0.65" />
      <path d="M12 11C16 13.5 21 16 21.5 18.5C22 20.5 20 22 17 21.5C14.5 21 12.5 19 12 18C13.5 17 15 15 15 13C15 12 13.5 11.5 12 11Z" opacity="0.65" />
    </svg>
  );
}
