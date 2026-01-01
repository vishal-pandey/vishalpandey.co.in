const CACHE_NAME = 'vishal-portfolio-v4';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  // Profile and background images
  '/assets/profile.svg',
  '/assets/bg.webp',
  '/assets/sidebar.webp',
  '/assets/body-bg-left.webp',
  '/assets/body-bg-right.webp',
  // Fonts
  '/assets/Comic Sans MS.woff2',
  '/assets/Comic Sans MS Bold.woff2',
  // Icons
  '/assets/icons/home.svg',
  '/assets/icons/about-me.svg',
  '/assets/icons/ai.svg',
  '/assets/icons/ask-ai.svg',
  '/assets/icons/contact.svg',
  '/assets/icons/education.svg',
  '/assets/icons/mailbox.svg',
  '/assets/icons/project.svg',
  '/assets/icons/roast-him.svg',
  '/assets/icons/setting.svg',
  '/assets/icons/skill.svg',
  '/assets/icons/surprise-me.svg',
  '/assets/icons/tech-stack.svg',
  '/assets/icons/weird-projects.svg',
  '/assets/icons/work-experience.svg'
];

// CDN resources to cache
const CDN_ASSETS = [
  'https://cdn.jsdelivr.net/npm/roughjs@4.5.2/bundled/rough.js',
  'https://cdn.jsdelivr.net/npm/marked/marked.min.js'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching static assets...');
      // Cache static assets first
      return cache.addAll(STATIC_ASSETS)
        .then(() => {
          // Try to cache CDN assets (don't fail if they can't be fetched)
          return Promise.allSettled(
            CDN_ASSETS.map(url => 
              fetch(url, { mode: 'cors' })
                .then(response => {
                  if (response.ok) {
                    return cache.put(url, response);
                  }
                })
                .catch(() => console.log(`Could not cache: ${url}`))
            )
          );
        });
    })
  );
  // Activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  // Take control of all pages immediately
  self.clients.claim();
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // If we have a cached version, return it immediately
      // and update in background (stale-while-revalidate)
      if (cachedResponse) {
        event.waitUntil(
          fetch(request)
            .then((networkResponse) => {
              if (networkResponse.ok) {
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(request, networkResponse);
                });
              }
            })
            .catch(() => {}) // Ignore network errors during background update
        );
        return cachedResponse;
      }

      // Not in cache - fetch from network (wait as long as needed)
      return fetch(request)
        .then((networkResponse) => {
          // Cache successful responses for future use
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Network completely failed (offline)
          // Return offline page for navigation requests
          if (request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          // For other requests, return a basic offline response
          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
    })
  );
});
