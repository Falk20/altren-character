(self["webpackChunkaltren_character"]=self["webpackChunkaltren_character"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},1223:function(e,t,n){var r=n(5112),i=n(30),s=n(3070).f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},4019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,s,o=n(4019),a=n(9781),l=n(7854),u=n(614),c=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),v=n(3070).f,g=n(7976),y=n(9518),_=n(7674),b=n(5112),w=n(9711),k=n(9909),C=k.enforce,E=k.get,I=l.Int8Array,S=I&&I.prototype,T=l.Uint8ClampedArray,x=T&&T.prototype,A=I&&y(I),R=S&&y(S),N=Object.prototype,O=l.TypeError,P=b("toStringTag"),D=w("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",F=o&&!!_&&"Opera"!==d(l.opera),M=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!c(e))return!1;var t=d(e);return"DataView"===t||h(V,t)||h(U,t)},W=function(e){var t=y(e);if(c(t)){var n=E(t);return n&&h(n,L)?n[L]:W(t)}},$=function(e){if(!c(e))return!1;var t=d(e);return h(V,t)||h(U,t)},j=function(e){if($(e))return e;throw O("Target is not a typed array")},q=function(e){if(u(e)&&(!_||g(A,e)))return e;throw O(f(e)+" is not a typed array constructor")},H=function(e,t,n,r){if(a){if(n)for(var i in V){var s=l[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}R[e]&&!n||m(R,e,n?t:F&&S[e]||t,r)}},z=function(e,t,n){var r,i;if(a){if(_){if(n)for(r in V)if(i=l[r],i&&h(i,e))try{delete i[e]}catch(s){}if(A[e]&&!n)return;try{return m(A,e,n?t:F&&A[e]||t)}catch(s){}}for(r in V)i=l[r],!i||i[e]&&!n||m(i,e,t)}};for(r in V)i=l[r],s=i&&i.prototype,s?C(s)[L]=i:F=!1;for(r in U)i=l[r],s=i&&i.prototype,s&&(C(s)[L]=i);if((!F||!u(A)||A===Function.prototype)&&(A=function(){throw O("Incorrect invocation")},F))for(r in V)l[r]&&_(l[r],A);if((!F||!R||R===N)&&(R=A.prototype,F))for(r in V)l[r]&&_(l[r].prototype,R);if(F&&y(x)!==R&&_(x,R),a&&!h(R,P))for(r in M=!0,v(R,P,{get:function(){return c(this)?this[D]:void 0}}),V)l[r]&&p(l[r],D,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:F,TYPED_ARRAY_TAG:M&&D,aTypedArray:j,aTypedArrayConstructor:q,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:W,isView:B,isTypedArray:$,TypedArray:A,TypedArrayPrototype:R}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,l=r(t),u=s(l),c=i(o,u);if(e&&n!=n){while(u>c)if(a=l[c++],a!=a)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},712:function(e,t,n){var r=n(9974),i=n(8361),s=n(7908),o=n(6244),a=function(e){var t=1==e;return function(n,a,l){var u,c,h=s(n),d=i(h),f=r(a,l),p=o(d);while(p-- >0)if(u=d[p],c=f(u,p,h),c)switch(e){case 0:return u;case 1:return p}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),l=Object,u="Arguments"==s(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=l(e),a))?n:u?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},7741:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(o);e.exports=function(e,t){if(l&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),l=o.f,u=s.f,c=0;c<a.length;c++){var h=a[c];r(e,h)||n&&r(n,h)||l(e,h,u(t,h))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(c){}l?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,l=s.Deno,u=a&&a.versions||l&&l.version,c=u&&u.v8;c&&(r=c.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,n){var r=n(7293),i=n(9114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),l=n(9920),u=n(4705);e.exports=function(e,t){var n,c,h,d,f,p,m=e.target,v=e.global,g=e.stat;if(c=v?r:g?r[m]||a(m,{}):(r[m]||{}).prototype,c)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(c,h),d=p&&p.value):d=c[h],n=u(v?h:m+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(c,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},9974:function(e,t,n){var r=n(1702),i=n(9662),s=n(4374),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),l=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8340:function(e,t,n){var r=n(111),i=n(8880);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},9909:function(e,t,n){var r,i,s,o=n(8536),a=n(7854),l=n(1702),u=n(111),c=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",v=a.TypeError,g=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},_=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var b=d.state||(d.state=new g),w=l(b.get),k=l(b.has),C=l(b.set);r=function(e,t){if(k(b,e))throw new v(m);return t.facade=e,C(b,e,t),t},i=function(e){return w(b,e)||{}},s=function(e){return k(b,e)}}else{var E=f("state");p[E]=!0,r=function(e,t){if(h(e,E))throw new v(m);return t.facade=e,c(e,E,t),t},i=function(e){return h(e,E)?e[E]:{}},s=function(e){return h(e,E)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:_}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n==c||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},l=o.data={},u=o.NATIVE="N",c=o.POLYFILL="P";e.exports=o},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,l=n(2788),u=n(9909),c=u.enforce,h=u.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&(o?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&s(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=c(e);return s(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&h(this).source||l(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},133:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),i=n(614),s=n(2788),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},30:function(e,t,n){var r,i=n(9670),s=n(6048),o=n(748),a=n(3501),l=n(490),u=n(317),c=n(6200),h=">",d="<",f="prototype",p="script",m=c("IE_PROTO"),v=function(){},g=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},_=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",l.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?y(r):_():y(r);var e=o.length;while(e--)delete b[f][o[e]];return b()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(v[f]=i(e),n=new v,v[f]=null,n[m]=e):n=b(),void 0===t?n:s.f(n,t)}},6048:function(e,t,n){var r=n(9781),i=n(3353),s=n(3070),o=n(9670),a=n(5656),l=n(1956);t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=l(t),u=i.length,c=0;while(u>c)s.f(e,n=i[c++],r[n]);return e}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),l=TypeError,u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=c(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),l=n(4948),u=n(2597),c=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=l(t),c)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),l=o("IE_PROTO"),u=Object,c=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,l))return t[l];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?c:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),l=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,c=[];for(n in r)!i(a,n)&&i(r,n)&&l(c,n);while(t.length>u)i(r,n=t[u++])&&(~o(c,n)||l(c,n));return c}},1956:function(e,t,n){var r=n(6324),i=n(748);e.exports=Object.keys||function(e){return r(e,i)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),l=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},2626:function(e,t,n){var r=n(3070).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},4488:function(e){var t=TypeError;e.exports=function(e){if(void 0==e)throw t("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.23.5",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},4590:function(e,t,n){var r=n(3002),i=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw i("Wrong offset");return n}},3002:function(e,t,n){var r=n(9303),i=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw i("The argument can't be less than 0");return t}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),l=n(5112),u=TypeError,c=l("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,l=o(e,c);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(133),l=n(3307),u=i("wks"),c=r.Symbol,h=c&&c["for"],d=l?c:c&&c.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(c,e)?u[e]=c[e]:u[e]=l&&h?h(t):d(t)}return u[e]}},9191:function(e,t,n){"use strict";var r=n(5005),i=n(2597),s=n(8880),o=n(7976),a=n(7674),l=n(9920),u=n(2626),c=n(9587),h=n(6277),d=n(8340),f=n(7741),p=n(2914),m=n(9781),v=n(1913);e.exports=function(e,t,n,g){var y="stackTraceLimit",_=g?2:1,b=e.split("."),w=b[b.length-1],k=r.apply(null,b);if(k){var C=k.prototype;if(!v&&i(C,"cause")&&delete C.cause,!n)return k;var E=r("Error"),I=t((function(e,t){var n=h(g?t:e,void 0),r=g?new k(e):new k;return void 0!==n&&s(r,"message",n),p&&s(r,"stack",f(r.stack,2)),this&&o(C,this)&&c(r,this,I),arguments.length>_&&d(r,arguments[_]),r}));if(I.prototype=C,"Error"!==w?a?a(I,E):l(I,E,{name:!0}):m&&y in k&&(u(I,k,y),u(I,k,"prepareStackTrace")),l(I,k),!v)try{C.name!==w&&s(C,"name",w),C.constructor=I}catch(S){}return I}}},2262:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(9303),a=n(1223);r({target:"Array",proto:!0},{at:function(e){var t=i(this),n=s(t),r=o(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}}),a("at")},6699:function(e,t,n){"use strict";var r=n(2109),i=n(1318).includes,s=n(7293),o=n(1223),a=s((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},1703:function(e,t,n){var r=n(2109),i=n(7854),s=n(2104),o=n(9191),a="WebAssembly",l=i[a],u=7!==Error("e",{cause:7}).cause,c=function(e,t){var n={};n[e]=o(e,t,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(e,t){if(l&&l[e]){var n={};n[e]=o(a+"."+e,t,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};c("Error",(function(e){return function(t){return s(e,this,arguments)}})),c("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),c("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),c("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),c("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),c("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),c("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},4506:function(e,t,n){"use strict";var r=n(2109),i=n(1702),s=n(4488),o=n(9303),a=n(1340),l=n(7293),u=i("".charAt),c=l((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:c},{at:function(e){var t=a(s(this)),n=t.length,r=o(e),i=r>=0?r:n+r;return i<0||i>=n?void 0:u(t,i)}})},8675:function(e,t,n){"use strict";var r=n(260),i=n(6244),s=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(e){var t=o(this),n=i(t),r=s(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}))},2958:function(e,t,n){"use strict";var r=n(260),i=n(712).findLastIndex,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),i=n(712).findLast,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},3462:function(e,t,n){"use strict";var r=n(7854),i=n(6916),s=n(260),o=n(6244),a=n(4590),l=n(7908),u=n(7293),c=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=s.aTypedArray,m=s.exportTypedArrayMethod,v=!u((function(){var e=new Uint8ClampedArray(2);return i(f,e,{length:1,0:3},1),3!==e[1]})),g=v&&s.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new h(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));m("set",(function(e){p(this);var t=a(arguments.length>1?arguments[1]:void 0,1),n=l(e);if(v)return i(f,this,n,t);var r=this.length,s=o(n),u=0;if(s+t>r)throw c("Wrong length");while(u<s)this[t+u]=n[u++]}),!v||g)},1118:function(e,t,n){n(2958)},7380:function(e,t,n){n(3408)},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,l=n(2597),u=n(5787),c=n(9587),h=n(6277),d=n(3678),f=n(7741),p=n(9781),m=n(1913),v="DOMException",g=s("Error"),y=s(v),_=function(){u(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=g(t);return i.name=v,a(r,"stack",o(1,f(i.stack,1))),c(r,this,_),r},b=_.prototype=y.prototype,w="stack"in g(v),k="stack"in new y(1,2),C=y&&p&&Object.getOwnPropertyDescriptor(i,v),E=!!C&&!(C.writable&&C.configurable),I=w&&!E&&!k;r({global:!0,constructor:!0,forced:m||I},{DOMException:I?_:y});var S=s(v),T=S.prototype;if(T.constructor!==S)for(var x in m||a(T,"constructor",o(1,S)),d)if(l(d,x)){var A=d[x],R=A.s;l(S,R)||a(S,R,o(6,A.c))}},8099:function(){},9773:function(){},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return O},DV:function(){return H},GJ:function(){return j},L:function(){return c},LL:function(){return F},P0:function(){return A},Pz:function(){return N},Sg:function(){return P},UI:function(){return G},US:function(){return l},Wl:function(){return B},Yr:function(){return b},ZR:function(){return L},aH:function(){return R},b$:function(){return y},cI:function(){return U},dS:function(){return se},eu:function(){return k},g5:function(){return s},gK:function(){return ie},gQ:function(){return Z},h$:function(){return u},hl:function(){return w},hu:function(){return i},m9:function(){return ae},ne:function(){return ee},p$:function(){return d},pd:function(){return X},q4:function(){return x},r3:function(){return q},ru:function(){return g},tV:function(){return h},uI:function(){return v},ug:function(){return oe},vZ:function(){return K},w1:function(){return _},w9:function(){return $},xO:function(){return J},xb:function(){return z},z$:function(){return m},zd:function(){return Q}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,u=t>>2,c=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,l=a?n[e.charAt(i)]:64;++i;const u=i<e.length,c=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==l||null==c)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==l){const e=o<<4&240|l>>2;if(r.push(e),64!==c){const e=l<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){const t=o(e);return l.encodeByteArray(t,!0)},c=function(e){return u(e).replace(/\./g,"")},h=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function g(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function _(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function b(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function w(){try{return"object"===typeof indexedDB}catch(e){return!1}}function k(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function C(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=()=>C().__FIREBASE_DEFAULTS__,I=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/altren-character/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},S=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&h(e[1]);return t&&JSON.parse(t)},T=()=>{try{return E()||I()||S()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},x=e=>{var t,n;return null===(n=null===(t=T())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},A=e=>{const t=x(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},R=()=>{var e;return null===(e=T())||void 0===e?void 0:e.config},N=e=>{var t;return null===(t=T())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D="FirebaseError";class L extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=D,Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?M(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new L(r,o,n);return a}}function M(e,t){return e.replace(V,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const V=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return JSON.parse(e)}function B(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=U(h(s[0])||""),n=U(h(s[1])||""),i=s[2],r=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:r,signature:i}},$=function(e){const t=W(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},j=function(e){const t=W(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function H(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function G(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function K(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Y(n)&&Y(s)){if(!K(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Y(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Q(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function X(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let c=0;c<16;c++)n[c]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let c=0;c<16;c++)n[c]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let c=16;c<80;c++){const e=n[c-3]^n[c-8]^n[c-14]^n[c-16];n[c]=4294967295&(e<<1|e>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],u=this.chain_[4];for(let c=0;c<80;c++){c<40?c<20?(r=l^o&(a^l),i=1518500249):(r=o^a^l,i=1859775393):c<60?(r=o&a|l&(o|a),i=2400959708):(r=o^a^l,i=3395469782);const e=(s<<5|s>>>27)+r+u+i+n[c]&4294967295;u=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;while(r<t){if(0===s)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else while(r<t)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function ee(e,t){const n=new te(e,t);return n.subscribe.bind(n)}class te{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=ne(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=re),void 0===r.error&&(r.error=re),void 0===r.complete&&(r.complete=re);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ne(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function re(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const se=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const t=s-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},oe=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{B:function(){return o},BK:function(){return qe},Bj:function(){return s},EB:function(){return l},Fl:function(){return Ke},IU:function(){return Re},Jd:function(){return I},OT:function(){return Ee},PG:function(){return Se},SU:function(){return We},Um:function(){return Ce},Vh:function(){return ze},WL:function(){return je},X$:function(){return A},X3:function(){return Ae},XI:function(){return Ve},Xl:function(){return Ne},dq:function(){return Fe},iH:function(){return Me},j:function(){return T},lk:function(){return S},qj:function(){return ke},qq:function(){return w},yT:function(){return xe}});var r=n(2268);let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e){return new s(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}function l(e){i&&i.cleanups.push(e)}const u=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&v)>0,h=e=>(e.n&v)>0,d=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=v},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!h(i)?i.delete(e):t[n++]=i,i.w&=~v,i.n&=~v}t.length=n}},p=new WeakMap;let m=0,v=1;const g=30;let y;const _=Symbol(""),b=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=y,t=C;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,C=!0,v=1<<++m,m<=g?d(this):k(this),this.fn()}finally{m<=g&&f(this),v=1<<--m,y=this.parent,C=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(k(this),this.onStop&&this.onStop(),this.active=!1)}}function k(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let C=!0;const E=[];function I(){E.push(C),C=!1}function S(){const e=E.pop();C=void 0===e||e}function T(e,t,n){if(C&&y){let t=p.get(e);t||p.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=u());const i=void 0;x(r,i)}}function x(e,t){let n=!1;m<=g?h(e)||(e.n|=v,n=!c(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function A(e,t,n,i,s,o){const a=p.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,r.kJ)(e))a.forEach(((e,t)=>{("length"===t||t>=i)&&l.push(e)}));else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(a.get("length")):(l.push(a.get(_)),(0,r._N)(e)&&l.push(a.get(b)));break;case"delete":(0,r.kJ)(e)||(l.push(a.get(_)),(0,r._N)(e)&&l.push(a.get(b)));break;case"set":(0,r._N)(e)&&l.push(a.get(_));break}if(1===l.length)l[0]&&R(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);R(u(e))}}function R(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&N(r,t);for(const r of n)r.computed||N(r,t)}function N(e,t){(e!==y||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const O=(0,r.fY)("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),D=U(),L=U(!1,!0),F=U(!0),M=V();function V(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Re(this);for(let t=0,i=this.length;t<i;t++)T(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Re)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){I();const n=Re(this)[t].apply(this,e);return S(),n}})),e}function U(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?_e:ye:t?ge:ve).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(M,i))return Reflect.get(M,i,s);const a=Reflect.get(n,i,s);return((0,r.yk)(i)?P.has(i):O(i))?a:(e||T(n,"get",i),t?a:Fe(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ee(a):ke(a):a)}}const B=$(),W=$(!0);function $(e=!1){return function(t,n,i,s){let o=t[n];if(Te(o)&&Fe(o)&&!Fe(i))return!1;if(!e&&!Te(i)&&(xe(i)||(i=Re(i),o=Re(o)),!(0,r.kJ)(t)&&Fe(o)&&!Fe(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),l=Reflect.set(t,n,i,s);return t===Re(s)&&(a?(0,r.aU)(i,o)&&A(t,"set",n,i,o):A(t,"add",n,i)),l}}function j(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&A(e,"delete",t,void 0,i),s}function q(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&P.has(t)||T(e,"has",t),n}function H(e){return T(e,"iterate",(0,r.kJ)(e)?"length":_),Reflect.ownKeys(e)}const z={get:D,set:B,deleteProperty:j,has:q,ownKeys:H},G={get:F,set(e,t){return!0},deleteProperty(e,t){return!0}},K=(0,r.l7)({},z,{get:L,set:W}),Y=e=>e,J=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Re(e),s=Re(t);n||(t!==s&&T(i,"get",t),T(i,"get",s));const{has:o}=J(i),a=r?Y:n?Pe:Oe;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Re(n),i=Re(e);return t||(e!==i&&T(r,"has",e),T(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Z(e,t=!1){return e=e["__v_raw"],!t&&T(Re(e),"iterate",_),Reflect.get(e,"size",e)}function ee(e){e=Re(e);const t=Re(this),n=J(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function te(e,t){t=Re(t);const n=Re(this),{has:i,get:s}=J(n);let o=i.call(n,e);o||(e=Re(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function ne(e){const t=Re(this),{has:n,get:r}=J(t);let i=n.call(t,e);i||(e=Re(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&A(t,"delete",e,void 0,s),o}function re(){const e=Re(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function ie(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Re(s),a=t?Y:e?Pe:Oe;return!e&&T(o,"iterate",_),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function se(e,t,n){return function(...i){const s=this["__v_raw"],o=Re(s),a=(0,r._N)(o),l="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,c=s[e](...i),h=n?Y:t?Pe:Oe;return!t&&T(o,"iterate",u?b:_),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function oe(e){return function(...t){return"delete"!==e&&this}}function ae(){const e={get(e){return Q(this,e)},get size(){return Z(this)},has:X,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return Z(this)},has:X,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)})),[e,n,t,r]}const[le,ue,ce,he]=ae();function de(e,t){const n=t?e?he:ce:e?ue:le;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const fe={get:de(!1,!1)},pe={get:de(!1,!0)},me={get:de(!0,!1)};const ve=new WeakMap,ge=new WeakMap,ye=new WeakMap,_e=new WeakMap;function be(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function we(e){return e["__v_skip"]||!Object.isExtensible(e)?0:be((0,r.W7)(e))}function ke(e){return Te(e)?e:Ie(e,!1,z,fe,ve)}function Ce(e){return Ie(e,!1,K,pe,ge)}function Ee(e){return Ie(e,!0,G,me,ye)}function Ie(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=we(e);if(0===a)return e;const l=new Proxy(e,2===a?i:n);return s.set(e,l),l}function Se(e){return Te(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function xe(e){return!(!e||!e["__v_isShallow"])}function Ae(e){return Se(e)||Te(e)}function Re(e){const t=e&&e["__v_raw"];return t?Re(t):e}function Ne(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Oe=e=>(0,r.Kn)(e)?ke(e):e,Pe=e=>(0,r.Kn)(e)?Ee(e):e;function De(e){C&&y&&(e=Re(e),x(e.dep||(e.dep=u())))}function Le(e,t){e=Re(e),e.dep&&R(e.dep)}function Fe(e){return!(!e||!0!==e.__v_isRef)}function Me(e){return Ue(e,!1)}function Ve(e){return Ue(e,!0)}function Ue(e,t){return Fe(e)?e:new Be(e,t)}class Be{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Re(e),this._value=t?e:Oe(e)}get value(){return De(this),this._value}set value(e){e=this.__v_isShallow?e:Re(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Oe(e),Le(this,e))}}function We(e){return Fe(e)?e.value:e}const $e={get:(e,t,n)=>We(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Fe(i)&&!Fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function je(e){return Se(e)?e:new Proxy(e,$e)}function qe(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=ze(e,n);return t}class He{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ze(e,t,n){const r=e[t];return Fe(r)?r:new He(e,t,n)}class Ge{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Re(this);return De(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ke(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new Ge(i,s,o||!s,n);return a}},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return f},FN:function(){return Dn},Fl:function(){return Zn},HY:function(){return Zt},JJ:function(){return ne},Jd:function(){return Me},Ko:function(){return Ze},LL:function(){return Ye},P$:function(){return pe},Q2:function(){return Je},Q6:function(){return be},U2:function(){return ve},Uk:function(){return Cn},Us:function(){return Bt},Wm:function(){return _n},Y3:function(){return A},Y8:function(){return he},YP:function(){return oe},ZK:function(){return o},_:function(){return yn},aZ:function(){return we},bv:function(){return De},dG:function(){return xn},dl:function(){return Ie},f3:function(){return re},h:function(){return er},iD:function(){return hn},ic:function(){return Fe},j4:function(){return dn},kq:function(){return En},lR:function(){return Xt},m0:function(){return ie},mx:function(){return et},nK:function(){return _e},se:function(){return Se},up:function(){return Ge},w5:function(){return G},wF:function(){return Pe},wg:function(){return on},wy:function(){return je}});n(6699),n(1703);var r=n(4870),i=n(2268);const s=[];function o(e,...t){(0,r.Jd)();const n=s.length?s[s.length-1].component:null,i=n&&n.appContext.config.warnHandler,o=a();if(i)d(i,n,11,[e+t.join(""),n&&n.proxy,o.map((({vnode:e})=>`at <${Qn(n,e.type)}>`)).join("\n"),o]);else{const n=[`[Vue warn]: ${e}`,...t];o.length&&n.push("\n",...l(o)),console.warn(...n)}(0,r.lk)()}function a(){let e=s[s.length-1];if(!e)return[];const t=[];while(e){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function l(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:["\n"],...u(e))})),t}function u({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=!!e.component&&null==e.component.parent,i=` at <${Qn(e.component,e.type,r)}`,s=">"+n;return e.props?[i,...c(e.props),s]:[i+s]}function c(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...h(n,e[n]))})),n.length>3&&t.push(" ..."),t}function h(e,t,n){return(0,i.HD)(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"===typeof t||"boolean"===typeof t||null==t?n?t:[`${e}=${t}`]:(0,r.dq)(t)?(t=h(e,(0,r.IU)(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):(0,i.mf)(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=(0,r.IU)(t),n?t:[`${e}=`,t])}function d(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){p(s,t,n)}return i}function f(e,t,n,r){if((0,i.mf)(e)){const s=d(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{p(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(f(e[i],t,n,r));return s}function p(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void d(o,null,10,[e,i,s])}m(e,n,i,r)}function m(e,t,n,r=!0){console.error(e)}let v=!1,g=!1;const y=[];let _=0;const b=[];let w=null,k=0;const C=[];let E=null,I=0;const S=Promise.resolve();let T=null,x=null;function A(e){const t=T||S;return e?t.then(this?e.bind(this):e):t}function R(e){let t=_+1,n=y.length;while(t<n){const r=t+n>>>1,i=U(y[r]);i<e?t=r+1:n=r}return t}function N(e){y.length&&y.includes(e,v&&e.allowRecurse?_+1:_)||e===x||(null==e.id?y.push(e):y.splice(R(e.id),0,e),O())}function O(){v||g||(g=!0,T=S.then(B))}function P(e){const t=y.indexOf(e);t>_&&y.splice(t,1)}function D(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),O()}function L(e){D(e,w,b,k)}function F(e){D(e,E,C,I)}function M(e,t=null){if(b.length){for(x=t,w=[...new Set(b)],b.length=0,k=0;k<w.length;k++)w[k]();w=null,k=0,x=null,M(e,t)}}function V(e){if(M(),C.length){const e=[...new Set(C)];if(C.length=0,E)return void E.push(...e);for(E=e,E.sort(((e,t)=>U(e)-U(t))),I=0;I<E.length;I++)E[I]();E=null,I=0}}const U=e=>null==e.id?1/0:e.id;function B(e){g=!1,v=!0,M(e),y.sort(((e,t)=>U(e)-U(t)));i.dG;try{for(_=0;_<y.length;_++){const e=y[_];e&&!1!==e.active&&d(e,null,14)}}finally{_=0,y.length=0,V(e),v=!1,T=null,(y.length||b.length||C.length)&&B(e)}}new Set;new Map;function W(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>e.trim()))),t&&(s=n.map(i.He))}let l;let u=r[l=(0,i.hR)(t)]||r[l=(0,i.hR)((0,i._A)(t))];!u&&o&&(u=r[l=(0,i.hR)((0,i.rs)(t))]),u&&f(u,e,6,s);const c=r[l+"Once"];if(c){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,f(c,e,6,s)}}function $(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},l=!1;if(!(0,i.mf)(e)){const r=e=>{const n=$(e,t,!0);n&&(l=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||l?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),r.set(e,a),a):(r.set(e,null),null)}function j(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let q=null,H=null;function z(e){const t=q;return q=e,H=e&&e.type.__scopeId||null,t}function G(e,t=q,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&un(-1);const i=z(t),s=e(...n);return z(i),r._d&&un(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function K(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:l,attrs:u,emit:c,render:h,renderCache:d,data:f,setupState:m,ctx:v,inheritAttrs:g}=e;let y,_;const b=z(e);try{if(4&n.shapeFlag){const e=s||r;y=In(h.call(e,e,d,o,m,f,v)),_=u}else{const e=t;0,y=In(e.length>1?e(o,{attrs:u,slots:l,emit:c}):e(o,null)),_=t.props?u:Y(u)}}catch(k){rn.length=0,p(k,e,1),y=_n(tn)}let w=y;if(_&&!1!==g){const e=Object.keys(_),{shapeFlag:t}=w;e.length&&7&t&&(a&&e.some(i.tR)&&(_=J(_,a)),w=kn(w,_))}return n.dirs&&(w=kn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,z(b),y}const Y=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},J=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Q(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||X(r,o,u):!!o);if(1024&l)return!0;if(16&l)return r?X(r,o,u):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!j(u,n))return!0}}return!1}function X(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!j(n,s))return!0}return!1}function Z({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const ee=e=>e.__isSuspense;function te(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):F(e)}function ne(e,t){if(Pn){let n=Pn.provides;const r=Pn.parent&&Pn.parent.provides;r===n&&(n=Pn.provides=Object.create(r)),n[e]=t}else 0}function re(e,t,n=!1){const r=Pn||q;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}function ie(e,t){return ae(e,null,t)}const se={};function oe(e,t,n){return ae(e,t,n)}function ae(e,t,{immediate:n,deep:s,flush:o,onTrack:a,onTrigger:l}=i.kT){const u=Pn;let c,h,p=!1,m=!1;if((0,r.dq)(e)?(c=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(c=()=>e,s=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),c=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ce(e):(0,i.mf)(e)?d(e,u,2):void 0))):c=(0,i.mf)(e)?t?()=>d(e,u,2):()=>{if(!u||!u.isUnmounted)return h&&h(),f(e,u,3,[v])}:i.dG,t&&s){const e=c;c=()=>ce(e())}let v=e=>{h=b.onStop=()=>{d(e,u,4)}};if(Bn)return v=i.dG,t?n&&f(t,u,3,[c(),m?[]:void 0,v]):c(),i.dG;let g=m?[]:se;const y=()=>{if(b.active)if(t){const e=b.run();(s||p||(m?e.some(((e,t)=>(0,i.aU)(e,g[t]))):(0,i.aU)(e,g)))&&(h&&h(),f(t,u,3,[e,g===se?void 0:g,v]),g=e)}else b.run()};let _;y.allowRecurse=!!t,_="sync"===o?y:"post"===o?()=>Ut(y,u&&u.suspense):()=>L(y);const b=new r.qq(c,_);return t?n?y():g=b.run():"post"===o?Ut(b.run.bind(b),u&&u.suspense):b.run(),()=>{b.stop(),u&&u.scope&&(0,i.Od)(u.scope.effects,b)}}function le(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?ue(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=Pn;Ln(this);const l=ae(s,o.bind(r),n);return a?Ln(a):Fn(),l}function ue(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ce(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ce(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ce(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ce(e,t)}));else if((0,i.PO)(e))for(const n in e)ce(e[n],t);return e}function he(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return De((()=>{e.isMounted=!0})),Me((()=>{e.isUnmounting=!0})),e}const de=[Function,Array],fe={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:de,onEnter:de,onAfterEnter:de,onEnterCancelled:de,onBeforeLeave:de,onLeave:de,onAfterLeave:de,onLeaveCancelled:de,onBeforeAppear:de,onAppear:de,onAfterAppear:de,onAppearCancelled:de},setup(e,{slots:t}){const n=Dn(),i=he();let s;return()=>{const o=t.default&&be(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==tn){0,a=t,e=!0;break}}const l=(0,r.IU)(e),{mode:u}=l;if(i.isLeaving)return ge(a);const c=ye(a);if(!c)return ge(a);const h=ve(c,l,i,n);_e(c,h);const d=n.subTree,f=d&&ye(d);let p=!1;const{getTransitionKey:m}=c.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==tn&&(!pn(c,f)||p)){const e=ve(f,l,i,n);if(_e(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},ge(a);"in-out"===u&&c.type!==tn&&(e.delayLeave=(e,t,n)=>{const r=me(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},pe=fe;function me(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ve(e,t,n,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:g,onAppear:y,onAfterAppear:_,onAppearCancelled:b}=t,w=String(e.key),k=me(n,e),C=(e,t)=>{e&&f(e,r,9,t)},E=(e,t)=>{const n=t[1];C(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:o,persisted:a,beforeEnter(t){let r=l;if(!n.isMounted){if(!s)return;r=g||l}t._leaveCb&&t._leaveCb(!0);const i=k[w];i&&pn(e,i)&&i.el._leaveCb&&i.el._leaveCb(),C(r,[t])},enter(e){let t=u,r=c,i=h;if(!n.isMounted){if(!s)return;t=y||u,r=_||c,i=b||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,C(t?i:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?E(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();C(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),C(n?v:m,[t]),t._leaveCb=void 0,k[i]===e&&delete k[i])};k[i]=e,p?E(p,[t,o]):o()},clone(e){return ve(e,t,n,r)}};return I}function ge(e){if(Ce(e))return e=kn(e),e.children=null,e}function ye(e){return Ce(e)?e.children?e.children[0]:void 0:e}function _e(e,t){6&e.shapeFlag&&e.component?_e(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function be(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Zt?(128&o.patchFlag&&i++,r=r.concat(be(o.children,t,a))):(t||o.type!==tn)&&r.push(null!=a?kn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function we(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const ke=e=>!!e.type.__asyncLoader;const Ce=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ee(e,t){return(0,i.kJ)(e)?e.some((e=>Ee(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function Ie(e,t){Te(e,"a",t)}function Se(e,t){Te(e,"da",t)}function Te(e,t,n=Pn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ne(t,r,n),n){let e=n.parent;while(e&&e.parent)Ce(e.parent.vnode)&&xe(r,t,n,e),e=e.parent}}function xe(e,t,n,r){const s=Ne(t,e,r,!0);Ve((()=>{(0,i.Od)(r[t],s)}),n)}function Ae(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Re(e){return 128&e.shapeFlag?e.ssContent:e}function Ne(e,t,n=Pn,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),Ln(n);const s=f(t,n,e,i);return Fn(),(0,r.lk)(),s});return i?s.unshift(o):s.push(o),o}}const Oe=e=>(t,n=Pn)=>(!Bn||"sp"===e)&&Ne(e,t,n),Pe=Oe("bm"),De=Oe("m"),Le=Oe("bu"),Fe=Oe("u"),Me=Oe("bum"),Ve=Oe("um"),Ue=Oe("sp"),Be=Oe("rtg"),We=Oe("rtc");function $e(e,t=Pn){Ne("ec",e,t)}function je(e,t){const n=q;if(null===n)return e;const r=Gn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,l=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ce(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l})}return e}function qe(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];o&&(l.oldValue=o[a].value);let u=l.dir[i];u&&((0,r.Jd)(),f(u,n,8,[e.el,l,e,t]),(0,r.lk)())}}const He="components",ze="directives";function Ge(e,t){return Qe(He,e,!0,t)||e}const Ke=Symbol();function Ye(e){return(0,i.HD)(e)?Qe(He,e,!1)||e:e||Ke}function Je(e){return Qe(ze,e)}function Qe(e,t,n=!0,r=!1){const s=q||Pn;if(s){const n=s.type;if(e===He){const e=Jn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Xe(s[e]||n[e],t)||Xe(s.appContext[e],t);return!o&&r?n:o}}function Xe(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Ze(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function et(e){const t={};for(const n in e)t[(0,i.hR)(n)]=e[n];return t}const tt=e=>e?Mn(e)?Gn(e)||e.proxy:tt(e.parent):null,nt=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>tt(e.parent),$root:e=>tt(e.root),$emit:e=>e.emit,$options:e=>ut(e),$forceUpdate:e=>e.f||(e.f=()=>N(e.update)),$nextTick:e=>e.n||(e.n=A.bind(e.proxy)),$watch:e=>le.bind(e)}),rt={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:u,appContext:c}=e;let h;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return l[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return l[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return l[t]=4,n[t];it&&(l[t]=0)}}const d=nt[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(l[t]=4,n[t]):(p=c.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i.kT&&(0,i.RI)(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let l;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(l=o[0])&&(0,i.RI)(l,a)||(0,i.RI)(r,a)||(0,i.RI)(nt,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let it=!0;function st(e){const t=ut(e),n=e.proxy,s=e.ctx;it=!1,t.beforeCreate&&at(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:u,provide:c,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:v,activated:g,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:k,render:C,renderTracked:E,renderTriggered:I,errorCaptured:S,serverPrefetch:T,expose:x,inheritAttrs:A,components:R,directives:N,filters:O}=t,P=null;if(h&&ot(h,s,P,e.appContext.config.unwrapInjectedRef),l)for(const r in l){const e=l[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(it=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,l=Zn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(u)for(const r in u)lt(u[r],s,n,r);if(c){const e=(0,i.mf)(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{ne(t,e[t])}))}function D(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&at(d,e,"c"),D(Pe,f),D(De,p),D(Le,m),D(Fe,v),D(Ie,g),D(Se,y),D($e,S),D(We,E),D(Be,I),D(Me,b),D(Ve,k),D(Ue,T),(0,i.kJ)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});C&&e.render===i.dG&&(e.render=C),null!=A&&(e.inheritAttrs=A),R&&(e.components=R),N&&(e.directives=N)}function ot(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=pt(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?re(n.from||o,n.default,!0):re(n.from||o):re(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function at(e,t,n){f((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function lt(e,t,n,r){const s=r.includes(".")?ue(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&oe(s,n)}else if((0,i.mf)(e))oe(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>lt(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&oe(s,r,e)}else 0}function ut(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:i.length||n||r?(l={},i.length&&i.forEach((e=>ct(l,e,o,!0))),ct(l,t,o)):l=t,s.set(t,l),l}function ct(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&ct(e,s,n,!0),i&&i.forEach((t=>ct(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=ht[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const ht={data:dt,props:vt,emits:vt,methods:vt,computed:vt,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:vt,directives:vt,watch:gt,provide:dt,inject:ft};function dt(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function ft(e,t){return vt(pt(e),pt(t))}function pt(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function mt(e,t){return e?[...new Set([].concat(e,t))]:t}function vt(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function gt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=mt(e[r],t[r]);return n}function yt(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,mn,1),e.propsDefaults=Object.create(null),bt(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function _t(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,u=(0,r.IU)(o),[c]=e.propsOptions;let h=!1;if(!(s||l>0)||16&l){let r;bt(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(o[s]=wt(c,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(j(e.emitsOptions,s))continue;const l=t[s];if(c)if((0,i.RI)(a,s))l!==a[s]&&(a[s]=l,h=!0);else{const t=(0,i._A)(s);o[t]=wt(c,u,t,l,e,!1)}else l!==a[s]&&(a[s]=l,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function bt(e,t,n,s){const[o,a]=e.propsOptions;let l,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const c=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(l||(l={}))[h]=c:n[h]=c:j(e.emitsOptions,r)||r in s&&c===s[r]||(s[r]=c,u=!0)}if(a){const t=(0,r.IU)(n),s=l||i.kT;for(let r=0;r<a.length;r++){const l=a[r];n[l]=wt(o,t,l,s[l],e,!(0,i.RI)(s,l))}}return u}function wt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(Ln(s),r=i[n]=e.call(null,t),Fn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function kt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},l=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=kt(e,t,!0);(0,i.l7)(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);Ct(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(Ct(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=St(Boolean,r.type),n=St(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&l.push(t)}}}}const c=[a,l];return r.set(e,c),c}function Ct(e){return"$"!==e[0]}function Et(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function It(e,t){return Et(e)===Et(t)}function St(e,t){return(0,i.kJ)(t)?t.findIndex((t=>It(t,e))):(0,i.mf)(t)&&It(t,e)?0:-1}const Tt=e=>"_"===e[0]||"$stable"===e,xt=e=>(0,i.kJ)(e)?e.map(In):[In(e)],At=(e,t,n)=>{if(t._n)return t;const r=G(((...e)=>xt(t(...e))),n);return r._c=!1,r},Rt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Tt(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=At(s,n,r);else if(null!=n){0;const e=xt(n);t[s]=()=>e}}},Nt=(e,t)=>{const n=xt(t);e.slots.default=()=>n},Ot=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):Rt(t,e.slots={})}else e.slots={},t&&Nt(e,t);(0,i.Nj)(e.slots,mn,1)},Pt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,Rt(t,s)),a=t}else t&&(Nt(e,t),a={default:1});if(o)for(const i in s)Tt(i)||i in a||delete s[i]};function Dt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lt=0;function Ft(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=Dt(),o=new Set;let a=!1;const l=s.app={_uid:Lt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:tr,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(l,...t)):(0,i.mf)(e)&&(o.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(i,o,u){if(!a){0;const c=_n(n,r);return c.appContext=s,o&&t?t(c,i):e(c,i,u),a=!0,l._container=i,i.__vue_app__=l,Gn(c.component)||c.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l}};return l}}function Mt(e,t,n,s,o=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Mt(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,o)));if(ke(s)&&!o)return;const a=4&s.shapeFlag?Gn(s.component)||s.component.proxy:s.el,l=o?null:a,{i:u,r:c}=e;const h=t&&t.r,f=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=h&&h!==c&&((0,i.HD)(h)?(f[h]=null,(0,i.RI)(p,h)&&(p[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,i.mf)(c))d(c,u,12,[l,f]);else{const t=(0,i.HD)(c),s=(0,r.dq)(c);if(t||s){const r=()=>{if(e.f){const n=t?f[c]:c.value;o?(0,i.kJ)(n)&&(0,i.Od)(n,a):(0,i.kJ)(n)?n.includes(a)||n.push(a):t?(f[c]=[a],(0,i.RI)(p,c)&&(p[c]=f[c])):(c.value=[a],e.k&&(f[e.k]=c.value))}else t?(f[c]=l,(0,i.RI)(p,c)&&(p[c]=l)):s&&(c.value=l,e.k&&(f[e.k]=l))};l?(r.id=-1,Ut(r,n)):r()}else 0}}function Vt(){}const Ut=te;function Bt(e){return Wt(e)}function Wt(e,t){Vt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:u,createComment:c,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,cloneNode:v,insertStaticContent:g}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!pn(e,t)&&(r=X(e),H(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:u,ref:c,shapeFlag:h}=t;switch(u){case en:_(e,t,n,r);break;case tn:b(e,t,n,r);break;case nn:null==e&&w(t,n,r,o);break;case Zt:O(e,t,n,r,i,s,o,a,l);break;default:1&h?E(e,t,n,r,i,s,o,a,l):6&h?D(e,t,n,r,i,s,o,a,l):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,l,te)}null!=c&&i&&Mt(c,e&&e.ref,s,t||e,!t)},_=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=c(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},k=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},C=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},E=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?I(t,n,r,i,s,o,a,l):x(e,t,i,s,o,a,l)},I=(e,t,n,r,o,u,c,h)=>{let f,p;const{type:m,props:g,shapeFlag:y,transition:_,patchFlag:b,dirs:w}=e;if(e.el&&void 0!==v&&-1===b)f=e.el=v(e.el);else{if(f=e.el=l(e.type,u,g&&g.is,g),8&y?d(f,e.children):16&y&&T(e.children,f,null,r,o,u&&"foreignObject"!==m,c,h),w&&qe(e,null,r,"created"),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],u,e.children,r,o,J);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&An(p,r,e)}S(f,e,e.scopeId,c,r)}w&&qe(e,null,r,"beforeMount");const k=(!o||o&&!o.pendingBranch)&&_&&!_.persisted;k&&_.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||k||w)&&Ut((()=>{p&&An(p,r,e),k&&_.enter(f),w&&qe(e,null,r,"mounted")}),o)},S=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;S(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,s,o,a,l=0)=>{for(let u=l;u<e.length;u++){const l=e[u]=a?Sn(e[u]):In(e[u]);y(null,l,t,n,r,i,s,o,a)}},x=(e,t,n,r,s,o,l)=>{const u=t.el=e.el;let{patchFlag:c,dynamicChildren:h,dirs:f}=t;c|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let v;n&&$t(n,!1),(v=m.onVnodeBeforeUpdate)&&An(v,n,t,e),f&&qe(t,e,n,"beforeUpdate"),n&&$t(n,!0);const g=s&&"foreignObject"!==t.type;if(h?A(e.dynamicChildren,h,u,n,r,g,o):l||W(e,t,u,null,n,r,g,o,!1),c>0){if(16&c)R(u,t,p,m,n,r,s);else if(2&c&&p.class!==m.class&&a(u,"class",null,m.class,s),4&c&&a(u,"style",p.style,m.style,s),8&c){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],l=p[o],c=m[o];c===l&&"value"!==o||a(u,o,l,c,s,e.children,n,r,J)}}1&c&&e.children!==t.children&&d(u,t.children)}else l||null!=h||R(u,t,p,m,n,r,s);((v=m.onVnodeUpdated)||f)&&Ut((()=>{v&&An(v,n,t,e),f&&qe(t,e,n,"updated")}),r)},A=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],u=t[a],c=l.el&&(l.type===Zt||!pn(l,u)||70&l.shapeFlag)?f(l.el):n;y(l,u,c,null,r,i,s,o,!0)}},R=(e,t,n,r,s,o,l)=>{if(n!==r){for(const u in r){if((0,i.Gg)(u))continue;const c=r[u],h=n[u];c!==h&&"value"!==u&&a(e,u,h,c,l,t.children,s,o,J)}if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,l,t.children,s,o,J);"value"in r&&a(e,"value",n.value,r.value)}},O=(e,t,n,r,i,o,a,l,c)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(s(h,n,r),s(d,n,r),T(t.children,n,d,i,o,a,l,c)):f>0&&64&f&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,n,i,o,a,l),(null!=t.key||i&&t===i.subTree)&&jt(e,t,!0)):W(e,t,n,d,i,o,a,l,c)},D=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):L(t,n,r,i,s,o,l):F(e,t,l)},L=(e,t,n,r,i,s,o)=>{const a=e.component=On(e,r,i);if(Ce(e)&&(a.ctx.renderer=te),Wn(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=_n(tn);b(null,e,t,n)}}else U(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(Q(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,P(r.update),r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,l)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:c}=e,h=n;0,$t(e,!1),n?(n.el=c.el,B(e,n,l)):n=c,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&An(t,u,n,c),$t(e,!0);const d=K(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),X(p),e,o,a),n.el=d.el,null===h&&Z(e,d.el),s&&Ut(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Ut((()=>An(t,u,n,c)),o)}else{let r;const{el:l,props:u}=t,{bm:c,m:h,parent:d}=e,f=ke(t);if($t(e,!1),c&&(0,i.ir)(c),!f&&(r=u&&u.onVnodeBeforeMount)&&An(r,d,t),$t(e,!0),l&&re){const n=()=>{e.subTree=K(e),re(l,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=K(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&Ut(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;Ut((()=>An(r,d,e)),o)}(256&t.shapeFlag||d&&ke(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Ut(e.a,o),e.isMounted=!0,t=n=s=null}},c=e.effect=new r.qq(u,(()=>N(h)),e.scope),h=e.update=()=>c.run();h.id=e.uid,$t(e,!0),h()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,_t(e,t.props,i,n),Pt(e,t.children,n),(0,r.Jd)(),M(void 0,e.update),(0,r.lk)()},W=(e,t,n,r,i,s,o,a,l=!1)=>{const u=e&&e.children,c=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void j(u,h,n,r,i,s,o,a,l);if(256&f)return void $(u,h,n,r,i,s,o,a,l)}8&p?(16&c&&J(u,i,s),h!==u&&d(n,h)):16&c?16&p?j(u,h,n,r,i,s,o,a,l):J(u,i,s,!0):(8&c&&d(n,""),16&p&&T(h,n,r,i,s,o,a,l))},$=(e,t,n,r,s,o,a,l,u)=>{e=e||i.Z6,t=t||i.Z6;const c=e.length,h=t.length,d=Math.min(c,h);let f;for(f=0;f<d;f++){const r=t[f]=u?Sn(t[f]):In(t[f]);y(e[f],r,n,null,s,o,a,l,u)}c>h?J(e,s,o,!0,!1,d):T(t,n,r,s,o,a,l,u,d)},j=(e,t,n,r,s,o,a,l,u)=>{let c=0;const h=t.length;let d=e.length-1,f=h-1;while(c<=d&&c<=f){const r=e[c],i=t[c]=u?Sn(t[c]):In(t[c]);if(!pn(r,i))break;y(r,i,n,null,s,o,a,l,u),c++}while(c<=d&&c<=f){const r=e[d],i=t[f]=u?Sn(t[f]):In(t[f]);if(!pn(r,i))break;y(r,i,n,null,s,o,a,l,u),d--,f--}if(c>d){if(c<=f){const e=f+1,i=e<h?t[e].el:r;while(c<=f)y(null,t[c]=u?Sn(t[c]):In(t[c]),n,i,s,o,a,l,u),c++}}else if(c>f)while(c<=d)H(e[c],s,o,!0),c++;else{const p=c,m=c,v=new Map;for(c=m;c<=f;c++){const e=t[c]=u?Sn(t[c]):In(t[c]);null!=e.key&&v.set(e.key,c)}let g,_=0;const b=f-m+1;let w=!1,k=0;const C=new Array(b);for(c=0;c<b;c++)C[c]=0;for(c=p;c<=d;c++){const r=e[c];if(_>=b){H(r,s,o,!0);continue}let i;if(null!=r.key)i=v.get(r.key);else for(g=m;g<=f;g++)if(0===C[g-m]&&pn(r,t[g])){i=g;break}void 0===i?H(r,s,o,!0):(C[i-m]=c+1,i>=k?k=i:w=!0,y(r,t[i],n,null,s,o,a,l,u),_++)}const E=w?qt(C):i.Z6;for(g=E.length-1,c=b-1;c>=0;c--){const e=m+c,i=t[e],d=e+1<h?t[e+1].el:r;0===C[c]?y(null,i,n,d,s,o,a,l,u):w&&(g<0||c!==E[g]?q(i,n,d,2):g--)}}},q=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:l,children:u,shapeFlag:c}=e;if(6&c)return void q(e.component.subTree,t,n,r);if(128&c)return void e.suspense.move(t,n,r);if(64&c)return void a.move(e,t,n,te);if(a===Zt){s(o,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===nn)return void k(e,t,n);const h=2!==r&&1&c&&l;if(h)if(0===r)l.beforeEnter(o),s(o,t,n),Ut((()=>l.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=l,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:u,shapeFlag:c,patchFlag:h,dirs:d}=e;if(null!=a&&Mt(a,null,n,e,!0),256&c)return void t.ctx.deactivate(e);const f=1&c&&d,p=!ke(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&An(m,t,e),6&c)Y(e.component,n,r);else{if(128&c)return void e.suspense.unmount(n,r);f&&qe(e,null,t,"beforeUnmount"),64&c?e.type.remove(e,t,n,i,te,r):u&&(s!==Zt||h>0&&64&h)?J(u,t,n,!1,!0):(s===Zt&&384&h||!i&&16&c)&&J(l,t,n),r&&z(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&Ut((()=>{m&&An(m,t,e),f&&qe(e,null,t,"unmounted")}),n)},z=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Zt)return void G(n,r);if(t===nn)return void C(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},G=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Y=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:l}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,H(a,e,t,n)),l&&Ut(l,t),Ut((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,r,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),V(),t._vnode=e},te={p:y,um:H,m:q,r:z,mt:L,mc:T,pc:W,pbc:A,n:X,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:Ft(ee,ne)}}function $t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function jt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=Sn(s[i]),t.el=e.el),n||jt(e,t))}}function qt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Ht=e=>e.__isTeleport,zt=e=>e&&(e.disabled||""===e.disabled),Gt=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,Kt=(e,t)=>{const n=e&&e.to;if((0,i.HD)(n)){if(t){const e=t(n);return e}return null}return n},Yt={__isTeleport:!0,process(e,t,n,r,i,s,o,a,l,u){const{mc:c,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:v}}=u,g=zt(t.props);let{shapeFlag:y,children:_,dynamicChildren:b}=t;if(null==e){const e=t.el=m(""),u=t.anchor=m("");f(e,n,r),f(u,n,r);const h=t.target=Kt(t.props,p),d=t.targetAnchor=m("");h&&(f(d,h),o=o||Gt(h));const v=(e,t)=>{16&y&&c(_,e,t,i,s,o,a,l)};g?v(n,u):h&&v(h,d)}else{t.el=e.el;const r=t.anchor=e.anchor,c=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=zt(e.props),v=m?n:c,y=m?r:f;if(o=o||Gt(c),b?(d(e.dynamicChildren,b,v,i,s,o,a),jt(e,t,!0)):l||h(e,t,v,y,i,s,o,a,!1),g)m||Jt(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Kt(t.props,p);e&&Jt(t,e,null,u,0)}else m&&Jt(t,c,f,u,1)}},remove(e,t,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:u,targetAnchor:c,target:h,props:d}=e;if(h&&s(c),(o||!zt(d))&&(s(u),16&a))for(let f=0;f<l.length;f++){const e=l[f];i(e,t,n,!0,!!e.dynamicChildren)}},move:Jt,hydrate:Qt};function Jt(e,t,n,{o:{insert:r},m:i},s=2){0===s&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:c}=e,h=2===s;if(h&&r(o,t,n),(!h||zt(c))&&16&l)for(let d=0;d<u.length;d++)i(u[d],t,n,2);h&&r(a,t,n)}function Qt(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},u){const c=t.target=Kt(t.props,l);if(c){const l=c._lpa||c.firstChild;if(16&t.shapeFlag)if(zt(t.props))t.anchor=u(o(e),t,a(e),n,r,i,s),t.targetAnchor=l;else{t.anchor=o(e);let a=l;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,c._lpa=t.targetAnchor&&o(t.targetAnchor);break}u(l,t,c,n,r,i,s)}}return t.anchor&&o(t.anchor)}const Xt=Yt,Zt=Symbol(void 0),en=Symbol(void 0),tn=Symbol(void 0),nn=Symbol(void 0),rn=[];let sn=null;function on(e=!1){rn.push(sn=e?null:[])}function an(){rn.pop(),sn=rn[rn.length-1]||null}let ln=1;function un(e){ln+=e}function cn(e){return e.dynamicChildren=ln>0?sn||i.Z6:null,an(),ln>0&&sn&&sn.push(e),e}function hn(e,t,n,r,i,s){return cn(yn(e,t,n,r,i,s,!0))}function dn(e,t,n,r,i){return cn(_n(e,t,n,r,i,!0))}function fn(e){return!!e&&!0===e.__v_isVNode}function pn(e,t){return e.type===t.type&&e.key===t.key}const mn="__vInternal",vn=({key:e})=>null!=e?e:null,gn=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:q,r:e,k:t,f:!!n}:e:null;function yn(e,t=null,n=null,r=0,s=null,o=(e===Zt?0:1),a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vn(t),ref:t&&gn(t),scopeId:H,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(Tn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),ln>0&&!a&&sn&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&sn.push(u),u}const _n=bn;function bn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Ke||(e=tn),fn(e)){const r=kn(e,t,!0);return n&&Tn(r,n),ln>0&&!a&&sn&&(6&r.shapeFlag?sn[sn.indexOf(e)]=r:sn.push(r)),r.patchFlag|=-2,r}if(Xn(e)&&(e=e.__vccOpts),t){t=wn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const l=(0,i.HD)(e)?1:ee(e)?128:Ht(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return yn(e,t,n,s,o,l,a,!0)}function wn(e){return e?(0,r.X3)(e)||mn in e?(0,i.l7)({},e):e:null}function kn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,l=t?xn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&vn(l),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(gn(t)):[s,gn(t)]:gn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Zt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kn(e.ssContent),ssFallback:e.ssFallback&&kn(e.ssFallback),el:e.el,anchor:e.anchor};return u}function Cn(e=" ",t=0){return _n(en,null,e,t)}function En(e="",t=!1){return t?(on(),dn(tn,null,e)):_n(tn,null,e)}function In(e){return null==e||"boolean"===typeof e?_n(tn):(0,i.kJ)(e)?_n(Zt,null,e.slice()):"object"===typeof e?Sn(e):_n(en,null,String(e))}function Sn(e){return null===e.el||e.memo?e:kn(e)}function Tn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Tn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||mn in t?3===r&&q&&(1===q.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=q}}else(0,i.mf)(t)?(t={default:t,_ctx:q},n=32):(t=String(t),64&r?(n=16,t=[Cn(t)]):n=8);e.children=t,e.shapeFlag|=n}function xn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function An(e,t,n,r=null){f(e,t,7,[n,r])}const Rn=Dt();let Nn=0;function On(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Rn,a={uid:Nn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kt(s,o),emitsOptions:$(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=W.bind(null,a),e.ce&&e.ce(a),a}let Pn=null;const Dn=()=>Pn||q,Ln=e=>{Pn=e,e.scope.on()},Fn=()=>{Pn&&Pn.scope.off(),Pn=null};function Mn(e){return 4&e.vnode.shapeFlag}let Vn,Un,Bn=!1;function Wn(e,t=!1){Bn=t;const{props:n,children:r}=e.vnode,i=Mn(e);yt(e,n,i,t),Ot(e,r);const s=i?$n(e,t):void 0;return Bn=!1,s}function $n(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,rt));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?zn(e):null;Ln(e),(0,r.Jd)();const o=d(s,e,0,[e.props,n]);if((0,r.lk)(),Fn(),(0,i.tI)(o)){if(o.then(Fn,Fn),t)return o.then((n=>{jn(e,n,t)})).catch((t=>{p(t,e,0)}));e.asyncDep=o}else jn(e,o,t)}else qn(e,t)}function jn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),qn(e,n)}function qn(e,t,n){const s=e.type;if(!e.render){if(!t&&Vn&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Vn(t,l)}}e.render=s.render||i.dG,Un&&Un(e)}Ln(e),(0,r.Jd)(),st(e),(0,r.lk)(),Fn()}function Hn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function zn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Hn(e))},slots:e.slots,emit:e.emit,expose:t}}function Gn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in nt?nt[n](e):void 0}}))}const Kn=/(?:^|[-_])(\w)/g,Yn=e=>e.replace(Kn,(e=>e.toUpperCase())).replace(/[-_]/g,"");function Jn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Qn(e,t,n=!1){let r=Jn(t);if(!r&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(r=e[1])}if(!r&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?Yn(r):n?"App":"Anonymous"}function Xn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Zn=(e,t)=>(0,r.Fl)(e,t,Bn);function er(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?fn(t)?_n(e,null,[t]):_n(e,t):_n(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&fn(n)&&(n=[n]),_n(e,t,n))}Symbol("");const tr="3.2.37"},9242:function(e,t,n){"use strict";n.d(t,{F8:function(){return Ce},W3:function(){return ie},YZ:function(){return be},ri:function(){return xe},uT:function(){return V}});n(6699);var r=n(2268),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,l=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{l.innerHTML=r?`<svg>${e}</svg>`:e;const i=l.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function c(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)f(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=v(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function v(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const g="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function _(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{e[t]=n}catch(u){0}l&&e.removeAttribute(t)}const[b,w]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let k=0;const C=Promise.resolve(),E=()=>{k=0},I=()=>k||(C.then(E),k=b());function S(e,t,n,r){e.addEventListener(t,n,r)}function T(e,t,n,r){e.removeEventListener(t,n,r)}function x(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=R(t);if(r){const o=s[t]=N(r,i);S(e,n,o,a)}else o&&(T(e,n,o,a),s[t]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function R(e){let t;if(A.test(e)){let n;t={};while(n=e.match(A))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function N(e,t){const n=e=>{const r=e.timeStamp||b();(w||r>=n.attached-1)&&(0,i.$d)(O(e,n.value),t,5,[e])};return n.value=e,n.attached=I(),n}function O(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const P=/^on[a-z]/,D=(e,t,n,i,s=!1,o,a,l,u)=>{"class"===t?c(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||x(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):L(e,t,i,s))?_(e,t,i,o,a,l,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function L(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&P.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!P.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const F="transition",M="animation",V=(e,{slots:t})=>(0,i.h)(i.P$,j(e),t);V.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},B=V.props=(0,r.l7)({},i.P$.props,U),W=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},$=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const r in e)r in U||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:c=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=q(s),v=m&&m[0],g=m&&m[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:b,onLeave:w,onLeaveCancelled:k,onBeforeAppear:C=y,onAppear:E=_,onAppearCancelled:I=b}=t,S=(e,t,n)=>{G(e,t?h:l),G(e,t?c:a),n&&n()},T=(e,t)=>{e._isLeaving=!1,G(e,d),G(e,p),G(e,f),t&&t()},x=e=>(t,n)=>{const r=e?E:_,s=()=>S(t,e,n);W(r,[t,s]),K((()=>{G(t,e?u:o),z(t,e?h:l),$(r)||J(t,i,v,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){W(y,[e]),z(e,o),z(e,a)},onBeforeAppear(e){W(C,[e]),z(e,u),z(e,c)},onEnter:x(!1),onAppear:x(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>T(e,t);z(e,d),ee(),z(e,f),K((()=>{e._isLeaving&&(G(e,d),z(e,p),$(w)||J(e,i,g,n))})),W(w,[e,n])},onEnterCancelled(e){S(e,!1),W(b,[e])},onAppearCancelled(e){S(e,!0),W(I,[e])},onLeaveCancelled(e){T(e),W(k,[e])}})}function q(e){if(null==e)return null;if((0,r.Kn)(e))return[H(e.enter),H(e.leave)];{const t=H(e);return[t,t]}}function H(e){const t=(0,r.He)(e);return t}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function G(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function K(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Y=0;function J(e,t,n,r){const i=e._endId=++Y,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Q(e,t);if(!o)return r();const u=o+"end";let c=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++c>=l&&h()};setTimeout((()=>{c<l&&h()}),a+1),e.addEventListener(u,d)}function Q(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(F+"Delay"),s=r(F+"Duration"),o=X(i,s),a=r(M+"Delay"),l=r(M+"Duration"),u=X(a,l);let c=null,h=0,d=0;t===F?o>0&&(c=F,h=o,d=s.length):t===M?u>0&&(c=M,h=u,d=l.length):(h=Math.max(o,u),c=h>0?o>u?F:M:null,d=c?c===F?s.length:l.length:0);const f=c===F&&/\b(transform|all)(,|$)/.test(n[F+"Property"]);return{type:c,timeout:h,propCount:d,hasTransform:f}}function X(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Z(t)+Z(e[n]))))}function Z(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ee(){return document.body.offsetHeight}const te=new WeakMap,ne=new WeakMap,re={name:"TransitionGroup",props:(0,r.l7)({},B,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!le(o[0].el,n.vnode.el,t))return;o.forEach(se),o.forEach(oe);const r=o.filter(ae);ee(),r.forEach((e=>{const n=e.el,r=n.style;z(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,G(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const l=(0,s.IU)(e),u=j(l);let c=l.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,u,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,u,r,n)),te.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(c,null,a)}}},ie=re;function se(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function oe(e){ne.set(e,e.el.getBoundingClientRect())}function ae(e){const t=te.get(e),n=ne.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function le(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=Q(r);return i.removeChild(r),s}const ue=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ce(e){e.target.composing=!0}function he(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const de={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=ue(s);const o=i||s.props&&"number"===s.props.type;S(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.He)(i)),e._assign(i)})),n&&S(e,"change",(()=>{e.value=e.value.trim()})),t||(S(e,"compositionstart",ce),S(e,"compositionend",he),S(e,"change",he))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=ue(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},fe={deep:!0,created(e,t,n){e._assign=ue(n),S(e,"change",(()=>{const t=e._modelValue,n=ye(e),i=e.checked,s=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),o=-1!==e;if(i&&!o)s(t.concat(n));else if(!i&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,r.DM)(t)){const e=new Set(t);i?e.add(n):e.delete(n),s(e)}else s(_e(e,i))}))},mounted:pe,beforeUpdate(e,t,n){e._assign=ue(n),pe(e,t,n)}};function pe(e,{value:t,oldValue:n},i){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,i.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=(0,r.WV)(t,_e(e,!0)))}const me={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=ue(n),S(e,"change",(()=>{e._assign(ye(e))}))},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=ue(i),t!==n&&(e.checked=(0,r.WV)(t,i.props.value))}},ve={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=(0,r.DM)(t);S(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.He)(ye(e)):ye(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=ue(i)},mounted(e,{value:t}){ge(e,t)},beforeUpdate(e,t,n){e._assign=ue(n)},updated(e,{value:t}){ge(e,t)}};function ge(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,s=e.options.length;i<s;i++){const s=e.options[i],o=ye(s);if(n)(0,r.kJ)(t)?s.selected=(0,r.hq)(t,o)>-1:s.selected=t.has(o);else if((0,r.WV)(ye(s),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function ye(e){return"_value"in e?e._value:e.value}function _e(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const be={created(e,t,n){ke(e,t,n,null,"created")},mounted(e,t,n){ke(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){ke(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){ke(e,t,n,r,"updated")}};function we(e,t){switch(e){case"SELECT":return ve;case"TEXTAREA":return de;default:switch(t){case"checkbox":return fe;case"radio":return me;default:return de}}}function ke(e,t,n,r,i){const s=we(e.tagName,n.props&&n.props.type),o=s[i];o&&o(e,t,n,r)}const Ce={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Ee(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),Ee(e,!0),r.enter(e)):r.leave(e,(()=>{Ee(e,!1)})):Ee(e,t))},beforeUnmount(e,{value:t}){Ee(e,t)}};function Ee(e,t){e.style.display=t?e._vod:"none"}const Ie=(0,r.l7)({patchProp:D},u);let Se;function Te(){return Se||(Se=(0,i.Us)(Ie))}const xe=(...e)=>{const t=Te().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Ae(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Ae(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},2268:function(e,t,n){"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return f},DM:function(){return O},E9:function(){return re},F7:function(){return E},Gg:function(){return q},HD:function(){return L},He:function(){return te},Kn:function(){return M},NO:function(){return k},Nj:function(){return ee},Od:function(){return T},PO:function(){return $},Pq:function(){return a},RI:function(){return A},S0:function(){return j},W7:function(){return W},WV:function(){return m},Z6:function(){return b},_A:function(){return G},_N:function(){return N},aU:function(){return X},dG:function(){return w},e1:function(){return s},fY:function(){return r},hR:function(){return Q},hq:function(){return v},ir:function(){return Z},j5:function(){return u},kC:function(){return J},kJ:function(){return R},kT:function(){return _},l7:function(){return S},mf:function(){return D},rs:function(){return Y},tI:function(){return V},tR:function(){return I},yA:function(){return l},yk:function(){return F},zw:function(){return g}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function l(e){return!!e||""===e}function u(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=L(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return L(e)||M(e)?e:void 0}const c=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(c).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(L(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(M(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=P(e),r=P(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=F(e),r=F(t),n||r)return e===t;if(n=R(e),r=R(t),n||r)return!(!n||!r)&&p(e,t);if(n=M(e),r=M(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function v(e,t){return e.findIndex((e=>m(e,t)))}const g=e=>L(e)?e:null==e?"":R(e)||M(e)&&(e.toString===U||!D(e.toString))?JSON.stringify(e,y,2):String(e),y=(e,t)=>t&&t.__v_isRef?y(e,t.value):N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:O(t)?{[`Set(${t.size})`]:[...t.values()]}:!M(t)||R(t)||$(t)?t:String(t),_={},b=[],w=()=>{},k=()=>!1,C=/^on[^a-z]/,E=e=>C.test(e),I=e=>e.startsWith("onUpdate:"),S=Object.assign,T=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},x=Object.prototype.hasOwnProperty,A=(e,t)=>x.call(e,t),R=Array.isArray,N=e=>"[object Map]"===B(e),O=e=>"[object Set]"===B(e),P=e=>"[object Date]"===B(e),D=e=>"function"===typeof e,L=e=>"string"===typeof e,F=e=>"symbol"===typeof e,M=e=>null!==e&&"object"===typeof e,V=e=>M(e)&&D(e.then)&&D(e.catch),U=Object.prototype.toString,B=e=>U.call(e),W=e=>B(e).slice(8,-1),$=e=>"[object Object]"===B(e),j=e=>L(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,q=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},z=/-(\w)/g,G=H((e=>e.replace(z,((e,t)=>t?t.toUpperCase():"")))),K=/\B([A-Z])/g,Y=H((e=>e.replace(K,"-$1").toLowerCase())),J=H((e=>e.charAt(0).toUpperCase()+e.slice(1))),Q=H((e=>e?`on${J(e)}`:"")),X=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},9583:function(e,t,n){"use strict";n(1703);
/*!
 * maska v1.5.0
 * (c) 2019-2021 Alexander Shabunevich
 * Released under the MIT License.
 */
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={"#":{pattern:/[0-9]/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,uppercase:!0},a:{pattern:/[a-zA-Z]/,lowercase:!0},"!":{escape:!0},"*":{repeat:!0}};function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return c(t).length>1?h(t)(e,t,n,r):d(e,t,n,r)}function c(e){try{return JSON.parse(e)}catch(i){return[e]}}function h(e){var t=c(e).sort((function(e,t){return e.length-t.length}));return function(e,r,i){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=t.map((function(t){return d(e,t,i,!1)})),a=o.pop();for(var l in t)if(n(a,t[l],i))return d(e,t[l],i,s);return""};function n(e,t,n){for(var r in n)n[r].escape&&(t=t.replace(new RegExp(r+".{1}","g"),""));return t.split("").filter((function(e){return n[e]&&n[e].pattern})).length>=e.length}}function d(e,t,n){for(var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=0,s=0,o="",a="";i<t.length&&s<e.length;){var l=t[i],u=e[s],c=n[l];if(c&&c.pattern)c.pattern.test(u)&&(o+=f(u,c),i++,r&&t[i]&&(n[t[i]]?n[t[i]]&&n[t[i]].escape&&(o+=t[i+1],i+=2):(o+=t[i],i++))),s++;else if(c&&c.repeat){var h=n[t[i-1]];h&&!h.pattern.test(u)?i++:i--}else c&&c.escape&&(l=t[++i]),r&&(o+=l),u===l&&s++,i++}for(;r&&i<t.length;){var d=t[i];if(n[d]){a="";break}a+=d,i++}return o+a}function f(e,t){return t.transform&&(e=t.transform(e)),t.uppercase?e.toLocaleUpperCase():t.lowercase?e.toLocaleLowerCase():e}function p(e){return e instanceof HTMLInputElement?e:e.querySelector("input")||e}function m(e){return"[object String]"===Object.prototype.toString.call(e)}var v,g=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,e),!t)throw new Error("Maska: no element for mask");if(null!=i.preprocessor&&"function"!=typeof i.preprocessor)throw new Error("Maska: preprocessor must be a function");if(i.tokens)for(var s in i.tokens)i.tokens[s]=a({},i.tokens[s]),i.tokens[s].pattern&&m(i.tokens[s].pattern)&&(i.tokens[s].pattern=new RegExp(i.tokens[s].pattern));this._opts={mask:i.mask,tokens:a(a({},l),i.tokens),preprocessor:i.preprocessor},this._el=m(t)?document.querySelectorAll(t):t.length?t:[t],this.inputEvent=function(e){return n.updateValue(e.target,e)},this.init()}var t,n,s;return t=e,(n=[{key:"init",value:function(){for(var e=this,t=function(t){var n=p(e._el[t]);!e._opts.mask||n.dataset.mask&&n.dataset.mask===e._opts.mask||(n.dataset.mask=e._opts.mask),setTimeout((function(){return e.updateValue(n)}),0),n.dataset.maskInited||(n.dataset.maskInited=!0,n.addEventListener("input",e.inputEvent),n.addEventListener("beforeinput",e.beforeInput))},n=0;n<this._el.length;n++)t(n)}},{key:"destroy",value:function(){for(var e=0;e<this._el.length;e++){var t=p(this._el[e]);t.removeEventListener("input",this.inputEvent),t.removeEventListener("beforeinput",this.beforeInput),delete t.dataset.mask,delete t.dataset.maskInited}}},{key:"updateValue",value:function(e,t){if(e&&e.type){var n=e.type.match(/^number$/i)&&e.validity.badInput;if(!e.value&&!n||!e.dataset.mask)return e.dataset.maskRawValue="",void this.dispatch("maska",e,t);var r=e.selectionEnd,i=e.value,s=i[r-1];e.dataset.maskRawValue=u(e.value,e.dataset.mask,this._opts.tokens,!1);var o=e.value;this._opts.preprocessor&&(o=this._opts.preprocessor(o)),e.value=u(o,e.dataset.mask,this._opts.tokens),t&&"insertText"===t.inputType&&r===i.length&&(r=e.value.length),function(e,t,n){for(;t&&t<e.value.length&&e.value.charAt(t-1)!==n;)t++;(e.type?e.type.match(/^(text|search|password|tel|url)$/i):!e.type)&&e===document.activeElement&&(e.setSelectionRange(t,t),setTimeout((function(){e.setSelectionRange(t,t)}),0))}(e,r,s),this.dispatch("maska",e,t),e.value!==i&&this.dispatch("input",e,t)}}},{key:"beforeInput",value:function(e){e&&e.target&&e.target.type&&e.target.type.match(/^number$/i)&&e.data&&isNaN(e.target.value+e.data)&&e.preventDefault()}},{key:"dispatch",value:function(e,t,n){t.dispatchEvent(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=document.createEvent("Event");return n.initEvent(e,!0,!0),t&&(n.inputType=t),n}(e,n&&n.inputType||null))}}])&&i(t.prototype,n),s&&i(t,s),e}(),y=(v=new WeakMap,function(e,t){t.value&&(v.has(e)&&!function(e){return!(m(e.value)&&e.value===e.oldValue||Array.isArray(e.value)&&JSON.stringify(e.value)===JSON.stringify(e.oldValue)||e.value&&e.value.mask&&e.oldValue&&e.oldValue.mask&&e.value.mask===e.oldValue.mask)}(t)||v.set(e,new g(e,function(e){var t={};return e.mask?(t.mask=Array.isArray(e.mask)?JSON.stringify(e.mask):e.mask,t.tokens=e.tokens?a({},e.tokens):{},t.preprocessor=e.preprocessor):t.mask=Array.isArray(e)?JSON.stringify(e):e,t}(t.value))))});function _(e){e.directive("maska",y)}"undefined"!=typeof window&&window.Vue&&window.Vue.use&&window.Vue.use(_),t["ZP"]=_},5431:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});n(1703);var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var s=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then((function(){i()?(l(e,s,n),navigator.serviceWorker.ready.then((function(e){s("ready",e)})).catch((function(e){return o(s,e)}))):(a(e,s,n),navigator.serviceWorker.ready.then((function(e){s("ready",e)})).catch((function(e){return o(s,e)})))}))}function o(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return o(t,e)}))}function l(e,t,n){fetch(e).then((function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(e,t,n)})).catch((function(e){return o(t,e)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return o(emit,e)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},7139:function(e,t,n){"use strict";n.d(t,{_p:function(){return ae},MT:function(){return ee},Se:function(){return se},OI:function(){return ie},rn:function(){return re}});n(1703),n(6699);var r=n(3396),i=n(4870);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,l="devtools-plugin:setup",u="plugin:settings:set";let c,h;function d(){var e;return void 0!==c||("undefined"!==typeof window&&window.performance?(c=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(c=!0,h=n.g.perf_hooks.performance):c=!1),c}function f(){return d()?h.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e},now(){return f()}},t&&t.on(u,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function m(e,t){const n=e,r=o(),i=s(),u=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const e=u?new p(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(l,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var v="store";function g(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function y(e){return null!==e&&"object"===typeof e}function _(e){return e&&"function"===typeof e.then}function b(e,t){return function(){return e(t)}}function w(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function k(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;E(e,n,[],e._modules.root,!0),C(e,n,t)}function C(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,o={};g(s,(function(t,n){o[n]=b(t,e),Object.defineProperty(e.getters,n,{get:function(){return o[n]()},enumerable:!0})})),e._state=(0,i.qj)({data:t}),e.strict&&R(e),r&&n&&e._withCommit((function(){r.data=null}))}function E(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=N(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=r.state}))}var u=r.context=I(e,o,n);r.forEachMutation((function(t,n){var r=o+n;T(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;x(e,r,i,u)})),r.forEachGetter((function(t,n){var r=o+n;A(e,r,t,u)})),r.forEachChild((function(r,s){E(e,t,n.concat(s),r,i)}))}function I(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=O(n,r,i),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:r?e.commit:function(n,r,i){var s=O(n,r,i),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return S(e,t)}},state:{get:function(){return N(e.state,n)}}}),i}function S(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function T(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function x(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return _(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function A(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function R(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function N(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return y(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var P="vuex bindings",D="vuex:mutations",L="vuex:actions",F="vuex",M=0;function V(e,t){m({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[P]},(function(n){n.addTimelineLayer({id:D,label:"Vuex Mutations",color:U}),n.addTimelineLayer({id:L,label:"Vuex Actions",color:U}),n.addInspector({id:F,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===F)if(n.filter){var r=[];H(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[q(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===F){var r=n.nodeId;S(t,r),n.state=z(K(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===F){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(F),n.sendInspectorState(F),n.addTimelineEvent({layerId:D,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=M++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:L,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var U=8702998,B=6710886,W=16777215,$={label:"namespaced",textColor:W,backgroundColor:B};function j(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function q(e,t){return{id:t||"root",label:j(t),tags:e.namespaced?[$]:[],children:Object.keys(e._children).map((function(n){return q(e._children[n],t+n+"/")}))}}function H(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[$]:[]}),Object.keys(t._children).forEach((function(i){H(e,t._children[i],n,r+i+"/")}))}function z(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=G(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?j(e):e,editable:!1,value:Y((function(){return s[e]}))}}))}return i}function G(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=Y((function(){return e[n]}))}else t[n]=Y((function(){return e[n]}))})),t}function K(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var s=e[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function Y(e){try{return e()}catch(t){return t}}var J=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},Q={namespaced:{configurable:!0}};Q.namespaced.get=function(){return!!this._rawModule.namespaced},J.prototype.addChild=function(e,t){this._children[e]=t},J.prototype.removeChild=function(e){delete this._children[e]},J.prototype.getChild=function(e){return this._children[e]},J.prototype.hasChild=function(e){return e in this._children},J.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},J.prototype.forEachChild=function(e){g(this._children,e)},J.prototype.forEachGetter=function(e){this._rawModule.getters&&g(this._rawModule.getters,e)},J.prototype.forEachAction=function(e){this._rawModule.actions&&g(this._rawModule.actions,e)},J.prototype.forEachMutation=function(e){this._rawModule.mutations&&g(this._rawModule.mutations,e)},Object.defineProperties(J.prototype,Q);var X=function(e){this.register([],e,!1)};function Z(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;Z(e.concat(r),t.getChild(r),n.modules[r])}}X.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},X.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},X.prototype.update=function(e){Z([],this.root,e)},X.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new J(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&g(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},X.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},X.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new X(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,o=this,a=o.dispatch,l=o.commit;this.dispatch=function(e,t){return a.call(s,e,t)},this.commit=function(e,t,n){return l.call(s,e,t,n)},this.strict=r;var u=this._modules.root.state;E(this,u,[],this._modules.root),C(this,u),n.forEach((function(e){return e(t)}))},ne={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||v,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&V(e,this)},ne.state.get=function(){return this._state.data},ne.state.set=function(e){0},te.prototype.commit=function(e,t,n){var r=this,i=O(e,t,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},te.prototype.dispatch=function(e,t){var n=this,r=O(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(u){0}var l=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(u){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return w(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return w(n,this._actionSubscribers,t)},te.prototype.watch=function(e,t,n){var i=this;return(0,r.YP)((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),E(this,this.state,e,this._modules.get(e),n.preserveState),C(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=N(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),k(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),k(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ne);var re=ce((function(e,t){var n={};return le(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=he(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),ie=ce((function(e,t){var n={};return le(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=he(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),se=ce((function(e,t){var n={};return le(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||he(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),oe=ce((function(e,t){var n={};return le(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=he(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),ae=function(e){return{mapState:re.bind(null,e),mapGetters:se.bind(null,e),mapMutations:ie.bind(null,e),mapActions:oe.bind(null,e)}};function le(e){return ue(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ue(e){return Array.isArray(e)||y(e)}function ce(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function he(e,t,n){var r=e._modulesNamespaceMap[n];return r}},2482:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1804:function(e,t,n){"use strict";n.d(t,{Jn:function(){return me},qX:function(){return he},Xd:function(){return ce},Mq:function(){return ge},ZF:function(){return ve},KN:function(){return ye}});var r=n(7142),i=n(5168),s=n(223);n(6699),n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,l;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function v(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(k(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function g(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return k(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?c().includes(e)?function(...t){return e.apply(C(this),t),k(h.get(this))}:function(...t){return k(e.apply(C(this),t))}:function(t,...n){const r=e.call(C(this),t,...n);return f.set(r,t.sort?t.sort():[t]),k(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&g(e),o(e,u())?new Proxy(e,y):e)}function k(e){if(e instanceof IDBRequest)return v(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const C=e=>m.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=k(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(k(o.result),e.oldVersion,e.newVersion,k(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],T=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return T.set(t,s),s}_((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",O="0.9.0",P=new i.Yd("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",F="@firebase/analytics",M="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",W="@firebase/database",$="@firebase/database-compat",j="@firebase/functions",q="@firebase/functions-compat",H="@firebase/installations",z="@firebase/installations-compat",G="@firebase/messaging",K="@firebase/messaging-compat",Y="@firebase/performance",J="@firebase/performance-compat",Q="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.15.0",se="[DEFAULT]",oe={[N]:"fire-core",[D]:"fire-core-compat",[F]:"fire-analytics",[L]:"fire-analytics-compat",[V]:"fire-app-check",[M]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[W]:"fire-rtdb",[$]:"fire-rtdb-compat",[j]:"fire-fn",[q]:"fire-fn-compat",[H]:"fire-iid",[z]:"fire-iid-compat",[G]:"fire-fcm",[K]:"fire-fcm-compat",[Y]:"fire-perf",[J]:"fire-perf-compat",[Q]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,le=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ce(e){const t=e.name;if(le.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=ie;function ve(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const l=new r.H0(o);for(const r of le.values())l.addComponent(r);const u=new pe(n,i,l);return ae.set(o,u),u}function ge(e=se){const t=ae.get(e);if(!t&&e===se)return ve();if(!t)throw fe.create("no-app",{appName:e});return t}function ye(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void P.warn(e.join(" "))}ce(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e="firebase-heartbeat-database",be=1,we="firebase-heartbeat-store";let ke=null;function Ce(){return ke||(ke=E(_e,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),ke}async function Ee(e){try{const t=await Ce();return t.transaction(we).objectStore(we).get(Se(e))}catch(t){if(t instanceof s.ZR)P.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});P.warn(e.message)}}}async function Ie(e,t){try{const n=await Ce(),r=n.transaction(we,"readwrite"),i=r.objectStore(we);return await i.put(t,Se(e)),r.done}catch(n){if(n instanceof s.ZR)P.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});P.warn(e.message)}}}function Se(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=1024,xe=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Oe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Re();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=xe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:t,unsentEntries:n}=Ne(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function Ne(e,t=Te){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Pe(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Oe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ee(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Pe(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){ce(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),ce(new r.wA("heartbeat",(e=>new Ae(e)),"PRIVATE")),ye(N,O,e),ye(N,O,"esm2017"),ye("fire-js","")}De("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});n(1703);var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return i}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},7795:function(e,t,n){"use strict";n.d(t,{Mq:function(){return r.Mq},ZF:function(){return r.ZF}});var r=n(1804),i="firebase",s="9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},9125:function(e,t,n){"use strict";n.d(t,{hJ:function(){return nt},v0:function(){return wr},Aj:function(){return pt},MX:function(){return dt},F6:function(){return Cn},w7:function(){return mt}});n(1703),n(6699);var r=n(223),i=n(1804),s=n(5168);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(7142);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=l,c=new r.LL("auth","Firebase",l()),h=new s.Yd("@firebase/auth");function d(e,...t){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function v(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&f(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function y(e,t,...n){if(!e)throw g(t,...n)}function _(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||_(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function k(e){b(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(k);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function F(e,t,n,i,s={}){return M(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),O.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},P),t);try{const t=new B(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw W(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw W(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw W(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw W(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(s){if(s instanceof r.ZR)throw s;f(e,"network-request-failed")}}async function V(e,t,n,r,i={}){const s=await F(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?N(e.config,i):`${e.config.apiScheme}://${i}`}class B{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function W(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return F(e,"POST","/v1/accounts:delete",t)}async function j(e,t){return F(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=G(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:q(z(s.auth_time)),issuedAtTime:q(z(s.iat)),expirationTime:q(z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function G(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function K(e){const t=G(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Y(e,j(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ne(s.providerUserInfo):[],a=te(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),c=!!l&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new X(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,h)}async function ee(e){const t=(0,r.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=U(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await re(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ie;return n&&(y("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ie,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Y(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Y(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:k,stsTokenManager:C}=t;y(_&&C,e,"internal-error");const E=ie.fromJSON(this.name,C);y("string"===typeof _,e,"internal-error"),se(c,e.name),se(h,e.name),y("boolean"===typeof b,e,"internal-error"),y("boolean"===typeof w,e,"internal-error"),se(d,e.name),se(f,e.name),se(p,e.name),se(m,e.name),se(v,e.name),se(g,e.name);const I=new oe({uid:_,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:v,lastLoginAt:g});return k&&Array.isArray(k)&&(I.providerData=k.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new ie;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Z(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ae.type="NONE";const le=ae;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ue(this.userKey,r.apiKey,i),this.fullPersistenceKey=ue("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(k(le),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||k(le);const s=ue(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=oe._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new ce(i,e,n)):new ce(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(me(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ye(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||pe(t))&&!t.includes("edge/"))return"Chrome";if(ve(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function fe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pe(e=(0,r.z$)()){return/crios\//i.test(e)}function me(e=(0,r.z$)()){return/iemobile/i.test(e)}function ve(e=(0,r.z$)()){return/android/i.test(e)}function ge(e=(0,r.z$)()){return/blackberry/i.test(e)}function ye(e=(0,r.z$)()){return/webos/i.test(e)}function _e(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,r.z$)()){var t;return _e(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.w1)()&&10===document.documentMode}function ke(e=(0,r.z$)()){return _e(e)||ve(e)||ye(e)||ge(e)||/windows phone/i.test(e)||me(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=he((0,r.z$)());break;case"Worker":n=`${he((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xe(this),this.idTokenSubscription=new xe(this),this.beforeStateQueue=new Ie(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=k(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Z(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(k(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&k(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[k(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Te(e){return(0,r.m9)(e)}class xe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ae(e,t,n){const r=Te(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Re(t),{host:o,port:a}=Ne(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Pe()}function Re(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ne(e){const t=Re(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Oe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Oe(t)}}}function Oe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Pe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _("not implemented")}_getIdTokenResponse(e){return _("not implemented")}_linkToIdToken(e,t){return _("not implemented")}_getReauthenticationResolver(e){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t){return F(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Fe(e,t){return V(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Ve(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends De{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ue(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ue(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Fe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Le(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ve(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return V(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="http://localhost";class $e extends De{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $e(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new $e(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Be(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Be(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Be(e,t)}buildRequest(){const e={requestUri:We,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(e,t){return F(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function qe(e,t){return V(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function He(e,t){const n=await V(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw W(e,"account-exists-with-different-credential",n);return n}const ze={["USER_NOT_FOUND"]:"user-not-found"};async function Ge(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return V(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),ze)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends De{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ke({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ke({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return qe(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return He(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ge(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ke({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Je(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class Qe{constructor(e){var t,n,i,s,o,a;const l=(0,r.zd)((0,r.pd)(e)),u=null!==(t=l["apiKey"])&&void 0!==t?t:null,c=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=Ye(null!==(i=l["mode"])&&void 0!==i?i:null);y(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Je(e);try{return new Qe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(){this.providerId=Xe.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qe.parseLink(t);return y(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}Xe.PROVIDER_ID="password",Xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Ze{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends et{constructor(){super("facebook.com")}static credential(e){return $e._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch(t){return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com",tt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends et{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $e._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return nt.credential(t,n)}catch(r){return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com",nt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends et{constructor(){super("github.com")}static credential(e){return $e._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch(t){return null}}}rt.GITHUB_SIGN_IN_METHOD="github.com",rt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends et{constructor(){super("twitter.com")}static credential(e,t){return $e._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return it.credential(t,n)}catch(r){return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com",it.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),s=ot(n),o=new st({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ot(n);return new st({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ot(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,at.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new at(e,t,n,r)}}function lt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw at._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t,n=!1){const r=await Y(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return st._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ct(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Y(e,lt(r,i,t,e),n);y(s.idToken,r,"internal-error");const o=G(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(e.uid===a,r,"user-mismatch"),st._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t,n=!1){const r="signIn",i=await lt(e,r,t),s=await st._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function dt(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function ft(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function pt(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function mt(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function gt(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const yt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yt,"1"),this.storage.removeItem(yt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){const e=(0,r.z$)();return fe(e)||_e(e)}const wt=1e3,kt=10;class Ct extends _t{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bt()&&Ce(),this.fallbackToPolling=ke(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);we()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,kt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),wt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ct.type="LOCAL";const Et=Ct;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends _t{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}It.type="SESSION";const St=It;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new xt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Tt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function At(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.receivers=[];class Rt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=At("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function Ot(e){Nt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return"undefined"!==typeof Nt()["WorkerGlobalScope"]&&"function"===typeof Nt()["importScripts"]}async function Dt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Lt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ft(){return Pt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="firebaseLocalStorageDb",Vt=1,Ut="firebaseLocalStorage",Bt="fbase_key";class Wt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function $t(e,t){return e.transaction([Ut],t?"readwrite":"readonly").objectStore(Ut)}function jt(){const e=indexedDB.deleteDatabase(Mt);return new Wt(e).toPromise()}function qt(){const e=indexedDB.open(Mt,Vt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ut,{keyPath:Bt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ut)?t(n):(n.close(),await jt(),t(await qt()))}))}))}async function Ht(e,t,n){const r=$t(e,!0).put({[Bt]:t,value:n});return new Wt(r).toPromise()}async function zt(e,t){const n=$t(e,!1).get(t),r=await new Wt(n).toPromise();return void 0===r?null:r.value}function Gt(e,t){const n=$t(e,!0).delete(t);return new Wt(n).toPromise()}const Kt=800,Yt=3;class Jt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await qt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Yt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xt._getInstance(Ft()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Dt(),!this.activeServiceWorker)return;this.sender=new Rt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Lt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qt();return await Ht(e,yt,"1"),await Gt(e,yt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ht(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>zt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Gt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=$t(e,!1).getAll();return new Wt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Kt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Jt.type="LOCAL";const Qt=Jt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function Zt(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function tn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",en().appendChild(r)}))}function nn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
nn("rcb"),new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rn="recaptcha";async function sn(e,t,n){var r;const i=await n.verify();try{let s;if(y("string"===typeof i,e,"argument-error"),y(n.type===rn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){y("enroll"===t.type,e,"internal-error");const n=await vt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await Xt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await je(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on{constructor(e){this.providerId=on.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,t){return sn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ke._fromVerification(e,t)}static credentialFromResult(e){const t=e;return on.credentialFromTaggedObject(t)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ke._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(e,t){return t?k(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.PROVIDER_ID="phone",on.PHONE_SIGN_IN_METHOD="phone";class ln extends De{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Be(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Be(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Be(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function un(e){return ht(e.auth,new ln(e),e.bypassAuthState)}function cn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ct(n,new ln(e),e.bypassAuthState)}async function hn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ut(n,new ln(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return un;case"linkViaPopup":case"linkViaRedirect":return hn;case"reauthViaPopup":case"reauthViaRedirect":return cn;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new R(2e3,1e4);class pn extends dn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=At();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,fn.get())};e()}}pn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mn="pendingRedirect",vn=new Map;class gn extends dn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=vn.get(this.auth._key());if(!e){try{const t=await yn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}vn.set(this.auth._key(),e)}return this.bypassAuthState||vn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function yn(e,t){const n=kn(t),r=wn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function _n(e,t){return wn(e)._set(kn(t),"true")}function bn(e,t){vn.set(e._key(),t)}function wn(e){return k(e._redirectPersistence)}function kn(e){return ue(mn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e,t,n){return En(e,t,n)}async function En(e,t,n){const r=Te(e);v(e,t,Ze);const i=an(r,n);return await _n(i,r),i._openRedirect(r,t,"signInViaRedirect")}async function In(e,t,n=!1){const r=Te(e),i=an(r,t),s=new gn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sn=6e5;class Tn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Rn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!An(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sn&&this.cachedEventUids.clear(),this.cachedEventUids.has(xn(e))}saveEventToCache(e){this.cachedEventUids.add(xn(e)),this.lastProcessedEventTime=Date.now()}}function xn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function An({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Rn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return An(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(e,t={}){return F(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pn=/^https?/;async function Dn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Nn(e);for(const r of t)try{if(Ln(r))return}catch(n){}f(e,"unauthorized-domain")}function Ln(e){const t=I(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Pn.test(n))return!1;if(On.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new R(3e4,6e4);function Mn(){const e=Nt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Vn(e){return new Promise(((t,n)=>{var r,i,s;function o(){Mn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mn(),n(p(e,"network-request-failed"))},timeout:Fn.get()})}if(null===(i=null===(r=Nt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Nt().gapi)||void 0===s?void 0:s.load)){const t=nn("iframefcb");return Nt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},tn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Un=null,e}))}let Un=null;function Bn(e){return Un=Un||Vn(e),Un}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new R(5e3,15e3),$n="__/auth/iframe",jn="emulator/auth/iframe",qn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zn(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?N(t,jn):`https://${e.config.authDomain}/${$n}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=Hn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Gn(e){const t=await Bn(e),n=Nt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:zn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=Nt().setTimeout((()=>{r(i)}),Wn.get());function o(){Nt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yn=500,Jn=600,Qn="_blank",Xn="http://localhost";class Zn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function er(e,t,n,i=Yn,s=Jn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Kn),{width:i.toString(),height:s.toString(),top:o,left:a}),c=(0,r.z$)().toLowerCase();n&&(l=pe(c)?Qn:n),de(c)&&(t=t||Xn,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(c)&&"_self"!==l)return tr(t||"",l),new Zn(null);const d=window.open(t||"",l,h);y(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Zn(d)}function tr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="__/auth/handler",rr="emulator/auth/handler";function ir(e,t,n,s,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof Ze){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof et){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const u=l;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${sr(e)}?${(0,r.xO)(u).slice(1)}`}function sr({config:e}){return e.emulator?N(e,rr):`https://${e.authDomain}/${nr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="webStorageSupport";class ar{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=St,this._completeRedirectFn=In,this._overrideRedirectResult=bn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=ir(e,t,n,I(),r);return er(e,s,At())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Ot(ir(e,t,n,I(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Gn(e),n=new Tn(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(or,{type:or},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[or];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ke()||fe()||_e()}}const lr=ar;class ur{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return _("unexpected MultiFactorSessionType")}}}class cr extends ur{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new cr(e)}_finalizeEnroll(e,t,n){return gt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Zt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class hr{constructor(){}static assertion(e){return cr._fromCredential(e)}}hr.FACTOR_ID="phone";var dr="@firebase/auth",fr="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},a=new Se(t,r,i);return E(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Te(e.getProvider("auth").getImmediate());return(e=>new pr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(dr,fr,mr(e)),(0,i.KN)(dr,fr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=300,yr=(0,r.Pz)("authIdTokenMaxAge")||gr;let _r=null;const br=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yr)return;const i=null===n||void 0===n?void 0:n.token;_r!==i&&(_r=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=C(e,{popupRedirectResolver:lr,persistence:[Qt,Et,St]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const e=br(s);ft(n,e,(()=>e(n.currentUser))),dt(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&Ae(n,`http://${o}`),n}vr("Browser")},36:function(e,t,n){"use strict";n.d(t,{ET:function(){return kh},hJ:function(){return mc},JU:function(){return vc},PL:function(){return bh},ad:function(){return xc},IO:function(){return ih},pl:function(){return wh},ar:function(){return oh}});n(1703),n(8675),n(3462),n(7380),n(1118),n(2262),n(4506),n(2801),n(6699);var r,i=n(1804),s=n(7142),o=n(5168),a=n(223),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},c=c||{},h=l||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,v)&&e[v]||(e[v]=++g)}var v="closure_uid_"+(1e9*Math.random()>>>0),g=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:_,b.apply(null,arguments)}function w(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function k(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function C(){this.s=this.s,this.o=this.o}var E=0;C.prototype.s=!1,C.prototype.na=function(){this.s||(this.s=!0,this.M(),0==E)||m(this)},C.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function S(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function T(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function x(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function R(e){return/^[\s\xa0]*$/.test(e)}var N=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function O(e,t){return e<t?-1:e>t?1:0}function P(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function D(e){return-1!=P().indexOf(e)}function L(e){return L[" "](e),e}function F(e){var t=Y;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}L[" "]=d;var M,V=D("Opera"),U=D("Trident")||D("MSIE"),B=D("Edge"),W=B||U,$=D("Gecko")&&!(-1!=P().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),j=-1!=P().toLowerCase().indexOf("webkit")&&!D("Edge");function q(){var e=h.document;return e?e.documentMode:void 0}e:{var H="",z=function(){var e=P();return $?/rv:([^\);]+)(\)|;)/.exec(e):B?/Edge\/([\d\.]+)/.exec(e):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):j?/WebKit\/(\S+)/.exec(e):V?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(z&&(H=z?z[1]:""),U){var G=q();if(null!=G&&G>parseFloat(H)){M=String(G);break e}}M=H}var K,Y={};function J(){return F((function(){let e=0;const t=N(String(M)).split("."),n=N("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=O(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||O(0==i[2].length,0==s[2].length)||O(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&U){var Q=q();K=Q||(parseInt(M,10)||void 0)}else K=void 0;var X=K;function Z(e,t){if(x.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($){e:{try{L(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}k(Z,x);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ne,this.ba=this.ea=!1}function ie(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function se(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function oe(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ue(e){this.src=e,this.g={},this.h=0}function ce(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}ue.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=he(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new re(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};var de="closure_lm_"+(1e6*Math.random()|0),fe={};function pe(e,t,n,r,i){if(r&&r.once)return ge(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);return null}return n=Ee(n),e&&e[te]?e.N(t,n,p(r)?!!r.capture:!!r,i):me(e,t,n,!1,r,i)}function me(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=ke(e);if(a||(e[de]=a=new ue(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ve(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(be(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ve(){function e(n){return t.call(e.src,e.listener,n)}const t=we;return e}function ge(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ge(e,t[s],n,r,i);return null}return n=Ee(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,i):me(e,t,n,!0,r,i)}function ye(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Ee(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=he(s,n,r,i),-1<n&&(ie(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ke(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,i)),(n=-1<e?t[e]:null)&&_e(n))}function _e(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])ce(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(be(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ke(t))?(ce(n,e),0==n.h&&(n.src=null,t[de]=null)):ie(e)}}}function be(e){return e in fe?fe[e]:fe[e]="on"+e}function we(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&_e(e),e=n.call(r,t)}return e}function ke(e){return e=e[de],e instanceof ue?e:null}var Ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ee(e){return"function"===typeof e?e:(e[Ce]||(e[Ce]=function(t){return e.handleEvent(t)}),e[Ce])}function Ie(){C.call(this),this.i=new ue(this),this.P=this,this.I=null}function Se(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new x(t,e);else if(t instanceof x)t.target=t.target||e;else{var i=t;t=new x(r,e),le(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Te(o,r,!0,t)&&i}if(o=t.g=e,i=Te(o,r,!0,t)&&i,i=Te(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Te(o,r,!1,t)&&i}function Te(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ce(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}k(Ie,C),Ie.prototype[te]=!0,Ie.prototype.removeEventListener=function(e,t,n,r){ye(this,e,t,n,r)},Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.I=null},Ie.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ie.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var xe=h.JSON.stringify;function Ae(){var e=Ve;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Re{constructor(){this.h=this.g=null}add(e,t){const n=Oe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ne,Oe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Pe),(e=>e.reset()));class Pe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function De(e){h.setTimeout((()=>{throw e}),0)}function Le(e,t){Ne||Fe(),Me||(Ne(),Me=!0),Ve.add(e,t)}function Fe(){var e=h.Promise.resolve(void 0);Ne=function(){e.then(Ue)}}var Me=!1,Ve=new Re;function Ue(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){De(n)}var t=Oe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Me=!1}function Be(e,t){Ie.call(this),this.h=e||1,this.g=t||h,this.j=b(this.lb,this),this.l=Date.now()}function We(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function $e(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function je(e){e.g=$e((()=>{e.g=null,e.i&&(e.i=!1,je(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}k(Be,Ie),r=Be.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(We(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Be.X.M.call(this),We(this),delete this.g};class qe extends C{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:je(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){C.call(this),this.h=e,this.g={}}k(He,C);var ze=[];function Ge(e,t,n,r){Array.isArray(n)||(n&&(ze[0]=n.toString()),n=ze);for(var i=0;i<n.length;i++){var s=pe(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ke(e){se(e.g,(function(e,t){this.g.hasOwnProperty(t)&&_e(e)}),e),e.g={}}function Ye(){this.g=!0}function Je(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Qe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Xe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return xe(n)}catch(a){return t}}He.prototype.M=function(){He.X.M.call(this),Ke(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ye.prototype.Aa=function(){this.g=!1},Ye.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new Ie}function it(e){x.call(this,tt.Pa,e)}function st(e){const t=rt();Se(t,new it(t))}function ot(e,t){x.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();Se(t,new ot(t,e))}function lt(e,t){x.call(this,tt.Qa,e),this.size=t}function ut(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",k(it,x),tt.STAT_EVENT="statevent",k(ot,x),tt.Qa="timingevent",k(lt,x);var ct={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function dt(){}function ft(e){return e.h||(e.h=e.i())}function pt(){}dt.prototype.h=null;var mt,vt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function gt(){x.call(this,"d")}function yt(){x.call(this,"c")}function _t(){}function bt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new He(this),this.O=kt,e=W?125:void 0,this.T=new Be(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}k(gt,x),k(yt,x),k(_t,dt),_t.prototype.g=function(){return new XMLHttpRequest},_t.prototype.i=function(){return{}},mt=new _t;var kt=45e3,Ct={},Et={};function It(e,t,n){e.K=1,e.v=Gt($t(t)),e.s=n,e.P=!0,St(e,null)}function St(e,t){e.F=Date.now(),Rt(e),e.A=$t(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.H,e.h=new wt,e.g=hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new qe(b(e.La,e,e.g),e.N)),Ge(e.S,e.g,"readystatechange",e.ib),t=e.H?oe(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),st(),Je(e.j,e.u,e.A,e.m,e.U,e.s)}function Tt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function xt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=At(e,n),r==Et){4==t&&(e.o=4,at(14),i=!1),Xe(e.j,e.m,null,"[Incomplete Response]");break}if(r==Ct){e.o=4,at(15),Xe(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Xe(e.j,e.m,r,null),Lt(e,r)}Tt(e)&&r!=Et&&r!=Ct&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,at(11))):(Xe(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),Pt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Et:(n=Number(t.substring(n,r)),isNaN(n)?Ct:(r+=1,r+n>t.length?Et:(t=t.substr(r,n),e.C=r+n,t)))}function Rt(e){e.V=Date.now()+e.O,Nt(e,e.O)}function Nt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(b(e.gb,e),t)}function Ot(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Pt(e){0==e.l.G||e.I||or(e.l,e)}function Dt(e){Ot(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,We(e.T),Ke(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||mn(n.h,e)))if(!e.J&&mn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sr(n),Kn(n)}nr(n),at(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ut(b(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else lr(n,11)}else if((e.J||n.g==e)&&sr(n),!R(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const c=u[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(vn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,zt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=cr(r,r.H?r.ka:null,r.V),o.J){gn(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Ot(a),Rt(a)),r.g=o}else tr(r);0<n.i.length&&Jn(n)}else"stop"!=u[0]&&"close"!=u[0]||lr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?lr(n,7):Gn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}st(4)}catch(u){}}function Ft(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Mt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Vt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Mt(e),r=Ft(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=bt.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==Wn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const c=Wn(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(3!=c||W||this.g&&(this.h.h||this.g.fa()||$n(this.g)))){this.I||4!=c||7==t||st(8==t||0>=d?3:2),Ot(this);var n=this.g.aa();this.Y=n;t:if(Tt(this)){var r=$n(this.g);e="";var i=r.length,s=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Dt(this),Pt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Qe(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,at(12),Dt(this),Pt(this);break e}Xe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,n)}this.P?(xt(this,c,o),W&&this.i&&3==c&&(Ge(this.S,this.T,"tick",this.hb),this.T.start())):(Xe(this.j,this.m,o,null),Lt(this,o)),4==c&&Dt(this),this.i&&!this.I&&(4==c?or(this.l,this):(this.i=!1,Rt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Dt(this),Pt(this)}}}catch(c){}},r.hb=function(){if(this.g){var e=Wn(this.g),t=this.g.fa();this.C<t.length&&(Ot(this),xt(this,e,t),this.i&&4!=e&&Rt(this))}},r.cancel=function(){this.I=!0,Dt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ze(this.j,this.A),2!=this.K&&(st(),at(17)),Dt(this),this.o=2,Pt(this)):Nt(this,this.V-e)};var Ut=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Wt){this.h=void 0!==t?t:e.h,jt(this,e.j),this.s=e.s,this.g=e.g,qt(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ht(this,n),this.o=e.o}else e&&(n=String(e).match(Ut))?(this.h=!!t,jt(this,n[1]||"",!0),this.s=Kt(n[2]||""),this.g=Kt(n[3]||"",!0),qt(this,n[4]),this.l=Kt(n[5]||"",!0),Ht(this,n[6]||"",!0),this.o=Kt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function $t(e){return new Wt(e)}function jt(e,t,n){e.j=n?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ht(e,t,n){t instanceof nn?(e.i=t,un(e.i,e.h)):(n||(t=Yt(t,en)),e.i=new nn(t,e.h))}function zt(e,t,n){e.i.set(t,n)}function Gt(e){return zt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Yt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Wt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Yt(t,Qt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Yt(t,Qt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Yt(n,"/"==n.charAt(0)?Zt:Xt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Yt(n,tn)),e.join("")};var Qt=/[#\/\?@]/g,Xt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&Bt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sn(e,t){rn(e),t=ln(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function on(e,t){return rn(e),t=ln(e,t),e.g.has(t)}function an(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(ln(e,t),S(n)),e.h+=n.length)}function ln(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function un(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=ln(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){rn(this);let t=[];if("string"===typeof e)on(this,e)&&(t=t.concat(this.g.get(ln(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=ln(this,e),on(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var cn=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||dn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function mn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function vn(e,t){e.g?e.g.add(t):e.h=t}function gn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function yn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return S(e.i)}function _n(){}function bn(){this.g=new _n}function wn(e,t,n){const r=n||"";try{Vt(e,(function(e,n){let i=e;p(e)&&(i=xe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function kn(e,t){const n=new Ye;if(h.Image){const r=new Image;r.onload=w(Cn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=w(Cn,n,r,"TestLoadImage: error",!1,t),r.onabort=w(Cn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=w(Cn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Cn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function En(e){this.l=e.ac||null,this.j=e.jb||!1}function In(e,t){Ie.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Sn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},_n.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},_n.prototype.parse=function(e){return h.JSON.parse(e,void 0)},k(En,dt),En.prototype.g=function(){return new In(this.l,this.j)},En.prototype.i=function(e){return function(){return e}}({}),k(In,Ie);var Sn=0;function Tn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function xn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,An(e)}function An(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=In.prototype,r.open=function(e,t){if(this.readyState!=Sn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,An(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xn(this)),this.readyState=Sn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xn(this):An(this),3==this.readyState&&Tn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,xn(this))},r.Ua=function(e){this.g&&(this.response=e,xn(this))},r.ga=function(){this.g&&xn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(In.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Rn=h.JSON.parse;function Nn(e){Ie.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=On,this.K=this.L=!1}k(Nn,Ie);var On="",Pn=/^https?$/i,Dn=["POST","PUT"];function Ln(e){return U&&J()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Fn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Mn(e),Un(e)}function Mn(e){e.D||(e.D=!0,Se(e,"complete"),Se(e,"error"))}function Vn(e){if(e.h&&"undefined"!=typeof c&&(!e.C[1]||4!=Wn(e)||2!=e.aa()))if(e.v&&4==Wn(e))$e(e.Ha,0,e);else if(Se(e,"readystatechange"),4==Wn(e)){e.h=!1;try{const l=e.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===l){var i=String(e.H).match(Ut)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!Pn.test(i?i.toLowerCase():"")}n=r}if(n)Se(e,"complete"),Se(e,"success");else{e.m=6;try{var o=2<Wn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Mn(e)}}finally{Un(e)}}}function Un(e,t){if(e.g){Bn(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||Se(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Bn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Wn(e){return e.g?e.g.readyState:0}function $n(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case On:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Tr){return null}}function jn(e){let t="";return se(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function qn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):zt(e,t,n))}function Hn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zn(e){this.Ca=0,this.i=[],this.j=new Ye,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Hn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Hn("baseRetryDelayMs",5e3,e),this.bb=Hn("retryDelaySeedMs",1e4,e),this.$a=Hn("forwardChannelMaxRetries",2,e),this.ta=Hn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new bn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Gn(e){if(Yn(e),3==e.G){var t=e.U++,n=$t(e.F);zt(n,"SID",e.I),zt(n,"RID",t),zt(n,"TYPE","terminate"),Zn(e,n),t=new bt(e,e.j,t,void 0),t.K=2,t.v=Gt($t(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Rt(t)}ur(e)}function Kn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Yn(e){Kn(e),e.u&&(h.clearTimeout(e.u),e.u=null),sr(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Jn(e){fn(e.h)||e.m||(e.m=!0,Le(e.Ja,e),e.C=0)}function Qn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ut(b(e.Ja,e,t),ar(e,e.C)),e.C++,!0))}function Xn(e,t){var n;n=t?t.m:e.U++;const r=$t(e.F);zt(r,"SID",e.I),zt(r,"RID",n),zt(r,"AID",e.T),Zn(e,r),e.o&&e.s&&qn(r,e.o,e.s),n=new bt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),vn(e.h,n),It(n,r,t)}function Zn(e,t){e.ia&&se(e.ia,(function(e,n){zt(t,n,e)})),e.l&&Vt({},(function(e,n){zt(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?b(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const l=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{wn(l,e,"req"+n+"_")}catch(s){r&&r(l)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tr(e){e.g||e.u||(e.Z=1,Le(e.Ia,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ut(b(e.Ia,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function ir(e){e.g=new bt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=$t(e.sa);zt(t,"RID","rpc"),zt(t,"SID",e.I),zt(t,"CI",e.L?"0":"1"),zt(t,"AID",e.T),zt(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&qn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Gt($t(t)),n.s=null,n.P=!0,St(n,e)}function sr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function or(e,t){var n=null;if(e.g==t){sr(e),rr(e),e.g=null;var r=2}else{if(!mn(e.h,t))return;n=t.D,gn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=rt(),Se(r,new lt(r,n)),Jn(e)}else tr(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==r&&Qn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:lr(e,5);break;case 4:lr(e,10);break;case 3:lr(e,6);break;default:lr(e,2)}}function ar(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function lr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=b(e.kb,e);n||(n=new Wt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||jt(n,"https"),Gt(n)),kn(n.toString(),r)}else at(2);e.G=0,e.l&&e.l.va(t),ur(e),Yn(e)}function ur(e){if(e.G=0,e.la=[],e.l){const t=yn(e.h);0==t.length&&0==e.i.length||(T(e.la,t),T(e.la,e.i),e.h.i.length=0,S(e.i),e.i.length=0),e.l.ua()}}function cr(e,t,n){var r=n instanceof Wt?$t(n):new Wt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),qt(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Wt(null,void 0);r&&jt(s,r),t&&(s.g=t),i&&qt(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&zt(r,n,t),zt(r,"VER",e.ma),Zn(e,r),r}function hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Nn(new En({jb:!0})):new Nn(e.ra),t.Ka(e.H),t}function dr(){}function fr(){if(U&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function pr(e,t){Ie.call(this),this.g=new zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gr(this)}function mr(e){gt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function vr(){yt.call(this),this.status=1}function gr(e){this.g=e}r=Nn.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?ft(this.u):ft(mt),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Fn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=I(Dn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bn(this),0<this.B&&((this.K=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=$e(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Fn(this,s)}},r.qa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Se(this,"complete"),Se(this,"abort"),Un(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Un(this,!0)),Nn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Vn(this):this.fb())},r.fb=function(){Vn(this)},r.aa=function(){try{return 2<Wn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Rn(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new bt(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=oe(s),le(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,i,t),n=$t(this.F),zt(n,"RID",e),zt(n,"CVER",22),this.D&&zt(n,"X-HTTP-Session-Id",this.D),Zn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(jn(s)))+"&"+t:this.o&&qn(n,this.o,s)),vn(this.h,i),this.Ya&&zt(n,"TYPE","init"),this.O?(zt(n,"$req",t),zt(n,"SID","null"),i.Z=!0,It(i,n,null)):It(i,n,t),this.G=2}}else 3==this.G&&(e?Xn(this,e):0==this.i.length||fn(this.h)||Xn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ut(b(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Kn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Kn(this),nr(this),at(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},fr.prototype.g=function(e,t){return new pr(e,t)},k(pr,Ie),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=cr(e,null,e.V),Jn(e)},pr.prototype.close=function(){Gn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=xe(e),e=n);t.i.push(new cn(t.ab++,e)),3==t.G&&Jn(t)},pr.prototype.M=function(){this.g.l=null,delete this.j,Gn(this.g),delete this.g,pr.X.M.call(this)},k(mr,gt),k(vr,yt),k(gr,dr),gr.prototype.xa=function(){Se(this.g,"a")},gr.prototype.wa=function(e){Se(this.g,new mr(e))},gr.prototype.va=function(e){Se(this.g,new vr)},gr.prototype.ua=function(){Se(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,ht.COMPLETE="complete",pt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",Ie.prototype.listen=Ie.prototype.N,Nn.prototype.listenOnce=Nn.prototype.O,Nn.prototype.getLastError=Nn.prototype.Oa,Nn.prototype.getLastErrorCode=Nn.prototype.Ea,Nn.prototype.getStatus=Nn.prototype.aa,Nn.prototype.getResponseJson=Nn.prototype.Sa,Nn.prototype.getResponseText=Nn.prototype.fa,Nn.prototype.send=Nn.prototype.da,Nn.prototype.setWithCredentials=Nn.prototype.Ka;var yr=u.createWebChannelTransport=function(){return new fr},_r=u.getStatEventTarget=function(){return rt()},br=u.ErrorCode=ct,wr=u.EventType=ht,kr=u.Event=tt,Cr=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Er=u.FetchXmlHttpFactory=En,Ir=u.WebChannel=pt,Sr=u.XhrIo=Nn;const Tr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xr.UNAUTHENTICATED=new xr(null),xr.GOOGLE_CREDENTIALS=new xr("google-credentials-uid"),xr.FIRST_PARTY=new xr("first-party-uid"),xr.MOCK_USER=new xr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ar="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new o.Yd("@firebase/firestore");function Nr(){return Rr.logLevel}function Or(e,...t){if(Rr.logLevel<=o["in"].DEBUG){const n=t.map(Lr);Rr.debug(`Firestore (${Ar}): ${e}`,...n)}}function Pr(e,...t){if(Rr.logLevel<=o["in"].ERROR){const n=t.map(Lr);Rr.error(`Firestore (${Ar}): ${e}`,...n)}}function Dr(e,...t){if(Rr.logLevel<=o["in"].WARN){const n=t.map(Lr);Rr.warn(`Firestore (${Ar}): ${e}`,...n)}}function Lr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e="Unexpected state"){const t=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+e;throw Pr(t),new Error(t)}function Mr(e,t){e||Fr()}function Vr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Br extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(xr.UNAUTHENTICATED)))}shutdown(){}}class qr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Hr{constructor(e){this.t=e,this.currentUser=xr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wr,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Or("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Or("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Or("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Mr("string"==typeof t.accessToken),new $r(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Mr(null===e||"string"==typeof e),new xr(e)}}class zr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=xr.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Mr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Gr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new zr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(xr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Kr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Or("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Or("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Or("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Or("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Mr("string"==typeof e.token),this.A=e.token,new Kr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Jr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Xr(e,t){return e<t?-1:e>t?1:0}function Zr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Br(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Br(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Br(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Br(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ei.fromMillis(Date.now())}static fromDate(e){return ei.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ei(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xr(this.nanoseconds,e.nanoseconds):Xr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ti(e)}static min(){return new ti(new ei(0,0))}static max(){return new ti(new ei(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n){void 0===t?t=0:t>e.length&&Fr(),void 0===n?n=e.length-t:n>e.length-t&&Fr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ni.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ni?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ri extends ni{construct(e,t,n){return new ri(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Br(Ur.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ri(t)}static emptyPath(){return new ri([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class si extends ni{construct(e,t,n){return new si(e,t,n)}static isValidIdentifier(e){return ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),si.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new si(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Br(Ur.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Br(Ur.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Br(Ur.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Br(Ur.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new si(t)}static emptyPath(){return new si([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.path=e}static fromPath(e){return new oi(ri.fromString(e))}static fromName(e){return new oi(ri.fromString(e).popFirst(5))}static empty(){return new oi(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ri.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ri.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oi(new ri(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ai.UNKNOWN_ID=-1;function li(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ti.fromTimestamp(1e9===r?new ei(n+1,0):new ei(n,r));return new ci(i,oi.empty(),t)}function ui(e){return new ci(e.readTime,e.key,-1)}class ci{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ci(ti.min(),oi.empty(),-1)}static max(){return new ci(ti.max(),oi.empty(),-1)}}function hi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=oi.comparator(e.documentKey,t.documentKey),0!==n?n:Xr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(e){if(e.code!==Ur.FAILED_PRECONDITION||e.message!==di)throw e;Or("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Fr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new mi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof mi?t:mi.resolve(t)}catch(e){return mi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):mi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):mi.reject(t)}static resolve(e){return new mi(((t,n)=>{t(e)}))}static reject(e){return new mi(((t,n)=>{n(e)}))}static waitFor(e){return new mi(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=mi.resolve(!1);for(const n of e)t=t.next((e=>e?mi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new mi(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{s[l]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new mi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}gi.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class _i{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new _i("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof _i&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function wi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ki(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e){return null==e}function Ei(e){return 0===e&&1/e==-1/0}function Ii(e){return"number"==typeof e&&Number.isInteger(e)&&!Ei(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Si(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Si(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Si.EMPTY_BYTE_STRING=new Si("");const Ti=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(e){if(Mr(!!e),"string"==typeof e){let t=0;const n=Ti.exec(e);if(Mr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ai(e.seconds),nanos:Ai(e.nanos)}}function Ai(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ri(e){return"string"==typeof e?Si.fromBase64String(e):Si.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Oi(e){const t=e.mapValue.fields.__previous_value__;return Ni(t)?Oi(t):t}function Pi(e){const t=xi(e.mapValue.fields.__local_write_time__.timestampValue);return new ei(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Li(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ni(e)?4:Yi(e)?9007199254740991:10:Fr()}function Fi(e,t){if(e===t)return!0;const n=Li(e);if(n!==Li(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Pi(e).isEqual(Pi(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xi(e.timestampValue),r=xi(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ri(e.bytesValue).isEqual(Ri(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ai(e.geoPointValue.latitude)===Ai(t.geoPointValue.latitude)&&Ai(e.geoPointValue.longitude)===Ai(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ai(e.integerValue)===Ai(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ai(e.doubleValue),r=Ai(t.doubleValue);return n===r?Ei(n)===Ei(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Zr(e.arrayValue.values||[],t.arrayValue.values||[],Fi);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(bi(n)!==bi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Fi(n[i],r[i])))return!1;return!0}(e,t);default:return Fr()}}function Mi(e,t){return void 0!==(e.values||[]).find((e=>Fi(e,t)))}function Vi(e,t){if(e===t)return 0;const n=Li(e),r=Li(t);if(n!==r)return Xr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ai(e.integerValue||e.doubleValue),r=Ai(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Ui(e.timestampValue,t.timestampValue);case 4:return Ui(Pi(e),Pi(t));case 5:return Xr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ri(e),r=Ri(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Xr(n[i],r[i]);if(0!==e)return e}return Xr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Xr(Ai(e.latitude),Ai(t.latitude));return 0!==n?n:Xr(Ai(e.longitude),Ai(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Vi(n[i],r[i]);if(e)return e}return Xr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Di.mapValue&&t===Di.mapValue)return 0;if(e===Di.mapValue)return 1;if(t===Di.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Xr(r[o],s[o]);if(0!==e)return e;const t=Vi(n[r[o]],i[s[o]]);if(0!==t)return t}return Xr(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Fr()}}function Ui(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Xr(e,t);const n=xi(e),r=xi(t),i=Xr(n.seconds,r.seconds);return 0!==i?i:Xr(n.nanos,r.nanos)}function Bi(e){return Wi(e)}function Wi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=xi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ri(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,oi.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Wi(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Wi(e.fields[i])}`;return n+"}"}(e.mapValue):Fr();var t,n}function $i(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ji(e){return!!e&&"integerValue"in e}function qi(e){return!!e&&"arrayValue"in e}function Hi(e){return!!e&&"nullValue"in e}function zi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gi(e){return!!e&&"mapValue"in e}function Ki(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return wi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ki(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ki(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Yi(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(e,t){this.position=e,this.inclusive=t}}function Qi(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?oi.comparator(oi.fromName(o.referenceValue),n.key):Vi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Xi(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Fi(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{}class es extends Zi{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ls(e,t,n):"array-contains"===t?new ds(e,n):"in"===t?new fs(e,n):"not-in"===t?new ps(e,n):"array-contains-any"===t?new ms(e,n):new es(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new us(e,n):new cs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Vi(t,this.value)):null!==t&&Li(this.value)===Li(t)&&this.matchesComparison(Vi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Fr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ts extends Zi{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new ts(e,t)}matches(e){return ns(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ns(e){return"and"===e.op}function rs(e){return is(e)&&ns(e)}function is(e){for(const t of e.filters)if(t instanceof ts)return!1;return!0}function ss(e){if(e instanceof es)return e.field.canonicalString()+e.op.toString()+Bi(e.value);{const t=e.filters.map((e=>ss(e))).join(",");return`${e.op}(${t})`}}function os(e,t){return e instanceof es?function(e,t){return t instanceof es&&e.op===t.op&&e.field.isEqual(t.field)&&Fi(e.value,t.value)}(e,t):e instanceof ts?function(e,t){return t instanceof ts&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&os(n,t.filters[r])),!0)}(e,t):void Fr()}function as(e){return e instanceof es?function(e){return`${e.field.canonicalString()} ${e.op} ${Bi(e.value)}`}(e):e instanceof ts?function(e){return e.op.toString()+" {"+e.getFilters().map(as).join(" ,")+"}"}(e):"Filter"}class ls extends es{constructor(e,t,n){super(e,t,n),this.key=oi.fromName(n.referenceValue)}matches(e){const t=oi.comparator(e.key,this.key);return this.matchesComparison(t)}}class us extends es{constructor(e,t){super(e,"in",t),this.keys=hs("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class cs extends es{constructor(e,t){super(e,"not-in",t),this.keys=hs("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function hs(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>oi.fromName(e.referenceValue)))}class ds extends es{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qi(t)&&Mi(t.arrayValue,this.value)}}class fs extends es{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Mi(this.value.arrayValue,t)}}class ps extends es{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Mi(this.value.arrayValue,t)}}class ms extends es{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Mi(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t="asc"){this.field=e,this.dir=t}}function gs(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.comparator=e,this.root=t||bs.EMPTY}insert(e,t){return new ys(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bs.BLACK,null,null))}remove(e){return new ys(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _s(this.root,e,this.comparator,!1)}getReverseIterator(){return new _s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _s(this.root,e,this.comparator,!0)}}class _s{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bs{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:bs.RED,this.left=null!=r?r:bs.EMPTY,this.right=null!=i?i:bs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new bs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return bs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return bs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Fr();if(this.right.isRed())throw Fr();const e=this.left.check();if(e!==this.right.check())throw Fr();return e+(this.isRed()?0:1)}}bs.EMPTY=null,bs.RED=!0,bs.BLACK=!1,bs.EMPTY=new class{constructor(){this.size=0}get key(){throw Fr()}get value(){throw Fr()}get color(){throw Fr()}get left(){throw Fr()}get right(){throw Fr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new bs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws{constructor(e){this.comparator=e,this.data=new ys(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ks(this.data.getIterator())}getIteratorFrom(e){return new ks(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ws))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ws(this.comparator);return t.data=e,t}}class ks{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs{constructor(e){this.fields=e,e.sort(si.comparator)}static empty(){return new Cs([])}unionWith(e){let t=new ws(si.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Cs(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.value=e}static empty(){return new Es({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ki(t)}setAll(e){let t=si.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ki(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Gi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){wi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Es(Ki(this.value))}}function Is(e){const t=[];return wi(e.fields,((e,n)=>{const r=new si([e]);if(Gi(n)){const e=Is(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Cs(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ss{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ss(e,0,ti.min(),ti.min(),ti.min(),Es.empty(),0)}static newFoundDocument(e,t,n,r){return new Ss(e,1,t,ti.min(),n,r,0)}static newNoDocument(e,t){return new Ss(e,2,t,ti.min(),ti.min(),Es.empty(),0)}static newUnknownDocument(e,t){return new Ss(e,3,t,ti.min(),ti.min(),Es.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ti.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Es.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Es.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ti.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ss&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ss(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function xs(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Ts(e,t,n,r,i,s,o)}function As(e){const t=Vr(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>ss(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ci(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Bi(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Bi(e))).join(",")),t.ft=e}return t.ft}function Rs(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!gs(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!os(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Xi(e.startAt,t.startAt)&&Xi(e.endAt,t.endAt)}function Ns(e){return oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Ps(e,t,n,r,i,s,o,a){return new Os(e,t,n,r,i,s,o,a)}function Ds(e){return new Os(e)}function Ls(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Fs(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ms(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Vs(e){return null!==e.collectionGroup}function Us(e){const t=Vr(e);if(null===t.dt){t.dt=[];const e=Ms(t),n=Fs(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new vs(e)),t.dt.push(new vs(si.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new vs(si.keyField(),e))}}}return t.dt}function Bs(e){const t=Vr(e);if(!t._t)if("F"===t.limitType)t._t=xs(t.path,t.collectionGroup,Us(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Us(t)){const t="desc"===i.dir?"asc":"desc";e.push(new vs(i.field,t))}const n=t.endAt?new Ji(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ji(t.startAt.position,t.startAt.inclusive):null;t._t=xs(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function Ws(e,t){t.getFirstInequalityField(),Ms(e);const n=e.filters.concat([t]);return new Os(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function $s(e,t,n){return new Os(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function js(e,t){return Rs(Bs(e),Bs(t))&&e.limitType===t.limitType}function qs(e){return`${As(Bs(e))}|lt:${e.limitType}`}function Hs(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>as(e))).join(", ")}]`),Ci(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Bi(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Bi(e))).join(",")),`Target(${t})`}(Bs(e))}; limitType=${e.limitType})`}function zs(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):oi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Us(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Qi(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Us(e),t))&&!(e.endAt&&!function(e,t,n){const r=Qi(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Us(e),t))}(e,t)}function Gs(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ks(e){return(t,n)=>{let r=!1;for(const i of Us(e)){const e=Ys(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ys(e,t,n){const r=e.field.isKeyField()?oi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Vi(r,i):Fr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Fr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ei(t)?"-0":t}}function Qs(e){return{integerValue:""+e}}function Xs(e,t){return Ii(t)?Qs(t):Js(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this._=void 0}}function eo(e,t,n){return e instanceof ro?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof io?so(e,t):e instanceof oo?ao(e,t):function(e,t){const n=no(e,t),r=uo(n)+uo(e.gt);return ji(n)&&ji(e.gt)?Qs(r):Js(e.yt,r)}(e,t)}function to(e,t,n){return e instanceof io?so(e,t):e instanceof oo?ao(e,t):n}function no(e,t){return e instanceof lo?ji(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class ro extends Zs{}class io extends Zs{constructor(e){super(),this.elements=e}}function so(e,t){const n=co(t);for(const r of e.elements)n.some((e=>Fi(e,r)))||n.push(r);return{arrayValue:{values:n}}}class oo extends Zs{constructor(e){super(),this.elements=e}}function ao(e,t){let n=co(t);for(const r of e.elements)n=n.filter((e=>!Fi(e,r)));return{arrayValue:{values:n}}}class lo extends Zs{constructor(e,t){super(),this.yt=e,this.gt=t}}function uo(e){return Ai(e.integerValue||e.doubleValue)}function co(e){return qi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof io&&t instanceof io||e instanceof oo&&t instanceof oo?Zr(e.elements,t.elements,Fi):e instanceof lo&&t instanceof lo?Fi(e.gt,t.gt):e instanceof ro&&t instanceof ro}(e.transform,t.transform)}class fo{constructor(e,t){this.version=e,this.transformResults=t}}class po{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new po}static exists(e){return new po(void 0,e)}static updateTime(e){return new po(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class vo{}function go(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new To(e.key,po.none()):new ko(e.key,e.data,po.none());{const n=e.data,r=Es.empty();let i=new ws(si.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Co(e.key,r,new Cs(i.toArray()),po.none())}}function yo(e,t,n){e instanceof ko?function(e,t,n){const r=e.value.clone(),i=Io(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Co?function(e,t,n){if(!mo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Io(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Eo(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function _o(e,t,n,r){return e instanceof ko?function(e,t,n,r){if(!mo(e.precondition,t))return n;const i=e.value.clone(),s=So(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Co?function(e,t,n,r){if(!mo(e.precondition,t))return n;const i=So(e.fieldTransforms,r,t),s=t.data;return s.setAll(Eo(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return mo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function bo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=no(r.transform,e||null);null!=i&&(null===n&&(n=Es.empty()),n.set(r.field,i))}return n||null}function wo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Zr(e,t,((e,t)=>ho(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ko extends vo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Co extends vo{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Eo(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Io(e,t,n){const r=new Map;Mr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,to(o,a,n[i]))}return r}function So(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,eo(e,s,t))}return r}class To extends vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xo extends vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ro,No;function Oo(e){switch(e){default:return Fr();case Ur.CANCELLED:case Ur.UNKNOWN:case Ur.DEADLINE_EXCEEDED:case Ur.RESOURCE_EXHAUSTED:case Ur.INTERNAL:case Ur.UNAVAILABLE:case Ur.UNAUTHENTICATED:return!1;case Ur.INVALID_ARGUMENT:case Ur.NOT_FOUND:case Ur.ALREADY_EXISTS:case Ur.PERMISSION_DENIED:case Ur.FAILED_PRECONDITION:case Ur.ABORTED:case Ur.OUT_OF_RANGE:case Ur.UNIMPLEMENTED:case Ur.DATA_LOSS:return!0}}function Po(e){if(void 0===e)return Pr("GRPC error has no .code"),Ur.UNKNOWN;switch(e){case Ro.OK:return Ur.OK;case Ro.CANCELLED:return Ur.CANCELLED;case Ro.UNKNOWN:return Ur.UNKNOWN;case Ro.DEADLINE_EXCEEDED:return Ur.DEADLINE_EXCEEDED;case Ro.RESOURCE_EXHAUSTED:return Ur.RESOURCE_EXHAUSTED;case Ro.INTERNAL:return Ur.INTERNAL;case Ro.UNAVAILABLE:return Ur.UNAVAILABLE;case Ro.UNAUTHENTICATED:return Ur.UNAUTHENTICATED;case Ro.INVALID_ARGUMENT:return Ur.INVALID_ARGUMENT;case Ro.NOT_FOUND:return Ur.NOT_FOUND;case Ro.ALREADY_EXISTS:return Ur.ALREADY_EXISTS;case Ro.PERMISSION_DENIED:return Ur.PERMISSION_DENIED;case Ro.FAILED_PRECONDITION:return Ur.FAILED_PRECONDITION;case Ro.ABORTED:return Ur.ABORTED;case Ro.OUT_OF_RANGE:return Ur.OUT_OF_RANGE;case Ro.UNIMPLEMENTED:return Ur.UNIMPLEMENTED;case Ro.DATA_LOSS:return Ur.DATA_LOSS;default:return Fr()}}(No=Ro||(Ro={}))[No.OK=0]="OK",No[No.CANCELLED=1]="CANCELLED",No[No.UNKNOWN=2]="UNKNOWN",No[No.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",No[No.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",No[No.NOT_FOUND=5]="NOT_FOUND",No[No.ALREADY_EXISTS=6]="ALREADY_EXISTS",No[No.PERMISSION_DENIED=7]="PERMISSION_DENIED",No[No.UNAUTHENTICATED=16]="UNAUTHENTICATED",No[No.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",No[No.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",No[No.ABORTED=10]="ABORTED",No[No.OUT_OF_RANGE=11]="OUT_OF_RANGE",No[No.UNIMPLEMENTED=12]="UNIMPLEMENTED",No[No.INTERNAL=13]="INTERNAL",No[No.UNAVAILABLE=14]="UNAVAILABLE",No[No.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Do{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){wi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return ki(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new ys(oi.comparator);function Fo(){return Lo}const Mo=new ys(oi.comparator);function Vo(...e){let t=Mo;for(const n of e)t=t.insert(n.key,n);return t}function Uo(e){let t=Mo;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Bo(){return $o()}function Wo(){return $o()}function $o(){return new Do((e=>e.toString()),((e,t)=>e.isEqual(t)))}const jo=new ys(oi.comparator),qo=new ws(oi.comparator);function Ho(...e){let t=qo;for(const n of e)t=t.add(n);return t}const zo=new ws(Xr);function Go(){return zo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Yo.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ko(ti.min(),r,Go(),Fo(),Ho())}}class Yo{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Yo(n,t,Ho(),Ho(),Ho())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Qo{constructor(e,t){this.targetId=e,this.Et=t}}class Xo{constructor(e,t,n=Si.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Zo{constructor(){this.At=0,this.Rt=na(),this.bt=Si.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Ho(),t=Ho(),n=Ho();return this.Rt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Fr()}})),new Yo(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=na()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ea{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Fo(),this.qt=ta(),this.Ut=new ws(Xr)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:Fr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.zt(n)&&t(n)}))}Jt(e){const t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){const e=r.target;if(Ns(e))if(0===n){const n=new oi(e.path);this.Qt(t,n,Ss.newNoDocument(n,ti.min()))}else Mr(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&Ns(i.target)){const t=new oi(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,Ss.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=Ho();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new Ko(e,t,this.Ut,this.Lt,n);return this.Lt=Fo(),this.qt=ta(),this.Ut=new ws(Xr),r}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Zo,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new ws(Xr),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||Or("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Zo),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function ta(){return new ys(oi.comparator)}function na(){return new ys(oi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ia=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),sa=(()=>{const e={and:"AND",or:"OR"};return e})();class oa{constructor(e,t){this.databaseId=e,this.wt=t}}function aa(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function la(e,t){return e.wt?t.toBase64():t.toUint8Array()}function ua(e,t){return aa(e,t.toTimestamp())}function ca(e){return Mr(!!e),ti.fromTimestamp(function(e){const t=xi(e);return new ei(t.seconds,t.nanos)}(e))}function ha(e,t){return function(e){return new ri(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function da(e){const t=ri.fromString(e);return Mr(La(t)),t}function fa(e,t){return ha(e.databaseId,t.path)}function pa(e,t){const n=da(t);if(n.get(1)!==e.databaseId.projectId)throw new Br(Ur.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Br(Ur.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new oi(ya(n))}function ma(e,t){return ha(e.databaseId,t)}function va(e){const t=da(e);return 4===t.length?ri.emptyPath():ya(t)}function ga(e){return new ri(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ya(e){return Mr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function _a(e,t,n){return{name:fa(e,t),fields:n.value.mapValue.fields}}function ba(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Fr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.wt?(Mr(void 0===t||"string"==typeof t),Si.fromBase64String(t||"")):(Mr(void 0===t||t instanceof Uint8Array),Si.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Ur.UNKNOWN:Po(e.code);return new Br(t,e.message||"")}(o);n=new Xo(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=pa(e,r.document.name),s=ca(r.document.updateTime),o=r.document.createTime?ca(r.document.createTime):ti.min(),a=new Es({mapValue:{fields:r.document.fields}}),l=Ss.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Jo(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=pa(e,r.document),s=r.readTime?ca(r.readTime):ti.min(),o=Ss.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Jo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=pa(e,r.document),s=r.removedTargetIds||[];n=new Jo([],s,i,null)}else{if(!("filter"in t))return Fr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Ao(r),s=e.targetId;n=new Qo(s,i)}}return n}function wa(e,t){let n;if(t instanceof ko)n={update:_a(e,t.key,t.value)};else if(t instanceof To)n={delete:fa(e,t.key)};else if(t instanceof Co)n={update:_a(e,t.key,t.data),updateMask:Da(t.fieldMask)};else{if(!(t instanceof xo))return Fr();n={verify:fa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof ro)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof io)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof oo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof lo)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Fr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ua(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Fr()}(e,t.precondition)),n}function ka(e,t){return e&&e.length>0?(Mr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ca(e.updateTime):ca(t);return n.isEqual(ti.min())&&(n=ca(t)),new fo(n,e.transformResults||[])}(e,t)))):[]}function Ca(e,t){return{documents:[ma(e,t.path)]}}function Ea(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ma(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ma(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Pa(ts.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Na(e.field),direction:xa(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.wt||Ci(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Ia(e){let t=va(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Mr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Ta(e);return t instanceof ts&&rs(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new vs(Oa(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ci(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Ji(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ji(n,t)}(n.endAt)),Ps(t,i,o,s,a,"F",l,u)}function Sa(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Fr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ta(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Oa(e.unaryFilter.field);return es.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Oa(e.unaryFilter.field);return es.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Oa(e.unaryFilter.field);return es.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Oa(e.unaryFilter.field);return es.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Fr()}}(e):void 0!==e.fieldFilter?function(e){return es.create(Oa(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Fr()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return ts.create(e.compositeFilter.filters.map((e=>Ta(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Fr()}}(e.compositeFilter.op))}(e):Fr()}function xa(e){return ra[e]}function Aa(e){return ia[e]}function Ra(e){return sa[e]}function Na(e){return{fieldPath:e.canonicalString()}}function Oa(e){return si.fromServerFormat(e.fieldPath)}function Pa(e){return e instanceof es?function(e){if("=="===e.op){if(zi(e.value))return{unaryFilter:{field:Na(e.field),op:"IS_NAN"}};if(Hi(e.value))return{unaryFilter:{field:Na(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(zi(e.value))return{unaryFilter:{field:Na(e.field),op:"IS_NOT_NAN"}};if(Hi(e.value))return{unaryFilter:{field:Na(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Na(e.field),op:Aa(e.op),value:e.value}}}(e):e instanceof ts?function(e){const t=e.getFilters().map((e=>Pa(e)));return 1===t.length?t[0]:{compositeFilter:{op:Ra(e.op),filters:t}}}(e):Fr()}function Da(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function La(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ma=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Va=Ma;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&yo(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=_o(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=_o(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Wo();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=go(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ti.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ho())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,((e,t)=>wo(e,t)))&&Zr(this.baseMutations,e.baseMutations,((e,t)=>wo(e,t)))}}class Ba{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Mr(e.mutations.length===n.length);let r=jo;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Ba(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,n,r,i=ti.min(),s=ti.min(),o=Si.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new $a(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.ie=e}}function qa(e){const t=Ia({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?$s(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(Ai(e.integerValue));else if("doubleValue"in e){const n=Ai(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),Ei(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(Ri(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?Yi(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):Fr()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const r of Object.keys(n))this.de(r,t),this.ce(n[r],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const r of n)this.ce(r,t)}me(e,t){this.he(t,37),oi.fromName(e).path.forEach((e=>{this.he(t,60),this.pe(e,t)}))}he(e,t){e.le(t)}_e(e){e.le(2)}}Ha.Ie=new Ha;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{constructor(){this.Je=new Ga}addToCollectionParentIndex(e,t){return this.Je.add(t),mi.resolve()}getCollectionParents(e,t){return mi.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return mi.resolve()}deleteFieldIndex(e,t){return mi.resolve()}getDocumentsMatchingTarget(e,t){return mi.resolve(null)}getIndexType(e,t){return mi.resolve(0)}getFieldIndexes(e,t){return mi.resolve([])}getNextCollectionGroupToUpdate(e){return mi.resolve(null)}getMinOffset(e,t){return mi.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,t){return mi.resolve(ci.min())}updateCollectionGroup(e,t,n){return mi.resolve()}updateIndexEntries(e,t){return mi.resolve()}}class Ga{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ws(ri.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ws(ri.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ka{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ka(e,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ka.DEFAULT_COLLECTION_PERCENTILE=10,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ka.DEFAULT=new Ka(41943040,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ka.DISABLED=new Ka(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ya(0)}static vn(){return new Ya(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(){this.changes=new Do((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ss.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?mi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&_o(n.mutation,e,Cs.empty(),ei.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ho()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Ho()){const r=Bo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Vo();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Bo();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ho())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Fo();const s=$o(),o=$o();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Co)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),_o(o.mutation,t,o.mutation.getFieldMask(),ei.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Qa(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=$o();let r=new ys(((e,t)=>e-t)),i=Ho();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Cs.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Ho()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,u=Wo();l.forEach((e=>{if(!i.has(e)){const r=go(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return mi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Vs(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):mi.resolve(Bo());let o=-1,a=i;return s.next((t=>mi.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?mi.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Ho()))).next((e=>({batchId:o,changes:Uo(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oi(t)).next((e=>{let t=Vo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Vo();return this.indexManager.getCollectionParents(e,r).next((s=>mi.forEach(s,(s=>{const o=function(e,t){return new Os(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,Ss.newInvalidDocument(n)))}));let n=Vo();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&_o(s.mutation,i,Cs.empty(),ei.now()),zs(t,i)&&(n=n.insert(r,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return mi.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:ca(n.createTime)}),mi.resolve()}getNamedQuery(e,t){return mi.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:qa(e.bundledQuery),readTime:ca(e.readTime)}}(t)),mi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.overlays=new ys(oi.comparator),this.es=new Map}getOverlay(e,t){return mi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Bo();return mi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.oe(e,t,r)})),mi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),mi.resolve()}getOverlaysForCollection(e,t,n){const r=Bo(),i=t.length+1,s=new oi(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return mi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ys(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Bo(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Bo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return mi.resolve(o)}oe(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Wa(t,n));let i=this.es.get(t);void 0===i&&(i=Ho(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.ns=new ws(nl.ss),this.rs=new ws(nl.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new nl(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new nl(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new oi(new ri([])),n=new nl(t,e),r=new nl(t,e+1),i=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),i.push(e.key)})),i}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new oi(new ri([])),n=new nl(t,e),r=new nl(t,e+1);let i=Ho();return this.rs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new nl(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nl{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return oi.comparator(e.key,t.key)||Xr(e._s,t._s)}static os(e,t){return Xr(e._s,t._s)||oi.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new ws(nl.ss)}checkEmpty(e){return mi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Ua(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.gs=this.gs.add(new nl(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return mi.resolve(s)}lookupMutationBatch(e,t){return mi.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return mi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return mi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return mi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new nl(t,0),r=new nl(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);i.push(t)})),mi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ws(Xr);return t.forEach((e=>{const t=new nl(e,0),r=new nl(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),mi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;oi.isDocumentKey(i)||(i=i.child(""));const s=new nl(new oi(i),0);let o=new ws(Xr);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),s),mi.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Mr(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return mi.forEach(t.mutations,(r=>{const i=new nl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new nl(t,0),r=this.gs.firstAfterOrEqual(n);return mi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,mi.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.Es=e,this.docs=new ys(oi.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return mi.resolve(n?n.document.mutableCopy():Ss.newInvalidDocument(t))}getEntries(e,t){let n=Fo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ss.newInvalidDocument(e))})),mi.resolve(n)}getAllFromCollection(e,t,n){let r=Fo();const i=new oi(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||hi(ui(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return mi.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Fr()}As(e,t){return mi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new sl(this)}getSize(e){return mi.resolve(this.size)}}class sl extends Ja{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),mi.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.persistence=e,this.Rs=new Do((e=>As(e)),Rs),this.lastRemoteSnapshotVersion=ti.min(),this.highestTargetId=0,this.bs=0,this.Ps=new tl,this.targetCount=0,this.vs=Ya.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),mi.resolve()}getLastRemoteSnapshotVersion(e){return mi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return mi.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),mi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),mi.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ya(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,mi.resolve()}updateTargetData(e,t){return this.Dn(t),mi.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,mi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),mi.waitFor(i).next((()=>r))}getTargetCount(e){return mi.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return mi.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),mi.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),mi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),mi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return mi.resolve(n)}containsKey(e,t){return mi.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new gi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ol(this),this.indexManager=new za,this.remoteDocumentCache=function(e){return new il(e)}((e=>this.referenceDelegate.xs(e))),this.yt=new ja(t),this.Ns=new Za(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new el,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new rl(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Or("MemoryPersistence","Starting transaction:",e);const r=new ll(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return mi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class ll extends fi{constructor(e){super(),this.currentSequenceNumber=e}}class ul{constructor(e){this.persistence=e,this.Fs=new tl,this.$s=null}static Bs(e){return new ul(e)}get Ls(){if(this.$s)return this.$s;throw Fr()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),mi.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),mi.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),mi.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mi.forEach(this.Ls,(n=>{const r=oi.fromPath(n);return this.qs(e,r).next((e=>{e||t.removeEntry(r,ti.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return mi.or([()=>mi.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=Ho(),r=Ho();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new cl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(Ls(t))return mi.resolve(null);let n=Bs(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=$s(t,null,"F"),n=Bs(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Ho(...r);return this.Ni.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,$s(t,null,"F")):this.Bi(e,s,t,n)}))))})))))}Oi(e,t,n,r){return Ls(t)||r.isEqual(ti.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((i=>{const s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(Nr()<=o["in"].DEBUG&&Or("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Hs(t)),this.Bi(e,s,t,li(r,-1)))}))}Fi(e,t){let n=new ws(Ks(e));return t.forEach(((t,r)=>{zs(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Nr()<=o["in"].DEBUG&&Or("QueryEngine","Using full collection scan to execute query:",Hs(t)),this.Ni.getDocumentsMatchingQuery(e,t,ci.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new ys(Xr),this.Ui=new Do((e=>As(e)),Rs),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xa(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}}function fl(e,t,n,r){return new dl(e,t,n,r)}async function pl(e,t){const n=Vr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Ho();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function ml(e,t){const n=Vr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=mi.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Mr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ho();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function vl(e){const t=Vr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function gl(e,t){const n=Vr(e),r=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];t.targetChanges.forEach(((s,a)=>{const l=i.get(a);if(!l)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a))));let u=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Si.EMPTY_BYTE_STRING,ti.min()).withLastLimboFreeSnapshotVersion(ti.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,u,s)&&o.push(n.Cs.updateTargetData(e,u))}));let a=Fo(),l=Ho();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(yl(e,s,t.documentUpdates).next((e=>{a=e.Wi,l=e.zi}))),!r.isEqual(ti.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return mi.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.qi=i,e)))}function yl(e,t,n){let r=Ho(),i=Ho();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Fo();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ti.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Or("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function _l(e,t){const n=Vr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function bl(e,t){const n=Vr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((i=>i?(r=i,mi.resolve(r)):n.Cs.allocateTargetId(e).next((i=>(r=new $a(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}async function wl(e,t,n){const r=Vr(e),i=r.qi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!vi(e))throw e;Or("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function kl(e,t,n){const r=Vr(e);let i=ti.min(),s=Ho();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Vr(e),i=r.Ui.get(n);return void 0!==i?mi.resolve(r.qi.get(i)):r.Cs.getTargetData(t,n)}(r,e,Bs(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:ti.min(),n?s:Ho()))).next((e=>(Cl(r,Gs(t),e),{documents:e,Hi:s})))))}function Cl(e,t,n){let r=e.Ki.get(t)||ti.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}class El{constructor(){this.activeTargetIds=Go()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Il{constructor(){this.Lr=new El,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new El,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Or("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Or("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const s=this.ho(e,t);Or("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then((e=>(Or("RestConnection","Received: ",e),e)),(t=>{throw Dr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ar,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=xl[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((i,s)=>{const o=new Sr;o.setWithCredentials(!0),o.listenOnce(wr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case br.NO_ERROR:const t=o.getResponseJson();Or("Connection","XHR received:",JSON.stringify(t)),i(t);break;case br.TIMEOUT:Or("Connection",'RPC "'+e+'" timed out'),s(new Br(Ur.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const n=o.getStatus();if(Or("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ur).indexOf(t)>=0?t:Ur.UNKNOWN}(t.status);s(new Br(e,t.message))}else s(new Br(Ur.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Br(Ur.UNAVAILABLE,"Connection failed."));break;default:Fr()}}finally{Or("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=yr(),s=_r(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Er({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Or("Connection","Creating WebChannel: "+a,o);const l=i.createWebChannel(a,o);let u=!1,c=!1;const h=new Al({Hr:e=>{c?Or("Connection","Not sending because WebChannel is closed:",e):(u||(Or("Connection","Opening WebChannel transport."),l.open(),u=!0),Or("Connection","WebChannel sending:",e),l.send(e))},Jr:()=>l.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(l,Ir.EventType.OPEN,(()=>{c||Or("Connection","WebChannel transport opened.")})),d(l,Ir.EventType.CLOSE,(()=>{c||(c=!0,Or("Connection","WebChannel transport closed"),h.io())})),d(l,Ir.EventType.ERROR,(e=>{c||(c=!0,Dr("Connection","WebChannel transport errored:",e),h.io(new Br(Ur.UNAVAILABLE,"The operation could not be completed")))})),d(l,Ir.EventType.MESSAGE,(e=>{var t;if(!c){const n=e.data[0];Mr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Or("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Ro[e];if(void 0!==t)return Po(t)}(e),n=i.message;void 0===t&&(t=Ur.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),c=!0,h.io(new Br(t,n)),l.close()}else Or("Connection","WebChannel received:",n),h.ro(n)}})),d(s,kr.STAT_EVENT,(e=>{e.stat===Cr.PROXY?Or("Connection","Detected buffering proxy"):e.stat===Cr.NOPROXY&&Or("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(e){return new oa(e,!0)}class Pl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Or("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Pl(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===Ur.RESOURCE_EXHAUSTED?(Pr(t.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===Ur.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new Br(Ur.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Or("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Or("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ll extends Dl{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=ba(this.yt,e),n=function(e){if(!("targetChange"in e))return ti.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ti.min():t.readTime?ca(t.readTime):ti.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=ga(this.yt),t.addTarget=function(e,t){let n;const r=t.target;return n=Ns(r)?{documents:Ca(e,r)}:{query:Ea(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=la(e,t.resumeToken):t.snapshotVersion.compareTo(ti.min())>0&&(n.readTime=aa(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=Sa(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=ga(this.yt),t.removeTarget=e,this.Bo(t)}}class Fl extends Dl{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Mr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=ka(e.writeResults,e.commitTime),n=ca(e.commitTime);return this.listener.Zo(n,t)}return Mr(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ga(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>wa(this.yt,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new Br(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Br(Ur.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection._o(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Br(Ur.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Vl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Pr(t),this.ou=!1):Or("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur((e=>{n.enqueueAndForget((async()=>{Kl(this)&&(Or("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Vr(e);t._u.add(4),await Wl(t),t.gu.set("Unknown"),t._u.delete(4),await Bl(t)}(this))}))})),this.gu=new Vl(n,r)}}async function Bl(e){if(Kl(e))for(const t of e.wu)await t(!0)}async function Wl(e){for(const t of e.wu)await t(!1)}function $l(e,t){const n=Vr(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Gl(n)?zl(n):du(n).ko()&&ql(n,t))}function jl(e,t){const n=Vr(e),r=du(n);n.du.delete(t),r.ko()&&Hl(n,t),0===n.du.size&&(r.ko()?r.Fo():Kl(n)&&n.gu.set("Unknown"))}function ql(e,t){e.yu.Ot(t.targetId),du(e).zo(t)}function Hl(e,t){e.yu.Ot(t),du(e).Ho(t)}function zl(e){e.yu=new ea({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),du(e).start(),e.gu.uu()}function Gl(e){return Kl(e)&&!du(e).No()&&e.du.size>0}function Kl(e){return 0===Vr(e)._u.size}function Yl(e){e.yu=void 0}async function Jl(e){e.du.forEach(((t,n)=>{ql(e,t)}))}async function Ql(e,t){Yl(e),Gl(e)?(e.gu.hu(t),zl(e)):e.gu.set("Unknown")}async function Xl(e,t,n){if(e.gu.set("Online"),t instanceof Xo&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Or("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zl(e,n)}else if(t instanceof Jo?e.yu.Kt(t):t instanceof Qo?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(ti.min()))try{const t=await vl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Si.EMPTY_BYTE_STRING,n.snapshotVersion)),Hl(e,t);const r=new $a(n.target,t,1,n.sequenceNumber);ql(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Or("RemoteStore","Failed to raise snapshot:",t),await Zl(e,t)}}async function Zl(e,t,n){if(!vi(t))throw t;e._u.add(1),await Wl(e),e.gu.set("Offline"),n||(n=()=>vl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Or("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Bl(e)}))}function eu(e,t){return t().catch((n=>Zl(e,n,t)))}async function tu(e){const t=Vr(e),n=fu(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;nu(t);)try{const e=await _l(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,ru(t,e)}catch(e){await Zl(t,e)}iu(t)&&su(t)}function nu(e){return Kl(e)&&e.fu.length<10}function ru(e,t){e.fu.push(t);const n=fu(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function iu(e){return Kl(e)&&!fu(e).No()&&e.fu.length>0}function su(e){fu(e).start()}async function ou(e){fu(e).eu()}async function au(e){const t=fu(e);for(const n of e.fu)t.Xo(n.mutations)}async function lu(e,t,n){const r=e.fu.shift(),i=Ba.from(r,t,n);await eu(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await tu(e)}async function uu(e,t){t&&fu(e).Yo&&await async function(e,t){if(n=t.code,Oo(n)&&n!==Ur.ABORTED){const n=e.fu.shift();fu(e).Mo(),await eu(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await tu(e)}var n}(e,t),iu(e)&&su(e)}async function cu(e,t){const n=Vr(e);n.asyncQueue.verifyOperationInProgress(),Or("RemoteStore","RemoteStore received new credentials");const r=Kl(n);n._u.add(3),await Wl(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Bl(n)}async function hu(e,t){const n=Vr(e);t?(n._u.delete(2),await Bl(n)):t||(n._u.add(2),await Wl(n),n.gu.set("Unknown"))}function du(e){return e.pu||(e.pu=function(e,t,n){const r=Vr(e);return r.su(),new Ll(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:Jl.bind(null,e),Zr:Ql.bind(null,e),Wo:Xl.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),Gl(e)?zl(e):e.gu.set("Unknown")):(await e.pu.stop(),Yl(e))}))),e.pu}function fu(e){return e.Iu||(e.Iu=function(e,t,n){const r=Vr(e);return r.su(),new Fl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(e.datastore,e.asyncQueue,{Yr:ou.bind(null,e),Zr:uu.bind(null,e),tu:au.bind(null,e),Zo:lu.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await tu(e)):(await e.Iu.stop(),e.fu.length>0&&(Or("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pu{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new pu(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Br(Ur.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mu(e,t){if(Pr("AsyncQueue",`${t}: ${e}`),vi(e))return new Br(Ur.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||oi.comparator(t.key,n.key):(e,t)=>oi.comparator(e.key,t.key),this.keyedMap=Vo(),this.sortedSet=new ys(this.comparator)}static emptySet(e){return new vu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new vu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this.Tu=new ys(oi.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Fr():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class yu{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new yu(e,t,vu.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&js(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this.Au=void 0,this.listeners=[]}}class bu{constructor(){this.queries=new Do((e=>qs(e)),js),this.onlineState="Unknown",this.Ru=new Set}}async function wu(e,t){const n=Vr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new _u),i)try{s.Au=await n.onListen(r)}catch(e){const n=mu(e,`Initialization of query '${Hs(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&Iu(n)}async function ku(e,t){const n=Vr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Cu(e,t){const n=Vr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(i)&&(r=!0);t.Au=i}}r&&Iu(n)}function Eu(e,t,n){const r=Vr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Iu(e){e.Ru.forEach((e=>{e.next()}))}class Su{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new yu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=yu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tu{constructor(e){this.key=e}}class xu{constructor(e){this.key=e}}class Au{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Ho(),this.mutatedKeys=Ho(),this.Gu=Ks(e),this.Qu=new vu(this.Gu)}get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new gu,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=zs(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Hu(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Gu(c,a)>0||l&&this.Gu(c,l)<0)&&(o=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Fr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new yu(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new gu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ho(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new xu(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new Tu(n))})),t}tc(e){this.qu=e.Hi,this.Ku=Ho();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return yu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Ru{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Nu{constructor(e){this.key=e,this.nc=!1}}class Ou{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new Do((e=>qs(e)),js),this.rc=new Map,this.oc=new Set,this.uc=new ys(oi.comparator),this.cc=new Map,this.ac=new tl,this.hc={},this.lc=new Map,this.fc=Ya.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Pu(e,t){const n=Xu(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const e=await bl(n.localStore,Bs(t));n.isPrimaryClient&&$l(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Du(n,t,r,"current"===s,e.resumeToken)}return i}async function Du(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await kl(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return zu(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await kl(e.localStore,t,!0),o=new Au(t,s.Hi),a=o.Wu(s.documents),l=Yo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);zu(e,n,u.Xu);const c=new Ru(t,n,o);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function Lu(e,t){const n=Vr(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((e=>!js(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),jl(n.remoteStore,r.targetId),qu(n,r.targetId)})).catch(pi)):(qu(n,r.targetId),await wl(n.localStore,r.targetId,!0))}async function Fu(e,t,n){const r=Zu(e);try{const e=await function(e,t){const n=Vr(e),r=ei.now(),i=t.reduce(((e,t)=>e.add(t.key)),Ho());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Fo(),l=Ho();return n.Gi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=bo(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Co(e.key,t,Is(t.value.mapValue),po.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Uo(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new ys(Xr)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Yu(r,e.changes),await tu(r.remoteStore)}catch(e){const t=mu(e,"Failed to persist write");n.reject(t)}}async function Mu(e,t){const n=Vr(e);try{const e=await gl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(Mr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?Mr(r.nc):e.removedDocuments.size>0&&(Mr(r.nc),r.nc=!1))})),await Yu(n,e,t)}catch(e){await pi(e)}}function Vu(e,t,n){const r=Vr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Vr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.bu(t)&&(r=!0)})),r&&Iu(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Uu(e,t,n){const r=Vr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let e=new ys(oi.comparator);e=e.insert(s,Ss.newNoDocument(s,ti.min()));const n=Ho().add(s),i=new Ko(ti.min(),new Map,new ws(Xr),e,n);await Mu(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),Ku(r)}else await wl(r.localStore,t,!1).then((()=>qu(r,t,n))).catch(pi)}async function Bu(e,t){const n=Vr(e),r=t.batch.batchId;try{const e=await ml(n.localStore,t);ju(n,r,null),$u(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yu(n,e)}catch(e){await pi(e)}}async function Wu(e,t,n){const r=Vr(e);try{const e=await function(e,t){const n=Vr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Mr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);ju(r,t,n),$u(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Yu(r,e)}catch(n){await pi(n)}}function $u(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function ju(e,t,n){const r=Vr(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function qu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||Hu(e,t)}))}function Hu(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(jl(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Ku(e))}function zu(e,t,n){for(const r of n)r instanceof Tu?(e.ac.addReference(r.key,t),Gu(e,r)):r instanceof xu?(Or("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||Hu(e,r.key)):Fr()}function Gu(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Or("SyncEngine","New document in limbo: "+n),e.oc.add(r),Ku(e))}function Ku(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new oi(ri.fromString(t)),r=e.fc.next();e.cc.set(r,new Nu(n)),e.uc=e.uc.insert(n,r),$l(e.remoteStore,new $a(Bs(Ds(n.path)),r,2,gi.at))}}async function Yu(e,t,n){const r=Vr(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{o.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=cl.Ci(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.sc.Wo(i),await async function(e,t){const n=Vr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>mi.forEach(t,(t=>mi.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>mi.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!vi(e))throw e;Or("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qi.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(e,i)}}}(r.localStore,s))}async function Ju(e,t){const n=Vr(e);if(!n.currentUser.isEqual(t)){Or("SyncEngine","User change. New user:",t.toKey());const e=await pl(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new Br(Ur.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Yu(n,e.ji)}}function Qu(e,t){const n=Vr(e),r=n.cc.get(t);if(r&&r.nc)return Ho().add(r.key);{let e=Ho();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}function Xu(e){const t=Vr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Uu.bind(null,t),t.sc.Wo=Cu.bind(null,t.eventManager),t.sc.wc=Eu.bind(null,t.eventManager),t}function Zu(e){const t=Vr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wu.bind(null,t),t}class ec{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ol(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return fl(this.persistence,new hl,e.initialUser,this.yt)}yc(e){return new al(ul.Bs,this.yt)}gc(e){return new Il}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Vu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ju.bind(null,this.syncEngine),await hu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bu}createDatastore(e){const t=Ol(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Rl(r));var r;return function(e,t,n,r){return new Ml(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Vu(this.syncEngine,e,0),s=Tl.C()?new Tl:new Sl,new Ul(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Ou(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Vr(e);Or("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Wl(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(e,t,n){if(!n)throw new Br(Ur.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function rc(e,t,n,r){if(!0===t&&!0===r)throw new Br(Ur.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ic(e){if(!oi.isDocumentKey(e))throw new Br(Ur.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sc(e){if(oi.isDocumentKey(e))throw new Br(Ur.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Fr()}function ac(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Br(Ur.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oc(e);throw new Br(Ur.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lc=new Map;class uc{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Br(Ur.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Br(Ur.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Br(Ur.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Br(Ur.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new jr;switch(e.type){case"gapi":const t=e.client;return new Gr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Br(Ur.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=lc.get(e);t&&(Or("ComponentProvider","Removing Datastore"),lc.delete(e),t.terminate())}(this),Promise.resolve()}}function hc(e,t,n,r={}){var i;const s=(e=ac(e,cc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Dr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=xr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Br(Ur.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new xr(s)}e._authCredentials=new qr(new $r(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dc(this.firestore,e,this._key)}}class fc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new fc(this.firestore,e,this._query)}}class pc extends fc{constructor(e,t,n){super(e,t,Ds(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dc(this.firestore,null,new oi(e))}withConverter(e){return new pc(this.firestore,e,this._path)}}function mc(e,t,...n){if(e=(0,a.m9)(e),nc("collection","path",t),e instanceof cc){const r=ri.fromString(t,...n);return sc(r),new pc(e,null,r)}{if(!(e instanceof dc||e instanceof pc))throw new Br(Ur.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return sc(r),new pc(e.firestore,null,r)}}function vc(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Qr.R()),nc("doc","path",t),e instanceof cc){const r=ri.fromString(t,...n);return ic(r),new dc(e,null,new oi(r))}{if(!(e instanceof dc||e instanceof pc))throw new Br(Ur.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return ic(r),new dc(e.firestore,e instanceof pc?e.converter:null,new oi(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yc{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=xr.UNAUTHENTICATED,this.clientId=Qr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Or("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Or("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Br(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=mu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function _c(e,t){e.asyncQueue.verifyOperationInProgress(),Or("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await pl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function bc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await wc(e);Or("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>cu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>cu(t.remoteStore,n))),e.onlineComponents=t}async function wc(e){return e.offlineComponents||(Or("FirestoreClient","Using default OfflineComponentProvider"),await _c(e,new ec)),e.offlineComponents}async function kc(e){return e.onlineComponents||(Or("FirestoreClient","Using default OnlineComponentProvider"),await bc(e,new tc)),e.onlineComponents}function Cc(e){return kc(e).then((e=>e.syncEngine))}async function Ec(e){const t=await kc(e),n=t.eventManager;return n.onListen=Pu.bind(null,t.syncEngine),n.onUnlisten=Lu.bind(null,t.syncEngine),n}function Ic(e,t,n={}){const r=new Wr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new gc({next:n=>{t.enqueueAndForget((()=>ku(e,o))),n.fromCache&&"server"===r.source?i.reject(new Br(Ur.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Su(n,s,{includeMetadataChanges:!0,Nu:!0});return wu(e,o)}(await Ec(e),e.asyncQueue,t,n,r))),r.promise}class Sc{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Pl(this,"async_queue_retry"),this.Wc=()=>{const e=Nl();e&&Or("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=Nl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Nl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise((()=>{}));const t=new Wr;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(k){if(!vi(k))throw k;Or("AsyncQueue","Operation failed with retryable error: "+k)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Pr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=pu.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.Uc.push(r),r}zc(){this.Kc&&Fr()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class Tc extends cc{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Sc,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rc(this),this._firestoreClient.terminate()}}function xc(e,t){const n="object"==typeof e?e:(0,i.Mq)(),r="string"==typeof e?e:t||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.P0)("firestore");e&&hc(s,...e)}return s}function Ac(e){return e._firestoreClient||Rc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Rc(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new yi(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new yc(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nc(Si.fromBase64String(e))}catch(e){throw new Br(Ur.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Nc(Si.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Br(Ur.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new si(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pc{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Br(Ur.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Br(Ur.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xr(this._lat,e._lat)||Xr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=/^__.*__$/;class Fc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Co(e,this.data,this.fieldMask,t,this.fieldTransforms):new ko(e,this.data,t,this.fieldTransforms)}}function Mc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Fr()}}class Vc{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Vc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Jc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Mc(this.sa)&&Lc.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Uc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||Ol(e)}da(e,t,n,r=!1){return new Vc({sa:e,methodName:t,fa:n,path:si.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Bc(e){const t=e._freezeSettings(),n=Ol(e._databaseId);return new Uc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Wc(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);zc("Data must be an object, but it was:",o,r);const a=qc(r,o);let l,u;if(s.merge)l=new Cs(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Gc(t,r,n);if(!o.contains(i))throw new Br(Ur.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Qc(e,i)||e.push(i)}l=new Cs(e),u=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=o.fieldTransforms;return new Fc(new Es(a),l,u)}function $c(e,t,n,r=!1){return jc(n,e.da(r?4:3,t))}function jc(e,t){if(Hc(e=(0,a.m9)(e)))return zc("Unsupported field value:",t,e),qc(e,t);if(e instanceof Pc)return function(e,t){if(!Mc(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=jc(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Xs(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ei.fromDate(e);return{timestampValue:aa(t.yt,n)}}if(e instanceof ei){const n=new ei(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:aa(t.yt,n)}}if(e instanceof Dc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Nc)return{bytesValue:la(t.yt,e._byteString)};if(e instanceof dc){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ha(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${oc(e)}`)}(e,t)}function qc(e,t){const n={};return ki(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):wi(e,((e,r)=>{const i=jc(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Hc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ei||e instanceof Dc||e instanceof Nc||e instanceof dc||e instanceof Pc)}function zc(e,t,n){if(!Hc(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=oc(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function Gc(e,t,n){if((t=(0,a.m9)(t))instanceof Oc)return t._internalPath;if("string"==typeof t)return Yc(e,t);throw Jc("Field path arguments must be of type string or ",e,!1,void 0,n)}const Kc=new RegExp("[~\\*/\\[\\]]");function Yc(e,t,n){if(t.search(Kc)>=0)throw Jc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Oc(...t.split("."))._internalPath}catch(r){throw Jc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Jc(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Br(Ur.INVALID_ARGUMENT,a+e+l)}function Qc(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Zc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(eh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Zc extends Xc{data(){return super.data()}}function eh(e,t){return"string"==typeof t?Yc(e,t):t instanceof Oc?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Br(Ur.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nh{}class rh extends nh{}function ih(e,t,...n){let r=[];t instanceof nh&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof ah)).length,n=e.filter((e=>e instanceof sh)).length;if(t>1||t>0&&n>0)throw new Br(Ur.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class sh extends rh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new sh(e,t,n)}_apply(e){const t=this._parse(e);return ch(e._query,t),new fc(e.firestore,e.converter,Ws(e._query,t))}_parse(e){const t=Bc(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Br(Ur.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){uh(o,s);const t=[];for(const n of o)t.push(lh(r,e,n));a={arrayValue:{values:t}}}else a=lh(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||uh(o,s),a=$c(n,t,o,"in"===s||"not-in"===s);return es.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function oh(e,t,n){const r=t,i=eh("where",e);return sh._create(i,r,n)}class ah extends nh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ah(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:ts.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)ch(n,i),n=Ws(n,i)}(e._query,t),new fc(e.firestore,e.converter,Ws(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function lh(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Br(Ur.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vs(t)&&-1!==n.indexOf("/"))throw new Br(Ur.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ri.fromString(n));if(!oi.isDocumentKey(r))throw new Br(Ur.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $i(e,new oi(r))}if(n instanceof dc)return $i(e,n._key);throw new Br(Ur.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oc(n)}.`)}function uh(e,t){if(!Array.isArray(e)||0===e.length)throw new Br(Ur.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Br(Ur.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function ch(e,t){if(t.isInequality()){const n=Ms(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new Br(Ur.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Fs(e);null!==i&&hh(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Br(Ur.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Br(Ur.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function hh(e,t,n){if(!n.isEqual(t))throw new Br(Ur.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class dh{convertValue(e,t="none"){switch(Li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ai(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Fr()}}convertObject(e,t){const n={};return wi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Dc(Ai(e.latitude),Ai(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Oi(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Pi(e));default:return null}}convertTimestamp(e){const t=xi(e);return new ei(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ri.fromString(e);Mr(La(n));const r=new _i(n.get(1),n.get(3)),i=new oi(n.popFirst(5));return r.isEqual(t)||Pr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ph{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mh extends Xc{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(eh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class vh extends mh{data(e={}){return super.data(e)}}class gh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ph(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new vh(this._firestore,this._userDataWriter,n.key,n,new ph(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Br(Ur.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new vh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ph(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new vh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ph(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:yh(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function yh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Fr()}}class _h extends dh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new dc(this.firestore,null,t)}}function bh(e){e=ac(e,fc);const t=ac(e.firestore,Tc),n=Ac(t),r=new _h(t);return th(e._query),Ic(n,e._query).then((n=>new gh(t,r,e,n)))}function wh(e,t,n){e=ac(e,dc);const r=ac(e.firestore,Tc),i=fh(e.converter,t,n);return Ch(r,[Wc(Bc(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,po.none())])}function kh(e,t){const n=ac(e.firestore,Tc),r=vc(e),i=fh(e.converter,t);return Ch(n,[Wc(Bc(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,po.exists(!1))]).then((()=>r))}function Ch(e,t){return function(e,t){const n=new Wr;return e.asyncQueue.enqueueAndForget((async()=>Fu(await Cc(e),t,n))),n.promise}(Ac(e),t)}!function(e,t=!0){!function(e){Ar=e}(i.Jn),(0,i.Xd)(new s.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Tc(new Hr(e.getProvider("auth-internal")),new Yr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Br(Ur.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _i(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Tr,"3.8.0",e),(0,i.KN)(Tr,"3.8.0","esm2017")}()},2483:function(e,t,n){"use strict";n.d(t,{p7:function(){return nt},r5:function(){return B}});n(6699),n(1703);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function l(e,t){const n={};for(const r in t){const i=t[r];n[r]=c(i)?i.map(e):e(i)}return n}const u=()=>{},c=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=w(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function v(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&g(t.matched[r],n.matched[i])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function g(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_(e[n],t[n]))return!1;return!0}function _(e,t){return c(e)?b(e,t):c(t)?b(t,e):e===t}function b(e,t){return c(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function w(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var k,C;(function(e){e["pop"]="pop",e["push"]="push"})(k||(k={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(C||(C={}));function E(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const I=/^[^#]+#/;function S(e,t){return e.replace(I,"#")+t}function T(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=T(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const N=new Map;function O(e,t){N.set(e,t)}function P(e){const t=N.get(e);return N.delete(e),t}let D=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+i}function F(e,t,n,r){let i=[],s=[],o=null;const l=({state:s})=>{const a=L(e,location),l=n.value,u=t.value;let c=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);c=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:c,type:k.pop,direction:c?c>0?C.forward:C.back:C.unknown})}))};function u(){o=n.value}function c(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:x()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:c,destroy:d}}function M(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?x():null}}function V(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:D()+e+r;try{t[o?"replaceState":"pushState"](s,"",l),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](l)}}function o(e,n){const o=a({},t.state,M(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function l(e,n){const o=a({},i.value,t.state,{forward:e,scroll:x()});s(o.current,o,!0);const l=a({},M(r.value,e,null),{position:o.position+1},n);s(e,l,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:l,replace:o}}function U(e){e=E(e);const t=V(e),n=F(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:S.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function B(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),U(e)}function W(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const j={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var H;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(H||(H={}));function z(e,t){return a(new Error,{type:e,[q]:!0},t)}function G(e,t){return e instanceof Error&&q in e&&(null==t||!!(e.type&t))}const K="[^/]+?",Y={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function Q(e,t){const n=a({},Y,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(J,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;s.push({name:e,repeatable:n,optional:l});const c=u||K;if(c!==K){o+=10;try{new RegExp(`(${c})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${c}): `+h.message)}}let d=n?`((?:${c})(?:/(?:${c}))*)`:`(${c})`;t||(d=l&&a.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),i+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===c&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const s of i)if(0===s.type)n+=s.value;else if(1===s.type){const{value:o,repeatable:a,optional:l}=s,u=o in t?t[o]:"";if(c(u)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const h=c(u)?u.join("/"):u;if(!h){if(!l)throw new Error(`Missing required param "${o}"`);i.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=h}}return n}return{re:o,score:r,keys:s,parse:l,stringify:u}}function X(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=X(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,l=0,u="",c="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==c[c.length-1]?c=c.slice(0,-1)+a:n=3:c+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,c="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ie(e,t,n){const r=Q(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,l=ae(e);l.aliasOf=r&&r.record;const h=he(t,e),d=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ue(f)&&o(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,c(f)}return p?()=>{o(p)}:u}function o(e){if($(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function l(){return n}function c(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ue(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,l={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw z(1,{location:e});o=i.record.name,l=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(l)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(l=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw z(1,{location:e,currentLocation:t});o=i.record.name,l=a({},t.params,e.params),s=i.stringify(l)}const u=[];let c=i;while(c)u.unshift(c.record),c=c.parent;return{name:o,path:s,params:l,matched:u,meta:ce(u)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:le(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function le(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ue(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ce(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,me=/\//g,ve=/=/g,ge=/\?/g,ye=/\+/g,_e=/%5B/g,be=/%5D/g,we=/%5E/g,ke=/%60/g,Ce=/%7B/g,Ee=/%7C/g,Ie=/%7D/g,Se=/%20/g;function Te(e){return encodeURI(""+e).replace(Ee,"|").replace(_e,"[").replace(be,"]")}function xe(e){return Te(e).replace(Ce,"{").replace(Ie,"}").replace(we,"^")}function Ae(e){return Te(e).replace(ye,"%2B").replace(Se,"+").replace(fe,"%23").replace(pe,"%26").replace(ke,"`").replace(Ce,"{").replace(Ie,"}").replace(we,"^")}function Re(e){return Ae(e).replace(ve,"%3D")}function Ne(e){return Te(e).replace(fe,"%23").replace(ge,"%3F")}function Oe(e){return null==e?"":Ne(e).replace(me,"%2F")}function Pe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),s=Pe(n<0?e:e.slice(0,n)),o=n<0?null:Pe(e.slice(n+1));if(s in t){let e=t[s];c(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=c(r)?r.map((e=>e&&Ae(e))):[r&&Ae(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=c(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),Ve=Symbol(""),Ue=Symbol(""),Be=Symbol(""),We=Symbol("");function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function je(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const l=e=>{!1===e?a(z(4,{from:n,to:t})):e instanceof Error?a(e):W(e)?a(z(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch((e=>a(e)))}))}function qe(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(He(a)){const o=a.__vccOpts||a,l=o[t];l&&i.push(je(l,n,r,s,e))}else{let l=a();0,i.push((()=>l.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const l=a.__vccOpts||a,u=l[t];return u&&je(u,n,r,s,e)()}))))}}}return i}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=(0,r.f3)(Ue),n=(0,r.f3)(Be),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(g.bind(null,r));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&i[i.length-1].path!==a?i.findIndex(g.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Je(n.params,s.value.params))),l=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function c(n={}){return Ye(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:l,navigate:c}}const Ge=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=(0,i.qj)(ze(e)),{options:s}=(0,r.f3)(Ue),o=(0,r.Fl)((()=>({[Xe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ke=Ge;function Ye(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!c(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(We),o=(0,r.Fl)((()=>e.route||s.value)),l=(0,r.f3)(Ve,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(l);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),c=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ve,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Me,c),(0,r.JJ)(We,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,c.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&g(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=c.value,l=s&&s.components[e.name],u=e.name;if(!l)return et(n.default,{Component:l,route:i});const d=s.props[e.name],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(s.instances[u]=null)},m=(0,r.h)(l,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:m,route:i})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=se(e.routes,e),n=e.parseQuery||De,o=e.stringifyQuery||Le,h=e.history;const d=$e(),m=$e(),g=$e(),y=(0,i.XI)(j);let _=j;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=l.bind(null,(e=>""+e)),w=l.bind(null,Oe),C=l.bind(null,Pe);function E(e,n){let r,i;return $(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map((e=>e.record))}function T(e){return!!t.getRecordMatcher(e)}function N(e,r){if(r=a({},r||y.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:C(s.params),hash:Pe(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:w(e.params)}),r.params=w(r.params)}const s=t.resolve(i,r),l=e.hash||"";s.params=b(C(s.params));const u=p(o,a({},e,{hash:xe(l),path:s.path})),c=h.createHref(u);return a({fullPath:u,hash:l,query:o===Le?Fe(e.query):e.query||{}},s,{redirectedFrom:void 0,href:c})}function D(e){return"string"===typeof e?f(n,e,y.value.path):a({},e)}function L(e,t){if(_!==e)return z(8,{from:t,to:e})}function F(e){return U(e)}function M(e){return F(a(D(e),{replace:!0}))}function V(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=D(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function U(e,t){const n=_=N(e),r=y.value,i=e.state,s=e.force,l=!0===e.replace,u=V(n);if(u)return U(a(D(u),{state:i,force:s,replace:l}),t||n);const c=n;let h;return c.redirectedFrom=t,!s&&v(o,r,n)&&(h=z(16,{to:c,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):W(c,r)).catch((e=>G(e)?G(e,2)?e:te(e):Z(e,c,r))).then((e=>{if(e){if(G(e,2))return U(a(D(e.to),{state:i,force:s,replace:l}),t||c)}else e=H(c,r,!0,l,i);return q(c,r,e),e}))}function B(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function W(e,t){let n;const[r,i,s]=it(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(je(r,e,t))}));const o=B.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of d.list())n.push(je(r,e,t));return n.push(o),rt(n)})).then((()=>{n=qe(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(je(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(c(r.beforeEnter))for(const i of r.beforeEnter)n.push(je(i,e,t));else n.push(je(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(s,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of m.list())n.push(je(r,e,t));return n.push(o),rt(n)})).catch((e=>G(e,8)?e:Promise.reject(e)))}function q(e,t,n){for(const r of g.list())r(e,t,n)}function H(e,t,n,r,i){const o=L(e,t);if(o)return o;const l=t===j,u=s?history.state:{};n&&(r||l?h.replace(e.fullPath,a({scroll:l&&u&&u.scroll},i)):h.push(e.fullPath,i)),y.value=e,ne(e,t,n,l),te()}let K;function Y(){K||(K=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=N(e),i=V(r);if(i)return void U(a(i,{replace:!0}),r).catch(u);_=r;const o=y.value;s&&O(R(o.fullPath,n.delta),x()),W(r,o).catch((e=>G(e,12)?e:G(e,2)?(U(e.to,r).then((e=>{G(e,20)&&!n.delta&&n.type===k.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||H(r,o,!1),e&&(n.delta?h.go(-n.delta,!1):n.type===k.pop&&G(e,20)&&h.go(-1,!1)),q(r,o,e)})).catch(u)})))}let J,Q=$e(),X=$e();function Z(e,t,n){te(e);const r=X.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return J&&y.value!==j?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function te(e){return J||(J=!e,Y(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const l=!i&&P(R(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,l))).then((e=>e&&A(e))).catch((e=>Z(e,t,n)))}const re=e=>h.go(e);let ie;const oe=new Set,ae={currentRoute:y,listening:!0,addRoute:E,removeRoute:I,hasRoute:T,getRoutes:S,resolve:N,options:e,push:F,replace:M,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:m.add,afterEach:g.add,onError:X.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ke),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),s&&!ie&&y.value===j&&(ie=!0,F(h.location).catch((e=>{0})));const n={};for(const i in j)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(Ue,t),e.provide(Be,(0,i.qj)(n)),e.provide(We,y);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(_=j,K&&K(),K=null,y.value=j,ie=!1,J=!1),o()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>g(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>g(e,a)))||i.push(a))}return[n,r,i]}},4457:function(e,t,n){"use strict";n.d(t,{Yo:function(){return Ta},Fl:function(){return Sa}});var r=n(8878),i=n(4870),s=(n(1703),n(1804)),o=n(7142),a=n(223),l=n(5168);const u="@firebase/database",c="0.14.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h="";function d(e){h=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,a.Wl)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,a.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,a.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new f(t)}}catch(t){}return new p},v=m("localStorage"),g=m("sessionStorage"),y=new l.Yd("@firebase/database"),_=function(){let e=1;return function(){return e++}}(),b=function(e){const t=(0,a.dS)(e),n=new a.gQ;n.update(t);const r=n.digest();return a.US.encodeByteArray(r)},w=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=w.apply(null,r):t+="object"===typeof r?(0,a.Wl)(r):r,t+=" "}return t};let k=null,C=!0;const E=function(e,t){(0,a.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(y.logLevel=l["in"].VERBOSE,k=y.log.bind(y),t&&g.set("logging_enabled",!0)):"function"===typeof e?k=e:(k=null,g.remove("logging_enabled"))},I=function(...e){if(!0===C&&(C=!1,null===k&&!0===g.get("logging_enabled")&&E(!0)),k){const t=w.apply(null,e);k(t)}},S=function(e){return function(...t){I(e,...t)}},T=function(...e){const t="FIREBASE INTERNAL ERROR: "+w(...e);y.error(t)},x=function(...e){const t=`FIREBASE FATAL ERROR: ${w(...e)}`;throw y.error(t),new Error(t)},A=function(...e){const t="FIREBASE WARNING: "+w(...e);y.warn(t)},R=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&A("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},N=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},O=function(e){if((0,a.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},P="[MIN_NAME]",D="[MAX_NAME]",L=function(e,t){if(e===t)return 0;if(e===P||t===D)return-1;if(t===P||e===D)return 1;{const n=G(e),r=G(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},F=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,a.Wl)(t))},V=function(e){if("object"!==typeof e||null===e)return(0,a.Wl)(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,a.Wl)(t[r]),n+=":",n+=V(e[t[r]]);return n+="}",n},U=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function B(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const W=function(e){(0,a.hu)(!N(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,l,u;0===e?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=l+r,o=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=t;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let d="";for(u=0;u<64;u+=8){let e=parseInt(h.substr(u,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},$=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},j=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const q=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,z=2147483647,G=function(e){if(q.test(e)){const t=Number(e);if(t>=H&&t<=z)return t}return null},K=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw A("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Y=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},J=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){A(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',A(e)}}class Z{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Z.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ee="5",te="v",ne="s",re="r",ie="f",se=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",ae="p",le="ac",ue="websocket",ce="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=v.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&v.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function de(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function fe(e,t,n){let r;if((0,a.hu)("string"===typeof t,"typeof type must == string"),(0,a.hu)("object"===typeof n,"typeof params must == object"),t===ue)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}de(e)&&(n["ns"]=e.namespace);const i=[];return B(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,a.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,a.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={},ve={};function ge(e){const t=e.toString();return me[t]||(me[t]=new pe),me[t]}function ye(e,t){const n=e.toString();return ve[n]||(ve[n]=t()),ve[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&K((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="start",we="close",ke="pLPCommand",Ce="pRTLPCB",Ee="id",Ie="pw",Se="ser",Te="cb",xe="seg",Ae="ts",Re="d",Ne="dframe",Oe=1870,Pe=30,De=Oe-Pe,Le=25e3,Fe=3e4;class Me{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=S(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[le]=this.appCheckToken),fe(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _e(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Fe)),O((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ve(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===be)this.id=n,this.password=r;else{if(t!==we)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[be]="t",e[Se]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=this.scriptTagHolder.uniqueCallbackIdentifier),e[te]=ee,this.transportSessionId&&(e[ne]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[ae]=this.applicationId),this.appCheckToken&&(e[le]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&se.test(location.hostname)&&(e[re]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!(0,a.Yr)()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!$()&&!j())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,a.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,a.h$)(t),r=U(n,De);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,a.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ne]="t",n[Ee]=e,n[Ie]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,a.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ve{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,a.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_(),window[ke+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ve.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){I("frame writing exception"),i.stack&&I(i.stack),I(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||I("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ee]=this.myID,e[Ie]=this.myPW,e[Se]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Pe+n.length<=Oe))break;{const e=this.pendingSegs.shift();n=n+"&"+xe+r+"="+e.seg+"&"+Ae+r+"="+e.ts+"&"+Re+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Le)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){(0,a.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{I("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=16384,Be=45e3;let We=null;"undefined"!==typeof MozWebSocket?We=MozWebSocket:"undefined"!==typeof WebSocket&&(We=WebSocket);class $e{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=S(this.connId),this.stats_=ge(t),this.connURL=$e.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s[te]=ee,!(0,a.Yr)()&&"undefined"!==typeof location&&location.hostname&&se.test(location.hostname)&&(s[re]=ie),t&&(s[ne]=t),n&&(s[oe]=n),r&&(s[le]=r),i&&(s[ae]=i),fe(e,ue,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,v.set("previous_websocket_failure",!0);try{let e;if((0,a.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${ee}/${h}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/altren-character/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new We(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==We&&!$e.forceDisallow_}static previouslyFailed(){return v.isInMemoryStorage||!0===v.get("previous_websocket_failure")}markConnectionHealthy(){v.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,a.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,a.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,a.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=U(t,Ue);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Be))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2,$e.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=$e&&$e["isAvailable"]();let n=t&&!$e.previouslyFailed();if(e.webSocketOnly&&(t||A("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[$e];else{const e=this.transports_=[];for(const t of je.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);je.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}je.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qe=6e4,He=5e3,ze=10240,Ge=102400,Ke="t",Ye="d",Je="s",Qe="r",Xe="e",Ze="o",et="a",tt="n",nt="p",rt="h";class it{constructor(e,t,n,r,i,s,o,a,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=S("c:"+this.id+":"),this.transportManager_=new je(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=J((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ge?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ze?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ke in e){const t=e[Ke];t===et?this.upgradeIfSecondaryHealthy_():t===Qe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Ze&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:et,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tt,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(Ke,e);if(Ye in e){const n=e[Ye];if(t===rt)this.onHandshake_(n);else if(t===tt){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Je?this.onConnectionShutdown_(n):t===Qe?this.onReset_(n):t===Xe?T("Server Error: "+n):t===Ze?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ee!==n&&A("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),J((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(qe))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):J((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(He))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(v.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,a.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){(0,a.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,a.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new at}getInitialEvent(e){return(0,a.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=32,ut=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ht(){return new ct("")}function dt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ft(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function mt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function vt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function yt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function _t(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ct)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function bt(e){return e.pieceNum_>=e.pieces_.length}function wt(e,t){const n=dt(e),r=dt(t);if(null===n)return t;if(n===r)return wt(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function kt(e,t){if(ft(e)!==ft(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ct(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ft(e)>ft(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Et{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,a.ug)(this.parts_[n]);Tt(this)}}function It(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,a.ug)(t),Tt(e)}function St(e){const t=e.parts_.pop();e.byteLength_-=(0,a.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function Tt(e){if(e.byteLength_>ut)throw new Error(e.errorPrefix_+"has a key path longer than "+ut+" bytes ("+e.byteLength_+").");if(e.parts_.length>lt)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lt+") or object contains a cycle "+xt(e))}function xt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new At}getInitialEvent(e){return(0,a.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=1e3,Nt=3e5,Ot=3e4,Pt=1.3,Dt=3e4,Lt="server_kill",Ft=3;class Mt extends st{constructor(e,t,n,r,i,s,o,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=l,this.id=Mt.nextPersistentConnectionId_++,this.log_=S("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rt,this.maxReconnectDelay_=Nt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,a.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");At.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&at.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,a.Wl)(i)),(0,a.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new a.BH,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,a.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,a.hu)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},s="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(s,i,(i=>{const s=i["d"],o=i["s"];Mt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,a.r3)(e,"w")){const n=(0,a.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();A(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,a.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ot)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,a.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,a.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},s="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(s,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s["h"]=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,a.Wl)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):T("Unrecognized action received from server: "+(0,a.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,a.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Dt&&(this.reconnectDelay_=Rt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Mt.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const l=function(){o?o.close():(s=!0,n())},u=function(e){(0,a.hu)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new it(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{A(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Lt)}),i))}catch(T){this.log_("Failed to get token: "+T),s||(this.repoInfo_.nodeAdmin&&A(T),l())}}}interrupt(e){I("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){I("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,a.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>V(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){I("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ft&&(this.reconnectDelay_=Ot,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){I("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ft&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,a.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+h.replace(/\./g,"-")]=1,(0,a.uI)()?e["framework.cordova"]=1:(0,a.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=at.getInstance().currentlyOnline();return(0,a.xb)(this.interruptReasons_)&&e}}Mt.nextPersistentConnectionId_=0,Mt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Vt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Vt(P,e),r=new Vt(P,t);return 0!==this.compare(n,r)}minPost(){return Vt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt;class Wt extends Ut{static get __EMPTY_NODE(){return Bt}static set __EMPTY_NODE(e){Bt=e}compare(e,t){return L(e.name,t.name)}isDefinedOn(e){throw(0,a.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Vt.MIN}maxPost(){return new Vt(D,Bt)}makePost(e,t){return(0,a.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Vt(e,Bt)}toString(){return".key"}}const $t=new Wt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:qt.RED,this.left=null!=r?r:zt.EMPTY_NODE,this.right=null!=i?i:zt.EMPTY_NODE}copy(e,t,n,r,i){return new qt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return zt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qt.RED=!0,qt.BLACK=!1;class Ht{copy(e,t,n,r,i){return this}insert(e,t,n){return new qt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,t=zt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,qt.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new jt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new jt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new jt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return L(e.name,t.name)}function Kt(e,t){return L(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt;function Jt(e){Yt=e}zt.EMPTY_NODE=new Ht;const Qt=function(e){return"number"===typeof e?"number:"+W(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();(0,a.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,a.r3)(t,".sv"),"Priority must be a string or number.")}else(0,a.hu)(e===Yt||e.isEmpty(),"priority of unexpected type.");(0,a.hu)(e===Yt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,a.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return bt(e)?this:".priority"===dt(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=dt(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,a.hu)(".priority"!==n||1===ft(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?W(this.value_):this.value_,this.lazyHash_=b(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:((0,a.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=nn.VALUE_TYPE_ORDER.indexOf(t),i=nn.VALUE_TYPE_ORDER.indexOf(n);return(0,a.hu)(r>=0,"Unknown leaf type: "+t),(0,a.hu)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function sn(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends Ut{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?L(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Vt.MIN}maxPost(){return new Vt(D,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new Vt(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new on,ln=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){const t=e=>parseInt(Math.log(e)/ln,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cn=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new qt(a,o.node,qt.BLACK,null,null);{const l=parseInt(s/2,10)+t,u=i(t,l),c=i(l+1,r);return o=e[l],a=n?n(o):o,new qt(a,o.node,qt.BLACK,u,c)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const u=i(s+1,a),c=e[s],h=n?n(c):c;l(new qt(h,c.node,r,null,u))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,qt.BLACK):(a(r,qt.BLACK),a(r,qt.RED))}return s},o=new un(e.length),a=s(o);return new zt(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class fn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,a.hu)(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new fn({".priority":dn},{".priority":an}),hn}get(e){const t=(0,a.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zt?t:null}hasIndex(e){return(0,a.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,a.hu)(e!==$t,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Vt.Wrap);let s,o=i.getNext();while(o)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?cn(n,e.getCompare()):dn;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=s,new fn(c,u)}addToIndexes(e,t){const n=(0,a.UI)(this.indexes_,((n,r)=>{const i=(0,a.DV)(this.indexSet_,r);if((0,a.hu)(i,"Missing index implementation for "+r),n===dn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Vt.Wrap);let s=r.getNext();while(s)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),cn(n,i.getCompare())}return dn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Vt(e.name,r))),i.insert(e,e.node)}}));return new fn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,a.UI)(this.indexes_,(n=>{if(n===dn)return n;{const r=t.get(e.name);return r?n.remove(new Vt(e.name,r)):n}}));return new fn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class mn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&(0,a.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new mn(new zt(Kt),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new mn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=dt(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,a.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Vt(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?pn:this.priorityNode_;return new mn(r,s,i)}}updateChild(e,t){const n=dt(e);if(null===n)return t;{(0,a.hu)(".priority"!==dt(e)||1===ft(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(pt(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(an,((s,o)=>{t[s]=o.val(e),n++,i&&mn.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(an,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":b(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Vt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Vt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Vt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Vt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Vt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gn?-1:0}withIndex(e){if(e===$t||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new mn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===$t||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===$t?null:this.indexMap_.get(e.toString())}}mn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vn extends mn{constructor(){super(new zt(Kt),mn.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return mn.EMPTY_NODE}isEmpty(){return!1}}const gn=new vn;Object.defineProperties(Vt,{MIN:{value:new Vt(P,mn.EMPTY_NODE)},MAX:{value:new Vt(D,gn)}}),Wt.__EMPTY_NODE=mn.EMPTY_NODE,nn.__childrenNodeConstructor=mn,Jt(gn),sn(gn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function _n(e,t=null){if(null===e)return mn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,a.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,_n(t))}if(e instanceof Array||!yn){let n=mn.EMPTY_NODE;return B(e,((t,r)=>{if((0,a.r3)(e,t)&&"."!==t.substring(0,1)){const e=_n(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(_n(t))}{const n=[];let r=!1;const i=e;if(B(i,((e,t)=>{if("."!==e.substring(0,1)){const i=_n(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Vt(e,i)))}})),0===n.length)return mn.EMPTY_NODE;const s=cn(n,Gt,(e=>e.name),Kt);if(r){const e=cn(n,an.getCompare());return new mn(s,_n(t),new fn({".priority":e},{".priority":an}))}return new mn(s,_n(t),fn.Default)}}rn(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn extends Ut{constructor(e){super(),this.indexPath_=e,(0,a.hu)(!bt(e)&&".priority"!==dt(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?L(e.name,t.name):i}makePost(e,t){const n=_n(e),r=mn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Vt(t,r)}maxPost(){const e=mn.EMPTY_NODE.updateChild(this.indexPath_,gn);return new Vt(D,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ut{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?L(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Vt.MIN}maxPost(){return Vt.MAX}makePost(e,t){const n=_n(e);return new Vt(t,n)}toString(){return".value"}}const kn=new wn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e){return{type:"value",snapshotNode:e}}function En(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function In(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Sn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Tn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,a.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,a.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,a.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,a.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:D}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,a.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new xn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function An(e){const t={};if(e.isDefault())return t;let n;if(e.index_===an?n="$priority":e.index_===kn?n="$value":e.index_===$t?n="$key":((0,a.hu)(e.index_ instanceof bn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,a.Wl)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,a.Wl)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,a.Wl)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,a.Wl)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,a.Wl)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Rn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends st{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=S("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,a.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Nn.getListenId_(e,n),o={};this.listens_[s]=o;const l=An(e._queryParams);this.restRequest_(i+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(i,l,!1,n),(0,a.DV)(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Nn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=An(e._queryParams),n=e._path.toString(),r=new a.BH;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,a.xO)(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=(0,a.cI)(o.responseText)}catch(e){A("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&A("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.rootNode_=mn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return{value:null,children:new Map}}function Dn(e,t,n){if(bt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=dt(t);e.children.has(r)||e.children.set(r,Pn());const i=e.children.get(r);t=pt(t),Dn(i,t,n)}}function Ln(e,t,n){null!==e.value?n(t,e.value):Fn(e,((e,r)=>{const i=new ct(t.toString()+"/"+e);Ln(r,i,n)}))}function Fn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&B(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=1e4,Un=3e4,Bn=3e5;class Wn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Mn(e);const n=Vn+(Un-Vn)*Math.random();J(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;B(e,((e,r)=>{r>0&&(0,a.r3)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),J(this.reportStats_.bind(this),Math.floor(2*Math.random()*Bn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n;function jn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})($n||($n={}));class zn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=$n.ACK_USER_WRITE,this.source=jn()}operationForChild(e){if(bt(this.path)){if(null!=this.affectedTree.value)return(0,a.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new zn(ht(),t,this.revert)}}return(0,a.hu)(dt(this.path)===e,"operationForChild called for unrelated child."),new zn(pt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=$n.OVERWRITE}operationForChild(e){return bt(this.path)?new Gn(this.source,ht(),this.snap.getImmediateChild(e)):new Gn(this.source,pt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=$n.MERGE}operationForChild(e){if(bt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new Gn(this.source,ht(),t.value):new Kn(this.source,ht(),t)}return(0,a.hu)(dt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Kn(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(bt(e))return this.isFullyInitialized()&&!this.filtered_;const t=dt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e,t,n,r){const i=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Tn(t.childName,t.snapshotNode))})),Qn(e,i,"child_removed",t,r,n),Qn(e,i,"child_added",t,r,n),Qn(e,i,"child_moved",s,r,n),Qn(e,i,"child_changed",t,r,n),Qn(e,i,"value",t,r,n),i}function Qn(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>Zn(e,t,n))),o.forEach((n=>{const r=Xn(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Xn(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Zn(e,t,n){if(null==t.childName||null==n.childName)throw(0,a.g5)("Should only compare child_ events.");const r=new Vt(t.childName,t.snapshotNode),i=new Vt(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e,t){return{eventCache:e,serverCache:t}}function tr(e,t,n,r){return er(new Yn(t,n,r),e.serverCache)}function nr(e,t,n,r){return er(e.eventCache,new Yn(t,n,r))}function rr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ir(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr;const or=()=>(sr||(sr=new zt(F)),sr);class ar{constructor(e,t=or()){this.value=e,this.children=t}static fromObject(e){let t=new ar(null);return B(e,((e,n)=>{t=t.set(new ct(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ht(),value:this.value};if(bt(e))return null;{const n=dt(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(pt(e),t);if(null!=i){const e=_t(new ct(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(bt(e))return this;{const t=dt(e),n=this.children.get(t);return null!==n?n.subtree(pt(e)):new ar(null)}}set(e,t){if(bt(e))return new ar(t,this.children);{const n=dt(e),r=this.children.get(n)||new ar(null),i=r.set(pt(e),t),s=this.children.insert(n,i);return new ar(this.value,s)}}remove(e){if(bt(e))return this.children.isEmpty()?new ar(null):new ar(null,this.children);{const t=dt(e),n=this.children.get(t);if(n){const r=n.remove(pt(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new ar(null):new ar(this.value,i)}return this}}get(e){if(bt(e))return this.value;{const t=dt(e),n=this.children.get(t);return n?n.get(pt(e)):null}}setTree(e,t){if(bt(e))return t;{const n=dt(e),r=this.children.get(n)||new ar(null),i=r.setTree(pt(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new ar(this.value,s)}}fold(e){return this.fold_(ht(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(_t(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ht(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(bt(e))return null;{const r=dt(e),i=this.children.get(r);return i?i.findOnPath_(pt(e),_t(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ht(),t)}foreachOnPath_(e,t,n){if(bt(e))return this;{this.value&&n(t,this.value);const r=dt(e),i=this.children.get(r);return i?i.foreachOnPath_(pt(e),_t(t,r),n):new ar(null)}}foreach(e){this.foreach_(ht(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(_t(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.writeTree_=e}static empty(){return new lr(new ar(null))}}function ur(e,t,n){if(bt(t))return new lr(new ar(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=wt(i,t);return s=s.updateChild(o,n),new lr(e.writeTree_.set(i,s))}{const r=new ar(n),i=e.writeTree_.setTree(t,r);return new lr(i)}}}function cr(e,t,n){let r=e;return B(n,((e,n)=>{r=ur(r,_t(t,e),n)})),r}function hr(e,t){if(bt(t))return lr.empty();{const n=e.writeTree_.setTree(t,new ar(null));return new lr(n)}}function dr(e,t){return null!=fr(e,t)}function fr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(wt(n.path,t)):null}function pr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,((e,n)=>{t.push(new Vt(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Vt(e,n.value))})),t}function mr(e,t){if(bt(t))return e;{const n=fr(e,t);return new lr(null!=n?new ar(n):e.writeTree_.subtree(t))}}function vr(e){return e.writeTree_.isEmpty()}function gr(e,t){return yr(ht(),e.writeTree_,t)}function yr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,a.hu)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=yr(_t(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(_t(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e,t){return Wr(t,e)}function br(e,t,n,r,i){(0,a.hu)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=ur(e.visibleWrites,t,n)),e.lastWriteId=r}function wr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function kr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,a.hu)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;while(i&&o>=0){const t=e.allWrites[o];t.visible&&(o>=n&&Cr(t,r.path)?i=!1:Ct(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return Er(e),!0;if(r.snap)e.visibleWrites=hr(e.visibleWrites,r.path);else{const t=r.children;B(t,(t=>{e.visibleWrites=hr(e.visibleWrites,_t(r.path,t))}))}return!0}return!1}function Cr(e,t){if(e.snap)return Ct(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ct(_t(e.path,n),t))return!0;return!1}function Er(e){e.visibleWrites=Sr(e.allWrites,Ir,ht()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ir(e){return e.visible}function Sr(e,t,n){let r=lr.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)Ct(n,e)?(t=wt(n,e),r=ur(r,t,s.snap)):Ct(e,n)&&(t=wt(e,n),r=ur(r,ht(),s.snap.getChild(t)));else{if(!s.children)throw(0,a.g5)("WriteRecord should have .snap or .children");if(Ct(n,e))t=wt(n,e),r=cr(r,t,s.children);else if(Ct(e,n))if(t=wt(e,n),bt(t))r=cr(r,ht(),s.children);else{const e=(0,a.DV)(s.children,dt(t));if(e){const n=e.getChild(pt(t));r=ur(r,ht(),n)}}}}}return r}function Tr(e,t,n,r,i){if(r||i){const s=mr(e.visibleWrites,t);if(!i&&vr(s))return n;if(i||null!=n||dr(s,ht())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ct(e.path,t)||Ct(t,e.path))},o=Sr(e.allWrites,s,t),a=n||mn.EMPTY_NODE;return gr(o,a)}return null}{const r=fr(e.visibleWrites,t);if(null!=r)return r;{const r=mr(e.visibleWrites,t);if(vr(r))return n;if(null!=n||dr(r,ht())){const e=n||mn.EMPTY_NODE;return gr(r,e)}return null}}}function xr(e,t,n){let r=mn.EMPTY_NODE;const i=fr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(an,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=mr(e.visibleWrites,t);return n.forEachChild(an,((e,t)=>{const n=gr(mr(i,new ct(e)),t);r=r.updateImmediateChild(e,n)})),pr(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const n=mr(e.visibleWrites,t);return pr(n).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function Ar(e,t,n,r,i){(0,a.hu)(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=_t(t,n);if(dr(e.visibleWrites,s))return null;{const t=mr(e.visibleWrites,s);return vr(t)?i.getChild(n):gr(t,i.getChild(n))}}function Rr(e,t,n,r){const i=_t(t,n),s=fr(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n)){const t=mr(e.visibleWrites,i);return gr(t,r.getNode().getImmediateChild(n))}return null}function Nr(e,t){return fr(e.visibleWrites,t)}function Or(e,t,n,r,i,s,o){let a;const l=mr(e.visibleWrites,t),u=fr(l,ht());if(null!=u)a=u;else{if(null==n)return[];a=gr(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();while(l&&e.length<i)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}function Pr(){return{visibleWrites:lr.empty(),allWrites:[],lastWriteId:-1}}function Dr(e,t,n,r){return Tr(e.writeTree,e.treePath,t,n,r)}function Lr(e,t){return xr(e.writeTree,e.treePath,t)}function Fr(e,t,n,r){return Ar(e.writeTree,e.treePath,t,n,r)}function Mr(e,t){return Nr(e.writeTree,_t(e.treePath,t))}function Vr(e,t,n,r,i,s){return Or(e.writeTree,e.treePath,t,n,r,i,s)}function Ur(e,t,n){return Rr(e.writeTree,e.treePath,t,n)}function Br(e,t){return Wr(_t(e.treePath,t),e.writeTree)}function Wr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,a.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,a.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Sn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,In(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,En(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,a.g5)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Sn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const qr=new jr;class Hr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Yn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ur(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ir(this.viewCache_),i=Vr(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e,t){(0,a.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,a.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Gr(e,t,n,r,i){const s=new $r;let o,l;if(n.type===$n.OVERWRITE){const u=n;u.source.fromUser?o=Qr(e,t,u.path,u.snap,r,i,s):((0,a.hu)(u.source.fromServer,"Unknown source."),l=u.source.tagged||t.serverCache.isFiltered()&&!bt(u.path),o=Jr(e,t,u.path,u.snap,r,i,l,s))}else if(n.type===$n.MERGE){const u=n;u.source.fromUser?o=Zr(e,t,u.path,u.children,r,i,s):((0,a.hu)(u.source.fromServer,"Unknown source."),l=u.source.tagged||t.serverCache.isFiltered(),o=ti(e,t,u.path,u.children,r,i,l,s))}else if(n.type===$n.ACK_USER_WRITE){const a=n;o=a.revert?ii(e,t,a.path,r,i,s):ni(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==$n.LISTEN_COMPLETE)throw(0,a.g5)("Unknown operation type: "+n.type);o=ri(e,t,n.path,r,s)}const u=s.getChanges();return Kr(t,o,u),{viewCache:o,changes:u}}function Kr(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=rr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Cn(rr(t)))}}function Yr(e,t,n,r,i,s){const o=t.eventCache;if(null!=Mr(r,n))return t;{let l,u;if(bt(n))if((0,a.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ir(t),i=n instanceof mn?n:mn.EMPTY_NODE,o=Lr(r,i);l=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=Dr(r,ir(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=dt(n);if(".priority"===c){(0,a.hu)(1===ft(n),"Can't have a priority with additional path components");const i=o.getNode();u=t.serverCache.getNode();const s=Fr(r,n,i,u);l=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const a=pt(n);let h;if(o.isCompleteForChild(c)){u=t.serverCache.getNode();const e=Fr(r,n,o.getNode(),u);h=null!=e?o.getNode().getImmediateChild(c).updateChild(a,e):o.getNode().getImmediateChild(c)}else h=Ur(r,c,t.serverCache);l=null!=h?e.filter.updateChild(o.getNode(),c,h,a,i,s):o.getNode()}}return tr(t,l,o.isFullyInitialized()||bt(n),e.filter.filtersNodes())}}function Jr(e,t,n,r,i,s,o,a){const l=t.serverCache;let u;const c=o?e.filter:e.filter.getIndexedFilter();if(bt(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),e,null)}else{const e=dt(n);if(!l.isCompleteForPath(n)&&ft(n)>1)return t;const i=pt(n),s=l.getNode().getImmediateChild(e),o=s.updateChild(i,r);u=".priority"===e?c.updatePriority(l.getNode(),o):c.updateChild(l.getNode(),e,o,i,qr,null)}const h=nr(t,u,l.isFullyInitialized()||bt(n),c.filtersNodes()),d=new Hr(i,h,s);return Yr(e,h,n,i,d,a)}function Qr(e,t,n,r,i,s,o){const a=t.eventCache;let l,u;const c=new Hr(i,t,s);if(bt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=tr(t,u,!0,e.filter.filtersNodes());else{const i=dt(n);if(".priority"===i)u=e.filter.updatePriority(t.eventCache.getNode(),r),l=tr(t,u,a.isFullyInitialized(),a.isFiltered());else{const s=pt(n),u=a.getNode().getImmediateChild(i);let h;if(bt(s))h=r;else{const e=c.getCompleteChild(i);h=null!=e?".priority"===mt(s)&&e.getChild(yt(s)).isEmpty()?e:e.updateChild(s,r):mn.EMPTY_NODE}if(u.equals(h))l=t;else{const n=e.filter.updateChild(a.getNode(),i,h,s,c,o);l=tr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Xr(e,t){return e.eventCache.isCompleteForChild(t)}function Zr(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const u=_t(n,r);Xr(t,dt(u))&&(a=Qr(e,a,u,l,i,s,o))})),r.foreach(((r,l)=>{const u=_t(n,r);Xr(t,dt(u))||(a=Qr(e,a,u,l,i,s,o))})),a}function ei(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ti(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,u=t;l=bt(n)?r:new ar(null).setTree(n,r);const c=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(c.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),c=ei(e,l,r);u=Jr(e,u,new ct(n),c,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!c.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),c=ei(e,l,r);u=Jr(e,u,new ct(n),c,i,s,o,a)}})),u}function ni(e,t,n,r,i,s,o){if(null!=Mr(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(bt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Jr(e,t,n,l.getNode().getChild(n),i,s,a,o);if(bt(n)){let r=new ar(null);return l.getNode().forEachChild($t,((e,t)=>{r=r.set(new ct(e),t)})),ti(e,t,n,r,i,s,a,o)}return t}{let u=new ar(null);return r.foreach(((e,t)=>{const r=_t(n,e);l.isCompleteForPath(r)&&(u=u.set(e,l.getNode().getChild(r)))})),ti(e,t,n,u,i,s,a,o)}}function ri(e,t,n,r,i){const s=t.serverCache,o=nr(t,s.getNode(),s.isFullyInitialized()||bt(n),s.isFiltered());return Yr(e,o,n,r,qr,i)}function ii(e,t,n,r,i,s){let o;if(null!=Mr(r,n))return t;{const l=new Hr(r,t,i),u=t.eventCache.getNode();let c;if(bt(n)||".priority"===dt(n)){let n;if(t.serverCache.isFullyInitialized())n=Dr(r,ir(t));else{const e=t.serverCache.getNode();(0,a.hu)(e instanceof mn,"serverChildren would be complete if leaf node"),n=Lr(r,e)}c=e.filter.updateFullNode(u,n,s)}else{const i=dt(n);let a=Ur(r,i,t.serverCache);null==a&&t.serverCache.isCompleteForChild(i)&&(a=u.getImmediateChild(i)),c=null!=a?e.filter.updateChild(u,i,a,pt(n),l,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(u,i,mn.EMPTY_NODE,pt(n),l,s):u,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Dr(r,ir(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Mr(r,ht()),tr(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e,t){const n=ir(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!bt(t)&&!n.getImmediateChild(dt(t)).isEmpty())?n.getChild(t):null}function oi(e,t,n,r){t.type===$n.MERGE&&null!==t.source.queryId&&((0,a.hu)(ir(e.viewCache_),"We should always have a full cache before handling merges"),(0,a.hu)(rr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=Gr(e.processor_,i,t,n,r);return zr(e.processor_,s.viewCache),(0,a.hu)(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,ai(e,s.changes,s.viewCache.eventCache.getNode(),null)}function ai(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return Jn(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li,ui;function ci(e){(0,a.hu)(!li,"__referenceConstructor has already been defined"),li=e}function hi(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return(0,a.hu)(null!=s,"SyncTree gave us an op for an invalid query."),oi(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(oi(s,t,n,r));return i}}function di(e,t){let n=null;for(const r of e.views.values())n=n||si(r,t);return n}function fi(e){(0,a.hu)(!ui,"__referenceConstructor has already been defined"),ui=e}class pi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ar(null),this.pendingWriteTree_=Pr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mi(e,t,n,r,i){return br(e.pendingWriteTree_,t,n,r,i),i?ki(e,new Gn(jn(),t,n)):[]}function vi(e,t,n=!1){const r=wr(e.pendingWriteTree_,t),i=kr(e.pendingWriteTree_,t);if(i){let t=new ar(null);return null!=r.snap?t=t.set(ht(),!0):B(r.children,(e=>{t=t.set(new ct(e),!0)})),ki(e,new zn(r.path,t,n))}return[]}function gi(e,t,n){return ki(e,new Gn(qn(),t,n))}function yi(e,t,n){const r=ar.fromObject(n);return ki(e,new Kn(qn(),t,r))}function _i(e,t,n,r){const i=Ii(e,r);if(null!=i){const r=Si(i),s=r.path,o=r.queryId,a=wt(s,t),l=new Gn(Hn(o),a,n);return Ti(e,s,l)}return[]}function bi(e,t,n,r){const i=Ii(e,r);if(i){const r=Si(i),s=r.path,o=r.queryId,a=wt(s,t),l=ar.fromObject(n),u=new Kn(Hn(o),a,l);return Ti(e,s,u)}return[]}function wi(e,t,n){const r=!0,i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=wt(e,t),i=di(n,r);if(i)return i}));return Tr(i,t,s,n,r)}function ki(e,t){return Ci(t,e.syncPointTree_,null,_r(e.pendingWriteTree_,ht()))}function Ci(e,t,n,r){if(bt(e.path))return Ei(e,t,n,r);{const i=t.get(ht());null==n&&null!=i&&(n=di(i,ht()));let s=[];const o=dt(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Br(r,o);s=s.concat(Ci(a,l,e,t))}return i&&(s=s.concat(hi(i,e,r,n))),s}}function Ei(e,t,n,r){const i=t.get(ht());null==n&&null!=i&&(n=di(i,ht()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Br(r,t),l=e.operationForChild(t);l&&(s=s.concat(Ei(l,i,o,a)))})),i&&(s=s.concat(hi(i,e,r,n))),s}function Ii(e,t){return e.tagToQueryMap.get(t)}function Si(e){const t=e.indexOf("$");return(0,a.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function Ti(e,t,n){const r=e.syncPointTree_.get(t);(0,a.hu)(r,"Missing sync point for query tag that we're tracking");const i=_r(e.pendingWriteTree_,t);return hi(r,n,i,null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new xi(t)}node(){return this.node_}}class Ai{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_t(this.path_,e);return new Ai(this.syncTree_,t)}node(){return wi(this.syncTree_,this.path_)}}const Ri=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Ni=function(e,t,n){return e&&"object"===typeof e?((0,a.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Oi(e[".sv"],t,n):"object"===typeof e[".sv"]?Pi(e[".sv"],t):void(0,a.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Oi=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,a.hu)(!1,"Unexpected server value: "+e)}},Pi=function(e,t,n){e.hasOwnProperty("increment")||(0,a.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,a.hu)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,a.hu)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,o=s.getValue();return"number"!==typeof o?r:o+r},Di=function(e,t,n,r){return Fi(t,new Ai(n,e),r)},Li=function(e,t,n){return Fi(e,new xi(t),n)};function Fi(e,t,n){const r=e.getPriority().val(),i=Ni(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Ni(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new nn(s,_n(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new nn(i))),r.forEachChild(an,((e,r)=>{const i=Fi(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Vi(e,t){let n=t instanceof ct?t:new ct(t),r=e,i=dt(n);while(null!==i){const e=(0,a.DV)(r.node.children,i)||{children:{},childCount:0};r=new Mi(i,r,e),n=pt(n),i=dt(n)}return r}function Ui(e){return e.node.value}function Bi(e,t){e.node.value=t,Gi(e)}function Wi(e){return e.node.childCount>0}function $i(e){return void 0===Ui(e)&&!Wi(e)}function ji(e,t){B(e.node.children,((n,r)=>{t(new Mi(n,e,r))}))}function qi(e,t,n,r){n&&!r&&t(e),ji(e,(e=>{qi(e,t,!0,r)})),n&&r&&t(e)}function Hi(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function zi(e){return new ct(null===e.parent?e.name:zi(e.parent)+"/"+e.name)}function Gi(e){null!==e.parent&&Ki(e.parent,e.name,e)}function Ki(e,t,n){const r=$i(n),i=(0,a.r3)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Gi(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Gi(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=/[\[\].#$\/\u0000-\u001F\u007F]/,Ji=/[\[\].#$\u0000-\u001F\u007F]/,Qi=10485760,Xi=function(e){return"string"===typeof e&&0!==e.length&&!Yi.test(e)},Zi=function(e){return"string"===typeof e&&0!==e.length&&!Ji.test(e)},es=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Zi(e)},ts=function(e,t,n){const r=n instanceof ct?new Et(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+xt(r));if("function"===typeof t)throw new Error(e+"contains a function "+xt(r)+" with contents = "+t.toString());if(N(t))throw new Error(e+"contains "+t.toString()+" "+xt(r));if("string"===typeof t&&t.length>Qi/3&&(0,a.ug)(t)>Qi)throw new Error(e+"contains a string greater than "+Qi+" utf8 bytes "+xt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(B(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Xi(t)))throw new Error(e+" contains an invalid key ("+t+") "+xt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');It(r,t),ts(e,s,r),St(r)})),n&&i)throw new Error(e+' contains ".value" child '+xt(r)+" in addition to actual children.")}},ns=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Xi(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!es(n))throw new Error((0,a.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function is(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||kt(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function ss(e,t,n){is(e,n),os(e,(e=>Ct(e,t)||Ct(t,e)))}function os(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(as(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function as(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();k&&I("event: "+n.toString()),K(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="repo_interrupt",us=25;class cs{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pn(),this.transactionQueueTree_=new Mi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hs(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||Y())e.server_=new Nn(e.repoInfo_,((t,n,r,i)=>{ps(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ms(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,a.Wl)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Mt(e.repoInfo_,t,((t,n,r,i)=>{ps(e,t,n,r,i)}),(t=>{ms(e,t)}),(t=>{vs(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ye(e.repoInfo_,(()=>new Wn(e.stats_,e.server_))),e.infoData_=new On,e.infoSyncTree_=new pi({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=gi(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),gs(e,"connected",!1),e.serverSyncTree_=new pi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);ss(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function ds(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function fs(e){return Ri({timestamp:ds(e)})}function ps(e,t,n,r,i){e.dataUpdateCount++;const s=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=(0,a.UI)(n,(e=>_n(e)));o=bi(e.serverSyncTree_,s,t,i)}else{const t=_n(n);o=_i(e.serverSyncTree_,s,t,i)}else if(r){const t=(0,a.UI)(n,(e=>_n(e)));o=yi(e.serverSyncTree_,s,t)}else{const t=_n(n);o=gi(e.serverSyncTree_,s,t)}let l=s;o.length>0&&(l=Is(e,s)),ss(e.eventQueue_,l,o)}function ms(e,t){gs(e,"connected",t),!1===t&&_s(e)}function vs(e,t){B(t,((t,n)=>{gs(e,t,n)}))}function gs(e,t,n){const r=new ct("/.info/"+t),i=_n(n);e.infoData_.updateSnapshot(r,i);const s=gi(e.infoSyncTree_,r,i);ss(e.eventQueue_,r,s)}function ys(e){return e.nextWriteId_++}function _s(e){ws(e,"onDisconnectEvents");const t=fs(e),n=Pn();Ln(e.onDisconnect_,ht(),((r,i)=>{const s=Di(r,i,e.serverSyncTree_,t);Dn(n,r,s)}));let r=[];Ln(n,ht(),((t,n)=>{r=r.concat(gi(e.serverSyncTree_,t,n));const i=Ns(e,t);Is(e,i)})),e.onDisconnect_=Pn(),ss(e.eventQueue_,ht(),r)}function bs(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ls)}function ws(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),I(n,...t)}function ks(e,t,n){return wi(e.serverSyncTree_,t,n)||mn.EMPTY_NODE}function Cs(e,t=e.transactionQueueTree_){if(t||Rs(e,t),Ui(t)){const n=xs(e,t);(0,a.hu)(n.length>0,"Sending zero length transaction queue");const r=n.every((e=>0===e.status));r&&Es(e,zi(t),n)}else Wi(t)&&ji(t,(t=>{Cs(e,t)}))}function Es(e,t,n){const r=n.map((e=>e.currentWriteId)),i=ks(e,t,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const e=n[c];(0,a.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=wt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const l=s.val(!0),u=t;e.server_.put(u.toString(),l,(r=>{ws(e,"transaction put response",{path:u.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(vi(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Rs(e,Vi(e.transactionQueueTree_,t)),Cs(e,e.transactionQueueTree_),ss(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)K(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{A("transaction at "+u.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Is(e,t)}}),o)}function Is(e,t){const n=Ts(e,t),r=zi(n),i=xs(e,n);return Ss(e,i,r),r}function Ss(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),o=s.map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const s=t[l],u=wt(n,s.path);let c,h=!1;if((0,a.hu)(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,c=s.abortReason,i=i.concat(vi(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=us)h=!0,c="maxretry",i=i.concat(vi(e.serverSyncTree_,s.currentWriteId,!0));else{const n=ks(e,s.path,o);s.currentInputSnapshot=n;const r=t[l].update(n.val());if(void 0!==r){ts("transaction failed: Data returned ",r,s.path);let t=_n(r);const l="object"===typeof r&&null!=r&&(0,a.r3)(r,".priority");l||(t=t.updatePriority(n.getPriority()));const u=s.currentWriteId,c=fs(e),h=Li(t,n,c);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=ys(e),o.splice(o.indexOf(u),1),i=i.concat(mi(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(vi(e.serverSyncTree_,u,!0))}else h=!0,c="nodata",i=i.concat(vi(e.serverSyncTree_,s.currentWriteId,!0))}ss(e.eventQueue_,n,i),i=[],h&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===c?r.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):r.push((()=>t[l].onComplete(new Error(c),!1,null)))))}Rs(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)K(r[a]);Cs(e,e.transactionQueueTree_)}function Ts(e,t){let n,r=e.transactionQueueTree_;n=dt(t);while(null!==n&&void 0===Ui(r))r=Vi(r,n),t=pt(t),n=dt(t);return r}function xs(e,t){const n=[];return As(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function As(e,t,n){const r=Ui(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ji(t,(t=>{As(e,t,n)}))}function Rs(e,t){const n=Ui(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Bi(t,n.length>0?n:void 0)}ji(t,(t=>{Rs(e,t)}))}function Ns(e,t){const n=zi(Ts(e,t)),r=Vi(e.transactionQueueTree_,t);return Hi(r,(t=>{Os(e,t)})),Os(e,r),qi(r,(t=>{Os(e,t)})),n}function Os(e,t){const n=Ui(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,a.hu)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,a.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(vi(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Bi(t,void 0):n.length=s+1,ss(e.eventQueue_,zi(t),i);for(let e=0;e<r.length;e++)K(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function Ds(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):A(`Invalid query segment '${n}' in query '${e}'`)}return t}const Ls=function(e,t){const n=Fs(e),r=n.namespace;"firebase.com"===n.domain&&x(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||x("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||R();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new he(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ct(n.pathString)}},Fs=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"===typeof e){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");-1===c&&(c=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(c,h)),c<h&&(i=Ps(e.substring(c,h)));const d=Ds(e.substring(Math.min(e.length,h)));u=t.indexOf(":"),u>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(u+1),10)):u=t.length;const f=t.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d["ns"])}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}},Ms="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return bt(this._path)?null:mt(this._path)}get ref(){return new Us(this._repo,this._path)}get _queryIdentifier(){const e=Rn(this._queryParams),t=V(e);return"{}"===t?"default":t}get _queryObject(){return Rn(this._queryParams)}isEqual(e){if(e=(0,a.m9)(e),!(e instanceof Vs))return!1;const t=this._repo===e._repo,n=kt(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+vt(this._path)}}class Us extends Vs{constructor(e,t){super(e,t,new xn,!1)}get parent(){const e=yt(this._path);return null===e?null:new Us(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}ci(Us),fi(Us);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bs="FIREBASE_DATABASE_EMULATOR_HOST",Ws={};let $s=!1;function js(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||x("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),I("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Ls(s,i),u=l.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/altren-character/"}[Bs]),a?(o=!0,s=`http://${a}?ns=${u.namespace}`,l=Ls(s,i),u=l.repoInfo):o=!l.repoInfo.secure;const c=i&&o?new Z(Z.OWNER):new X(e.name,e.options,t);ns("Invalid Firebase Database URL",l),bt(l.path)||x("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Hs(u,e,c,new Q(e.name,n));return new zs(h,e)}function qs(e,t){const n=Ws[t];n&&n[e.key]===e||x(`Database ${t}(${e.repoInfo_}) has already been deleted.`),bs(e),delete n[e.key]}function Hs(e,t,n,r){let i=Ws[t.name];i||(i={},Ws[t.name]=i);let s=i[e.toURLString()];return s&&x("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new cs(e,$s,n,r),i[e.toURLString()]=s,s}class zs{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hs(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Us(this._repo,ht())),this._rootInternal}_delete(){return null!==this._rootInternal&&(qs(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&x("Cannot call "+e+" on a deleted database.")}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gs(e){d(s.Jn),(0,s.Xd)(new o.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return js(n,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(u,c,e),(0,s.KN)(u,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Mt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Gs();n(36),n(9125),n(6699);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ks=new Map,Ys={activated:!1,tokenObservers:[]},Js={initialized:!1,enabled:!1};function Qs(e){return Ks.get(e)||Object.assign({},Ys)}function Xs(){return Js}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="https://content-firebaseappcheck.googleapis.com/v1",eo="exchangeDebugToken",to={OFFSET_DURATION:3e5,RETRIAL_MIN_WAIT:3e4,RETRIAL_MAX_WAIT:96e4};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(e,t,n,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch((()=>{}))}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new a.BH,await ro(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new a.BH,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch((()=>{}))}catch(T){this.retryPolicy(T)?this.process(!1).catch((()=>{})):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}function ro(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",["throttled"]:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},so=new a.LL("appCheck","AppCheck",io);function oo(e){if(!Qs(e).activated)throw so.create("use-before-activation",{appName:e.name})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ao({url:e,body:t},n){const r={"Content-Type":"application/json"},i=n.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&(r["X-Firebase-Client"]=e)}const s={method:"POST",body:JSON.stringify(t),headers:r};let o,a;try{o=await fetch(e,s)}catch(h){throw so.create("fetch-network-error",{originalErrorMessage:null===h||void 0===h?void 0:h.message})}if(200!==o.status)throw so.create("fetch-status-error",{httpStatus:o.status});try{a=await o.json()}catch(h){throw so.create("fetch-parse-error",{originalErrorMessage:null===h||void 0===h?void 0:h.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw so.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const u=1e3*Number(l[1]),c=Date.now();return{token:a.token,expireTimeMillis:c+u,issuedAtTimeMillis:c}}function lo(e,t){const{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${Zs}/projects/${n}/apps/${r}:${eo}?key=${i}`,body:{debug_token:t}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="firebase-app-check-database",co=1,ho="firebase-app-check-store";let fo=null;function po(){return fo||(fo=new Promise(((e,t)=>{try{const n=indexedDB.open(uo,co);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{var n;t(so.create("storage-open",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=e=>{const t=e.target.result;switch(e.oldVersion){case 0:t.createObjectStore(ho,{keyPath:"compositeKey"})}}}catch(n){t(so.create("storage-open",{originalErrorMessage:null===n||void 0===n?void 0:n.message}))}})),fo)}function mo(e,t){return vo(go(e),t)}async function vo(e,t){const n=await po(),r=n.transaction(ho,"readwrite"),i=r.objectStore(ho),s=i.put({compositeKey:e,value:t});return new Promise(((e,t)=>{s.onsuccess=t=>{e()},r.onerror=e=>{var n;t(so.create("storage-set",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}}))}function go(e){return`${e.options.appId}-${e.name}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new l.Yd("@firebase/app-check");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(e,t){return(0,a.hl)()?mo(e,t).catch((e=>{yo.warn(`Failed to write token to IndexedDB. Error: ${e}`)})):Promise.resolve()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bo(){const e=Xs();return e.enabled}async function wo(){const e=Xs();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ko={error:"UNKNOWN_ERROR"};function Co(e){return a.US.encodeString(JSON.stringify(e),!1)}async function Eo(e,t=!1){const n=e.app;oo(n);const r=Qs(n);let i,s=r.token;if(s&&!Ro(s)&&(r.token=void 0,s=void 0),!s){const e=await r.cachedTokenPromise;e&&(Ro(e)?s=e:await _o(n,void 0))}if(!t&&s&&Ro(s))return{token:s.token};let o,a=!1;if(bo()){r.exchangeTokenPromise||(r.exchangeTokenPromise=ao(lo(n,await wo()),e.heartbeatServiceProvider).finally((()=>{r.exchangeTokenPromise=void 0})),a=!0);const t=await r.exchangeTokenPromise;return await _o(n,t),r.token=t,{token:t.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally((()=>{r.exchangeTokenPromise=void 0})),a=!0),s=await Qs(n).exchangeTokenPromise}catch(l){"appCheck/throttled"===l.code?yo.warn(l.message):yo.error(l),i=l}return s?i?o=Ro(s)?{token:s.token,internalError:i}:No(i):(o={token:s.token},r.token=s,await _o(n,s)):o=No(i),a&&Ao(n,o),o}function Io(e,t,n,r){const{app:i}=e,s=Qs(i),o={next:n,error:r,type:t};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Ro(s.token)){const t=s.token;Promise.resolve().then((()=>{n({token:t.token}),To(e)})).catch((()=>{}))}s.cachedTokenPromise.then((()=>To(e)))}function So(e,t){const n=Qs(e),r=n.tokenObservers.filter((e=>e.next!==t));0===r.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function To(e){const{app:t}=e,n=Qs(t);let r=n.tokenRefresher;r||(r=xo(e),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function xo(e){const{app:t}=e;return new no((async()=>{const n=Qs(t);let r;if(r=n.token?await Eo(e,!0):await Eo(e),r.error)throw r.error;if(r.internalError)throw r.internalError}),(()=>!0),(()=>{const e=Qs(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const n=e.token.expireTimeMillis-3e5;return t=Math.min(t,n),Math.max(0,t-Date.now())}return 0}),to.RETRIAL_MIN_WAIT,to.RETRIAL_MAX_WAIT)}function Ao(e,t){const n=Qs(e).tokenObservers;for(const i of n)try{"EXTERNAL"===i.type&&null!=t.error?i.error(t.error):i.next(t)}catch(r){}}function Ro(e){return e.expireTimeMillis-Date.now()>0}function No(e){return{token:Co(ko),error:e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Qs(this.app);for(const t of e)So(this.app,t.next);return Promise.resolve()}}function Po(e,t){return new Oo(e,t)}function Do(e){return{getToken:t=>Eo(e,t),addTokenListener:t=>Io(e,"INTERNAL",t),removeTokenListener:t=>So(e.app,t)}}const Lo="@firebase/app-check",Fo="0.6.0";const Mo="app-check",Vo="app-check-internal";function Uo(){(0,s.Xd)(new o.wA(Mo,(e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return Po(t,n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider(Vo).initialize()}))),(0,s.Xd)(new o.wA(Vo,(e=>{const t=e.getProvider("app-check").getImmediate();return Do(t)}),"PUBLIC").setInstantiationMode("EXPLICIT")),(0,s.KN)(Lo,Fo)}Uo();n(2801),n(8675),n(3462),n(7380),n(1118);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bo="firebasestorage.googleapis.com",Wo="storageBucket",$o=12e4,jo=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qo extends a.ZR{constructor(e,t,n=0){super(Ho(e),`Firebase Storage: ${t} (${Ho(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qo.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ho(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ho(e){return"storage/"+e}function zo(){const e="An unknown error occurred, please check the error payload for server response.";return new qo("unknown",e)}function Go(){return new qo("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Ko(){return new qo("canceled","User canceled the upload/download.")}function Yo(e){return new qo("invalid-url","Invalid URL '"+e+"'.")}function Jo(e){return new qo("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function Qo(e){return new qo("invalid-argument",e)}function Xo(){return new qo("app-deleted","The Firebase app was deleted.")}function Zo(e){return new qo("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ea{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=ea.makeFromUrl(e,t)}catch(r){return new ea(e,"")}if(""===n.path)return n;throw Jo(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+r+s,"i"),a={bucket:1,path:3};function l(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",c=t.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${c}/${u}/b/${r}/o${h}`,"i"),f={bucket:1,path:3},p=t===Bo?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",v=new RegExp(`^https?://${p}/${r}/${m}`,"i"),g={bucket:1,path:2},y=[{regex:o,indices:a,postModify:i},{regex:d,indices:f,postModify:l},{regex:v,indices:g,postModify:l}];for(let _=0;_<y.length;_++){const t=y[_],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new ea(e,i),t.postModify(n);break}}if(null==n)throw Yo(e);return n}}class ta{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return 2===a}let u=!1;function c(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,l())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void c.call(null,e,...t);const n=l()||o;if(n)return d(),void c.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function ra(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(e){return void 0!==e}function sa(e,t,n,r){if(r<t)throw Qo(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Qo(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var aa;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function la(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(aa||(aa={}));class ua{constructor(e,t,n,r,i,s,o,a,l,u,c,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new ca(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===aa.NO_ERROR,i=n.getStatus();if((!t||la(i,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===aa.ABORT;return void e(!1,new ca(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new ca(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());ia(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=zo();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?Xo():Ko();r(e)}else{const e=Go();r(e)}};this.canceled_?t(!1,new ca(!1,null,!0)):this.backoffId_=na(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&ra(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class ca{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function ha(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function da(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function fa(e,t){t&&(e["X-Firebase-GMPID"]=t)}function pa(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function ma(e,t,n,r,i,s,o=!0){const a=oa(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return fa(u,t),ha(u,n),da(u,s),pa(u,r),new ua(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function va(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function ga(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ya{constructor(e,t){this._service=e,this._location=t instanceof ea?t:ea.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ya(e,t)}get root(){const e=new ea(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ga(this._location.path)}get storage(){return this._service}get parent(){const e=va(this._location.path);if(null===e)return null;const t=new ea(this._location.bucket,e);return new ya(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw Zo(e)}}function _a(e,t){const n=null===t||void 0===t?void 0:t[Wo];return null==n?null:ea.makeFromBucketSpec(n,e)}class ba{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Bo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$o,this._maxUploadRetryTime=jo,this._requests=new Set,this._bucket=null!=r?ea.makeFromBucketSpec(r,this._host):_a(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=ea.makeFromBucketSpec(this._url,e):this._bucket=_a(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){sa("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){sa("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ya(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new ta(Xo());{const s=ma(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const wa="@firebase/storage",ka="0.10.0",Ca="storage";function Ea(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new ba(n,r,i,t,s.Jn)}function Ia(){(0,s.Xd)(new o.wA(Ca,Ea,"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(wa,ka,""),(0,s.KN)(wa,ka,"esm2017")}Ia();n(7795);Object.prototype;function Sa(e){return(t,n)=>{const s=(0,r.g)(t,n).run((()=>(0,i.iH)(e)));r.a.set(t,s),(0,r.s)(s,t)}}Symbol("app-check-token");function Ta(e,{firebaseApp:t,modules:n=[]}){e.provide(r._,t);for(const r of n)e.use(r.bind(null,t))}},8878:function(e,t,n){"use strict";n.d(t,{_:function(){return a},a:function(){return h},c:function(){return p},g:function(){return c},s:function(){return m}});n(1703);var r=n(3396),i=n(4870),s=n(9125),o=n(7795);const a=Symbol("firebaseApp");function l(e){return(0,r.FN)()&&(0,r.f3)(a,null)||(0,o.Mq)(e)}const u=new WeakMap;function c(e,t){if(!u.has(e)){const n=(0,i.B)(!0);u.set(e,n);const{unmount:r}=t;t.unmount=()=>{r.call(t),n.stop(),u.delete(e)}}return u.get(e)}const h=new WeakMap;const d=new WeakMap;function f(e){const t=l(e);if(!d.has(t)){let e;const n=new Promise((t=>{e=t})),r=[n,n=>{d.set(t,n),e(n.value)}];d.set(t,r)}return d.get(t)}function p(e){const t=f(e);return Array.isArray(t)?t[0]:Promise.resolve(t.value)}function m(e,t){const n=(0,s.v0)(t);(0,s.MX)(n,(t=>{const n=f();e.value=t,Array.isArray(n)&&n[1](e)}))}},8796:function(e,t,n){"use strict";n.d(t,{L:function(){return c}});n(6699);var r=n(3396),i=n(7471),s=n(7396),o=n(8717),a=n(4870),l=n(1107),u=n(9888);const c=(0,l.a)({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...(0,i.xL)(),...(0,s.o8)(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const l=(0,a.iH)(),c=(0,o.z)(e,"modelValue"),h=(0,r.Fl)((()=>{var e,t,n,r;const i=null!=(e=null==(t=l.value)?void 0:t.contentHeight)?e:0,s=null!=(n=null==(r=l.value)?void 0:r.extensionHeight)?n:0;return i+s})),{layoutItemStyles:d}=(0,s.eW)({id:e.name,order:(0,r.Fl)((()=>parseInt(e.order,10))),position:(0,a.Vh)(e,"location"),layoutSize:h,elementSize:h,active:c,absolute:(0,a.Vh)(e,"absolute")});return(0,u.L)((()=>{const[t]=(0,i.$d)(e);return(0,r.Wm)(i.iv,(0,r.dG)({ref:l,class:["v-app-bar",{"v-app-bar--bottom":"bottom"===e.location}],style:{...d.value,height:void 0}},t),n)})),{}}})},9156:function(e,t,n){"use strict";n.d(t,{g:function(){return l}});var r=n(3396),i=n(870),s=n(4960),o=n(1107),a=n(9888);const l=(0,o.a)({name:"VAppBarNavIcon",props:{icon:{type:s.lE,default:"$menu"}},setup(e,t){let{slots:n}=t;return(0,a.L)((()=>(0,r.Wm)(i.T,{class:"v-app-bar-nav-icon",icon:e.icon},n))),{}}})},1556:function(e,t,n){"use strict";n.d(t,{o:function(){return a}});var r=n(3396),i=n(5030),s=n(1107),o=n(9888);const a=(0,s.a)({name:"VAppBarTitle",props:{...i.q.props},setup(e,t){let{slots:n}=t;return(0,o.L)((()=>(0,r.Wm)(i.q,{class:"v-app-bar-title"},n))),{}}})},7718:function(e,t,n){"use strict";n.d(t,{q:function(){return u}});var r=n(3396),i=n(7396),s=n(7041),o=n(9903),a=n(1107),l=n(9888);const u=(0,a.a)({name:"VApp",props:{...(0,i.GB)({fullHeight:!0}),...(0,s.x$)()},setup(e,t){let{slots:n}=t;const a=(0,s.ER)(e),{layoutClasses:u,layoutStyles:c,getLayoutItem:h,items:d,layoutRef:f}=(0,i.te)(e),{rtlClasses:p}=(0,o.Vw)();return(0,l.L)((()=>{var e;return(0,r.Wm)("div",{ref:f,class:["v-application",a.themeClasses.value,u.value,p.value],style:c.value},[(0,r.Wm)("div",{class:"v-application__wrap"},[null==(e=n.default)?void 0:e.call(n)])])})),{getLayoutItem:h,items:d,theme:a}}})},652:function(e,t,n){"use strict";n.d(t,{V:function(){return g},O:function(){return v}});var r=n(3396),i=n(3289),s=n(8694),o=n(9694),a=n(4231),l=n(9374),u=n(1138),c=n(2370),h=n(4960),d=n(3766),f=n(1107),p=n(9888),m=n(4870);const v=(0,d.U)({color:String,start:Boolean,end:Boolean,icon:h.lE,image:String,...(0,o.f)(),...(0,a.I)(),...(0,l.Z)(),...(0,u.Q)()}),g=(0,f.a)({name:"VAvatar",props:v(),setup(e,t){let{slots:n}=t;const{backgroundColorClasses:u,backgroundColorStyles:h}=(0,c.Y5)((0,m.Vh)(e,"color")),{densityClasses:d}=(0,o.t)(e),{roundedClasses:f}=(0,a.b)(e),{sizeClasses:v,sizeStyles:g}=(0,l.t)(e);return(0,p.L)((()=>{var t;return(0,r.Wm)(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},u.value,d.value,f.value,v.value],style:[h.value,g.value]},{default:()=>[e.image?(0,r.Wm)(s.f,{src:e.image,alt:""},null):e.icon?(0,r.Wm)(i.t,{icon:e.icon},null):null==(t=n.default)?void 0:t.call(n)]})})),{}}})},870:function(e,t,n){"use strict";n.d(t,{T:function(){return D}});var r=n(3396),i=n(2718),s=n(9694),o=n(2465),a=n(4231),l=n(1138),u=n(7041),c=n(5221),h=n(8434),d=n(1107),f=n(9888),p=n(4870);const m=(0,d.a)({name:"VBtnGroup",props:{divided:Boolean,...(0,i.m)(),...(0,s.f)(),...(0,o.c)(),...(0,a.I)(),...(0,l.Q)(),...(0,u.x$)(),...(0,c.bk)()},setup(e,t){let{slots:n}=t;const{themeClasses:l}=(0,u.ER)(e),{densityClasses:c}=(0,s.t)(e),{borderClasses:d}=(0,i.P)(e),{elevationClasses:m}=(0,o.Y)(e),{roundedClasses:v}=(0,a.b)(e);(0,h.AF)({VBtn:{height:"auto",color:(0,p.Vh)(e,"color"),density:(0,p.Vh)(e,"density"),flat:!0,variant:(0,p.Vh)(e,"variant")}}),(0,f.L)((()=>(0,r.Wm)(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},l.value,d.value,c.value,m.value,v.value]},n)))}});var v=n(1970);const g=Symbol.for("vuetify:v-btn-toggle");(0,d.e)()({name:"VBtnToggle",props:(0,v.k4)({selectedClass:"v-btn--selected"}),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:i,next:s,prev:o,select:a,selected:l}=(0,v._v)(e,g);return(0,f.L)((()=>{var e;return(0,r.Wm)(m,{class:"v-btn-toggle"},{default:()=>[null==(e=n.default)?void 0:e.call(n,{isSelected:i,next:s,prev:o,select:a,selected:l})]})})),{next:s,prev:o,select:a}}});var y=n(836),_=n(3289),b=n(9374),w=n(1477),k=n(3712),C=n(2370),E=n(131);const I=(0,d.a)({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...(0,b.Z)(),...(0,l.Q)({tag:"div"}),...(0,u.x$)()},setup(e,t){let{slots:n}=t;const i=20,s=2*Math.PI*i,o=(0,p.iH)(),{themeClasses:a}=(0,u.ER)(e),{sizeClasses:l,sizeStyles:c}=(0,b.t)(e),{textColorClasses:h,textColorStyles:d}=(0,C.rY)((0,p.Vh)(e,"color")),{textColorClasses:m,textColorStyles:v}=(0,C.rY)((0,p.Vh)(e,"bgColor")),{intersectionRef:g,isIntersecting:y}=(0,w.S)(),{resizeRef:_,contentRect:I}=(0,k.y)(),S=(0,r.Fl)((()=>Math.max(0,Math.min(100,parseFloat(e.modelValue))))),T=(0,r.Fl)((()=>Number(e.width))),x=(0,r.Fl)((()=>c.value?Number(e.size):I.value?I.value.width:Math.max(T.value,32))),A=(0,r.Fl)((()=>i/(1-T.value/x.value)*2)),R=(0,r.Fl)((()=>T.value/x.value*A.value)),N=(0,r.Fl)((()=>(0,E.kb)((100-S.value)/100*s)));return(0,r.m0)((()=>{g.value=o.value,_.value=o.value})),(0,f.L)((()=>(0,r.Wm)(e.tag,{ref:o,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":y.value,"v-progress-circular--disable-shrink":"disable-shrink"===e.indeterminate},a.value,l.value,h.value],style:[c.value,d.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[(0,r.Wm)("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${A.value} ${A.value}`},[(0,r.Wm)("circle",{class:["v-progress-circular__underlay",m.value],style:v.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":R.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),(0,r.Wm)("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":R.value,"stroke-dasharray":s,"stroke-dashoffset":N.value},null)]),n.default&&(0,r.Wm)("div",{class:"v-progress-circular__content"},[n.default({value:S.value})])]}))),{}}});var S=n(3824),T=n(4960),x=n(4544),A=n(6791),R=n(5180),N=n(489),O=n(6183);function P(e,t){(0,r.YP)((()=>{var t;return null==(t=e.isExactActive)?void 0:t.value}),(n=>{e.isLink.value&&n&&t&&(0,r.Y3)((()=>{t(!0)}))}),{immediate:!0})}const D=(0,d.a)({name:"VBtn",directives:{Ripple:S.H},props:{active:Boolean,symbol:{type:null,default:g},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:T.lE,appendIcon:T.lE,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...(0,i.m)(),...(0,a.I)(),...(0,s.f)(),...(0,x.x)(),...(0,o.c)(),...(0,v.YQ)(),...(0,A.fF)(),...(0,R.y)(),...(0,N.F)(),...(0,O.GN)(),...(0,b.Z)(),...(0,l.Q)({tag:"button"}),...(0,u.x$)(),...(0,c.bk)({variant:"elevated"})},setup(e,t){let{attrs:n,slots:l}=t;const{themeClasses:h}=(0,u.ER)(e),{borderClasses:d}=(0,i.P)(e),{colorClasses:p,colorStyles:m,variantClasses:g}=(0,c.c1)(e),{densityClasses:w}=(0,s.t)(e),{dimensionStyles:k}=(0,x.$)(e),{elevationClasses:C}=(0,o.Y)(e),{loaderClasses:E}=(0,A.U2)(e),{locationStyles:S}=(0,R.T)(e),{positionClasses:T}=(0,N.K)(e),{roundedClasses:D}=(0,a.b)(e),{sizeClasses:L}=(0,b.t)(e),F=(0,v.Yt)(e,e.symbol,!1),M=(0,O.nB)(e,n),V=(0,r.Fl)((()=>(null==F?void 0:F.disabled.value)||e.disabled)),U=(0,r.Fl)((()=>"elevated"===e.variant&&!(e.disabled||e.flat||e.border)));return P(M,null==F?void 0:F.select),(0,f.L)((()=>{var t,n,i,s,o,a,u,f;const v=M.isLink.value?"a":e.tag,b=!F||F.isSelected.value,x=!(!e.prependIcon&&!l.prepend),A=!(!e.appendIcon&&!l.append);return(0,r.wy)((0,r.Wm)(v,{type:"a"===v?void 0:"button",class:["v-btn",null==F?void 0:F.selectedClass.value,{"v-btn--active":e.active,"v-btn--block":e.block,"v-btn--disabled":V.value,"v-btn--elevated":U.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},h.value,d.value,b?p.value:void 0,w.value,C.value,E.value,T.value,D.value,L.value,g.value],style:[b?m.value:void 0,k.value,S.value],disabled:V.value||void 0,href:M.href.value,onClick:e=>{var t;V.value||(null==(t=M.navigate)||t.call(M,e),null==F||F.toggle())}},{default:()=>[(0,c.Ux)(!0,"v-btn"),!e.icon&&x&&(0,r.Wm)(y.z,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>[(0,r.Wm)("div",{class:"v-btn__prepend"},[null!=(t=null==(n=l.prepend)?void 0:n.call(l))?t:(0,r.Wm)(_.t,null,null)])]}),(0,r.Wm)("div",{class:"v-btn__content","data-no-activator":""},[(0,r.Wm)(y.z,{key:"content",defaults:{VIcon:{icon:"string"===typeof e.icon?e.icon:void 0}}},{default:()=>[null!=(i=null==(s=l.default)?void 0:s.call(l))?i:"string"===typeof e.icon&&(0,r.Wm)(_.t,{key:"icon"},null)]})]),!e.icon&&A&&(0,r.Wm)(y.z,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>[(0,r.Wm)("div",{class:"v-btn__append"},[null!=(o=null==(a=l.append)?void 0:a.call(l))?o:(0,r.Wm)(_.t,null,null)])]}),!!e.loading&&(0,r.Wm)("span",{key:"loader",class:"v-btn__loader"},[null!=(u=null==(f=l.loader)?void 0:f.call(l))?u:(0,r.Wm)(I,{color:"boolean"===typeof e.loading?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[(0,r.Q2)("ripple"),!V.value&&e.ripple,null]])})),{}}})},3324:function(e,t,n){"use strict";n.d(t,{_:function(){return R}});var r=n(3396),i=n(8434),s=n(1107),o=n(9888);const a=(0,s.a)({name:"VCardActions",setup(e,t){let{slots:n}=t;return(0,i.AF)({VBtn:{variant:"text"}}),(0,o.L)((()=>{var e;return(0,r.Wm)("div",{class:"v-card-actions"},[null==(e=n.default)?void 0:e.call(n)])})),{}}});var l=n(652),u=n(1114);const c=(0,u.J)("v-card-subtitle"),h=(0,u.J)("v-card-title");var d=n(836),f=n(4960),p=n(9694);const m=(0,r.aZ)({name:"VCardItem",props:{appendAvatar:String,appendIcon:f.lE,prependAvatar:String,prependIcon:f.lE,subtitle:String,title:String,...(0,p.f)()},setup(e,t){let{slots:n}=t;return(0,o.L)((()=>{var t,i,s,o,a,u,f,p,m;const v=!!(e.prependAvatar||e.prependIcon||n.prepend),g=!!(e.appendAvatar||e.appendIcon||n.append),y=!(!e.title&&!n.title),_=!(!e.subtitle&&!n.subtitle);return(0,r.Wm)("div",{class:"v-card-item"},[v&&(0,r.Wm)(d.z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[(0,r.Wm)("div",{class:"v-card-item__prepend"},[null!=(t=null==(i=n.prepend)?void 0:i.call(n))?t:(0,r.Wm)(l.V,null,null)])]}),(0,r.Wm)("div",{class:"v-card-item__content"},[y&&(0,r.Wm)(h,{key:"title"},{default:()=>[null!=(s=null==(o=n.title)?void 0:o.call(n))?s:e.title]}),_&&(0,r.Wm)(c,{key:"subtitle"},{default:()=>[null!=(a=null==(u=n.subtitle)?void 0:u.call(n))?a:e.subtitle]}),null==(f=n.default)?void 0:f.call(n)]),g&&(0,r.Wm)(d.z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[(0,r.Wm)("div",{class:"v-card-item__append"},[null!=(p=null==(m=n.append)?void 0:m.call(n))?p:(0,r.Wm)(l.V,null,null)])]})])})),{}}});var v=n(1888),g=n(8694),y=n(3824),_=n(5221),b=n(6791),w=n(2718),k=n(4544),C=n(2465),E=n(5180),I=n(489),S=n(4231),T=n(6183),x=n(1138),A=n(7041);const R=(0,s.a)({name:"VCard",directives:{Ripple:y.H},props:{appendAvatar:String,appendIcon:f.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:Boolean,prependAvatar:String,prependIcon:f.lE,ripple:Boolean,subtitle:String,text:String,title:String,...(0,A.x$)(),...(0,w.m)(),...(0,p.f)(),...(0,k.x)(),...(0,C.c)(),...(0,b.fF)(),...(0,E.y)(),...(0,I.F)(),...(0,S.I)(),...(0,T.GN)(),...(0,x.Q)(),...(0,_.bk)({variant:"elevated"})},setup(e,t){let{attrs:n,slots:i}=t;const{themeClasses:s}=(0,A.ER)(e),{borderClasses:l}=(0,w.P)(e),{colorClasses:u,colorStyles:c,variantClasses:h}=(0,_.c1)(e),{densityClasses:f}=(0,p.t)(e),{dimensionStyles:y}=(0,k.$)(e),{elevationClasses:x}=(0,C.Y)(e),{loaderClasses:R}=(0,b.U2)(e),{locationStyles:N}=(0,E.T)(e),{positionClasses:O}=(0,I.K)(e),{roundedClasses:P}=(0,S.b)(e),D=(0,T.nB)(e,n);return(0,o.L)((()=>{var t,n,o,p,w;const k=D.isLink.value?"a":e.tag,C=!(!i.title&&!e.title),E=!(!i.subtitle&&!e.subtitle),I=C||E,S=!!(i.append||e.appendAvatar||e.appendIcon),T=!!(i.prepend||e.prependAvatar||e.prependIcon),A=!(!i.image&&!e.image),L=I||T||S,F=!(!i.text&&!e.text),M=!e.disabled&&(D.isClickable.value||e.link);return(0,r.wy)((0,r.Wm)(k,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":M},s.value,l.value,u.value,f.value,x.value,R.value,O.value,P.value,h.value],style:[c.value,y.value,N.value],href:D.href.value,onClick:M&&D.navigate},{default:()=>[A&&(0,r.Wm)(d.z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[(0,r.Wm)("div",{class:"v-card__image"},[null!=(t=null==(n=i.image)?void 0:n.call(i))?t:(0,r.Wm)(g.f,null,null)])]}),(0,r.Wm)(b.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:i.loader}),L&&(0,r.Wm)(m,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:i.item,prepend:i.prepend,title:i.title,subtitle:i.subtitle,append:i.append}),F&&(0,r.Wm)(v.Z,{key:"text"},{default:()=>[null!=(o=null==(p=i.text)?void 0:p.call(i))?o:e.text]}),null==(w=i.default)?void 0:w.call(i),i.actions&&(0,r.Wm)(a,null,{default:i.actions}),(0,_.Ux)(M,"v-card")]}),[[(0,r.Q2)("ripple"),M]])})),{}}})},1888:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1114);const i=(0,r.J)("v-card-text")},1222:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var r=n(3396),i=n(7076),s=n(1550),o=n(1107),a=n(7514),l=n(9888),u=n(131);const c=(0,o.a)({name:"VCheckbox",inheritAttrs:!1,props:{...(0,i.co)(),...(0,s.w4)()},setup(e,t){let{attrs:n,slots:o}=t;const c=(0,a.sq)(),h=(0,r.Fl)((()=>e.id||`checkbox-${c}`));return(0,l.L)((()=>{const[t,a]=(0,u.An)(n),[l,c]=(0,i.PE)(e),[d,f]=(0,s.CI)(e);return(0,r.Wm)(i.q8,(0,r.dG)({class:"v-checkbox"},t,l,{id:h.value}),{...o,default:e=>{let{id:t,isDisabled:n,isReadonly:i}=e;return(0,r.Wm)(s.pM,(0,r.dG)(d,{id:t.value,disabled:n.value,readonly:i.value},a),o)}})})),{}}})},1550:function(e,t,n){"use strict";n.d(t,{pM:function(){return I},CI:function(){return S},w4:function(){return E}});var r=n(3396),i=n(9242),s=n(3289),o=n(7302),a=n(4960),l=n(8717),u=n(4870),c=n(1107),h=n(7514),d=n(9888);const f=Symbol.for("vuetify:selection-control-group");(0,c.a)({name:"VSelectionControlGroup",props:{disabled:Boolean,id:String,inline:Boolean,name:String,falseIcon:a.lE,trueIcon:a.lE,multiple:{type:Boolean,default:null},readonly:Boolean,type:String,modelValue:null},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const i=(0,l.z)(e,"modelValue"),s=(0,h.sq)(),o=(0,r.Fl)((()=>e.id||`v-selection-control-group-${s}`)),a=(0,r.Fl)((()=>e.name||o.value));return(0,r.JJ)(f,{disabled:(0,u.Vh)(e,"disabled"),inline:(0,u.Vh)(e,"inline"),modelValue:i,multiple:(0,r.Fl)((()=>!!e.multiple||null==e.multiple&&Array.isArray(i.value))),name:a,falseIcon:(0,u.Vh)(e,"falseIcon"),trueIcon:(0,u.Vh)(e,"trueIcon"),readonly:(0,u.Vh)(e,"readonly"),type:(0,u.Vh)(e,"type")}),(0,d.L)((()=>{var t;return(0,r.Wm)("div",{class:"v-selection-control-group","aria-labelled-by":"radio"===e.type?o.value:void 0,role:"radio"===e.type?"radiogroup":void 0},[null==(t=n.default)?void 0:t.call(n)])})),{}}});var p=n(3824),m=n(9694),v=n(7041),g=n(2370),y=n(3766),_=n(131),b=n(2385);const w=(0,y.U)({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,label:String,falseIcon:a.lE,trueIcon:a.lE,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,trueValue:null,falseValue:null,modelValue:null,type:String,value:null,valueComparator:{type:Function,default:_.vZ},...(0,v.x$)(),...(0,m.f)()});function k(e){const t=(0,r.f3)(f,void 0),{densityClasses:n}=(0,m.t)(e),i=(0,l.z)(e,"modelValue"),s=(0,r.Fl)((()=>void 0!==e.trueValue?e.trueValue:void 0===e.value||e.value)),o=(0,r.Fl)((()=>void 0!==e.falseValue&&e.falseValue)),a=(0,r.Fl)((()=>(null==t?void 0:t.multiple.value)||!!e.multiple||null==e.multiple&&Array.isArray(i.value))),u=(0,r.Fl)({get(){const n=t?t.modelValue.value:i.value;return a.value?n.some((t=>e.valueComparator(t,s.value))):e.valueComparator(n,s.value)},set(n){if(e.readonly)return;const r=n?s.value:o.value;let l=r;a.value&&(l=n?[...(0,_.FT)(i.value),r]:(0,_.FT)(i.value).filter((t=>!e.valueComparator(t,s.value)))),t?t.modelValue.value=l:i.value=l}}),{textColorClasses:c,textColorStyles:h}=(0,g.rY)((0,r.Fl)((()=>!u.value||e.error||e.disabled?void 0:e.color))),d=(0,r.Fl)((()=>{var n,r;return u.value?null!=(n=null==t?void 0:t.trueIcon.value)?n:e.trueIcon:null!=(r=null==t?void 0:t.falseIcon.value)?r:e.falseIcon}));return{group:t,densityClasses:n,trueValue:s,falseValue:o,model:u,textColorClasses:c,textColorStyles:h,icon:d}}const C=(0,c.e)()({name:"VSelectionControl",directives:{Ripple:p.H},inheritAttrs:!1,props:w(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:a}=t;const{densityClasses:l,group:c,icon:f,model:p,textColorClasses:m,textColorStyles:v,trueValue:g}=k(e),y=(0,h.sq)(),w=(0,r.Fl)((()=>e.id||`input-${y}`)),C=(0,u.iH)(!1),E=(0,u.iH)(!1),I=(0,u.iH)();function S(e){C.value=!0,(!b.Z1||b.Z1&&e.target.matches(":focus-visible"))&&(E.value=!0)}function T(){C.value=!1,E.value=!1}return(0,d.L)((()=>{var t,u,h,d;const y=a.label?a.label({label:e.label,props:{for:w.value}}):e.label,b=null!=(t=null==c?void 0:c.type.value)?t:e.type,[k,x]=(0,_.An)(n);return(0,r.Wm)("div",(0,r.dG)({class:["v-selection-control",{"v-selection-control--dirty":p.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":C.value,"v-selection-control--focus-visible":E.value,"v-selection-control--inline":(null==c?void 0:c.inline.value)||e.inline},l.value]},k),[(0,r.Wm)("div",{class:["v-selection-control__wrapper",m.value],style:v.value},[null==(u=a.default)?void 0:u.call(a),(0,r.wy)((0,r.Wm)("div",{class:["v-selection-control__input"]},[f.value&&(0,r.Wm)(s.t,{key:"icon",icon:f.value},null),(0,r.wy)((0,r.Wm)("input",(0,r.dG)({"onUpdate:modelValue":e=>p.value=e,ref:I,disabled:e.disabled,id:w.value,onBlur:T,onFocus:S,"aria-readonly":e.readonly,type:b,value:g.value,name:null!=(h=null==c?void 0:c.name.value)?h:e.name,"aria-checked":"checkbox"===b?p.value:void 0},x),null),[[i.YZ,p.value]]),null==(d=a.input)?void 0:d.call(a,{model:p,textColorClasses:m,props:{onFocus:S,onBlur:T,id:w.value}})]),[[(0,r.Q2)("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),y&&(0,r.Wm)(o.J,{for:w.value},{default:()=>[y]})])})),{isFocused:C,input:I}}});const E=(0,y.U)({indeterminate:Boolean,indeterminateIcon:{type:a.lE,default:"$checkboxIndeterminate"},...w({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})}),I=(0,c.a)({name:"VCheckboxBtn",props:E(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,t){let{slots:n,emit:i}=t;const s=(0,l.z)(e,"indeterminate");function o(e){s.value&&(s.value=!1),i("update:modelValue",e)}const a=(0,r.Fl)((()=>e.indeterminate?e.indeterminateIcon:e.falseIcon)),u=(0,r.Fl)((()=>e.indeterminate?e.indeterminateIcon:e.trueIcon));return(0,d.L)((()=>(0,r.Wm)(C,(0,r.dG)(e,{class:"v-checkbox-btn",type:"checkbox",inline:!0,"onUpdate:modelValue":o,falseIcon:a.value,trueIcon:u.value,"aria-checked":e.indeterminate?"mixed":void 0}),n))),{}}});function S(e){return(0,_.ei)(e,Object.keys(I.props))}},836:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r=n(8434),i=n(3396),s=n(4870);const o=(0,i.aZ)({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:i,reset:o,root:a,scoped:l}=(0,s.BK)(e);return(0,r.AF)(i,{reset:o,root:a,scoped:l}),()=>{var e;return null==(e=n.default)?void 0:e.call(n)}}})},3601:function(e,t,n){"use strict";n.d(t,{B:function(){return p}});n(6699);var r=n(3396),i=n(2583),s=n(9815),o=n(4544),a=n(4906),l=n(8717),u=n(5975),c=n(1107),h=n(2385),d=n(9888),f=n(4870);const p=(0,c.e)()({name:"VDialog",inheritAttrs:!1,props:{fullscreen:Boolean,origin:{type:String,default:"center center"},retainFocus:{type:Boolean,default:!0},scrollable:Boolean,modelValue:Boolean,...(0,o.x)({width:"auto"}),...(0,a.X)({transition:{component:i.v}})},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:i}=t;const a=(0,l.z)(e,"modelValue"),{dimensionStyles:c}=(0,o.$)(e),{scopeId:p}=(0,u.a)(),m=(0,f.iH)();function v(e){var t,n;const r=e.relatedTarget,i=e.target;if(r!==i&&null!=(t=m.value)&&t.contentEl&&null!=(n=m.value)&&n.isTop&&![document,m.value.contentEl].includes(i)&&!m.value.contentEl.contains(i)){const e=[...m.value.contentEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter((e=>!e.hasAttribute("disabled")));if(!e.length)return;const t=e[0],n=e[e.length-1];r===t?n.focus():t.focus()}}return h.BR&&(0,r.YP)((()=>a.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",v):document.removeEventListener("focusin",v)}),{immediate:!0}),(0,r.YP)(a,(async e=>{var t,n;(await(0,r.Y3)(),e)?null==(t=m.value.contentEl)||t.focus({preventScroll:!0}):null==(n=m.value.activatorEl)||n.focus({preventScroll:!0})})),(0,d.L)((()=>(0,r.Wm)(s.y,(0,r.dG)({modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable}],style:c.value,transition:e.transition,ref:m,"aria-role":"dialog","aria-modal":"true",activatorProps:{"aria-haspopup":"dialog","aria-expanded":String(a.value)},"z-index":2400},p,n),{default:i.default,activator:i.activator}))),{}}})},8521:function(e,t,n){"use strict";n.d(t,{D:function(){return f}});n(6699),n(8099);var r=n(1138),i=n(2268),s=n(3396),o=n(1107);const a=["sm","md","lg","xl","xxl"],l=(()=>a.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),u=(()=>a.reduce(((e,t)=>(e["offset"+(0,i.kC)(t)]={type:[String,Number],default:null},e)),{}))(),c=(()=>a.reduce(((e,t)=>(e["order"+(0,i.kC)(t)]={type:[String,Number],default:null},e)),{}))(),h={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(c)};function d(e,t,n){let r=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");r+=`-${n}`}return"col"===e&&(r="v-"+r),"col"!==e||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const f=(0,o.a)({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...u,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},...(0,r.Q)()},setup(e,t){let{slots:n}=t;const r=(0,s.Fl)((()=>{const t=[];let n;for(n in h)h[n].forEach((r=>{const i=e[r],s=d(n,r,i);s&&t.push(s)}));const r=t.some((e=>e.startsWith("v-col-")));return t.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}));return()=>{var t;return(0,s.h)(e.tag,{class:r.value},null==(t=n.default)?void 0:t.call(n))}}})},3369:function(e,t,n){"use strict";n.d(t,{K:function(){return a}});var r=n(3396),i=(n(8099),n(1138)),s=n(1107),o=n(9888);const a=(0,s.a)({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...(0,i.Q)()},setup(e,t){let{slots:n}=t;return(0,o.L)((()=>(0,r.Wm)(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},n))),{}}})},6824:function(e,t,n){"use strict";n.d(t,{o:function(){return _}});n(6699),n(8099);var r=n(1138),i=n(2268),s=n(3396),o=n(1107);const a=["sm","md","lg","xl","xxl"],l=["start","end","center"];function u(e,t){return a.reduce(((n,r)=>(n[e+(0,i.kC)(r)]=t(),n)),{})}const c=e=>[...l,"baseline","stretch"].includes(e),h=u("align",(()=>({type:String,default:null,validator:c}))),d=e=>[...l,"space-between","space-around"].includes(e),f=u("justify",(()=>({type:String,default:null,validator:d}))),p=e=>[...l,"space-between","space-around","stretch"].includes(e),m=u("alignContent",(()=>({type:String,default:null,validator:p}))),v={align:Object.keys(h),justify:Object.keys(f),alignContent:Object.keys(m)},g={align:"align",justify:"justify",alignContent:"align-content"};function y(e,t,n){let r=g[e];if(null!=n){if(t){const n=t.replace(e,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const _=(0,o.a)({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...h,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:p},...m,...(0,r.Q)()},setup(e,t){let{slots:n}=t;const r=(0,s.Fl)((()=>{const t=[];let n;for(n in v)v[n].forEach((r=>{const i=e[r],s=y(n,r,i);s&&t.push(s)}));return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t}));return()=>{var t;return(0,s.h)(e.tag,{class:["v-row",r.value]},null==(t=n.default)?void 0:t.call(n))}}})},3289:function(e,t,n){"use strict";n.d(t,{t:function(){return m},f:function(){return p}});var r=n(3396),i=n(4960),s=n(9374),o=n(1138),a=n(7041),l=n(2370),u=n(4870),c=n(3766),h=n(1107),d=n(131),f=n(9888);const p=(0,c.U)({color:String,start:Boolean,end:Boolean,icon:i.lE,...(0,s.Z)(),...(0,o.Q)({tag:"i"}),...(0,a.x$)()},"v-icon"),m=(0,h.a)({name:"VIcon",props:p(),setup(e,t){let n,{attrs:o,slots:c}=t;c.default&&(n=(0,r.Fl)((()=>{var e,t;const n=null==(e=c.default)?void 0:e.call(c);if(n)return null==(t=(0,d.RA)(n).filter((e=>e.children&&"string"===typeof e.children))[0])?void 0:t.children})));const{themeClasses:h}=(0,a.ER)(e),{iconData:p}=(0,i.bi)(n||e),{sizeClasses:m}=(0,s.t)(e),{textColorClasses:v,textColorStyles:g}=(0,l.rY)((0,u.Vh)(e,"color"));return(0,f.L)((()=>(0,r.Wm)(p.value.component,{tag:e.tag,icon:p.value.icon,class:["v-icon","notranslate",h.value,m.value,v.value,{"v-icon--clickable":!!o.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[m.value?void 0:{fontSize:(0,d.kb)(e.size),height:(0,d.kb)(e.size),width:(0,d.kb)(e.size)},g.value],"aria-hidden":"true"},null))),{}}})},8694:function(e,t,n){"use strict";n.d(t,{f:function(){return m}});var r=n(3396),i=n(4544),s=n(1107),o=n(9888);function a(e){return{aspectStyles:(0,r.Fl)((()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}const l=(0,s.a)({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...(0,i.x)()},setup(e,t){let{slots:n}=t;const{aspectStyles:s}=a(e),{dimensionStyles:l}=(0,i.$)(e);return(0,o.L)((()=>{var t;return(0,r.Wm)("div",{class:"v-responsive",style:l.value},[(0,r.Wm)("div",{class:"v-responsive__sizer",style:s.value},null),null==(t=n.additional)?void 0:t.call(n),n.default&&(0,r.Wm)("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])})),{}}});var u=n(7052),c=n(4906),h=n(4870),d=n(9242),f=n(2385),p=n(131);const m=(0,s.a)({name:"VImg",directives:{intersect:u.Z},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...(0,c.X)()},emits:["loadstart","load","error"],setup(e,t){let{emit:n,slots:i}=t;const s=(0,h.iH)(""),a=(0,h.iH)(),u=(0,h.iH)(e.eager?"loading":"idle"),m=(0,h.iH)(),v=(0,h.iH)(),g=(0,r.Fl)((()=>e.src&&"object"===typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),y=(0,r.Fl)((()=>g.value.aspect||m.value/v.value||0));function _(t){if((!e.eager||!t)&&(!f.cu||t||e.eager)){if(u.value="loading",g.value.lazySrc){const e=new Image;e.src=g.value.lazySrc,C(e,null)}g.value.src&&(0,r.Y3)((()=>{var e,t;if(n("loadstart",(null==(e=a.value)?void 0:e.currentSrc)||g.value.src),null!=(t=a.value)&&t.complete){if(a.value.naturalWidth||w(),"error"===u.value)return;y.value||C(a.value,null),b()}else y.value||C(a.value),k()}))}}function b(){var e;k(),u.value="loaded",n("load",(null==(e=a.value)?void 0:e.currentSrc)||g.value.src)}function w(){var e;u.value="error",n("error",(null==(e=a.value)?void 0:e.currentSrc)||g.value.src)}function k(){const e=a.value;e&&(s.value=e.currentSrc||e.src)}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=()=>{const{naturalHeight:r,naturalWidth:i}=e;r||i?(m.value=i,v.value=r):e.complete||"loading"!==u.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(m.value=1,v.value=1):setTimeout(n,t)};n()}(0,r.YP)((()=>e.src),(()=>{_("idle"!==u.value)})),(0,r.wF)((()=>_()));const E=(0,r.Fl)((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),I=(0,r.Fl)((()=>{var t;if(!g.value.src||"idle"===u.value)return;const n=(0,r.h)("img",{class:["v-img__img",E.value],src:g.value.src,srcset:g.value.srcset,sizes:e.sizes,ref:a,onLoad:b,onError:w}),s=null==(t=i.sources)?void 0:t.call(i);return(0,r.Wm)(c.J,{transition:e.transition,appear:!0},{default:()=>[(0,r.wy)(s?(0,r.Wm)("picture",{class:"v-img__picture"},[s,n]):n,[[d.F8,"loaded"===u.value]])]})})),S=(0,r.Fl)((()=>(0,r.Wm)(c.J,{transition:e.transition},{default:()=>[g.value.lazySrc&&"loaded"!==u.value&&(0,r.Wm)("img",{class:["v-img__img","v-img__img--preload",E.value],src:g.value.lazySrc,alt:""},null)]}))),T=(0,r.Fl)((()=>{if(i.placeholder)return(0,r.Wm)(c.J,{transition:e.transition,appear:!0},{default:()=>[("loading"===u.value||"error"===u.value&&!i.error)&&(0,r.Wm)("div",{class:"v-img__placeholder"},[i.placeholder()])]})})),x=(0,r.Fl)((()=>{if(i.error)return(0,r.Wm)(c.J,{transition:e.transition,appear:!0},{default:()=>["error"===u.value&&(0,r.Wm)("div",{class:"v-img__error"},[i.error()])]})})),A=(0,r.Fl)((()=>{if(e.gradient)return(0,r.Wm)("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null)})),R=(0,h.iH)(!1);{const e=(0,r.YP)(y,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{R.value=!0}))})),e())}))}return(0,o.L)((()=>(0,r.wy)((0,r.Wm)(l,{class:["v-img",{"v-img--booting":!R.value}],style:{width:(0,p.kb)("auto"===e.width?m.value:e.width)},aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>[I.value,S.value,A.value,T.value,x.value],default:i.default}),[[(0,r.Q2)("intersect"),{handler:_,options:e.options},null,{once:!0}]]))),{currentSrc:s,image:a,state:u,naturalWidth:m,naturalHeight:v}}})},7076:function(e,t,n){"use strict";n.d(t,{q8:function(){return C},PE:function(){return E},co:function(){return k}});n(6699);var r=n(3396),i=n(3289),s=n(8952),o=n(4906),a=n(2370),l=n(1107),u=n(131),c=n(9888);const h=(0,l.a)({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...(0,o.X)({transition:{component:s.cu,leaveAbsolute:!0,group:!0}})},setup(e,t){let{slots:n}=t;const i=(0,r.Fl)((()=>(0,u.FT)(e.messages))),{textColorClasses:s,textColorStyles:l}=(0,a.rY)((0,r.Fl)((()=>e.color)));return(0,c.L)((()=>(0,r.Wm)(o.J,{transition:e.transition,tag:"div",class:["v-messages",s.value],style:l.value},{default:()=>[e.active&&i.value.map(((e,t)=>(0,r.Wm)("div",{class:"v-messages__message",key:`${t}-${i.value}`},[n.message?n.message({message:e}):e])))]}))),{}}});var d=n(4960),f=n(9694),p=n(3766);const m=Symbol.for("vuetify:form");(0,p.U)({disabled:Boolean,fastFail:Boolean,lazyValidation:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null}});function v(){return(0,r.f3)(m,null)}var g=n(8717),y=n(4870),_=n(7514);const b=(0,p.U)({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validationValue:null});function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,_.BL)(),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,_.sq)();const i=(0,g.z)(e,"modelValue"),s=(0,r.Fl)((()=>{var t;return null!=(t=e.validationValue)?t:i.value})),o=v(),a=(0,y.iH)([]),l=(0,y.iH)(!0),c=(0,r.Fl)((()=>!(!(0,u.FT)(""===i.value?null:i.value).length&&!(0,u.FT)(""===s.value?null:s.value).length))),h=(0,r.Fl)((()=>!!(e.disabled||null!=o&&o.isDisabled.value))),d=(0,r.Fl)((()=>!!(e.readonly||null!=o&&o.isReadonly.value))),f=(0,r.Fl)((()=>e.errorMessages.length?(0,u.FT)(e.errorMessages):a.value)),p=(0,r.Fl)((()=>!e.error&&!f.value.length&&(!e.rules.length||(!l.value||null)))),m=(0,y.iH)(!1),b=(0,r.Fl)((()=>({[`${t}--error`]:!1===p.value,[`${t}--dirty`]:c.value,[`${t}--disabled`]:h.value,[`${t}--readonly`]:d.value}))),w=(0,r.Fl)((()=>{var t;return null!=(t=e.name)?t:(0,y.SU)(n)}));function k(){C(),i.value=null}function C(){l.value=!0,a.value=[]}async function E(){const t=[];m.value=!0;for(const n of e.rules){if(t.length>=(e.maxErrors||1))break;const r="function"===typeof n?n:()=>n,i=await r(s.value);!0!==i&&("string"===typeof i?t.push(i):console.warn(`${i} is not a valid value. Rule functions must return boolean true or a string.`))}return a.value=t,m.value=!1,l.value=!1,a.value}return(0,r.wF)((()=>{null==o||o.register(w.value,E,k,C,p)})),(0,r.Jd)((()=>{null==o||o.unregister(w.value)})),(0,r.YP)(s,(()=>{null!=s.value&&E()})),{errorMessages:f,isDirty:c,isDisabled:h,isReadonly:d,isPristine:l,isValid:p,isValidating:m,reset:k,resetValidation:C,validate:E,validationClasses:b}}const k=(0,p.U)({id:String,appendIcon:d.lE,prependIcon:d.lE,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},...(0,f.f)(),...b()}),C=(0,l.e)()({name:"VInput",props:{...k()},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:s,emit:o}=t;const{densityClasses:a}=(0,f.t)(e),l=(0,_.sq)(),u=(0,r.Fl)((()=>e.id||`input-${l}`)),{errorMessages:d,isDirty:p,isDisabled:m,isReadonly:v,isPristine:g,isValid:y,isValidating:b,reset:k,resetValidation:C,validate:E,validationClasses:I}=w(e,"v-input",u),S=(0,r.Fl)((()=>({id:u,isDirty:p,isDisabled:m,isReadonly:v,isPristine:g,isValid:y,isValidating:b,reset:k,resetValidation:C,validate:E})));return(0,c.L)((()=>{var t,o,l,u,c;const f=!(!s.prepend&&!e.prependIcon),p=!(!s.append&&!e.appendIcon),m=!!(null!=(t=e.messages)&&t.length||d.value.length),v=!e.hideDetails||"auto"===e.hideDetails&&m;return(0,r.Wm)("div",{class:["v-input",`v-input--${e.direction}`,a.value,I.value]},[f&&(0,r.Wm)("div",{key:"prepend",class:"v-input__prepend"},[e.prependIcon&&(0,r.Wm)(i.t,{key:"prepend-icon",onClick:n["onClick:prepend"],icon:e.prependIcon},null),null==(o=s.prepend)?void 0:o.call(s,S.value)]),s.default&&(0,r.Wm)("div",{class:"v-input__control"},[null==(l=s.default)?void 0:l.call(s,S.value)]),p&&(0,r.Wm)("div",{key:"append",class:"v-input__append"},[null==(u=s.append)?void 0:u.call(s,S.value),e.appendIcon&&(0,r.Wm)(i.t,{key:"append-icon",onClick:n["onClick:append"],icon:e.appendIcon},null)]),v&&(0,r.Wm)("div",{class:"v-input__details"},[(0,r.Wm)(h,{active:m,messages:d.value.length>0?d.value:e.messages},{message:s.message}),null==(c=s.details)?void 0:c.call(s,S.value)])])})),{reset:k,resetValidation:C,validate:E}}});function E(e){return(0,u.ei)(e,Object.keys(C.props))}},7302:function(e,t,n){"use strict";n.d(t,{J:function(){return a}});var r=n(3396),i=n(7041),s=n(1107),o=n(9888);const a=(0,s.a)({name:"VLabel",props:{text:String,...(0,i.x$)()},setup(e,t){let{slots:n}=t;return(0,o.L)((()=>{var t;return(0,r.Wm)("label",{class:"v-label"},[e.text,null==(t=n.default)?void 0:t.call(n)])})),{}}})},7948:function(e,t,n){"use strict";n.d(t,{i:function(){return F}});var r=n(3396),i=n(7041),s=n(2370),o=n(4870),a=n(1107),l=n(131),u=n(9888);const c=(0,a.a)({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...(0,i.x$)()},setup(e,t){let{attrs:n}=t;const{themeClasses:a}=(0,i.ER)(e),{backgroundColorClasses:c,backgroundColorStyles:h}=(0,s.Y5)((0,o.Vh)(e,"color")),d=(0,r.Fl)((()=>{const t={};return e.length&&(t[e.vertical?"maxHeight":"maxWidth"]=(0,l.kb)(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=(0,l.kb)(e.thickness)),t}));return(0,u.L)((()=>(0,r.Wm)("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,c.value],style:[d.value,h.value],"aria-orientation":n.role&&"separator"!==n.role?void 0:e.vertical?"vertical":"horizontal",role:`${n.role||"separator"}`},null))),{}}});var h=n(9242),d=n(836),f=n(8952),p=n(3867),m=n(4960),v=n(1138),g=n(4906),y=n(6479),_=n(1372);const b=(0,a.a)({name:"VListGroupActivator",setup(e,t){let{slots:n}=t;return(0,y._$)(),()=>{var e;return null==(e=n.default)?void 0:e.call(n)}}}),w=(0,a.e)()({name:"VListGroup",props:{activeColor:String,color:String,collapseIcon:{type:m.lE,default:"$collapse"},expandIcon:{type:m.lE,default:"$expand"},value:null,...(0,v.Q)()},setup(e,t){let{slots:n}=t;const{isOpen:i,open:s}=(0,y.Io)((0,o.Vh)(e,"value"),!0),a=(0,p.sm)(),{isBooted:l}=(0,_.u)(),c=e=>{s(!i.value,e)},m=(0,r.Fl)((()=>{var t;return{onClick:c,active:i.value,appendIcon:i.value?e.collapseIcon:e.expandIcon,class:"v-list-group__header",color:i.value?null!=(t=e.activeColor)?t:e.color:void 0}}));return(0,u.L)((()=>{var t;return(0,r.Wm)(e.tag,{class:["v-list-group",{"v-list-group--prepend":null==a?void 0:a.hasPrepend.value}]},{default:()=>[n.activator&&(0,r.Wm)(d.z,{defaults:{VListItemIcon:{color:m.value.color}}},{default:()=>[(0,r.Wm)(b,null,{default:()=>[n.activator({props:m.value,isOpen:i})]})]}),(0,r.Wm)(g.J,{transition:l.value&&{component:f.Fx}},{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-list-group__items"},[null==(t=n.default)?void 0:t.call(n)]),[[h.F8,i.value]])]})]})})),{}}});var k=n(8319),C=n(7754);const E=(0,a.e)()({name:"VListChildren",props:{items:Array},setup(e,t){let{slots:n}=t;return(0,p.$l)(),()=>{var t,i,s;return null!=(t=null==(i=n.default)?void 0:i.call(n))?t:null==(s=e.items)?void 0:s.map((e=>{let{children:t,props:i,type:s,raw:o}=e;if("divider"===s)return(0,r.Wm)(c,i,null);if("subheader"===s)return(0,r.Wm)(C.b,i,n);const a={subtitle:n.subtitle?e=>{var t;return null==(t=n.subtitle)?void 0:t.call(n,{...e,item:o})}:void 0,prepend:n.prepend?e=>{var t;return null==(t=n.prepend)?void 0:t.call(n,{...e,item:o})}:void 0,append:n.append?e=>{var t;return null==(t=n.append)?void 0:t.call(n,{...e,item:o})}:void 0,default:n.default?e=>{var t;return null==(t=n.default)?void 0:t.call(n,{...e,item:o})}:void 0,title:n.title?e=>{var t;return null==(t=n.title)?void 0:t.call(n,{...e,item:o})}:void 0};return t?(0,r.Wm)(w,{value:null==i?void 0:i.value},{activator:e=>{let{props:t}=e;return n.header?n.header({...i,...t}):(0,r.Wm)(k.l,(0,r.dG)(i,t),a)},default:()=>(0,r.Wm)(E,{items:t},n)}):n.item?n.item(i):(0,r.Wm)(k.l,i,a)}))}}});var I=n(2718),S=n(9694),T=n(4544),x=n(2465),A=n(6185),R=n(4231),N=n(5221),O=n(8434);function P(e,t){const n=(0,l.qF)(t,e.itemType,"item"),r="string"===typeof t?t:(0,l.qF)(t,e.itemTitle),i=(0,l.qF)(t,e.itemValue,void 0),s=(0,l.qF)(t,e.itemChildren),o=!0===e.itemProps?(0,l.ei)(t,["children"])[1]:(0,l.qF)(t,e.itemProps),a={title:r,value:i,...o};return{type:n,title:a.title,value:a.value,props:a,children:"item"===n&&s?D(e,s):void 0,raw:t}}function D(e,t){const n=[];for(const r of t)n.push(P(e,r));return n}function L(e){const t=(0,r.Fl)((()=>D(e,e.items)));return{items:t}}const F=(0,a.e)()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...(0,y.Gp)({selectStrategy:"single-leaf",openStrategy:"list"}),...(0,I.m)(),...(0,S.f)(),...(0,T.x)(),...(0,x.c)(),itemType:{type:String,default:"type"},...(0,A.S1)(),...(0,R.I)(),...(0,v.Q)(),...(0,i.x$)(),...(0,N.bk)({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,t){let{slots:n}=t;const{items:a}=L(e),{themeClasses:l}=(0,i.ER)(e),{backgroundColorClasses:c,backgroundColorStyles:h}=(0,s.Y5)((0,o.Vh)(e,"bgColor")),{borderClasses:d}=(0,I.P)(e),{densityClasses:f}=(0,S.t)(e),{dimensionStyles:m}=(0,T.$)(e),{elevationClasses:v}=(0,x.Y)(e),{roundedClasses:g}=(0,R.b)(e),{open:_,select:b}=(0,y.Ek)(e),w=(0,r.Fl)((()=>e.lines?`v-list--${e.lines}-line`:void 0)),k=(0,o.Vh)(e,"activeColor"),C=(0,o.Vh)(e,"color");return(0,p.$l)(),(0,O.AF)({VListGroup:{activeColor:k,color:C},VListItem:{activeClass:(0,o.Vh)(e,"activeClass"),activeColor:k,color:C,density:(0,o.Vh)(e,"density"),disabled:(0,o.Vh)(e,"disabled"),lines:(0,o.Vh)(e,"lines"),nav:(0,o.Vh)(e,"nav"),variant:(0,o.Vh)(e,"variant")}}),(0,u.L)((()=>(0,r.Wm)(e.tag,{class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},l.value,c.value,d.value,f.value,v.value,w.value,g.value],style:[h.value,m.value]},{default:()=>[(0,r.Wm)(E,{items:a.value},n)]}))),{open:_,select:b}}})},8319:function(e,t,n){"use strict";n.d(t,{l:function(){return T}});var r=n(3396),i=n(652),s=n(1107),o=n(9888);const a=(0,s.a)({name:"VListItemAvatar",props:(0,i.O)(),setup(e,t){let{slots:n}=t;return(0,o.L)((()=>(0,r.Wm)(i.V,(0,r.dG)({class:["v-list-item-avatar",{"v-list-item-avatar--start":e.start,"v-list-item-avatar--end":e.end}]},e),n))),{}}});var l=n(1114);const u=(0,l.J)("v-list-item-header");var c=n(3289);const h=(0,s.a)({name:"VListItemIcon",props:(0,c.f)(),setup(e,t){let{slots:n}=t;return(0,o.L)((()=>(0,r.Wm)(c.t,(0,r.dG)({class:["v-list-item-icon",{"v-list-item-icon--start":e.start,"v-list-item-icon--end":e.end}]},e),n))),{}}}),d=(0,l.J)("v-list-item-subtitle");var f=n(2127),p=n(3824),m=n(5221),v=n(4960),g=n(2718),y=n(9694),_=n(4544),b=n(2465),w=n(4231),k=n(6183),C=n(1138),E=n(7041),I=n(3867),S=n(6479);const T=(0,s.e)()({name:"VListItem",directives:{Ripple:p.H},props:{active:Boolean,activeColor:String,activeClass:String,appendAvatar:String,appendIcon:v.lE,disabled:Boolean,lines:String,nav:Boolean,prependAvatar:String,prependIcon:v.lE,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,link:Boolean,...(0,g.m)(),...(0,y.f)(),...(0,_.x)(),...(0,b.c)(),...(0,w.I)(),...(0,k.GN)(),...(0,C.Q)(),...(0,E.x$)(),...(0,m.bk)({variant:"text"})},setup(e,t){var n;let{attrs:i,slots:s}=t;const l=(0,k.nB)(e,i),c=(0,r.Fl)((()=>{var t;return null!=(t=e.value)?t:l.href.value})),{select:p,isSelected:v,isIndeterminate:C,isGroupActivator:T,root:x,parent:A}=(0,S.Io)(c,!1),R=(0,I.sm)(),N=(0,r.Fl)((()=>{var t;return e.active||(null==(t=l.isExactActive)?void 0:t.value)||v.value})),O=(0,r.Fl)((()=>e.rounded||e.nav)),P=(0,r.Fl)((()=>{var t;return{color:N.value&&null!=(t=e.activeColor)?t:e.color,variant:e.variant}}));null!=(n=l.isExactActive)&&n.value&&null!=A.value&&x.open(A.value,!0),(0,r.YP)((()=>{var e;return null==(e=l.isExactActive)?void 0:e.value}),(e=>{e&&null!=A.value&&x.open(A.value,!0)}));const{themeClasses:D}=(0,E.ER)(e),{borderClasses:L}=(0,g.P)(e),{colorClasses:F,colorStyles:M,variantClasses:V}=(0,m.c1)(P),{densityClasses:U}=(0,y.t)(e),{dimensionStyles:B}=(0,_.$)(e),{elevationClasses:W}=(0,b.Y)(e),{roundedClasses:$}=(0,w.b)(O),j=(0,r.Fl)((()=>e.lines?`v-list-item--${e.lines}-line`:void 0)),q=(0,r.Fl)((()=>({isActive:N.value,select:p,isSelected:v.value,isIndeterminate:C.value})));return(0,o.L)((()=>{var t,n,i;const o=l.isLink.value?"a":e.tag,c=!R||v.value||N.value,g=s.title||e.title,y=s.subtitle||e.subtitle,_=!(!g&&!y),b=!!(s.append||e.appendAvatar||e.appendIcon),w=!!(s.prepend||e.prependAvatar||e.prependIcon),k=!e.disabled&&(e.link||l.isClickable.value||null!=e.value&&!!R);return null==R||R.updateHasPrepend(w),(0,r.wy)((0,r.Wm)(o,{class:["v-list-item",{"v-list-item--active":N.value,"v-list-item--disabled":e.disabled,"v-list-item--link":k,"v-list-item--nav":e.nav,"v-list-item--prepend":!w&&(null==R?void 0:R.hasPrepend.value),[`${e.activeClass}`]:N.value},D.value,L.value,c?F.value:void 0,U.value,W.value,j.value,$.value,V.value],style:[c?M.value:void 0,B.value],href:l.href.value,tabindex:k?0:void 0,onClick:k&&(t=>{var n;T||(null==(n=l.navigate)||n.call(l,t),null!=e.value&&p(!v.value,t))})},{default:()=>[(0,m.Ux)(k||N.value,"v-list-item"),w&&(0,r.Wm)(r.HY,null,[e.prependAvatar&&(0,r.Wm)(a,{image:e.prependAvatar,start:!0},null),e.prependIcon&&(0,r.Wm)(h,{icon:e.prependIcon,start:!0},null),null==(t=s.prepend)?void 0:t.call(s,q.value)]),_&&(0,r.Wm)(u,{key:"header"},{default:()=>[g&&(0,r.Wm)(f.V,{key:"title"},{default:()=>[s.title?s.title({title:e.title}):e.title]}),y&&(0,r.Wm)(d,null,{default:()=>[s.subtitle?s.subtitle({subtitle:e.subtitle}):e.subtitle]})]}),null==(n=s.default)?void 0:n.call(s,q.value),b&&(0,r.Wm)(r.HY,null,[null==(i=s.append)?void 0:i.call(s,q.value),e.appendAvatar&&(0,r.Wm)(a,{image:e.appendAvatar,end:!0},null),e.appendIcon&&(0,r.Wm)(h,{icon:e.appendIcon,end:!0},null)])]}),[[(0,r.Q2)("ripple"),k]])})),{}}})},2127:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(1114);const i=(0,r.J)("v-list-item-title")},7754:function(e,t,n){"use strict";n.d(t,{b:function(){return u}});var r=n(3396),i=n(1138),s=n(2370),o=n(4870),a=n(1107),l=n(9888);const u=(0,a.a)({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...(0,i.Q)()},setup(e,t){let{slots:n}=t;const{textColorClasses:i,textColorStyles:a}=(0,s.rY)((0,o.Vh)(e,"color"));return(0,l.L)((()=>{var t,s;const o=!(!n.default&&!e.title);return(0,r.Wm)(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},i.value],style:{textColorStyles:a}},{default:()=>[o&&(0,r.Wm)("div",{class:"v-list-subheader__text"},[null!=(t=null==(s=n.default)?void 0:s.call(n))?t:e.title])]})})),{}}})},3867:function(e,t,n){"use strict";n.d(t,{$l:function(){return o},sm:function(){return a}});var r=n(3396),i=n(4870);Symbol.for("vuetify:depth");const s=Symbol.for("vuetify:list");function o(){const e=(0,r.f3)(s,{hasPrepend:(0,i.iH)(!1),updateHasPrepend:()=>null}),t={hasPrepend:(0,i.iH)(!1),updateHasPrepend:e=>{e&&(t.hasPrepend.value=e)}};return(0,r.JJ)(s,t),e}function a(){return(0,r.f3)(s,null)}},3140:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=n(3396),i=n(1138),s=n(7396),o=n(1372),a=n(1107),l=n(9888);const u=(0,a.a)({name:"VMain",props:(0,i.Q)({tag:"main"}),setup(e,t){let{slots:n}=t;const{mainStyles:i}=(0,s.$Y)(),{ssrBootStyles:a}=(0,o.u)();return(0,l.L)((()=>{var t;return(0,r.Wm)(e.tag,{class:"v-main",style:[i.value,a.value]},{default:()=>[(0,r.Wm)("div",{class:"v-main__wrap"},[null==(t=n.default)?void 0:t.call(n)])]})})),{}}})},4360:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});const r=Symbol.for("vuetify:v-menu")},7033:function(e,t,n){"use strict";n.d(t,{V:function(){return x}});n(6699);var r=n(3396),i=n(2718),s=n(2465),o=n(7396),a=n(4231),l=n(1138),u=n(7041),c=n(2370),h=n(8157),d=n(8717),f=n(6183),p=n(1372),m=(n(1703),n(131));const v=100,g=20;function y(e){const t=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*t}function _(e){if(e.length<2)return 0;if(2===e.length)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let t=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const r=y(t),i=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);t+=(i-r)*Math.abs(i),n===e.length-1&&(t*=.5)}return 1e3*y(t)}function b(){const e={};function t(t){Array.from(t.changedTouches).forEach((n=>{var r;const i=null!=(r=e[n.identifier])?r:e[n.identifier]=new m.PU(g);i.push([t.timeStamp,n])}))}function n(t){Array.from(t.changedTouches).forEach((t=>{delete e[t.identifier]}))}function r(t){var n;const r=null==(n=e[t])?void 0:n.values().reverse();if(!r)throw new Error(`No samples for touch id ${t}`);const i=r[0],s=[],o=[];for(const e of r){if(i[0]-e[0]>v)break;s.push({t:e[0],d:e[1].clientX}),o.push({t:e[0],d:e[1].clientY})}return{x:_(s),y:_(o),get direction(){const{x:e,y:t}=this,[n,r]=[Math.abs(e),Math.abs(t)];return n>r&&e>=0?"right":n>r&&e<=0?"left":r>n&&t>=0?"down":r>n&&t<=0?"up":w()}}}return{addMovement:t,endTouch:n,getVelocity:r}}function w(){throw new Error}var k=n(4870);function C(e){let{isActive:t,isTemporary:n,width:i,touchless:s,position:o}=e;(0,r.bv)((()=>{window.addEventListener("touchstart",y,{passive:!0}),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",w,{passive:!0})})),(0,r.Jd)((()=>{window.removeEventListener("touchstart",y),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",w)}));const a=(0,r.Fl)((()=>"bottom"!==o.value)),{addMovement:l,endTouch:u,getVelocity:c}=b();let h=!1;const d=(0,k.iH)(!1),f=(0,k.iH)(0),p=(0,k.iH)(0);let m;function v(e,t){return("left"===o.value?e:"right"===o.value?document.documentElement.clientWidth-e:"bottom"===o.value?document.documentElement.clientHeight-e:E())-(t?i.value:0)}function g(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n="left"===o.value?(e-p.value)/i.value:"right"===o.value?(document.documentElement.clientWidth-e-p.value)/i.value:"bottom"===o.value?(document.documentElement.clientHeight-e-p.value)/i.value:E();return t?Math.max(0,Math.min(1,n)):n}function y(e){if(s.value)return;const r=e.changedTouches[0].clientX,c=e.changedTouches[0].clientY,d=25,y="left"===o.value?r<d:"right"===o.value?r>document.documentElement.clientWidth-d:"bottom"===o.value?c>document.documentElement.clientHeight-d:E(),_=t.value&&("left"===o.value?r<i.value:"right"===o.value?r>document.documentElement.clientWidth-i.value:"bottom"===o.value?c>document.documentElement.clientHeight-i.value:E());(y||_||t.value&&n.value)&&(h=!0,m=[r,c],p.value=v(a.value?r:c,t.value),f.value=g(a.value?r:c),u(e),l(e))}function _(e){const t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;if(h){if(!e.cancelable)return void(h=!1);const r=Math.abs(t-m[0]),i=Math.abs(n-m[1]),s=a.value?r>i&&r>3:i>r&&i>3;s?(d.value=!0,h=!1):(a.value?i:r)>3&&(h=!1)}if(!d.value)return;e.preventDefault(),l(e);const r=g(a.value?t:n,!1);f.value=Math.max(0,Math.min(1,r)),r>1?p.value=v(a.value?t:n,!0):r<0&&(p.value=v(a.value?t:n,!1))}function w(e){if(h=!1,!d.value)return;l(e),d.value=!1;const n=c(e.changedTouches[0].identifier),r=Math.abs(n.x),i=Math.abs(n.y),s=a.value?r>i&&r>400:i>r&&i>3;t.value=s?n.direction===({left:"right",right:"left",bottom:"up"}[o.value]||E()):f.value>.5}const C=(0,r.Fl)((()=>d.value?{transform:"left"===o.value?`translateX(calc(-100% + ${f.value*i.value}px))`:"right"===o.value?`translateX(calc(100% - ${f.value*i.value}px))`:"bottom"===o.value?`translateY(calc(100% - ${f.value*i.value}px))`:E(),transition:"none"}:void 0));return{isDragging:d,dragProgress:f,dragStyles:C}}function E(){throw new Error}var I=n(9242),S=n(1107),T=n(9888);const x=(0,S.a)({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:72},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"left",validator:e=>["left","right","bottom"].includes(e)},...(0,i.m)(),...(0,s.c)(),...(0,o.o8)(),...(0,a.I)(),...(0,l.Q)({tag:"nav"}),...(0,u.x$)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:l}=t;const{themeClasses:v}=(0,u.ER)(e),{borderClasses:g}=(0,i.P)(e),{backgroundColorClasses:y,backgroundColorStyles:_}=(0,c.Y5)((0,k.Vh)(e,"color")),{elevationClasses:b}=(0,s.Y)(e),{mobile:w}=(0,h.AW)(),{roundedClasses:E}=(0,a.b)(e),S=(0,f.tv)(),x=(0,d.z)(e,"modelValue",null,(e=>!!e)),A=(0,k.iH)(!1),{ssrBootStyles:R}=(0,p.u)(),N=(0,r.Fl)((()=>e.rail&&e.expandOnHover&&A.value?Number(e.width):Number(e.rail?e.railWidth:e.width))),O=(0,r.Fl)((()=>!e.permanent&&(w.value||e.temporary)));e.disableResizeWatcher||(0,r.YP)(O,(t=>!e.permanent&&(x.value=!t))),!e.disableRouteWatcher&&S&&(0,r.YP)(S.currentRoute,(()=>O.value&&(x.value=!1))),(0,r.YP)((()=>e.permanent),(e=>{e&&(x.value=!0)})),(0,r.wF)((()=>{null!=e.modelValue||O.value||(x.value=e.permanent||!w.value)}));const P=(0,k.iH)(),{isDragging:D,dragProgress:L,dragStyles:F}=C({isActive:x,isTemporary:O,width:N,touchless:(0,k.Vh)(e,"touchless"),position:(0,k.Vh)(e,"location")}),M=(0,r.Fl)((()=>{const t=O.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):N.value;return D.value?t*L.value:t})),{layoutItemStyles:V,layoutRect:U,layoutItemScrimStyles:B}=(0,o.eW)({id:e.name,order:(0,r.Fl)((()=>parseInt(e.order,10))),position:(0,k.Vh)(e,"location"),layoutSize:M,elementSize:N,active:(0,r.Fl)((()=>x.value||D.value)),disableTransitions:(0,r.Fl)((()=>D.value)),absolute:(0,k.Vh)(e,"absolute")}),W=(0,r.Fl)((()=>({...D.value?{opacity:.2*L.value,transition:"none"}:void 0,...U.value?{left:(0,m.kb)(U.value.left),right:(0,m.kb)(U.value.right),top:(0,m.kb)(U.value.top),bottom:(0,m.kb)(U.value.bottom)}:void 0,...B.value})));return(0,T.L)((()=>{var t,i,s,o;const a=l.image||e.image;return(0,r.Wm)(r.HY,null,[(0,r.Wm)(e.tag,(0,r.dG)({ref:P,onMouseenter:()=>A.value=!0,onMouseleave:()=>A.value=!1,class:["v-navigation-drawer",{"v-navigation-drawer--bottom":"bottom"===e.location,"v-navigation-drawer--end":"right"===e.location,"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":A.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--start":"left"===e.location,"v-navigation-drawer--temporary":O.value,"v-navigation-drawer--active":x.value},v.value,y.value,g.value,b.value,E.value],style:[_.value,V.value,F.value,R.value]},n),{default:()=>[a&&(0,r.Wm)("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?null==(t=l.image)?void 0:t.call(l,{image:e.image}):(0,r.Wm)("img",{src:e.image,alt:""},null)]),l.prepend&&(0,r.Wm)("div",{class:"v-navigation-drawer__prepend"},[null==(i=l.prepend)?void 0:i.call(l)]),(0,r.Wm)("div",{class:"v-navigation-drawer__content"},[null==(s=l.default)?void 0:s.call(l)]),l.append&&(0,r.Wm)("div",{class:"v-navigation-drawer__append"},[null==(o=l.append)?void 0:o.call(l)])]}),(0,r.Wm)(I.uT,{name:"fade-transition"},{default:()=>[O.value&&(D.value||x.value)&&(0,r.Wm)("div",{class:"v-navigation-drawer__scrim",style:W.value,onClick:()=>x.value=!1},null)]})])})),{}}})},9815:function(e,t,n){"use strict";n.d(t,{y:function(){return ge}});var r=n(3396),i=n(9242),s=n(3766),o=n(2385);const a=(0,s.U)({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function l(e,t){const n={},r=r=>()=>{if(!o.BR)return Promise.resolve(!0);const i="openDelay"===r;return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise((s=>{var o;const a=parseInt(null!=(o=e[r])?o:0,10);n[r]=window.setTimeout((()=>{null==t||t(i),s(i)}),a)}))};return{runCloseDelay:r("closeDelay"),runOpenDelay:r("openDelay")}}var u=n(4360),c=n(131),h=n(7514),d=n(4870);const f=(0,s.U)({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...a()});function p(e,t){let{isActive:n,isTop:i}=t;const s=(0,d.iH)();let a=!1,f=!1;const p=(0,r.Fl)((()=>e.openOnFocus||null==e.openOnFocus&&e.openOnHover)),v=(0,r.Fl)((()=>e.openOnClick||null==e.openOnClick&&!e.openOnHover&&!p.value)),{runOpenDelay:g,runCloseDelay:y}=l(e,(t=>{t!==(e.openOnHover&&a||p.value&&f)||e.openOnHover&&n.value&&!i.value||(n.value=t)})),_={click:e=>{e.stopPropagation(),s.value=e.currentTarget||e.target,n.value=!n.value},mouseenter:e=>{a=!0,s.value=e.currentTarget||e.target,g()},mouseleave:e=>{a=!1,y()},focus:e=>{o.Z1&&!e.target.matches(":focus-visible")||(f=!0,e.stopPropagation(),s.value=e.currentTarget||e.target,g())},blur:e=>{f=!1,e.stopPropagation(),y()}},b=(0,r.Fl)((()=>{const t={};return v.value&&(t.click=_.click),e.openOnHover&&(t.mouseenter=_.mouseenter,t.mouseleave=_.mouseleave),p.value&&(t.focus=_.focus,t.blur=_.blur),t})),w=(0,r.Fl)((()=>{const t={};if(e.openOnHover&&(t.mouseenter=()=>{a=!0,g()},t.mouseleave=()=>{a=!1,y()}),e.closeOnContentClick){const e=(0,r.f3)(u.N,null);t.click=()=>{n.value=!1,null==e||e.closeParents()}}return t}));(0,r.YP)(i,(t=>{t&&e.openOnHover&&!a&&(n.value=!1)}));const k=(0,d.iH)();(0,r.m0)((()=>{k.value&&(0,r.Y3)((()=>{const e=k.value;s.value=(0,c.rU)(e)?e.$el:e}))}));const C=(0,h.FN)("useActivator");let E;return(0,r.YP)((()=>!!e.activator),(t=>{t&&o.BR?(E=(0,d.B)(),E.run((()=>{m(e,C,{activatorEl:s,activatorEvents:b})}))):E&&E.stop()}),{flush:"post",immediate:!0}),{activatorEl:s,activatorRef:k,activatorEvents:b,contentEvents:w}}function m(e,t,n){let{activatorEl:i,activatorEvents:s}=n;function o(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps;t&&(Object.entries(s.value).forEach((e=>{let[n,r]=e;t.addEventListener(n,r)})),Object.keys(n).forEach((e=>{null==n[e]?t.removeAttribute(e):t.setAttribute(e,n[e])})))}function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps;t&&(Object.entries(s.value).forEach((e=>{let[n,r]=e;t.removeEventListener(n,r)})),Object.keys(n).forEach((e=>{t.removeAttribute(e)})))}function l(){var n;let r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.activator;if(s)if("parent"===s){var o,a;let e=null==t||null==(o=t.proxy)||null==(a=o.$el)?void 0:a.parentNode;while(e.hasAttribute("data-no-activator"))e=e.parentNode;r=e}else r="string"===typeof s?document.querySelector(s):"$el"in s?s.$el:s;return i.value=(null==(n=r)?void 0:n.nodeType)===Node.ELEMENT_NODE?r:null,i.value}(0,r.YP)((()=>e.activator),((e,t)=>{if(t&&e!==t){const e=l(t);e&&a(e)}e&&(0,r.Y3)((()=>o()))}),{immediate:!0}),(0,r.YP)((()=>e.activatorProps),(()=>{o()})),(0,d.EB)((()=>{a()}))}var v=n(4544);const g=(0,s.U)({eager:Boolean},"lazy");function y(e,t){const n=(0,d.iH)(!1),i=(0,r.Fl)((()=>n.value||e.eager||t.value));function s(){e.eager||(n.value=!1)}return(0,r.YP)(t,(()=>n.value=!0)),{isBooted:n,hasContent:i,onAfterLeave:s}}var _=n(3122);function b(e){while(e){if("fixed"===window.getComputedStyle(e).position)return!0;e=e.offsetParent}return!1}var w=n(2879);function k(e){while(e){if(E(e))return e;e=e.parentElement}return document.scrollingElement}function C(e){const t=[];while(e)E(e)&&t.push(e),e=e.parentElement;return t}function E(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return"scroll"===t.overflowY||"auto"===t.overflowY&&e.scrollHeight>e.clientHeight}var I=n(6033),S=n(6309);function T(e,t){return{x:e.x+t.x,y:e.y+t.y}}function x(e,t){return{x:e.x-t.x,y:e.y-t.y}}function A(e,t){if("top"===e.side||"bottom"===e.side){const{side:n,align:r}=e,i="left"===r?0:"center"===r?t.width/2:"right"===r?t.width:r,s="top"===n?0:"bottom"===n?t.height:n;return T({x:i,y:s},t)}if("left"===e.side||"right"===e.side){const{side:n,align:r}=e,i="left"===n?0:"right"===n?t.width:n,s="top"===r?0:"center"===r?t.height/2:"bottom"===r?t.height:r;return T({x:i,y:s},t)}return T({x:t.width/2,y:t.height/2},t)}const R={static:P,connected:L},N=(0,s.U)({locationStrategy:{type:[String,Function],default:"static",validator:e=>"function"===typeof e||e in R},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]});function O(e,t){const n=(0,d.iH)({}),i=(0,d.iH)();let s;function a(e){var t;null==(t=i.value)||t.call(i,e)}return(0,r.m0)((async()=>{var a;null==(a=s)||a.stop(),i.value=void 0,o.BR&&t.isActive.value&&e.locationStrategy&&(s=(0,d.B)(),await(0,r.Y3)(),s.run((()=>{var r,s;"function"===typeof e.locationStrategy?i.value=null==(r=e.locationStrategy(t,e,n))?void 0:r.updateLocation:i.value=null==(s=R[e.locationStrategy](t,e,n))?void 0:s.updateLocation})))})),o.BR&&window.addEventListener("resize",a,{passive:!0}),(0,d.EB)((()=>{var e;o.BR&&window.removeEventListener("resize",a),i.value=void 0,null==(e=s)||e.stop()})),{contentStyles:n,updateLocation:i}}function P(){}function D(e){const t=(0,_.G)(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function L(e,t,n){const i=b(e.activatorEl.value);i&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:s,preferredOrigin:a}=(0,c.S3)((()=>{const n=(0,w.wW)(t.location,e.isRtl.value),r="overlap"===t.origin?n:"auto"===t.origin?(0,w.tb)(n):(0,w.wW)(t.origin,e.isRtl.value);return n.side===r.side&&n.align===(0,w.aw)(r).align?{preferredAnchor:(0,w.Oe)(n),preferredOrigin:(0,w.Oe)(r)}:{preferredAnchor:n,preferredOrigin:r}})),[l,u,h,f]=["minWidth","minHeight","maxWidth","maxHeight"].map((e=>(0,r.Fl)((()=>{const n=parseFloat(t[e]);return isNaN(n)?1/0:n})))),p=(0,r.Fl)((()=>{if(Array.isArray(t.offset))return t.offset;if("string"===typeof t.offset){const e=t.offset.split(" ").map(parseFloat);return e.length<2&&e.push(0),e}return"number"===typeof t.offset?[t.offset,0]:[0,0]}));let m=!1;if(o.BR){const t=new ResizeObserver((()=>{m&&v()}));t.observe(e.activatorEl.value),t.observe(e.contentEl.value),(0,d.EB)((()=>{t.disconnect()}))}function v(){m=!1,requestAnimationFrame((()=>{requestAnimationFrame((()=>m=!0))}));const t=e.activatorEl.value.getBoundingClientRect(),r=D(e.contentEl.value),i=C(e.contentEl.value),o=12;i.length||(i.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(r.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),r.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const d=i.reduce(((e,t)=>{const n=t.getBoundingClientRect(),r=new S.x({x:t===document.documentElement?0:n.x,y:t===document.documentElement?0:n.y,width:t.clientWidth,height:t.clientHeight});return e?new S.x({x:Math.max(e.left,r.left),y:Math.max(e.top,r.top),width:Math.min(e.right,r.right)-Math.max(e.left,r.left),height:Math.min(e.bottom,r.bottom)-Math.max(e.top,r.top)}):r}),void 0);d.x+=o,d.y+=o,d.width-=2*o,d.height-=2*o;let v={anchor:s.value,origin:a.value};function g(e){const n=new S.x(r),i=A(e.anchor,t),s=A(e.origin,n);let{x:o,y:a}=x(i,s);switch(e.anchor.side){case"top":a-=p.value[0];break;case"bottom":a+=p.value[0];break;case"left":o-=p.value[0];break;case"right":o+=p.value[0];break}switch(e.anchor.align){case"top":a-=p.value[1];break;case"bottom":a+=p.value[1];break;case"left":o-=p.value[1];break;case"right":o+=p.value[1];break}n.x+=o,n.y+=a,n.width=Math.min(n.width,h.value),n.height=Math.min(n.height,f.value);const l=(0,S.p)(n,d);return{overflows:l,x:o,y:a}}let y=0,_=0;const b={x:0,y:0},k={x:!1,y:!1};let E=-1;while(1){if(E++>10){(0,I.N6)("Infinite loop detected in connectedLocationStrategy");break}const{x:e,y:t,overflows:n}=g(v);y+=e,_+=t,r.x+=e,r.y+=t;{const e=(0,w.dd)(v.anchor),t=n.x.before||n.x.after,r=n.y.before||n.y.after;let i=!1;if(["x","y"].forEach((s=>{if("x"===s&&t&&!k.x||"y"===s&&r&&!k.y){const t={anchor:{...v.anchor},origin:{...v.origin}},r="x"===s?"y"===e?w.aw:w.tb:"y"===e?w.tb:w.aw;t.anchor=r(t.anchor),t.origin=r(t.origin);const{overflows:o}=g(t);(o[s].before<=n[s].before&&o[s].after<=n[s].after||o[s].before+o[s].after<(n[s].before+n[s].after)/2)&&(v=t,i=k[s]=!0)}})),i)continue}n.x.before&&(y+=n.x.before,r.x+=n.x.before),n.x.after&&(y-=n.x.after,r.x-=n.x.after),n.y.before&&(_+=n.y.before,r.y+=n.y.before),n.y.after&&(_-=n.y.after,r.y-=n.y.after);{const e=(0,S.p)(r,d);b.x=d.width-e.x.before-e.x.after,b.y=d.height-e.y.before-e.y.after,y+=e.x.before,r.x+=e.x.before,_+=e.y.before,r.y+=e.y.before}break}const T=(0,w.dd)(v.anchor);Object.assign(n.value,{"--v-overlay-anchor-origin":`${v.anchor.side} ${v.anchor.align}`,transformOrigin:`${v.origin.side} ${v.origin.align}`,top:(0,c.kb)(F(_)),left:(0,c.kb)(F(y)),minWidth:(0,c.kb)("y"===T?Math.min(l.value,t.width):l.value),maxWidth:(0,c.kb)(M((0,c.uZ)(b.x,l.value===1/0?0:l.value,h.value))),maxHeight:(0,c.kb)(M((0,c.uZ)(b.y,u.value===1/0?0:u.value,f.value)))})}return(0,r.YP)((()=>[s.value,a.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight]),(()=>v()),{immediate:!i}),i&&(0,r.Y3)((()=>v())),requestAnimationFrame((()=>{n.value.maxHeight&&v()})),{updateLocation:v}}function F(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function M(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let V=!0;const U=[];function B(e){!V||U.length?(U.push(e),$()):(V=!1,e(),$())}let W=-1;function $(){cancelAnimationFrame(W),W=requestAnimationFrame((()=>{const e=U.shift();e&&e(),U.length?$():V=!0}))}const j={none:null,close:z,block:G,reposition:K},q=(0,s.U)({scrollStrategy:{type:[String,Function],default:"block",validator:e=>"function"===typeof e||e in j}});function H(e,t){if(!o.BR)return;let n;(0,r.m0)((async()=>{var i;null==(i=n)||i.stop(),t.isActive.value&&e.scrollStrategy&&(n=(0,d.B)(),await(0,r.Y3)(),n.run((()=>{var n;"function"===typeof e.scrollStrategy?e.scrollStrategy(t):null==(n=j[e.scrollStrategy])||n.call(j,t)})))}))}function z(e){var t;function n(t){e.isActive.value=!1}Y(null!=(t=e.activatorEl.value)?t:e.contentEl.value,n)}function G(e){var t;const n=[...new Set([...C(e.activatorEl.value),...C(e.contentEl.value)])].filter((e=>!e.classList.contains("v-overlay-scroll-blocked"))),r=window.innerWidth-document.documentElement.offsetWidth,i=(e=>E(e)&&e)((null==(t=e.root.value)?void 0:t.offsetParent)||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),n.forEach(((e,t)=>{e.style.setProperty("--v-body-scroll-x",(0,c.kb)(-e.scrollLeft)),e.style.setProperty("--v-body-scroll-y",(0,c.kb)(-e.scrollTop)),e.style.setProperty("--v-scrollbar-offset",(0,c.kb)(r)),e.classList.add("v-overlay-scroll-blocked")})),(0,d.EB)((()=>{n.forEach(((e,t)=>{const n=parseFloat(e.style.getPropertyValue("--v-body-scroll-x")),r=parseFloat(e.style.getPropertyValue("--v-body-scroll-y"));e.style.removeProperty("--v-body-scroll-x"),e.style.removeProperty("--v-body-scroll-y"),e.style.removeProperty("--v-scrollbar-offset"),e.classList.remove("v-overlay-scroll-blocked"),e.scrollLeft=-n,e.scrollTop=-r})),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")}))}function K(e){var t;let n=!1,r=-1;function i(t){B((()=>{var r,i;const s=performance.now();null==(r=(i=e.updateLocation).value)||r.call(i,t);const o=performance.now()-s;n=o/(1e3/60)>2}))}Y(null!=(t=e.activatorEl.value)?t:e.contentEl.value,(e=>{n?(cancelAnimationFrame(r),r=requestAnimationFrame((()=>{r=requestAnimationFrame((()=>{i(e)}))}))):i(e)}))}function Y(e,t){const n=[document,...C(e)];n.forEach((e=>{e.addEventListener("scroll",t,{passive:!0})})),(0,d.EB)((()=>{n.forEach((e=>{e.removeEventListener("scroll",t)}))}))}var J=n(7041),Q=n(4906),X=n(6183),Z=n(2370),ee=n(8717),te=n(9903);function ne(e,t){let n;(0,r.YP)(e,(e=>{var r;e&&!n?(n=(0,d.B)(),n.run(t)):(null==(r=n)||r.stop(),n=void 0)}),{immediate:!0})}const re=(0,d.qj)([]);function ie(e,t){const n=(0,h.FN)("useStack"),i=(0,d.iH)(+t.value);ne(e,(()=>{var e;const r=null==(e=re[re.length-1])?void 0:e[1];i.value=r?r+10:+t.value,re.push([n,i.value]),(0,d.EB)((()=>{const e=re.findIndex((e=>e[0]===n));re.splice(e,1)}))}));const s=(0,d.iH)(!0);return(0,r.m0)((()=>{var e;const t=(0,d.IU)(null==(e=re[re.length-1])?void 0:e[0])===n;setTimeout((()=>s.value=t))})),{isTop:(0,d.OT)(s),stackStyles:(0,r.Fl)((()=>({zIndex:i.value})))}}function se(e){const t=(0,r.Fl)((()=>{const t=e.value;if(!0===t||!o.BR)return;const n=!1===t?document.body:"string"===typeof t?document.querySelector(t):t;if(null!=n){if(!se.cache.has(n)){const e=document.createElement("div");e.className="v-overlay-container",n.appendChild(e),se.cache.set(n,e)}return se.cache.get(n)}(0,r.ZK)(`Unable to locate target ${t}`)}));return{teleportTarget:t}}function oe(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function ae(){return!0}function le(e,t,n){if(!e||!1===ue(e,n))return!1;const r=oe(t);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===e.target)return!1;const i=("object"===typeof n.value&&n.value.include||(()=>[]))();return i.push(t),!i.some((t=>null==t?void 0:t.contains(e.target)))}function ue(e,t){const n="object"===typeof t.value&&t.value.closeConditional||ae;return n(e)}function ce(e,t,n){const r="function"===typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&le(e,t,n)&&setTimeout((()=>{ue(e,n)&&r&&r(e)}),0)}function he(e,t){const n=oe(e);t(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}se.cache=new WeakMap;const de={mounted(e,t){const n=n=>ce(n,e,t),r=n=>{e._clickOutside.lastMousedownWasOutside=le(n,e,t)};he(e,(e=>{e.addEventListener("click",n,!0),e.addEventListener("mousedown",r,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:r}},unmounted(e,t){e._clickOutside&&(he(e,(n=>{var r;if(!n||null==(r=e._clickOutside)||!r[t.instance.$.uid])return;const{onClick:i,onMousedown:s}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",i,!0),n.removeEventListener("mousedown",s,!0)})),delete e._clickOutside[t.instance.$.uid])}};var fe=n(1107),pe=n(8587),me=n(9888);function ve(e){const{modelValue:t,color:n,...s}=e;return(0,r.Wm)(i.uT,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&(0,r.Wm)("div",(0,r.dG)({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},s),null)]})}const ge=(0,fe.e)()({name:"VOverlay",directives:{ClickOutside:de},inheritAttrs:!1,props:{absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...f(),...(0,v.x)(),...g(),...N(),...q(),...(0,J.x$)(),...(0,Q.X)()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:s,emit:a}=t;const l=(0,ee.z)(e,"modelValue"),u=(0,r.Fl)({get:()=>l.value,set:t=>{t&&e.disabled||(l.value=t)}}),{teleportTarget:h}=se((0,r.Fl)((()=>e.attach||e.contained))),{themeClasses:f}=(0,J.ER)(e),{rtlClasses:m,isRtl:g}=(0,te.Vw)(),{hasContent:_,onAfterLeave:b}=y(e,u),w=(0,Z.Y5)((0,r.Fl)((()=>"string"===typeof e.scrim?e.scrim:null))),{isTop:C,stackStyles:E}=ie(u,(0,d.Vh)(e,"zIndex")),{activatorEl:I,activatorRef:S,activatorEvents:T,contentEvents:x}=p(e,{isActive:u,isTop:C}),{dimensionStyles:A}=(0,v.$)(e);(0,r.YP)((()=>e.disabled),(e=>{e&&(u.value=!1)}));const R=(0,d.iH)(),N=(0,d.iH)(),{contentStyles:P,updateLocation:D}=O(e,{isRtl:g,contentEl:N,activatorEl:I,isActive:u});function L(t){a("click:outside",t),e.persistent?B():u.value=!1}function F(){return u.value&&C.value}function M(t){"Escape"===t.key&&C.value&&(e.persistent?B():u.value=!1)}H(e,{root:R,contentEl:N,activatorEl:I,isActive:u,updateLocation:D}),o.BR&&(0,r.YP)(u,(e=>{e?window.addEventListener("keydown",M):window.removeEventListener("keydown",M)}),{immediate:!0});const V=(0,X.tv)();ne((()=>e.closeOnBack),(()=>{(0,X.Kx)(V,(t=>{C.value&&u.value?(t(!1),e.persistent?B():u.value=!1):t()}))}));const U=(0,d.iH)();function B(){var t;e.noClickAnimation||null==(t=N.value)||t.animate([{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:pe.Ly})}return(0,r.YP)((()=>u.value&&(e.absolute||e.contained)&&null==h.value),(e=>{if(e){const e=k(R.value);e&&e!==document.scrollingElement&&(U.value=e.scrollTop)}})),(0,me.L)((()=>{var t,l;return(0,r.Wm)(r.HY,null,[null==(t=n.activator)?void 0:t.call(n,{isActive:u.value,props:(0,r.dG)({ref:S},(0,r.mx)(T.value),e.activatorProps)}),o.BR&&(0,r.Wm)(r.lR,{disabled:!h.value,to:h.value},{default:()=>[_.value&&(0,r.Wm)("div",(0,r.dG)({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":u.value,"v-overlay--contained":e.contained},f.value,m.value],style:[E.value,{top:(0,c.kb)(U.value)}],ref:R},s),[(0,r.Wm)(ve,{color:w,modelValue:u.value&&!!e.scrim},null),(0,r.Wm)(Q.J,{appear:!0,persisted:!0,transition:e.transition,target:I.value,onAfterLeave:()=>{b(),a("afterLeave")}},{default:()=>[(0,r.wy)((0,r.Wm)("div",(0,r.dG)({ref:N,class:["v-overlay__content",e.contentClass],style:[A.value,P.value]},(0,r.mx)(x.value),e.contentProps),[null==(l=n.default)?void 0:l.call(n,{isActive:u})]),[[i.F8,u.value],[(0,r.Q2)("click-outside"),{handler:L,closeConditional:F,include:()=>[I.value]}]])]})])]})])})),{activatorEl:I,animateClick:B,contentEl:N,isTop:C,updateLocation:D}}})},5958:function(e,t,n){"use strict";n.d(t,{K:function(){return g}});n(6699);var r=n(3396),i=n(870),s=n(4960),o=n(9694),a=n(9374),l=n(1138),u=n(7041),c=n(5738),h=n(8717),d=n(4870),f=n(1107),p=n(131),m=n(7514),v=n(9888);const g=(0,f.e)()({name:"VRating",props:{name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:s.lE,default:"$ratingEmpty"},fullIcon:{type:s.lE,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:Number,default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...(0,o.f)(),...(0,a.Z)(),...(0,l.Q)(),...(0,u.x$)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{t:s}=(0,c.bU)(),{themeClasses:o}=(0,u.ER)(e),a=(0,h.z)(e,"modelValue"),l=(0,r.Fl)((()=>(0,p.MT)(Number(e.length),1))),f=(0,r.Fl)((()=>l.value.flatMap((t=>e.halfIncrements?[t-.5,t]:[t])))),g=(0,d.iH)(-1),y=(0,d.iH)(-1),_=(0,d.iH)();let b=!1;const w=(0,r.Fl)((()=>f.value.map((t=>{var n;const r=e.hover&&g.value>-1,i=a.value>=t,s=g.value>=t,o=r?s:i,l=o?e.fullIcon:e.emptyIcon,u=null!=(n=e.activeColor)?n:e.color,c=i||s?u:e.color;return{isFilled:i,isHovered:s,icon:l,color:c}})))),k=(0,r.Fl)((()=>[0,...f.value].map((t=>{function n(){g.value=t}function r(){g.value=-1}function i(){var e;0===t&&0===a.value?null==(e=_.value)||e.focus():y.value=t}function s(){b||(y.value=-1)}function o(){e.disabled||e.readonly||(a.value=a.value===t&&e.clearable?0:t)}return{onMouseenter:e.hover?n:void 0,onMouseleave:e.hover?r:void 0,onFocus:i,onBlur:s,onClick:o}}))));function C(){b=!0}function E(){b=!1}const I=(0,r.Fl)((()=>{var t;return null!=(t=e.name)?t:`v-rating-${(0,m.sq)()}`}));function S(t){var o,l;let{value:u,index:c,showStar:h=!0}=t;const{onMouseenter:d,onMouseleave:f,onFocus:p,onBlur:m,onClick:v}=k.value[c+1],g=`${I.value}-${String(u).replace(".","-")}`,y={color:null==(o=w.value[c])?void 0:o.color,density:e.density,disabled:e.disabled,icon:null==(l=w.value[c])?void 0:l.icon,ripple:e.ripple,size:e.size,tag:"span",variant:"plain"};return(0,r.Wm)(r.HY,null,[(0,r.Wm)("label",{for:g,class:{"v-rating__item--half":e.halfIncrements&&u%1>0,"v-rating__item--full":e.halfIncrements&&u%1===0},onMousedown:C,onMouseup:E,onMouseenter:d,onMouseleave:f},[(0,r.Wm)("span",{class:"v-rating__hidden"},[s(e.itemAriaLabel,u,e.length)]),h?n.item?n.item({...w.value[c],props:y,value:u,index:c}):(0,r.Wm)(i.T,y,null):void 0]),(0,r.Wm)("input",{class:"v-rating__hidden",name:I.value,id:g,type:"radio",value:u,checked:a.value===u,onClick:v,onFocus:p,onBlur:m,ref:0===c?_:void 0,readonly:e.readonly,disabled:e.disabled},null)])}function T(e){return n["item-label"]?n["item-label"](e):e.label?(0,r.Wm)("span",null,[e.label]):(0,r.Wm)("span",null,[(0,r.Uk)(" ")])}return(0,v.L)((()=>{var t;const i=!(null==(t=e.itemLabels)||!t.length)||n["item-label"];return(0,r.Wm)(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},o.value]},{default:()=>[(0,r.Wm)(S,{value:0,index:-1,showStar:!1},null),l.value.map(((t,n)=>{var s,o;return(0,r.Wm)("div",{class:"v-rating__wrapper"},[i&&"top"===e.itemLabelPosition?T({value:t,index:n,label:null==(s=e.itemLabels)?void 0:s[n]}):void 0,(0,r.Wm)("div",{class:["v-rating__item",{"v-rating__item--focused":Math.ceil(y.value)===t}]},[e.halfIncrements?(0,r.Wm)(r.HY,null,[(0,r.Wm)(S,{value:t-.5,index:2*n},null),(0,r.Wm)(S,{value:t,index:2*n+1},null)]):(0,r.Wm)(S,{value:t,index:n},null)]),i&&"bottom"===e.itemLabelPosition?T({value:t,index:n,label:null==(o=e.itemLabels)?void 0:o[n]}):void 0])}))]})})),{}}})},45:function(e,t,n){"use strict";n.d(t,{r:function(){return H}});n(6699);var r=n(3396),i=n(2583),s=n(1550),o=n(9242),a=n(652),l=n(1970),u=n(1138),c=n(7041),h=n(5221),d=n(8434),f=n(1107),p=n(131),m=n(9888),v=n(4870);const g=Symbol.for("vuetify:v-chip-group");(0,f.a)({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:p.vZ},...(0,l.k4)({selectedClass:"v-chip--selected"}),...(0,u.Q)(),...(0,c.x$)(),...(0,h.bk)({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:i}=(0,c.ER)(e),{isSelected:s,select:o,next:a,prev:u,selected:h}=(0,l._v)(e,g);return(0,d.AF)({VChip:{color:(0,v.Vh)(e,"color"),filter:(0,v.Vh)(e,"filter"),variant:(0,v.Vh)(e,"variant")}}),(0,m.L)((()=>{var t;return(0,r.Wm)(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},i.value]},{default:()=>[null==(t=n.default)?void 0:t.call(n,{isSelected:s,select:o,next:a,prev:u,selected:h.value})]})})),{}}});var y=n(836),_=n(8952),b=n(3289),w=n(2718),k=n(9694),C=n(2465),E=n(4231),I=n(6183),S=n(9374),T=n(8717),x=n(4960),A=n(3824);const R=(0,f.a)({name:"VChip",directives:{Ripple:A.H},props:{activeClass:String,appendAvatar:String,appendIcon:x.lE,closable:Boolean,closeIcon:{type:x.lE,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,pill:Boolean,prependAvatar:String,prependIcon:x.lE,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},...(0,w.m)(),...(0,k.f)(),...(0,C.c)(),...(0,l.YQ)(),...(0,E.I)(),...(0,I.GN)(),...(0,S.Z)(),...(0,u.Q)({tag:"span"}),...(0,c.x$)(),...(0,h.bk)({variant:"tonal"})},emits:{"click:close":e=>!0,"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:i,slots:s}=t;const{borderClasses:u}=(0,w.P)(e),{colorClasses:d,colorStyles:f,variantClasses:p}=(0,h.c1)(e),{densityClasses:m}=(0,k.t)(e),{elevationClasses:v}=(0,C.Y)(e),{roundedClasses:x}=(0,E.b)(e),{sizeClasses:A}=(0,S.t)(e),{themeClasses:R}=(0,c.ER)(e),N=(0,T.z)(e,"modelValue"),O=(0,l.Yt)(e,g,!1),P=(0,I.nB)(e,n);function D(e){N.value=!1,i("click:close",e)}return()=>{var t,n;const i=P.isLink.value?"a":e.tag,l=!!(s.append||e.appendIcon||e.appendAvatar),c=!(!s.close&&!e.closable),g=!(!s.filter&&!e.filter)&&O,w=!!(s.prepend||e.prependIcon||e.prependAvatar),k=!O||O.isSelected.value,C=!e.disabled&&(!!O||P.isClickable.value||e.link),E=e.link?e.link:null==O?void 0:O.toggle;return N.value&&(0,r.wy)((0,r.Wm)(i,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":C,"v-chip--filter":g,"v-chip--pill":e.pill},R.value,u.value,k?d.value:void 0,m.value,v.value,x.value,A.value,p.value,null==O?void 0:O.selectedClass.value],style:[k?f.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:P.href.value,onClick:C&&E},{default:()=>[(0,h.Ux)(C,"v-chip"),g&&(0,r.Wm)(y.z,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[(0,r.Wm)(_.Zq,null,{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-chip__filter"},[s.filter?s.filter():(0,r.Wm)(b.t,null,null)]),[[o.F8,O.isSelected.value]])]})]}),w&&(0,r.Wm)(y.z,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[s.prepend?(0,r.Wm)("div",{class:"v-chip__prepend"},[s.prepend()]):e.prependAvatar?(0,r.Wm)(a.V,{start:!0},null):e.prependIcon?(0,r.Wm)(b.t,{start:!0},null):void 0]}),null!=(t=null==(n=s.default)?void 0:n.call(s,{isSelected:null==O?void 0:O.isSelected.value,selectedClass:null==O?void 0:O.selectedClass.value,select:null==O?void 0:O.select,toggle:null==O?void 0:O.toggle,value:null==O?void 0:O.value.value,disabled:e.disabled}))?t:e.text,l&&(0,r.Wm)(y.z,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[s.append?(0,r.Wm)("div",{class:"v-chip__append"},[s.append()]):e.appendAvatar?(0,r.Wm)(a.V,{end:!0},null):e.appendIcon?(0,r.Wm)(b.t,{end:!0},null):void 0]}),c&&(0,r.Wm)(y.z,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[(0,r.Wm)("div",{class:"v-chip__close",onClick:D},[s.close?s.close():(0,r.Wm)(b.t,null,null)])]})]}),[[(0,r.Q2)("ripple"),C&&e.ripple,null]])}}});var N=n(7948),O=n(8319),P=n(9815),D=n(4906),L=n(6199),F=n(5975),M=n(7514),V=n(4360);const U=(0,f.e)()({name:"VMenu",inheritAttrs:!1,props:{modelValue:Boolean,id:String,...(0,D.X)({transition:{component:i.v}})},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:i}=t;const s=(0,T.z)(e,"modelValue"),{scopeId:o}=(0,F.a)(),a=(0,M.sq)(),l=(0,r.Fl)((()=>e.id||`v-menu-${a}`)),u=(0,v.iH)(),c=(0,r.f3)(V.N,null);let h=0;function d(){null==c||c.closeParents()}return(0,r.JJ)(V.N,{register(){++h},unregister(){--h},closeParents(){setTimeout((()=>{h||(s.value=!1,null==c||c.closeParents())}),40)}}),(0,r.YP)(s,(e=>{e?null==c||c.register():null==c||c.unregister()})),(0,m.L)((()=>(0,r.Wm)(P.y,(0,r.dG)({ref:u,modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,class:["v-menu"],transition:e.transition,absolute:!0,closeOnContentClick:!0,locationStrategy:"connected",scrollStrategy:"reposition",scrim:!1,openDelay:"300",closeDelay:"250",activatorProps:{"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":l.value},"onClick:outside":d},o,n),{default:i.default,activator:i.activator}))),(0,L.Z)({id:l},u)}});var B=n(5869),W=n(6185),$=n(5738),j=n(3766);const q=(0,j.U)({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:x.lE,default:"$dropdown"},menuProps:{type:Object},modelValue:{type:null,default:()=>[]},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,...(0,W.S1)({itemChildren:!1})},"select"),H=(0,f.e)()({name:"VSelect",props:{...q(),...(0,D.X)({transition:{component:i.v}})},emits:{"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,t){let{slots:n}=t;const{t:i}=(0,$.bU)(),o=(0,v.iH)(),a=(0,T.z)(e,"menu"),{items:l,transformIn:u,transformOut:c}=(0,W.Ce)(e),h=(0,T.z)(e,"modelValue",[],(e=>u((0,p.FT)(e))),(t=>{var n;const r=c(t);return e.multiple?r:null!=(n=r[0])?n:null})),d=(0,r.Fl)((()=>h.value.map((e=>l.value.find((t=>t.value===e.value))||e)))),f=(0,r.Fl)((()=>d.value.map((e=>e.props.value))));function g(t){h.value=[],e.openOnClear&&(a.value=!0)}function _(){e.hideNoData&&!l.value.length||(a.value=!0)}function b(e){["Enter","ArrowDown"," "].includes(e.key)&&(a.value=!0),["Escape","Tab"].includes(e.key)&&(a.value=!1)}function w(t){if(e.multiple){const e=f.value.findIndex((e=>e===t.value));if(-1===e)h.value=[...h.value,t];else{const t=[...h.value];t.splice(e,1),h.value=t}}else h.value=[t],a.value=!1}return(0,m.L)((()=>{const t=!(!e.chips&&!n.chip);return(0,r.Wm)(B.h,{ref:o,modelValue:h.value.map((e=>e.props.value)).join(", "),"onUpdate:modelValue":e=>{null==e&&(h.value=[])},validationValue:e.modelValue,class:["v-select",{"v-select--active-menu":a.value,"v-select--chips":!!e.chips,["v-select--"+(e.multiple?"multiple":"single")]:!0}],appendInnerIcon:e.menuIcon,readonly:!0,"onClick:clear":g,"onClick:input":_,"onClick:control":_,onBlur:()=>a.value=!1,onKeydown:b},{...n,default:()=>{var o,u;return(0,r.Wm)(r.HY,null,[(0,r.Wm)(U,(0,r.dG)({modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,activator:"parent",contentClass:"v-select__content",eager:e.eager,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[(0,r.Wm)(N.i,{selected:f.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault()},{default:()=>[!l.value.length&&!e.hideNoData&&(null!=(o=null==(u=n["no-data"])?void 0:u.call(n))?o:(0,r.Wm)(O.l,{title:i(e.noDataText)},null)),l.value.map(((t,i)=>{var o,a;return null!=(o=null==(a=n.item)?void 0:a.call(n,{item:t,index:i,props:(0,r.dG)(t.props,{onClick:()=>w(t)})}))?o:(0,r.Wm)(O.l,(0,r.dG)({key:i},t.props,{onClick:()=>w(t)}),{prepend:t=>{let{isSelected:n}=t;return e.multiple?(0,r.Wm)(s.pM,{modelValue:n,ripple:!1},null):void 0}})}))]})]}),d.value.map(((i,s)=>{function o(e){e.stopPropagation(),e.preventDefault(),w(i)}const a={"onClick:close":o,modelValue:!0};return(0,r.Wm)("div",{key:s,class:"v-select__selection"},[t?(0,r.Wm)(y.z,{defaults:{VChip:{closable:e.closableChips,size:"small",text:i.title}}},{default:()=>[n.chip?n.chip({item:i,index:s,props:a}):(0,r.Wm)(R,a,null)]}):n.selection?n.selection({item:i,index:s}):(0,r.Wm)("span",{class:"v-select__selection-text"},[i.title,e.multiple&&s<d.value.length-1&&(0,r.Wm)("span",{class:"v-select__selection-comma"},[(0,r.Uk)(",")])])])}))])}})})),(0,L.Z)({menu:a,select:w},o)}})},6353:function(e,t,n){"use strict";n.d(t,{R:function(){return S}});var r=n(3396),i=(n(1703),n(6699),n(9242)),s=n(8952),o=n(2465),a=n(4231),l=n(9903),u=n(3766),c=n(131),h=n(4870);const d=Symbol.for("vuetify:v-slider");function f(e,t,n){const r="vertical"===n,i=t.getBoundingClientRect(),s="touches"in e?e.touches[0]:e;return r?s.clientY-(i.top+i.height/2):s.clientX-(i.left+i.width/2)}function p(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const m=(0,u.U)({disabled:Boolean,error:Boolean,readonly:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>"boolean"===typeof e||"always"===e},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>"boolean"===typeof e||"always"===e},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...(0,a.I)(),...(0,o.c)({elevation:2})},"slider"),v=e=>{let{props:t,handleSliderMouseUp:n,handleMouseMove:i,getActiveThumb:s}=e;const{isRtl:o}=(0,l.Vw)(),a=(0,r.Fl)((()=>o.value!==t.reverse)),u=(0,r.Fl)((()=>{let e=o.value?"rtl":"ltr";return t.reverse&&(e="rtl"===e?"ltr":"rtl"),e})),m=(0,r.Fl)((()=>parseFloat(t.min))),v=(0,r.Fl)((()=>parseFloat(t.max))),g=(0,r.Fl)((()=>t.step>0?parseFloat(t.step):0)),y=(0,r.Fl)((()=>{const e=g.value.toString().trim();return e.includes(".")?e.length-e.indexOf(".")-1:0})),_=(0,r.Fl)((()=>parseInt(t.thumbSize,10))),b=(0,r.Fl)((()=>parseInt(t.tickSize,10))),w=(0,r.Fl)((()=>parseInt(t.trackSize,10))),k=(0,r.Fl)((()=>(v.value-m.value)/g.value)),C=(0,h.Vh)(t,"disabled"),E=(0,r.Fl)((()=>"vertical"===t.direction)),I=(0,r.Fl)((()=>{var e;return t.error||t.disabled?void 0:null!=(e=t.thumbColor)?e:t.color})),S=(0,r.Fl)((()=>{var e;return t.error||t.disabled?void 0:null!=(e=t.trackColor)?e:t.color})),T=(0,r.Fl)((()=>{var e;return t.error||t.disabled?void 0:null!=(e=t.trackFillColor)?e:t.color})),x=(0,h.iH)(!1),A=(0,h.iH)(0),R=(0,h.iH)(),N=(0,h.iH)();function O(e){if(g.value<=0)return e;const t=(0,c.uZ)(e,m.value,v.value),n=m.value%g.value,r=Math.round((t-n)/g.value)*g.value+n;return parseFloat(Math.min(r,v.value).toFixed(y.value))}function P(e){var n;const r="vertical"===t.direction,i=r?"top":"left",s=r?"height":"width",o=r?"clientY":"clientX",{[i]:l,[s]:u}=null==(n=R.value)?void 0:n.$el.getBoundingClientRect(),c=p(e,o);let h=Math.min(Math.max((c-l-A.value)/u,0),1)||0;return(r||a.value)&&(h=1-h),O(m.value+h*(v.value-m.value))}let D=!1;const L=e=>{D||(A.value=0,n(P(e))),x.value=!1,D=!1,A.value=0},F=e=>{N.value=s(e),N.value&&(N.value.focus(),x.value=!0,N.value.contains(e.target)?(D=!0,A.value=f(e,N.value,t.direction)):(A.value=0,i(P(e))))},M={passive:!0,capture:!0};function V(e){D=!0,i(P(e))}function U(e){e.stopPropagation(),e.preventDefault(),L(e),window.removeEventListener("mousemove",V,M),window.removeEventListener("mouseup",U)}function B(e){e.stopPropagation(),e.preventDefault(),L(e),window.removeEventListener("touchmove",V,M),window.removeEventListener("touchend",B)}function W(e){F(e),window.addEventListener("touchmove",V,M),window.addEventListener("touchend",B,{passive:!1})}function $(e){e.preventDefault(),F(e),window.addEventListener("mousemove",V,M),window.addEventListener("mouseup",U,{passive:!1})}const j=e=>{const t=(e-m.value)/(v.value-m.value)*100;return(0,c.uZ)(isNaN(t)?0:t,0,100)},q=(0,r.Fl)((()=>t.ticks?Array.isArray(t.ticks)?t.ticks.map((e=>({value:e,position:j(e),label:e.toString()}))):Object.keys(t.ticks).map((e=>({value:parseInt(e,10),position:j(parseInt(e,10)),label:t.ticks[e]}))):k.value!==1/0?(0,c.MT)(k.value+1).map((e=>{const t=m.value+e*g.value;return{value:t,position:j(t)}})):[])),H=(0,r.Fl)((()=>q.value.some((e=>{let{label:t}=e;return!!t})))),z={activeThumbRef:N,color:(0,h.Vh)(t,"color"),decimals:y,disabled:C,direction:(0,h.Vh)(t,"direction"),elevation:(0,h.Vh)(t,"elevation"),hasLabels:H,horizontalDirection:u,isReversed:a,min:m,max:v,mousePressed:x,numTicks:k,onSliderMousedown:$,onSliderTouchstart:W,parsedTicks:q,parseMouseMove:P,position:j,readonly:(0,h.Vh)(t,"readonly"),rounded:(0,h.Vh)(t,"rounded"),roundValue:O,showTicks:(0,h.Vh)(t,"showTicks"),startOffset:A,step:g,thumbSize:_,thumbColor:I,thumbLabel:(0,h.Vh)(t,"thumbLabel"),ticks:(0,h.Vh)(t,"ticks"),tickSize:b,trackColor:S,trackContainerRef:R,trackFillColor:T,trackSize:w,vertical:E};return(0,r.JJ)(d,z),z};var g=n(3824),y=n(2370),_=n(1107),b=n(9888);const w=(0,_.a)({name:"VSliderThumb",directives:{Ripple:g.Z},props:{focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0}},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n,emit:a}=t;const l=(0,r.f3)(d);if(!l)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:u,step:h,vertical:f,disabled:p,thumbSize:m,thumbLabel:v,direction:g,readonly:_,elevation:w,isReversed:k,horizontalDirection:C,mousePressed:E,decimals:I}=l,{textColorClasses:S,textColorStyles:T}=(0,y.rY)(u),{pageup:x,pagedown:A,end:R,home:N,left:O,right:P,down:D,up:L}=c.ff,F=[x,A,R,N,O,P,D,L],M=(0,r.Fl)((()=>h.value?[1,2,3]:[1,5,10]));function V(t,n){if(!F.includes(t.key))return;t.preventDefault();const r=h.value||.1,i=(e.max-e.min)/r;if([O,P,D,L].includes(t.key)){const e=k.value?[O,L]:[P,L],i=e.includes(t.key)?1:-1,s=t.shiftKey?2:t.ctrlKey?1:0;n+=i*r*M.value[s]}else if(t.key===N)n=e.min;else if(t.key===R)n=e.max;else{const e=t.key===A?1:-1;n-=e*r*(i>100?i/10:10)}return Math.max(e.min,Math.min(e.max,n))}function U(t){const n=V(t,e.modelValue);null!=n&&a("update:modelValue",n)}return(0,b.L)((()=>{var t,a;const l=(0,c.kb)(f.value?100-e.position:e.position,"%"),u=f.value?"block":"inline",{elevationClasses:d}=(0,o.Y)((0,r.Fl)((()=>p.value?void 0:w.value)));return(0,r.Wm)("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&E.value}],style:{[`inset-${u}-start`]:`calc(${l} - var(--v-slider-thumb-size) / 2)`,"--v-slider-thumb-size":(0,c.kb)(m.value),direction:f.value?void 0:C.value},role:"slider",tabindex:p.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":_.value,"aria-orientation":g.value,onKeydown:_.value?void 0:U},[(0,r.Wm)("div",{class:["v-slider-thumb__surface",S.value,d.value],style:{...T.value}},null),(0,r.wy)((0,r.Wm)("div",{class:["v-slider-thumb__ripple",S.value],style:T.value},null),[[(0,r.Q2)("ripple"),!0,null,{circle:!0,center:!0}]]),(0,r.Wm)(s.T0,{origin:"bottom center"},{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-slider-thumb__label-container"},[(0,r.Wm)("div",{class:["v-slider-thumb__label"]},[(0,r.Wm)("div",null,[null!=(t=null==(a=n["thumb-label"])?void 0:a.call(n,{modelValue:e.modelValue}))?t:e.modelValue.toFixed(h.value?I.value:1)])])]),[[i.F8,v.value&&e.focused||"always"===v.value]])]})])})),{}}}),k=(0,_.a)({name:"VSliderTrack",props:{start:{type:Number,required:!0},stop:{type:Number,required:!0}},emits:{},setup(e,t){let{slots:n}=t;const i=(0,r.f3)(d);if(!i)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:s,horizontalDirection:o,parsedTicks:l,rounded:u,showTicks:h,tickSize:f,trackColor:p,trackFillColor:m,trackSize:v,vertical:g}=i,{roundedClasses:_}=(0,a.b)(u),{backgroundColorClasses:w,backgroundColorStyles:k}=(0,y.Y5)(m),{backgroundColorClasses:C,backgroundColorStyles:E}=(0,y.Y5)(p),I=(0,r.Fl)((()=>"inset-"+(g.value?"block-end":"inline-start"))),S=(0,r.Fl)((()=>g.value?"height":"width")),T=(0,r.Fl)((()=>({[I.value]:"0%",[S.value]:"100%"}))),x=(0,r.Fl)((()=>e.stop-e.start)),A=(0,r.Fl)((()=>({[I.value]:(0,c.kb)(e.start,"%"),[S.value]:(0,c.kb)(x.value,"%")}))),R=(0,r.Fl)((()=>{const t=g.value?l.value.slice().reverse():l.value;return t.map(((t,i)=>{var s,o;const a=g.value?"bottom":"margin-inline-start",l=t.position>0&&t.position<100?(0,c.kb)(t.position,"%"):void 0;return(0,r.Wm)("div",{key:t.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":t.position>=e.start&&t.position<=e.stop}],style:{[a]:l}},[(t.label||n["tick-label"])&&(0,r.Wm)("div",{class:"v-slider-track__tick-label"},[null!=(s=null==(o=n["tick-label"])?void 0:o.call(n,{tick:t,index:i}))?s:t.label])])}))}));return(0,b.L)((()=>(0,r.Wm)("div",{class:["v-slider-track",_.value],style:{"--v-slider-track-size":(0,c.kb)(v.value),"--v-slider-tick-size":(0,c.kb)(f.value),direction:g.value?void 0:o.value}},[(0,r.Wm)("div",{class:["v-slider-track__background",C.value,{"v-slider-track__background--opacity":!!s.value||!m.value}],style:{...T.value,...E.value}},null),(0,r.Wm)("div",{class:["v-slider-track__fill",w.value],style:{...A.value,...k.value}},null),h.value&&(0,r.Wm)("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":"always"===h.value}]},[R.value])]))),{}}});var C=n(7076),E=n(8969),I=n(8717);const S=(0,_.a)({name:"VSlider",props:{...(0,E.B)(),...m(),...(0,C.co)(),modelValue:{type:[Number,String],default:0}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const i=(0,h.iH)(),{min:s,max:o,mousePressed:a,roundValue:l,onSliderMousedown:u,onSliderTouchstart:c,trackContainerRef:d,position:f,hasLabels:p,readonly:m}=v({props:e,handleSliderMouseUp:e=>g.value=l(e),handleMouseMove:e=>g.value=l(e),getActiveThumb:()=>{var e;return null==(e=i.value)?void 0:e.$el}}),g=(0,I.z)(e,"modelValue",void 0,(e=>{const t="string"===typeof e?parseFloat(e):null==e?s.value:e;return l(t)})),{isFocused:y,focus:_,blur:S}=(0,E.K)(e),T=(0,r.Fl)((()=>f(g.value)));return(0,b.L)((()=>{const[t,l]=(0,C.PE)(e);return(0,r.Wm)(C.q8,(0,r.dG)({class:["v-slider",{"v-slider--has-labels":!!n["tick-label"]||p.value,"v-slider--focused":y.value,"v-slider--pressed":a.value,"v-slider--disabled":e.disabled}]},t,{focused:y.value}),{...n,default:t=>{let{id:a}=t;return(0,r.Wm)("div",{class:"v-slider__container",onMousedown:m.value?void 0:u,onTouchstartPassive:m.value?void 0:c},[(0,r.Wm)("input",{id:a.value,name:e.name||a.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:g.value},null),(0,r.Wm)(k,{ref:d,start:0,stop:T.value},{"tick-label":n["tick-label"]}),(0,r.Wm)(w,{ref:i,focused:y.value,min:s.value,max:o.value,modelValue:g.value,"onUpdate:modelValue":e=>g.value=e,position:T.value,elevation:e.elevation,onFocus:_,onBlur:S},{"thumb-label":n["thumb-label"]})])}})})),{}}})},9671:function(e,t,n){"use strict";n.d(t,{v:function(){return m}});var r=n(3396),i=n(836),s=n(9815),o=n(5221),a=n(5180),l=n(489),u=n(4231),c=n(4906),h=n(8717),d=n(5975),f=n(1107),p=n(9888);const m=(0,f.a)({name:"VSnackbar",props:{app:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,modelValue:Boolean,...(0,a.y)({location:"bottom"}),...(0,l.F)(),...(0,u.I)(),...(0,o.bk)(),...(0,c.X)({transition:"v-snackbar-transition"})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=(0,h.z)(e,"modelValue"),{locationStyles:f}=(0,a.T)(e),{positionClasses:m}=(0,l.K)(e),{scopeId:v}=(0,d.a)(),{colorClasses:g,colorStyles:y,variantClasses:_}=(0,o.c1)(e),{roundedClasses:b}=(0,u.b)(e);(0,r.YP)(c,k),(0,r.YP)((()=>e.timeout),k),(0,r.bv)((()=>{c.value&&k()}));let w=-1;function k(){window.clearTimeout(w);const t=Number(e.timeout);c.value&&-1!==t&&(w=window.setTimeout((()=>{c.value=!1}),t))}function C(){window.clearTimeout(w)}(0,p.L)((()=>(0,r.Wm)(s.y,(0,r.dG)({modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,class:["v-snackbar",{"v-snackbar--active":c.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},m.value],style:[y.value],contentProps:{style:f.value},persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",transition:e.transition},v),{default:()=>[(0,r.Wm)("div",{class:["v-snackbar__wrapper",g.value,b.value,_.value],onPointerenter:C,onPointerleave:k},[(0,o.Ux)(!1,"v-snackbar"),n.default&&(0,r.Wm)("div",{class:["v-snackbar__content",e.contentClass],role:"status","aria-live":"polite"},[n.default()]),n.actions&&(0,r.Wm)(i.z,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[(0,r.Wm)("div",{class:"v-snackbar__actions"},[n.actions()])]})])],activator:n.activator})))}})},5869:function(e,t,n){"use strict";n.d(t,{h:function(){return P}});n(6699);var r=n(3396),i=n(9242),s=n(8952),o=n(7302),a=n(1107),l=n(9888);const u=(0,a.a)({name:"VFieldLabel",props:{floating:Boolean},setup(e,t){let{slots:n}=t;return(0,l.L)((()=>(0,r.Wm)(o.J,{class:["v-field-label",{"v-field-label--floating":e.floating}],"aria-hidden":e.floating||void 0},n))),{}}});var c=n(3289),h=n(4960),d=n(6791),f=n(8969),p=n(7041),m=n(2370),v=n(4870),g=n(3766),y=n(7514),_=n(3122),b=n(131),w=n(8587);const k=["underlined","outlined","filled","solo","plain"],C=(0,g.U)({appendInnerIcon:h.lE,bgColor:String,clearable:Boolean,clearIcon:{type:h.lE,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:h.lE,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>k.includes(e)},...(0,p.x$)(),...(0,d.fF)()},"v-field"),E=(0,a.e)()({name:"VField",inheritAttrs:!1,props:{id:String,...(0,f.B)(),...C()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:o,slots:a}=t;const{themeClasses:h}=(0,p.ER)(e),{loaderClasses:g}=(0,d.U2)(e),{focusClasses:k,isFocused:C,focus:E,blur:I}=(0,f.K)(e),S=(0,r.Fl)((()=>e.dirty||e.active)),T=(0,r.Fl)((()=>!e.singleLine&&!(!e.label&&!a.label))),x=(0,y.sq)(),A=(0,r.Fl)((()=>e.id||`input-${x}`)),R=(0,v.iH)(),N=(0,v.iH)(),O=(0,v.iH)(),{backgroundColorClasses:P,backgroundColorStyles:D}=(0,m.Y5)((0,v.Vh)(e,"bgColor")),{textColorClasses:L,textColorStyles:F}=(0,m.rY)((0,r.Fl)((()=>S.value&&C.value&&!e.error&&!e.disabled?e.color:void 0)));(0,r.YP)(S,(e=>{if(T.value){const t=R.value.$el,n=N.value.$el,r=(0,_.G)(t),i=n.getBoundingClientRect(),s=i.x-r.x,o=i.y-r.y-(r.height/2-i.height/2),a=i.width/.75,l=Math.abs(a-r.width)>1?{maxWidth:(0,b.kb)(a)}:void 0,u=1e3*parseFloat(getComputedStyle(t).transitionDuration),c=parseFloat(getComputedStyle(n).getPropertyValue("--v-field-label-scale"));t.style.visibility="visible",n.style.visibility="hidden",t.animate([{transform:"translate(0)"},{transform:`translate(${s}px, ${o}px) scale(${c})`,...l}],{duration:u,easing:w.Ly,direction:e?"normal":"reverse"}).finished.then((()=>{t.style.removeProperty("visibility"),n.style.removeProperty("visibility")}))}}),{flush:"post"});const M=(0,r.Fl)((()=>({isActive:S,isFocused:C,controlRef:O,blur:I,focus:E})));function V(e){e.target!==document.activeElement&&e.preventDefault(),o("click:control",e)}return(0,l.L)((()=>{var t,l,f;const p="outlined"===e.variant,m=a["prepend-inner"]||e.prependInnerIcon,v=!(!e.clearable&&!a.clear),y=!!(a["append-inner"]||e.appendInnerIcon||v),_=a.label?a.label({label:e.label,props:{for:A.value}}):e.label;return(0,r.Wm)("div",(0,r.dG)({class:["v-field",{"v-field--active":S.value,"v-field--appended":y,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":m,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--has-label":!!_,[`v-field--variant-${e.variant}`]:!0},h.value,P.value,k.value,g.value],style:[D.value,F.value],onClick:V},n),[(0,r.Wm)("div",{class:"v-field__overlay"},null),(0,r.Wm)(d.rD,{name:"v-field",active:e.loading,color:e.error?"error":e.color},{default:a.loader}),m&&(0,r.Wm)("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&(0,r.Wm)(c.t,{key:"prepend-icon",onClick:n["onClick:prependInner"],icon:e.prependInnerIcon},null),null==(t=a["prepend-inner"])?void 0:t.call(a,M.value)]),(0,r.Wm)("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(e.variant)&&T.value&&(0,r.Wm)(u,{key:"floating-label",ref:N,class:[L.value],floating:!0},{default:()=>[_]}),(0,r.Wm)(u,{ref:R,for:A.value},{default:()=>[_]}),null==(l=a.default)?void 0:l.call(a,{...M.value,props:{id:A.value,class:"v-field__input"},focus:E,blur:I})]),v&&(0,r.Wm)(s.Zq,{key:"clear"},{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-field__clearable"},[a.clear?a.clear():(0,r.Wm)(c.t,{onClick:e=>o("click:clear",e),icon:e.clearIcon},null)]),[[i.F8,e.dirty]])]}),y&&(0,r.Wm)("div",{key:"append",class:"v-field__append-inner"},[null==(f=a["append-inner"])?void 0:f.call(a,M.value),e.appendInnerIcon&&(0,r.Wm)(c.t,{key:"append-icon",onClick:n["onClick:appendInner"],icon:e.appendInnerIcon},null)]),(0,r.Wm)("div",{class:["v-field__outline",L.value]},[p&&(0,r.Wm)(r.HY,null,[(0,r.Wm)("div",{class:"v-field__outline__start"},null),T.value&&(0,r.Wm)("div",{class:"v-field__outline__notch"},[(0,r.Wm)(u,{ref:N,floating:!0},{default:()=>[_]})]),(0,r.Wm)("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&T.value&&(0,r.Wm)(u,{ref:N,floating:!0},{default:()=>[_]})])])})),{controlRef:O}}});function I(e){return(0,b.ei)(e,Object.keys(E.props))}var S=n(7076),T=n(4906);const x=(0,a.a)({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...(0,T.X)({transition:{component:s.cu}})},setup(e,t){let{slots:n}=t;const s=(0,r.Fl)((()=>e.max?`${e.value} / ${e.max}`:String(e.value)));return(0,l.L)((()=>(0,r.Wm)(T.J,{transition:e.transition},{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-counter"},[n.default?n.default({counter:s.value,max:e.max,value:e.value}):s.value]),[[i.F8,e.active]])]}))),{}}});var A=n(7052),R=n(6199),N=n(8717);const O=["color","file","time","date","datetime-local","week","month"],P=(0,a.e)()({name:"VTextField",directives:{Intersect:A.Z},inheritAttrs:!1,props:{autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...(0,S.co)(),...C()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"click:input":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:s,slots:o}=t;const a=(0,N.z)(e,"modelValue"),u=(0,r.Fl)((()=>{var t;return"function"===typeof e.counterValue?e.counterValue(a.value):(null!=(t=a.value)?t:"").toString().length})),c=(0,r.Fl)((()=>n.maxlength?n.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function h(t,n){var r,i;e.autofocus&&t&&(null==(r=n[0].target)||null==(i=r.focus)||i.call(r))}const d=(0,v.iH)(),f=(0,v.iH)(),p=(0,v.iH)(!1),m=(0,v.iH)(),g=(0,r.Fl)((()=>O.includes(e.type)||e.persistentPlaceholder||p.value)),y=(0,r.Fl)((()=>e.messages.length?e.messages:p.value||e.persistentHint?e.hint:""));function _(){var e;m.value!==document.activeElement&&(null==(e=m.value)||e.focus());p.value||(p.value=!0)}function w(e){_(),s("click:control",e)}function k(e){e.stopPropagation(),_(),(0,r.Y3)((()=>{a.value="",s("click:clear",e)}))}return(0,l.L)((()=>{const t=!!(o.counter||e.counter||e.counterValue),[l,v]=(0,b.An)(n),[{modelValue:C,...T}]=(0,S.PE)(e),[A]=I(e);return(0,r.Wm)(S.q8,(0,r.dG)({ref:d,modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":n["onClick:prepend"],"onClick:append":n["onClick:append"]},l,T,{messages:y.value}),{...o,default:t=>{let{id:l,isDisabled:u,isDirty:c,isReadonly:d,isValid:y}=t;return(0,r.Wm)(E,(0,r.dG)({ref:f,onMousedown:e=>{e.target!==m.value&&e.preventDefault()},"onClick:control":w,"onClick:clear":k,"onClick:prependInner":n["onClick:prependInner"],"onClick:appendInner":n["onClick:appendInner"],role:"textbox"},A,{id:l.value,active:g.value||c.value,dirty:c.value||e.dirty,focused:p.value,error:!1===y.value}),{...o,default:t=>{var n;let{props:{class:l,...c}}=t;return(0,r.Wm)(r.HY,null,[e.prefix&&(0,r.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),(0,r.Wm)("div",{class:l,onClick:e=>s("click:input",e),"data-no-activator":""},[null==(n=o.default)?void 0:n.call(o),(0,r.wy)((0,r.Wm)("input",(0,r.dG)({ref:m,"onUpdate:modelValue":e=>a.value=e,autofocus:e.autofocus,readonly:d.value,disabled:u.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:_,onBlur:()=>p.value=!1},c,v),null),[[i.YZ,a.value],[(0,r.Q2)("intersect"),{handler:h},null,{once:!0}]])]),e.suffix&&(0,r.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:t?()=>(0,r.Wm)(r.HY,null,[(0,r.Wm)("span",null,null),(0,r.Wm)(x,{active:e.persistentCounter||p.value,value:u.value,max:c.value},o.counter)]):void 0})})),(0,R.Z)({},d,f,m)}})},7471:function(e,t,n){"use strict";n.d(t,{iv:function(){return C},$d:function(){return E},xL:function(){return k}});n(6699);var r=n(3396),i=n(836),s=n(8952),o=n(8694),a=n(5030),l=n(2718),u=n(2465),c=n(4231),h=n(1138),d=n(7041),f=n(8434),p=n(2370),m=n(6199),v=n(4870),g=n(3766),y=n(1107),_=n(9888),b=n(131);const w=[null,"prominent","default","comfortable","compact"],k=(0,g.U)({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>w.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...(0,l.m)(),...(0,u.c)(),...(0,c.I)(),...(0,h.Q)({tag:"header"}),...(0,d.x$)()},"v-toolbar"),C=(0,y.e)()({name:"VToolbar",props:k(),setup(e,t){var n;let{slots:h}=t;const{backgroundColorClasses:g,backgroundColorStyles:y}=(0,p.Y5)((0,v.Vh)(e,"color")),{borderClasses:w}=(0,l.P)(e),{elevationClasses:k}=(0,u.Y)(e),{roundedClasses:C}=(0,c.b)(e),{themeClasses:E}=(0,d.ER)(e),I=(0,v.iH)(!!(e.extended||null!=(n=h.extension)&&n.call(h))),S=(0,r.Fl)((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),T=(0,r.Fl)((()=>I.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0));return(0,f.AF)({VBtn:{variant:"text"}}),(0,_.L)((()=>{var t,n,l,u,c;const d=!(!e.title&&!h.title),f=!(!h.image&&!e.image),p=null==(t=h.extension)?void 0:t.call(h);return I.value=!(!e.extended&&!p),(0,r.Wm)(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},g.value,w.value,k.value,C.value,E.value],style:[y.value]},{default:()=>[f&&(0,r.Wm)("div",{key:"image",class:"v-toolbar__image"},[(0,r.Wm)(i.z,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[h.image?null==(n=h.image)?void 0:n.call(h):(0,r.Wm)(o.f,null,null)]})]),(0,r.Wm)("div",{class:"v-toolbar__content",style:{height:(0,b.kb)(S.value)}},[h.prepend&&(0,r.Wm)("div",{class:"v-toolbar__prepend"},[null==(l=h.prepend)?void 0:l.call(h)]),d&&(0,r.Wm)(a.q,{key:"title",text:e.title},{text:h.title}),null==(u=h.default)?void 0:u.call(h),h.append&&(0,r.Wm)("div",{class:"v-toolbar__append"},[null==(c=h.append)?void 0:c.call(h)])]),(0,r.Wm)(s.Fx,null,{default:()=>[I.value&&(0,r.Wm)("div",{class:"v-toolbar__extension",style:{height:(0,b.kb)(T.value)}},[p])]})]})})),(0,m.Z)({contentHeight:S,extensionHeight:T})}});function E(e){var t;return(0,b.ei)(e,Object.keys(null!=(t=null==C?void 0:C.props)?t:{}))}},5030:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var r=n(3396),i=n(1138),s=n(1107),o=n(9888);const a=(0,s.e)()({name:"VToolbarTitle",props:{text:String,...(0,i.Q)()},setup(e,t){let{slots:n}=t;return(0,o.L)((()=>{var t;const i=!!(n.default||n.text||e.text);return(0,r.Wm)(e.tag,{class:"v-toolbar-title"},{default:()=>[i&&(0,r.Wm)("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,null==(t=n.default)?void 0:t.call(n)])]})})),{}}})},2583:function(e,t,n){"use strict";n.d(t,{v:function(){return l}});var r=n(3396),i=n(9242),s=n(1107),o=n(8587),a=n(3122);const l=(0,s.a)({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:n}=t;const s={onBeforeEnter(e){e.style.pointerEvents="none",e.style.visibility="hidden"},async onEnter(t,n){var r;await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),t.style.visibility="";const{x:i,y:s,sx:a,sy:l,speed:h}=c(e.target,t),d=t.animate([{transform:`translate(${i}px, ${s}px) scale(${a}, ${l})`,opacity:0},{transform:""}],{duration:225*h,easing:o.uX});null==(r=u(t))||r.forEach((e=>{e.animate([{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:450*h,easing:o.Ly})})),d.finished.then((()=>n()))},onAfterEnter(e){e.style.removeProperty("pointer-events")},onBeforeLeave(e){e.style.pointerEvents="none"},async onLeave(t,n){var r;await new Promise((e=>requestAnimationFrame(e)));const{x:i,y:s,sx:a,sy:l,speed:h}=c(e.target,t),d=t.animate([{transform:""},{transform:`translate(${i}px, ${s}px) scale(${a}, ${l})`,opacity:0}],{duration:125*h,easing:o.x0});d.finished.then((()=>n())),null==(r=u(t))||r.forEach((e=>{e.animate([{},{opacity:0,offset:.2},{opacity:0}],{duration:250*h,easing:o.Ly})}))},onAfterLeave(e){e.style.removeProperty("pointer-events")}};return()=>e.target?(0,r.Wm)(i.uT,(0,r.dG)({name:"dialog-transition"},s,{css:!1}),n):(0,r.Wm)(i.uT,{name:"dialog-transition"},n)}});function u(e){var t;const n=null==(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))?void 0:t.children;return n&&[...n]}function c(e,t){const n=e.getBoundingClientRect(),r=(0,a.G)(t),[i,s]=getComputedStyle(t).transformOrigin.split(" ").map((e=>parseFloat(e))),[o,l]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=n.left+n.width/2;"left"===o||"left"===l?u-=n.width/2:"right"!==o&&"right"!==l||(u+=n.width/2);let c=n.top+n.height/2;"top"===o||"top"===l?c-=n.height/2:"bottom"!==o&&"bottom"!==l||(c+=n.height/2);const h=n.width/r.width,d=n.height/r.height,f=Math.max(1,h,d),p=h/f,m=d/f,v=r.width*r.height/(window.innerWidth*window.innerHeight),g=v>.12?Math.min(1.5,10*(v-.12)+1):1;return{x:u-(i+r.left),y:c-(s+r.top),sx:p,sy:m,speed:g}}},8952:function(e,t,n){"use strict";n.d(t,{Fx:function(){return d},Zq:function(){return f},T0:function(){return c},cu:function(){return h}});var r=n(9242),i=n(3396),s=n(1107);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return(0,s.a)({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:t}},setup(t,n){let{slots:s}=n;return()=>{const n=t.group?r.W3:r.uT;return(0,i.h)(n,{name:e,mode:t.mode,onBeforeEnter(e){e.style.transformOrigin=t.origin},onLeave(e){if(t.leaveAbsolute){const{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${n}px`,e.style.width=`${r}px`,e.style.height=`${i}px`}t.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(t.leaveAbsolute&&null!=e&&e._transitionInitialStyles){const{position:t,top:n,left:r,width:i,height:s}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=n||"",e.style.left=r||"",e.style.width=i||"",e.style.height=s||""}}},s.default)}}})}function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return(0,s.a)({name:e,props:{mode:{type:String,default:n}},setup(n,s){let{slots:o}=s;return()=>(0,i.h)(r.uT,{name:e,...t},o.default)}})}var l=n(2268);function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=t?"width":"height",r=(0,l._A)(`offset-${n}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},onEnter(t){const i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const s=`${t[r]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=i.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[n]=s}))},onAfterEnter:s,onEnterCancelled:s,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[r]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[n]="0"))},onAfterLeave:i,onLeaveCancelled:i};function i(t){e&&t._parent&&t._parent.classList.remove(e),s(t)}function s(e){const t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}}o("carousel-transition"),o("carousel-reverse-transition"),o("tab-transition"),o("tab-reverse-transition"),o("menu-transition"),o("fab-transition","center center","out-in"),o("dialog-bottom-transition"),o("dialog-top-transition"),o("fade-transition");const c=o("scale-transition"),h=(o("scroll-x-transition"),o("scroll-x-reverse-transition"),o("scroll-y-transition"),o("scroll-y-reverse-transition"),o("slide-x-transition"),o("slide-x-reverse-transition"),o("slide-y-transition")),d=(o("slide-y-reverse-transition"),a("expand-transition",u())),f=a("expand-x-transition",u("",!0))},2718:function(e,t,n){"use strict";n.d(t,{P:function(){return l},m:function(){return a}});var r=n(3396),i=n(4870),s=n(3766),o=n(7514);const a=(0,s.U)({border:[Boolean,Number,String]},"border");function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.BL)();const n=(0,r.Fl)((()=>{const n=(0,i.dq)(e)?e.value:e.border,r=[];if(!0===n||""===n)r.push(`${t}--border`);else if("string"===typeof n||0===n)for(const e of String(n).split(" "))r.push(`border-${e}`);return r}));return{borderClasses:n}}},2370:function(e,t,n){"use strict";n.d(t,{Y5:function(){return l},rY:function(){return a},rd:function(){return o}});var r=n(3396),i=n(4870),s=n(661);function o(e){const t=(0,r.Fl)((()=>(0,s.NA)(e.value.background))),n=(0,r.Fl)((()=>(0,s.NA)(e.value.text))),i=(0,r.Fl)((()=>{const r=[];return e.value.background&&!t.value&&r.push(`bg-${e.value.background}`),e.value.text&&!n.value&&r.push(`text-${e.value.text}`),r})),o=(0,r.Fl)((()=>{const r={};return e.value.background&&t.value&&(r.backgroundColor=e.value.background),e.value.text&&n.value&&(r.color=e.value.text,r.caretColor=e.value.text),r}));return{colorClasses:i,colorStyles:o}}function a(e,t){const n=(0,r.Fl)((()=>({text:(0,i.dq)(e)?e.value:t?e[t]:null}))),{colorClasses:s,colorStyles:a}=o(n);return{textColorClasses:s,textColorStyles:a}}function l(e,t){const n=(0,r.Fl)((()=>({background:(0,i.dq)(e)?e.value:t?e[t]:null}))),{colorClasses:s,colorStyles:a}=o(n);return{backgroundColorClasses:s,backgroundColorStyles:a}}},8434:function(e,t,n){"use strict";n.d(t,{AF:function(){return u},qy:function(){return l},tI:function(){return o},yB:function(){return a}});n(1703);var r=n(4870),i=n(3396),s=n(131);const o=Symbol.for("vuetify:defaults");function a(e){return(0,r.iH)(null!=e?e:{})}function l(){const e=(0,i.f3)(o);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function u(e,t){const n=l(),a=(0,r.iH)(e),u=(0,i.Fl)((()=>{const e=(0,r.SU)(null==t?void 0:t.scoped),i=(0,r.SU)(null==t?void 0:t.reset),o=(0,r.SU)(null==t?void 0:t.root);let l=(0,s.Ee)(a.value,{prev:n.value});if(e)return l;if(i||o){const e=Number(i||1/0);for(let t=0;t<=e;t++){if(!l.prev)break;l=l.prev}return l}return(0,s.Ee)(l.prev,l)}));return(0,i.JJ)(o,u),u}},9694:function(e,t,n){"use strict";n.d(t,{f:function(){return a},t:function(){return l}});n(6699);var r=n(3396),i=n(3766),s=n(7514);const o=[null,"default","comfortable","compact"],a=(0,i.U)({density:{type:String,default:"default",validator:e=>o.includes(e)}},"density");function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.BL)();const n=(0,r.Fl)((()=>`${t}--density-${e.density}`));return{densityClasses:n}}},4544:function(e,t,n){"use strict";n.d(t,{$:function(){return a},x:function(){return o}});var r=n(3396),i=n(3766),s=n(131);const o=(0,i.U)({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function a(e){const t=(0,r.Fl)((()=>({height:(0,s.kb)(e.height),maxHeight:(0,s.kb)(e.maxHeight),maxWidth:(0,s.kb)(e.maxWidth),minHeight:(0,s.kb)(e.minHeight),minWidth:(0,s.kb)(e.minWidth),width:(0,s.kb)(e.width)})));return{dimensionStyles:t}}},8157:function(e,t,n){"use strict";n.d(t,{AW:function(){return p},fT:function(){return f},x6:function(){return a}});n(1703);var r=n(4870),i=n(3396),s=n(131),o=n(2385);const a=Symbol.for("vuetify:display"),l={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return(0,s.Ee)(l,e)};function c(e){return o.BR&&!e?window.innerWidth:0}function h(e){return o.BR&&!e?window.innerHeight:0}function d(){const e=o.BR?window.navigator.userAgent:"ssr";function t(t){return Boolean(e.match(t))}const n=t(/android/i),r=t(/iphone|ipad|ipod/i),i=t(/cordova/i),s=t(/electron/i),a=t(/chrome/i),l=t(/edge/i),u=t(/firefox/i),c=t(/opera/i),h=t(/win/i),d=t(/mac/i),f=t(/linux/i),p=t(/ssr/i);return{android:n,ios:r,cordova:i,electron:s,chrome:a,edge:l,firefox:u,opera:c,win:h,mac:d,linux:f,touch:o.sR,ssr:p}}function f(e,t){const{thresholds:n,mobileBreakpoint:s}=u(e),a=(0,r.iH)(h(t)),l=d(),f=(0,r.qj)({}),p=(0,r.iH)(c(t));function m(){a.value=h(),p.value=c()}return t&&(0,i.Y3)((()=>m())),(0,i.m0)((()=>{const e=p.value<n.sm,t=p.value<n.md&&!e,r=p.value<n.lg&&!(t||e),i=p.value<n.xl&&!(r||t||e),o=p.value<n.xxl&&!(i||r||t||e),u=p.value>=n.xxl,c=e?"xs":t?"sm":r?"md":i?"lg":o?"xl":"xxl",h="number"===typeof s?s:n[s],d=l.ssr?l.android||l.ios||l.opera:p.value<h;f.xs=e,f.sm=t,f.md=r,f.lg=i,f.xl=o,f.xxl=u,f.smAndUp=!e,f.mdAndUp=!(e||t),f.lgAndUp=!(e||t||r),f.xlAndUp=!(e||t||r||i),f.smAndDown=!(r||i||o||u),f.mdAndDown=!(i||o||u),f.lgAndDown=!(o||u),f.xlAndDown=!u,f.name=c,f.height=a.value,f.width=p.value,f.mobile=d,f.mobileBreakpoint=s,f.platform=l,f.thresholds=n})),o.BR&&window.addEventListener("resize",m,{passive:!0}),(0,r.BK)(f)}function p(){const e=(0,i.f3)(a);if(!e)throw new Error("Could not find Vuetify display injection");return e}},2465:function(e,t,n){"use strict";n.d(t,{Y:function(){return a},c:function(){return o}});var r=n(3396),i=n(4870),s=n(3766);const o=(0,s.U)({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function a(e){const t=(0,r.Fl)((()=>{const t=(0,i.dq)(e)?e.value:e.elevation,n=[];return null==t||n.push(`elevation-${t}`),n}));return{elevationClasses:t}}},8969:function(e,t,n){"use strict";n.d(t,{B:function(){return a},K:function(){return l}});var r=n(8717),i=n(3396),s=n(3766),o=n(7514);const a=(0,s.U)({focused:Boolean},"focus");function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.BL)();const n=(0,r.z)(e,"focused"),s=(0,i.Fl)((()=>({[`${t}--focused`]:n.value})));function a(){n.value=!0}function l(){n.value=!1}return{focusClasses:s,isFocused:n,focus:a,blur:l}}},6199:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Proxy(e,{get(e,t){if(Reflect.has(e,t))return Reflect.get(e,t);for(const r of n)if(r.value&&Reflect.has(r.value,t)){const e=Reflect.get(r.value,t);return"function"===typeof e?e.bind(r.value):e}},getOwnPropertyDescriptor(e,t){const r=Reflect.getOwnPropertyDescriptor(e,t);if(r)return r;for(const i of n){if(!i.value)continue;const e=Reflect.getOwnPropertyDescriptor(i.value,t);if(e)return e}for(const i of n){let e=i.value&&Object.getPrototypeOf(i.value);while(e){const n=Reflect.getOwnPropertyDescriptor(e,t);if(n)return n;e=Object.getPrototypeOf(e)}}}})}n.d(t,{Z:function(){return r}})},1970:function(e,t,n){"use strict";n.d(t,{YQ:function(){return h},Yt:function(){return d},_v:function(){return f},k4:function(){return c}});n(1703),n(6699);var r=n(8717),i=n(3396),s=n(4870),o=n(3766),a=n(7514),l=n(131),u=n(6033);const c=(0,o.U)({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),h=(0,o.U)({value:null,disabled:Boolean,selectedClass:String},"group-item");function d(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=(0,a.FN)("useGroupItem");if(!r)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const o=(0,a.sq)();(0,i.JJ)(Symbol.for(`${t.description}:id`),o);const l=(0,i.f3)(t,null);if(!l){if(!n)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const u=(0,s.Vh)(e,"value"),c=(0,i.Fl)((()=>l.disabled.value||e.disabled));l.register({id:o,value:u,disabled:c},r),(0,i.Jd)((()=>{l.unregister(o)}));const h=(0,i.Fl)((()=>l.isSelected(o))),d=(0,i.Fl)((()=>h.value&&[l.selectedClass.value,e.selectedClass]));return(0,i.YP)(h,(e=>{r.emit("group:selected",{value:e})})),{id:o,isSelected:h,toggle:()=>l.select(o,!h.value),select:e=>l.select(o,e),selectedClass:d,value:u,disabled:c,group:l}}function f(e,t){let n=!1;const o=(0,s.qj)([]),c=(0,r.z)(e,"modelValue",[],(e=>null==e?[]:m(o,(0,l.FT)(e))),(t=>{const n=v(o,t);return e.multiple?n:n[0]})),h=(0,a.FN)("useGroup");function d(e,n){const r=e,i=Symbol.for(`${t.description}:id`),s=(0,l.bY)(i,null==h?void 0:h.vnode),a=s.indexOf(n);a>-1?o.splice(a,0,r):o.push(r)}function f(e){if(n)return;g();const t=o.findIndex((t=>t.id===e));o.splice(t,1)}function g(){const t=o.find((e=>!e.disabled));t&&"force"===e.mandatory&&!c.value.length&&(c.value=[t.id])}function y(t,n){const r=o.find((e=>e.id===t));if(!n||null==r||!r.disabled)if(e.multiple){var i;const r=c.value.slice(),s=r.findIndex((e=>e===t)),o=~s;if(n=null!=(i=n)?i:!o,o&&e.mandatory&&r.length<=1)return;if(!o&&null!=e.max&&r.length+1>e.max)return;s<0&&n?r.push(t):s>=0&&!n&&r.splice(s,1),c.value=r}else{var s;const r=c.value.includes(t);if(e.mandatory&&r)return;c.value=(null!=(s=n)?s:!r)?[t]:[]}}function _(t){if(e.multiple&&(0,u.Kd)('This method is not supported when using "multiple" prop'),c.value.length){const e=c.value[0],n=o.findIndex((t=>t.id===e));let r=(n+t)%o.length,i=o[r];while(i.disabled&&r!==n)r=(r+t)%o.length,i=o[r];if(i.disabled)return;c.value=[o[r].id]}else{const e=o.find((e=>!e.disabled));e&&(c.value=[e.id])}}(0,i.bv)((()=>{g()})),(0,i.Jd)((()=>{n=!0}));const b={register:d,unregister:f,selected:c,select:y,disabled:(0,s.Vh)(e,"disabled"),prev:()=>_(o.length-1),next:()=>_(1),isSelected:e=>c.value.includes(e),selectedClass:(0,i.Fl)((()=>e.selectedClass)),items:(0,i.Fl)((()=>o)),getItemIndex:e=>p(o,e)};return(0,i.JJ)(t,b),b}function p(e,t){const n=m(e,[t]);return n.length?e.findIndex((e=>e.id===n[0])):-1}function m(e,t){const n=[];for(let r=0;r<e.length;r++){const i=e[r];null!=i.value?null!=t.find((e=>(0,l.vZ)(e,i.value)))&&n.push(i.id):t.includes(r)&&n.push(i.id)}return n}function v(e,t){const n=[];for(let r=0;r<e.length;r++){const i=e[r];t.includes(i.id)&&n.push(null!=i.value?i.value:r)}return n}},4960:function(e,t,n){"use strict";n.d(t,{YK:function(){return h},lE:function(){return c},$0:function(){return m},_i:function(){return g},bi:function(){return y}});n(1703),n(6699);var r=n(3396);const i={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},s={component:e=>(0,r.h)(m,{...e,class:"mdi"})};var o=n(4870),a=n(3766),l=n(1107),u=n(131);const c=[String,Function,Object],h=Symbol.for("vuetify:icons"),d=(0,a.U)({icon:{type:c,required:!0},tag:{type:String,required:!0}},"icon"),f=(0,l.a)({name:"VComponentIcon",props:d(),setup(e){return()=>(0,r.Wm)(e.tag,null,{default:()=>[(0,r.Wm)(e.icon,null,null)]})}}),p=(0,l.a)({name:"VSvgIcon",inheritAttrs:!1,props:d(),setup(e,t){let{attrs:n}=t;return()=>(0,r.Wm)(e.tag,(0,r.dG)(n,{style:null}),{default:()=>[(0,r.Wm)("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[(0,r.Wm)("path",{d:e.icon},null)])]})}}),m=((0,l.a)({name:"VLigatureIcon",props:d(),setup(e){return()=>(0,r.Wm)(e.tag,null,{default:()=>[e.icon]})}}),(0,l.a)({name:"VClassIcon",props:d(),setup(e){return()=>(0,r.Wm)(e.tag,{class:e.icon},null)}})),v={svg:{component:p},class:{component:m}};function g(e){return(0,u.Ee)({defaultSet:"mdi",sets:{...v,mdi:s},aliases:i},e)}const y=e=>{const t=(0,r.f3)(h);if(!t)throw new Error("Missing Vuetify Icons provide!");const n=(0,r.Fl)((()=>{const n=(0,o.dq)(e)?e.value:e.icon;if(!n)throw new Error("Icon value is undefined or null");let r=n;var i;"string"===typeof n&&n.includes("$")&&(r=null==(i=t.aliases)?void 0:i[n.slice(n.indexOf("$")+1)]);if(!r)throw new Error(`Could not find aliased icon "${n}"`);if("string"!==typeof r)return{component:f,icon:r};const s=Object.keys(t.sets).find((e=>"string"===typeof r&&r.startsWith(`${e}:`))),a=s?r.slice(s.length+1):r,l=t.sets[null!=s?s:t.defaultSet];return{component:l.component,icon:a}}));return{iconData:n}}},1477:function(e,t,n){"use strict";n.d(t,{S:function(){return o}});var r=n(4870),i=n(3396),s=n(2385);function o(e){const t=(0,r.iH)(),n=(0,r.iH)(!1);if(s.cu){const r=new IntersectionObserver((t=>{null==e||e(t,r),n.value=!!t.find((e=>e.isIntersecting))}));(0,i.Jd)((()=>{r.disconnect()})),(0,i.YP)(t,((e,t)=>{t&&(r.unobserve(t),n.value=!1),e&&r.observe(e)}),{flush:"post"})}return{intersectionRef:t,isIntersecting:n}}},6185:function(e,t,n){"use strict";n.d(t,{Ce:function(){return u},S1:function(){return o}});var r=n(3396),i=n(3766),s=n(131);const o=(0,i.U)({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function a(e,t){const n=(0,s.qF)(t,e.itemTitle,t),r=(0,s.qF)(t,e.itemValue,n),i=(0,s.qF)(t,e.itemChildren),o=!0===e.itemProps?(0,s.ei)(t,["children"])[1]:(0,s.qF)(t,e.itemProps),a={title:n,value:r,...o};return{title:a.title,value:a.value,props:a,children:Array.isArray(i)?l(e,i):void 0,raw:t}}function l(e,t){const n=[];for(const r of t)n.push(a(e,r));return n}function u(e){const t=(0,r.Fl)((()=>l(e,e.items)));function n(t){return t.map((t=>a(e,t)))}function i(t){return e.returnObject?t.map((e=>{let{raw:t}=e;return t})):t.map((e=>{let{props:t}=e;return t.value}))}return{items:t,transformIn:n,transformOut:i}}},7396:function(e,t,n){"use strict";n.d(t,{$Y:function(){return p},GB:function(){return d},eW:function(){return m},o8:function(){return f},te:function(){return g}});n(1703),n(6699);var r=n(3712),i=n(3396),s=n(4870),o=n(3766),a=n(7514),l=n(131);const u=Symbol.for("vuetify:layout"),c=Symbol.for("vuetify:layout-item"),h=1e3,d=(0,o.U)({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),f=(0,o.U)({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function p(){const e=(0,i.f3)(u);if(!e)throw new Error("Could not find injected Vuetify layout");return e}function m(e){var t;const n=(0,i.f3)(u);if(!n)throw new Error("Could not find injected Vuetify layout");const r=null!=(t=e.id)?t:`layout-item-${(0,a.sq)()}`,o=(0,a.FN)("useLayoutItem");(0,i.JJ)(c,{id:r});const l=(0,s.iH)(!1);(0,i.se)((()=>l.value=!0)),(0,i.dl)((()=>l.value=!1));const{layoutItemStyles:h,layoutItemScrimStyles:d}=n.register(o,{...e,active:(0,i.Fl)((()=>!l.value&&e.active.value)),id:r});return(0,i.Jd)((()=>n.unregister(r))),{layoutItemStyles:h,layoutRect:n.layoutRect,layoutItemScrimStyles:d}}const v=(e,t,n,r)=>{let i={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...i}}];for(const o of e){const e=t.get(o),a=n.get(o),l=r.get(o);if(!e||!a||!l)continue;const u={...i,[e.value]:parseInt(i[e.value],10)+(l.value?parseInt(a.value,10):0)};s.push({id:o,layer:u}),i=u}return s};function g(e){const t=(0,i.f3)(u,null),n=(0,i.Fl)((()=>t?t.rootZIndex.value-100:h)),o=(0,s.iH)([]),d=(0,s.qj)(new Map),f=(0,s.qj)(new Map),p=(0,s.qj)(new Map),m=(0,s.qj)(new Map),g=(0,s.qj)(new Map),{resizeRef:y,contentRect:_}=(0,r.y)(),b=(0,i.Fl)((()=>{var t;const n=new Map,r=null!=(t=e.overlaps)?t:[];for(const e of r.filter((e=>e.includes(":")))){const[t,r]=e.split(":");if(!o.value.includes(t)||!o.value.includes(r))continue;const i=d.get(t),s=d.get(r),a=f.get(t),l=f.get(r);i&&s&&a&&l&&(n.set(r,{position:i.value,amount:parseInt(a.value,10)}),n.set(t,{position:s.value,amount:-parseInt(l.value,10)}))}return n})),w=(0,i.Fl)((()=>{const e=[...new Set([...p.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[];for(const n of e){const e=o.value.filter((e=>{var t;return(null==(t=p.get(e))?void 0:t.value)===n}));t.push(...e)}return v(t,d,f,m)})),k=(0,i.Fl)((()=>!Array.from(g.values()).some((e=>e.value)))),C=(0,i.Fl)((()=>{const e=w.value[w.value.length-1].layer;return{position:"relative",paddingLeft:(0,l.kb)(e.left),paddingRight:(0,l.kb)(e.right),paddingTop:(0,l.kb)(e.top),paddingBottom:(0,l.kb)(e.bottom),...k.value?void 0:{transition:"none"}}})),E=(0,i.Fl)((()=>w.value.slice(1).map(((e,t)=>{let{id:n}=e;const{layer:r}=w.value[t],i=f.get(n);return{id:n,...r,size:Number(i.value)}})))),I=e=>E.value.find((t=>t.id===e)),S=(0,a.FN)("createLayout"),T=(0,s.iH)(!1);(0,i.bv)((()=>{T.value=!0})),(0,i.JJ)(u,{register:(e,t)=>{let{id:r,order:s,position:a,layoutSize:u,elementSize:v,active:y,disableTransitions:_,absolute:C}=t;p.set(r,s),d.set(r,a),f.set(r,u),m.set(r,y),_&&g.set(r,_);const I=(0,l.bY)(c,null==S?void 0:S.vnode),x=I.indexOf(e);x>-1?o.value.splice(x,0,r):o.value.push(r);const A=(0,i.Fl)((()=>E.value.findIndex((e=>e.id===r)))),R=(0,i.Fl)((()=>n.value+2*w.value.length-2*A.value)),N=(0,i.Fl)((()=>{const e="left"===a.value||"right"===a.value,t="right"===a.value,i="bottom"===a.value,s={[a.value]:0,zIndex:R.value,transform:`translate${e?"X":"Y"}(${(y.value?0:-110)*(t||i?-1:1)}%)`,position:C.value||n.value!==h?"absolute":"fixed",...k.value?void 0:{transition:"none"}};if(!T.value)return s;if(A.value<0)throw new Error(`Layout item "${r}" is missing`);const o=E.value[A.value];if(!o)throw new Error(`Could not find layout item "${r}`);const l=b.value.get(r);return l&&(o[l.position]+=l.amount),{...s,height:e?`calc(100% - ${o.top}px - ${o.bottom}px)`:v.value?`${v.value}px`:void 0,marginLeft:t?void 0:`${o.left}px`,marginRight:t?`${o.right}px`:void 0,marginTop:"bottom"!==a.value?`${o.top}px`:void 0,marginBottom:"top"!==a.value?`${o.bottom}px`:void 0,width:e?v.value?`${v.value}px`:void 0:`calc(100% - ${o.left}px - ${o.right}px)`}})),O=(0,i.Fl)((()=>({zIndex:R.value-1,position:n.value===h?"fixed":"absolute"})));return{layoutItemStyles:N,layoutItemScrimStyles:O,zIndex:R}},unregister:e=>{p.delete(e),d.delete(e),f.delete(e),m.delete(e),g.delete(e),o.value=o.value.filter((t=>t!==e))},mainStyles:C,getLayoutItem:I,items:E,layoutRect:_,rootZIndex:n});const x=(0,i.Fl)((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),A=(0,i.Fl)((()=>({zIndex:n.value})));return{layoutClasses:x,layoutStyles:A,getLayoutItem:I,items:E,layoutRect:_,layoutRef:y}}},6791:function(e,t,n){"use strict";n.d(t,{rD:function(){return b},fF:function(){return y},U2:function(){return _}});var r=n(3396),i=n(4231),s=n(1138),o=n(7041),a=n(2370),l=n(1477),u=n(8717),c=n(9903),h=n(9242),d=n(1107),f=n(9888),p=n(131);const m=(0,d.a)({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...(0,i.I)(),...(0,s.Q)(),...(0,o.x$)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const s=(0,u.z)(e,"modelValue"),{isRtl:d}=(0,c.Vw)(),{themeClasses:m}=(0,o.ER)(e),{textColorClasses:v,textColorStyles:g}=(0,a.rY)(e,"color"),{backgroundColorClasses:y,backgroundColorStyles:_}=(0,a.Y5)((0,r.Fl)((()=>e.bgColor||e.color))),{backgroundColorClasses:b,backgroundColorStyles:w}=(0,a.Y5)(e,"color"),{roundedClasses:k}=(0,i.b)(e),{intersectionRef:C,isIntersecting:E}=(0,l.S)(),I=(0,r.Fl)((()=>parseInt(e.max,10))),S=(0,r.Fl)((()=>parseInt(e.height,10))),T=(0,r.Fl)((()=>parseFloat(e.bufferValue)/I.value*100)),x=(0,r.Fl)((()=>parseFloat(s.value)/I.value*100)),A=(0,r.Fl)((()=>d.value!==e.reverse)),R=(0,r.Fl)((()=>e.indeterminate?"fade-transition":"slide-x-transition")),N=(0,r.Fl)((()=>null==e.bgOpacity?e.bgOpacity:parseFloat(e.bgOpacity)));function O(e){if(!C.value)return;const{left:t,right:n,width:r}=C.value.getBoundingClientRect(),i=A.value?r-e.clientX+(n-r):e.clientX-t;s.value=Math.round(i/r*I.value)}return(0,f.L)((()=>(0,r.Wm)(e.tag,{ref:C,class:["v-progress-linear",{"v-progress-linear--active":e.active&&E.value,"v-progress-linear--reverse":A.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},k.value,m.value],style:{height:e.active?(0,p.kb)(S.value):0,"--v-progress-linear-height":(0,p.kb)(S.value)},role:"progressbar","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:x.value,onClick:e.clickable&&O},{default:()=>[e.stream&&(0,r.Wm)("div",{key:"stream",class:["v-progress-linear__stream",v.value],style:{...g.value,[A.value?"left":"right"]:(0,p.kb)(-S.value),borderTop:`${(0,p.kb)(S.value/2)} dotted`,opacity:N.value,top:`calc(50% - ${(0,p.kb)(S.value/4)})`,width:(0,p.kb)(100-T.value,"%"),"--v-progress-linear-stream-to":(0,p.kb)(S.value*(A.value?1:-1))}},null),(0,r.Wm)("div",{class:["v-progress-linear__background",y.value],style:[_.value,{opacity:N.value,width:(0,p.kb)(e.stream?T.value:100,"%")}]},null),(0,r.Wm)(h.uT,{name:R.value},{default:()=>[e.indeterminate?(0,r.Wm)("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map((e=>(0,r.Wm)("div",{key:e,class:["v-progress-linear__indeterminate",e,b.value],style:w.value},null)))]):(0,r.Wm)("div",{class:["v-progress-linear__determinate",b.value],style:[w.value,{width:(0,p.kb)(x.value,"%")}]},null)]}),n.default&&(0,r.Wm)("div",{class:"v-progress-linear__content"},[n.default({value:x.value,buffer:T.value})])]}))),{}}});var v=n(3766),g=n(7514);const y=(0,v.U)({loading:Boolean},"loader");function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,g.BL)();const n=(0,r.Fl)((()=>({[`${t}--loading`]:e.loading})));return{loaderClasses:n}}function b(e,t){var n;let{slots:i}=t;return(0,r.Wm)("div",{class:`${e.name}__loader`},[(null==(n=i.default)?void 0:n.call(i,{color:e.color,isActive:e.active}))||(0,r.Wm)(m,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}},5738:function(e,t,n){"use strict";n.d(t,{uM:function(){return u},$2:function(){return f},bU:function(){return h}});n(1703);var r={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},i=n(9903),s=n(3396),o=n(4870),a=n(131),l=n(6033);const u=Symbol.for("vuetify:locale-adapter"),c=Symbol.for("vuetify:locale");function h(){const e=(0,s.f3)(u);if(!e)throw new Error("[Vuetify] Could not find injected locale adapter");return e.getScope()}function d(e){return!!e&&e.hasOwnProperty("getScope")&&e.hasOwnProperty("createScope")&&e.hasOwnProperty("createRoot")}function f(e,t){const n=d(t)?t:y(t),r=n.createRoot(e);return null==e||e.provide(i.Cm,(0,i.is)(r,t)),n}const p="$vuetify.",m=(e,t)=>e.replace(/\{(\d+)\}/g,((e,n)=>String(t[+n]))),v=(e,t,n)=>function(r){for(var i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];if(!r.startsWith(p))return m(r,s);const u=r.replace(p,""),c=e.value&&n.value[e.value],h=t.value&&n.value[t.value];let d=(0,a.vO)(c,u,null);return d||((0,l.Kd)(`Translation key "${r}" not found in "${e.value}", trying fallback locale`),d=(0,a.vO)(h,u,null)),d||((0,l.N6)(`Translation key "${r}" not found in fallback`),d=r),"string"!==typeof d&&((0,l.N6)(`Translation key "${r}" has a non-string value`),d=r),m(d,s)};function g(e,t){return(n,r)=>{const i=new Intl.NumberFormat([e.value,t.value],r);return i.format(n)}}function y(e){const t=e=>{const t=(0,o.iH)(e.current),n=(0,o.iH)(e.fallback),r=(0,o.iH)(e.messages);return{current:t,fallback:n,messages:r,t:v(t,n,r),n:g(t,n)}};return{createRoot:n=>{var i,s,o;const a=t({current:null!=(i=null==e?void 0:e.defaultLocale)?i:"en",fallback:null!=(s=null==e?void 0:e.fallbackLocale)?s:"en",messages:null!=(o=null==e?void 0:e.messages)?o:{en:r}});if(!n)throw new Error("[Vuetify] Could not find default app instance");return n.provide(c,a),a},getScope:()=>{const e=(0,s.f3)(c);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e},createScope:e=>{const n=(0,s.f3)(c);if(!n)throw new Error("[Vuetify] Could not find injected locale instance");const r=t({current:(0,s.Fl)((()=>{var t;return null!=(t=null==e?void 0:e.locale)?t:n.current.value})),fallback:(0,s.Fl)((()=>{var t;return null!=(t=null==e?void 0:e.locale)?t:n.fallback.value})),messages:(0,s.Fl)((()=>{var t;return null!=(t=null==e?void 0:e.messages)?t:n.messages.value}))});return(0,s.JJ)(c,r),r}}}},5180:function(e,t,n){"use strict";n.d(t,{T:function(){return u},y:function(){return l}});var r=n(9903),i=n(3396),s=n(3766),o=n(2879);const a={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},l=(0,s.U)({location:String},"location");function u(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=(0,r.Vw)(),l=(0,i.Fl)((()=>{if(!e.location)return{};const{side:r,align:i}=(0,o.wW)(e.location.split(" ").length>1?e.location:`${e.location} center`,s.value);function l(e){return n?n(e):0}const u={};return"center"!==r&&(t?u[a[r]]=`calc(100% - ${l(r)}px)`:u[r]=0),"center"!==i?t?u[a[i]]=`calc(100% - ${l(i)}px)`:u[i]=0:("center"===r?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),u}));return{locationStyles:l}}},6479:function(e,t,n){"use strict";n.d(t,{Gp:function(){return y},Ek:function(){return _},_$:function(){return w},Io:function(){return b}});var r=n(8717),i=n(3766),s=n(7514),o=n(4870),a=n(3396);const l={open:e=>{let{id:t,value:n,opened:r,parents:i}=e;if(n){const e=new Set;e.add(t);let n=i.get(t);while(null!=n)e.add(n),n=i.get(n);return e}return r.delete(t),r},select:()=>null},u={open:e=>{let{id:t,value:n,opened:r,parents:i}=e;if(n){let e=i.get(t);r.add(t);while(null!=e&&e!==t)r.add(e),e=i.get(e);return r}return r.delete(t),r},select:()=>null},c={open:u.open,select:e=>{let{id:t,value:n,opened:r,parents:i}=e;if(!n)return r;const s=[];let o=i.get(t);while(null!=o)s.push(o),o=i.get(o);return new Set(s)}},h=e=>{const t={select:t=>{let{id:n,value:r,selected:i}=t;if(e&&!r){const e=Array.from(i.entries()).reduce(((e,t)=>{let[n,r]=t;return"on"===r?[...e,n]:e}),[]);if(1===e.length&&e[0]===n)return i}return i.set(n,r?"on":"off"),i},in:(e,n,r)=>{let i=new Map;for(const s of e||[])i=t.select({id:s,value:!0,selected:new Map(i),children:n,parents:r});return i},out:e=>{const t=[];for(const[n,r]of e.entries())"on"===r&&t.push(n);return t}};return t},d=e=>{const t=h(e),n={select:e=>{let{selected:n,id:r,...i}=e;const s=n.has(r)?new Map([[r,n.get(r)]]):new Map;return t.select({...i,id:r,selected:s})},in:(e,n,r)=>{let i=new Map;return null!=e&&e.length&&(i=t.in(e.slice(0,1),n,r)),i},out:(e,n,r)=>t.out(e,n,r)};return n},f=e=>{const t=h(e),n={select:e=>{let{id:n,selected:r,children:i,...s}=e;return i.has(n)?r:t.select({id:n,selected:r,children:i,...s})},in:t.in,out:t.out};return n},p=e=>{const t=d(e),n={select:e=>{let{id:n,selected:r,children:i,...s}=e;return i.has(n)?r:t.select({id:n,selected:r,children:i,...s})},in:t.in,out:t.out};return n},m=e=>{const t={select:t=>{let{id:n,value:r,selected:i,children:s,parents:o}=t;const a=new Map(i),l=[n];while(l.length){const e=l.shift();i.set(e,r?"on":"off"),s.has(e)&&l.push(...s.get(e))}let u=o.get(n);while(u){const e=s.get(u),t=e.every((e=>"on"===i.get(e))),n=e.every((e=>!i.has(e)||"off"===i.get(e)));i.set(u,t?"on":n?"off":"indeterminate"),u=o.get(u)}if(e&&!r){const e=Array.from(i.entries()).reduce(((e,t)=>{let[n,r]=t;return"on"===r?[...e,n]:e}),[]);if(0===e.length)return a}return i},in:(e,n,r)=>{let i=new Map;for(const s of e||[])i=t.select({id:s,value:!0,selected:new Map(i),children:n,parents:r});return i},out:(e,t)=>{const n=[];for(const[r,i]of e.entries())"on"!==i||t.has(r)||n.push(r);return n}};return t},v=Symbol.for("vuetify:nested"),g={id:(0,o.iH)(),root:{register:()=>null,unregister:()=>null,parents:(0,o.iH)(new Map),children:(0,o.iH)(new Map),open:()=>null,select:()=>null,opened:(0,o.iH)(new Set),selected:(0,o.iH)(new Map),selectedValues:(0,o.iH)([])}},y=(0,i.U)({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),_=e=>{let t=!1;const n=(0,o.iH)(new Map),i=(0,o.iH)(new Map),g=(0,r.z)(e,"opened",e.opened,(e=>new Set(e)),(e=>[...e.values()])),y=(0,a.Fl)((()=>{if("object"===typeof e.selectStrategy)return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return p(e.mandatory);case"leaf":return f(e.mandatory);case"independent":return h(e.mandatory);case"single-independent":return d(e.mandatory);case"classic":default:return m(e.mandatory)}})),_=(0,a.Fl)((()=>{if("function"===typeof e.openStrategy)return e.openStrategy;switch(e.openStrategy){case"list":return c;case"single":return l;case"multiple":default:return u}})),b=(0,r.z)(e,"selected",e.selected,(e=>y.value.in(e,n.value,i.value)),(e=>y.value.out(e,n.value,i.value)));function w(e){const t=[];let n=e;while(null!=n)t.unshift(n),n=i.value.get(n);return t}(0,a.Jd)((()=>{t=!0}));const k=(0,s.FN)("nested"),C={id:(0,o.iH)(),root:{opened:g,selected:b,selectedValues:(0,a.Fl)((()=>{const e=[];for(const[t,n]of b.value.entries())"on"===n&&e.push(t);return e})),register:(e,t,r)=>{t&&e!==t&&i.value.set(e,t),r&&n.value.set(e,[]),null!=t&&n.value.set(t,[...n.value.get(t)||[],e])},unregister:e=>{if(t)return;n.value.delete(e);const r=i.value.get(e);if(r){var s;const t=null!=(s=n.value.get(r))?s:[];n.value.set(r,t.filter((t=>t!==e)))}i.value.delete(e),g.value.delete(e)},open:(e,t,r)=>{k.emit("click:open",{id:e,value:t,path:w(e),event:r});const s=_.value.open({id:e,value:t,opened:new Set(g.value),children:n.value,parents:i.value,event:r});s&&(g.value=s)},select:(e,t,r)=>{k.emit("click:select",{id:e,value:t,path:w(e),event:r});const s=y.value.select({id:e,value:t,selected:new Map(b.value),children:n.value,parents:i.value,event:r});s&&(b.value=s);const o=_.value.select({id:e,value:t,selected:new Map(b.value),opened:new Set(g.value),children:n.value,parents:i.value,event:r});o&&(g.value=o)},children:n,parents:i}};return(0,a.JJ)(v,C),C.root},b=(e,t)=>{const n=(0,a.f3)(v,g),r=(0,a.Fl)((()=>{var t;return null!=(t=e.value)?t:(0,s.sq)().toString()})),i={...n,id:r,open:(e,t)=>n.root.open(r.value,e,t),isOpen:(0,a.Fl)((()=>n.root.opened.value.has(r.value))),parent:(0,a.Fl)((()=>n.root.parents.value.get(r.value))),select:(e,t)=>n.root.select(r.value,e,t),isSelected:(0,a.Fl)((()=>"on"===n.root.selected.value.get(r.value))),isIndeterminate:(0,a.Fl)((()=>"indeterminate"===n.root.selected.value.get(r.value))),isLeaf:(0,a.Fl)((()=>!n.root.children.value.get(r.value))),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(r.value,n.id.value,t),(0,a.Jd)((()=>{!n.isGroupActivator&&n.root.unregister(r.value)})),t&&(0,a.JJ)(v,i),i},w=()=>{const e=(0,a.f3)(v,g);(0,a.JJ)(v,{...e,isGroupActivator:!0})}},489:function(e,t,n){"use strict";n.d(t,{F:function(){return a},K:function(){return l}});n(6699);var r=n(3396),i=n(3766),s=n(7514);const o=["static","relative","fixed","absolute","sticky"],a=(0,i.U)({position:{type:String,validator:e=>o.includes(e)}},"position");function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.BL)();const n=(0,r.Fl)((()=>e.position?`${t}--${e.position}`:void 0));return{positionClasses:n}}},8717:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(3396),i=n(4870),s=n(7514),o=n(131);function a(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e=>e;const u=(0,s.FN)("useProxiedModel"),c=(0,r.Fl)((()=>{var n,r;return!("undefined"===typeof e[t]||!(null!=u&&null!=(n=u.vnode.props)&&n.hasOwnProperty(t)||null!=u&&null!=(r=u.vnode.props)&&r.hasOwnProperty((0,o.mA)(t))))})),h=(0,i.iH)(a(e[t]));return(0,r.Fl)({get(){return c.value?a(e[t]):h.value},set(n){(c.value?a(e[t]):h.value)!==n&&(h.value=n,null==u||u.emit(`update:${t}`,l(n)))}})}},3712:function(e,t,n){"use strict";n.d(t,{y:function(){return o}});var r=n(4870),i=n(3396),s=n(2385);function o(e){const t=(0,r.iH)(),n=(0,r.iH)();if(s.BR){const r=new ResizeObserver((t=>{null==e||e(t,r),t.length&&(n.value=t[0].contentRect)}));(0,i.Jd)((()=>{r.disconnect()})),(0,i.YP)(t,((e,t)=>{t&&(r.unobserve(t),n.value=void 0),e&&r.observe(e)}),{flush:"post"})}return{resizeRef:t,contentRect:(0,r.OT)(n)}}},4231:function(e,t,n){"use strict";n.d(t,{I:function(){return a},b:function(){return l}});var r=n(3396),i=n(4870),s=n(3766),o=n(7514);const a=(0,s.U)({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.BL)();const n=(0,r.Fl)((()=>{const n=(0,i.dq)(e)?e.value:e.rounded,r=[];if(!0===n||""===n)r.push(`${t}--rounded`);else if("string"===typeof n||0===n)for(const e of String(n).split(" "))r.push(`rounded-${e}`);return r}));return{roundedClasses:n}}},6183:function(e,t,n){"use strict";n.d(t,{GN:function(){return c},Kx:function(){return d},nB:function(){return u},tv:function(){return l}});var r=n(7514),i=n(3766),s=n(2385),o=n(3396),a=n(4870);function l(){var e,t;return null==(e=(0,r.FN)("useRouter"))||null==(t=e.proxy)?void 0:t.$router}function u(e,t){const n=(0,o.LL)("RouterLink"),r=(0,o.Fl)((()=>!(!e.href&&!e.to))),i=(0,o.Fl)((()=>(null==r?void 0:r.value)||!(!t.onClick&&!t.onClickOnce)));if("string"===typeof n)return{isLink:r,isClickable:i,href:(0,a.Vh)(e,"href")};const s=e.to?n.useLink(e):void 0;return{...s,isLink:r,isClickable:i,href:(0,o.Fl)((()=>e.to?null==s?void 0:s.route.value.href:e.href))}}const c=(0,i.U)({href:String,replace:Boolean,to:[String,Object]},"router");let h=!1;function d(e,t){let n,r,i=!1;function l(e){var t;null!=(t=e.state)&&t.replaced||(i=!0,setTimeout((()=>i=!1)))}s.BR&&((0,o.Y3)((()=>{window.addEventListener("popstate",l),n=null==e?void 0:e.beforeEach(((e,n,r)=>{h?i?t(r):r():setTimeout((()=>i?t(r):r())),h=!0})),r=null==e?void 0:e.afterEach((()=>{h=!1}))})),(0,a.EB)((()=>{var e,t;window.removeEventListener("popstate",l),null==(e=n)||e(),null==(t=r)||t()})))}},9903:function(e,t,n){"use strict";n.d(t,{Cm:function(){return o},is:function(){return a},Vw:function(){return u}});n(1703);var r=n(4870),i=n(3396);const s={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},o=Symbol.for("vuetify:rtl");function a(e,t){var n,i;return l({rtl:{...s,...null!=(n=null==t?void 0:t.rtl)?n:{}},isRtl:(0,r.iH)(null!=(i=null==t?void 0:t.defaultRtl)&&i),rtlClasses:(0,r.iH)("")},e)}function l(e,t,n){const r=(0,i.Fl)((()=>"boolean"===typeof(null==n?void 0:n.rtl)?n.rtl:t.current.value&&e.rtl.hasOwnProperty(t.current.value)?e.rtl[t.current.value]:e.isRtl.value));return{isRtl:r,rtl:e.rtl,rtlClasses:(0,i.Fl)((()=>"v-locale--is-"+(r.value?"rtl":"ltr")))}}function u(){const e=(0,i.f3)(o);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return e}},5975:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var r=n(7514);function i(){const e=(0,r.FN)("useScopeId"),t=e.vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}},9374:function(e,t,n){"use strict";n.d(t,{Z:function(){return l},t:function(){return u}});n(6699);var r=n(3396),i=n(3766),s=n(7514),o=n(131);const a=["x-small","small","default","large","x-large"],l=(0,i.U)({size:{type:[String,Number],default:"default"}},"size");function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.BL)();const n=(0,r.Fl)((()=>a.includes(e.size)?`${t}--size-${e.size}`:void 0)),i=(0,r.Fl)((()=>!a.includes(e.size)&&e.size?{width:(0,o.kb)(e.size),height:(0,o.kb)(e.size)}:void 0));return{sizeClasses:n,sizeStyles:i}}},1372:function(e,t,n){"use strict";n.d(t,{u:function(){return s}});var r=n(4870),i=n(3396);function s(){const e=(0,r.iH)(!1);(0,i.bv)((()=>{window.requestAnimationFrame((()=>{e.value=!0}))}));const t=(0,i.Fl)((()=>e.value?void 0:{transition:"none !important"}));return{ssrBootStyles:t,isBooted:(0,r.OT)(e)}}},1138:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(3766);const i=(0,r.U)({tag:{type:String,default:"div"}},"tag")},7041:function(e,t,n){"use strict";n.d(t,{bo:function(){return x},jG:function(){return O},x$:function(){return A},ER:function(){return P}});n(1703);var r=n(4870),i=n(3396),s=n(3766),o=n(131),a=n(661),l=n(2385),u=n(7514);
/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
const c=2.4,h=.2126729,d=.7151522,f=.072175,p=.55,m=.58,v=.57,g=.62,y=.03,_=1.45,b=5e-4,w=1.25,k=1.25,C=.078,E=12.82051282051282,I=.06,S=.001;function T(e,t){const n=((e>>16&255)/255)**c,r=((e>>8&255)/255)**c,i=((e>>0&255)/255)**c,s=((t>>16&255)/255)**c,o=((t>>8&255)/255)**c,a=((t>>0&255)/255)**c;let l,u=n*h+r*d+i*f,T=s*h+o*d+a*f;if(u<=y&&(u+=(y-u)**_),T<=y&&(T+=(y-T)**_),Math.abs(T-u)<b)return 0;if(T>u){const e=(T**p-u**m)*w;l=e<S?0:e<C?e-e*E*I:e-I}else{const e=(T**g-u**v)*k;l=e>-S?0:e>-C?e-e*E*I:e+I}return 100*l}const x=Symbol.for("vuetify:theme"),A=(0,s.U)({theme:String},"theme"),R={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#C2C2C2"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#B7B7B7"}}}};function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;if(!e)return{...R,isDisabled:!0};const t={};for(const[s,a]of Object.entries(null!=(n=e.themes)?n:{})){var n,r,i;const e=a.dark?null==(r=R.themes)?void 0:r.dark:null==(i=R.themes)?void 0:i.light;t[s]=(0,o.Ee)(e,a)}return(0,o.Ee)(R,{...e,themes:t})}function O(e,t){const n=e._context.provides.usehead,s=(0,r.qj)(N(t)),u=(0,r.iH)(s.defaultTheme),c=(0,r.iH)(s.themes),h=(0,i.Fl)((()=>{const e={};for(const[t,n]of Object.entries(c.value)){const r=e[t]={...n,colors:{...n.colors}};if(s.variations)for(const e of s.variations.colors){const t=r.colors[e];for(const n of["lighten","darken"]){const i="lighten"===n?a.$n:a._j;for(const l of(0,o.MT)(s.variations[n],1))r.colors[`${e}-${n}-${l}`]=(0,a.I4)(i((0,a.jx)(t),l))}}for(const e of Object.keys(r.colors)){if(/on-[a-z]/.test(e)||r.colors[`on-${e}`])continue;const t=`on-${e}`,n=(0,a.jx)(r.colors[e]),i=Math.abs(T(0,n)),s=Math.abs(T(16777215,n));r.colors[t]=s>Math.min(i,50)?"#fff":"#000"}}return e})),d=(0,i.Fl)((()=>h.value[u.value])),f=(0,i.Fl)((()=>{const e=[];d.value.dark&&D(e,":root",["color-scheme: dark"]);for(const[n,r]of Object.entries(h.value)){const{variables:t,dark:i}=r;D(e,`.v-theme--${n}`,["color-scheme: "+(i?"dark":"normal"),...L(r),...Object.keys(t).map((e=>{const n=t[e],r="string"===typeof n&&n.startsWith("#")?(0,a.nA)(n):void 0,i=r?`${r.r}, ${r.g}, ${r.b}`:void 0;return`--v-${e}: ${null!=i?i:n}`}))])}const t=new Set(Object.values(h.value).flatMap((e=>Object.keys(e.colors))));for(const n of t)/on-[a-z]/.test(n)?D(e,`.${n}`,[`color: rgb(var(--v-theme-${n})) !important`]):(D(e,`.bg-${n}`,[`--v-theme-overlay-multiplier: var(--v-theme-${n}-overlay-multiplier)`,`background: rgb(var(--v-theme-${n})) !important`,`color: rgb(var(--v-theme-on-${n})) !important`]),D(e,`.text-${n}`,[`color: rgb(var(--v-theme-${n})) !important`]),D(e,`.border-${n}`,[`--v-border-color: var(--v-theme-${n})`]));return e.map(((e,t)=>0===t?e:`    ${e}`)).join("")}));if(n)n.addHeadObjs((0,i.Fl)((()=>({style:[{children:f.value,type:"text/css",id:"vuetify-theme-stylesheet"}]})))),l.BR&&(0,i.m0)((()=>n.updateDOM()));else{let m=l.BR?document.getElementById("vuetify-theme-stylesheet"):null;function v(){if(!s.isDisabled){if("undefined"!==typeof document&&!m){const e=document.createElement("style");e.type="text/css",e.id="vuetify-theme-stylesheet",m=e,document.head.appendChild(m)}m&&(m.innerHTML=f.value)}}(0,i.YP)(f,v,{immediate:!0})}const p=(0,i.Fl)((()=>s.isDisabled?void 0:`v-theme--${u.value}`));return{isDisabled:s.isDisabled,name:u,themes:c,current:d,computedThemes:h,themeClasses:p,styles:f,global:{name:u,current:d}}}function P(e){(0,u.FN)("provideTheme");const t=(0,i.f3)(x,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=(0,i.Fl)((()=>{var n;return null!=(n=e.theme)?n:null==t?void 0:t.name.value})),r=(0,i.Fl)((()=>t.isDisabled?void 0:`v-theme--${n.value}`)),s={...t,name:n,themeClasses:r};return(0,i.JJ)(x,s),s}function D(e,t,n){e.push(`${t} {\n`,...n.map((e=>`  ${e};\n`)),"}\n")}function L(e){const t=e.dark?2:1,n=e.dark?1:2,r=[];for(const[i,s]of Object.entries(e.colors)){const e=(0,a.nA)(s);r.push(`--v-theme-${i}: ${e.r},${e.g},${e.b}`),i.startsWith("on-")||r.push(`--v-theme-${i}-overlay-multiplier: ${(0,a.zT)(s)>.18?t:n}`)}return r}},4906:function(e,t,n){"use strict";n.d(t,{J:function(){return a},X:function(){return o}});var r=n(9242),i=n(3396),s=n(3766);const o=(0,s.U)({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>!0!==e}},"transition"),a=(e,t)=>{var n;let{slots:s}=t;const{transition:o,...a}=e;if(!o||"boolean"===typeof o)return null==(n=s.default)?void 0:n.call(s);const{component:l=r.uT,...u}="object"===typeof o?o:{};return(0,i.h)(l,(0,i.dG)("string"===typeof o?{name:o}:u,a),s)}},5221:function(e,t,n){"use strict";n.d(t,{Ux:function(){return u},bk:function(){return c},c1:function(){return h}});n(6699);var r=n(3396),i=n(2370),s=n(4870),o=n(3766),a=n(7514);const l=["elevated","flat","tonal","outlined","text","plain"];function u(e,t){return(0,r.Wm)(r.HY,null,[e&&(0,r.Wm)("div",{key:"overlay",class:`${t}__overlay`},null),(0,r.Wm)("div",{key:"underlay",class:`${t}__underlay`},null)])}const c=(0,o.U)({color:String,variant:{type:String,default:"elevated",validator:e=>l.includes(e)}},"variant");function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.BL)();const n=(0,r.Fl)((()=>{const{variant:n}=(0,s.SU)(e);return`${t}--variant-${n}`})),{colorClasses:o,colorStyles:l}=(0,i.rd)((0,r.Fl)((()=>{const{variant:t,color:n}=(0,s.SU)(e);return{[["elevated","flat"].includes(t)?"background":"text"]:n}})));return{colorClasses:o,colorStyles:l,variantClasses:n}}},7052:function(e,t,n){"use strict";var r=n(2385);function i(e,t){if(!r.cu)return;const n=t.modifiers||{},i=t.value,{handler:o,options:a}="object"===typeof i?i:{handler:i,options:{}},l=new IntersectionObserver((function(){var r;let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;const l=null==(r=e._observe)?void 0:r[t.instance.$.uid];if(!l)return;const u=i.some((e=>e.isIntersecting));!o||n.quiet&&!l.init||n.once&&!u&&!l.init||o(u,i,a),u&&n.once?s(e,t):l.init=!0}),a);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:l},l.observe(e)}function s(e,t){var n;const r=null==(n=e._observe)?void 0:n[t.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const o={mounted:i,unmounted:s};t["Z"]=o},3824:function(e,t,n){"use strict";n.d(t,{H:function(){return S},Z:function(){return T}});var r=n(131);const i=Symbol("rippleStop"),s=80;function o(e,t){e.style.transform=t,e.style.webkitTransform=t}function a(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function l(e){return"TouchEvent"===e.constructor.name}function u(e){return"KeyboardEvent"===e.constructor.name}const c=function(e,t){var n;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=0,s=0;if(!u(e)){const n=t.getBoundingClientRect(),r=l(e)?e.touches[e.touches.length-1]:e;i=r.clientX-n.left,s=r.clientY-n.top}let o=0,a=.3;null!=(n=t._ripple)&&n.circle?(a=.15,o=t.clientWidth/2,o=r.center?o:o+Math.sqrt((i-o)**2+(s-o)**2)/4):o=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=(t.clientWidth-2*o)/2+"px",h=(t.clientHeight-2*o)/2+"px",d=r.center?c:i-o+"px",f=r.center?h:s-o+"px";return{radius:o,scale:a,x:d,y:f,centerX:c,centerY:h}},h={show(e,t){var n;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==t||null==(n=t._ripple)||!n.enabled)return;const i=document.createElement("span"),s=document.createElement("span");i.appendChild(s),i.className="v-ripple__container",r.class&&(i.className+=` ${r.class}`);const{radius:l,scale:u,x:h,y:d,centerX:f,centerY:p}=c(e,t,r),m=2*l+"px";s.className="v-ripple__animation",s.style.width=m,s.style.height=m,t.appendChild(i);const v=window.getComputedStyle(t);v&&"static"===v.position&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),o(s,`translate(${h}, ${d}) scale3d(${u},${u},${u})`),a(s,0),s.dataset.activated=String(performance.now()),setTimeout((()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),o(s,`translate(${f}, ${p}) scale3d(1,1,1)`),a(s,.08)}),0)},hide(e){var t;if(null==e||null==(t=e._ripple)||!t.enabled)return;const n=e.getElementsByClassName("v-ripple__animation");if(0===n.length)return;const r=n[n.length-1];if(r.dataset.isHiding)return;r.dataset.isHiding="true";const i=performance.now()-Number(r.dataset.activated),s=Math.max(250-i,0);setTimeout((()=>{r.classList.remove("v-ripple__animation--in"),r.classList.add("v-ripple__animation--out"),a(r,0),setTimeout((()=>{const t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),r.parentNode&&e.removeChild(r.parentNode)}),300)}),s)}};function d(e){return"undefined"===typeof e||!!e}function f(e){const t={},n=e.currentTarget;if(null!=n&&n._ripple&&!n._ripple.touched&&!e[i]){if(e[i]=!0,l(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||u(e),n._ripple.class&&(t.class=n._ripple.class),l(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{h.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{var e;null!=n&&null!=(e=n._ripple)&&e.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),s)}else h.show(e,n,t)}}function p(e){e[i]=!0}function m(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=window.setTimeout((()=>{m(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),h.hide(t)}}function v(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let g=!1;function y(e){g||e.keyCode!==r.Do.enter&&e.keyCode!==r.Do.space||(g=!0,f(e))}function _(e){g=!1,m(e)}function b(e){g&&(g=!1,m(e))}function w(e,t,n){var i;const{value:s,modifiers:o}=t,a=d(s);if(a||h.hide(e),e._ripple=null!=(i=e._ripple)?i:{},e._ripple.enabled=a,e._ripple.centered=o.center,e._ripple.circle=o.circle,(0,r.Kn)(s)&&s.class&&(e._ripple.class=s.class),a&&!n){if(o.stop)return e.addEventListener("touchstart",p,{passive:!0}),void e.addEventListener("mousedown",p);e.addEventListener("touchstart",f,{passive:!0}),e.addEventListener("touchend",m,{passive:!0}),e.addEventListener("touchmove",v,{passive:!0}),e.addEventListener("touchcancel",m),e.addEventListener("mousedown",f),e.addEventListener("mouseup",m),e.addEventListener("mouseleave",m),e.addEventListener("keydown",y),e.addEventListener("keyup",_),e.addEventListener("blur",b),e.addEventListener("dragstart",m,{passive:!0})}else!a&&n&&k(e)}function k(e){e.removeEventListener("mousedown",f),e.removeEventListener("touchstart",f),e.removeEventListener("touchend",m),e.removeEventListener("touchmove",v),e.removeEventListener("touchcancel",m),e.removeEventListener("mouseup",m),e.removeEventListener("mouseleave",m),e.removeEventListener("keydown",y),e.removeEventListener("keyup",_),e.removeEventListener("dragstart",m),e.removeEventListener("blur",b)}function C(e,t){w(e,t,!1)}function E(e){delete e._ripple,k(e)}function I(e,t){if(t.value===t.oldValue)return;const n=d(t.oldValue);w(e,t,n)}const S={mounted:C,unmounted:E,updated:I};var T=S},8957:function(e,t,n){"use strict";n.d(t,{Rd:function(){return p}});var r=n(8434),i=n(8157),s=n(4960),o=n(5738),a=n(7041),l=n(9903),u=n(131),c=n(1107),h=n(2385),d=n(7514),f=n(4870);const p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=t=>{const{blueprint:n,...p}=e,m=(0,u.Ee)(n,p),{aliases:v={},components:g={},directives:y={}}=m;for(const e in y)t.directive(e,y[e]);for(const e in g)t.component(e,g[e]);for(const e in v)t.component(e,(0,c.a)({...v[e],name:e}));function _(e){t.provide(r.tI,(0,r.yB)(m.defaults)),t.provide(i.x6,(0,i.fT)(m.display,e)),t.provide(a.bo,(0,a.jG)(t,m.theme)),t.provide(s.YK,(0,s._i)(m.icons)),t.provide(o.uM,(0,o.$2)(t,m.locale))}h.BR||_(),d.sq.reset();const b=t.mount;function w(e){var t,n,r;const i=this.$,s=null!=(t=null==(n=i.parent)?void 0:n.provides)?t:null==(r=i.vnode.appContext)?void 0:r.provides;if(s&&e in s)return s[e]}t.mount=(e,n,r)=>{_(n);const i=b(e,n,r);return t.mount=b,i},t.mixin({computed:{$vuetify(){return(0,f.qj)({defaults:w.call(this,r.tI),display:w.call(this,i.x6),theme:w.call(this,a.bo),icons:w.call(this,s.YK),locale:w.call(this,o.uM),rtl:w.call(this,l.Cm)})}}})};return{install:t}}},2879:function(e,t,n){"use strict";n.d(t,{Oe:function(){return c},aw:function(){return u},dd:function(){return h},tb:function(){return l},wW:function(){return o}});var r=n(131);const i=["top","bottom"],s=["start","end","left","right"];function o(e,t){let[n,o]=e.split(" ");return o||(o=(0,r.q9)(i,n)?"start":(0,r.q9)(s,n)?"top":"center"),{side:a(n,t),align:a(o,t)}}function a(e,t){return"start"===e?t?"right":"left":"end"===e?t?"left":"right":e}function l(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function u(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function c(e){return{side:e.align,align:e.side}}function h(e){return(0,r.q9)(i,e.side)?"y":"x"}},3122:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n(6309);function i(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),i=n.transform;if(i){let s,o,a,l,u;if(i.startsWith("matrix3d("))s=i.slice(9,-1).split(/, /),o=+s[0],a=+s[5],l=+s[12],u=+s[13];else{if(!i.startsWith("matrix("))return new r.x(t);s=i.slice(7,-1).split(/, /),o=+s[0],a=+s[3],l=+s[4],u=+s[5]}const c=n.transformOrigin,h=t.x-l-(1-o)*parseFloat(c),d=t.y-u-(1-a)*parseFloat(c.slice(c.indexOf(" ")+1)),f=o?t.width/o:e.offsetWidth+1,p=a?t.height/a:e.offsetHeight+1;return new r.x({x:h,y:d,width:f,height:p})}return new r.x(t)}},6309:function(e,t,n){"use strict";n.d(t,{p:function(){return i},x:function(){return r}});class r{constructor(e){let{x:t,y:n,width:r,height:i}=e;this.x=t,this.y=n,this.width=r,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function i(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}},661:function(e,t,n){"use strict";n.d(t,{jx:function(){return g},nA:function(){return _},_j:function(){return w},zT:function(){return k},I4:function(){return y},NA:function(){return v},$n:function(){return b}});n(1703);var r=n(6033),i=n(131);const s=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],o=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,a=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],l=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function u(e){const t=Array(3),n=o,r=s;for(let s=0;s<3;++s)t[s]=Math.round(255*(0,i.uZ)(n(r[s][0]*e[0]+r[s][1]*e[1]+r[s][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function c(e){const t=[0,0,0],n=l,r=a,i=n((e>>16&255)/255),s=n((e>>8&255)/255),o=n((e>>0&255)/255);for(let a=0;a<3;++a)t[a]=r[a][0]*i+r[a][1]*s+r[a][2]*o;return t}const h=.20689655172413793,d=e=>e>h**3?Math.cbrt(e):e/(3*h**2)+4/29,f=e=>e>h?e**3:3*h**2*(e-4/29);function p(e){const t=d,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function m(e){const t=f,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}function v(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function g(e){let t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`);{let n=e.startsWith("#")?e.substring(1):e;3===n.length&&(n=n.split("").map((e=>e+e)).join("")),6!==n.length&&(0,r.Kd)(`'${e}' is not a valid rgb color`),t=parseInt(n,16)}}return t<0?((0,r.Kd)(`Colors cannot be negative: '${e}'`),t=0):(t>16777215||isNaN(t))&&((0,r.Kd)(`'${e}' is not a valid rgb color`),t=16777215),t}function y(e){let t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function _(e){const t=g(e);return{r:(16711680&t)>>16,g:(65280&t)>>8,b:255&t}}function b(e,t){const n=p(c(e));return n[0]=n[0]+10*t,u(m(n))}function w(e,t){const n=p(c(e));return n[0]=n[0]-10*t,u(m(n))}function k(e){const t=g(e);return c(t)[1]}},6033:function(e,t,n){"use strict";n.d(t,{Kd:function(){return i},N6:function(){return s}});n(6699);function r(e,t,n){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?u(t):"")}function i(e,t,n){const i=r(e,t,n);null!=i&&console.warn(i)}function s(e,t,n){const i=r(e,t,n);null!=i&&console.error(i)}const o=/(?:^|[-_])(\w)/g,a=e=>e.replace(o,(e=>e.toUpperCase())).replace(/[-_]/g,"");function l(e,t){if(e.$root===e)return"<Root>";const n="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let r=n.name||n._componentTag;const i=n.__file;if(!r&&i){const e=i.match(/([^/\\]+)\.vue$/);r=null==e?void 0:e[1]}return(r?`<${a(r)}>`:"<Anonymous>")+(i&&!1!==t?` at ${i}`:"")}function u(e){if(e._isVue&&e.$parent){const t=[];let n=0;while(e){if(t.length>0){const r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${l(e[0])}... (${e[1]} recursive calls)`:l(e)}`)).join("\n")}return`\n\n(found in ${l(e)})`}},1114:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var r=n(2268),i=n(3396),s=n(1107);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return(0,s.a)({name:null!=n?n:(0,r.kC)((0,r._A)(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(t,n){let{slots:r}=n;return()=>{var n;return(0,i.h)(t.tag,{class:e},null==(n=r.default)?void 0:n.call(r))}}})}},1107:function(e,t,n){"use strict";n.d(t,{a:function(){return u},e:function(){return c}});var r=n(3396),i=n(4870),s=n(6033),o=n(131),a=n(8434);function l(e,t){var n,r;return(null==(n=e.props)?void 0:n.hasOwnProperty(t))||(null==(r=e.props)?void 0:r.hasOwnProperty((0,o.mA)(t)))}const u=function(e){var t,n;if(e._setup=null!=(t=e._setup)?t:e.setup,!e.name)return(0,s.Kd)("The component is missing an explicit name, unable to generate default prop value"),e;e._setup&&(e.props=null!=(n=e.props)?n:{},e.props._as=String,e.setup=function(t,n){const s=(0,r.FN)(),o=(0,a.qy)(),u=(0,i.XI)(),c=(0,i.Um)({...(0,i.IU)(t)});(0,r.m0)((()=>{var n;const r=o.value.global,i=o.value[null!=(n=t._as)?n:e.name];if(i){const e=Object.entries(i).filter((e=>{let[t]=e;return t.startsWith("V")}));e.length&&(u.value=Object.fromEntries(e))}for(const e of Object.keys(t)){let n;var a,h;if(l(s.vnode,e))n=t[e];else n=null!=(a=null!=(h=null==i?void 0:i[e])?h:null==r?void 0:r[e])?a:t[e];c[e]!==n&&(c[e]=n)}}));const h=e._setup(c,n);let d;return(0,r.YP)(u,((e,t)=>{!e&&d?d.stop():e&&!t&&(d=(0,i.B)(),d.run((()=>{(0,a.AF)(e)})))}),{immediate:!0}),h});return e};function c(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return t=>(e?u:r.aZ)(t)}},8587:function(e,t,n){"use strict";n.d(t,{Ly:function(){return r},uX:function(){return i},x0:function(){return s}});const r="cubic-bezier(0.4, 0, 0.2, 1)",i="cubic-bezier(0.0, 0, 0.2, 1)",s="cubic-bezier(0.4, 0, 1, 1)"},7514:function(e,t,n){"use strict";n.d(t,{BL:function(){return o},FN:function(){return s},sq:function(){return u}});n(1703);var r=n(3396),i=n(131);function s(e,t){const n=(0,r.FN)();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function o(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables";return(0,i.mA)(null==(e=s(t).type)?void 0:e.name)}let a=0,l=new WeakMap;function u(){const e=s("getUid");if(l.has(e))return l.get(e);{const t=a++;return l.set(e,t),t}}u.reset=()=>{a=0,l=new WeakMap}},2385:function(e,t,n){"use strict";n.d(t,{BR:function(){return r},Z1:function(){return o},cu:function(){return i},sR:function(){return s}});const r="undefined"!==typeof window,i=r&&"IntersectionObserver"in window,s=r&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),o=r&&CSS.supports("selector(:focus-visible)")},131:function(e,t,n){"use strict";n.d(t,{An:function(){return C},Do:function(){return b},Ee:function(){return S},FT:function(){return E},Kn:function(){return y},MT:function(){return v},PU:function(){return O},RA:function(){return T},S3:function(){return P},bY:function(){return A},ei:function(){return k},ff:function(){return w},kb:function(){return g},mA:function(){return x},q9:function(){return D},qF:function(){return m},rU:function(){return _},uZ:function(){return I},vO:function(){return p},vZ:function(){return f}});n(1703),n(6699);var r=n(3396),i=n(4870);function s(e,t,n){o(e,t),t.set(e,n)}function o(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function a(e,t,n){var r=c(e,t,"set");return l(e,r,n),n}function l(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}function u(e,t){var n=c(e,t,"get");return h(e,n)}function c(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function h(e,t){return t.get?t.get.call(e):t.value}function d(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function f(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>f(e[n],t[n])))}function p(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),d(e,t.split("."),n)):n}function m(e,t,n){if(null==t)return void 0===e?n:e;if(e!==Object(e))return n;if("string"===typeof t)return p(e,t,n);if(Array.isArray(t))return d(e,t,n);if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},((e,n)=>t+n))}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function y(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function _(e){return null==e?void 0:e.$el}const b=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),w=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function k(e,t){const n=Object.create(null),r=Object.create(null);for(const i in e)t.some((e=>e instanceof RegExp?e.test(i):e===i))?n[i]=e[i]:r[i]=e[i];return[n,r]}function C(e){return k(e,["class","style","id",/^data-/])}function E(e){return null==e?[]:Array.isArray(e)?e:[e]}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(t,Math.min(n,e))}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const i in e)r[i]=e[i];for(const i in t){const s=e[i],o=t[i];y(s)&&y(o)?r[i]=S(s,o,n):Array.isArray(s)&&Array.isArray(o)&&n?r[i]=n(s,o):r[i]=o}return r}function T(e){return e.map((e=>e.type===r.HY?T(e.children):e)).flat()}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function A(e,t){if(!t||"object"!==typeof t)return[];if(Array.isArray(t))return t.map((t=>A(e,t))).flat(1);if(Array.isArray(t.children))return t.children.map((t=>A(e,t))).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return A(e,t.component.subTree).flat(1)}return[]}var R=new WeakMap,N=new WeakMap;class O{constructor(e){s(this,R,{writable:!0,value:[]}),s(this,N,{writable:!0,value:0}),this.size=e}push(e){u(this,R)[u(this,N)]=e,a(this,N,(u(this,N)+1)%this.size)}values(){return u(this,R).slice(u(this,N)).concat(u(this,R).slice(0,u(this,N)))}}function P(e){return(0,i.BK)((0,i.qj)({value:(0,r.Fl)(e)}).value)}function D(e,t){return e.includes(t)}},3766:function(e,t,n){"use strict";function r(e,t){return n=>Object.keys(e).reduce(((r,i)=>{const s="object"===typeof e[i]&&null!=e[i]&&!Array.isArray(e[i]),o=s?e[i]:{type:e[i]};return r[i]=n&&i in n?{...o,default:n[i]}:o,t&&(r[i].source=t),r}),{})}n.d(t,{U:function(){return r}})},9888:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(7514);function i(e){const t=(0,r.FN)("useRender");t.render=e}}}]);
//# sourceMappingURL=chunk-vendors.d6fc2317.js.map