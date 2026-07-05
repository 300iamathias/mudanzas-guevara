'use client';

import { motion } from 'framer-motion';
import {
  Clock,
  Phone,
  Mail,
  MapPin,
  Heart,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  WHATSAPP_NUMBER,
  WHATSAPP_LINK,
  PHONE_1,
  PHONE_2,
  EMAIL,
  ADDRESS,
  SOCIAL_LINKS,
} from '@/lib/constants';
import { AnimatedSection, fadeUp } from '@/components/ui/AnimatedSection';

const SOCIAL_ICONS: Record<string, LucideIcon> = { Facebook, Instagram, Linkedin };

export function ContactSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    ADDRESS + ', Ecuador'
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <AnimatedSection id="contacto" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Estamos disponibles para ti
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cotización gratis, respuesta inmediata. Déjanos cuidar de tu mudanza.
          </p>
        </motion.div>

        {/* ═══ Horario de Atención — elegante, sin bordes pesados ═══ */}
        <motion.div variants={fadeUp} className="mb-5">
          <div className="bg-dark-700/40 border border-white/[0.06] rounded-2xl p-6 sm:p-7">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
              <div className="flex items-center gap-3 lg:w-[240px] lg:flex-shrink-0">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-tight">Horario de Atención</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Siempre disponibles</p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
                <div className="bg-dark-800/80 px-5 py-4">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-1.5">Oficina</div>
                  <div className="text-white font-medium text-sm">Lun — Vie</div>
                  <div className="text-gold font-semibold text-base mt-0.5">9:00 — 17:30</div>
                </div>
                <div className="bg-dark-800/80 px-5 py-4">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-1.5">Mudanzas</div>
                  <div className="text-white font-medium text-sm">Todos los días</div>
                  <div className="text-gold font-semibold text-base mt-0.5">Incluido fines de semana</div>
                </div>
                <div className="bg-dark-800/80 px-5 py-4">
                  <div className="text-[10px] text-gold/70 uppercase tracking-[0.15em] mb-1.5 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Emergencias
                  </div>
                  <div className="text-white font-medium text-sm">24 horas</div>
                  <div className="text-gold font-semibold text-base mt-0.5">7 días a la semana</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══ Síguenos en Redes — elegante, minimal ═══ */}
        <motion.div variants={fadeUp} className="mb-10">
          <div className="bg-dark-700/40 border border-white/[0.06] rounded-2xl p-6 sm:p-7">
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
              <div className="flex items-center gap-3 lg:w-[240px] lg:flex-shrink-0">
                <Heart className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-tight">Síguenos en Redes</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Novedades y promociones</p>
                </div>
              </div>
              <div className="flex-1 flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="group inline-flex items-center gap-3 bg-dark-800/60 hover:bg-gold border border-white/[0.06] hover:border-gold rounded-full pl-3 pr-5 py-2.5 transition-all duration-300"
                    >
                      <span className="w-8 h-8 rounded-full bg-gold/10 group-hover:bg-dark-900/20 flex items-center justify-center transition-colors">
                        <Icon className="w-4 h-4 text-gold group-hover:text-dark-900 transition-colors" />
                      </span>
                      <span className="text-sm font-medium text-white group-hover:text-dark-900 transition-colors">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info cards */}
          <motion.div variants={fadeUp} className="space-y-4">
            {/* Phones */}
            <div className="bg-dark-700/40 border border-white/[0.06] rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <Phone className="w-4 h-4 text-gold" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Llámanos</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-2.5 bg-dark-800/60 hover:bg-dark-600 border border-white/[0.04] hover:border-gold/40 rounded-lg px-3.5 py-2.5 transition-all group"
                >
                  <Phone className="w-3.5 h-3.5 text-gold/70 group-hover:text-gold flex-shrink-0 transition-colors" />
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Principal</div>
                    <div className="text-white text-sm font-medium group-hover:text-gold transition-colors">{PHONE_1}</div>
                  </div>
                </a>
                <a
                  href="tel:+593989490889"
                  className="flex items-center gap-2.5 bg-dark-800/60 hover:bg-dark-600 border border-white/[0.04] hover:border-gold/40 rounded-lg px-3.5 py-2.5 transition-all group"
                >
                  <Phone className="w-3.5 h-3.5 text-gold/70 group-hover:text-gold flex-shrink-0 transition-colors" />
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Secundario</div>
                    <div className="text-white text-sm font-medium group-hover:text-gold transition-colors">{PHONE_2}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="block bg-dark-700/40 border border-white/[0.06] hover:border-gold/40 rounded-2xl p-5 sm:p-6 transition-all group"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <Mail className="w-4 h-4 text-gold" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Email</h3>
              </div>
              <p className="text-white font-medium group-hover:text-gold transition-colors">
                {EMAIL}
              </p>
              <p className="text-muted-foreground text-xs mt-1">Escríbenos y te respondemos pronto</p>
            </a>

            {/* Address */}
            <div className="bg-dark-700/40 border border-white/[0.06] rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <MapPin className="w-4 h-4 text-gold" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Dirección</h3>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">{ADDRESS}</p>
              <p className="text-muted-foreground text-xs mt-1.5">Guayaquil, Ecuador</p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#25D366] hover:bg-[#1FB855] text-white rounded-2xl p-5 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="flex items-center gap-3.5">
                <MessageCircle className="w-6 h-6 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-base font-semibold">Escríbenos por WhatsApp</h3>
                  <p className="text-white/80 text-xs mt-0.5">
                    Respuesta inmediata · Cotiza en minutos
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </motion.div>

          {/* Map */}
          <motion.div variants={fadeUp} className="bg-dark-700/40 border border-white/[0.06] rounded-2xl overflow-hidden flex flex-col">
            <div className="p-5 border-b border-white/[0.06] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">Nuestra Ubicación</span>
              </div>
              <a
                href="https://maps.app.goo.gl/QbqoKCd29TPku5PJA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-gold transition-colors flex items-center gap-1"
              >
                Ver en Google Maps
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div className="map-container flex-1 min-h-[400px] lg:min-h-[500px]">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Mudanzas Guevara en Guayaquil"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
