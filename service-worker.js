const m = [
  "/_app/immutable/assets/_page-07bf5adb.css",
  "/_app/immutable/start-dc70483d.js",
  "/_app/immutable/chunks/singletons-f31f1661.js",
  "/_app/immutable/chunks/0-8c3f9aed.js",
  "/_app/immutable/chunks/2-0779f0f2.js",
  "/_app/immutable/chunks/index-05932267.js",
  "/_app/immutable/chunks/index-5cbadba0.js",
  "/_app/immutable/chunks/index-189e0129.js",
  "/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/_app/immutable/components/layout.svelte-e9f0b961.js",
  "/_app/immutable/modules/pages/_page.ts-6a8cdd0a.js",
  "/_app/immutable/chunks/_page-7e4796dc.js",
  "/_app/immutable/chunks/1-30f21a4c.js",
  "/_app/immutable/components/pages/_page.svelte-ef2d1593.js",
  "/_app/immutable/components/error.svelte-0e95dec4.js",
  "/_app/immutable/chunks/purify.es-b43afbc7.js",
  "/_app/immutable/chunks/html2canvas.esm-b8f85a09.js",
  "/_app/immutable/chunks/index.es-d898c063.js",
  "/_app/immutable/chunks/_page-eb37d600.js"
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
], i = "1670667888157", a = self, o = `cache${i}`, p = m.concat(h), u = new Set(p);
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
