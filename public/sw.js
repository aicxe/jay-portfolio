/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts('workbox-v3.6.3/workbox-sw.js');
workbox.setConfig({ modulePathPrefix: 'workbox-v3.6.3' });

workbox.core.setCacheNameDetails({ prefix: 'gatsby-plugin-offline' });

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: 'webpack-runtime-c19c45213d6bcaca1c29.js',
  },
  {
    url: 'app-f568b9059371acf84deb.js',
  },
  {
    url:
      'component---node-modules-gatsby-plugin-offline-app-shell-js-b32739619f3e6abccd7a.js',
  },
  {
    url: 'offline-plugin-app-shell-fallback/index.html',
    revision: '4a3cd45b34f92c2d41bf5e035a537a37',
  },
  {
    url: 'page-data/offline-plugin-app-shell-fallback/page-data.json',
    revision: '160236f77f5d800b6a0bd5a709f61130',
  },
  {
    url: 'manifest.webmanifest',
    revision: '80218171fbe1f7c02663d30ff465229e',
  },
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /(\.js$|\.css$|static\/)/,
  workbox.strategies.cacheFirst(),
  'GET',
);
workbox.routing.registerRoute(
  /^https?:.*\page-data\/.*\/page-data\.json/,
  workbox.strategies.networkFirst(),
  'GET',
);
workbox.routing.registerRoute(
  /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
  workbox.strategies.staleWhileRevalidate(),
  'GET',
);
workbox.routing.registerRoute(
  /^https?:\/\/fonts\.googleapis\.com\/css/,
  workbox.strategies.staleWhileRevalidate(),
  'GET',
);

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`);

const { NavigationRoute } = workbox.routing;

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url);
  pathname = pathname.replace(new RegExp(`^`), ``);

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`);
  if (!resources || !(await caches.match(`/app-f568b9059371acf84deb.js`))) {
    return await fetch(event.request);
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request);
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`;
  return await caches.match(offlineShell);
});

workbox.routing.registerRoute(navigationRoute);

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources));
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear());
  },
};

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data;
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data);
});