import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SiteScripts from "../components/SiteScripts";

export const metadata = {
  metadataBase: new URL('https://afrique-tech-hub.vercel.app'),
  title: {
    default: "Afrique Tech Hub — Tech, Bourses & Opportunités en Afrique",
    template: "%s — Afrique Tech Hub"
  },
  description: "Apprenez le développement web, l'intelligence artificielle et découvrez les meilleures bourses d'études et opportunités de travail en ligne depuis l'Afrique francophone.",
  keywords: [
    "comment gagner de l'argent en ligne Afrique",
    "meilleurs sites freelancing débutant",
    "bourse d'étude gratuite 2026",
    "apprendre Laravel gratuitement",
    "travail a distance",
    "formation tech gratuite",
    "alx africa",
    "intelligence artificielle",
    "devenir freelance"
  ],
  authors: [{ name: "Afrique Tech Hub Editorial" }],
  creator: "Afrique Tech Hub Team",
  publisher: "Afrique Tech Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Afrique Tech Hub — Tech, Bourses & Opportunités en Afrique",
    description: "Apprenez le développement web, l'intelligence artificielle et découvrez les meilleures bourses d'études et opportunités de travail en ligne depuis l'Afrique francophone.",
    url: "https://afrique-tech-hub.vercel.app",
    siteName: "Afrique Tech Hub",
    images: [
      {
        url: "/dark_tech_bg.png",
        width: 1200,
        height: 630,
        alt: "Afrique Tech Hub Banner",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afrique Tech Hub — Tech, Bourses & Opportunités en Afrique",
    description: "Apprenez le développement web, l'intelligence artificielle et découvrez les meilleures bourses d'études et opportunités de travail en ligne depuis l'Afrique francophone.",
    images: ["/dark_tech_bg.png"],
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
    name: 'Afrique Tech Hub',
    url: 'https://afrique-tech-hub.vercel.app',
    logo: 'https://afrique-tech-hub.vercel.app/dark_tech_bg.png',
    description: 'Plateforme éducative dédiée à la jeunesse francophone africaine : développement web, intelligence artificielle, bourses d\'études et opportunités de freelancing.',
    foundingDate: '2026',
    sameAs: [],
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
    name: 'Afrique Tech Hub',
    url: 'https://afrique-tech-hub.vercel.app',
    description: 'Apprenez le développement web, l\'intelligence artificielle et découvrez les meilleures bourses d\'études et opportunités de travail en ligne depuis l\'Afrique francophone.',
    inLanguage: 'fr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://afrique-tech-hub.vercel.app/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="fr" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark light" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#070a13" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f8fafc" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
