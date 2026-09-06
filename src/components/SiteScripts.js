'use client';

import { useEffect } from 'react';

const GA_ID = 'G-69QYDPXNK6';
const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-6305468777731932';

function loadScript(src, attrs = {}) {
  const script = document.createElement('script');
  script.async = true;
  Object.entries(attrs).forEach(([key, value]) => {
    if (value) script.setAttribute(key, value);
  });
  script.src = src;
  document.head.appendChild(script);
  return script;
}

/**
 * Loads Google Analytics (gtag.js) and Google AdSense outside of React's
 * rendered tree. These scripts rewrite their own <script> elements once
 * loaded (AdSense swaps in its managed loader), which breaks React hydration
 * if they are rendered as JSX. Injecting them manually keeps the DOM that
 * React reconciles stable.
 */
export default function SiteScripts() {
  useEffect(() => {
    // Google tag (gtag.js)
    if (GA_ID && !document.querySelector('script[data-afh-ga]')) {
      const gaScript = loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, {
        'data-afh-ga': 'true',
      });
      gaScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', GA_ID);
      };
      // Fallback if the loader is cached and does not fire onload again.
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_ID);
    }

    // Google AdSense
    if (ADSENSE_CLIENT && !document.querySelector('script[data-afh-adsense]')) {
      loadScript(
        `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`,
        {
          'data-afh-adsense': 'true',
          crossOrigin: 'anonymous',
        }
      );
    }
  }, []);

  return null;
}
