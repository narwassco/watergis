const l = [
  "/_app/immutable/start-65f698df.js",
  "/_app/immutable/components/layout.svelte-66cc6877.js",
  "/_app/immutable/components/error.svelte-72f9e5b9.js",
  "/_app/immutable/components/pages/_page.svelte-2064a802.js",
  "/_app/immutable/modules/pages/_page.ts-e9fa0128.js",
  "/_app/immutable/chunks/singletons-cf4d4874.js",
  "/_app/immutable/chunks/preload-helper-aa6bc0ce.js",
  "/_app/immutable/chunks/index-b0387173.js",
  "/_app/immutable/chunks/stores-24b9c867.js",
  "/_app/immutable/chunks/_page-8aaf030d.js",
  "/_app/immutable/assets/_page-83f7c903.css",
  "/_app/immutable/chunks/_page-802cc2a3.js",
  "/_app/immutable/chunks/0-a14fa472.js",
  "/_app/immutable/chunks/1-53a442d5.js",
  "/_app/immutable/chunks/2-28745981.js",
  "/_app/immutable/chunks/html2canvas.esm-a916e51b.js",
  "/_app/immutable/chunks/purify.es-8c684ad6.js",
  "/_app/immutable/chunks/index.es-9bde7459.js"
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
  "/favicon.png",
  "/manifest.webmanifest",
  "/map-center.png",
  "/robots.txt",
  "/smui-dark.css",
  "/smui.css"
], i = "1665133369457", t = self, o = `cache${i}`, p = l.concat(h), u = new Set(p);
t.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((e) => e.addAll(p)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const a of e)
        a !== o && await caches.delete(a);
      t.clients.claim();
    })
  );
});
async function r(s) {
  const e = await caches.open(`offline${i}`);
  try {
    const a = await fetch(s);
    return e.put(s, a.clone()), a;
  } catch (a) {
    const c = await e.match(s);
    if (c)
      return c;
    throw a;
  }
}
t.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && u.has(e.pathname), m = s.request.cache === "only-if-cached" && !n;
  a && !c && !m && s.respondWith(
    (async () => n && await caches.match(s.request) || r(s.request))()
  );
});
