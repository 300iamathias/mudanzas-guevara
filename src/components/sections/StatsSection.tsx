'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { STATS } from '@/lib/constants';
import { useCountUp } from '@/lib/hooks';

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="bg-dark-800 px-5 py-7 sm:py-8 text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold tracking-tight">
        {count.toLocaleString('es-EC')}
        <span className="text-gold-light">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-dark-800 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
          {STATS.map((stat, i) => (
            <StatItem key={i} {...stat} start={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
