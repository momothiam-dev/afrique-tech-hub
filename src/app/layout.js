import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Afrique Tech Hub — Tech, Bourses & Opportunités en Afrique",
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
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-69QYDPXNK6');
            `,
          }}
        />
        {/* Open Graph */}
        <meta property="og:title" content="Afrique Tech Hub — Tech, Bourses & Opportunités en Afrique" />
        <meta property="og:description" content="Apprenez le développement web, l'intelligence artificielle et découvrez les meilleures bourses d'études et opportunités de travail en ligne depuis l'Afrique francophone." />
        <meta property="og:image" content="/dark_tech_bg.png" />
        <meta property="og:url" content="https://afrique-tech-47g2pjulb-momothiam-devs-projects.vercel.app/" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
