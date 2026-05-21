import Link from 'next/link';
import { FileText, ChevronRight, FileCheck, Scale, AlertCircle } from 'lucide-react';
import styles from '../privacy/legal.module.css'; // Re-use styling to minimize CSS footprint

export default function Terms() {
  return (
    <div className={styles.main}>
      {/* Page Header */}
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>Accueil</Link>
            <ChevronRight size={12} className={styles.breadIcon} />
            <span className={styles.breadcrumbActive}>Conditions d'Utilisation</span>
          </div>
          <h1 className={styles.title}>
            Conditions <span className="text-gradient">d'Utilisation</span>
          </h1>
          <p className={styles.subtitle}>
            Dernière mise à jour : 20 mai 2026. Veuillez lire attentivement les présentes conditions régissant l'utilisation de notre site.
          </p>
        </div>
      </section>

      {/* Legal Text content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          
          <div className={styles.legalWrapper}>
            
            <div className={styles.introBlock}>
              <FileText size={36} className={styles.shieldIcon} />
              <p className={styles.leadText}>
                Les présentes Conditions d'Utilisation régissent votre accès et votre utilisation d'**Afrique Tech Hub** ("le Site"). En accédant ou en utilisant le Site, vous acceptez d'être lié par ces conditions et par notre Politique de Confidentialité.
              </p>
            </div>

            <div className={styles.legalBody}>
              
              <h2>1. Acceptation des conditions</h2>
              <p>
                L'accès et l'utilisation d'Afrique Tech Hub sont soumis aux présentes Conditions d'Utilisation. Si vous n'acceptez pas l'une de ces conditions, veuillez cesser immédiatement d'utiliser le Site.
              </p>
              <p>
                Nous nous réservons le droit de modifier les présentes conditions à tout moment et sans préavis. Les modifications prennent effet dès leur publication sur cette page. Nous vous encourageons à consulter régulièrement cette page pour vous tenir informé des mises à jour.
              </p>

              <h2>2. Propriété intellectuelle et droits d'auteur</h2>
              <p>
                L'ensemble du contenu publié sur Afrique Tech Hub, y compris, mais sans s'y limiter, les articles rédigés, les guides, les codes sources, les images, les logos, l'identité visuelle et les éléments de design, est la propriété exclusive d'Afrique Tech Hub et est protégé par les lois internationales sur la propriété intellectuelle.
              </p>
              <p>
                <strong>Règles de partage :</strong>
              </p>
              <ul>
                <li>Vous n'êtes pas autorisé à copier, reproduire ou republier intégralement nos articles sur d'autres sites web, blogs ou supports imprimés sans notre consentement écrit préalable.</li>
                <li>Le partage partiel (citations) est autorisé sous réserve de respecter strictement deux critères : le texte cité ne doit pas dépasser 200 mots, et il doit être accompagné d'un lien hypertexte actif, cliquable et direct vers l'article d'origine sur notre site.</li>
              </ul>

              <h2>3. Utilisation autorisée et règles de conduite</h2>
              <p>
                En naviguant sur notre site, vous vous engagez à adopter un comportement respectueux et conforme aux lois en vigueur. Il vous est formellement interdit de :
              </p>
              <ul>
                <li>Utiliser le Site d'une manière qui pourrait l'endommager, le surcharger, le désactiver ou nuire à son fonctionnement.</li>
                <li>Tenter d'accéder sans autorisation à nos serveurs ou à nos bases de données.</li>
                <li>Utiliser des robots d'aspiration (scrapers) ou des outils automatisés pour copier nos contenus de manière massive.</li>
                <li>Publier des commentaires abusifs, spams, diffamatoires ou publicitaires sur les espaces de discussion ou de contact du Site.</li>
              </ul>

              <h2>4. Clause de non-responsabilité (Disclaimer)</h2>
              <p>
                Les informations, guides et opportunités fournis sur Afrique Tech Hub le sont à titre purement indicatif et informatif.
              </p>
              <p>
                Bien que nous fassions tous les efforts possibles pour garantir l'exactitude et la mise à jour des informations publiées (notamment concernant les bourses d'études et opportunités de revenus) :
              </p>
              <ul>
                <li>Nous ne garantissons pas que les informations sont exemptes d'erreurs ou d'omissions.</li>
                <li>Nous ne garantissons aucunement l'obtention d'une bourse ou d'un revenu en ligne en suivant nos guides. Les résultats dépendent entièrement du travail personnel, du dossier de candidature et du profil de l'utilisateur.</li>
                <li>Nous déclinons toute responsabilité en cas de pertes financières, de décisions d'orientation ou de tout préjudice résultant de l'utilisation des informations présentes sur le Site.</li>
              </ul>

              <h2>5. Liens vers des sites tiers</h2>
              <p>
                Notre site web peut contenir des liens vers des sites tiers (par exemple, les sites officiels des universités pour postuler aux bourses ou les plateformes de freelancing). 
              </p>
              <p>
                Afrique Tech Hub n'a aucun contrôle sur ces sites tiers et n'est pas responsable de leur contenu, de leur sécurité, de leurs pratiques en matière de confidentialité ou de leur disponibilité. L'accès à ces sites se fait à vos propres risques.
              </p>

              <h2>6. Droit applicable</h2>
              <p>
                Tout litige relatif à l'utilisation d'Afrique Tech Hub sera régi par les lois en vigueur dans le pays hébergeant notre siège social (Sénégal) et sera soumis à la compétence exclusive des tribunaux compétents de Dakar.
              </p>

              <h2>7. Contact</h2>
              <p>
                Pour toute question ou demande d'information concernant les présentes Conditions d'Utilisation, vous pouvez nous écrire directement sur notre page de <Link href="/contact">Contact</Link>.
              </p>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
