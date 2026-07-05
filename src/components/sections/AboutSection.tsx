'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Clock, Star, Box } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedSection, fadeUp } from '@/components/ui/AnimatedSection';

const BADGES: { icon: LucideIcon; text: string }[] = [
  { icon: Shield, text: 'Seguridad total' },
  { icon: Clock, text: 'Puntualidad garantizada' },
  { icon: Star, text: 'Calidad premium' },
  { icon: Box, text: 'Embalaje profesional' },
];

export function AboutSection() {
  return (
    <AnimatedSection id="nosotros" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div variants={fadeUp}>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              ¿Quiénes Somos?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Más de 10 años moviendo Ecuador con confianza
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              En <span className="text-gold font-semibold">Mudanzas Guevara</span> entendemos
              que mudarse es mucho más que trasladar cosas: es un cambio de vida. Por eso,
              cada servicio que brindamos está diseñado para que tu experiencia sea tranquila,
              segura y sin contratiempos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Somos una empresa ecuatoriana especializada en logística, transporte y mudanza.
              Con sede en Guayaquil y cobertura en Quito y todo el país, ofrecemos el mismo
              nivel de excelencia y compromiso que nos caracteriza.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {BADGES.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3 bg-dark-700/50 rounded-lg p-3">
                    <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/gallery-wrapping.png"
                alt="Equipo de Mudanzas Guevara protegiendo mobiliario"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-dark-900 rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm font-medium">Años de experiencia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
