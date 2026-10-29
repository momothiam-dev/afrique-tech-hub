import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  BookOpen,
  User,
  RefreshCw,
  HelpCircle,
  Lightbulb,
} from 'lucide-react';
import { articles, categories } from '../../../data/articles';
import { articleVisuals } from '../../../data/articleVisuals';
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  authorProfiles,
  getArticleSeo,
} from '../../../data/seo';
import AdSenseAd from '../../../components/AdSenseAd';
import ShareButtons from './ShareButtons';
import ReadingProgress from '../../../components/ReadingProgress';
import styles from './article.module.css';

// Dynamic SEO metadata generator
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    return {
      title: "Article non trouvé",
      robots: { index: false, follow: false },
    };
  }

  const seo = getArticleSeo(article);
  const category = categories.find((cat) => cat.id === article.category);

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: article.author }],
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "article",
      publishedTime: article.date,
      modifiedTime: seo.updated || article.date,
      authors: [article.author],
      section: category ? category.name : "Tech",
      tags: seo.keywords,
      url: `${SITE_URL}/blog/${article.slug}`,
      siteName: SITE_NAME,
      locale: "fr_FR",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

// Critical for Next.js static export
export function generateStaticParams() {
  return articles.map((art) => ({
    slug: art.slug,
  }));
}

// Custom simple parser to transform markdown-like strings to HTML tags securely
function parseContentToHtml(content, slug) {
  const lines = content.split('\n');
  const renderedElements = [];
  let currentList = [];
  let inList = false;
  const visuals = articleVisuals[slug];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      if (inList) {
        renderedElements.push(
          <ul key={`ul-${i}`} className={styles.articleList}>
            {currentList}
          </ul>
        );
        currentList = [];
        inList = false;
      }
      continue;
    }

    // H2 Headings
    if (line.startsWith('## ')) {
      if (inList) {
        renderedElements.push(<ul key={`ul-${i}`} className={styles.articleList}>{currentList}</ul>);
        currentList = [];
        inList = false;
      }
      const text = line.replace('## ', '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      renderedElements.push(<h2 key={`h2-${i}`} id={id} className={styles.articleH2}>{text}</h2>);

      // Inject visual blocks after specific headings
      if (visuals?.infographics) {
        visuals.infographics.forEach((block, vi) => {
          if (block.position === 'after-heading' && block.headingId === id) {
            renderedElements.push(
              <div key={`vis-h2-${i}-${vi}`} className={styles.visualBlock}>
                {block.component}
              </div>
            );
          }
        });
      }
    }
    // H3 Headings
    else if (line.startsWith('### ')) {
      if (inList) {
        renderedElements.push(<ul key={`ul-${i}`} className={styles.articleList}>{currentList}</ul>);
        currentList = [];
        inList = false;
      }
      const text = line.replace('### ', '');
      renderedElements.push(<h3 key={`h3-${i}`} className={styles.articleH3}>{text}</h3>);
    }
    // Unordered lists
    else if (line.startsWith('- ')) {
      inList = true;
      const text = line.replace('- ', '');
      const parsedText = parseInlineStyling(text);
      currentList.push(<li key={`li-${i}`}>{parsedText}</li>);
    }
    // Blockquotes/Callouts
    else if (line.startsWith('> ')) {
      if (inList) {
        renderedElements.push(<ul key={`ul-${i}`} className={styles.articleList}>{currentList}</ul>);
        currentList = [];
        inList = false;
      }
      const text = line.replace('> ', '').replace(/^"|"$/g, '');
      renderedElements.push(<blockquote key={`quote-${i}`} className={styles.articleQuote}>{text}</blockquote>);
    }
    // Normal paragraph
    else {
      if (inList) {
        renderedElements.push(<ul key={`ul-${i}`} className={styles.articleList}>{currentList}</ul>);
        currentList = [];
        inList = false;
      }
      const parsedText = parseInlineStyling(line);
      renderedElements.push(<p key={`p-${i}`} className={styles.articleP}>{parsedText}</p>);
    }
  }

  // Push final list if hanging
  if (inList && currentList.length > 0) {
    renderedElements.push(<ul key="ul-final" className={styles.articleList}>{currentList}</ul>);
  }

  // Inject after-content visual blocks
  if (visuals?.infographics) {
    visuals.infographics.forEach((block, vi) => {
      if (block.position === 'after-content') {
        renderedElements.push(
          <div key={`vis-after-${vi}`} className={styles.visualBlock}>
            {block.component}
          </div>
        );
      }
    });
  }

  return renderedElements;
}

