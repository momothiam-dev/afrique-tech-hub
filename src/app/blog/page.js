import { Suspense } from 'react';
import BlogContent from './BlogContent';

export const metadata = {
  title: "Guides & Opportunités Digitales",
  description: "Explorez notre catalogue de guides pratiques : développement web, intelligence artificielle, bourses d'études et opportunités de travail à distance en Afrique.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Guides & Opportunités Digitales — Afrique Tech Hub",
    description: "Explorez notre catalogue de guides pratiques : développement web, intelligence artificielle, bourses d'études et opportunités de travail à distance en Afrique.",
    url: "https://afrique-tech-hub.vercel.app/blog",
  },
};

export default function Blog() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <p>Chargement des articles...</p>
      </div>
    }>
      <BlogContent />
    </Suspense>
  );
}
