const CACHE_NAME = 'sda-trivia-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/questions.js',
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
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
}); 