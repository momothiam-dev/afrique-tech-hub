import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Calendar, ArrowRight, ChevronRight, BookOpen, User } from 'lucide-react';
import { articles, categories } from '../../../data/articles';
import { DevIllustration, AIIllustration, MoneyIllustration, ScholarshipIllustration, OppIllustration } from '../../../components/illustrations';
import styles from './category.module.css';

const categoryIllustrations = {
  dev: DevIllustration,
  ia: AIIllustration,
  money: MoneyIllustration,
  scholarship: ScholarshipIllustration,
  opp: OppIllustration,
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = categories.find((c) => c.id === slug);

  if (!category) {
    return { title: "Catégorie non trouvée" };
  }

  const categoryArticles = articles.filter((a) => a.category === slug);

  return {
    title: `${category.name} — Guides et Tutoriels Gratuits`,
    description: `${category.description} Découvrez ${categoryArticles.length} guides pratiques et tutoriels gratuits sur ${category.name.toLowerCase()} pour la jeunesse africaine francophone.`,
    alternates: {
      canonical: `/category/${slug}`,
    },
    openGraph: {
      title: `${category.name} — Afrique Tech Hub`,
      description: category.description,
      url: `https://afrique-tech-hub.vercel.app/category/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} — Afrique Tech Hub`,
      description: category.description,
    },
  };
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.id,
  }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = categories.find((c) => c.id === slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = articles
    .filter((a) => a.category === slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const getBadgeClass = (catId) => {
    const found = categories.find(c => c.id === catId);
    return found ? found.badgeClass : 'badge-dev';
  };

  const getCategoryName = (catId) => {
    const found = categories.find(c => c.id === catId);
    return found ? found.name : 'Tech';
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} — Afrique Tech Hub`,
    description: category.description,
    url: `https://afrique-tech-hub.vercel.app/category/${slug}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Afrique Tech Hub',
      url: 'https://afrique-tech-hub.vercel.app',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: categoryArticles.length,
      itemListElement: categoryArticles.map((art, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://afrique-tech-hub.vercel.app/blog/${art.slug}`,
        name: art.title,
      })),
    },
  };

  const Illustration = categoryIllustrations[slug];

  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>Accueil</Link>
            <ChevronRight size={12} className={styles.breadIcon} />
            <Link href="/blog" className={styles.breadcrumbLink}>Blog</Link>
            <ChevronRight size={12} className={styles.breadIcon} />
            <span className={styles.breadcrumbActive}>{category.name}</span>
          </div>

          <div className={styles.headerWithIllustration}>
            <div className={styles.headerText}>
              <h1 className={styles.title}>
                <span className="text-gradient">{category.name}</span>
              </h1>
              <p className={styles.subtitle}>{category.description}</p>
              <div className={styles.metaRow}>
                <span className={styles.metaItem}>
                  <BookOpen size={14} /> {categoryArticles.length} articles
                </span>
              </div>
            </div>
            {Illustration && (
              <div className={styles.illustrationWrap}>
                <Illustration size={180} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.articlesGrid}>
            {categoryArticles.map((art) => (
              <article key={art.id} className={`${styles.articleCard} glass-card`}>
                <div className={styles.cardHeader}>
                  <span className={`badge ${getBadgeClass(art.category)}`}>
                    {getCategoryName(art.category)}
                  </span>
                  <span className={styles.readTime}>
                    <Clock size={12} /> {art.readTime}
                  </span>
                </div>
                <h2 className={styles.cardTitle}>
                  <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                </h2>
                <p className={styles.cardDesc}>{art.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.author}>
                    <User size={14} /> Par {art.author}
                  </span>
                  <span className={styles.date}>
                    <Calendar size={14} /> {new Date(art.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>
                <Link href={`/blog/${art.slug}`} className={styles.readLink}>
                  Lire l&apos;article complet <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>

          {/* Related Categories */}
          <div className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Autres catégories</h2>
            <div className={styles.relatedGrid}>
              {categories
                .filter((c) => c.id !== slug)
                .map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    className={`${styles.relatedCard} glass-card`}
                  >
                    <span className={`badge ${cat.badgeClass}`}>{cat.name}</span>
                    <p className={styles.relatedDesc}>{cat.description}</p>
                    <span className={styles.relatedLink}>
                      Voir les guides <ArrowRight size={12} />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
