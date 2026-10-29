import HomeContent from './HomeContent';
import { articles } from '../data/articles';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '../data/seo';

export const metadata = {
  title: {
    absolute: "Afrique Tech Hub — 25 guides · Bourses 2027 · Travail distance",
  },
  description:
    "25 guides gratuits pour apprendre le dev web et l'IA, financer études bourses 2027, et travailler distance en Afrique. Gratuit, sans inscription.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Afrique Tech Hub — 25 guides gratuits · Bourses 2027 · Travail à distance",
    description:
      "25 guides gratuits pour apprendre le développement web et l'IA, financer vos études avec des bourses 2027, et travailler à distance en Afrique. Tout est gratuit, sans inscription.",
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
    title: "Afrique Tech Hub — 25 guides gratuits · Bourses 2027 · Travail à distance",
    description:
      "25 guides gratuits pour apprendre le développement web et l'IA, financer vos études avec des bourses 2027, et travailler à distance en Afrique. Tout est gratuit, sans inscription.",
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
