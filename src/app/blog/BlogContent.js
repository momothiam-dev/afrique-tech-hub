'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Clock, ArrowRight, X } from 'lucide-react';
import { categories } from '../../data/articles';
import AdSenseAd from '../../components/AdSenseAd';
import styles from './blog.module.css';

function readFiltersFromUrl() {
  if (typeof window === 'undefined') {
    return { category: 'all', search: '' };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    category: params.get('category') || 'all',
    search: params.get('search') || '',
  };
}

export default function BlogContent({ articles }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Read URL parameters after hydration so the full catalog stays in the
  // static HTML (no useSearchParams bailout, no empty page for crawlers).
  useEffect(() => {
    const applyUrlFilters = () => {
      const filters = readFiltersFromUrl();
      setActiveCategory(filters.category);
      setSearchQuery(filters.search);
    };

    applyUrlFilters();
    window.addEventListener('popstate', applyUrlFilters);
    return () => window.removeEventListener('popstate', applyUrlFilters);
  }, []);

  const pushFiltersToUrl = (category, search) => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (category && category !== 'all') {
      url.searchParams.set('category', category);
    } else {
      url.searchParams.delete('category');
    }
    if (search && search.trim()) {
      url.searchParams.set('search', search.trim());
    } else {
      url.searchParams.delete('search');
    }
    window.history.replaceState({}, '', url.toString());
  };

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === 'all' || article.category === activeCategory;
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.seoKeywords.some((keyword) =>
          keyword.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [articles, activeCategory, searchQuery]);

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    pushFiltersToUrl(categoryId, searchQuery);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    pushFiltersToUrl(activeCategory, searchQuery);
  };

  const handleClearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    pushFiltersToUrl('all', '');
  };

  const getBadgeClass = (catId) => {
    const found = categories.find((category) => category.id === catId);
    return found ? found.badgeClass : 'badge-dev';
  };

  const getCategoryName = (catId) => {
    const found = categories.find((category) => category.id === catId);
    return found ? found.name : 'Tech';
  };

  return (
    <>
      {/* Search & Filter Bar */}
      <section className={styles.controlsSection}>
        <div className={styles.controlsContainer}>
          <div className={styles.categoryPills}>
            <button
              type="button"
              onClick={() => handleCategorySelect('all')}
              aria-pressed={activeCategory === 'all'}
              className={`${styles.pill} ${activeCategory === 'all' ? styles.pillActive : ''}`}
            >
              Tous les articles
            </button>
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                aria-pressed={activeCategory === category.id}
                className={`${styles.pill} ${activeCategory === category.id ? styles.pillActive : ''}`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <form onSubmit={handleSearchSubmit} action="/blog" method="GET" className={styles.searchForm} role="search">
            <div className={styles.searchInputWrapper}>
              <Search size={18} className={styles.searchIcon} />
              <label htmlFor="blog-search" className={styles.srOnly}>
                Rechercher un article
              </label>
              <input
                id="blog-search"
                type="text"
                name="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Rechercher : bourse, Laravel, ChatGPT..."
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    pushFiltersToUrl(activeCategory, '');
                  }}
                  className={styles.searchClear}
                  aria-label="Effacer la recherche"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <button type="submit" className={`btn btn-primary ${styles.searchBtn}`}>
              Filtrer
            </button>
          </form>
        </div>
      </section>

      {/* Main Grid Catalog */}
      <section className={styles.catalogSection}>
        <div className={styles.catalogContainer}>
          <h2 className={styles.srOnly}>Catalogue des guides</h2>
          <p className={styles.resultCount} aria-live="polite">
            <strong>{filteredArticles.length}</strong>{' '}
            {filteredArticles.length > 1 ? 'guides disponibles' : 'guide disponible'}
            {activeCategory !== 'all' && ` dans ${getCategoryName(activeCategory)}`}
          </p>

          {filteredArticles.length > 0 ? (
            <>
              <div className={styles.resultsGrid}>
                {filteredArticles.map((article) => (
                  <article key={article.id} className={`${styles.articleCard} glass-card`}>
                    <div className={styles.cardHeader}>
                      <span className={`badge ${getBadgeClass(article.category)}`}>
                        {getCategoryName(article.category)}
                      </span>
                      <span className={styles.readTime}>
                        <Clock size={12} /> {article.readTime}
                      </span>
                    </div>
                    <h2 className={styles.cardTitle}>
                      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <p className={styles.cardDesc}>{article.description}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.author}>Par {article.author}</span>
                      <Link href={`/blog/${article.slug}`} className={styles.readLink}>
                        Lire la suite <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* AdSense Placement mid-catalog */}
              <AdSenseAd slot="blog-mid-list" format="horizontal" />
            </>
          ) : (
            <div className={`${styles.noResults} glass-card`}>
              <BookOpen size={48} className={styles.noResultsIcon} />
              <h2>Aucun article ne correspond à votre recherche</h2>
              <p>
                Essayez un autre mot-clé ou explorez une catégorie ci-dessous.
              </p>
              <button type="button" onClick={handleClearFilters} className="btn btn-primary">
                Réinitialiser les filtres
              </button>
            </div>
          )}

          {/* Crawlable category links: always present in the static HTML */}
          <div className={styles.categoryLinks}>
            <h2>Explorer par catégorie</h2>
            <div className={styles.categoryLinksGrid}>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className={styles.categoryLink}
                >
                  {category.name} <ArrowRight size={13} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
