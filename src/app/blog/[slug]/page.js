import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, ChevronRight, BookOpen, User } from 'lucide-react';
import { articles, categories } from '../../../data/articles';
import AdSenseAd from '../../../components/AdSenseAd';
import ShareButtons from './ShareButtons'; // Client component for sharing action
import styles from './article.module.css';

// Dynamic SEO metadata generator
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      url: `https://afrique-tech-hub.vercel.app/blog/${article.slug}`,
      images: [
        {
          url: "/dark_tech_bg.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
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
function parseContentToHtml(content) {
  const lines = content.split('\n');
  const renderedElements = [];
  let currentList = [];
  let inList = false;

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

  return renderedElements;
}

// Simple inline styling helper for Bold (**text**) or Code (`code`)
function parseInlineStyling(text) {
  const parts = [];
  let currentStr = text;
  
  const boldRegex = /\*\*(.*?)\*\*/g;
  const codeRegex = /`(.*?)`/g;
  
  let match;
  let lastIndex = 0;
  
  const tokens = [];
  let id = 0;
  const regex = /(\*\*.*?\*\*|`.*?`)/g;
  const matches = [...text.matchAll(regex)];
  
  if (matches.length === 0) {
    return text;
  }
  
  matches.forEach((match) => {
    const index = match.index;
    const matchText = match[0];
    
    // Add text before match
    if (index > lastIndex) {
      tokens.push(text.substring(lastIndex, index));
    }
    
    // Add formatted match
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
  
  // Find current article
  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    notFound();
  }

  // Extract H2 headings for Table of Contents
  const headings = article.content
    .split('\n')
    .filter(line => line.startsWith('## '))
    .map(line => {
      const text = line.replace('## ', '').trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return { text, id };
    });

  // Fetch 3 related articles
  const relatedArticles = articles
    .filter((art) => art.category === article.category && art.id !== article.id)
    .slice(0, 3);

  const getBadgeClass = (catId) => {
    const found = categories.find(c => c.id === catId);
    return found ? found.badgeClass : 'badge-dev';
  };

  const getCategoryName = (catId) => {
    const found = categories.find(c => c.id === catId);
    return found ? found.name : 'Tech';
  };

  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.date,
    dateModified: article.date,
    image: [
      `https://afrique-tech-hub.vercel.app/dark_tech_bg.png`
    ],
  };

  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Article Header Container */}
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>Accueil</Link>
            <ChevronRight size={12} className={styles.breadIcon} />
            <Link href="/blog" className={styles.breadcrumbLink}>Guides</Link>
            <ChevronRight size={12} className={styles.breadIcon} />
            <span className={styles.breadcrumbActive}>{article.title}</span>
          </div>

          <span className={`badge ${getBadgeClass(article.category)} ${styles.articleBadge}`}>
            {getCategoryName(article.category)}
          </span>

          <h1 className={styles.title}>{article.title}</h1>

          <div className={styles.metaRow}>
            <span className={styles.metaItem}>
              <User size={14} /> Par {article.author}
            </span>
            <span className={styles.metaItem}>
              <Calendar size={14} /> {formattedDate}
            </span>
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

            {/* Parsed Rich Content */}
            <div className={styles.richContent}>
              {parseContentToHtml(article.content)}
            </div>

            {/* Bottom simulated ad unit (horizontal) */}
            <AdSenseAd slot="article-bottom-banner" format="horizontal" />

            {/* Share / Social Buttons */}
            <div className={`${styles.shareBlock} glass-card`}>
              <h4 className={styles.shareTitle}>Vous avez aimé ce guide ?</h4>
              <p className={styles.shareText}>Partagez-le avec vos amis et proches pour qu'ils découvrent eux aussi ces opportunités digitales !</p>
              <ShareButtons title={article.title} />
            </div>

          </div>

          {/* Right Column: Table of Contents & Ads Sidebar */}
          <aside className={styles.sidebarCol}>
            
            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className={`${styles.tocWidget} glass-card`}>
                <h3 className={styles.widgetTitle}>Table des matières</h3>
                <nav className={styles.tocNav}>
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

            {/* Quick tips Widget */}
            <div className={`${styles.widget} glass-card`}>
              <h3 className={styles.widgetTitle}>💡 Astuce de l'équipe</h3>
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
              Guides similaires qui pourraient vous intéresser
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
                    Lire l'article <ArrowLeft size={14} className={styles.arrowRotate} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
