'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Phone } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER, PHONE_1 } from '@/lib/constants';
import { AnimatedSection, fadeUp } from '@/components/ui/AnimatedSection';

export function FinalCTASection() {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-dark-800 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para mudarte sin <span className="gold-shimmer">preocupaciones</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Cotización gratis, respuesta inmediata. Déjanos cuidar de tu mudanza
            mientras tú disfrutas de tu nuevo espacio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gold hover:bg-gold-light text-dark-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-gold/25 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Cotiza por WhatsApp
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="group border border-gold/30 hover:border-gold/60 text-gold px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-gold/5 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              {PHONE_1}
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
