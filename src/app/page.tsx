'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Linkedin,
  Menu, X, ChevronDown, Star, Truck, Shield, Box, Package, Warehouse, Globe,
  ClipboardCheck, Award, Users, Leaf, ShieldCheck, CheckCircle2,
  Send, Sparkles, Quote,
} from 'lucide-react';

// ─── Constants ───────────────────────────────────────────────────
const WHATSAPP_NUMBER = '593978939281';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola, me interesa una cotización para mudanza. 🚚'
)}`;
const PHONE_1 = '097 893 9281';
const PHONE_2 = '098 949 0889';
const PHONE_1_TEL = '+593978939281';
const EMAIL = 'info@mudanzasguevara.com';
const ADDRESS = 'Calle 1 de Mayo 1006 y Tulcán, Edificio Harca, Guayaquil';
const JIMBRA_LINK = 'https://jimbra.net';

const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/mudanzasguevaraec', icon: Facebook },
  { name: 'Instagram', url: 'https://instagram.com/mudanzasguevara', icon: Instagram },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/mudanzasguevara', icon: Linkedin },
] as const;

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#cotizador', label: 'Cotizador' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#galeria', label: 'Galería' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
] as const;

const SERVICES = [
  {
    icon: Box,
    title: 'Mudanza Hogar',
    description:
      'Traslado seguro de tu hogar. Cuidamos cada mueble, electrodoméstico y objeto personal como si fuera nuestro. Tu tranquilidad es nuestra prioridad.',
  },
  {
    icon: Warehouse,
    title: 'Mudanza Empresas',
    description:
      'Logística profesional para oficinas y empresas. Minimizamos tiempos de paralización con un servicio eficiente y coordinado al detalle.',
  },
  {
    icon: ClipboardCheck,
    title: 'Inspección Técnica',
    description:
      'Visita previa de evaluación para dimensionar tu mudanza con precisión. Cotización exacta, sin sorpresas, con un plan de trabajo claro.',
  },
  {
    icon: Package,
    title: 'Embalaje y Empaque',
    description:
      'Empacamos y protegemos tus pertenencias con materiales de primera calidad. Cero riesgos, cero preocupaciones, todo llega intacto.',
  },
  {
    icon: Globe,
    title: 'Cobertura Nacional',
    description:
      'Guayaquil, Quito y todo el Ecuador. Traslados locales y de larga distancia con la misma calidad y compromiso en cada kilómetro.',
  },
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description:
      'Personal capacitado, vehículos equipados y protocolos de cuidado. Tus pertenencias están protegidas de principio a fin.',
  },
] as const;

const VALUES = [
  { icon: Award, title: 'Excelencia', description: 'Buscamos la más alta calidad en cada servicio, con atención al detalle en cada mudanza.' },
  { icon: Shield, title: 'Confianza', description: 'Construimos relaciones duraderas basadas en la transparencia y el cumplimiento.' },
  { icon: Users, title: 'Compromiso', description: 'Nos involucramos con cada cliente como si fuera el único, porque tu mudanza nos importa.' },
  { icon: Leaf, title: 'Responsabilidad', description: 'Cuidamos tus bienes y nuestro entorno, con prácticas logísticas responsables.' },
] as const;

const STATS = [
  { value: 10, suffix: '+', label: 'Años de experiencia' },
  { value: 2000, suffix: '+', label: 'Mudanzas realizadas' },
  { value: 1500, suffix: '+', label: 'Clientes felices' },
  { value: 100, suffix: '%', label: 'Mercancía asegurada' },
] as const;

const PROCESS_STEPS = [
  { num: '01', icon: MessageCircle, title: 'Cotización Gratis', description: 'Escríbenos por WhatsApp o llámanos. Te damos una cotización sin compromiso en minutos.' },
  { num: '02', icon: ClipboardCheck, title: 'Inspección Técnica', description: 'Visitamos tu lugar para evaluar el volumen y detalles. Cotización exacta, sin sorpresas.' },
  { num: '03', icon: Package, title: 'Embalaje Profesional', description: 'Empacamos tus pertenencias con materiales de primera. Cada objeto, protegido.' },
  { num: '04', icon: Truck, title: 'Transporte Seguro', description: 'Vehículos equipados y personal capacitado. Traslado puntual y cuidado en cada kilómetro.' },
  { num: '05', icon: CheckCircle2, title: 'Entrega Feliz', description: 'Todo llega intacto a su destino. Tu nueva etapa empieza sin estrés, sin preocupaciones.' },
] as const;

const TESTIMONIALS = [
  { name: 'María Fernanda López', role: 'Mudanza de hogar · Urdesa', quote: 'Excelente servicio. Llegaron puntuales, cuidaron cada mueble como si fuera propio. Súper recomendados, mi mudanza fue sin estrés.', rating: 5 },
  { name: 'Carlos Andrés Mendoza', role: 'Mudanza empresarial · Centro', quote: 'Mudamos toda la oficina en un día sin paralizar operaciones. Profesionalismo de principio a fin. Definitivamente los volveré a contratar.', rating: 5 },
  { name: 'Patricia Salazar', role: 'Mudanza a Cuenca', quote: 'Traslado de Guayaquil a Cuenca perfecto. Comunicación constante durante todo el viaje. Todo llegó intacto. Mil gracias.', rating: 5 },
  { name: 'Javier Robles', role: 'Mudanza de hogar · Samborondón', quote: 'El embalaje fue impecable. Mis cosas frágiles llegaron sin un rasguño. Personal amable y muy cuidadoso. 10/10.', rating: 5 },
] as const;

const TRUST_BADGES = [
  { icon: ShieldCheck, label: 'Mercancía Asegurada' },
  { icon: Clock, label: 'Puntualidad Garantizada' },
  { icon: Award, label: 'Empresa Registrada' },
  { icon: Users, label: 'Personal Capacitado' },
  { icon: Phone, label: 'Soporte 24/7' },
  { icon: MapPin, label: 'Cobertura Nacional' },
] as const;

const GALLERY_IMAGES = [
  { src: '/hero-moving.png', alt: 'Equipo profesional de mudanzas cargando mobiliario', caption: 'Servicio profesional' },
  { src: '/gallery-packing.png', alt: 'Cajas de mudanza en nuevo hogar', caption: 'Embalaje cuidadoso' },
  { src: '/gallery-truck.png', alt: 'Camión de mudanza en ruta', caption: 'Transporte seguro' },
  { src: '/gallery-wrapping.png', alt: 'Protección profesional de mobiliario', caption: 'Protección total' },
  { src: '/gallery-family.png', alt: 'Familia feliz en su nuevo hogar', caption: 'Nuevos comienzos' },
] as const;

const FAQS = [
  { question: '¿Hacen cotización gratis?', answer: '¡Sí! La cotización es totalmente gratuita y sin compromiso. Escríbenos por WhatsApp o llámanos y te daremos una estimación personalizada según tus necesidades.' },
  { question: '¿Qué áreas cubren?', answer: 'Tenemos sedes en Guayaquil y Quito, con cobertura a todo el Ecuador. Realizamos mudanzas locales y de larga distancia a cualquier ciudad del país: Cuenca, Manta, Portoviejo, Loja, Ambato, Riobamba, Santo Domingo y más.' },
  { question: '¿Empacan mis pertenencias?', answer: 'Sí, ofrecemos servicio completo de embalaje y empaque con materiales de primera calidad. Nuestro equipo protege cada objeto para que llegue intacto a su destino. También puedes empacar tú mismo si lo prefieres.' },
  { question: '¿Necesito agendar con anticipación?', answer: 'Recomendamos agendar con anticipación para asegurar la fecha que necesitas, especialmente en temporadas altas. Sin embargo, también atendemos mudanzas de emergencia — contáctanos y haremos lo posible por ayudarte.' },
  { question: '¿Cuáles son sus horarios de atención?', answer: 'Nuestra oficina atiende de lunes a viernes de 9:00 AM a 5:30 PM. Sin embargo, realizamos mudanzas todos los días, incluyendo fines de semana. Para emergencias, estamos disponibles 24/7.' },
  { question: '¿Cómo se calcula el precio de la mudanza?', answer: 'El precio depende del volumen de pertenencias, la distancia, los servicios adicionales (embalaje, desmontaje) y la complejidad del traslado. Por eso ofrecemos la inspección técnica previa para darte una cotización exacta.' },
  { question: '¿Hacen inspección técnica previa?', answer: '¡Sí! Realizamos una visita técnica para evaluar el volumen, accesos y necesidades específicas de tu mudanza. Así te entregamos una cotización precisa, sin sorpresas ni costos ocultos.' },
  { question: '¿Aseguran mis pertenencias durante el traslado?', answer: 'Trabajamos con protocolos de seguridad y cuidado en cada etapa del proceso. Nuestro personal está capacitado y nuestros vehículos están equipados para proteger tus bienes durante toda la mudanza.' },
] as const;

const COVERAGE_CITIES = [
  'Guayaquil', 'Quito', 'Cuenca', 'Manta', 'Portoviejo', 'Loja', 'Ambato',
  'Riobamba', 'Santo Domingo', 'Machala', 'Esmeraldas', 'Quevedo', 'Babahoyo', 'Milagro',
] as const;

// ─── Hooks ──────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function useSmoothScroll() {
  useEffect(() => {
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
}

// ─── SW Cleanup: desinstalar service workers viejos que cachean ──
function useSWCleanup() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;
    // Desregistrar TODOS los service workers — eliminan caches viejos
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => reg.unregister());
    });
    // Limpiar todos los caches del navegador
    if ('caches' in window) {
      caches.keys().then((names) => names.forEach((n) => caches.delete(n)));
    }
  }, []);
}

// ─── Reusable bits ──────────────────────────────────────────────
function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
      <span className="h-px w-6 bg-gold/50" />
      {children}
    </div>
  );
}

function GoldButton({
  href,
  children,
  className = '',
  external = false,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-dark-900 transition-all hover:bg-gold-light hover:shadow-[0_8px_30px_rgba(212,168,83,0.25)] ${className}`}
    >
      {children}
    </a>
  );
}

