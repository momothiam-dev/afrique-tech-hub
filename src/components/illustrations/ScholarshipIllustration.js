export default function ScholarshipIllustration({ size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="95" fill="url(#scholGrad)" opacity="0.08" />
      <circle cx="100" cy="100" r="95" stroke="url(#scholGrad)" strokeWidth="1.5" opacity="0.3" />
      
      {/* Graduation cap */}
      <polygon points="100,45 160,80 100,115 40,80" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b" opacity="0.15" />
      <polygon points="100,45 160,80 100,115 40,80" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.7" />
      <line x1="100" y1="115" x2="100" y2="140" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5" />
      
      {/* Tassel */}
      <circle cx="155" cy="82" r="4" fill="#f59e0b" opacity="0.6" />
      <line x1="155" y1="86" x2="155" y2="105" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4" />
      <circle cx="155" cy="108" r="3" fill="#fbbf24" opacity="0.5" />
      
      {/* Globe behind */}
      <circle cx="100" cy="140" r="25" stroke="#f59e0b" strokeWidth="1" fill="none" opacity="0.3" />
      <ellipse cx="100" cy="140" rx="25" ry="10" stroke="#f59e0b" strokeWidth="0.8" fill="none" opacity="0.2" />
      <line x1="75" y1="140" x2="125" y2="140" stroke="#f59e0b" strokeWidth="0.8" opacity="0.2" />
      
      {/* Stars */}
      <polygon points="50,55 52,61 58,61 53,65 55,71 50,67 45,71 47,65 42,61 48,61" fill="#f59e0b" opacity="0.4" />
      <polygon points="150,50 151,53 154,53 152,55 153,58 150,56 147,58 148,55 146,53 149,53" fill="#fbbf24" opacity="0.3" />
      <polygon points="60,160 61,163 64,163 62,165 63,168 60,166 57,168 58,165 56,163 59,163" fill="#f59e0b" opacity="0.2" />
      <polygon points="145,155 146,158 149,158 147,160 148,163 145,161 142,163 143,160 141,158 144,158" fill="#fbbf24" opacity="0.2" />
      
      {/* Book */}
      <rect x="75" y="125" width="50" height="35" rx="3" stroke="#f59e0b" strokeWidth="1.5" fill="none" opacity="0.4" />
      <line x1="100" y1="125" x2="100" y2="160" stroke="#f59e0b" strokeWidth="1" opacity="0.3" />
      <line x1="82" y1="133" x2="96" y2="133" stroke="#f59e0b" strokeWidth="0.8" opacity="0.25" />
      <line x1="82" y1="139" x2="96" y2="139" stroke="#f59e0b" strokeWidth="0.8" opacity="0.2" />
      <line x1="104" y1="133" x2="118" y2="133" stroke="#f59e0b" strokeWidth="0.8" opacity="0.25" />
      <line x1="104" y1="139" x2="118" y2="139" stroke="#f59e0b" strokeWidth="0.8" opacity="0.2" />
      
      <defs>
        <linearGradient id="scholGrad" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
    </svg>
  );
}
