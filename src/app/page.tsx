'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Truck,
  Package,
  MapPin,
  Clock,
  Phone,
  Shield,
  Star,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Box,
  Warehouse,
  Globe,
  MessageCircle,
  Mail,
  ClipboardCheck,
  Facebook,
  Instagram,
  Linkedin,
  Heart,
  Award,
  Users,
  Leaf,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// ─── Constants ───────────────────────────────────────────────────
const WHATSAPP_NUMBER = '593978939281';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa una cotización para mudanza. 🚚')}`;
const PHONE_1 = '097 893 9281';
const PHONE_2 = '098 949 0889';
const EMAIL = 'info@mudanzasguevara.com';
const ADDRESS = 'Calle 1 de Mayo 1006 y Tulcán, Edificio Harca, Guayaquil';
const JIMBRA_LINK = 'https://jimbra.net';

const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/mudanzasguevaraec', icon: Facebook },
  { name: 'Instagram', url: 'https://instagram.com/mudanzasguevara', icon: Instagram },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/mudanzasguevara', icon: Linkedin },
];

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#valores', label: 'Valores' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
];

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
];

const VALUES = [
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Buscamos la más alta calidad en cada servicio, con atención al detalle en cada mudanza.',
  },
  {
    icon: Shield,
    title: 'Confianza',
    description: 'Construimos relaciones duraderas basadas en la transparencia y el cumplimiento.',
  },
  {
    icon: Users,
    title: 'Compromiso',
    description: 'Nos involucramos con cada cliente como si fuera el único, porque tu mudanza nos importa.',
  },
  {
    icon: Leaf,
    title: 'Responsabilidad',
    description: 'Cuidamos tus bienes y nuestro entorno, con prácticas logísticas responsables.',
  },
];

const GALLERY_IMAGES = [
  {
    src: '/hero-moving.png',
    alt: 'Equipo profesional de mudanzas cargando mobiliario',
    caption: 'Servicio profesional',
  },
  {
    src: '/gallery-packing.png',
    alt: 'Cajas de mudanza en nuevo hogar',
    caption: 'Embalaje cuidadoso',
  },
  {
    src: '/gallery-truck.png',
    alt: 'Camión de mudanza en ruta',
    caption: 'Transporte seguro',
  },
  {
    src: '/gallery-wrapping.png',
    alt: 'Protección profesional de mobiliario',
    caption: 'Protección total',
  },
  {
    src: '/gallery-family.png',
    alt: 'Familia feliz en su nuevo hogar',
    caption: 'Nuevos comienzos',
  },
];

const STATS = [
  { number: '10+', label: 'Años de experiencia' },
  { number: '2K+', label: 'Mudanzas realizadas' },
  { number: '100%', label: 'Clientes satisfechos' },
  { number: '24/7', label: 'Disponibilidad' },
];

const FAQS = [
  {
    question: '¿Hacen cotización gratis?',
    answer:
      '¡Sí! La cotización es totalmente gratuita y sin compromiso. Escríbenos por WhatsApp o llámanos y te daremos una estimación personalizada según tus necesidades.',
  },
  {
    question: '¿Qué áreas cubren?',
    answer:
      'Tenemos sedes en Guayaquil y Quito, con cobertura a todo el Ecuador. Realizamos mudanzas locales y de larga distancia a cualquier ciudad del país: Cuenca, Manta, Portoviejo, Loja, Ambato, Riobamba, Santo Domingo y más.',
  },
  {
    question: '¿Empacan mis pertenencias?',
    answer:
      'Sí, ofrecemos servicio completo de embalaje y empaque con materiales de primera calidad. Nuestro equipo protege cada objeto para que llegue intacto a su destino. También puedes empacar tú mismo si lo prefieres.',
  },
  {
    question: '¿Necesito agendar con anticipación?',
    answer:
      'Recomendamos agendar con anticipación para asegurar la fecha que necesitas, especialmente en temporadas altas. Sin embargo, también atendemos mudanzas de emergencia — contáctanos y haremos lo posible por ayudarte.',
  },
  {
    question: '¿Cuáles son sus horarios de atención?',
    answer:
      'Nuestra oficina atiende de lunes a viernes de 9:00 AM a 5:30 PM. Sin embargo, realizamos mudanzas todos los días, incluyendo fines de semana. Para emergencias, estamos disponibles 24/7.',
  },
  {
    question: '¿Cómo se calcula el precio de la mudanza?',
    answer:
      'El precio depende del volumen de pertenencias, la distancia, los servicios adicionales (embalaje, desmontaje) y la complejidad del traslado. Por eso ofrecemos la inspección técnica previa para darte una cotización exacta.',
  },
  {
    question: '¿Hacen inspección técnica previa?',
    answer:
      '¡Sí! Realizamos una visita técnica para evaluar el volumen, accesos y necesidades específicas de tu mudanza. Así te entregamos una cotización precisa, sin sorpresas ni costos ocultos.',
  },
  {
    question: '¿Aseguran mis pertenencias durante el traslado?',
    answer:
      'Trabajamos con protocolos de seguridad y cuidado en cada etapa del proceso. Nuestro personal está capacitado y nuestros vehículos están equipados para proteger tus bienes durante toda la mudanza.',
  },
];

