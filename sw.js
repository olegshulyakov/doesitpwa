if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const c=e=>n(e,r),a={module:{uri:r},exports:o,require:c};s[r]=Promise.all(i.map((e=>a[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-8f0ae5e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.3299843c.css",revision:null},{url:"assets/index.5465c6ea.js",revision:null},{url:"assets/pwa.3bff251a.js",revision:null},{url:"index.html",revision:"09c4e385f7f10a3b5a0c9e589b3ef47d"},{url:"pwa-192x192.png",revision:"ccbe97ec4f29e911d9e6ed8e7d041163"},{url:"pwa-512x512.png",revision:"5f4bfefd454e46b5f1f751ffa6004007"},{url:"manifest.json",revision:"8648a3fb6d1fcde85791fe2e16c5cea7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\.json$/,new e.NetworkFirst({cacheName:"data",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute((e=>["font","image","manifest","script","style"].includes(e.request.destination)),new e.CacheFirst({cacheName:"assets",plugins:[new e.ExpirationPlugin({maxEntries:500,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
