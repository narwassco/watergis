const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  s + "/_app/immutable/entry/app.9f62cf07.js",
  s + "/_app/immutable/nodes/0.cac3c05e.js",
  s + "/_app/immutable/nodes/1.7ea55142.js",
  s + "/_app/immutable/nodes/2.570a3935.js",
  s + "/_app/immutable/assets/2.4ec5b283.css",
  s + "/_app/immutable/chunks/2.c8573298.js",
  s + "/_app/immutable/chunks/index.a1df979d.js",
  s + "/_app/immutable/chunks/index.c6f56c2f.js",
  s + "/_app/immutable/chunks/index.f67b0ed0.js",
  s + "/_app/immutable/chunks/preload-helper.cf010ec4.js",
  s + "/_app/immutable/chunks/scheduler.e663fd29.js",
  s + "/_app/immutable/chunks/singletons.fff3ac78.js",
  s + "/_app/immutable/entry/start.66b866aa.js",
  s + "/_app/immutable/chunks/index.es.7411fc8b.js",
  s + "/_app/immutable/chunks/purify.es.cf254a40.js",
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
], o = "1693066107723", c = self, p = `cache${o}`, h = r.concat(m), u = new Set(h);
c.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(h)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && await caches.delete(a);
      c.clients.claim();
    })
  );
});
async function f(e) {
  const t = await caches.open(`offline${o}`);
  try {
    const a = await fetch(e);
    return t.put(e, a.clone()), a;
  } catch (a) {
    const n = await t.match(e);
    if (n)
      return n;
    throw a;
  }
}
c.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), n = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && u.has(t.pathname), l = e.request.cache === "only-if-cached" && !i;
  a && !n && !l && e.respondWith(
    (async () => i && await caches.match(e.request) || f(e.request))()
  );
});
