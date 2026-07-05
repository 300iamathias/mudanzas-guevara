'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_LINK } from '@/lib/constants';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-xl shadow-green-500/30 transition-all duration-200 whatsapp-pulse hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <svg
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.72 30.876 12.764 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.302 22.602c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.668-1.218-4.762-1.97-7.826-6.81-8.064-7.126-.23-.316-1.928-2.568-1.928-4.896s1.22-3.474 1.654-3.95c.39-.432.922-.594 1.218-.594.15 0 .284.008.406.014.434.018.652.044.938.726.358.852 1.228 2.99 1.334 3.21.108.216.216.504.072.796-.136.3-.256.432-.472.684-.216.252-.422.444-.638.716-.2.236-.424.49-.178.926.246.436 1.094 1.802 2.35 2.92 1.616 1.438 2.978 1.886 3.402 2.094.346.17.756.138.99-.112.306-.316.684-.84 1.068-1.354.272-.366.616-.41.986-.276.376.13 2.366 1.116 2.774 1.32.408.204.68.306.78.476.098.17.098.982-.292 2.082z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
