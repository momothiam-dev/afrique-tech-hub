import Link from 'next/link';
import { Mail, Shield, FileText, Heart, Globe, ArrowUpRight } from 'lucide-react';
import { categories } from '../data/articles';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand & Description */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              Afrique<span className={styles.logoHighlight}>Tech</span> Hub
            </Link>
            <p className={styles.description}>
              La plateforme éducative de référence pour les jeunes d'Afrique francophone. Apprenez le développement web, l'intelligence artificielle et découvrez des opportunités réelles de freelancing, de bourses d'études et de travail à distance.
            </p>
            <div className={styles.metaInfo}>
              <span className={styles.metaItem}>
                <Globe size={14} /> Afrique Francophone
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.title}>Plan du site</h4>
            <ul className={styles.list}>
              <li>
                <Link href="/" className={styles.link}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.link}>
                  Tous les articles
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact / FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className={styles.linksCol}>
            <h4 className={styles.title}>Catégories</h4>
            <ul className={styles.list}>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.id}`} className={styles.link}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal / AdSense */}
          <div className={styles.linksCol}>
            <h4 className={styles.title}>Pages Légales</h4>
            <ul className={styles.list}>
              <li>
                <Link href="/privacy" className={styles.link}>
                  <Shield size={14} className={styles.iconInline} /> Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.link}>
                  <FileText size={14} className={styles.iconInline} /> Conditions d'Utilisation
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.google.com/adsense/start/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.linkExternal}
                >
                  À propos d'AdSense <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <span className={styles.adsenseInfo}>
                  Site optimisé pour le référencement Google et conforme aux règles Google Publisher.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} Afrique Tech Hub. Tous droits réservés.
          </p>
          <p className={styles.madeWith}>
            Fait avec <Heart size={12} className={styles.heartIcon} /> pour la jeunesse africaine
          </p>
        </div>
      </div>
    </footer>
  );
}
