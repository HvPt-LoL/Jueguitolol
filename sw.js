if (!self.define) {
    let e,
      i = {};
    const r = (r, s) => (
      (r = new URL(r + ".js", s).href),
      i[r] ||
        new Promise((i) => {
          if ("document" in self) {
            const e = document.createElement("script");
            (e.src = r), (e.onload = i), document.head.appendChild(e);
          } else (e = r), importScripts(r), i();
        }).then(() => {
          let e = i[r];
          if (!e) throw new Error(`Module ${r} didn’t register its module`);
          return e;
        })
    );
    self.define = (s, t) => {
      const n =
        e || ("document" in self ? document.currentScript.src : "") || location.href;
      if (i[n]) return;
      let o = {};
      const c = (e) => r(e, n),
        f = { module: { uri: n }, exports: o, require: c };
      i[n] = Promise.all(s.map((e) => f[e] || c(e))).then((e) => (t(...e), o));
    };
  }
  
  define(["./workbox-4ad13721"], function (e) {
    "use strict";
  
    // Precarga de recursos necesarios
    e.precacheAndRoute(
      [
        { url: "5010270.png", revision: "ceb13280bdfc41ea67b3c776493e1efa" },
        { url: "index.html", revision: "f170a3729430f8f43fd98a49e295046c" },
        { url: "manifest.json", revision: "8ee22c58ffbbb324e27d6e10f849ae78" },
        { url: "script.js", revision: "d9673741b239b466d815b077c5ef3ccd" },
        // Agregar más recursos necesarios aquí, como CSS, fuentes, u otras imágenes
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
  
    // Fallback para solicitudes que no están en caché
    self.addEventListener("fetch", (event) => {
      event.respondWith(
        caches.match(event.request).then((response) => {
          return (
            response ||
            fetch(event.request).catch(() => {
              if (event.request.destination === "document") {
                return caches.match("/index.html"); // Servir la página principal como fallback
              }
            })
          );
        })
      );
    });
  
    // Actualización del Service Worker
    self.addEventListener("message", (event) => {
      if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
      }
    });
  });
  