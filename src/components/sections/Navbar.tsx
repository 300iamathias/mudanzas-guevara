'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Phone, Mail, Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  WHATSAPP_NUMBER,
  WHATSAPP_LINK,
  PHONE_1,
  EMAIL,
  SOCIAL_LINKS,
  NAV_LINKS,
} from '@/lib/constants';

const SOCIAL_ICONS: Record<string, LucideIcon> = { Facebook, Instagram, Linkedin };

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-gold/10 shadow-lg shadow-black/20'
          : 'bg-dark-900/80 backdrop-blur-sm border-b border-gold/5'
      }`}
    >
      {/* Top Bar - Info always visible (desktop) */}
      <div className="hidden lg:block bg-dark-800/95 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-5 text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold" />
                Lun-Vie 9:00AM - 5:30PM · Mudanzas todos los días
              </span>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <Phone className="w-3.5 h-3.5 text-gold" />
                {PHONE_1}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <Mail className="w-3.5 h-3.5 text-gold" />
                {EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground mr-1">Síguenos:</span>
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-6 h-6 rounded-md bg-dark-700 hover:bg-gold flex items-center justify-center transition-all duration-200 group"
                  >
                    <Icon className="w-3.5 h-3.5 text-gold group-hover:text-dark-900 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <Image
              src="/logo-mudanzas-guevara.png"
              alt="Mudanzas Guevara Logo"
              width={44}
              height={44}
              loading="eager"
              className="rounded-lg transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-gold font-bold text-sm sm:text-base leading-tight tracking-wide">
                MUDANZAS
              </span>
              <span className="text-white font-bold text-sm sm:text-base leading-tight tracking-wide">
                GUEVARA
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-dark-900 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Cotizar Gratis
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 hover:text-gold transition-colors"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-800/98 backdrop-blur-lg border-b border-gold/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-4 text-muted-foreground hover:text-gold hover:bg-dark-700 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 bg-gold hover:bg-gold-light text-dark-900 px-5 py-3 rounded-lg font-semibold text-center transition-all"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Cotizar Gratis
              </a>

              {/* Mobile info bar - horario + contacto */}
              <div className="mt-4 pt-4 border-t border-gold/10 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Lun-Vie 9:00AM - 5:30PM · Mudanzas todos los días</span>
                </div>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{PHONE_1} · 098 949 0889</span>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors break-all">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{EMAIL}</span>
                </a>
              </div>

              {/* Mobile social media */}
              <div className="mt-4 pt-4 border-t border-gold/10">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Síguenos</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = SOCIAL_ICONS[social.icon];
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="w-11 h-11 rounded-lg bg-dark-700 hover:bg-gold flex items-center justify-center transition-all duration-200 group"
                      >
                        <Icon className="w-5 h-5 text-gold group-hover:text-dark-900 transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
