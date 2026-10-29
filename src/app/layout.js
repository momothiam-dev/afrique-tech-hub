import { Inter, Outfit } from 'next/font/google';
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SiteScripts from "../components/SiteScripts";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "../data/seo";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Afrique Tech Hub — Tech, bourses & opportunités",
    template: "%s — Afrique Tech Hub",
  },
  description:
    "Guides gratuits pour apprendre la tech, décrocher une bourse et travailler en ligne depuis l'Afrique francophone : développement web, IA, freelancing et études.",
  keywords: [
    "tech Afrique francophone",
    "gagner de l'argent en ligne Afrique",
    "bourse d'étude 2027",
    "apprendre le développement web",
    "formation tech gratuite",
    "travail à distance Afrique",
    "freelancing Afrique",
    "intelligence artificielle Afrique",
    "ALX Africa",
    "métiers tech",
  ],
  authors: [{ name: "Afrique Tech Hub Editorial", url: `${SITE_URL}/about` }],
  creator: "Afrique Tech Hub Team",
  publisher: "Afrique Tech Hub",
  category: "education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Afrique Tech Hub — Tech, bourses & opportunités",
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
    title: "Afrique Tech Hub — Tech, bourses & opportunités",
    description:
      "Guides gratuits pour apprendre la tech, décrocher une bourse et travailler en ligne depuis l'Afrique francophone.",
    images: [DEFAULT_OG_IMAGE],
    creator: "@AfriqueTechHub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    description:
      "Plateforme éducative indépendante dédiée à la jeunesse francophone africaine : développement web, intelligence artificielle, bourses d'études et opportunités de freelancing.",
    foundingDate: '2026',
    email: 'contact@afriquetechhub.com',
    knowsLanguage: ['fr'],
    areaServed: {
      '@type': 'Place',
      name: 'Afrique francophone',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@afriquetechhub.com',
      contactType: 'customer service',
      availableLanguage: 'French',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dakar',
      addressCountry: 'SN',
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Guides gratuits pour apprendre la tech, décrocher une bourse et travailler en ligne depuis l'Afrique francophone.",
    inLanguage: 'fr',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html
      lang="fr"
      data-theme="dark"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="dark light" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#070a13" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f8fafc" />
        {/* Apply saved theme before first paint to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('afh-theme');
                  if (saved === 'light' || saved === 'dark') {
                    document.documentElement.setAttribute('data-theme', saved);
                  }
                } catch (err) {}
              })();
            `,
          }}
        />
        <meta name="google-site-verification" content="jzqb38HD-emPPu68PIybIxgT9N711K2zIuNfQmBTCXY" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        {/* Analytics loaded outside React's tree to avoid hydration mismatches */}
        <SiteScripts />
      </body>
    </html>
  );
}
