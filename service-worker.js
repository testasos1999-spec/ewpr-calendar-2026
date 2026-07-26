const cacheName = "ewpr-calendar-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll([
      "index.html",
      "logo.png"
    ]))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
  );
});
