export function LogoMark({ className = "logo-mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g
        stroke="#8D57C0"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <polyline points="12,14 22,18 32,14 42,18 52,14" />
        <polyline points="52,14 42,26 32,32 22,38 12,50" />
        <polyline points="12,50 22,46 32,50 42,46 52,50" />
      </g>
      <g fill="#8D57C0">
        <circle cx="32" cy="14" r="2.2" />
        <circle cx="32" cy="32" r="2.2" />
        <circle cx="32" cy="50" r="2.2" />
        <circle cx="52" cy="14" r="2.2" />
        <circle cx="12" cy="50" r="2.2" />
      </g>
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Zymiq">
      <LogoMark />
      <span className="logo-word">zymiq</span>
    </a>
  );
}
