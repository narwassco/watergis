const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  s + "/_app/immutable/entry/app.6b064fc3.js",
  s + "/_app/immutable/nodes/0.34bf2741.js",
  s + "/_app/immutable/nodes/1.4a55cbdf.js",
  s + "/_app/immutable/nodes/2.38f5042b.js",
  s + "/_app/immutable/assets/2.65b04dfe.css",
  s + "/_app/immutable/chunks/2.4c860859.js",
  s + "/_app/immutable/chunks/index.40e11da7.js",
  s + "/_app/immutable/chunks/index.492f80b2.js",
  s + "/_app/immutable/chunks/preload-helper.a4192956.js",
  s + "/_app/immutable/chunks/scheduler.c37387d0.js",
  s + "/_app/immutable/chunks/singletons.0907fd56.js",
  s + "/_app/immutable/chunks/stores.08208f21.js",
  s + "/_app/immutable/entry/start.eee20e09.js",
  s + "/_app/immutable/chunks/index.es.51103ade.js",
  s + "/_app/immutable/chunks/purify.es.cf254a40.js",
  s + "/_app/immutable/chunks/html2canvas.esm.e0a7d97b.js"
], p = [
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
  s + "/assets/tutorial/attr-table-selectbox.png",
  s + "/assets/tutorial/eye-solid.svg",
  s + "/assets/tutorial/isochrone-example.png",
  s + "/assets/tutorial/isochrone-tool.png",
  s + "/assets/tutorial/magnifying-glass-plus-solid.svg",
  s + "/assets/tutorial/measure-tool.png",
  s + "/assets/tutorial/palette-solid.svg",
  s + "/assets/tutorial/routing-tool.png",
  s + "/assets/tutorial/style-switcher.png",
  s + "/assets/tutorial/up-down-left-right-solid.svg",
  s + "/favicon.png",
  s + "/manifest.webmanifest",
  s + "/robots.txt"
], u = "1696162065682", c = `cache-${u}`, o = [
  ...l,
  // the app itself
  ...p
  // everything in `static`
];
self.addEventListener("install", (e) => {
  async function a() {
    await (await caches.open(c)).addAll(o);
  }
  e.waitUntil(a());
});
self.addEventListener("activate", (e) => {
  async function a() {
    for (const t of await caches.keys())
      t !== c && await caches.delete(t);
  }
  e.waitUntil(a());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function a() {
    const t = new URL(e.request.url), n = await caches.open(c);
    if (o.includes(t.pathname))
      return n.match(t.pathname);
    try {
      const i = await fetch(e.request);
      return i.status === 200 && n.put(e.request, i.clone()), i;
    } catch {
      return n.match(e.request);
    }
  }
  e.respondWith(a());
});
