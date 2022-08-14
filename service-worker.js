const l = [
  "/_app/immutable/assets/information-b8b32f49.svg",
  "/_app/immutable/start-4d3932ed.js",
  "/_app/immutable/layout.svelte-d36d8c46.js",
  "/_app/immutable/error.svelte-3a6f2cea.js",
  "/_app/immutable/pages/index.svelte-de917a47.js",
  "/_app/immutable/chunks/index-451968bf.js",
  "/_app/immutable/chunks/preload-helper-c9f5c660.js",
  "/_app/immutable/chunks/index-baa6ecd2.js",
  "/_app/immutable/assets/index-821d967d.css",
  "/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/_app/immutable/chunks/purify.es-655bdd74.js",
  "/_app/immutable/chunks/index.es-05dd904f.js"
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
], i = "1660488577158", a = self, o = `cache${i}`, p = l.concat(h), m = new Set(p);
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
async function d(s) {
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
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && m.has(e.pathname), r = s.request.cache === "only-if-cached" && !n;
  t && !c && !r && s.respondWith(
    (async () => n && await caches.match(s.request) || d(s.request))()
  );
});
