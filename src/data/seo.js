/**
 * Couche SEO centralisée.
 *
 * Les titres affichés dans les pages (H1) restent éditoriaux et détaillés.
 * Les titres ci-dessous sont ceux envoyés à Google : plus courts (≤ 60 caractères),
 * avec le mot-clé principal en début de chaîne pour maximiser le CTR dans les résultats.
 */

export const SITE_URL = 'https://afrique-tech-hub.vercel.app';
export const SITE_NAME = 'Afrique Tech Hub';
export const DEFAULT_OG_IMAGE = '/og-default.jpg';

export const articleSeo = {
  'comment-debuter-developpement-web-afrique-2026': {
    title: "Débuter le développement web en Afrique en 2026",
    description:
      "Guide gratuit pour apprendre le développement web de zéro depuis l'Afrique : HTML, CSS, JavaScript, frameworks, ressources et plan d'action sur 6 mois.",
    updated: '2026-10-27',
    faqs: [
      {
        q: "Quel langage apprendre en premier pour le développement web ?",
        a: "Commencez par HTML puis CSS pour structurer et mettre en forme une page. Ajoutez ensuite JavaScript, indispensable pour l'interactivité. Les frameworks comme React ou Laravel viennent seulement après la maîtrise de ces trois bases.",
      },
      {
        q: "Combien de temps faut-il pour devenir développeur junior ?",
        a: "Avec une pratique régulière d'une à deux heures par jour, comptez généralement 6 à 12 mois pour atteindre un niveau junior employable. Le rythme dépend surtout de la régularité et de la qualité des projets réalisés, plus que du nombre de cours suivis.",
      },
      {
        q: "Faut-il un diplôme pour travailler dans le développement web ?",
        a: "Non. La plupart des recruteurs et des clients freelances évaluent d'abord votre portfolio, vos projets réels et votre capacité à résoudre des problèmes. Un diplôme peut aider pour certains visas ou grandes entreprises, mais il n'est pas obligatoire pour débuter.",
      },
    ],
  },
  'meilleurs-frameworks-javascript-a-apprendre': {
    title: "Les 5 meilleurs frameworks JavaScript en 2026",
    description:
      "Next.js, React, Vue, Svelte ou Astro : comparatif des frameworks JavaScript les plus demandés en 2026 et conseils pour choisir celui qui boostera votre carrière.",
    faqs: [],
  },
  'apprendre-laravel-gratuitement-du-debutant-au-pro': {
    title: "Apprendre Laravel gratuitement : guide 2026",
    description:
      "Apprenez Laravel sans payer : prérequis PHP, plan d'apprentissage, ressources gratuites et projet pratique pour passer de débutant à développeur professionnel.",
    faqs: [],
  },
  'pourquoi-python-est-le-langage-ideal': {
    title: "Pourquoi apprendre Python en 2026 (débutant)",
    description:
      "Python gratuit pour débuter : syntaxe simple, premiers exercices concrets et plan d'apprentissage en 4 phases. Aucune installation complexe requise.",
    faqs: [],
  },
  'comment-utiliser-chatgpt-pour-coder-plus-vite': {
    title: "ChatGPT pour coder plus vite : 7 techniques",
    description:
      "Prompt engineering pour développeurs : rôles, contexte, tests et relecture. Apprenez à utiliser ChatGPT sans sacrifier la qualité ni la sécurité de votre code.",
    updated: '2026-10-27',
    faqs: [
      {
        q: "ChatGPT peut-il remplacer un développeur ?",
        a: "Non. ChatGPT accélère certaines tâches (explications, tests, prototypes, correction d'erreurs) mais ne comprend pas votre contexte métier et peut produire du code faux ou non sécurisé. Le développeur reste responsable de l'architecture et de la validation.",
      },
      {
        q: "Quels prompts utiliser pour obtenir du bon code ?",
        a: "Donnez toujours un rôle, le contexte technique, les contraintes (langage, accessibilité, performance) et le format attendu. Demandez ensuite des tests et une explication des choix. Les prompts courts et vagues produisent du code générique.",
      },
      {
        q: "Le code généré par IA est-il fiable ?",
        a: "Pas automatiquement. Vérifiez chaque dépendance, testez le code et relisez les parties sensibles (authentification, paiements, données personnelles). L'IA peut inventer des fonctions ou reproduire des failles connues.",
      },
    ],
  },
  'top-10-outils-ia-indispensables-freelance': {
    title: "Top 10 des outils IA pour freelances en 2026",
    description:
      "Rédaction, design, transcription, traduction, code : notre sélection d'outils IA gratuits ou abordables pour livrer plus vite et augmenter vos revenus freelance.",
    faqs: [],
  },
  'introduction-machine-learning-etudiants-africains': {
    title: "Machine Learning : se former depuis l'Afrique",
    description:
      "Comprendre le Machine Learning, les prérequis maths et Python, les algorithmes, les formations gratuites et les débouchés pour les étudiants africains.",
    updated: '2026-10-25',
    faqs: [
      {
        q: "Quels prérequis faut-il pour apprendre le Machine Learning ?",
        a: "Il faut des bases en mathématiques (statistiques, probabilités, algèbre linéaire), une bonne maîtrise de Python et de ses bibliothèques (NumPy, Pandas) ainsi qu'une familiarité avec les données tabulaires. Ces bases peuvent s'acquérir en quelques mois.",
      },
      {
        q: "Combien de temps pour devenir opérationnel en Machine Learning ?",
        a: "Comptez 6 à 12 mois pour maîtriser les algorithmes classiques avec Scikit-Learn et réaliser vos premiers projets, puis 12 à 18 mois supplémentaires pour un profil professionnel solide, notamment en Deep Learning.",
      },
      {
        q: "Peut-on apprendre le Machine Learning gratuitement ?",
        a: "Oui. Kaggle, fast.ai, Google AI Education, les cours CS50 et l'aide financière de Coursera permettent de se former sans frais. Le facteur limitant est le temps de pratique et la qualité des projets réalisés.",
      },
    ],
  },
  'comment-ia-transforme-agriculture-sante-afrique': {
    title: "IA en Afrique : santé et agriculture (exemples)",
    description:
      "Détection des maladies des plantes, diagnostic médical, drones de livraison : des exemples concrets d'intelligence artificielle qui transforment l'Afrique.",
    faqs: [],
  },
  'comment-gagner-de-l-argent-en-ligne-en-afrique': {
    title: "Gagner de l'argent en ligne en Afrique : 5 méthodes",
    description:
      "Cinq méthodes sérieuses pour générer des revenus en ligne depuis l'Afrique en 2026 : freelancing, rédaction SEO, blog, community management et micro-services.",
    updated: '2026-10-28',
    faqs: [
      {
        q: "Quelle méthode choisir pour débuter sans compétences techniques ?",
        a: "Le community management, la rédaction web, la transcription ou la vente de micro-services numériques demandent peu de technique. Commencez par une seule offre, entraînez-vous sur des projets fictifs puis proposez vos services à des commerces locaux.",
      },
      {
        q: "Combien peut-on gagner en freelance depuis l'Afrique ?",
        a: "Les premiers contrats se situent souvent entre 50 et 200 dollars. Avec des avis clients et une spécialisation, un freelance peut viser 300 à 1 000 dollars par mois, puis davantage. Ces montants varient fortement selon la compétence et le marché visé.",
      },
      {
        q: "Comment se faire payer depuis l'Afrique ?",
        a: "Les solutions les plus utilisées sont Payoneer, Wise, les virements bancaires internationaux et, selon les plateformes, les paiements vers Mobile Money. Vérifiez les frais et la disponibilité dans votre pays avant de commencer.",
      },
    ],
  },
  'guide-ultime-freelancing-upwork-fiverr-afrique': {
    title: "Freelancing Upwork & Fiverr depuis l'Afrique",
    description:
      "Inscription, paiement, profil, propositions et premiers contrats : le guide complet pour réussir sur Upwork et Fiverr depuis un pays africain en 2026.",
    updated: '2026-10-26',
    faqs: [
      {
        q: "Upwork accepte-t-il les freelances africains ?",
        a: "Oui, Upwork est accessible dans de nombreux pays africains, mais les conditions et les moyens de retrait varient. Vérifiez la liste des pays éligibles et les solutions de paiement disponibles avant de créer votre compte.",
      },
      {
        q: "Comment décrocher son premier contrat sur Upwork ou Fiverr ?",
        a: "Spécialisez-vous sur une compétence précise, construisez un portfolio de 2 à 3 projets, puis envoyez des propositions personnalisées qui montrent que vous avez compris le besoin du client. Acceptez quelques missions à prix d'entrée pour obtenir des avis.",
      },
      {
        q: "Quels frais prévoir sur les plateformes de freelancing ?",
        a: "Upwork prélève une commission sur les missions et Fiverr une commission sur chaque vente. Ajoutez les frais de retrait et de conversion de devise. Intégrez ces coûts dans votre tarif pour ne pas travailler à perte.",
      },
    ],
  },
  'comment-monetiser-blog-adsense-2026': {
    title: "Monétiser un blog avec AdSense en 2026",
    description:
      "Contenu original, navigation, pages légales et conformité : les étapes concrètes pour préparer un blog à la validation Google AdSense et générer des revenus.",
    faqs: [
      {
        q: "Combien de trafic faut-il pour être accepté par AdSense ?",
        a: "Google ne publie pas de minimum officiel de trafic. L'essentiel est d'avoir un site original, utile, conforme et doté de pages légales. Un trafic réel et une navigation claire renforcent la crédibilité, mais l'acceptation n'est jamais garantie.",
      },
      {
        q: "Quelles pages sont obligatoires pour AdSense ?",
        a: "Prévoyez au minimum une politique de confidentialité, des conditions d'utilisation, une page À propos et une page Contact avec un moyen de joindre l'éditeur. Ces pages doivent être accessibles depuis le pied de page.",
      },
      {
        q: "Quand Google verse-t-il les revenus AdSense ?",
        a: "Les paiements sont généralement mensuels, une fois le seuil de 100 dollars atteint et les informations de paiement validées. Les revenus des mois précédents peuvent être ajustés en cas de clics invalides.",
      },
    ],
  },
  'devenir-community-manager-freelance-afrique': {
    title: "Devenir Community Manager freelance en Afrique",
    description:
      "Missions, compétences, tarifs et prospection : le guide pour lancer votre activité de community manager freelance depuis l'Afrique francophone.",
    faqs: [],
  },
  'bourse-etude-gratuite-2026-comment-postuler': {
    title: "Bourse d'étude 2027 : comment postuler",
    description:
      "Bourses 2027 pour étudiants africains : programmes, calendrier, dossier, lettre de motivation et erreurs à éviter pour maximiser vos chances d'être accepté.",
    updated: '2026-10-28',
    faqs: [
      {
        q: "Quand faut-il postuler pour une bourse d'étude 2027 ?",
        a: "La plupart des grandes bourses ouvrent leurs candidatures entre octobre et mars pour une rentrée en septembre. Préparez votre dossier 6 à 12 mois à l'avance, car les tests de langue et les lettres de recommandation prennent du temps.",
      },
      {
        q: "Quelles pièces préparer pour une candidature de bourse ?",
        a: "Prévoyez vos relevés de notes et diplômes, un passeport valide, une lettre de motivation personnalisée, deux ou trois lettres de recommandation, un CV et, selon le programme, un score de langue (IELTS, TOEFL, DELF ou TCF).",
      },
      {
        q: "Peut-on obtenir une bourse sans passer l'IELTS ?",
        a: "Certains programmes francophones acceptent le DELF, le TCF ou une attestation d'études en français. D'autres accordent une exemption si votre cursus précédent s'est déroulé en anglais. Vérifiez les conditions sur le site officiel de chaque université.",
      },
    ],
  },
  'top-5-plateformes-cours-ligne-certificats-gratuits': {
    title: "Certificats gratuits : 5 plateformes de cours",
    description:
      "Coursera, Google, Harvard, Udemy et OpenClassrooms : cinq plateformes pour obtenir des certificats utiles et gratuits et renforcer votre CV tech.",
    faqs: [],
  },
  'comment-obtenir-bourse-excellence-canada': {
    title: "Bourse d'excellence au Canada : guide complet",
    description:
      "Étudier au Canada avec une bourse : programmes, exemptions de frais, dossier, lettres de motivation et permis d'études pour les étudiants africains.",
    updated: '2026-10-26',
    faqs: [
      {
        q: "Quel niveau de langue faut-il pour étudier au Canada ?",
        a: "Pour les programmes anglophones, visez un IELTS de 6.5 ou un TOEFL équivalent. Pour les programmes francophones du Québec, un TCF ou un DELF de niveau B2 est souvent demandé. Les exigences varient selon l'université et le programme.",
      },
      {
        q: "Quelles bourses viser en priorité pour le Canada ?",
        a: "Les exemptions de frais de scolarité au Québec, les bourses d'entrée des universités et le programme Mastercard Foundation Scholars sont les pistes les plus intéressantes. Chaque université publie ses critères sur sa page d'aide financière.",
      },
      {
        q: "Combien coûte une année d'études au Canada ?",
        a: "Comptez environ 15 000 à 35 000 dollars canadiens de frais de scolarité pour un étudiant international, plus 10 000 à 15 000 dollars pour le logement et la vie courante. Une bourse ou une exemption peut réduire fortement la facture.",
      },
    ],
  },
  'meilleures-formations-tech-gratuites-financees': {
    title: "Formations tech gratuites pour Africains",
    description:
      "ALX, École 42, Google, Andela, Microsoft : les programmes qui financent une formation tech d'excellence pour les jeunes Africains et comment être sélectionné.",
    faqs: [],
  },
  'guide-travail-a-distance-entreprises-europeennes': {
    title: "Travailler à distance pour une entreprise européenne",
    description:
      "Trouver un emploi remote en Europe depuis l'Afrique : plateformes, compétences, CV, entretien, contrat et fiscalité. Le guide complet du télétravail international.",
    updated: '2026-10-24',
    faqs: [
      {
        q: "Comment trouver un emploi remote en Europe depuis l'Afrique ?",
        a: "Utilisez des plateformes spécialisées comme We Work Remotely, Remote.co, Welcome to the Jungle et LinkedIn avec le filtre télétravail. Adaptez votre CV aux standards internationaux et appuyez-vous sur un portfolio de projets concrets.",
      },
      {
        q: "Faut-il un visa pour travailler à distance pour une entreprise européenne ?",
        a: "En général non, si vous restez dans votre pays et travaillez comme prestataire. Certaines entreprises passent par un organisme de portage (EOR) pour vous employer légalement. Vérifiez toujours le cadre fiscal et social local.",
      },
      {
        q: "Quel salaire viser en télétravail pour l'Europe ?",
        a: "Les fourchettes varient selon le métier et l'expérience. Un profil junior peut viser 800 à 1 500 euros par mois, un profil confirmé 2 000 à 3 500 euros. Comparez avec le marché local et facturez selon la valeur apportée.",
      },
    ],
  },
  'comment-lancer-agence-services-digitaux-sans-budget': {
    title: "Lancer une agence digitale sans budget (no-code)",
    description:
      "Choisir une spécialité, se former gratuitement, créer un portfolio et prospecter : le plan d'action pour lancer une agence no-code sans capital de départ.",
    faqs: [],
  },
  'metiers-tech-les-plus-recherches-et-mieux-payes': {
    title: "Métiers tech les plus payés en 2026",
    description:
      "Développeur full-stack, cybersécurité, cloud, data, design : les métiers tech les plus demandés en 2026, les salaires et les formations pour s'y reconvertir.",
    faqs: [],
  },
  'comment-creer-vendre-microservice-digital': {
    title: "Créer et vendre un micro-service digital",
    description:
      "Transformez une compétence simple en offre packagée et vendez-la en boucle sur Comeup, Fiverr ou en direct. Méthode, pricing et exemples concrets.",
    faqs: [],
  },
  'les-7-erreurs-des-debutants-en-programmation': {
    title: "7 erreurs des débutants en programmation",
    description:
      "Apprendre à coder seul sans perdre des mois : les 7 erreurs les plus fréquentes des débutants et les méthodes concrètes pour les éviter.",
    faqs: [],
  },
  'comment-optimiser-profil-linkedin-trouver-emploi-tech': {
    title: "Optimiser profil LinkedIn pour recruteurs Suisse",
    description:
      "Guide complet : photo, titre, compétences pour recruteurs suisses. Gratuit, sans inscription, +200 000 professionnels africains ont suivi ce guide.",
    updated: '2026-10-24',
    faqs: [
      {
        q: "Que mettre dans le titre de son profil LinkedIn ?",
        a: "Indiquez votre métier, votre spécialité et la valeur que vous apportez, par exemple « Développeur React | Applications web performantes ». Évitez les formules vagues comme « Passionné de technologie » qui n'aident pas les recruteurs à vous trouver.",
      },
      {
        q: "Faut-il un profil LinkedIn en anglais ?",
        a: "Pour les opportunités internationales, oui : rédigez au moins le titre et le résumé en anglais, ou utilisez la version multilingue de LinkedIn. Gardez une version française si vous ciblez aussi des employeurs francophones.",
      },
      {
        q: "Comment attirer les recruteurs sur LinkedIn ?",
        a: "Renseignez les mots-clés de votre métier, publiez vos projets, demandez des recommandations et activez « Open to work » avec des critères précis. Une activité régulière et des réalisations concrètes attirent plus que les diplômes seuls.",
      },
    ],
  },
  'alx-africa-2027-inscription-programmes-avis': {
    title: "ALX Africa 2027 : inscription, programmes et avis",
    description:
      "ALX Africa en 2027 : programmes gratuits, conditions d'admission, déroulé, avis et conseils pour réussir la sélection et choisir la bonne spécialisation.",
    updated: '2026-10-29',
    faqs: [
      {
        q: "ALX Africa est-il vraiment gratuit ?",
        a: "Les programmes phares d'ALX sont financés pour les candidats sélectionnés, notamment via la Fondation Mastercard. Les conditions varient selon le programme et la cohorte : vérifiez toujours les frais éventuels sur la page officielle avant de postuler.",
      },
      {
        q: "Quels programmes propose ALX Africa ?",
        a: "ALX propose notamment Software Engineering, Data Science, Cloud Computing, Virtual Assistant et AI Career Essentials. Les formats et les durées évoluent selon les cohortes ; consultez le catalogue officiel pour la session 2027.",
      },
      {
        q: "Comment postuler à ALX Africa ?",
        a: "La candidature se fait en ligne sur alxafrica.com. Elle comprend un formulaire, des questions de motivation et parfois un test ou un entretien. Préparez des exemples concrets de projets et de persévérance avant de commencer.",
      },
    ],
  },
  'gagner-argent-chatgpt-afrique': {
    title: "Gagner de l'argent avec ChatGPT en Afrique",
    description:
      "Cinq services rentables à vendre grâce à ChatGPT : rédaction, traduction, chatbots, automatisation et formation. Méthode, tarifs et limites à connaître.",
    updated: '2026-10-29',
    faqs: [
      {
        q: "Peut-on vraiment gagner de l'argent avec ChatGPT ?",
        a: "Oui, mais ChatGPT est un outil, pas une source de revenus automatique. Vous vendez un service (rédaction, traduction, automatisation, support) à un client. Sans compétence, sans offre claire et sans prospection, l'outil seul ne génère rien.",
      },
      {
        q: "Quels services vendre grâce à ChatGPT ?",
        a: "Les plus accessibles sont la rédaction et la réécriture, la traduction, la création de réponses clients, les chatbots simples, l'automatisation de tâches et la formation d'équipes. Choisissez un service que vous pouvez vérifier et livrer correctement.",
      },
      {
        q: "Combien facturer un service réalisé avec ChatGPT ?",
        a: "Ne facturez pas l'outil, facturez le résultat. Un article optimisé, un chatbot ou une automatisation se tarifient selon le temps gagné et la valeur pour le client. Commencez par un prix d'entrée, puis augmentez avec les résultats et les témoignages.",
      },
    ],
  },
  'creer-site-web-gratuit-debutant': {
    title: "Créer un site web gratuitement en 2026",
    description:
      "Quel outil choisir pour créer un site web gratuit et professionnel en 2026 ? Comparatif WordPress, Carrd, Notion, GitHub Pages et Vercel, pas à pas.",
    updated: '2026-10-29',
    faqs: [
      {
        q: "Quel est le meilleur outil gratuit pour créer un site web ?",
        a: "Tout dépend du besoin : Carrd pour une page simple, WordPress.com pour un blog, Notion pour une page de présentation, GitHub Pages ou Vercel pour un site de développeur. Le meilleur choix est celui que vous saurez maintenir sans dépendre d'un prestataire.",
      },
      {
        q: "Un site gratuit peut-il être professionnel ?",
        a: "Oui, à condition d'utiliser un nom de domaine personnalisé, un design soigné et un contenu utile. Les sous-domaines gratuits (monsite.wordpress.com) font moins professionnel ; un domaine coûte généralement 10 à 15 euros par an.",
      },
      {
        q: "Combien coûte un nom de domaine ?",
        a: "Comptez environ 10 à 15 euros par an pour un domaine classique en .com, .fr ou .africa. L'hébergement statique peut rester gratuit sur Vercel, Netlify ou GitHub Pages, ce qui limite le budget au seul domaine.",
      },
    ],
  },
};

