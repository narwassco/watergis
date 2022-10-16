const l = [
  "/_app/immutable/assets/fa-solid-900-d27bc752.woff2",
  "/_app/immutable/assets/fa-solid-900-6d53c706.ttf",
  "/_app/immutable/start-b0fa7ef8.js",
  "/_app/immutable/components/layout.svelte-21b1e40e.js",
  "/_app/immutable/components/error.svelte-f8c7c9c8.js",
  "/_app/immutable/components/pages/_page.svelte-e34592e6.js",
  "/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/_app/immutable/chunks/singletons-a3fcfbaf.js",
  "/_app/immutable/chunks/index-6dd75127.js",
  "/_app/immutable/chunks/preload-helper-aa6bc0ce.js",
  "/_app/immutable/chunks/stores-264aa39f.js",
  "/_app/immutable/chunks/_page-a4c9bb9d.js",
  "/_app/immutable/assets/_page-44f93433.css",
  "/_app/immutable/chunks/_page-c82b235a.js",
  "/_app/immutable/chunks/0-2bc9ec89.js",
  "/_app/immutable/chunks/1-35a65a14.js",
  "/_app/immutable/chunks/2-c377012e.js",
  "/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/_app/immutable/chunks/purify.es-20117e50.js",
  "/_app/immutable/chunks/index.es-01f0a35e.js"
], u = [
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
], i = "1665958521955", t = self, o = `cache${i}`, p = l.concat(u), h = new Set(p);
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
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && h.has(e.pathname), m = s.request.cache === "only-if-cached" && !n;
  a && !c && !m && s.respondWith(
    (async () => n && await caches.match(s.request) || r(s.request))()
  );
});
