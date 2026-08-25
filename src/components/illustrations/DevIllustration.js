export default function DevIllustration({ size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="100" cy="100" r="95" fill="url(#devGrad)" opacity="0.08" />
      <circle cx="100" cy="100" r="95" stroke="url(#devGrad)" strokeWidth="1.5" opacity="0.3" />
      
      {/* Code brackets */}
      <text x="30" y="115" fontFamily="monospace" fontSize="60" fontWeight="bold" fill="url(#devGrad)" opacity="0.9">&lt;/&gt;</text>
      
      {/* Floating code lines */}
      <rect x="55" y="45" width="90" height="4" rx="2" fill="#3b82f6" opacity="0.6" />
      <rect x="70" y="55" width="60" height="4" rx="2" fill="#60a5fa" opacity="0.4" />
      <rect x="60" y="65" width="80" height="4" rx="2" fill="#93c5fd" opacity="0.3" />
      
      {/* Terminal dots */}
      <circle cx="60" cy="35" r="4" fill="#ef4444" opacity="0.7" />
      <circle cx="75" cy="35" r="4" fill="#eab308" opacity="0.7" />
      <circle cx="90" cy="35" r="4" fill="#22c55e" opacity="0.7" />
      
      {/* Bottom decorative lines */}
      <rect x="40" y="145" width="120" height="3" rx="1.5" fill="#3b82f6" opacity="0.2" />
      <rect x="55" y="155" width="90" height="3" rx="1.5" fill="#60a5fa" opacity="0.15" />
      <rect x="70" y="165" width="60" height="3" rx="1.5" fill="#93c5fd" opacity="0.1" />
      
      {/* Sparkle dots */}
      <circle cx="155" cy="80" r="2" fill="#3b82f6" opacity="0.5" />
      <circle cx="165" cy="95" r="1.5" fill="#60a5fa" opacity="0.4" />
      <circle cx="150" cy="130" r="2.5" fill="#93c5fd" opacity="0.3" />
      <circle cx="45" cy="85" r="2" fill="#3b82f6" opacity="0.4" />
      
      <defs>
        <linearGradient id="devGrad" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
