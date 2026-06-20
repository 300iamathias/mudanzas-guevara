# Mudanzas Guevara — Sitio Web

Sitio web profesional para **Mudanzas Guevara**, empresa de mudanzas y logística en Guayaquil, Quito y todo el Ecuador.

## 🎨 Características

- **Diseño oscuro elegante** con acentos dorados/ámbar
- **Mobile-first** responsive
- **PWA instalable** en celular
- **SEO optimizado** (metadata, OpenGraph, Twitter cards)
- **Animaciones suaves** con Framer Motion
- **WhatsApp flotante** siempre visible
- **Mapa interactivo** con dirección exacta
- **Preguntas Frecuentes** con accordion
- **Redes sociales** integradas (Facebook, Instagram, LinkedIn)

## 🛠️ Stack Técnico

- **Next.js 16** con App Router
- **TypeScript 5**
- **Tailwind CSS 4**
- **shadcn/ui** componentes
- **Lucide icons**
- **Framer Motion** animaciones

## 📦 Instalación

```bash
# Instalar dependencias
npm install
# o
bun install

# Desarrollo
npm run dev

# Build para producción
npm run build
```

## 🚀 Deploy en Vercel

### Opción 1: Vía GitHub (recomendado)

1. Crea un repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Entra a [vercel.com](https://vercel.com) y conéctalo al repo
4. Vercel detecta Next.js automáticamente
5. **Build Command**: `next build` (sin comandos cp)
6. **Output Directory**: `.next`
7. Deploy automático

### Opción 2: Vía CLI

```bash
npm i -g vercel
vercel
```

## 🌐 Configurar Dominio (Subdominio en jimbra.net)

1. En Vercel, ve a **Settings → Domains**
2. Agrega: `mudanzas.jimbra.net` (o el subdominio que elijas)
3. En Cloudflare, agrega un registro CNAME:
   - **Tipo**: CNAME
   - **Nombre**: mudanzas
   - **Target**: `cname.vercel-dns.com`
   - **Proxy status**: DNS only (grey cloud)
4. Listo. El SSL se configura automáticamente en Vercel

## 📝 Configuración

### Cambiar números de WhatsApp

Edita en `src/app/page.tsx`:

```typescript
const WHATSAPP_NUMBER = '593978939281'; // Tu número
```

### Cambiar redes sociales

Edita el array `SOCIAL_LINKS` en `src/app/page.tsx`:

```typescript
const SOCIAL_LINKS = [
  { name: 'Facebook', url: '...', icon: Facebook },
  { name: 'Instagram', url: '...', icon: Instagram },
  { name: 'LinkedIn', url: '...', icon: Linkedin },
];
```

### Cambiar imágenes

Reemplaza los archivos en `public/`:
- `hero-moving.png` — imagen del hero
- `gallery-*.png` — imágenes de la galería
- `logo-mudanzas-guevara.png` — logo

## 📂 Estructura

```
├── public/              # Imágenes, íconos, manifest, service worker
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Metadata, SEO, PWA
│   │   ├── page.tsx     # Página principal (todas las secciones)
│   │   └── globals.css  # Estilos y tema oscuro
│   ├── components/ui/   # Componentes shadcn/ui
│   └── lib/             # Utils
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 📄 Licencia

© Mudanzas Guevara. Todos los derechos reservados.

**Hecho por [Jimbra](https://jimbra.net)**
