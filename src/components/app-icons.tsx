type IconProps = { className?: string };

export function DemeritIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 24" fill="none" className={className} aria-hidden="true">
      <rect x="1" y="9" width="46" height="6" rx="3" fill="currentColor" />
      <circle cx="24" cy="12" r="11" className="text-primary" fill="currentColor" opacity="0.14" />
      <circle cx="24" cy="12" r="8.5" className="text-primary" fill="currentColor" />
      <circle cx="24" cy="12" r="4" fill="#fff" />
    </svg>
  );
}

export function VehiclesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 52 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 16.5c0-1.7 1.3-3 3-3h1l2.2-3.6C13 8.6 14.6 8 16.8 8h6.4c2.2 0 3.8.6 4.6 1.9L30 13.5h1c1.7 0 3 1.3 3 3v3h-2v2h-2.4v-2H10.4v2H8v-2H6v-3Z"
        fill="currentColor"
      />
      <path
        d="M13.6 10.4 12 13.5h16l-1.6-3.1c-.4-.7-1.3-1-2.6-1h-7.4c-1.3 0-2.2.3-2.6 1Z"
        fill="#fff"
      />
      <circle cx="13" cy="20.5" r="2.6" fill="#fff" />
      <circle cx="27" cy="20.5" r="2.6" fill="#fff" />
      <path d="M36 27V4l14 23H36Z" className="text-primary" fill="currentColor" />
    </svg>
  );
}

export function HomeMarkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 28 26" fill="none" className={className} aria-hidden="true">
      <path d="M3 3.5 11.5 22 15.5 13.5 3 3.5Z" fill="currentColor" />
      <path d="M25 3.5 16 22l-2.2-4.8L25 3.5Z" fill="currentColor" opacity="0.55" />
    </svg>
  );
}
