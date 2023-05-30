const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  s + "/_app/immutable/entry/app.536859cf.js",
  s + "/_app/immutable/nodes/0.bb379f6d.js",
  s + "/_app/immutable/nodes/1.940c4159.js",
  s + "/_app/immutable/nodes/2.c82e8d1c.js",
  s + "/_app/immutable/assets/2.ef31cbb5.css",
  s + "/_app/immutable/chunks/2.375beee8.js",
  s + "/_app/immutable/chunks/index.0d681bb0.js",
  s + "/_app/immutable/chunks/index.a10ba89a.js",
  s + "/_app/immutable/chunks/index.c470a183.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/singletons.39dcb8dc.js",
  s + "/_app/immutable/entry/start.9f8dc46e.js",
  s + "/_app/immutable/chunks/index.es.5751e5a8.js",
  s + "/_app/immutable/chunks/purify.es.f47f2ec0.js",
  s + "/_app/immutable/chunks/html2canvas.esm.e0a7d97b.js"
], m = [
  s + "/.nojekyll",
  s + "/assets/icons/icon-128x128.png",
  s + "/assets/icons/icon-144x144.png",
  s + "/assets/icons/icon-152x152.png",
  s + "/assets/icons/icon-192x192.png",
  s + "/assets/icons/icon-384x384.png",
  s + "/assets/icons/icon-48x48.png",
  s + "/assets/icons/icon-512x512.png",
  s + "/assets/icons/icon-72x72.png",
  s + "/assets/icons/icon-96x96.png",
  s + "/assets/preview-1200x630.png",
  s + "/favicon.png",
  s + "/manifest.webmanifest",
  s + "/robots.txt"
], o = "1685420151061", n = self, p = `cache${o}`, h = r.concat(m), u = new Set(h);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(h)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && await caches.delete(a);
      n.clients.claim();
    })
  );
});
async function d(e) {
  const t = await caches.open(`offline${o}`);
  try {
    const a = await fetch(e);
    return t.put(e, a.clone()), a;
  } catch (a) {
    const c = await t.match(e);
    if (c)
      return c;
    throw a;
  }
}
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && u.has(t.pathname), l = e.request.cache === "only-if-cached" && !i;
  a && !c && !l && e.respondWith(
    (async () => i && await caches.match(e.request) || d(e.request))()
  );
});
