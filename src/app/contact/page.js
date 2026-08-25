import ContactContent from './ContactContent';

export const metadata = {
  title: "Contactez-nous",
  description: "Une question, une proposition de partenariat ou envie de contribuer à Afrique Tech Hub ? Contactez notre équipe éditoriale depuis Dakar, Sénégal.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contactez-nous — Afrique Tech Hub",
    description: "Une question, une proposition de partenariat ou envie de contribuer à Afrique Tech Hub ? Contactez notre équipe éditoriale.",
    url: "https://afrique-tech-hub.vercel.app/contact",
  },
  twitter: {
    card: "summary",
    title: "Contactez-nous — Afrique Tech Hub",
    description: "Une question, une proposition de partenariat ou envie de contribuer à Afrique Tech Hub ? Contactez notre équipe éditoriale.",
  },
};

export default function ContactPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Comment proposer un article ou devenir rédacteur ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nous sommes constamment à la recherche de passionnés du numérique pour enrichir la plateforme. Si vous souhaitez rédiger un guide pratique ou partager une opportunité, contactez-nous via le formulaire en choisissant le sujet "Proposition d\'article". Expliquez brièvement votre parcours et proposez 2 ou 3 thématiques.',
        },
      },
      {
        '@type': 'Question',
        name: 'Les opportunités et bourses présentées sont-elles fiables ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolument. Chaque opportunité, bourse d\'études ou plateforme de freelancing fait l\'objet d\'une vérification manuelle approfondie par notre équipe avant publication. Nous ne publions jamais d\'offres demandant des paiements préalables ou promettant un enrichissement sans travail.',
        },
      },
      {
        '@type': 'Question',
        name: 'Puis-je copier et utiliser le contenu du site ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le contenu de nos articles est protégé par les droits d\'auteur d\'Afrique Tech Hub. Vous pouvez citer de courts extraits en ajoutant obligatoirement un lien hypertexte direct vers notre article d\'origine. Toute reproduction intégrale sans autorisation écrite préalable est strictement interdite.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment être informé des nouvelles opportunités ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le moyen le plus simple est de vous inscrire à notre newsletter "Club Privé" directement sur notre page d\'accueil. Vous recevrez un résumé hebdomadaire par e-mail avec les toutes dernières bourses publiées et les offres de télétravail.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactContent />
    </>
  );
}
