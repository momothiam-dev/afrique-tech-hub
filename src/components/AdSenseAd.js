'use client';

import { useEffect, useState } from 'react';
import { HelpCircle, DollarSign } from 'lucide-react';
import styles from './AdSenseAd.module.css';

export default function AdSenseAd({ slot, format = 'auto', layout = '', height = 'auto', className = '' }) {
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    // Read Client ID from environment variable or system (simulate eventual configuration)
    const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
    if (adsenseId) {
      setClientId(adsenseId);
      
      // Load Google AdSense script dynamically if not already loaded
      if (!window.adsbygoogle) {
        const script = document.createElement('script');
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`;
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
      
      // Push the ad to AdSense stack
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense push error:', err);
      }
    }
  }, [slot]);

  // Determine standard placeholder dimensions based on layout format
  const getFormatLabel = () => {
    switch (format) {
      case 'horizontal': return 'Bannière Horizontale (728x90)';
      case 'vertical': return 'Bannière Verticale (160x600)';
      case 'rectangle': return 'Pavé Rectangulaire (300x250)';
      default: return 'Annonce Responsive (AdSense)';
    }
  };

  const getFormatStyles = () => {
    switch (format) {
      case 'horizontal': return { minHeight: '90px', width: '100%' };
      case 'vertical': return { minHeight: '400px', width: '160px', margin: '0 auto' };
      case 'rectangle': return { minHeight: '250px', width: '300px', margin: '0 auto' };
      default: return { minHeight: '120px', width: '100%' };
    }
  };

  // If Client ID is present, render the official Google AdSense code
  if (clientId) {
    return (
      <div className={`${styles.adContainer} ${className}`} style={getFormatStyles()}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', ...getFormatStyles() }}
          data-ad-client={clientId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
          {...(layout ? { 'data-ad-layout': layout } : {})}
        />
      </div>
    );
  }

  // Otherwise, render a beautifully simulated AdSense placeholder
  return (
    <div 
      className={`${styles.placeholder} ${className}`} 
      style={getFormatStyles()}
      title="Cet espace affichera de vraies publicités Google AdSense une fois votre compte validé !"
    >
      <div className={styles.topInfo}>
        <span className={styles.badge}>
          <DollarSign size={10} /> Publicité
        </span>
        <span className={styles.formatLabel}>{getFormatLabel()}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.sparkleBg} />
        <span className={styles.mainText}>Google AdSense</span>
        <span className={styles.subText}>Espace de monétisation réservé</span>
      </div>
      <div className={styles.footer}>
        <span className={styles.infoLink}>
          <HelpCircle size={10} /> Prêt pour validation AdSense
        </span>
      </div>
    </div>
  );
}
