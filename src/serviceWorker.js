var cacheName = 'hello-world-page';
var filesToCache = [
  '/',
  '/index.html',
];

window.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

window.addEventListener('activate',  event => {
  event.waitUntil(window.clients.claim());
});

window.addEventListener('fetch', event => {
  console.log("HTTP call intercepted - " + event.request.url);
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