// ─── Animation Variants ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ─── Section Wrapper with InView ─────────────────────────────────
function AnimatedSection({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-gold/10 shadow-lg shadow-black/20'
          : 'bg-dark-900/80 backdrop-blur-sm border-b border-gold/5'
      }`}
    >
      {/* Top Bar - Info always visible (desktop) */}
      <div className="hidden lg:block bg-dark-800/95 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-5 text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold" />
                Lun-Vie 9:00AM - 5:30PM · Mudanzas todos los días
              </span>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <Phone className="w-3.5 h-3.5 text-gold" />
                {PHONE_1}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <Mail className="w-3.5 h-3.5 text-gold" />
                {EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground mr-1">Síguenos:</span>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-6 h-6 rounded-md bg-dark-700 hover:bg-gold flex items-center justify-center transition-all duration-200 group"
                >
                  <social.icon className="w-3.5 h-3.5 text-gold group-hover:text-dark-900 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <Image
              src="/logo-mudanzas-guevara.png"
              alt="Mudanzas Guevara Logo"
              width={44}
              height={44}
              loading="eager"
              className="rounded-lg transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-gold font-bold text-sm sm:text-base leading-tight tracking-wide">
                MUDANZAS
              </span>
              <span className="text-white font-bold text-sm sm:text-base leading-tight tracking-wide">
                GUEVARA
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-dark-900 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Cotizar Gratis
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 hover:text-gold transition-colors"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-800/98 backdrop-blur-lg border-b border-gold/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-4 text-muted-foreground hover:text-gold hover:bg-dark-700 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 bg-gold hover:bg-gold-light text-dark-900 px-5 py-3 rounded-lg font-semibold text-center transition-all"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Cotizar Gratis
              </a>

              {/* Mobile info bar - horario + contacto */}
              <div className="mt-4 pt-4 border-t border-gold/10 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Lun-Vie 9:00AM - 5:30PM · Mudanzas todos los días</span>
                </div>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{PHONE_1} · {PHONE_2}</span>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors break-all">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{EMAIL}</span>
                </a>
              </div>

              {/* Mobile social media */}
              <div className="mt-4 pt-4 border-t border-gold/10">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Síguenos</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-11 h-11 rounded-lg bg-dark-700 hover:bg-gold flex items-center justify-center transition-all duration-200 group"
                    >
                      <social.icon className="w-5 h-5 text-gold group-hover:text-dark-900 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Hero Section ────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-moving.png"
          alt="Mudanzas Guevara - Servicio profesional de mudanzas"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-gold" />
              Cotización Gratis — Sin compromiso
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Mudarte sin</span>
            <br />
            <span className="gold-shimmer">preocupaciones</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Logística, transporte y mudanza profesional en Guayaquil, Quito y
            todo el Ecuador. Cuidamos cada detalle para que tu mudanza sea una experiencia tranquila.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gold hover:bg-gold-light text-dark-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-gold/25 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Cotiza por WhatsApp
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="group border border-gold/30 hover:border-gold/60 text-gold px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-gold/5 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              {PHONE_1}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gold">{stat.number}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gold/60" />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services Section ────────────────────────────────────────────
function ServicesSection() {
  return (
    <AnimatedSection id="servicios" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Soluciones completas para tu mudanza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Desde la inspección técnica hasta la entrega final, nos encargamos de cada detalle con profesionalismo y cuidado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group bg-dark-700 border border-gold/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 card-glow hover:bg-dark-600"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why choose us */}
        <motion.div variants={fadeUp} className="mt-20 bg-dark-700/50 border border-gold/10 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            ¿Por qué elegirnos?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Personal capacitado y de confianza',
              'Vehículos propios y equipados',
              'Embalaje con materiales premium',
              'Inspección técnica previa gratuita',
              'Puntualidad y cumplimiento',
              'Cobertura a todo el Ecuador',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ─── Gallery Section ─────────────────────────────────────────────
function GallerySection() {
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

// ─── About Section ───────────────────────────────────────────────
function AboutSection() {
  return (
    <AnimatedSection id="nosotros" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div variants={fadeUp}>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              ¿Quiénes Somos?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Más de 10 años moviendo Ecuador con confianza
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              En <span className="text-gold font-semibold">Mudanzas Guevara</span> entendemos
              que mudarse es mucho más que trasladar cosas: es un cambio de vida. Por eso,
              cada servicio que brindamos está diseñado para que tu experiencia sea tranquila,
              segura y sin contratiempos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Somos una empresa ecuatoriana especializada en logística, transporte y mudanza.
              Con sede en Guayaquil y cobertura en Quito y todo el país, ofrecemos el mismo
              nivel de excelencia y compromiso que nos caracteriza.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, text: 'Seguridad total' },
                { icon: Clock, text: 'Puntualidad garantizada' },
                { icon: Star, text: 'Calidad premium' },
                { icon: Box, text: 'Embalaje profesional' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 bg-dark-700/50 rounded-lg p-3">
                  <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/gallery-wrapping.png"
                alt="Equipo de Mudanzas Guevara protegiendo mobiliario"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-dark-900 rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm font-medium">Años de experiencia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ─── Values Section ──────────────────────────────────────────────
function ValuesSection() {
  return (
    <AnimatedSection id="valores" className="py-20 sm:py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Nuestros Valores
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Lo que nos define como empresa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Los principios que guían cada mudanza y cada relación con nuestros clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              className="group bg-dark-700 border border-gold/10 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 card-glow"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-gold/20 transition-colors">
                <value.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Responsabilidad Corporativa banner */}
        <motion.div
          variants={fadeUp}
          className="mt-12 bg-gradient-to-r from-dark-700 to-dark-600 border border-gold/15 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
            <Heart className="w-8 h-8 text-gold" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Responsabilidad Corporativa
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Cuidamos cada mudanza, cada pertenencia y cada relación. Trabajamos con
              prácticas logísticas responsables, cuidando el entorno y contribuyendo al
              desarrollo del país con cada servicio que brindamos.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ─── FAQ Section ─────────────────────────────────────────────────
function FAQSection() {
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

// ─── Coverage Section ────────────────────────────────────────────
function CoverageSection() {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Cobertura
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Llegamos a todo el Ecuador
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Con sedes principales en Guayaquil y Quito, y cobertura nacional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUp}
            className="bg-dark-700 border border-gold/10 rounded-2xl p-8 card-glow transition-all duration-300"
          >
            <MapPin className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Guayaquil</h3>
            <p className="text-muted-foreground mb-3">
              Sede principal. Cobertura completa en la ciudad y zona metropolitana.
            </p>
            <p className="text-gold text-sm font-medium">{ADDRESS}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-dark-700 border border-gold/10 rounded-2xl p-8 card-glow transition-all duration-300"
          >
            <MapPin className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Quito</h3>
            <p className="text-muted-foreground">
              Sede en la capital. Mudanzas locales y de larga distancia con la
              misma calidad y profesionalismo.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-8 bg-gold/5 border border-gold/15 rounded-2xl p-8 text-center"
        >
          <Globe className="w-10 h-10 text-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Cobertura Nacional</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Realizamos mudanzas a cualquier ciudad del Ecuador: Cuenca, Manta, Portoviejo,
            Loja, Ambato, Riobamba, Santo Domingo y más. Consulta disponibilidad para tu destino.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ─── Contact Section ─────────────────────────────────────────────
function ContactSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    ADDRESS + ', Ecuador'
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <AnimatedSection id="contacto" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Estamos disponibles para ti
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cotización gratis, respuesta inmediata. Déjanos cuidar de tu mudanza.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info cards */}
          <motion.div variants={fadeUp} className="space-y-5">
            {/* Phones */}
            <div className="bg-dark-700 border border-gold/10 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-gold" />
                <h3 className="text-xl font-bold text-white">Llámanos</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-2 bg-dark-600 hover:bg-dark-500 rounded-lg p-3 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Principal</div>
                    <div className="text-gold font-semibold group-hover:text-gold-light">{PHONE_1}</div>
                  </div>
                </a>
                <a
                  href="tel:+593989490889"
                  className="flex items-center gap-2 bg-dark-600 hover:bg-dark-500 rounded-lg p-3 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Secundario</div>
                    <div className="text-gold font-semibold group-hover:text-gold-light">{PHONE_2}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="block bg-dark-700 border border-gold/10 rounded-2xl p-6 sm:p-7 hover:border-gold/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-6 h-6 text-gold" />
                <h3 className="text-xl font-bold text-white">Email</h3>
              </div>
              <p className="text-gold font-semibold group-hover:text-gold-light transition-colors">
                {EMAIL}
              </p>
              <p className="text-muted-foreground text-sm mt-1">Escríbenos y te respondemos pronto</p>
            </a>

            {/* Address & Hours */}
            <div className="bg-dark-700 border border-gold/10 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-gold" />
                <h3 className="text-xl font-bold text-white">Ubicación y Horarios</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Dirección</div>
                  <p className="text-gray-200">{ADDRESS}</p>
                </div>
                <div className="border-t border-gold/10 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-gold" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Horario de Oficina</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Lunes a Viernes</span>
                    <span className="text-gold font-semibold">9:00 AM - 5:30 PM</span>
                  </div>
                </div>
                <div className="border-t border-gold/10 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck className="w-4 h-4 text-gold" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Servicio de Mudanzas</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Todos los días</span>
                    <span className="text-gold font-semibold">Incluido fines de semana</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="w-8 h-8 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Escríbenos por WhatsApp</h3>
                  <p className="text-white/80 text-sm mt-1">
                    Respuesta inmediata — Cotiza en minutos
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 flex-shrink-0" />
              </div>
            </a>

            {/* Social Media */}
            <div className="bg-dark-700 border border-gold/10 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-gold" />
                <h3 className="text-xl font-bold text-white">Síguenos en Redes</h3>
              </div>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex-1 flex flex-col items-center gap-2 bg-dark-600 hover:bg-gold rounded-xl p-4 transition-all duration-200 group"
                  >
                    <social.icon className="w-7 h-7 text-gold group-hover:text-dark-900 transition-colors" />
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-dark-900 transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-3">
                Mantente al tanto de nuestras novedades y promociones
              </p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div variants={fadeUp} className="bg-dark-700 border border-gold/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gold/10 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-white font-semibold">Nuestra Ubicación</span>
              </div>
              <a
                href="https://maps.app.goo.gl/QbqoKCd29TPku5PJA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold hover:text-gold-light transition-colors flex items-center gap-1"
              >
                Ver en Google Maps
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div className="map-container flex-1 min-h-[400px] lg:min-h-[500px]">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Mudanzas Guevara en Guayaquil"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ─── Final CTA Section ───────────────────────────────────────────
function FinalCTASection() {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-dark-800 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para mudarte sin <span className="gold-shimmer">preocupaciones</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Cotización gratis, respuesta inmediata. Déjanos cuidar de tu mudanza
            mientras tú disfrutas de tu nuevo espacio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gold hover:bg-gold-light text-dark-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-gold/25 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Cotiza por WhatsApp
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="group border border-gold/30 hover:border-gold/60 text-gold px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-gold/5 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              {PHONE_1}
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ─── Footer ──────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-gold/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-mudanzas-guevara.png"
                alt="Mudanzas Guevara Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <div className="text-gold font-bold text-sm leading-tight">MUDANZAS</div>
                <div className="text-white font-bold text-sm leading-tight">GUEVARA</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-md">
              Logística, transporte y mudanza profesional en Guayaquil, Quito y todo el Ecuador.
              Más de 10 años moviendo Ecuador con confianza.
            </p>
            {/* Social Media in footer */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-lg bg-dark-700 hover:bg-gold flex items-center justify-center transition-all duration-200 group"
                >
                  <social.icon className="w-4 h-4 text-gold group-hover:text-dark-900 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {PHONE_1}
              </a>
              <a
                href="tel:+593989490889"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {PHONE_2}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm break-all"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Lun-Vie 9AM-5:30PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-8 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Mudanzas Guevara. Todos los derechos reservados.
          </p>
          <a
            href={JIMBRA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors text-sm font-medium"
          >
            Hecho por <span className="text-gold font-semibold">Jimbra</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp Button ────────────────────────────────────
function FloatingWhatsApp() {
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

// ─── PWA Register Component ──────────────────────────────────────
function PWARegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);
  return null;
}

// ─── Main Page ───────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-900">
      <PWARegister />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <div className="section-divider" />
        <ServicesSection />
        <div className="section-divider" />
        <GallerySection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ValuesSection />
        <div className="section-divider" />
        <CoverageSection />
        <div className="section-divider" />
        <FAQSection />
        <div className="section-divider" />
        <ContactSection />
        <div className="section-divider" />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
