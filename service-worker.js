const m = [
  "/_app/immutable/chunks/0-0c4f2237.js",
  "/_app/immutable/chunks/1-36826f91.js",
  "/_app/immutable/chunks/2-5481f247.js",
  "/_app/immutable/chunks/_page-7e4796dc.js",
  "/_app/immutable/chunks/_page-fd4e23e8.js",
  "/_app/immutable/assets/_page-e54782af.css",
  "/_app/immutable/chunks/index-0f63c3d9.js",
  "/_app/immutable/chunks/index-75416758.js",
  "/_app/immutable/chunks/index-95d721c5.js",
  "/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/_app/immutable/chunks/singletons-45e56a3f.js",
  "/_app/immutable/start-65268a18.js",
  "/_app/immutable/components/error.svelte-f2ca09d4.js",
  "/_app/immutable/components/layout.svelte-70c9eca1.js",
  "/_app/immutable/chunks/index.es-e1dd57ee.js",
  "/_app/immutable/chunks/purify.es-075a2866.js",
  "/_app/immutable/chunks/html2canvas.esm-0a33ed42.js",
  "/_app/immutable/components/pages/_page.svelte-68d215d4.js",
  "/_app/immutable/modules/pages/_page.ts-6a8cdd0a.js"
], h = [
  "/.nojekyll",
  "/assets/icons/icon-128x128.png",
  "/assets/icons/icon-144x144.png",
  "/assets/icons/icon-152x152.png",
  "/assets/icons/icon-192x192.png",
  "/assets/icons/icon-384x384.png",
  "/assets/icons/icon-48x48.png",
  "/assets/icons/icon-512x512.png",
  "/assets/icons/icon-72x72.png",
  "/assets/icons/icon-96x96.png",
  "/assets/preview-1200x630.png",
  "/favicon.png",
  "/manifest.webmanifest",
  "/robots.txt"
], i = "1676886478940", a = self, o = `cache${i}`, p = m.concat(h), u = new Set(p);
a.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((e) => e.addAll(p)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const t of e)
        t !== o && await caches.delete(t);
      a.clients.claim();
    })
  );
});
async function r(s) {
  const e = await caches.open(`offline${i}`);
  try {
    const t = await fetch(s);
    return e.put(s, t.clone()), t;
  } catch (t) {
    const c = await e.match(s);
    if (c)
      return c;
    throw t;
  }
}
a.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && u.has(e.pathname), l = s.request.cache === "only-if-cached" && !n;
  t && !c && !l && s.respondWith(
    (async () => n && await caches.match(s.request) || r(s.request))()
  );
});
