(function(e){function t(t){for(var n,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={index:0},o={index:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0cf512":"903d8e38","chunk-c40146bc":"2e27b494"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-c40146bc":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0cf512":"31d6cfe0","chunk-c40146bc":"10db94b9"}[e]+".css",o=i.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete a[e],d.parentNode.removeChild(d),r(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/users-management/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"365c":function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return y}));var n=r("1da1");r("d3b7"),r("96cf");function a(e){return"admin"===(null===e||void 0===e?void 0:e.username)&&"admin"===(null===e||void 0===e?void 0:e.password)}function o(e){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout((function(){return e(a(t))}),300)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}var c={login:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},i=r("bc3a"),s=r.n(i),l=(r("a15b"),r("ac1f"),r("466d"),r("94db")),f=r.n(l),d=r("5530");r("4e82");function p(){if(!localStorage.length)return[];for(var e=[],t=0;t<localStorage.length;t++){var r=localStorage.key(t),n=localStorage.getItem(r);try{var a=JSON.parse(n);e.push(Object(d["a"])(Object(d["a"])({},a),{},{id:r}))}catch(o){console.log("notJSON",r)}}return e.sort((function(e,t){return e.id-t.id}))}function g(e){var t=localStorage.getItem(e);if(!t)return null;var r=JSON.parse(t);return Object(d["a"])({id:e},r)}r("4de4"),r("b64b"),r("25f0"),r("e9c4");function m(e){var t=Object.keys(localStorage).filter((function(e){return parseInt(e)}));t.sort((function(e,t){return e-t}));var r=t.pop()||0,n=(+r+1).toString(),a=JSON.stringify(e);localStorage.setItem(n,a)}function h(e){localStorage.removeItem(e)}function v(e){var t=e.id;delete e.id;var r=JSON.stringify(e);localStorage.setItem(t,r)}function b(){localStorage.clear()}var w=new f.a(s.a);w.onGet("/users").reply((function(){var e=p();return e.length?[200,e]:[204]})),w.onDelete("/users/delete-all").reply((function(){return b(),[200,{response:"ok"}]})),w.onPost("/user").reply((function(e){var t=JSON.parse(e.data);return m(t),[200,p()]})),w.onGet(/\/user\/\d+/).reply((function(e){var t=e.url.match(/\d/g).join(""),r=g(t);return r?[200,r]:[204]})),w.onPut("/user").reply((function(e){var t=JSON.parse(e.data);return v(t),[200,p()]})),w.onDelete(/\/user\/delete\/\d+/).reply((function(e){var t=e.url.match(/\d/g).join("");return h(t),[200,p()]}));var y={getUsers:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/users");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},deleteUsers:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.delete("/users/delete-all");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},addUser:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/user",e);case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},getUser:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/user/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},updateUser:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.put("/user",e);case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},deleteUser:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.delete("/user/delete/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()}}},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("AppBar"),r("v-main",[r("v-container",[r("router-view")],1)],1)],1)},o=[],u=r("5530"),c=r("2f62"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:""}},[n("v-container",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}],staticClass:"py-0 fill-height"},[n("v-avatar",{attrs:{color:"primary",size:"36",title:"Система управления пользователями"}},[n("img",{attrs:{alt:"Пользователи",src:r("cf05")}})]),n("v-toolbar-title",{staticClass:"ml-2 d-none d-sm-block"},[e._v("Система управления пользователями")]),n("v-spacer"),n("portal-target",{attrs:{name:"addUser"}}),e.loggedIn?n("v-btn",{attrs:{icon:e.isSmall,title:"Выйти"},on:{click:e.logout}},[e._v(" "+e._s(e.buttonText)+" "),e.isSmall?n("v-icon",[e._v("mdi-account-arrow-left")]):e._e()],1):e._e()],1)],1)},s=[],l={name:"AppBar",updated:function(){this.isSmall=document.documentElement.offsetWidth<900},data:function(){return{isSmall:null}},computed:Object(u["a"])(Object(u["a"])({},Object(c["b"])(["loggedIn"])),{},{buttonText:function(){return this.isSmall?"":"Выйти"}}),methods:{onResize:function(){this.isSmall=window.innerWidth<900},logout:function(){this.$store.dispatch("logout")}}},f=l,d=r("2877"),p=Object(d["a"])(f,i,s,!1,null,"63c86e84",null),g=p.exports,m={name:"App",components:{AppBar:g},computed:Object(u["a"])({},Object(c["b"])(["loggedIn"])),watch:{loggedIn:{immediate:!0,handler:function(e){e?this.$router.push("/"):this.$router.push("/login")}}}},h=m,v=Object(d["a"])(h,a,o,!1,null,null,null),b=v.exports,w=r("bee2"),y=r("d4ec"),O=(r("b0c0"),r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f"));n["default"].use(O["a"]);var S=function(e,t,r){r()},k=Object(w["a"])((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:S;Object(y["a"])(this,e),this.path=t,this.name=a,this.component=function(){return r("a383")("./".concat(n))},this.beforeEnter=o})),j=new O["a"]({mode:"history",base:"/users-management/",routes:[{path:"/",redirect:"/users"},new k("/login","LoginPage","login"),new k("/users","UsersPage","users")],scrollBehavior:function(){return{x:0,y:0}}}),x=r("1da1"),_=(r("96cf"),r("365c"));n["default"].use(c["a"]);var E=new c["a"].Store({state:{loggedIn:!1},mutations:{SET_LOGGED_IN:function(e){e.loggedIn=!0},SET_LOGGED_OUT:function(e){e.loggedIn=!1}},actions:{login:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,_["a"].login(t);case 3:if(a=r.sent,!a){r.next=9;break}return n("SET_LOGGED_IN"),r.abrupt("return",!0);case 9:return r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r)})))()},logout:function(e){var t=e.commit;t("SET_LOGGED_OUT")}},strict:!0}),P=r("ce5b"),R=r.n(P),T=r("fcf4");r("bf40"),r("41e6");n["default"].use(R.a);var N={icons:{iconfont:"mdi"},theme:{themes:{light:{background:T["a"].indigo.lighten5,primary:T["a"].blue,error:T["a"].red.accent2,success:T["a"].green.darken1,accent:T["a"].blueGrey.darken3,default:T["a"].blue}}}},I=new R.a(N),U=r("1633"),L=r.n(U),G=r("3a60"),A=r.n(G),C=r("2b88"),D=r.n(C);r("1ca9"),r("73ec");n["default"].use(D.a),n["default"].use(c["a"]),n["default"].use(A.a),n["default"].config.productionTip=!1,n["default"].use(L.a,{defaultPosition:"toast-bottom-left",defaultType:"info",defaultTimeout:4e3}),new n["default"]({router:j,store:E,vuetify:I,render:function(e){return e(b)}}).$mount("#app")},"73ec":function(e,t,r){},a383:function(e,t,r){var n={"./LoginPage":["62cc","chunk-2d0cf512"],"./LoginPage.vue":["62cc","chunk-2d0cf512"],"./UsersPage":["6571","chunk-c40146bc"],"./UsersPage.vue":["6571","chunk-c40146bc"]};function a(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return r.e(t[1]).then((function(){return r(a)}))}a.keys=function(){return Object.keys(n)},a.id="a383",e.exports=a},cf05:function(e,t,r){e.exports=r.p+"img/logo.048d6bcb.png"}});
//# sourceMappingURL=index.9ce4d4d2.js.map