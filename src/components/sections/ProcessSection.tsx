'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ClipboardCheck, Package, Truck, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';
import { AnimatedSection, fadeUp } from '@/components/ui/AnimatedSection';

const ICONS: Record<string, LucideIcon> = {
  MessageCircle,
  ClipboardCheck,
  Package,
  Truck,
  CheckCircle2,
};

export function ProcessSection() {
  return (
    <AnimatedSection id="proceso" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Cómo Trabajamos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Tu mudanza en <span className="gold-shimmer">5 pasos simples</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un proceso claro y transparente, desde el primer contacto hasta la entrega final.
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea horizontal desktop */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-3">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICONS[step.icon];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative text-center lg:text-left"
                >
                  <div className="flex flex-col lg:flex-row lg:flex-col items-center lg:items-start">
                    <div className="relative w-14 h-14 rounded-full bg-dark-700 border border-gold/20 flex items-center justify-center mb-4 mx-auto lg:mx-0 flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                      <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gold text-dark-900 text-[10px] font-bold flex items-center justify-center">
                        {step.num}
                      </span>
                    </div>
                    <div className="lg:pl-0">
                      <h3 className="text-base font-semibold text-white mb-1.5">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
