if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>n(e,r),t={module:{uri:r},exports:o,require:f};i[r]=Promise.all(s.map((e=>t[e]||f(e)))).then((e=>(c(...e),o)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.2c5c1677.js",revision:null},{url:"assets/index.d1c79afd.css",revision:null},{url:"assets/pwa.464e508d.js",revision:null},{url:"index.html",revision:"9304dbb93bce2b21bc2dc00524bbf415"},{url:"favicon.svg",revision:"64fe995b2a6187cd47fa1bb4d1cd3cd4"},{url:"favicon.ico",revision:"a16a91012d62d477a628f125fc9c4b8a"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"ff1deeb63f90a3b6d751ea412aabc0d3"},{url:"pwa-192x192.png",revision:"ccbe97ec4f29e911d9e6ed8e7d041163"},{url:"pwa-512x512.png",revision:"5f4bfefd454e46b5f1f751ffa6004007"},{url:"manifest.webmanifest",revision:"8648a3fb6d1fcde85791fe2e16c5cea7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