// Simple inline styling helper for Bold (**text**) or Code (`code`)
function parseInlineStyling(text) {
  const tokens = [];
  let id = 0;
  const regex = /(\*\*.*?\*\*|`.*?`)/g;
  const matches = [...text.matchAll(regex)];

  if (matches.length === 0) {
    return text;
  }

  let lastIndex = 0;
  matches.forEach((match) => {
    const index = match.index;
    const matchText = match[0];

    if (index > lastIndex) {
      tokens.push(text.substring(lastIndex, index));
    }

    if (matchText.startsWith('**') && matchText.endsWith('**')) {
      tokens.push(<strong key={id++}>{matchText.slice(2, -2)}</strong>);
    } else if (matchText.startsWith('`') && matchText.endsWith('`')) {
      tokens.push(<code key={id++} className={styles.inlineCode}>{matchText.slice(1, -1)}</code>);
    }

    lastIndex = index + matchText.length;
  });

  if (lastIndex < text.length) {
    tokens.push(text.substring(lastIndex));
  }

  return tokens;
}

export default async function Article({ params }) {
  const { slug } = await params;

  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    notFound();
  }

  const seo = getArticleSeo(article);
  const category = categories.find((cat) => cat.id === article.category);
  const author = authorProfiles[article.author] || {
    role: "Contributeur",
    bio: "Membre de l'équipe éditoriale d'Afrique Tech Hub.",
    expertise: [],
    initials: "ATH",
    anchor: "equipe",
  };

  // Extract H2 headings for the table of contents and the quick summary
  const headings = article.content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const text = line.replace('## ', '').trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return { text, id };
    });

  const summaryHeadings = headings
    .filter((heading) => !/^conclusion/i.test(heading.text))
    .slice(0, 4);

  // Same-category guides first, then cross-category guides for a wider internal mesh.
  const sameCategory = articles.filter(
    (art) => art.category === article.category && art.id !== article.id
  );
  const crossCategory = articles
    .filter((art) => art.category !== article.category)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const relatedArticles = [...sameCategory, ...crossCategory].slice(0, 4);

  const popularArticles = articles
    .filter((art) => art.popular && art.id !== article.id)
    .slice(0, 3);

  const currentIndex = articles.findIndex((art) => art.id === article.id);
  const previousArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex >= 0 && currentIndex < articles.length - 1
      ? articles[currentIndex + 1]
      : null;

  const getBadgeClass = (catId) => {
    const found = categories.find((c) => c.id === catId);
    return found ? found.badgeClass : 'badge-dev';
  };

  const getCategoryName = (catId) => {
    const found = categories.find((c) => c.id === catId);
    return found ? found.name : 'Tech';
  };

  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedUpdated = seo.updated
    ? new Date(seo.updated).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  const wordCount = article.content.split(/\s+/).filter(Boolean).length;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/blog/${article.slug}#article`,
    headline: article.title,
    description: seo.description,
    image: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
    datePublished: article.date,
    dateModified: seo.updated || article.date,
    author: {
      '@type': 'Person',
      name: article.author,
      description: author.bio,
      url: `${SITE_URL}/about#${author.anchor}`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${article.slug}`,
    },
    articleSection: category ? category.name : 'Tech',
    keywords: seo.keywords.join(', '),
    wordCount,
    inLanguage: 'fr',
    isAccessibleForFree: true,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: `${SITE_URL}/blog`,
      },
      ...(category
        ? [
            {
              '@type': 'ListItem',
              position: 3,
              name: category.name,
              item: `${SITE_URL}/category/${category.id}`,
            },
          ]
        : []),
      {
        '@type': 'ListItem',
        position: category ? 4 : 3,
        name: article.title,
        item: `${SITE_URL}/blog/${article.slug}`,
      },
    ],
  };

  const faqJsonLd =
    seo.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: seo.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.a,
            },
          })),
        }
      : null;

  return (
    <div className={styles.main}>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Article Header Container */}
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <nav className={styles.breadcrumbs} aria-label="Fil d'Ariane">
            <Link href="/" className={styles.breadcrumbLink}>Accueil</Link>
            <ChevronRight size={12} className={styles.breadIcon} />
            <Link href="/blog" className={styles.breadcrumbLink}>Guides</Link>
            {category && (
              <>
                <ChevronRight size={12} className={styles.breadIcon} />
                <Link href={`/category/${category.id}`} className={styles.breadcrumbLink}>
                  {category.name}
                </Link>
              </>
            )}
            <ChevronRight size={12} className={styles.breadIcon} />
            <span className={styles.breadcrumbActive}>{article.title}</span>
          </nav>

          <span className={`badge ${getBadgeClass(article.category)} ${styles.articleBadge}`}>
            {getCategoryName(article.category)}
          </span>

          <h1 className={styles.title}>{article.title}</h1>

          <div className={styles.metaRow}>
            <span className={styles.metaItem}>
              <User size={14} /> Par{' '}
              <Link href={`/about#${author.anchor}`} className={styles.metaLink}>
                {article.author}
              </Link>
            </span>
            <span className={styles.metaItem}>
              <Calendar size={14} /> Publié le {formattedDate}
            </span>
            {formattedUpdated && (
              <span className={styles.metaItem}>
                <RefreshCw size={14} /> Mis à jour le {formattedUpdated}
              </span>
            )}
            <span className={styles.metaItem}>
              <Clock size={14} /> {article.readTime} de lecture
            </span>
          </div>
        </div>
      </section>

      {/* Main Grid: Article content & TOC sidebar */}
      <section className={styles.bodySection}>
        <div className={styles.bodyContainer}>
          {/* Left Column: Post Content */}
          <div className={styles.contentCol}>
            {/* Top simulated ad unit (horizontal) */}
            <AdSenseAd slot="article-top-banner" format="horizontal" />

            {/* Simulated Introduction / Lead paragraph */}
            <p className={styles.leadParagraph}>{article.description}</p>

            {/* Quick summary derived from the article's own sections */}
            {summaryHeadings.length > 0 && (
              <div className={`${styles.takeaways} glass-card`}>
                <h2 className={styles.takeawaysTitle}>
                  <Lightbulb size={18} /> Au programme de ce guide
                </h2>
                <ul className={styles.takeawaysList}>
                  {summaryHeadings.map((heading) => (
                    <li key={heading.id}>
                      <a href={`#${heading.id}`}>{heading.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Parsed Rich Content */}
            <div className={styles.richContent}>
              {parseContentToHtml(article.content, slug)}
            </div>

            {/* FAQ section with FAQPage structured data */}
            {seo.faqs.length > 0 && (
              <section className={styles.faqSection} id="faq" aria-labelledby="faq-title">
                <h2 className={styles.faqTitle} id="faq-title">
                  <HelpCircle size={22} className={styles.faqTitleIcon} /> Questions fréquentes
                </h2>
                <div className={styles.faqList}>
                  {seo.faqs.map((faq, index) => (
                    <details key={index} className={styles.faqItem}>
                      <summary className={styles.faqQuestion}>{faq.q}</summary>
                      <p className={styles.faqAnswer}>{faq.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom simulated ad unit (horizontal) */}
            <AdSenseAd slot="article-bottom-banner" format="horizontal" />

            {/* Share / Social Buttons */}
            <div className={`${styles.shareBlock} glass-card`}>
              <h4 className={styles.shareTitle}>Vous avez aimé ce guide ?</h4>
              <p className={styles.shareText}>
                Partagez-le avec vos amis et proches pour qu&apos;ils découvrent eux aussi ces opportunités digitales !
              </p>
              <ShareButtons title={article.title} />
            </div>

            {/* Author box for E-E-A-T */}
            <div className={`${styles.authorBox} glass-card`}>
              <div className={styles.authorAvatar} aria-hidden="true">
                {author.initials}
              </div>
              <div className={styles.authorContent}>
                <p className={styles.authorEyebrow}>Rédigé et vérifié par</p>
                <p className={styles.authorName}>
                  <Link href={`/about#${author.anchor}`}>{article.author}</Link>
                </p>
                <p className={styles.authorRole}>{author.role}</p>
                <p className={styles.authorBio}>{author.bio}</p>
                <Link href={`/about#${author.anchor}`} className={styles.authorLink}>
                  Voir l&apos;équipe éditoriale <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Table of Contents & Ads Sidebar */}
          <aside className={styles.sidebarCol}>
            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className={`${styles.tocWidget} glass-card`}>
                <h3 className={styles.widgetTitle}>Table des matières</h3>
                <nav className={styles.tocNav} aria-label="Table des matières">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={styles.tocLink}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Simulated Sidebar rectangle ad unit */}
            <AdSenseAd slot="article-sidebar" format="rectangle" />

            {/* Popular guides for internal linking */}
            {popularArticles.length > 0 && (
              <div className={`${styles.widget} glass-card`}>
                <h3 className={styles.widgetTitle}>Guides les plus lus</h3>
                <div className={styles.sidebarLinks}>
                  {popularArticles.map((popular) => (
                    <Link
                      key={popular.id}
                      href={`/blog/${popular.slug}`}
                      className={styles.sidebarLink}
                    >
                      <span className={`badge ${getBadgeClass(popular.category)}`}>
                        {getCategoryName(popular.category)}
                      </span>
                      <span>{popular.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Quick tips Widget */}
            <div className={`${styles.widget} glass-card`}>
              <h3 className={styles.widgetTitle}>💡 Astuce de l&apos;équipe</h3>
              <p className={styles.widgetText}>
                Tous nos guides sont 100% gratuits. Pour ne rater aucune mise à jour, pensez à ajouter ce site à vos favoris en appuyant sur <kbd className={styles.kbd}>Ctrl + D</kbd> ou <kbd className={styles.kbd}>Cmd + D</kbd>.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedContainer}>
            <h2 className={styles.relatedTitle}>
              <BookOpen size={22} className={styles.relatedIcon} />
              À lire ensuite
            </h2>
            <div className={styles.relatedGrid}>
              {relatedArticles.map((art) => (
                <article key={art.id} className={`${styles.relatedCard} glass-card`}>
                  <div className={styles.relatedCardHeader}>
                    <span className={`badge ${getBadgeClass(art.category)}`}>
                      {getCategoryName(art.category)}
                    </span>
                    <span className={styles.relatedCardReadTime}>
                      <Clock size={12} /> {art.readTime}
                    </span>
                  </div>
                  <h3 className={styles.relatedCardTitle}>
                    <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                  </h3>
                  <Link href={`/blog/${art.slug}`} className={styles.relatedCardLink}>
                    Lire l&apos;article <ArrowLeft size={14} className={styles.arrowRotate} />
                  </Link>
                </article>
              ))}
            </div>

            {(previousArticle || nextArticle) && (
              <nav className={styles.articleNav} aria-label="Navigation entre les guides">
                {previousArticle ? (
                  <Link href={`/blog/${previousArticle.slug}`} className={styles.articleNavLink}>
                    <span className={styles.articleNavLabel}>
                      <ArrowLeft size={13} /> Guide précédent
                    </span>
                    <span className={styles.articleNavTitle}>{previousArticle.title}</span>
                  </Link>
                ) : (
                  <span />
                )}
                {nextArticle && (
                  <Link
                    href={`/blog/${nextArticle.slug}`}
                    className={`${styles.articleNavLink} ${styles.articleNavNext}`}
                  >
                    <span className={styles.articleNavLabel}>
                      Guide suivant <ArrowRight size={13} />
                    </span>
                    <span className={styles.articleNavTitle}>{nextArticle.title}</span>
                  </Link>
                )}
              </nav>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
