self.addEventListener('install',function(event){
    console.log("Installing service worker...", event);
});

self.addEventListener('activate',function(event){
    console.log("Activate service worker...", event);
    return self.clients.claim(); //service workers are activated/loaded correctly.
});

self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] Fetching something ....', event);
    event.respondWith(fetch(event.request));
  });