'use client';

import { useState } from 'react';
import { Mail, MessageSquare, HelpCircle, ChevronDown, Sparkles, Send, MapPin, Globe } from 'lucide-react';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'general', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Comment proposer un article ou devenir rédacteur ?',
      a: 'Nous sommes constamment à la recherche de passionnés du numérique pour enrichir la plateforme. Si vous souhaitez rédiger un guide pratique ou partager une opportunité, contactez-nous via le formulaire en choisissant le sujet "Proposition d\'article". Expliquez brièvement votre parcours et proposez 2 ou 3 thématiques.'
    },
    {
      q: 'Les opportunités et bourses présentées sont-elles fiables ?',
      a: 'Absolument. Chaque opportunité, bourse d\'études ou plateforme de freelancing fait l\'objet d\'une vérification manuelle approfondie par notre équipe avant publication. Nous ne publions jamais d\'offres demandant des paiements préalables ou promettant un enrichissement sans travail.'
    },
    {
      q: 'Puis-je copier et utiliser le contenu du site ?',
      a: 'Le contenu de nos articles est protégé par les droits d\'auteur d\'Afrique Tech Hub. Vous pouvez citer de courts extraits en ajoutant obligatoirement un lien hypertexte direct vers notre article d\'origine. Toute reproduction intégrale sans autorisation écrite préalable est strictement interdite.'
    },
    {
      q: 'Comment être informé des nouvelles opportunités ?',
      a: 'Le moyen le plus simple est de vous inscrire à notre newsletter "Club Privé" directement sur notre page d\'accueil. Vous recevrez un résumé hebdomadaire par e-mail avec les toutes dernières bourses publiées et les offres de télétravail.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'general', message: '' });
      
      // Auto-reset success state after 6 seconds
      setTimeout(() => setSubmitted(false), 6000);
    }, 1500);
  };

  return (
    <div className={styles.main}>
      {/* Page Header */}
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>
            Contactez-<span className="text-gradient">Notre Équipe</span>
          </h1>
          <p className={styles.subtitle}>
            Une question sur un article, une suggestion ou une proposition de collaboration ? Envoyez-nous un message et nous vous répondrons sous 48 heures.
          </p>
        </div>
      </section>

      {/* Grid: Contact Form & FAQ Accordion */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          
          <div className={styles.gridContainer}>
            
            {/* Column 1: Contact Form & Info */}
            <div className={styles.leftCol}>
              
              {/* Form Block */}
              <div className={`${styles.formWidget} glass-card`}>
                {submitted ? (
                  <div className={styles.successState}>
                    <Sparkles size={48} className={styles.successIcon} />
                    <h3 className={styles.successTitle}>Votre message a été envoyé !</h3>
                    <p className={styles.successText}>
                      Merci d'avoir pris le temps de nous écrire. Notre équipe de modération étudiera votre demande et vous répondra très rapidement sur votre adresse email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formGroupRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Nom complet</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Votre nom"
                          className={styles.input}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Adresse email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre@email.com"
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.label}>Sujet du message</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={styles.select}
                      >
                        <option value="general">Question générale / Demande d'information</option>
                        <option value="article">Proposition d'article / Contribution</option>
                        <option value="bug">Signaler un problème technique / Bug</option>
                        <option value="partnership">Partenariat / Publicité</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>Votre message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Rédigez votre message ici..."
                        className={styles.textarea}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary ${styles.submitBtn}`}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon message'}
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>

              {/* Quick Info Cards */}
              <div className={styles.infoGrid}>
                <div className={`${styles.infoCard} glass-card`}>
                  <Mail className={styles.infoIcon} size={20} />
                  <div>
                    <h4 className={styles.infoCardTitle}>Email Direct</h4>
                    <p className={styles.infoCardText}>contact@afriquetechhub.com</p>
                  </div>
                </div>

                <div className={`${styles.infoCard} glass-card`}>
                  <MapPin className={styles.infoIcon} size={20} />
                  <div>
                    <h4 className={styles.infoCardTitle}>Siège Social</h4>
                    <p className={styles.infoCardText}>Dakar, Sénégal</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Column 2: Accordion FAQ */}
            <div className={styles.rightCol}>
              <div className={styles.faqHeader}>
                <HelpCircle size={22} className={styles.faqHeaderIcon} />
                <h2 className={styles.faqTitle}>Foire Aux Questions (FAQ)</h2>
              </div>
              <p className={styles.faqSubtitle}>
                Pour gagner du temps, jetez un œil aux questions fréquentes de nos lecteurs avant de nous envoyer un message !
              </p>

              <div className={styles.faqList}>
                {faqs.map((faq, index) => {
                  const isOpened = openFaq === index;
                  return (
                    <div 
                      key={index} 
                      className={`${styles.faqItem} glass-card ${isOpened ? styles.faqItemActive : ''}`}
                    >
                      <button 
                        onClick={() => toggleFaq(index)} 
                        className={styles.faqTrigger}
                        aria-expanded={isOpened}
                      >
                        <span className={styles.faqQuestion}>{faq.q}</span>
                        <ChevronDown 
                          size={18} 
                          className={`${styles.faqArrow} ${isOpened ? styles.faqArrowOpen : ''}`} 
                        />
                      </button>
                      <div className={`${styles.faqContent} ${isOpened ? styles.faqContentOpen : ''}`}>
                        <div className={styles.faqAnswer}>
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
