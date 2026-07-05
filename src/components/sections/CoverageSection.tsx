'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';
import { ADDRESS } from '@/lib/constants';
import { AnimatedSection, fadeUp } from '@/components/ui/AnimatedSection';

export function CoverageSection() {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Cobertura
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Llegamos a todo el Ecuador
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Con sedes principales en Guayaquil y Quito, y cobertura nacional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUp}
            className="bg-dark-700 border border-gold/10 rounded-2xl p-8 card-glow transition-all duration-300"
          >
            <MapPin className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Guayaquil</h3>
            <p className="text-muted-foreground mb-3">
              Sede principal. Cobertura completa en la ciudad y zona metropolitana.
            </p>
            <p className="text-gold text-sm font-medium">{ADDRESS}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-dark-700 border border-gold/10 rounded-2xl p-8 card-glow transition-all duration-300"
          >
            <MapPin className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Quito</h3>
            <p className="text-muted-foreground">
              Sede en la capital. Mudanzas locales y de larga distancia con la
              misma calidad y profesionalismo.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-8 bg-gold/5 border border-gold/15 rounded-2xl p-8 text-center"
        >
          <Globe className="w-10 h-10 text-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Cobertura Nacional</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Realizamos mudanzas a cualquier ciudad del Ecuador: Cuenca, Manta, Portoviejo,
            Loja, Ambato, Riobamba, Santo Domingo y más. Consulta disponibilidad para tu destino.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
