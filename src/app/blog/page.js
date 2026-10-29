import Link from 'next/link';
import { ChevronRight, Clock } from 'lucide-react';
import BlogContent from './BlogContent';
import { articles } from '../../data/articles';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, getArticleLastModified } from '../../data/seo';
import styles from './blog.module.css';

export const metadata = {
  title: {
    absolute: "Guides tech, bourses et freelancing en Afrique (2026)",
  },
  description:
    "25 guides gratuits pour apprendre le développement web et l'IA, décrocher une bourse d'étude et travailler en ligne depuis l'Afrique francophone.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Guides tech, bourses et freelancing en Afrique — Afrique Tech Hub",
    description:
      "25 guides gratuits pour apprendre la tech, financer vos études et travailler en ligne depuis l'Afrique francophone.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Guides d'Afrique Tech Hub",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guides tech, bourses et freelancing en Afrique",
    description:
      "25 guides gratuits pour apprendre la tech, financer vos études et travailler en ligne depuis l'Afrique.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Blog() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const latestUpdate = sortedArticles.reduce((latest, article) => {
    const date = getArticleLastModified(article);
    return date > latest ? date : latest;
  }, '2026-01-01');

  const formattedUpdate = new Date(latestUpdate).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Only send the fields needed by the client-side filter, not the full content.
  const clientArticles = sortedArticles.map((article) => ({
    id: article.id,
    slug: article.slug,
    title: article.title,
    description: article.description,
    category: article.category,
    date: article.date,
    readTime: article.readTime,
    author: article.author,
    seoKeywords: article.seoKeywords,
  }));

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: "Guides tech, bourses et freelancing en Afrique",
    description:
      "Catalogue de guides gratuits sur le développement web, l'intelligence artificielle, les bourses d'études et le travail à distance en Afrique francophone.",
    url: `${SITE_URL}/blog`,
    inLanguage: 'fr',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: sortedArticles.length,
      itemListElement: sortedArticles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/blog/${article.slug}`,
        name: article.title,
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/blog` },
    ],
  };

  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Blog Hero Page Header */}
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <nav className={styles.breadcrumbs} aria-label="Fil d'Ariane">
            <Link href="/" className={styles.breadcrumbLink}>Accueil</Link>
            <ChevronRight size={12} className={styles.breadIcon} />
            <span className={styles.breadcrumbActive}>Guides &amp; articles</span>
          </nav>
          <h1 className={styles.title}>
            Guides tech, bourses et{' '}
            <span className="text-gradient">opportunités</span> en Afrique
          </h1>
          <p className={styles.subtitle}>
            Apprenez le développement web et l&apos;intelligence artificielle,
            décrochez une bourse d&apos;études et trouvez des missions en ligne.
            Tous nos guides sont gratuits et conçus pour la jeunesse africaine
            francophone.
          </p>
          <p className={styles.updateLine}>
            <Clock size={13} /> {sortedArticles.length} guides · dernière mise à jour le {formattedUpdate}
          </p>
        </div>
      </section>

      <BlogContent articles={clientArticles} />
    </div>
  );
}
