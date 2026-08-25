'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles, TrendingUp, Search, Mail, Send, Award, Users, GraduationCap, Globe } from 'lucide-react';
import { articles, categories } from '../data/articles';
import { DevIllustration, AIIllustration, MoneyIllustration, ScholarshipIllustration, OppIllustration } from '../components/illustrations';
import AdSenseAd from '../components/AdSenseAd';
import styles from './page.module.css';

const categoryIllustrations = {
  dev: DevIllustration,
  ia: AIIllustration,
  money: MoneyIllustration,
  scholarship: ScholarshipIllustration,
  opp: OppIllustration,
};

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Get 3 popular articles
  const popularArticles = useMemo(() => {
    return articles.filter(art => art.popular).slice(0, 3);
  }, []);

  // Get 4 most recent articles
  const recentArticles = useMemo(() => {
    return [...articles]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
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
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <div className={styles.heroBadge}>
            <Sparkles size={12} className={styles.heroBadgeIcon} />
            <span>Niche Tech & Opportunités Afrique 2026</span>
          </div>
          <h1 className={styles.heroTitle}>
            Propulsez Votre Avenir dans le <span className="text-gradient">Numérique</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Découvrez des guides pratiques, des bourses d'études internationales, des tutoriels de développement web et les meilleures opportunités pour gagner de l'argent en ligne depuis l'Afrique.
          </p>
          <div className={styles.heroCta}>
            <Link href="/blog" className="btn btn-primary">
              Explorer les Articles <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="btn btn-secondary">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Main Grid: Content & Sidebar */}
      <section className={styles.contentSection}>
        <div className={styles.gridContainer}>
          
          {/* Main Left Content */}
          <div className={styles.leftCol}>
            
            {/* Categories Quick Filter */}
            <div className={styles.categoriesBlock}>
              <h2 className={styles.sectionTitle}>
                <Award size={20} className={styles.titleIcon} /> Catégories Majeures
              </h2>
              <div className={styles.categoriesGrid}>
                {categories.map((cat) => {
                  const CatIllustration = categoryIllustrations[cat.id];
                  return (
                    <Link 
                      key={cat.id} 
                      href={`/category/${cat.id}`}
                      className={`${styles.categoryCard} glass-card`}
                    >
                      {CatIllustration && (
                        <div className={styles.catIllustration}>
                          <CatIllustration size={80} />
                        </div>
                      )}
                      <span className={`badge ${cat.badgeClass} ${styles.catCardBadge}`}>
                        {cat.name}
                      </span>
                      <p className={styles.catCardDesc}>{cat.description}</p>
                      <span className={styles.catCardLink}>
                        Voir les guides <ArrowRight size={12} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Simulated Banner Ad */}
            <AdSenseAd slot="home-top-banner" format="horizontal" />

            {/* Recent Articles */}
            <div className={styles.recentBlock}>
              <div className={styles.blockHeader}>
                <h2 className={styles.sectionTitle}>
                  <BookOpen size={20} className={styles.titleIcon} /> Derniers Articles Publiés
                </h2>
                <Link href="/blog" className={styles.seeAllLink}>
                  Voir tout <ArrowRight size={14} />
                </Link>
              </div>
              
              <div className={styles.articlesGrid}>
                {recentArticles.map((art) => (
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
                        Lire l'article <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Editorial SEO Block for E-E-A-T and AdSense */}
            <div className={`${styles.editorialBlock} glass-card`} style={{ marginTop: '3rem', padding: '2.5rem', borderRadius: '16px' }}>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '1.5rem' }}>
                <Sparkles size={20} className={styles.titleIcon} /> L'Intelligence Numérique au Service de l'Afrique
              </h2>
              <div className={styles.richContent} style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>Afrique Tech Hub</strong> est né d'un constat simple en 2026 : le continent africain regorge de talents brillants, mais l'accès à une information structurée, fiable et exempte d'arnaques reste un défi majeur. Notre plateforme indépendante a pour mission de démystifier l'économie numérique pour la jeunesse francophone.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Que vous cherchiez à vous reconvertir en tant que développeur full-stack, à comprendre les rouages du Machine Learning, à lancer une agence digitale sans capital initial (No-Code), ou à décrocher une bourse d'excellence pour étudier au Canada, nos experts décortiquent pour vous les meilleures stratégies. 
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Nous croyons fermement au télétravail (remote work) comme vecteur de développement économique. Travailler depuis Dakar, Abidjan ou Douala pour des entreprises européennes n'est plus une utopie, c'est une réalité pour des milliers de professionnels de la tech que nous accompagnons à travers nos guides pratiques.
                </p>
                <p>
                  Explorez nos dossiers, formez-vous continuellement et saisissez les opportunités offertes par le web mondial. L'avenir technologique de l'Afrique s'écrit maintenant, et il s'écrit avec vous.
                </p>
              </div>
            </div>

            {/* All Articles Section */}
            <div style={{ marginTop: '3rem' }}>
              <div className={styles.blockHeader}>
                <h2 className={styles.sectionTitle}>
                  <BookOpen size={20} className={styles.titleIcon} /> Tous nos Guides
                </h2>
                <Link href="/blog" className={styles.seeAllLink}>
                  Voir tout <ArrowRight size={14} />
                </Link>
              </div>
              <div className={styles.articlesGrid}>
                {articles.slice(0, 8).map((art) => (
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
                        Lire l&apos;article <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Stats Banner */}
            <div className="glass-card" style={{ marginTop: '3rem', padding: '2.5rem', borderRadius: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div>
                <BookOpen size={28} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-bright)' }}>20+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Guides complets</div>
              </div>
              <div>
                <Users size={28} style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-bright)' }}>5</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Catégories</div>
              </div>
              <div>
                <GraduationCap size={28} style={{ color: 'var(--accent)', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-bright)' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Gratuit & Accessible</div>
              </div>
              <div>
                <Globe size={28} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-bright)' }}>Afrique</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Francophone ciblée</div>
              </div>
            </div>

          </div>

          {/* Sidebar Right */}
          <aside className={styles.sidebar}>
            
            {/* Search Box */}
            <div className={`${styles.widget} glass-card`}>
              <h3 className={styles.widgetTitle}>Rechercher un guide</h3>
              <form action="/blog" method="GET" className={styles.searchForm}>
                <div className={styles.searchInputWrapper}>
                  <Search size={18} className={styles.searchIcon} />
                  <input 
                    type="text" 
                    name="search"
                    placeholder="Ex: bourses, Laravel, argent..." 
                    className={styles.searchInput}
                  />
                </div>
                <button type="submit" className="btn btn-primary styles.searchBtn">
                  Rechercher
                </button>
              </form>
            </div>

            {/* Popular Articles Widget */}
            <div className={`${styles.widget} glass-card`}>
              <h3 className={styles.widgetTitle}>
                <TrendingUp size={18} className={styles.widgetTitleIcon} /> Articles Populaires
              </h3>
              <div className={styles.popularList}>
                {popularArticles.map((art, index) => (
                  <div key={art.id} className={styles.popularItem}>
                    <span className={styles.popularIndex}>0{index + 1}</span>
                    <div className={styles.popularText}>
                      <span className={`badge ${getBadgeClass(art.category)} ${styles.popularBadge}`}>
                        {getCategoryName(art.category)}
                      </span>
                      <h4 className={styles.popularItemTitle}>
                        <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Rectangle Ad */}
            <AdSenseAd slot="sidebar-rect" format="rectangle" />

            {/* Newsletter Widget */}
            <div className={`${styles.widget} ${styles.newsletterWidget} glass-card`}>
              <h3 className={styles.widgetTitle}>
                <Mail size={18} className={styles.widgetTitleIcon} /> Opportunités Privées
              </h3>
              <p className={styles.newsletterDesc}>
                Inscrivez-vous gratuitement pour recevoir par email les meilleures bourses d'études et offres de travail à distance avant tout le monde.
              </p>
              {isSubscribed ? (
                <div className={styles.subscribedState}>
                  <Sparkles size={24} className={styles.successIcon} />
                  <p className={styles.successTitle}>Inscription réussie !</p>
                  <p className={styles.successText}>Merci ! Vous recevrez nos meilleures alertes dès la semaine prochaine.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                  <input 
                    type="email" 
                    required
                    placeholder="Votre adresse email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.newsletterInput}
                  />
                  <button type="submit" className="btn btn-primary styles.newsletterBtn">
                    Rejoindre le Club <Send size={14} />
                  </button>
                </form>
              )}
            </div>

          </aside>

        </div>
      </section>
    </div>
  );
}
