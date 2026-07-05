// Service Worker — Kill switch para limpiar caches viejos
// Esta versión se desinstala a sí misma y limpia TODOS los caches
// para que el navegador sirva siempre la versión más reciente.

const CACHE_VERSION = 'mudanzas-guevara-v3-clean';

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.keys().then((names) => Promise.all(names.map((n) => caches.delete(n))))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // Limpiar TODOS los caches existentes
      caches.keys().then((names) => Promise.all(names.map((n) => caches.delete(n)))),
      // Tomar control de todos los clients inmediatamente
      self.clients.claim(),
    ]).then(() => {
      // Notificar a los clients para que recarguen
      self.clients.matchAll({ type: 'window' }).then((clients) => {
        clients.forEach((client) => client.navigate(client.url));
      });
    })
  );
});

// Network-first para TODO — siempre ir a la red primero
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
