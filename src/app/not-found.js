import Link from 'next/link';
import { Home, ArrowLeft, Search, Compass } from 'lucide-react';
import styles from './not-found.module.css';

export const metadata = {
  title: "Page non trouvée",
  description: "La page que vous recherchez n'existe pas ou a été déplacée. Retrouvez tous nos guides sur le développement web, les bourses d'études et les opportunités digitales en Afrique.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.code} aria-hidden="true">404</div>
        <Compass size={44} className={styles.icon} />
        <h1 className={styles.title}>Page introuvable</h1>
        <p className={styles.text}>
          Oups ! La page que vous cherchez n&apos;existe pas, a été déplacée ou n&apos;est plus disponible.
          Pas de panique, explorez nos guides et trouvez les meilleures opportunités tech en Afrique.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn-primary">
            <Home size={18} /> Retour à l&apos;accueil
          </Link>
          <Link href="/blog" className="btn btn-secondary">
            <Search size={18} /> Explorer les articles
          </Link>
        </div>
        <Link href="/blog" className={styles.backLink}>
          <ArrowLeft size={14} /> Voir tous les guides
        </Link>
      </div>
    </div>
  );
}
