(function(e){function t(t){for(var n,o,c=t[0],l=t[1],s=t[2],i=0,f=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);h&&h(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(u.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function c(e){return l.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"3f4bffca","chunk-18ed2515":"98e0fca8","chunk-6e5e37a8":"b0202aff","chunk-b6c660d8":"19296a2c","chunk-9855565e":"650986d1","chunk-1f6659dc":"5941f7a7","chunk-99b17cf8":"91e2ed31"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={"chunk-6e5e37a8":1,"chunk-b6c660d8":1,"chunk-9855565e":1,"chunk-1f6659dc":1,"chunk-99b17cf8":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-18ed2515":"31d6cfe0","chunk-6e5e37a8":"98a266ff","chunk-b6c660d8":"e9263054","chunk-9855565e":"376fb374","chunk-1f6659dc":"dee7239c","chunk-99b17cf8":"f86ae006"}[e]+".css",a=l.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===n||i===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],i=s.getAttribute("data-href");if(i===n||i===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],h.parentNode.removeChild(h),r(u)},h.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=c(e);var f=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(h);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var h=i;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0002":function(e,t,r){},"44a3":function(e,t,r){"use strict";r("0002")},4805:function(e,t,r){"use strict";r("8ce0")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},e._l(e.routes,(function(t){return r("router-link",{key:t.name,attrs:{to:t.path}},[e._v(" "+e._s(t.name)+" ")])})),1),r("router-view")],1)},a=[],u=r("2909"),c=(r("d3b7"),r("3ca3"),r("ddb0"),r("ac1f"),r("466d"),r("5319"),r("8c4f")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},p=h,v=(r("4805"),r("2877")),d=Object(v["a"])(p,i,f,!1,null,"b9167eee",null),m=d.exports,g={name:"Home",components:{HelloWorld:m}},b=g,_=Object(v["a"])(b,l,s,!1,null,null,null),k=_.exports,y=[{path:"/virtual-list",name:"virtual-list",component:function(){return r.e("chunk-6e5e37a8").then(r.bind(null,"b59e"))}},{path:"/traversal",name:"traversal",component:function(){return r.e("chunk-18ed2515").then(r.bind(null,"b283"))}},{path:"/lazy-img",name:"lazy-img",component:function(){return r.e("chunk-b6c660d8").then(r.bind(null,"ed69"))}}];n["a"].use(c["a"]);var j=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}];j.push.apply(j,Object(u["a"])(y)),console.log(j);var w=new c["a"]({mode:"history",base:"",routes:j});w.onError((function(e){var t=/Loading chunk (\w)+ failed/g,r=e.message.match(t),n=w.history.pending.fullPath;r&&w.replace(n)}));var E=w,O={name:"APP",data:function(){return{routes:E.options.routes||[]}}},P=O,x=(r("44a3"),Object(v["a"])(P,o,a,!1,null,"80eccc00",null)),C=x.exports;n["a"].config.productionTip=!1,new n["a"]({router:E,render:function(e){return e(C)}}).$mount("#app")},"8ce0":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"static/img/logo.82b9c7a5.png"}});