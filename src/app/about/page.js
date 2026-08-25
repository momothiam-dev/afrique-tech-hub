import Link from 'next/link';
import { Award, Target, Users, BookOpen, GraduationCap, Globe } from 'lucide-react';
import styles from './about.module.css';

export const metadata = {
  title: "À Propos",
  description: "Découvrez la mission d'Afrique Tech Hub : informer et former gratuitement la jeunesse francophone africaine aux métiers du numérique et aux opportunités de bourses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "À Propos — Afrique Tech Hub",
    description: "Découvrez la mission d'Afrique Tech Hub : informer et former gratuitement la jeunesse francophone africaine aux métiers du numérique et aux opportunités de bourses.",
    url: "https://afrique-tech-hub.vercel.app/about",
  },
  twitter: {
    card: "summary",
    title: "À Propos — Afrique Tech Hub",
    description: "Découvrez la mission d'Afrique Tech Hub : informer et former gratuitement la jeunesse francophone africaine aux métiers du numérique.",
  },
};

export default function About() {
  return (
    <div className={styles.main}>
      {/* Page Header */}
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>
            À Propos d'<span className="text-gradient">Afrique Tech</span> Hub
          </h1>
          <p className={styles.subtitle}>
            Découvrez notre histoire, notre équipe et notre engagement à doter la jeunesse africaine des compétences clés de l'économie numérique.
          </p>
        </div>
      </section>

      {/* Main body content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          
          {/* Mission Grid */}
          <div className={styles.missionGrid}>
            <div className={styles.missionTextCol}>
              <h2 className={styles.sectionTitle}>
                <Target size={22} className={styles.titleIcon} /> Notre Mission
              </h2>
              <p className={styles.paragraph}>
                Fondé en 2026, **Afrique Tech Hub** est une initiative éducative et technologique indépendante ayant pour but de combler le fossé de l'information numérique dans l'espace francophone africain. 
              </p>
              <p className={styles.paragraph}>
                Nous croyons fermement que l'accès à une information de qualité, à des tutoriels gratuits et à des opportunités concrètes (freelancing, bourses d'études, télétravail) peut changer des vies et participer activement à la réduction du chômage des jeunes sur le continent.
              </p>
              <p className={styles.paragraph}>
                Notre ligne éditoriale est stricte : **pas de promesses de gains faciles ou d'arnaques**. Nous ne publions que des guides concrets, basés sur des compétences réelles et des plateformes vérifiées.
              </p>
            </div>

            <div className={styles.statsCardCol}>
              <div className={`${styles.statsCard} glass-card`}>
                <div className={styles.statItem}>
                  <BookOpen className={styles.statIcon} />
                  <span className={styles.statNumber}>20+</span>
                  <span className={styles.statLabel}>Guides complets de haut niveau</span>
                </div>
                <div className={styles.statItem}>
                  <GraduationCap className={styles.statIcon} />
                  <span className={styles.statNumber}>5</span>
                  <span className={styles.statLabel}>Catégories clés de compétences</span>
                </div>
                <div className={styles.statItem}>
                  <Globe className={styles.statIcon} />
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Dédié à l'Afrique Francophone</span>
                </div>
              </div>
            </div>
          </div>

          {/* Our Team / Authors */}
          <div className={styles.teamBlock} style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>
              <Users size={22} className={styles.titleIcon} /> Notre Équipe Éditoriale
            </h2>
            <p className={styles.paragraph} style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Nos articles sont rédigés par des experts de l'industrie technologique africaine, avec une expérience concrète sur le terrain.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {/* Arona Diallo */}
              <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', borderRadius: '16px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1rem' }}>AD</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Arona Diallo</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '500' }}>Expert E-commerce & Freelancing</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Ancien consultant en stratégie digitale, Arona s'est spécialisé dans l'accompagnement des indépendants africains sur le marché international (Upwork, Comeup) et le déploiement de solutions e-commerce.
                </p>
              </div>

              {/* Koffi Mensah */}
              <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', borderRadius: '16px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--secondary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1rem' }}>KM</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Koffi Mensah</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--secondary)', marginBottom: '1rem', fontWeight: '500' }}>Ingénieur Logiciel & IA</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Développeur Full-Stack passionné par le Machine Learning. Koffi partage ses connaissances techniques et son expérience du télétravail (remote) pour des startups européennes.
                </p>
              </div>

              {/* Mariama Sow */}
              <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', borderRadius: '16px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1rem' }}>MS</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Mariama Sow</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '1rem', fontWeight: '500' }}>Spécialiste Orientation & Bourses</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Diplômée en sciences de l'éducation au Canada grâce à une bourse d'excellence, Mariama décrypte les processus de candidature pour aider les jeunes talents africains à financer leurs études.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className={styles.valuesBlock}>
            <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>
              <Award size={22} className={styles.titleIcon} /> Nos Valeurs Fondamentales
            </h2>
            <div className={styles.valuesGrid}>
              <div className={`${styles.valueCard} glass-card`}>
                <BookOpen size={32} className={styles.valueIcon} />
                <h3 className={styles.valueTitle}>Gratuité & Accessibilité</h3>
                <p className={styles.valueDesc}>
                  Toutes nos ressources, codes sources, tutoriels et listes de bourses sont et resteront 100% gratuits et librement accessibles.
                </p>
              </div>

              <div className={`${styles.valueCard} glass-card`}>
                <Target size={32} className={styles.valueIcon} />
                <h3 className={styles.valueTitle}>Intégrité & Transparence</h3>
                <p className={styles.valueDesc}>
                  Nous n'écrivons que sur des méthodes réelles. Aucun faux plan d'enrichissement n'est toléré sur notre plateforme.
                </p>
              </div>

              <div className={`${styles.valueCard} glass-card`}>
                <Users size={32} className={styles.valueIcon} />
                <h3 className={styles.valueTitle}>Impact Social</h3>
                <p className={styles.valueDesc}>
                  Chaque article rédigé vise à apporter une valeur pratique immédiate à un étudiant ou un jeune diplômé en quête d'opportunités.
                </p>
              </div>
            </div>
          </div>

          {/* Join the movement banner */}
          <div className={`${styles.joinBanner} glass-card`}>
            <h3 className={styles.joinTitle}>Rejoignez le mouvement</h3>
            <p className={styles.joinText}>
              Vous êtes rédacteur passionné, développeur ou spécialiste de l'orientation académique ? Vous souhaitez collaborer avec nous et publier des articles utiles sur notre plateforme ? Contactez notre équipe dès aujourd'hui !
            </p>
            <Link href="/contact" className="btn btn-primary">
              Nous Contacter
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
