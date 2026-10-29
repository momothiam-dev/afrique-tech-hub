'use client';

import { useState } from 'react';
import { Mail, Send, Sparkles } from 'lucide-react';
import styles from './NewsletterForm.module.css';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <div className={`${styles.widget} glass-card`}>
      <h3 className={styles.widgetTitle}>
        <Mail size={18} className={styles.widgetTitleIcon} /> Opportunités Privées
      </h3>
      <p className={styles.newsletterDesc}>
        Inscrivez-vous gratuitement pour recevoir par email les meilleures bourses
        d&apos;études et offres de travail à distance avant tout le monde.
      </p>
      {isSubscribed ? (
        <div className={styles.subscribedState} role="status">
          <Sparkles size={24} className={styles.successIcon} />
          <p className={styles.successTitle}>Inscription réussie !</p>
          <p className={styles.successText}>
            Merci ! Vous recevrez nos meilleures alertes dès la semaine prochaine.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
          <label htmlFor="newsletter-email" className={styles.srOnly}>
            Votre adresse email
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            autoComplete="email"
            placeholder="Votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.newsletterInput}
          />
          <button type="submit" className={`btn btn-primary ${styles.newsletterBtn}`}>
            Rejoindre le Club <Send size={14} />
          </button>
        </form>
      )}
    </div>
  );
}
