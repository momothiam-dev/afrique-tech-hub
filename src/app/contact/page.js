import ContactContent from './ContactContent';

export const metadata = {
  title: "Contactez-nous",
  description: "Une question, une proposition de partenariat ou envie de contribuer à Afrique Tech Hub ? Contactez notre équipe éditoriale.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contactez-nous — Afrique Tech Hub",
    description: "Une question, une proposition de partenariat ou envie de contribuer à Afrique Tech Hub ? Contactez notre équipe éditoriale.",
    url: "https://afrique-tech-hub.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
