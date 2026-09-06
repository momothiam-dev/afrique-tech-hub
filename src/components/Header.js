'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpen, User, Phone, Home, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Accueil', icon: Home },
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/about', label: 'À Propos', icon: User },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          <span className={styles.logoText}>
            Afrique<span className={styles.logoHighlight}>Tech</span>
          </span>
          <span className={styles.logoBadge}>
            <Sparkles size={14} className={styles.sparkleIcon} /> Hub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right-side actions: theme toggle + mobile menu button */}
        <div className={styles.actions}>
          <ThemeToggle />
          <button
            className={styles.mobileToggle}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ''}`}>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${isActive ? styles.mobileActiveLink : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
