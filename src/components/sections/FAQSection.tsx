'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQS, WHATSAPP_LINK } from '@/lib/constants';
import { AnimatedSection, fadeUp } from '@/components/ui/AnimatedSection';

export function FAQSection() {
  return (
    <AnimatedSection id="faq" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Todo lo que necesitas saber antes de tu mudanza. ¿Tienes otra pregunta? Escríbenos.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-dark-700 border border-gold/10 rounded-xl px-6 transition-all hover:border-gold/30"
              >
                <AccordionTrigger className="text-left text-white font-semibold text-base sm:text-lg hover:no-underline hover:text-gold transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA after FAQ */}
        <motion.div variants={fadeUp} className="mt-12 text-center">
          <p className="text-muted-foreground mb-5">
            ¿Tienes una pregunta que no está aquí?
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-dark-900 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
          >
            <MessageCircle className="w-5 h-5" />
            Pregúntanos por WhatsApp
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
