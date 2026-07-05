'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  WHATSAPP_NUMBER,
  WHATSAPP_LINK,
  PHONE_1,
  PHONE_2,
  EMAIL,
  ADDRESS,
  JIMBRA_LINK,
  SOCIAL_LINKS,
  NAV_LINKS,
} from '@/lib/constants';

const SOCIAL_ICONS: Record<string, LucideIcon> = { Facebook, Instagram, Linkedin };

export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-gold/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-mudanzas-guevara.png"
                alt="Mudanzas Guevara Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <div className="text-gold font-bold text-sm leading-tight">MUDANZAS</div>
                <div className="text-white font-bold text-sm leading-tight">GUEVARA</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-md">
              Logística, transporte y mudanza profesional en Guayaquil, Quito y todo el Ecuador.
              Más de 10 años moviendo Ecuador con confianza.
            </p>
            {/* Social Media in footer */}
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
                    className="w-10 h-10 rounded-lg bg-dark-700 hover:bg-gold flex items-center justify-center transition-all duration-200 group"
                  >
                    <Icon className="w-4 h-4 text-gold group-hover:text-dark-900 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {PHONE_1}
              </a>
              <a
                href="tel:+593989490889"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {PHONE_2}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm break-all"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Lun-Vie 9AM-5:30PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-8 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Mudanzas Guevara. Todos los derechos reservados.
          </p>
          <a
            href={JIMBRA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors text-sm font-medium"
          >
            Hecho por <span className="text-gold font-semibold">Jimbra</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
