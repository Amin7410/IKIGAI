const CACHE_NAME = 'ikigai-app-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/styles.css',
  './js/data/db.js',
  './js/data_payload.js',
  './js/core/mathUtils.js',
  './js/engines/calculationEngines.js',
  './js/ui/charts.js',
  './js/app.js',
  './manifest.json',
  './icons/logo-white.png',
  './icons/logo-dark.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
