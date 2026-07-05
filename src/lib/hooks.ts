'use client';

import { useEffect, useState, useRef } from 'react';

// ─── Hook: CountUp (animación de números al hacer scroll) ───────
export function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

// ─── Hook: Magnetic Button (efecto sutil de seguir cursor) ──────
export function useMagnetic(strength = 0.25) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Desactivar en móvil/táctil
    if (window.matchMedia('(hover: none)').matches) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = 'translate(0px, 0px)';
    };
    el.addEventListener('mousemove', onMove as EventListener);
    el.addEventListener('mouseleave', onLeave as EventListener);
    return () => {
      el.removeEventListener('mousemove', onMove as EventListener);
      el.removeEventListener('mouseleave', onLeave as EventListener);
    };
  }, [strength]);
  return ref;
}

// ─── Smooth Scroll (Lenis-like, nativo + offset) ────────────────
export function SmoothScroll() {
  useEffect(() => {
    // Offset para navbar fijo al hacer click en anchors
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const id = target.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    };
    document.addEventListener('click', onClick as EventListener);
    return () => document.removeEventListener('click', onClick as EventListener);
  }, []);
  return null;
}
