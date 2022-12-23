const m = [
  "/_app/immutable/assets/_page-68aaa35b.css",
  "/_app/immutable/components/pages/_page.svelte-4969695e.js",
  "/_app/immutable/modules/pages/_page.ts-6a8cdd0a.js",
  "/_app/immutable/chunks/index-d23b2ecc.js",
  "/_app/immutable/chunks/index-71eac763.js",
  "/_app/immutable/chunks/1-8d9436e2.js",
  "/_app/immutable/components/error.svelte-1d9f4709.js",
  "/_app/immutable/components/layout.svelte-99529342.js",
  "/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/_app/immutable/chunks/2-927d7392.js",
  "/_app/immutable/chunks/0-016a1d45.js",
  "/_app/immutable/chunks/singletons-d7293337.js",
  "/_app/immutable/chunks/_page-7e4796dc.js",
  "/_app/immutable/chunks/index-95d721c5.js",
  "/_app/immutable/chunks/index.es-6fcca4bb.js",
  "/_app/immutable/chunks/purify.es-075a2866.js",
  "/_app/immutable/start-4837b297.js",
  "/_app/immutable/chunks/html2canvas.esm-0a33ed42.js",
  "/_app/immutable/chunks/_page-492591a7.js"
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
], i = "1671793953116", t = self, o = `cache${i}`, p = m.concat(h), u = new Set(p);
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
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && u.has(e.pathname), l = s.request.cache === "only-if-cached" && !n;
  a && !c && !l && s.respondWith(
    (async () => n && await caches.match(s.request) || r(s.request))()
  );
});
