export default function AIIllustration({ size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="95" fill="url(#aiGrad)" opacity="0.08" />
      <circle cx="100" cy="100" r="95" stroke="url(#aiGrad)" strokeWidth="1.5" opacity="0.3" />
      
      {/* Brain outline */}
      <path d="M100 50 C70 50 50 70 50 95 C50 110 58 122 70 130 L70 150 L130 150 L130 130 C142 122 150 110 150 95 C150 70 130 50 100 50Z" 
        stroke="url(#aiGrad)" strokeWidth="2" fill="none" opacity="0.7" />
      
      {/* Neural network nodes */}
      <circle cx="80" cy="80" r="5" fill="#8b5cf6" opacity="0.8" />
      <circle cx="120" cy="80" r="5" fill="#a78bfa" opacity="0.8" />
      <circle cx="100" cy="100" r="6" fill="#c084fc" opacity="0.9" />
      <circle cx="75" cy="110" r="4" fill="#8b5cf6" opacity="0.6" />
      <circle cx="125" cy="110" r="4" fill="#a78bfa" opacity="0.6" />
      <circle cx="90" cy="125" r="4" fill="#c084fc" opacity="0.5" />
      <circle cx="110" cy="125" r="4" fill="#a78bfa" opacity="0.5" />
      
      {/* Neural connections */}
      <line x1="80" y1="80" x2="100" y2="100" stroke="#8b5cf6" strokeWidth="1" opacity="0.4" />
      <line x1="120" y1="80" x2="100" y2="100" stroke="#a78bfa" strokeWidth="1" opacity="0.4" />
      <line x1="100" y1="100" x2="75" y2="110" stroke="#c084fc" strokeWidth="1" opacity="0.3" />
      <line x1="100" y1="100" x2="125" y2="110" stroke="#a78bfa" strokeWidth="1" opacity="0.3" />
      <line x1="75" y1="110" x2="90" y2="125" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />
      <line x1="125" y1="110" x2="110" y2="125" stroke="#c084fc" strokeWidth="1" opacity="0.3" />
      <line x1="80" y1="80" x2="120" y2="80" stroke="#a78bfa" strokeWidth="0.8" opacity="0.2" />
      
      {/* Data flow particles */}
      <circle cx="90" cy="65" r="2" fill="#8b5cf6" opacity="0.5" />
      <circle cx="110" cy="65" r="2" fill="#c084fc" opacity="0.5" />
      <circle cx="60" cy="95" r="1.5" fill="#a78bfa" opacity="0.4" />
      <circle cx="140" cy="95" r="1.5" fill="#8b5cf6" opacity="0.4" />
      
      {/* Orbiting dots */}
      <circle cx="45" cy="60" r="2" fill="#8b5cf6" opacity="0.3" />
      <circle cx="155" cy="60" r="1.5" fill="#c084fc" opacity="0.3" />
      <circle cx="50" cy="140" r="2" fill="#a78bfa" opacity="0.2" />
      <circle cx="150" cy="140" r="1.5" fill="#8b5cf6" opacity="0.2" />
      
      <defs>
        <linearGradient id="aiGrad" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}
