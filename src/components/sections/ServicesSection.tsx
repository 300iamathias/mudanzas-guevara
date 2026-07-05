'use client';

import { motion } from 'framer-motion';
import { Box, Warehouse, ClipboardCheck, Package, Globe, Shield, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { AnimatedSection, fadeUp } from '@/components/ui/AnimatedSection';

const ICONS: Record<string, LucideIcon> = {
  Box,
  Warehouse,
  ClipboardCheck,
  Package,
  Globe,
  Shield,
};

export function ServicesSection() {
  return (
    <AnimatedSection id="servicios" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Soluciones completas para tu mudanza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Desde la inspección técnica hasta la entrega final, nos encargamos de cada detalle con profesionalismo y cuidado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group bg-dark-700 border border-gold/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 card-glow hover:bg-dark-600"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Why choose us */}
        <motion.div variants={fadeUp} className="mt-20 bg-dark-700/50 border border-gold/10 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            ¿Por qué elegirnos?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Personal capacitado y de confianza',
              'Vehículos propios y equipados',
              'Embalaje con materiales premium',
              'Inspección técnica previa gratuita',
              'Puntualidad y cumplimiento',
              'Cobertura a todo el Ecuador',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
