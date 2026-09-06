'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, BookOpen, Clock, ArrowRight, ChevronRight, X } from 'lucide-react';
import { articles, categories } from '../../data/articles';
import AdSenseAd from '../../components/AdSenseAd';
import styles from './blog.module.css';

export default function BlogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL search and category params
  const catParam = searchParams.get('category') || 'all';
  const queryParam = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(catParam);
  const [searchQuery, setSearchQuery] = useState(queryParam);

  // Keep state sync with URL params change
  useEffect(() => {
    setActiveCategory(catParam);
  }, [catParam]);

  useEffect(() => {
    setSearchQuery(queryParam);
  }, [queryParam]);

  // Filtered articles logic
  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesCategory = activeCategory === 'all' || art.category === activeCategory;
      const matchesSearch = 
        !searchQuery.trim() ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.seoKeywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Update category and sync URL
  const handleCategorySelect = (catId) => {
    setActiveCategory(catId);
    const params = new URLSearchParams(searchParams.toString());
    if (catId === 'all') {
      params.delete('category');
    } else {
      params.set('category', catId);
    }
    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  // Sync search input to URL on submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery.trim()) {
      params.set('search', searchQuery);
    } else {
      params.delete('search');
    }
    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  // Clear all filters
  const handleClearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    router.push('/blog');
  };

  const getBadgeClass = (catId) => {
    const found = categories.find(c => c.id === catId);
    return found ? found.badgeClass : 'badge-dev';
  };

  const getCategoryName = (catId) => {
    const found = categories.find(c => c.id === catId);
    return found ? found.name : 'Tech';
  };

  return (
    <div className={styles.main}>
      {/* Blog Hero Page Header */}
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>Accueil</Link>
            <ChevronRight size={12} className={styles.breadIcon} />
            <span className={styles.breadcrumbActive}>Guides & Articles</span>
          </div>
          <h1 className={styles.title}>
            Guides & <span className="text-gradient">Opportunités</span> Digitales
          </h1>
          <p className={styles.subtitle}>
            Explorez notre catalogue de connaissances. Apprenez de nouveaux outils, découvrez des bourses et commencez à monétiser votre savoir-faire.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className={styles.controlsSection}>
        <div className={styles.controlsContainer}>
          {/* Category Pills */}
          <div className={styles.categoryPills}>
            <button
              onClick={() => handleCategorySelect('all')}
              className={`${styles.pill} ${activeCategory === 'all' ? styles.pillActive : ''}`}
            >
              Tous les articles
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`${styles.pill} ${activeCategory === cat.id ? styles.pillActive : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search input Form */}
          <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <div className={styles.searchInputWrapper}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher des articles..."
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); if (activeCategory === 'all') { router.push('/blog'); } else { router.push(`/blog?category=${activeCategory}`); } }}
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
          {filteredArticles.length > 0 ? (
            <>
              <div className={styles.resultsGrid}>
                {filteredArticles.map((art) => (
                  <article key={art.id} className={`${styles.articleCard} glass-card`}>
                    <div className={styles.cardHeader}>
                      <span className={`badge ${getBadgeClass(art.category)}`}>
                        {getCategoryName(art.category)}
                      </span>
                      <span className={styles.readTime}>
                        <Clock size={12} /> {art.readTime}
                      </span>
                    </div>
                    <h3 className={styles.cardTitle}>
                      <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                    </h3>
                    <p className={styles.cardDesc}>{art.description}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.author}>Par {art.author}</span>
                      <Link href={`/blog/${art.slug}`} className={styles.readLink}>
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
              <h3>Aucun article ne correspond à votre recherche</h3>
              <p>Essayez d'utiliser des termes différents ou explorez une autre catégorie de contenu.</p>
              <button onClick={handleClearFilters} className="btn btn-primary">
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
