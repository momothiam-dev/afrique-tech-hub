'use client';

import { useState } from 'react';
import { Check, Link as LinkIcon } from 'lucide-react';
import styles from './article.module.css';

export default function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      });
    }
  };

  const getWhatsAppShareUrl = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Regarde ce guide génial sur Afrique Tech Hub : "${title}" \n\n`);
      return `https://api.whatsapp.com/send?text=${text}${url}`;
    }
    return '#';
  };

  const getFacebookShareUrl = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    }
    return '#';
  };

  const getTelegramShareUrl = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Intéressant guide sur Afrique Tech Hub : "${title}"`);
      return `https://t.me/share/url?url=${url}&text=${text}`;
    }
    return '#';
  };

  return (
    <div className={styles.shareButtons}>
      {/* Copy link */}
      <button 
        onClick={handleCopyLink} 
        className={`${styles.shareButton} ${copied ? styles.shareButtonCopied : ''}`}
        title="Copier le lien"
      >
        {copied ? <Check size={16} /> : <LinkIcon size={16} />}
        <span>{copied ? 'Lien copié !' : 'Copier le lien'}</span>
      </button>

      {/* WhatsApp share */}
      <a 
        href={getWhatsAppShareUrl()} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.shareButton} ${styles.shareWhatsapp}`}
      >
        {/* Inline WhatsApp SVG */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.05-4.832c1.644.976 3.256 1.488 4.793 1.489 5.518 0 10.007-4.49 10.01-10.008.001-2.673-1.04-5.186-2.93-7.078-1.89-1.891-4.407-2.933-7.086-2.933-5.522 0-10.012 4.49-10.015 10.013-.001 1.708.455 3.376 1.322 4.887l-.98 3.577 3.693-.969c.001 0 .001 0 0 0zM17.15 14.92c-.283-.144-1.677-.827-1.936-.922-.26-.096-.45-.144-.64.144-.19.288-.73.922-.89 1.1-.16.182-.32.206-.6.062-.28-.145-1.196-.441-2.278-1.408-.842-.751-1.411-1.68-1.576-1.966-.165-.286-.018-.44.123-.581.127-.127.283-.329.424-.494.14-.165.188-.282.282-.47.094-.189.047-.354-.023-.495-.071-.141-.64-1.54-.877-2.11-.23-.554-.464-.48-.64-.489-.164-.008-.353-.01-.542-.01-.19 0-.498.07-.76.353-.26.288-1 .978-1 2.384 0 1.407 1.022 2.768 1.164 2.96.14.192 2.012 3.074 4.877 4.31.682.296 1.214.472 1.629.603.687.218 1.312.187 1.806.114.55-.083 1.678-.686 1.914-1.348.237-.662.237-1.229.166-1.348-.07-.12-.26-.192-.54-.337z"/>
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* Facebook share */}
      <a 
        href={getFacebookShareUrl()} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.shareButton} ${styles.shareFacebook}`}
      >
        {/* Inline Facebook SVG */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        <span>Facebook</span>
      </a>

      {/* Telegram share */}
      <a 
        href={getTelegramShareUrl()} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.shareButton} ${styles.shareTelegram}`}
      >
        {/* Inline Telegram SVG */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0C5.347 0 0 5.347 0 11.944c0 6.597 5.347 11.944 11.944 11.944 6.597 0 11.944-5.347 11.944-11.944C23.888 5.347 18.54 0 11.944 0zm5.82 8.358l-1.996 9.407c-.15.67-.547.834-1.109.52l-3.047-2.247-1.47 1.417c-.163.163-.3.3-.614.3l.219-3.11 5.666-5.116c.246-.22-.054-.34-.378-.124l-7.006 4.41-3.018-.944c-.656-.206-.67-.656.137-.972l11.793-4.544c.547-.206 1.026.124.819.972z"/>
        </svg>
        <span>Telegram</span>
      </a>
    </div>
  );
}
