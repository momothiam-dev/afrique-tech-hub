import CodeBlock from '../components/CodeBlock';
import StepGuide from '../components/StepGuide';
import ComparisonTable from '../components/ComparisonTable';
import Infographic from '../components/Infographic';
import { BookOpen, Code, Award, TrendingUp, Users, Globe, Zap, Target, Shield, Rocket } from 'lucide-react';

export const articleVisuals = {
  'comment-debuter-developpement-web-afrique-2026': {
    infographics: [
      {
        position: 'after-heading',
        headingId: 'les-meilleures-gratuites-en-2026',
        component: (
          <Infographic
            title="Comparaison des plateformes gratuites"
            stats={[
              { value: 'freeCodeCamp', label: 'Interactif', detail: 'Certifications gratuites' },
              { value: 'OpenClassrooms', label: 'Français', detail: 'Cours structurés' },
              { value: 'MDN', label: 'Référence', detail: 'Documentation officielle' },
            ]}
          />
        ),
      },
      {
        position: 'after-content',
        component: (
          <StepGuide
            steps={[
              { title: 'Maîtrisez HTML & CSS', description: 'Apprenez les balises, le responsive design, Flexbox et Grid.', detail: 'Ressource : freeCodeCamp ou MDN Web Docs' },
              { title: 'Apprenez JavaScript', description: 'DOM, ES6+, promesses, requêtes API et manipulation de données.', detail: 'Ressource : The Odin Project (gratuit)' },
              { title: 'Choisissez un Framework', description: 'React.js pour le frontend, Node.js ou Laravel pour le backend.', detail: 'Commencez par Next.js pour un site complet' },
              { title: 'Construisez des projets', description: 'Portfolio personnel, site e-commerce, application de tâches.', detail: 'Publiez sur GitHub pour montrer votre travail' },
              { title: 'Trouvez vos premiers clients', description: 'Upwork, Fiverr, Comeup. Spécialisez-vous et créez un profil professionnel.', detail: 'Commencez à prix réduit pour avoir des avis 5 étoiles' },
            ]}
          />
        ),
      },
    ],
  },

  'meilleurs-frameworks-javascript-a-apprendre': {
    infographics: [
      {
        position: 'after-heading',
        headingId: 'notre-top-5-des-frameworks-javascript',
        component: (
          <ComparisonTable
            headers={['Framework', 'Type', 'Difficulté', 'Usage idéal']}
            rows={[
              ['Next.js', 'Full-Stack React', 'Moyen', 'Sites SEO & e-commerce'],
              ['React.js', 'Bibliothèque UI', 'Moyen', 'Applications complexes'],
              ['Vue.js', 'Framework progressif', 'Facile', 'Projets de taille moyenne'],
              ['Svelte', 'Compilateur', 'Facile', 'Applications légères'],
              ['Astro', 'Générateur statique', 'Facile', 'Blogs & portfolios'],
            ]}
            caption="Comparaison rapide des frameworks JavaScript en 2026"
          />
        ),
      },
    ],
  },

  'apprendre-laravel-gratuitement-du-debutant-au-pro': {
    infographics: [
      {
        position: 'after-heading',
        headingId: 'le-plan-dapprentissage-recommande',
        component: (
          <StepGuide
            steps={[
              { title: 'Installation & Configuration', description: 'Installez Composer et créez votre premier projet Laravel.', detail: 'composer create-project laravel/laravel mon-projet' },
              { title: 'Routage & Contrôleurs', description: 'Liez les URLs aux actions avec les routes et les contrôleurs.', detail: 'routes/web.php → app/Http/Controllers/' },
              { title: 'Bases de données avec Eloquent', description: 'Créez des migrations, définissez des modèles et manipulez les données.', detail: 'php artisan make:model Article -m' },
              { title: 'Blade Templates', description: 'Structurez vos vues HTML avec le moteur de templates de Laravel.', detail: 'resources/views/' },
              { title: 'Authentification', description: 'Utilisez Laravel Breeze pour un système d\'inscription/connexion sécurisé.', detail: 'composer require laravel/breeze' },
            ]}
          />
        ),
      },
      {
        position: 'after-content',
        component: (
          <CodeBlock
            code={`# Créer un nouveau projet Laravel
composer create-project laravel/laravel blog-afrique

# Lancer le serveur de développement
php artisan serve

# Créer un modèle et une migration
php artisan make:model Article -m

# Exécuter les migrations
php artisan migrate`}
            language="bash"
            filename="terminal"
          />
        ),
      },
    ],
  },

  'pourquoi-python-est-le-langage-ideal': {
    infographics: [
      {
        position: 'after-heading',
        headingId: 'les-atouts-majeurs-de-python-pour-un-debutant-africain',
        component: (
          <Infographic
            title="Python en chiffres"
            stats={[
              { value: '#1', label: 'Langage le plus populaire', detail: 'Selon TIOBE 2026' },
              { value: '400K+', label: 'Bibliothèques disponibles', detail: 'Via pip' },
              { value: '65K€', label: 'Salaire moyen junior', detail: 'En Europe' },
            ]}
          />
        ),
      },
      {
        position: 'after-heading',
        headingId: 'le-plan-dapprentissage-recommande-pour-les-debutants',
        component: (
          <StepGuide
            steps={[
              { title: 'Phase 1 : Les fondamentaux (Semaines 1-4)', description: 'Variables, types de données, conditions, boucles, fonctions et gestion de fichiers.', detail: 'Commencez avec le tutoriel officiel Python.org' },
              { title: 'Phase 2 : POO (Semaines 5-8)', description: 'Classes, objets, héritage, encapsulation et polymorphisme.', detail: 'Ressource : freeCodeCamp Python course' },
              { title: 'Phase 3 : Spécialisation (Semaines 9-16)', description: 'Django pour le web, Scikit-Learn pour l\'IA, Pandas pour la Data Science.', detail: 'Choisissez UN domaine et construisez un projet' },
            ]}
          />
        ),
      },
      {
        position: 'after-content',
        component: (
          <CodeBlock
            code={`# Premier programme Python
print("Bonjour l'Afrique !")

# Une boucle simple
for i in range(1, 11):
    print(f"Nombre : {i}")

# Une fonction utilitaire
def convertir_devise(montant, taux=655.957):
    """Convertit des euros en FCFA"""
    return montant * taux

euros = 100
fcfa = convertir_devise(euros)
print(f"{euros}€ = {fcfa:.0f} FCFA")`}
            language="python"
            filename="premier_script.py"
          />
        ),
      },
    ],
  },

  'comment-utiliser-chatgpt-pour-coder-plus-vite': {
    infographics: [
      {
        position: 'after-heading',
        headingId: 'les-regles-dor-du-prompt-engineering-pour-le-code',
        component: (
          <ComparisonTable
            headers={['Prompt type', 'Mauvais exemple', 'Bon exemple']}
            rows={[
              ['Demande vague', '"Fais-moi un site web"', '"Crée une page d\'accueil responsive avec hero section, 3 cartes de services et un formulaire de contact en HTML/CSS"'],
              ['Sans contexte', '"Corrige ce bug"', '"Ce composant React affiche une erreur "Cannot read property map" quand la liste est vide. Ajoute une vérification de null."'],
              ['Tout d\'un coup', '"Fais tout le projet"', '"Commence par l\'architecture de la base de données, puis on fera l\'API, ensuite le frontend."'],
            ]}
          />
        ),
      },
      {
        position: 'after-content',
        component: (
          <CodeBlock
            code={'// EXEMPLE DE BON PROMPT POUR CHATGPT :\n\n"Agis en tant qu\'expert React/TypeScript.\n\nCrée un composant ProductCard qui :\n- Reçoit les props : name, price, image, rating\n- Affiche une carte avec image en haut, nom, prix et étoiles\n- Utilise du CSS Modules (pas de framework)\n- Est entièrement accessible (aria-labels)\n- N\'interrompt pas le chargement de la page\n\nContraintes :\n- Pas de bibliothèque externe\n- Compatibilité IE11 non requise\n- Le prix doit s\'afficher en FCFA"'}
            language="javascript"
            filename="exemple_prompt.js"
          />
        ),
      },
    ],
  },

  'comment-gagner-de-l-argent-en-ligne-en-afrique': {
    infographics: [
      {
        position: 'after-heading',
        headingId: '1-le-freelancing-prestation-de-services',
        component: (
          <Infographic
            title="Revenus moyens par méthode (FCFA/mois)"
            stats={[
              { value: '50K-500K', label: 'Freelancing', detail: 'Upwork, Fiverr, Comeup' },
              { value: '100K-300K', label: 'Rédaction SEO', detail: 'Articles pour entreprises' },
              { value: '50K-200K', label: 'AdSense Blog', detail: 'Revenus passifs' },
            ]}
          />
        ),
      },
      {
        position: 'after-content',
        component: (
          <StepGuide
            steps={[
              { title: 'Choisissez votre méthode', description: 'Freelancing, rédaction, blog ou community manager. Commencez par UNE seule méthode.', detail: 'Le freelancing est le plus rapide pour générer des revenus' },
              { title: 'Créez votre profil professionnel', description: 'Portfolio, photo professionnelle, description specialize et examples de travail.', detail: 'Utilisez Canva pour créer un portfolio visuel' },
              { title: 'Fixez vos prix d\'entrée', description: 'Proposez des tarifs compétitifs pour vos 3 premiers clients afin d\'obtenir des avis.', detail: 'Augmentez vos prix après 5 avis 5 étoiles' },
              { title: 'Livrez plus que prévu', description: 'Surpassez les attentes du client pour obtenir des recommandations.', detail: 'Un client satisfait = 3 recommandations potentielles' },
            ]}
          />
        ),
      },
    ],
  },

  'guide-ultime-freelancing-upwork-fiverr-afrique': {
    infographics: [
      {
        position: 'after-heading',
        headingId: 'strategie-pour-decrocher-votre-premier-contrat',
        component: (
          <ComparisonTable
            headers={['Plateforme', 'Tarif d\'entrée', 'Spécialité', 'Paiement']}
            rows={[
              ['Upwork', 'Gratuit (10 crédits/mois)', 'Tech, rédaction, design', 'Payoneer, virement'],
              ['Fiverr', 'Gratuit', 'Micro-services', 'PayPal, Payoneer'],
              ['Comeup', 'Gratuit', 'Francophone', 'Mobile Money, virement'],
            ]}
            caption="Comparaison des plateformes de freelancing pour les Africains"
          />
        ),
      },
    ],
  },

  'introduction-machine-learning-etudiants-africains': {
    infographics: [
      {
        position: 'after-heading',
        headingId: 'les-trois-grandes-familles-dalgorithmes',
        component: (
          <ComparisonTable
            headers={['Type', 'Données', 'Exemple concret', 'Algorithme']}
            rows={[
              ['Supervisé', 'Étiquetées (réponses connues)', 'Prédire le prix d\'un logement', 'Régression linéaire, SVM'],
              ['Non supervisé', 'Non étiquetées', 'Segmenter des clients', 'K-Means, PCA'],
              ['Par renforcement', 'Essai-erreur', 'IA qui joue aux échecs', 'Q-Learning, AlphaGo'],
            ]}
            caption="Les 3 familles d'algorithmes de Machine Learning"
          />
        ),
      },
      {
        position: 'after-content',
        component: (
          <StepGuide
            steps={[
              { title: 'Mathématiques (1-2 mois)', description: 'Statistiques, probabilités, algèbre linéaire et calcul différentiel.', detail: 'Chaîne YouTube recommandée : 3Blue1Brown' },
              { title: 'Python & bibliothèques (1-2 mois)', description: 'NumPy, Pandas, Matplotlib, Seaborn pour manipuler et visualiser les données.', detail: 'Environnement : Google Colab (gratuit)' },
              { title: 'Scikit-Learn (2-3 mois)', description: 'Algorithmes classiques : régression, classification, clustering.', detail: 'Projet : prédire la survie sur le Titanic (Kaggle)' },
              { title: 'Deep Learning (3-6 mois)', description: 'TensorFlow/Keras ou PyTorch pour les réseaux de neurones profonds.', detail: 'Projet : classification d\'images avec CIFAR-10' },
            ]}
          />
        ),
      },
    ],
  },

  'bourse-etude-gratuite-2026-comment-postuler': {
    infographics: [
      {
        position: 'after-heading',
        headingId: 'les-types-de-bourses-les-plus-genereuses',
        component: (
          <Infographic
            title="Types de bourses disponibles"
            stats={[
              { value: 'France', label: 'Bourses Eiffel', detail: 'Master & Doctorat' },
              { value: 'Canada', label: 'Bourses Mastercard', detail: 'Frais + logement + allocation' },
              { value: 'Belgique', label: 'Coopération ARES', detail: 'Master & Doctorat' },
            ]}
          />
        ),
      },
      {
        position: 'after-content',
        component: (
          <StepGuide
            steps={[
              { title: '6 mois avant', description: 'Identifiez les bourses cibles et listez les pièces documentaires demandées.', detail: 'Consultez StudyInFrance.ca, StudyInCanada.com' },
              { title: '4 mois avant', description: 'Passez les tests de langue (IELTS, DELF, TCF) et demandez les lettres de recommandation.', detail: 'Préparez-vous au moins 3 mois à l\'avance' },
              { title: '2 mois avant', description: 'Rédigez votre lettre de motivation et faites-la relire par 3 personnes minimum.', detail: 'Chaque lettre doit être personnalisée par université' },
              { title: '1 mois avant', description: 'Soumettez votre candidature et envoyez un email de confirmation.', detail: 'Candidater tôt = avantage concret' },
            ]}
          />
        ),
      },
    ],
  },

  'metiers-tech-les-plus-recherches-et-mieux-payes': {
    infographics: [
      {
        position: 'after-heading',
        headingId: 'le-top-des-metiers-davenir-les-plus-demandes',
        component: (
          <ComparisonTable
            headers={['Métier', 'Salaire mensuel', 'Formation', 'Demande']}
            rows={[
              ['Développeur Full-Stack', '3 000 - 8 000 €', '12-24 mois', '★★★★★'],
              ['Cybersécurité', '4 000 - 10 000 €', '6-18 mois + certs', '★★★★★'],
              ['Cloud/DevOps', '4 000 - 12 000 €', 'Certifications AWS/GCP', '★★★★☆'],
              ['Data Scientist', '3 000 - 8 000 €', '12-24 mois', '★★★★☆'],
              ['Designer UI/UX', '3 000 - 7 000 €', '6-12 mois', '★★★★☆'],
              ['Développeur Mobile', '2 500 - 7 000 €', '6-18 mois', '★★★★☆'],
            ]}
            caption="Salaires moyens en freelance pour clients européens (2026)"
          />
        ),
      },
      {
        position: 'after-content',
        component: (
          <Infographic
            title="Par où commencer ?"
            stats={[
              { value: 'Logique ?', label: 'Full-Stack ou Cyber', detail: 'Résolution de problèmes' },
              { value: 'Chiffres ?', label: 'Data Analyst/Scientist', detail: 'Statistiques & IA' },
              { value: 'Créatif ?', label: 'UI/UX Design', detail: 'Empathie utilisateur' },
            ]}
          />
        ),
      },
    ],
  },

  'guide-travail-a-distance-entreprises-europeennes': {
    infographics: [
      {
        position: 'after-heading',
        headingId: 'ou-trouver-ces-offres-demplacement-remote',
        component: (
          <ComparisonTable
            headers={['Plateforme', 'Type d\'offres', 'Prix', 'Spécialité']}
            rows={[
              ['We Work Remotely', '100% Remote', 'Gratuit', 'Tech & Design'],
              ['Welcome to the Jungle', 'Startups FR/EU', 'Gratuit', 'Tous secteurs'],
              ['LinkedIn', 'Global', 'Gratuit', 'Filtre "Télétravail"'],
              ['Remote.co', '100% Remote', 'Gratuit', 'Tous métiers'],
              ['FlexJobs', 'Vérifiées', 'Payant', 'Premium filtré'],
            ]}
            caption="Les meilleures plateformes pour trouver du travail remote depuis l'Afrique"
          />
        ),
      },
      {
        position: 'after-content',
        component: (
          <StepGuide
            steps={[
              { title: 'Maîtrisez l\'anglais technique', description: 'Niveau B2 minimum. Documentation, Slack, réunions en anglais.', detail: 'Pratiquez avec des cours gratuits sur Coursera' },
              { title: 'Créez votre portfolio GitHub', description: 'Minimum 5 projets publiés avec README soigné et démo en ligne.', detail: 'Un GitHub actif vaut plus qu\'un diplôme' },
              { title: 'CV anglo-saxon sans photo', description: 'Mettez en avant les résultats (\"-40% temps de chargement\") pas les tâches.', detail: 'Format : Name → Summary → Projects → Skills' },
              { title: 'Postulez en masse', description: 'Visez 5-10 candidatures par semaine. Spécialisez chaque CV par offre.', detail: 'Acceptez les refus comme apprentissage' },
            ]}
          />
        ),
      },
    ],
  },
};
