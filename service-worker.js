if(!self.define){let e,r={};const n=(n,t)=>(n=new URL(n+".js",t).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,l)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(r[s])return;let a={};const c=e=>n(e,s),i={module:{uri:s},exports:a,require:c};r[s]=Promise.all(t.map((e=>i[e]||c(e)))).then((e=>(l(...e),a)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"altren-character"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/altren-character/css/chunk-vendors.715ef7c6.css",revision:null},{url:"/altren-character/fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"/altren-character/fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"/altren-character/fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"/altren-character/fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"/altren-character/index.html",revision:"3b61c07c217eea3f60f9025e69c727e6"},{url:"/altren-character/js/abilities.c4d9a7e4.js",revision:null},{url:"/altren-character/js/app.07509cec.js",revision:null},{url:"/altren-character/js/chunk-vendors.5880497b.js",revision:null},{url:"/altren-character/js/inventory.a3a33d03.js",revision:null},{url:"/altren-character/js/personal.aebbf3e8.js",revision:null},{url:"/altren-character/js/skills.5c5de4fb.js",revision:null},{url:"/altren-character/js/stats.38a55b73.js",revision:null},{url:"/altren-character/js/webfontloader.bcfbae93.js",revision:null},{url:"/altren-character/manifest.json",revision:"687467269468498936611d95dca00d50"},{url:"/altren-character/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
