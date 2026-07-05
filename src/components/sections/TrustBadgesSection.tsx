'use client';

import { ShieldCheck, Clock, Award, Users, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { TRUST_BADGES } from '@/lib/constants';

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  Clock,
  Award,
  Users,
  Phone,
};

export function TrustBadgesSection() {
  return (
    <section className="py-8 bg-dark-900 border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {TRUST_BADGES.map((badge, i) => {
            const Icon = ICONS[badge.icon];
            return (
              <div key={i} className="flex items-center gap-2.5 text-muted-foreground">
                <Icon className="w-4 h-4 text-gold/80 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium tracking-wide">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
