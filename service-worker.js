const CACHE_NAME = 'sda-trivia-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/questions.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  // Add all audio/image assets here
  '/Fear God.png',
  '/correct_answer_1.wav',
  '/correct_answer_2.wav',
  '/WRONG BUZZER 7.wav',
  '/Motionarray_Floraphonic_Gameshow_Buzzer_1.wav',
  '/Semi Impact Risers-001.wav',
  '/2024-12-08_-_Detective_Revelation_-_www.FesliyanStudios.com.mp3',
  '/ticking_time.wav',
  '/wowza.mp3',
  '/zing.mp3',
  '/kawabanga.mp3',
  '/lets_go.mp3',
  '/nice.mp3',
  './Background.mp4',
  // '/offline.html', // Uncomment if you add an offline fallback page
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});
self.addEventListener('fetch', event => {
  // Debug all network requests
  console.log('🔍 Service Worker intercepted request:', event.request.url);
  
  // Special debugging for Background video requests
  if (event.request.url.includes('Background')) {
    console.log('🎥 Background video request intercepted by service worker');
    console.log('🎥 Request URL:', event.request.url);
    console.log('🎥 Request method:', event.request.method);
    console.log('🎥 Request headers:', [...event.request.headers.entries()]);
  }
  
  // SPA navigation fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html').then(response => response || fetch(event.request))
    );
    return;
  }
  // Stale-while-revalidate (optional, for assets like questions.js)
  // if (event.request.url.endsWith('questions.js')) {
  //   event.respondWith(
  //     caches.open(CACHE_NAME).then(cache =>
  //       fetch(event.request).then(response => {
  //         cache.put(event.request, response.clone());
  //         return response;
  //       }).catch(() => caches.match(event.request))
  //     )
  //   );
  //   return;
  // }
  // Error handling/offline fallback
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        console.log('✅ Serving from cache:', event.request.url);
        return response;
      } else {
        console.log('🌐 Fetching from network:', event.request.url);
        return fetch(event.request).catch(error => {
          console.error('❌ Network fetch failed:', event.request.url, error);
          return caches.match('/offline.html');
        });
      }
    })
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
}); 