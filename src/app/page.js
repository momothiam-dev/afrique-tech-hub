import HomeContent from './HomeContent';
import { articles } from '../data/articles';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '../data/seo';

export const metadata = {
  title: {
    absolute: "Afrique Tech Hub — Tech, bourses et travail en ligne",
  },
  description:
    "Guides gratuits pour apprendre la tech, décrocher une bourse et travailler en ligne depuis l'Afrique francophone : développement web, IA, freelancing et études.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Afrique Tech Hub — Tech, bourses et travail en ligne",
    description:
      "Guides gratuits pour apprendre la tech, décrocher une bourse et travailler en ligne depuis l'Afrique francophone.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Afrique Tech Hub — guides tech, bourses et opportunités",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afrique Tech Hub — Tech, bourses et travail en ligne",
    description:
      "Guides gratuits pour apprendre la tech, décrocher une bourse et travailler en ligne depuis l'Afrique francophone.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10);

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: "Derniers guides d'Afrique Tech Hub",
    itemListElement: latestArticles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SITE_URL}/blog/${article.slug}`,
      name: article.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <HomeContent />
    </>
  );
}
