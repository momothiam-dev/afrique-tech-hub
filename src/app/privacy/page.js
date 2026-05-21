import Link from 'next/link';
import { Shield, ChevronRight, Lock, Eye, FileCheck } from 'lucide-react';
import styles from './legal.module.css';

export default function Privacy() {
  return (
    <div className={styles.main}>
      {/* Page Header */}
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>Accueil</Link>
            <ChevronRight size={12} className={styles.breadIcon} />
            <span className={styles.breadcrumbActive}>Politique de Confidentialité</span>
          </div>
          <h1 className={styles.title}>
            Politique de <span className="text-gradient">Confidentialité</span>
          </h1>
          <p className={styles.subtitle}>
            Dernière mise à jour : 20 mai 2026. Chez Afrique Tech Hub, la protection de votre vie privée est une priorité absolue.
          </p>
        </div>
      </section>

      {/* Legal Text content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          
          <div className={styles.legalWrapper}>
            
            <div className={styles.introBlock}>
              <Shield size={36} className={styles.shieldIcon} />
              <p className={styles.leadText}>
                Cette politique de confidentialité décrit comment **Afrique Tech Hub** ("nous", "notre" ou "le site") collecte, utilise et protège les informations de ses utilisateurs (les "utilisateurs" ou "vous") lorsque vous naviguez sur notre site internet.
              </p>
            </div>

            <div className={styles.legalBody}>
              
              <h2>1. Collecte des données personnelles</h2>
              <p>
                Nous ne collectons aucune donnée personnelle identifiable (comme votre nom ou votre adresse e-mail) à moins que vous ne choisissiez volontairement de nous les fournir (par exemple en vous inscrivant à notre newsletter ou en remplissant notre formulaire de contact).
              </p>
              <p>
                Les informations que vous fournissez volontairement sont les suivantes :
              </p>
              <ul>
                <li><strong>Newsletter :</strong> Votre adresse e-mail pour recevoir nos bulletins d'information.</li>
                <li><strong>Formulaire de contact :</strong> Votre nom, adresse e-mail et le contenu de votre message afin de nous permettre de traiter votre demande.</li>
              </ul>

              <h2>2. Fichiers journaux (Log Files)</h2>
              <p>
                Comme la plupart des sites web standard, Afrique Tech Hub utilise des fichiers journaux. Ces fichiers enregistrent les visites sur le site, ce qui est une procédure standard pour les entreprises d'hébergement et fait partie de l'analyse des services d'hébergement. 
              </p>
              <p>
                Les informations contenues dans les fichiers journaux comprennent :
              </p>
              <ul>
                <li>Les adresses de protocole Internet (IP)</li>
                <li>Le type de navigateur internet</li>
                <li>Le fournisseur d'accès à Internet (FAI)</li>
                <li>La date et l'heure de la visite</li>
                <li>Les pages de référence et de sortie</li>
                <li>Le nombre de clics sur le site</li>
              </ul>
              <p>
                Ces informations ne sont pas liées à des informations personnellement identifiables. Elles sont utilisées uniquement pour analyser les tendances, administrer le site, suivre les mouvements des utilisateurs et recueillir des informations démographiques globales.
              </p>

              <h2>3. Cookies et balises web</h2>
              <p>
                Afrique Tech Hub utilise des "cookies" pour stocker des informations sur les préférences des visiteurs, pour enregistrer des informations spécifiques à l'utilisateur sur les pages auxquelles le visiteur accède ou qu'il visite, et pour personnaliser ou adapter le contenu de notre page web en fonction du type de navigateur des visiteurs ou d'autres informations que le visiteur envoie via son navigateur.
              </p>

              <h2>4. Cookie DoubleClick DART de Google (AdSense)</h2>
              <p>
                Google, en tant que fournisseur tiers, utilise des cookies pour diffuser des annonces sur notre site. 
              </p>
              <p>
                L'utilisation par Google du cookie DART lui permet de diffuser des annonces aux utilisateurs de notre site en fonction de leur visite sur Afrique Tech Hub et sur d'autres sites internet.
              </p>
              <p>
                Les utilisateurs peuvent choisir de désactiver l'utilisation du cookie DART en visitant la politique de confidentialité du réseau d'annonces Google et de contenu à l'adresse suivante : <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>.
              </p>

              <h2>5. Nos partenaires publicitaires</h2>
              <p>
                Certains de nos partenaires publicitaires peuvent utiliser des cookies et des balises web sur notre site. Notre principal partenaire publicitaire est :
              </p>
              <ul>
                <li><strong>Google AdSense :</strong> Les serveurs publicitaires tiers utilisent des technologies pour envoyer les publicités et les liens directement à votre navigateur. Ils reçoivent automatiquement votre adresse IP lorsque cela se produit. Ces technologies sont utilisées pour mesurer l'efficacité de leurs campagnes publicitaires et/ou pour personnaliser le contenu publicitaire que vous voyez.</li>
              </ul>
              <p>
                Veuillez noter qu'Afrique Tech Hub n'a aucun accès ni contrôle sur ces cookies utilisés par des annonceurs tiers. Vous devriez consulter les politiques de confidentialité respectives de ces serveurs publicitaires tiers pour obtenir des informations plus détaillées sur leurs pratiques.
              </p>

              <h2>6. Droits de protection des données (RGPD / CCPA)</h2>
              <p>
                Conformément aux réglementations internationales en matière de protection des données (notamment le Règlement Général sur la Protection des Données - RGPD), vous disposez des droits suivants concernant vos données :
              </p>
              <ul>
                <li><strong>Droit d'accès :</strong> Vous avez le droit de demander une copie des données personnelles que nous détenons à votre sujet.</li>
                <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de toute information inexacte.</li>
                <li><strong>Droit d'effacement ("droit à l'oubli") :</strong> Vous pouvez demander la suppression complète de vos données (par exemple, vous désabonner de notre newsletter).</li>
              </ul>
              <p>
                Pour exercer l'un de ces droits, veuillez nous contacter directement via notre page <Link href="/contact">Contact</Link>.
              </p>

              <h2>7. Consentement</h2>
              <p>
                En utilisant notre site web, vous consentez par la présente à notre politique de confidentialité et acceptez ses conditions.
              </p>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
