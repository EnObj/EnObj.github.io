(function(t){function e(e){for(var r,c,s=e[0],i=e[1],a=e[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},u=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var l=i;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4fc5":function(t,e,n){"use strict";n("78f0")},"56d7":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("be4f"),n("450d");var r=n("896a"),o=n.n(r),u=(n("acb6"),n("c673")),c=n.n(u),s=(n("f92a"),n("d775")),i=n.n(s),a=(n("fd71"),n("a447")),l=n.n(a),d=(n("e3ea"),n("7bc3")),f=n.n(d),p=(n("b8e0"),n("a4c4")),h=n.n(p),m=(n("10cb"),n("f3ad")),v=n.n(m),y=(n("1951"),n("eedf")),b=n.n(y),g=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Document"}},[n("router-view")],1)],1)},x=[],O={name:"App"},w=O,j=n("2877"),k=Object(j["a"])(w,_,x,!1,null,null,null),S=k.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inedx"},[n("h1",[t._v("场宁阅读器")]),n("div",{staticClass:"search"},[n("el-input",{attrs:{placeholder:"搜索或输入网址",clearable:"","prefix-icon":"el-icon-search"},on:{change:function(e){return t.search(t.url)}},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1),t.historys.length?n("el-card",{staticClass:"historys",attrs:{shadow:"never"}},[n("div",{staticClass:"not-importent",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("历史记录")])]),t._l(t.historys,(function(e,r){return n("div",{key:e.time,staticClass:"history"},[r?n("el-divider"):t._e(),n("el-link",{on:{click:function(e){return t.openHistoryDocument(r)}}},[t._v(t._s(e.title))])],1)}))],2):t._e()],1)},H=[],P=(n("fb6a"),n("a434"),{name:"Index",data:function(){return{url:"",historys:[]}},activated:function(){var t=JSON.parse(localStorage.getItem("documentHistory")||"[]");this.historys=t.slice(0,100)},methods:{search:function(t){t&&this.$router.push({path:"/document",query:{url:t}})},openHistoryDocument:function(t){var e=this.historys[t];this.historys.splice(t,1),localStorage.setItem("documentHistory",JSON.stringify(this.historys)),this.$router.push({path:"/document",query:{url:e.url}})}}}),$=P,C=(n("9446"),Object(j["a"])($,D,H,!1,null,"d5575982",null)),I=C.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.document?n("div",{staticClass:"document"},[n("el-page-header",{attrs:{content:"正在阅读"},on:{back:function(e){return t.$router.back()}}}),n("h1",[t._v(t._s(t.document.title))]),n("div",{staticClass:"contents"},t._l(t.document.list,(function(e){return n("div",{key:e.insideId,staticClass:"content"},["text"==e.type?n("p",[e.ref?n("el-link",{attrs:{type:"primary"},on:{click:function(n){return t.$router.push({query:{url:e.ref}})}}},[t._v(t._s(e.content))]):n("span",[t._v(t._s(e.content))])],1):"img"==e.type?n("p",[n("el-image",{attrs:{src:e.content}})],1):t._e()])})),0),n("div",{staticClass:"not-importent host-tip"},[n("el-link",{attrs:{href:t.document.url,target:"_blank",type:"info"}},[t._v("内容由"+t._s(t.urlHost)+"提供")])],1)],1):t._e()},q=[],T=(n("ac1f"),{name:"Document",props:{url:{type:String,required:!0}},data:function(){return{document:null,cachedDocuments:{}}},computed:{urlHost:function(){if(!this.document)return"";var t=/^https?:\/\/(.+?)(?:(?:\/)|$)/i.exec(this.document.url);return t[1]||this.document.url}},watch:{url:function(t){if(t){var e=this.cachedDocuments[t];e?(this.document=e,this.pushHistory(),scrollTo(0,0)):this.loadDocument()}}},created:function(){this.loadDocument()},methods:{loadDocument:function(){var t=this,e=this.$loading();console.log("加载：".concat(this.url)),this.cloud.callFunction({name:"loadDocument",data:{url:this.url}}).then((function(n){t.document=t.cachedDocuments[t.url]=n.result,e.close(),t.pushHistory(),scrollTo(0,0)})).catch((function(t){console.error(t),e.close()}))},pushHistory:function(){var t=JSON.parse(localStorage.getItem("documentHistory")||"[]");t.unshift({title:this.document.title,url:this.document.url,time:Date.now()}),localStorage.setItem("documentHistory",JSON.stringify(t))}}}),M=T,N=(n("4fc5"),Object(j["a"])(M,J,q,!1,null,"b0c6ac0c",null)),A=N.exports,E=n("8c4f"),F=n("d148");n("0fae"),n("b8b1");g["default"].use(E["a"]),g["default"].use(b.a),g["default"].use(v.a),g["default"].use(h.a),g["default"].use(f.a),g["default"].use(l.a),g["default"].use(i.a),g["default"].use(c.a),g["default"].use(o.a.directive),g["default"].prototype.$loading=o.a.service,g["default"].config.productionTip=!1;var L=[{path:"/",component:I},{path:"/index",component:I},{path:"/document",component:A,props:function(t){return{url:t.query.url}}}],z=new E["a"]({routes:L});function B(){var t=g["default"].prototype.cloud=F["a"].init({env:"xmrl-prod-jawjt"}),e=g["default"].prototype.cloudAuth=t.auth({persistence:"local"});return e.hasLoginState()?(console.log("无需重复登录"),Promise.resolve()):e.anonymousAuthProvider().signIn().then((function(t){return console.log("登录成功",t),Promise.resolve()})).catch((function(t){return console.error("登录失败",t),Promise.reject()}))}B().then((function(){new g["default"]({render:function(t){return t(S)},router:z}).$mount("#app")}))},"78f0":function(t,e,n){},9446:function(t,e,n){"use strict";n("b981")},b8b1:function(t,e,n){},b981:function(t,e,n){}});
//# sourceMappingURL=app.a72b14e9.js.map