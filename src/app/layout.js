import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  return (
    <html lang="fr" data-theme="dark">
      <head>
        <meta name="google-site-verification" content="jzqb38HD-emPPu68PIybIxgT9N711K2zIuNfQmBTCXY" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-69QYDPXNK6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-69QYDPXNK6');
            `,
          }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6305468777731932"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