function OutlineButton({
  href,
  children,
  className = '',
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold/40 hover:bg-white/[0.05] ${className}`}
    >
      {children}
    </a>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────
function TopBar() {
  return (
    <div className="hidden md:block border-b border-white/[0.06] bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-2 text-xs">
        <div className="flex items-center gap-4 text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gold" />
            Lun-Vie 9:00AM - 5:30PM · Mudanzas todos los días
          </span>
        </div>
        <div className="flex items-center gap-5 text-white/70">
          <a href={`tel:${PHONE_1_TEL}`} className="inline-flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone className="h-3.5 w-3.5 text-gold" />
            {PHONE_1}
          </a>
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 hover:text-gold transition-colors">
            <Mail className="h-3.5 w-3.5 text-gold" />
            {EMAIL}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/60 text-[11px] uppercase tracking-wider">Síguenos:</span>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="h-7 w-7 rounded-full border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/30 transition-all"
            >
              <s.icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <TopBar />
      <div className={`transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/logo-mudanzas-guevara.png" alt="Mudanzas Guevara" className="h-14 w-14 sm:h-16 sm:w-16 rounded-full ring-2 ring-gold/30" />
            <div className="leading-tight">
              <div className="text-white font-bold text-base sm:text-lg tracking-wide">MUDANZAS GUEVARA</div>
              <div className="text-gold text-[11px] sm:text-xs uppercase tracking-[0.2em]">Logística · Transporte</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-white/80 hover:text-gold transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <GoldButton href={WHATSAPP_LINK} external className="hidden sm:inline-flex !px-5 !py-2.5 !text-xs">
              <MessageCircle className="h-4 w-4" />
              Cotizar Gratis
            </GoldButton>
            <button
              aria-label="Menú"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden h-10 w-10 rounded-full border border-white/[0.08] flex items-center justify-center text-white"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-dark-900/98 backdrop-blur-md border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium text-white/80 hover:text-gold border-b border-white/[0.04] last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <GoldButton href={WHATSAPP_LINK} external className="mt-3">
                <MessageCircle className="h-4 w-4" />
                Cotizar Gratis por WhatsApp
              </GoldButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ───────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-moving.png"
          className="h-full w-full object-cover"
        >
          <source src="/video-mudanzas-guevara.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.06] px-4 py-1.5 text-xs text-gold mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Cotización Gratis — Sin compromiso
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight"
          >
            Mudarte sin
            <br />
            <span className="gold-shimmer">preocupaciones</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed"
          >
            Logística, transporte y mudanza profesional en Guayaquil, Quito y todo el Ecuador.
            Cuidamos cada detalle para que tu mudanza sea una experiencia tranquila.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <GoldButton href={WHATSAPP_LINK} external>
              <MessageCircle className="h-4 w-4" />
              Cotiza por WhatsApp
            </GoldButton>
            <OutlineButton href={`tel:${PHONE_1_TEL}`}>
              <Phone className="h-4 w-4 text-gold" />
              {PHONE_1}
            </OutlineButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/60"
          >
            {TRUST_BADGES.slice(0, 3).map((b) => (
              <div key={b.label} className="inline-flex items-center gap-2">
                <b.icon className="h-4 w-4 text-gold" />
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown className="h-5 w-5" />
      </div>
    </section>
  );
}

// ─── Stats ──────────────────────────────────────────────────────
function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="bg-dark-800 px-5 py-7 sm:py-8 text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold tracking-tight tabular-nums">
        {count.toLocaleString('es-EC')}
        <span className="text-gold-light">{suffix}</span>
      </div>
      <div className="text-[11px] sm:text-xs text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <section ref={ref} className="py-12 sm:py-16 bg-dark-800 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} start={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust Badges ───────────────────────────────────────────────
function TrustBadges() {
  return (
    <section className="py-8 bg-dark-900 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {TRUST_BADGES.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-2 text-center rounded-xl border border-white/[0.06] bg-dark-800 px-3 py-4">
              <b.icon className="h-5 w-5 text-gold" />
              <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider leading-tight">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────
function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <SectionLabel>Servicios</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Soluciones completas para tu mudanza
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Desde la inspección técnica hasta la entrega final. Cada servicio está diseñado
            para darte tranquilidad total.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-dark-800 p-7 transition-all hover:border-gold/25 hover:bg-dark-700"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/[0.08] border border-gold/15 text-gold transition-all group-hover:bg-gold/15 group-hover:border-gold/30">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ────────────────────────────────────────────────────
function Process() {
  return (
    <section id="proceso" className="py-20 sm:py-28 bg-dark-800 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-14 text-center">
          <SectionLabel>Proceso</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Cómo Trabajamos
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Tu mudanza en 5 pasos simples. Un proceso claro y transparente, desde el primer contacto hasta la entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative bg-dark-900 p-6 sm:p-7 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors">
                  {step.num}
                </span>
                <step.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ────────────────────────────────────────────────────
function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="galeria" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <SectionLabel>Galería</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Nuestro trabajo habla por nosotros
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Profesionalismo y dedicación en cada mudanza. Cada imagen refleja nuestro compromiso con el cuidado.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`gallery-item group relative overflow-hidden rounded-xl border border-white/[0.06] bg-dark-800 ${i === 0 ? 'col-span-2 row-span-2 aspect-square lg:aspect-auto' : 'aspect-square'}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-gold text-[10px] uppercase tracking-wider mb-1">{img.caption}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-dark-900/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              aria-label="Cerrar"
              className="absolute top-5 right-5 h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              src={GALLERY_IMAGES[active].src}
              alt={GALLERY_IMAGES[active].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── About ──────────────────────────────────────────────────────
function About() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-dark-800 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] aspect-[4/3]">
            <img src="/gallery-wrapping.png" alt="Equipo Mudanzas Guevara" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:right-6 rounded-xl bg-dark-900 border border-gold/20 px-6 py-4 shadow-xl">
            <div className="text-3xl font-bold text-gold">10+</div>
            <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Años moviendo Ecuador</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Nosotros</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Más de 10 años moviendo Ecuador con confianza
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            En Mudanzas Guevara somos un equipo de profesionales dedicados a hacer de tu mudanza
            una experiencia sencilla y segura. Combinamos experiencia logística, materiales de
            primera calidad y un trato humano que marca la diferencia.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Operamos desde Guayaquil y Quito con cobertura nacional, atendiendo hogares, oficinas
            y empresas que confían en nuestro compromiso de cuidado y puntualidad.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, label: 'Mercancía asegurada' },
              { icon: Users, label: 'Equipo capacitado' },
              { icon: Truck, label: 'Flota propia' },
              { icon: Globe, label: 'Cobertura nacional' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-sm text-white/80">
                <div className="h-9 w-9 rounded-lg bg-gold/[0.08] border border-gold/15 flex items-center justify-center text-gold shrink-0">
                  <item.icon className="h-4 w-4" />
                </div>
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Values ─────────────────────────────────────────────────────
function Values() {
  return (
    <section id="valores" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <SectionLabel>Valores</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Lo que nos define como empresa
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Los principios que guían cada mudanza y cada relación con nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-white/[0.06] bg-dark-800 p-7 text-center"
            >
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/[0.08] border border-gold/15 text-gold">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────────────
function Testimonials() {
  return (
    <section id="testimonios" className="py-20 sm:py-28 bg-dark-800 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <SectionLabel>Testimonios</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            La confianza de quienes ya confiaron en nosotros. Su palabra, nuestro mejor aval.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/[0.06] bg-dark-900 p-7"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/15" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-5 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold/15 border border-gold/20 flex items-center justify-center text-gold font-semibold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Coverage ───────────────────────────────────────────────────
function Coverage() {
  return (
    <section id="cobertura" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>Cobertura</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Llegamos a todo el Ecuador
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Con sedes principales en Guayaquil y Quito, y cobertura nacional en cada provincia.
            Traslados locales y de larga distancia con la misma calidad y compromiso.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {COVERAGE_CITIES.map((c) => (
              <div key={c} className="inline-flex items-center gap-2 text-sm text-white/75">
                <MapPin className="h-3.5 w-3.5 text-gold shrink-0" />
                {c}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <GoldButton href={WHATSAPP_LINK} external>
              <MessageCircle className="h-4 w-4" />
              Consultar cobertura
            </GoldButton>
          </div>
        </div>

        <div className="map-container relative rounded-2xl overflow-hidden border border-white/[0.06] aspect-[4/3] bg-dark-800">
          <iframe
            src="https://www.google.com/maps?q=Calle+1+de+Mayo+1006+Tulcán+Guayaquil+Ecuador&output=embed"
            className="h-full w-full"
            loading="lazy"
            title="Ubicación Mudanzas Guevara"
          />
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-28 bg-dark-800 border-y border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <SectionLabel>FAQ</SectionLabel>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Todo lo que necesitas saber antes de tu mudanza.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/[0.06] bg-dark-900 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm sm:text-base font-medium text-white">{f.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gold shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {f.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Quote Calculator (Express 3 Clics) ────────────────────────
const QUOTE_TYPES = [
  { id: 'depto', label: 'Departamento', icon: Box, emoji: '🏠' },
  { id: 'casa', label: 'Casa', icon: Warehouse, emoji: '🏡' },
  { id: 'oficina', label: 'Oficina / Local', icon: Warehouse, emoji: '🏢' },
  { id: 'flete', label: 'Solo flete', icon: Truck, emoji: '📦' },
] as const;

const QUOTE_ROUTES = [
  { id: 'gye', label: 'Dentro de Guayaquil' },
  { id: 'gye-quito', label: 'Guayaquil → Quito' },
  { id: 'gye-cuenca', label: 'Guayaquil → Cuenca' },
  { id: 'gye-otra', label: 'Guayaquil → Otra ciudad' },
  { id: 'otra-gye', label: 'Otra ciudad → Guayaquil' },
] as const;

// Precios estimados (placeholder — se actualizan con datos reales de Guevara)
const PRICING: Record<string, { min: number; max: number }> = {
  'depto-gye':     { min: 150, max: 220 },
  'casa-gye':      { min: 280, max: 420 },
  'oficina-gye':   { min: 250, max: 500 },
  'flete-gye':     { min: 60, max: 90 },
  'depto-gye-quito':   { min: 450, max: 650 },
  'casa-gye-quito':    { min: 650, max: 900 },
  'oficina-gye-quito': { min: 600, max: 950 },
  'flete-gye-quito':   { min: 300, max: 450 },
  'depto-gye-cuenca':   { min: 350, max: 550 },
  'casa-gye-cuenca':    { min: 500, max: 750 },
  'oficina-gye-cuenca': { min: 480, max: 800 },
  'flete-gye-cuenca':   { min: 250, max: 380 },
  'depto-gye-otra':   { min: 350, max: 600 },
  'casa-gye-otra':    { min: 500, max: 800 },
  'oficina-gye-otra': { min: 480, max: 850 },
  'flete-gye-otra':   { min: 250, max: 450 },
  'depto-otra-gye':   { min: 350, max: 600 },
  'casa-otra-gye':    { min: 500, max: 800 },
  'oficina-otra-gye': { min: 480, max: 850 },
  'flete-otra-gye':   { min: 250, max: 450 },
};

const EXTRAS_PRICING = {
  embalaje: { depto: 60, casa: 120, oficina: 100, flete: 0 },
  desmontaje: { depto: 30, casa: 60, oficina: 50, flete: 0 },
};

function QuoteCalculator() {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedRoute, setSelectedRoute] = useState<string>('');
  const [extras, setExtras] = useState<{ embalaje: boolean; desmontaje: boolean }>({
    embalaje: false,
    desmontaje: false,
  });
  const [showResult, setShowResult] = useState(false);

  const typeKey = selectedType || 'depto';
  const routeKey = selectedRoute || 'gye';
  const priceKey = `${typeKey}-${routeKey}`;
  const basePrice = PRICING[priceKey] ?? { min: 150, max: 300 };

  const embalajeExtra = extras.embalaje ? (EXTRAS_PRICING.embalaje[typeKey as keyof typeof EXTRAS_PRICING.embalaje] ?? 0) : 0;
  const desmontajeExtra = extras.desmontaje ? (EXTRAS_PRICING.desmontaje[typeKey as keyof typeof EXTRAS_PRICING.desmontaje] ?? 0) : 0;

  const finalMin = basePrice.min + embalajeExtra + desmontajeExtra;
  const finalMax = basePrice.max + embalajeExtra + desmontajeExtra;

  const isComplete = selectedType && selectedRoute;

  const typeLabel = QUOTE_TYPES.find(t => t.id === selectedType)?.label ?? '';
  const routeLabel = QUOTE_ROUTES.find(r => r.id === selectedRoute)?.label ?? '';
  const extrasLabel = [
    extras.embalaje ? 'Con embalaje' : '',
    extras.desmontaje ? 'Con desmontaje' : '',
  ].filter(Boolean).join(', ') || 'Sin extras';

  const handleWhatsApp = () => {
    const msg = `Hola Mudanzas Guevara, quiero cotizar una mudanza 🚚\n\n` +
      `📦 Tipo: ${typeLabel}\n` +
      `📍 Ruta: ${routeLabel}\n` +
      `➕ Extras: ${extrasLabel}\n` +
      `💰 Precio estimado: $${finalMin} - $${finalMax}\n\n` +
      `¿Me confirmas disponibilidad y precio final?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 sm:py-28 bg-dark-800 border-y border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <SectionLabel>Cotizador Express</SectionLabel>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Cotiza en <span className="gold-shimmer">30 segundos</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Selecciona 3 opciones y recibe tu precio estimado al instante. Sin compromiso.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-dark-900 p-6 sm:p-8 space-y-8">
          {/* Paso 1: Tipo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold text-dark-900 text-xs font-bold">1</span>
              <span className="text-sm font-semibold text-white">¿Qué mudas?</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {QUOTE_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => { setSelectedType(t.id); setShowResult(false); }}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all ${
                    selectedType === t.id
                      ? 'border-gold/50 bg-gold/[0.08] text-gold'
                      : 'border-white/[0.06] bg-dark-800 text-muted-foreground hover:border-gold/25 hover:text-white'
                  }`}
                >
                  <span className="text-2xl">{t.emoji}</span>
                  <span className="text-xs font-medium">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Paso 2: Ruta */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold text-dark-900 text-xs font-bold">2</span>
              <span className="text-sm font-semibold text-white">¿A dónde?</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {QUOTE_ROUTES.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => { setSelectedRoute(r.id); setShowResult(false); }}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all ${
                    selectedRoute === r.id
                      ? 'border-gold/50 bg-gold/[0.08] text-gold'
                      : 'border-white/[0.06] bg-dark-800 text-muted-foreground hover:border-gold/25 hover:text-white'
                  }`}
                >
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span className="text-sm font-medium">{r.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Paso 3: Extras */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold text-dark-900 text-xs font-bold">3</span>
              <span className="text-sm font-semibold text-white">¿Necesitas algo extra?</span>
              <span className="text-xs text-muted-foreground">(opcional)</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setExtras({ ...extras, embalaje: !extras.embalaje })}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-all ${
                  extras.embalaje
                    ? 'border-gold/50 bg-gold/[0.08] text-gold'
                    : 'border-white/[0.06] bg-dark-800 text-muted-foreground hover:border-gold/25 hover:text-white'
                }`}
              >
                <Package className="h-4 w-4" />
                Embalaje profesional
              </button>
              <button
                type="button"
                onClick={() => setExtras({ ...extras, desmontaje: !extras.desmontaje })}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-all ${
                  extras.desmontaje
                    ? 'border-gold/50 bg-gold/[0.08] text-gold'
                    : 'border-white/[0.06] bg-dark-800 text-muted-foreground hover:border-gold/25 hover:text-white'
                }`}
              >
                <ClipboardCheck className="h-4 w-4" />
                Desmontaje de muebles
              </button>
            </div>
          </div>

          {/* Resultado */}
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-gold/20 bg-gradient-to-br from-gold/[0.06] to-transparent p-6 text-center space-y-4"
            >
              <div className="text-xs uppercase tracking-wider text-gold/70 font-semibold">Tu estimado</div>
              <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                ${finalMin} <span className="text-muted-foreground text-2xl">—</span> ${finalMax}
              </div>
              <div className="text-sm text-muted-foreground">
                {typeLabel} · {routeLabel} · {extrasLabel}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <GoldButton href="#" onClick={(e: React.MouseEvent) => { e.preventDefault(); handleWhatsApp(); }} className="w-full sm:w-auto">
                  <MessageCircle className="h-4 w-4" />
                  Confirmar por WhatsApp
                </GoldButton>
                <OutlineButton href={`tel:${PHONE_1_TEL}`} className="w-full sm:w-auto">
                  <Phone className="h-4 w-4 text-gold" />
                  Llamar ahora
                </OutlineButton>
              </div>
              <p className="text-[11px] text-muted-foreground/60 pt-1">
                * Precio estimado referencial. Guevara confirma el precio final según inspección técnica.
              </p>
            </motion.div>
          )}

          {!isComplete && (
            <div className="text-center py-4">
              <p className="text-sm text-muted-foreground">
                Selecciona el <strong className="text-white">tipo de mudanza</strong> y la <strong className="text-white">ruta</strong> para ver tu precio estimado
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ────────────────────────────────────────────────────
function Contact() {
  const inputCls =
    'w-full rounded-lg border border-white/[0.08] bg-dark-900 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/60 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors';

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-dark-800 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <SectionLabel>Contacto</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Estamos disponibles para ti
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Cotización gratis, respuesta inmediata. Déjanos tus datos o escríbenos directo por WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Info cards */}
          <div className="lg:col-span-1 space-y-3">
            <a
              href={`tel:${PHONE_1_TEL}`}
              className="block rounded-xl border border-white/[0.06] bg-dark-900 p-5 hover:border-gold/25 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-gold/[0.08] border border-gold/15 flex items-center justify-center text-gold shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">Llámanos</div>
                  <div className="text-sm text-white font-medium">{PHONE_1}</div>
                  <div className="text-sm text-white/70">{PHONE_2}</div>
                </div>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="block rounded-xl border border-white/[0.06] bg-dark-900 p-5 hover:border-gold/25 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-gold/[0.08] border border-gold/15 flex items-center justify-center text-gold shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">Email</div>
                  <div className="text-sm text-white font-medium truncate">{EMAIL}</div>
                </div>
              </div>
            </a>

            <div className="rounded-xl border border-white/[0.06] bg-dark-900 p-5">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-gold/[0.08] border border-gold/15 flex items-center justify-center text-gold shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">Oficina</div>
                  <div className="text-sm text-white leading-relaxed">{ADDRESS}</div>
                </div>
              </div>
            </div>

            {/* Horario banner */}
            <div className="rounded-xl border border-white/[0.06] bg-dark-900 overflow-hidden">
              <div className="px-5 py-3 bg-gold/[0.04] border-b border-white/[0.06] flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Horario de atención</span>
              </div>
              <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
                <div className="p-4 text-center">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Oficina</div>
                  <div className="text-sm text-white mt-1">Lun - Vie</div>
                  <div className="text-xs text-gold mt-0.5">9:00 - 17:30</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Mudanzas</div>
                  <div className="text-sm text-white mt-1">Todos los días</div>
                  <div className="text-xs text-gold mt-0.5">Previo agendamiento</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Emergencias</div>
                  <div className="text-sm text-white mt-1">24 / 7</div>
                  <div className="text-xs text-gold mt-0.5">Siempre activos</div>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div className="rounded-xl border border-white/[0.06] bg-dark-900 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Síguenos</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Redes</span>
              </div>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] py-2.5 text-xs text-white hover:border-gold/30 hover:bg-gold/[0.06] hover:text-gold transition-all"
                  >
                    <s.icon className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form + map */}
          <div className="lg:col-span-2 space-y-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(WHATSAPP_LINK, '_blank');
              }}
              className="rounded-2xl border border-white/[0.06] bg-dark-900 p-6 sm:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Nombre</label>
                  <input required placeholder="Tu nombre" className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Teléfono</label>
                  <input required placeholder="09xxxxxxxx" className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Cuéntanos sobre tu mudanza: origen, destino, fecha, detalles..."
                  className={`${inputCls} resize-none`}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <GoldButton href="#" className="w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Enviar mensaje
                </GoldButton>
                <OutlineButton href={`tel:${PHONE_1_TEL}`} className="w-full sm:w-auto">
                  <Phone className="h-4 w-4 text-gold" />
                  Llamar ahora
                </OutlineButton>
              </div>
            </form>

            <div className="map-container rounded-2xl overflow-hidden border border-white/[0.06] aspect-[16/9] bg-dark-900">
              <iframe
                src="https://www.google.com/maps?q=Calle+1+de+Mayo+1006+Tulcán+Guayaquil+Ecuador&output=embed"
                className="h-full w-full"
                loading="lazy"
                title="Ubicación Mudanzas Guevara en Guayaquil"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ──────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.06] px-4 py-1.5 text-xs text-gold mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Cotización gratis · Respuesta inmediata
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight">
            ¿Listo para mudarte
            <br />
            <span className="gold-shimmer">sin preocupaciones?</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Escríbenos ahora y recibe tu cotización personalizada en minutos.
            Tu mudanza, nuestra responsabilidad.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
            <GoldButton href={WHATSAPP_LINK} external>
              <MessageCircle className="h-4 w-4" />
              Cotizar por WhatsApp
            </GoldButton>
            <OutlineButton href={`tel:${PHONE_1_TEL}`}>
              <Phone className="h-4 w-4 text-gold" />
              {PHONE_1}
            </OutlineButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/[0.06] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-mudanzas-guevara.png" alt="Mudanzas Guevara" className="h-12 w-12 rounded-full ring-2 ring-gold/30" />
              <div className="leading-tight">
                <div className="text-white font-bold text-sm tracking-wide">MUDANZAS GUEVARA</div>
                <div className="text-gold text-[11px] uppercase tracking-[0.2em]">Logística · Transporte</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Logística, transporte y mudanza profesional en Guayaquil, Quito y todo el Ecuador.
              Tu tranquilidad es nuestra prioridad.
            </p>
            <div className="flex gap-2 mt-5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="h-9 w-9 rounded-full border border-white/[0.06] flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Navegación</div>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Servicios</div>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#servicios" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Contacto</div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a href={`tel:${PHONE_1_TEL}`} className="hover:text-gold transition-colors">{PHONE_1}</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>{PHONE_2}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors break-all">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mudanzas Guevara. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Diseñado y desarrollado por{' '}
            <a href={JIMBRA_LINK} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors font-medium">
              Jimbra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp ──────────────────────────────────────────
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] whatsapp-pulse"
        >
          <MessageCircle className="h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function Home() {
  useSmoothScroll();
  useSWCleanup();
  return (
    <div className="min-h-screen flex flex-col bg-dark-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <TrustBadges />
        <Services />
        <Process />
        <Gallery />
        <About />
        <Values />
        <Testimonials />
        <Coverage />
        <FAQ />
        <QuoteCalculator />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
