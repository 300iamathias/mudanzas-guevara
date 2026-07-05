// ─── Constants ───────────────────────────────────────────────────
// All data constants for Mudanzas Guevara landing page.
// Icon references are stored as strings (icon NAME) — components map
// them to lucide-react components via local icon maps.

export const WHATSAPP_NUMBER = '593978939281';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola, me interesa una cotización para mudanza. 🚚'
)}`;
export const PHONE_1 = '097 893 9281';
export const PHONE_2 = '098 949 0889';
export const EMAIL = 'info@mudanzasguevara.com';
export const ADDRESS = 'Calle 1 de Mayo 1006 y Tulcán, Edificio Harca, Guayaquil';
export const JIMBRA_LINK = 'https://jimbra.net';

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/mudanzasguevaraec', icon: 'Facebook' },
  { name: 'Instagram', url: 'https://instagram.com/mudanzasguevara', icon: 'Instagram' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/mudanzasguevara', icon: 'Linkedin' },
] as const;

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#galeria', label: 'Galería' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
] as const;

export const SERVICES = [
  {
    icon: 'Box',
    title: 'Mudanza Hogar',
    description:
      'Traslado seguro de tu hogar. Cuidamos cada mueble, electrodoméstico y objeto personal como si fuera nuestro. Tu tranquilidad es nuestra prioridad.',
  },
  {
    icon: 'Warehouse',
    title: 'Mudanza Empresas',
    description:
      'Logística profesional para oficinas y empresas. Minimizamos tiempos de paralización con un servicio eficiente y coordinado al detalle.',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Inspección Técnica',
    description:
      'Visita previa de evaluación para dimensionar tu mudanza con precisión. Cotización exacta, sin sorpresas, con un plan de trabajo claro.',
  },
  {
    icon: 'Package',
    title: 'Embalaje y Empaque',
    description:
      'Empacamos y protegemos tus pertenencias con materiales de primera calidad. Cero riesgos, cero preocupaciones, todo llega intacto.',
  },
  {
    icon: 'Globe',
    title: 'Cobertura Nacional',
    description:
      'Guayaquil, Quito y todo el Ecuador. Traslados locales y de larga distancia con la misma calidad y compromiso en cada kilómetro.',
  },
  {
    icon: 'Shield',
    title: 'Seguridad Garantizada',
    description:
      'Personal capacitado, vehículos equipados y protocolos de cuidado. Tus pertenencias están protegidas de principio a fin.',
  },
] as const;

export const VALUES = [
  {
    icon: 'Award',
    title: 'Excelencia',
    description: 'Buscamos la más alta calidad en cada servicio, con atención al detalle en cada mudanza.',
  },
  {
    icon: 'Shield',
    title: 'Confianza',
    description: 'Construimos relaciones duraderas basadas en la transparencia y el cumplimiento.',
  },
  {
    icon: 'Users',
    title: 'Compromiso',
    description: 'Nos involucramos con cada cliente como si fuera el único, porque tu mudanza nos importa.',
  },
  {
    icon: 'Leaf',
    title: 'Responsabilidad',
    description: 'Cuidamos tus bienes y nuestro entorno, con prácticas logísticas responsables.',
  },
] as const;

export const STATS = [
  { value: 10, suffix: '+', label: 'Años de experiencia' },
  { value: 2000, suffix: '+', label: 'Mudanzas realizadas' },
  { value: 1500, suffix: '+', label: 'Clientes felices' },
  { value: 100, suffix: '%', label: 'Mercancía asegurada' },
] as const;

export const PROCESS_STEPS = [
  {
    num: '01',
    icon: 'MessageCircle',
    title: 'Cotización Gratis',
    description: 'Escríbenos por WhatsApp o llámanos. Te damos una cotización sin compromiso en minutos.',
  },
  {
    num: '02',
    icon: 'ClipboardCheck',
    title: 'Inspección Técnica',
    description: 'Visitamos tu lugar para evaluar el volumen y detalles. Cotización exacta, sin sorpresas.',
  },
  {
    num: '03',
    icon: 'Package',
    title: 'Embalaje Profesional',
    description: 'Empacamos tus pertenencias con materiales de primera. Cada objeto, protegido.',
  },
  {
    num: '04',
    icon: 'Truck',
    title: 'Transporte Seguro',
    description: 'Vehículos equipados y personal capacitado. Traslado puntual y cuidado en cada kilómetro.',
  },
  {
    num: '05',
    icon: 'CheckCircle2',
    title: 'Entrega Feliz',
    description: 'Todo llega intacto a su destino. Tu nueva etapa empieza sin estrés, sin preocupaciones.',
  },
] as const;

export const TESTIMONIALS = [
  {
    name: 'María Fernanda López',
    role: 'Mudanza de hogar · Urdesa',
    quote:
      'Excelente servicio. Llegaron puntuales, cuidaron cada mueble como si fuera propio. Súper recomendados, mi mudanza fue sin estrés.',
    rating: 5,
  },
  {
    name: 'Carlos Andrés Mendoza',
    role: 'Mudanza empresarial · Centro',
    quote:
      'Mudamos toda la oficina en un día sin paralizar operaciones. Profesionalismo de principio a fin. Definitivamente los volveré a contratar.',
    rating: 5,
  },
  {
    name: 'Patricia Salazar',
    role: 'Mudanza a Cuenca',
    quote:
      'Traslado de Guayaquil a Cuenca perfecto. Comunicación constante durante todo el viaje. Todo llegó intacto. Mil gracias.',
    rating: 5,
  },
  {
    name: 'Javier Robles',
    role: 'Mudanza de hogar · Samborondón',
    quote:
      'El embalaje fue impecable. Mis cosas frágiles llegaron sin un rasguño. Personal amable y muy cuidadoso. 10/10.',
    rating: 5,
  },
] as const;

export const TRUST_BADGES = [
  { icon: 'ShieldCheck', label: 'Mercancía Asegurada' },
  { icon: 'Clock', label: 'Puntualidad Garantizada' },
  { icon: 'Award', label: 'Empresa Registrada' },
  { icon: 'Users', label: 'Personal Capacitado' },
  { icon: 'Phone', label: 'Soporte 24/7' },
] as const;

export const GALLERY_IMAGES = [
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
] as const;

export const FAQS = [
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
] as const;
