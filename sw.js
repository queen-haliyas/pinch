/* Scale & Simmer service worker: lets the app open offline. Bump CACHE when files change. */
const CACHE = 'simmer-v1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;      // never touch Gemini or font requests
  const isPage = req.mode === 'navigate';
  e.respondWith(
    fetch(req).then(res => {                                               // online: take the fresh copy and keep it
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(isPage ? 'index.html' : req, copy)); }
      return res;
    }).catch(() => caches.match(isPage ? 'index.html' : req).then(r => r || caches.match('index.html')))
  );
});
