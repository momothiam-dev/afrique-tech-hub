'use client';

import { useState } from 'react';
import styles from './CodeBlock.module.css';

export default function CodeBlock({ code, language = 'javascript', filename = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.codeBlock}>
      <div className={styles.header}>
        <div className={styles.dots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        {filename && <span className={styles.filename}>{filename}</span>}
        <span className={styles.lang}>{language}</span>
        <button onClick={handleCopy} className={styles.copyBtn}>
          {copied ? 'Copié !' : 'Copier'}
        </button>
      </div>
      <pre className={styles.pre}>
        <code className={styles.code}>{code}</code>
      </pre>
    </div>
  );
}
