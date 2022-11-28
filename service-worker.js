const m = [
  "/_app/immutable/start-98f0dc9a.js",
  "/_app/immutable/components/layout.svelte-59b0d820.js",
  "/_app/immutable/components/error.svelte-a2418c2d.js",
  "/_app/immutable/components/pages/_page.svelte-b6ae071b.js",
  "/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/_app/immutable/chunks/singletons-687127a0.js",
  "/_app/immutable/chunks/index-73d65c13.js",
  "/_app/immutable/chunks/index-aae2ee95.js",
  "/_app/immutable/chunks/preload-helper-9b728935.js",
  "/_app/immutable/chunks/_page-eac50272.js",
  "/_app/immutable/assets/_page-86e6254c.css",
  "/_app/immutable/chunks/_page-c82b235a.js",
  "/_app/immutable/chunks/0-e732bbe7.js",
  "/_app/immutable/chunks/1-02568370.js",
  "/_app/immutable/chunks/2-78bf3d3e.js",
  "/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/_app/immutable/chunks/purify.es-88e864ff.js",
  "/_app/immutable/chunks/index.es-232552b2.js"
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
], i = "1669630399710", a = self, o = `cache${i}`, p = m.concat(h), u = new Set(p);
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
    const n = await e.match(s);
    if (n)
      return n;
    throw t;
  }
}
a.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && u.has(e.pathname), l = s.request.cache === "only-if-cached" && !c;
  t && !n && !l && s.respondWith(
    (async () => c && await caches.match(s.request) || r(s.request))()
  );
});
