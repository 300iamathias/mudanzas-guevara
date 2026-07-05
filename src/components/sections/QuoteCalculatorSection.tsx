'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { AnimatedSection, fadeUp } from '@/components/ui/AnimatedSection';

const SIZES = [
  { value: 'depto', label: 'Departamento' },
  { value: 'casa', label: 'Casa' },
  { value: 'oficina', label: 'Oficina' },
  { value: 'depot', label: 'Depósito/Local' },
];

export function QuoteCalculatorSection() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [size, setSize] = useState('');
  const [date, setDate] = useState('');

  const buildWhatsAppLink = () => {
    const sizeLabel = SIZES.find((s) => s.value === size)?.label || 'No especificado';
    const msg = [
      'Hola, quiero una cotización para mudanza. 🚚',
      '',
      `📍 Origen: ${origin || 'Por confirmar'}`,
      `🎯 Destino: ${destination || 'Por confirmar'}`,
      `🏠 Tipo: ${sizeLabel}`,
      `📅 Fecha preferida: ${date || 'Por coordinar'}`,
      '',
      'Gracias.',
    ].join('\n');
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <AnimatedSection className="py-20 sm:py-24 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          className="bg-dark-700/40 border border-white/[0.06] rounded-2xl p-7 sm:p-10"
        >
          <div className="text-center mb-8">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Cotización Rápida
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-2">
              Arma tu cotización en 30 segundos
            </h2>
            <p className="text-muted-foreground text-sm">
              Completa los datos y te contactamos por WhatsApp con todo listo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Ciudad/sector de origen
              </label>
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Ej: Urdesa, Guayaquil"
                className="w-full bg-dark-800/60 border border-white/[0.06] focus:border-gold/40 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/60 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Ciudad/sector de destino
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Ej: Samborondón"
                className="w-full bg-dark-800/60 border border-white/[0.06] focus:border-gold/40 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/60 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                ¿Qué mudas?
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full bg-dark-800/60 border border-white/[0.06] focus:border-gold/40 rounded-lg px-4 py-2.5 text-sm text-white outline-none transition-colors"
              >
                <option value="">Selecciona...</option>
                {SIZES.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Fecha preferida
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-dark-800/60 border border-white/[0.06] focus:border-gold/40 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/60 outline-none transition-colors"
                style={{ colorScheme: 'dark' }}
              />
            </div>
          </div>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full bg-[#25D366] hover:bg-[#1FB855] text-white rounded-xl py-3.5 px-6 flex items-center justify-center gap-3 font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Enviar cotización por WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-center text-xs text-muted-foreground mt-3">
            Sin compromiso · Respuesta inmediata · Cotización gratis
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
