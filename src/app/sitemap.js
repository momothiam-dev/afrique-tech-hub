import { articles, categories } from '../data/articles';
import { SITE_URL, getArticleLastModified } from '../data/seo';

export const dynamic = 'force-static';

/**
 * Native Next.js sitemap (replaces next-sitemap).
 * Each URL gets its own lastModified, so Google can prioritise recently
 * updated guides instead of seeing the same build timestamp everywhere.
 */
export default function sitemap() {
  const articleEntries = articles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: getArticleLastModified(article),
    changeFrequency: 'monthly',
    priority: article.popular ? 0.8 : 0.7,
  }));

  const categoryEntries = categories.map((category) => ({
    url: `${SITE_URL}/category/${category.id}`,
    lastModified: articles
      .filter((article) => article.category === category.id)
      .reduce(
        (latest, article) => {
          const date = getArticleLastModified(article);
          return date > latest ? date : latest;
        },
        '2026-01-01'
      ),
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  const latestUpdate = articles.reduce(
    (latest, article) => {
      const date = getArticleLastModified(article);
      return date > latest ? date : latest;
    },
    '2026-01-01'
  );

  return [
    {
      url: SITE_URL,
      lastModified: latestUpdate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: latestUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...categoryEntries,
    ...articleEntries,
    {
      url: `${SITE_URL}/about`,
      lastModified: '2026-10-29',
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: '2026-10-29',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: '2026-10-29',
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: '2026-10-29',
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
