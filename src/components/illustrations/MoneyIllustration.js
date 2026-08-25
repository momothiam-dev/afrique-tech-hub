export default function MoneyIllustration({ size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="95" fill="url(#moneyGrad)" opacity="0.08" />
      <circle cx="100" cy="100" r="95" stroke="url(#moneyGrad)" strokeWidth="1.5" opacity="0.3" />
      
      {/* Laptop */}
      <rect x="45" y="60" width="110" height="70" rx="6" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.7" />
      <rect x="50" y="65" width="100" height="55" rx="2" fill="#22c55e" opacity="0.06" />
      <rect x="35" y="130" width="130" height="8" rx="4" stroke="#22c55e" strokeWidth="1.5" fill="none" opacity="0.5" />
      
      {/* Screen content - chart */}
      <polyline points="60,110 75,95 90,105 105,80 120,90 135,70" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.8" />
      <polyline points="60,110 75,95 90,105 105,80 120,90 135,70 135,115 60,115" fill="url(#moneyGrad)" opacity="0.1" />
      
      {/* Dollar signs floating */}
      <text x="55" y="50" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#22c55e" opacity="0.6">$</text>
      <text x="135" y="45" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#4ade80" opacity="0.4">$</text>
      <text x="150" y="75" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#86efac" opacity="0.3">$</text>
      
      {/* Coins */}
      <ellipse cx="55" cy="155" rx="12" ry="6" stroke="#22c55e" strokeWidth="1.5" fill="none" opacity="0.4" />
      <ellipse cx="55" cy="150" rx="12" ry="6" stroke="#22c55e" strokeWidth="1.5" fill="none" opacity="0.5" />
      <ellipse cx="55" cy="145" rx="12" ry="6" stroke="#22c55e" strokeWidth="1.5" fill="#22c55e" opacity="0.15" />
      
      <ellipse cx="145" cy="155" rx="12" ry="6" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.3" />
      <ellipse cx="145" cy="150" rx="12" ry="6" stroke="#4ade80" strokeWidth="1.5" fill="#4ade80" opacity="0.1" />
      
      {/* Arrow up */}
      <path d="M160 55 L160 40 M155 45 L160 40 L165 45" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      
      <defs>
        <linearGradient id="moneyGrad" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>
    </svg>
  );
}
