(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1abcf972":"740c2f35","chunk-20c4f62e":"f500f6aa","chunk-2118e460":"68fca8ad","chunk-2d0c7ad7":"26704403","chunk-2f1138ea":"11e2f412","chunk-4134b290":"6009478a","chunk-4cc07186":"2599554c","chunk-bfeda8c2":"ceacb6fe"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1abcf972":1,"chunk-20c4f62e":1,"chunk-2118e460":1,"chunk-2f1138ea":1,"chunk-4134b290":1,"chunk-4cc07186":1,"chunk-bfeda8c2":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1abcf972":"ce5228cc","chunk-20c4f62e":"2d74a978","chunk-2118e460":"91e4cce0","chunk-2d0c7ad7":"31d6cfe0","chunk-2f1138ea":"ccb348f0","chunk-4134b290":"9e2f82fb","chunk-4cc07186":"5cefb920","chunk-bfeda8c2":"244ce312"}[e]+".css",c=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===a||l===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],h.parentNode.removeChild(h),n(o)},h.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var h=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0028":function(e,t,n){"use strict";var a=n("493f"),r=n.n(a);r.a},"1a25":function(e,t,n){},"493f":function(e,t,n){},"4b75":function(e,t,n){"use strict";var a=n("5a64"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"container"},[n("router-view")],1)],1)},c=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"header-container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:{name:"Home"}}},[a("img",{attrs:{src:n("cf05"),alt:""}})])],1),a("ul",{staticClass:"nav"},[a("li",[a("router-link",{attrs:{to:{name:"Home"}}},[e._v("首页")])],1),e.isLoading?a("li",[e._v("loading...")]):e._e(),e._l(e.data.slice(0,5),(function(t){return a("li",{key:t.channelId},[a("router-link",{attrs:{to:{name:"ChannelNews",params:{id:t.channelId}}}},[e._v(e._s(t.name))])],1)}))],2),a("div",{staticClass:"user"},[e.isLogining?a("span",[e._v("loading...")]):e.loginUser?[a("router-link",{attrs:{to:{name:"Personal"}}},[e._v(e._s(e.loginUser.nickname))]),a("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.handleLoginOut(t)}}},[e._v("退出登录")])]:[a("router-link",{attrs:{to:{name:"Login"}}},[e._v("登录")]),a("router-link",{attrs:{to:{name:"Reg"}}},[e._v("注册")])]],2)])])])},i=[],u=n("5530"),s=n("2f62"),l={computed:Object(u["a"])(Object(u["a"])({},Object(s["b"])("channels",["data","isLoading"])),Object(s["b"])("loginUser",{loginUser:"data",isLogining:"isLoading"})),methods:{handleLoginOut:function(){this.$store.dispatch("loginUser/loginOut"),this.$router.push({name:"Login"})}}},d=l,h=(n("0028"),n("2877")),f=Object(h["a"])(d,o,i,!1,null,"3254f772",null),p=f.exports,m={components:{Header:p}},g=m,b=(n("4b75"),Object(h["a"])(g,r,c,!1,null,"1eaaf0ef",null)),A=b.exports,w=(n("7371"),n("1a25"),n("8c4f")),v=(n("d3b7"),{routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-4134b290").then(n.bind(null,"bb51"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-bfeda8c2").then(n.bind(null,"a55b"))}},{path:"/reg",name:"Reg",component:function(){return n.e("chunk-2f1138ea").then(n.bind(null,"b8b8"))}},{path:"/personal",name:"Personal",component:function(){return n.e("chunk-4cc07186").then(n.bind(null,"90ab"))},meta:{auth:!0}},{path:"/protected",name:"Protected",component:function(){return n.e("chunk-2d0c7ad7").then(n.bind(null,"5248"))},meta:{auth:!0}},{path:"/auth",name:"Auth",component:function(){return n.e("chunk-1abcf972").then(n.bind(null,"2fef"))}},{path:"/channel/:id",name:"ChannelNews",component:function(){return n.e("chunk-20c4f62e").then(n.bind(null,"3244"))}},{path:"*",name:"404",component:function(){return n.e("chunk-2118e460").then(n.bind(null,"9703"))}}]}),k=(n("96cf"),n("1da1")),O=n("6e77"),L={namespaced:!0,state:{data:[],isLoading:!1},mutations:{setIsLoading:function(e,t){e.isLoading=t},setData:function(e,t){e.data=t}},actions:{fetchDatas:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("setIsLoading",!0),t.next=3,Object(O["b"])();case 3:n=t.sent,e.commit("setData",n),e.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()}}},E=n("fef9"),j={namespaced:!0,state:{data:null,isLoading:!1},mutations:{setIsLoading:function(e,t){e.isLoading=t},setData:function(e,t){e.data=t}},actions:{login:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("setIsLoading",!0),n.next=3,Object(E["a"])(t);case 3:return a=n.sent,r=!1,0===a.code&&(e.commit("setData",a.data),r=!0),e.commit("setIsLoading",!1),n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})))()},whoAmI:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("setIsLoading",!0),t.next=3,Object(E["d"])();case 3:n=t.sent,e.commit("setData",n),e.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()},loginOut:function(e){Object(E["b"])(),e.commit("setData",null)}}};a["a"].use(s["a"]);var y=new s["a"].Store({modules:{channels:L,loginUser:j}}),T=y;a["a"].use(w["a"]);var I=new w["a"](v);I.beforeEach((function(e,t,n){e.meta.auth?T.state.loginUser.isLoading?n({name:"Auth",query:{returnurl:e.fullPath}}):T.state.loginUser.data?n():n({name:"Login"}):n()}));var R=I;T.dispatch("channels/fetchDatas"),T.dispatch("loginUser/whoAmI"),new a["a"]({render:function(e){return e(A)},router:R,store:T}).$mount("#app")},"5a64":function(e,t,n){},"6e77":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));n("96cf");var a=n("1da1"),r=n("bc3a"),c=n.n(r),o="25d2e4fe17cc451d98ac10533930ab31";function i(){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("http://ali-news.showapi.com/channelList",{headers:{Authorization:"APPCODE ".concat(o)}});case 2:return t=e.sent,e.abrupt("return",t.data.showapi_res_body.channelList);case 4:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function s(e){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,a=i.length>2&&void 0!==i[2]?i[2]:10,e.next=4,c.a.get("http://ali-news.showapi.com/newsList",{headers:{Authorization:"APPCODE ".concat(o)},params:{channelId:t,page:n,maxResult:a,needAllList:!1,needContent:1}});case 4:return r=e.sent,e.abrupt("return",r.data.showapi_res_body.pagebean);case 6:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}},7371:function(e,t,n){},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADI2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OTZCQjhGQTc2MTYxMUU1QTg0RThGQjE2NDkxNjJEOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OTZCQjhGOTc2MTYxMUU1QTg0RThGQjE2NDkxNjJEOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTZBMTI3OTc2OTIxMUUzOTE4OThEOTBCRjhDRTQ3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NTZBMTI3QTc2OTIxMUUzOTE4OThEOTBCRjhDRTQ3NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlYejCoAAATWSURBVFhH7ZdbbBRVGMe/c2Z2dtvlYmkLiUAsiUHjLYQUTAzYrqb2YgIxEXjRVOODT1IItiZ0l2bYF4oYEX1EacITqcaYIC2glEXiLW1QXyREI0h8QExsa9ledmaO3xm/bHs6c7a7W2N84JdMu78zOzP/OeebM2fhLiXCEoPp14SApeQK3o0sZD/5jWweTNwcPnPyJFkom9vaX/SEWEuqULl9NfD7KslUGIO/WOOA3cUY76W2ANm+6+CN5chmEUJ4vMLc+O3HJ76nJoVN29s3iGlvhOHJqSkPXx6BypfqyEJgoouLmHdMgPiZmgJEEysxBckc5AXFtPsO7mTUNEtPD4ecOBYWSp4r+hSeUwPe8LXx6lVHeSZhT3HG91J7AKOu0t9CEdCwedvLz5PlqR+5sQP3bSVVMNfFwdAMoUzFBOwdqX8159/RhWeSp4HBeX/nfOQdyl7T4OXcww3t7TFSaHphXxxc7wipCl7N762QESDODrUdOCM//NPVDMfD5XvwAMf3eciasDZWkakwYHWTt8UbpDD65x+dOLZrSBWsDVXAlppkKph1xmNufuSU+kgMpN/Glj2kKo6AO8d/AawralC4w2LWgwbzjFzW+RGfqgpqz8NiBsRfWYdjGSxJCY7i0YutB/LBlOL0Yo6NX7lNqoInjD5ZQxIgLqZn3nSmnENhofxy2IrHakLJa4opF689ixIMH4RRLL8UaQDzoWXAa6Jk8xCwy99C4CujYD68jCwED5KZ5+xRMh8lmETEnPdx+viBNECB4pXdEdolsaf1BY+T+5Whb9zjpHkCwbDXHOy1Djno1KRg3BsDc33oiyIU+V2+Kv/QKuAVPGHCbrBtj5ryBIJJMq2piwLYR6Qqsl4asF64rl7mIOuysZYkCE4G/Zmm1GVShdBgEpw5OvHPFKkCi5tgPb6CTI+1aQWwCoNMBe8vG2GskzSANlim1b6Ohx8mDWDV40UxoA62BMPjd3QwIY6ca0ndJA2gDSaJ59xeLITwg/HIaAKHKawS5XA3YsFrzo619evkePwQaSgFg53eZmdFge42718CxurgtGWsqcB9cbIgHNjrX+/aN0kaSsFgkoZmpx8f0C9JVWTPhEwf0YLTg7h0oSX5IamWBYPZzPZw5dUhH21qUuDVFkQeXU4G/mdeZZEFyAnOO+TjSK5lwWCSzLPJYXzVfEAawNpSA8zEAbI4WPLVowF7qy/TnPyOtCBFBZOYzOnGXhsjVWBRDLSlGqwnqoFFNKcUMOoIo5tsQYoOdr7Z/h1fagdJA0Qeu8ffdGAlpC+3dYcvEEIoOpikdq33Hg7HNVIV7ZsSEeKqXMKTFUVJwfofsWc4xwWl7IBike9czjrkO5haiqKkYBJchg/ixc6SFgH7dKg5dY6kaEoOJh91fwmsWYbPBZdP0x4ztD90ClF6MCTTYl/Ff/jTbQEEfzfTsv8nspIoK5jEMCfS2CO3SANgad2KiVyatGTKDvZZU+8YeEw7L+GEvH+wzR4nLZmyg0lqJx7ow2fuCukcxDAW/AmSslhUsP6dO10PPGUZjh9cLsRu7LLip5QQFhVMcqm15wsMcYpUJjv1eWvPV2Rls+hgEmPGwV/iYhJDTXCHdVHz/4PEwMGU3EgXzb/SY5LxnPuW3Ejv8h8D8DcTbJmXTB9j7gAAAABJRU5ErkJggg=="},fef9:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return h}));n("d3b7"),n("96cf");var a=n("1da1"),r=n("bc3a"),c=n.n(r);function o(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))}function i(e){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o(2e3);case 2:return e.next=4,c.a.post("/api/user/login",t);case 4:return n=e.sent,a=n.headers.authorization,a&&localStorage.setItem("token",a),e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function s(){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o(2e3);case 2:if(t=localStorage.getItem("token"),t){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,c.a.get("/api/user/whoami",{headers:{authorization:"bearer ".concat(t)}});case 7:return n=e.sent,e.abrupt("return",n.data.data);case 9:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(){localStorage.removeItem("token")}function h(e){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/api/user/reg",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}}});
//# sourceMappingURL=app.dfd7adc9.js.map