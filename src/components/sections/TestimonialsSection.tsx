'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { AnimatedSection, fadeUp } from '@/components/ui/AnimatedSection';

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((p) => (p + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((p) => (p + 1) % TESTIMONIALS.length);

  return (
    <AnimatedSection id="testimonios" className="py-20 sm:py-28 bg-dark-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Lo que dicen <span className="gold-shimmer">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            La confianza de quienes ya confiaron en nosotros es nuestro mejor respaldo.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card principal */}
          <div className="bg-dark-700/40 border border-white/[0.06] rounded-2xl p-8 sm:p-12 min-h-[280px] sm:min-h-[240px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                {/* Estrellas */}
                <div className="flex gap-1 mb-5 justify-center">
                  {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                {/* Quote */}
                <blockquote className="text-lg sm:text-xl text-gray-200 leading-relaxed text-center italic mb-6">
                  “{TESTIMONIALS[active].quote}”
                </blockquote>
                {/* Autor */}
                <div className="text-center">
                  <div className="text-white font-semibold">{TESTIMONIALS[active].name}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    {TESTIMONIALS[active].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-gold/40 hover:bg-gold/5 flex items-center justify-center transition-all text-muted-foreground hover:text-gold"
            >
              <ChevronDown className="w-4 h-4 rotate-90" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-gold' : 'w-1.5 bg-white/15 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Testimonio siguiente"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-gold/40 hover:bg-gold/5 flex items-center justify-center transition-all text-muted-foreground hover:text-gold"
            >
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
