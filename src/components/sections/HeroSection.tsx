'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MessageCircle, ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER, PHONE_1 } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/components/ui/AnimatedSection';

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-moving.png"
          alt="Mudanzas Guevara - Servicio profesional de mudanzas"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-gold" />
              Cotización Gratis — Sin compromiso
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Mudarte sin</span>
            <br />
            <span className="gold-shimmer">preocupaciones</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Logística, transporte y mudanza profesional en Guayaquil, Quito y
            todo el Ecuador. Cuidamos cada detalle para que tu mudanza sea una experiencia tranquila.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gold hover:bg-gold-light text-dark-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-gold/25 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Cotiza por WhatsApp
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="group border border-gold/30 hover:border-gold/60 text-gold px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-gold/5 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              {PHONE_1}
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gold/60" />
        </motion.div>
      </div>
    </section>
  );
}
