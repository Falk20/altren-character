if(!self.define){let e,r={};const n=(n,t)=>(n=new URL(n+".js",t).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let a={};const i=e=>n(e,l),c={module:{uri:l},exports:a,require:i};r[l]=Promise.all(t.map((e=>c[e]||i(e)))).then((e=>(s(...e),a)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"altren-character"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/altren-character/css/app.bd38140a.css",revision:null},{url:"/altren-character/css/chunk-vendors.fae555e9.css",revision:null},{url:"/altren-character/fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"/altren-character/fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"/altren-character/fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"/altren-character/fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"/altren-character/index.html",revision:"ee2315ff8002375347ff3f940d65545e"},{url:"/altren-character/js/abilities.a556f617.js",revision:null},{url:"/altren-character/js/app.be655b16.js",revision:null},{url:"/altren-character/js/chunk-vendors.f261c9de.js",revision:null},{url:"/altren-character/js/skills.74caae89.js",revision:null},{url:"/altren-character/js/webfontloader.17ed5ff7.js",revision:null},{url:"/altren-character/manifest.json",revision:"687467269468498936611d95dca00d50"},{url:"/altren-character/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
