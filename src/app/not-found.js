import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export const metadata = {
  title: "Page non trouvée",
  description: "La page que vous recherchez n'existe pas ou a été déplacée. Retrouvez tous nos guides sur le développement web, les bourses d'études et les opportunités digitales en Afrique.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
    }}>
      <div style={{
        fontSize: '6rem',
        fontWeight: '800',
        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: 1,
        marginBottom: '1rem',
      }}>
        404
      </div>
      <h1 style={{
        fontSize: '1.75rem',
        fontWeight: '700',
        color: 'var(--text-light)',
        marginBottom: '1rem',
      }}>
        Page introuvable
      </h1>
      <p style={{
        color: 'var(--text-muted)',
        maxWidth: '500px',
        lineHeight: '1.7',
        marginBottom: '2rem',
        fontSize: '1.05rem',
      }}>
        Oups ! La page que vous cherchez n&apos;existe pas, a été déplacée ou n&apos;est plus disponible.
        Pas de panique, explorez nos guides et trouvez les meilleures opportunités tech en Afrique.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.85rem 1.75rem',
          borderRadius: '12px',
          background: 'var(--primary)',
          color: 'white',
          fontWeight: '600',
          textDecoration: 'none',
          fontSize: '0.95rem',
          transition: 'opacity 0.2s',
        }}>
          <Home size={18} /> Retour à l&apos;accueil
        </Link>
        <Link href="/blog" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.85rem 1.75rem',
          borderRadius: '12px',
          background: 'var(--glass-bg)',
          border: '1px solid var(--border)',
          color: 'var(--text-light)',
          fontWeight: '600',
          textDecoration: 'none',
          fontSize: '0.95rem',
          transition: 'opacity 0.2s',
        }}>
          <Search size={18} /> Explorer les articles
        </Link>
      </div>
    </div>
  );
}