export const categorySeo = {
  dev: {
    title: "Développement Web : guides gratuits 2026",
    description:
      "Apprenez HTML, CSS, JavaScript, React et Laravel avec des guides gratuits et des plans d'apprentissage conçus pour les débutants en Afrique francophone.",
    intro:
      "Le développement web reste la porte d'entrée la plus accessible vers les métiers du numérique. Nos guides couvrent les bases (HTML, CSS, JavaScript), les frameworks demandés (React, Next.js, Laravel) et les méthodes pour construire un portfolio crédible depuis l'Afrique.",
  },
  ia: {
    title: "Intelligence Artificielle : guides gratuits 2026",
    description:
      "ChatGPT, Machine Learning, prompt engineering : des guides gratuits pour comprendre et utiliser l'intelligence artificielle depuis l'Afrique francophone.",
    intro:
      "L'intelligence artificielle transforme le travail, la santé et l'agriculture en Afrique. Nos guides expliquent les concepts clés sans jargon, comparent les outils et montrent comment utiliser l'IA de manière responsable dans un métier ou un projet.",
  },
  money: {
    title: "Gagner de l'argent en ligne : guides 2026",
    description:
      "Freelancing, rédaction SEO, blog, community management : des méthodes sérieuses pour gagner de l'argent en ligne depuis l'Afrique, sans arnaque.",
    intro:
      "Gagner de l'argent en ligne est possible, à condition de vendre une compétence réelle et de vérifier les plateformes. Nos guides détaillent le freelancing, la rédaction, la monétisation d'un blog et les services numériques, avec des étapes concrètes et les pièges à éviter.",
  },
  scholarship: {
    title: "Bourses d'études : guides gratuits 2026",
    description:
      "Bourses 2027, formations gratuites, certificats en ligne : les meilleures opportunités d'études pour les étudiants africains francophones.",
    intro:
      "Financer ses études ne devrait pas dépendre uniquement de ses économies. Nos guides recensent les bourses internationales, les programmes de formation gratuits et les certificats reconnus, avec le calendrier, les pièces à fournir et les erreurs qui éliminent les bons dossiers.",
  },
  opp: {
    title: "Travail à distance : guides et opportunités 2026",
    description:
      "Travail à distance, agence no-code, métiers tech : les opportunités digitales pour travailler depuis l'Afrique et collaborer avec l'international.",
    intro:
      "Le télétravail rapproche les talents africains des entreprises européennes et nord-américaines. Nos guides couvrent la recherche d'emploi remote, les compétences attendues, les contrats, la fiscalité et la création d'une activité de services digitale.",
  },
};

