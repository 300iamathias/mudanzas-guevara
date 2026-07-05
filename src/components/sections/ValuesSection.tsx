'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Users, Leaf, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { VALUES } from '@/lib/constants';
import { AnimatedSection, fadeUp } from '@/components/ui/AnimatedSection';

const ICONS: Record<string, LucideIcon> = {
  Award,
  Shield,
  Users,
  Leaf,
};

export function ValuesSection() {
  return (
    <AnimatedSection id="valores" className="py-20 sm:py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Nuestros Valores
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Lo que nos define como empresa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Los principios que guían cada mudanza y cada relación con nuestros clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value) => {
            const Icon = ICONS[value.icon];
            return (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="group bg-dark-700 border border-gold/10 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 card-glow"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Responsabilidad Corporativa banner */}
        <motion.div
          variants={fadeUp}
          className="mt-12 bg-gradient-to-r from-dark-700 to-dark-600 border border-gold/15 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
            <Heart className="w-8 h-8 text-gold" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Responsabilidad Corporativa
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Cuidamos cada mudanza, cada pertenencia y cada relación. Trabajamos con
              prácticas logísticas responsables, cuidando el entorno y contribuyendo al
              desarrollo del país con cada servicio que brindamos.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
