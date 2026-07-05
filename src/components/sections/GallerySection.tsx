'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/constants';
import { AnimatedSection, fadeUp } from '@/components/ui/AnimatedSection';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <AnimatedSection id="galeria" className="py-20 sm:py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Galería
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Nuestro trabajo habla por nosotros
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Profesionalismo y dedicación en cada mudanza que realizamos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.src}
              variants={fadeUp}
              className={`gallery-item relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`relative ${index === 0 ? 'h-64 sm:h-80' : 'h-52 sm:h-64'}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes={index === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-gold text-sm font-semibold">{image.caption}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Galería Mudanzas Guevara"
                  fill
                  sizes="100vw"
                  className="object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-dark-900/80 hover:bg-dark-900 text-white p-2 rounded-full transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
