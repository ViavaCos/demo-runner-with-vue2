(function(e){function t(t){for(var r,o,c=t[0],l=t[1],s=t[2],i=0,f=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);h&&h(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return l.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"3f4bffca","chunk-18ed2515":"98e0fca8","chunk-5e4eb925":"d8c10b4c","chunk-7768d776":"4e9cc9c3","chunk-bdf3d89a":"9799039d","chunk-9855565e":"650986d1","chunk-0920cc1e":"246c3406","chunk-1f6659dc":"5941f7a7"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-5e4eb925":1,"chunk-7768d776":1,"chunk-bdf3d89a":1,"chunk-9855565e":1,"chunk-0920cc1e":1,"chunk-1f6659dc":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="static/css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-18ed2515":"31d6cfe0","chunk-5e4eb925":"7ebdab12","chunk-7768d776":"b9504981","chunk-bdf3d89a":"770425fb","chunk-9855565e":"376fb374","chunk-0920cc1e":"d19bafd4","chunk-1f6659dc":"dee7239c"}[e]+".css",a=l.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===r||i===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],i=s.getAttribute("data-href");if(i===r||i===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],h.parentNode.removeChild(h),n(u)},h.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=c(e);var f=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var h=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0002":function(e,t,n){},"44a3":function(e,t,n){"use strict";n("0002")},4805:function(e,t,n){"use strict";n("8ce0")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},e._l(e.routes,(function(t){return n("router-link",{key:t.name,attrs:{to:t.path}},[e._v(" "+e._s(t.name)+" ")])})),1),n("router-view")],1)},a=[],u=n("2909"),c=(n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f"),n("466d"),n("5319"),n("8c4f")),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},p=h,d=(n("4805"),n("2877")),v=Object(d["a"])(p,i,f,!1,null,"b9167eee",null),m=v.exports,b={name:"Home",components:{HelloWorld:m}},g=b,_=Object(d["a"])(g,l,s,!1,null,null,null),k=_.exports,y=[{path:"/virtual-list",name:"virtual-list",component:function(){return n.e("chunk-7768d776").then(n.bind(null,"b59e"))}},{path:"/traversal",name:"traversal",component:function(){return n.e("chunk-18ed2515").then(n.bind(null,"b283"))}},{path:"/lazy-img",name:"lazy-img",component:function(){return n.e("chunk-bdf3d89a").then(n.bind(null,"ed69"))}},{path:"/calc-expand",name:"calc-expand",component:function(){return n.e("chunk-5e4eb925").then(n.bind(null,"0f1f"))}}];r["a"].use(c["a"]);var j=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}];j.push.apply(j,Object(u["a"])(y)),console.log(j);var w=new c["a"]({routes:j});w.onError((function(e){var t=/Loading chunk (\w)+ failed/g,n=e.message.match(t),r=w.history.pending.fullPath;n&&w.replace(r)}));var E=w,O={name:"APP",data:function(){return{routes:E.options.routes||[]}}},x=O,P=(n("44a3"),Object(d["a"])(x,o,a,!1,null,"80eccc00",null)),C=P.exports;r["a"].config.productionTip=!1,new r["a"]({router:E,render:function(e){return e(C)}}).$mount("#app")},"8ce0":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"static/img/logo.82b9c7a5.png"}});