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
        d="M4 21.5h27M6.5 21.5c0-4.2 1.2-6.6 2.6-8.2C10.7 11.5 13.6 10.5 18 10.5h4.6c2.4 0 3.9.5 5.4 1.7l3.5 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 21.5v2.2M30 21.5v2.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="21.5" r="2.4" fill="currentColor" />
      <circle cx="25" cy="21.5" r="2.4" fill="currentColor" />
      <path d="M34 26V6l12 20H34Z" className="text-primary" fill="currentColor" />
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
