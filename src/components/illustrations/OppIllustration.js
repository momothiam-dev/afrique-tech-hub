export default function OppIllustration({ size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="95" fill="url(#oppGrad)" opacity="0.08" />
      <circle cx="100" cy="100" r="95" stroke="url(#oppGrad)" strokeWidth="1.5" opacity="0.3" />
      
      {/* Globe */}
      <circle cx="100" cy="90" r="40" stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity="0.6" />
      <ellipse cx="100" cy="90" rx="40" ry="15" stroke="#06b6d4" strokeWidth="0.8" fill="none" opacity="0.3" />
      <ellipse cx="100" cy="90" rx="15" ry="40" stroke="#06b6d4" strokeWidth="0.8" fill="none" opacity="0.3" />
      <line x1="60" y1="90" x2="140" y2="90" stroke="#06b6d4" strokeWidth="0.8" opacity="0.25" />
      <line x1="100" y1="50" x2="100" y2="130" stroke="#06b6d4" strokeWidth="0.8" opacity="0.25" />
      
      {/* Connection nodes on globe */}
      <circle cx="80" cy="75" r="4" fill="#06b6d4" opacity="0.7" />
      <circle cx="120" cy="85" r="4" fill="#22d3ee" opacity="0.7" />
      <circle cx="95" cy="105" r="3" fill="#67e8f9" opacity="0.6" />
      <circle cx="115" cy="70" r="3" fill="#06b6d4" opacity="0.5" />
      <circle cx="85" cy="95" r="3" fill="#22d3ee" opacity="0.5" />
      
      {/* Connection lines between nodes */}
      <line x1="80" y1="75" x2="120" y2="85" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
      <line x1="120" y1="85" x2="95" y2="105" stroke="#22d3ee" strokeWidth="1" opacity="0.3" />
      <line x1="80" y1="75" x2="115" y2="70" stroke="#06b6d4" strokeWidth="1" opacity="0.25" />
      <line x1="85" y1="95" x2="95" y2="105" stroke="#67e8f9" strokeWidth="1" opacity="0.25" />
      
      {/* Wifi/signal waves */}
      <path d="M85 55 Q100 45 115 55" stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M80 48 Q100 35 120 48" stroke="#22d3ee" strokeWidth="1.2" fill="none" opacity="0.3" />
      <path d="M75 41 Q100 25 125 41" stroke="#67e8f9" strokeWidth="1" fill="none" opacity="0.2" />
      
      {/* People/avatars */}
      <circle cx="45" cy="150" r="8" stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="45" cy="147" r="3" fill="#06b6d4" opacity="0.4" />
      <path d="M39 156 Q45 160 51 156" stroke="#06b6d4" strokeWidth="1.2" fill="none" opacity="0.3" />
      
      <circle cx="100" cy="155" r="8" stroke="#22d3ee" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="100" cy="152" r="3" fill="#22d3ee" opacity="0.4" />
      <path d="M94 161 Q100 165 106 161" stroke="#22d3ee" strokeWidth="1.2" fill="none" opacity="0.3" />
      
      <circle cx="155" cy="150" r="8" stroke="#67e8f9" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="155" cy="147" r="3" fill="#67e8f9" opacity="0.4" />
      <path d="M149 156 Q155 160 161 156" stroke="#67e8f9" strokeWidth="1.2" fill="none" opacity="0.3" />
      
      {/* Connection lines to people */}
      <line x1="80" y1="110" x2="45" y2="142" stroke="#06b6d4" strokeWidth="0.8" opacity="0.2" />
      <line x1="100" y1="130" x2="100" y2="147" stroke="#22d3ee" strokeWidth="0.8" opacity="0.2" />
      <line x1="120" y1="110" x2="155" y2="142" stroke="#67e8f9" strokeWidth="0.8" opacity="0.2" />
      
      <defs>
        <linearGradient id="oppGrad" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  );
}