export const authorProfiles = {  'Arona Diallo': {
    role: 'Expert e-commerce & freelancing',
    bio: "Consultant en stratégie digitale, Arona accompagne les indépendants africains sur Upwork, Comeup et les plateformes de vente en ligne. Il teste les méthodes de monétisation avant de les recommander.",
    expertise: ['Freelancing', 'E-commerce', 'Monétisation'],
    initials: 'AD',
    anchor: 'arona-diallo',
  },
  'Koffi Mensah': {
    role: 'Ingénieur logiciel & IA',
    bio: "Développeur full-stack et formateur, Koffi travaille sur des projets web et Machine Learning. Il documente les outils, les frameworks et les méthodes qu'il utilise réellement en production.",
    expertise: ['Développement web', 'Machine Learning', 'Télétravail'],
    initials: 'KM',
    anchor: 'koffi-mensah',
  },
  'Mariama Sow': {
    role: 'Spécialiste orientation & bourses',
    bio: "Diplômée au Canada grâce à une bourse d'excellence, Mariama décrypte les candidatures, les bourses et les formations internationales pour les étudiants africains francophones.",
    expertise: ['Bourses', 'Études à l’étranger', 'Orientation'],
    initials: 'MS',
    anchor: 'mariama-sow',
  },
};

export function getArticleSeo(article) {
  const seo = articleSeo[article.slug] || {};
  return {
    title: seo.title || article.title,
    description: seo.description || article.description,
    keywords: [...(article.seoKeywords || [])],
    updated: seo.updated || null,
    faqs: seo.faqs || [],
  };
}

export function getArticleLastModified(article) {
  const seo = articleSeo[article.slug];
  return (seo && seo.updated) || article.date;
}
