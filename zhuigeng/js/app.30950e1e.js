(function(e){function t(t){for(var a,o,i=t[0],c=t[1],l=t[2],h=0,d=[];h<i.length;h++)o=i[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01b9":function(e,t,n){"use strict";n("2b86")},1466:function(e,t,n){},1895:function(e,t,n){},"1b22":function(e,t,n){},"2b86":function(e,t,n){},"4dbd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("a15b"),n("d81d"),n("b0c0"),n("d3b7"),n("25f0"),n("0fb7"),n("450d");var a=n("f529"),s=n.n(a),r=(n("be4f"),n("896a")),o=n.n(r),i=(n("6b30"),n("c284")),c=n.n(i),l=(n("ae26"),n("845f")),u=n.n(l),h=(n("10cb"),n("f3ad")),d=n.n(h),p=(n("e612"),n("dd87")),f=n.n(p),m=(n("075a"),n("72aa")),v=n.n(m),g=(n("1951"),n("eedf")),y=n.n(g),_=(n("e3ea"),n("7bc3")),b=n.n(_),w=(n("e2f3"),n("06f9")),C=n.n(w),k=(n("fd71"),n("a447")),x=n.n(k),T=(n("b8e0"),n("a4c4")),$=n.n(T),P=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-tabs",{attrs:{value:e.$route.path},on:{"tab-click":e.openPage}},[n("el-tab-pane",{attrs:{label:"爱追更",name:"/zhui"}}),n("el-tab-pane",{attrs:{label:"探索",name:"/explore"}}),n("el-tab-pane",{attrs:{label:"更多",name:"/more"}})],1),n("router-view")],1)},j=[],A={name:"App",methods:{openPage:function(e){this.$router.push(e.name)}}},O=A,D=(n("7e18"),n("2877")),M=Object(D["a"])(O,S,j,!1,null,"eafae71e",null),E=M.exports,U=n("8c4f"),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.userChannels.length?n("div",{staticClass:"user-channels"},e._l(e.userChannels,(function(t){return n("div",{key:t._id,staticClass:"user-channel padding-box flex-between",style:{borderLeftColor:t.channel.channelTemplate.mainColor||"gray"},on:{click:function(n){return e.$router.push("/channel/"+t.channel._id)}}},[n("div",{staticClass:"flex-start",staticStyle:{flex:"auto",overflow:"hidden"}},[n("div",{staticClass:"channel-name no-wrap"},[e._v(" "+e._s(t.channel.name)+" ")]),t.channelDataMessage?n("div",{directives:[{name:"show",rawName:"v-show",value:!t.channelDataMessage.readed,expression:"!userChannel.channelDataMessage.readed"}],staticClass:"unreaded",style:{background:t.channel.channelTemplate.mainColor||"gray"}},[n("span",[e._v("新")])]):e._e()]),n("div",{staticClass:"notify",class:{"notify-on":t.notify},staticStyle:{flex:"none"}},[e.cloudAuth.currentUser.email?n("div",{on:{click:function(n){n.stopPropagation(),t.notify=!t.notify,e.switchNotify(t._id,t.notify)}}},[n("i",{staticClass:"el-icon-bell"})]):n("div",{on:{click:function(t){return t.stopPropagation(),e.$router.push("/sign-in")}}},[n("i",{staticClass:"el-icon-bell"},[e._v("请登录")])])])])})),0):e.showExplore?n("div",[n("div",{staticClass:"empty-tip abs-center"},[n("div",{staticClass:"abs-center-content flex-start",staticStyle:{"flex-direction":"column"}},[n("p",{staticClass:"nothing not-importent"},[e._v("还没有任何订阅")]),n("el-button",{attrs:{type:"primary",round:""},on:{click:function(t){return e.$router.push("/explore")}}},[e._v("探索")])],1)]),n("div",{staticClass:"not-importent flex-around"},[n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/about")}}},[e._v("“爱追更”是什么？")])],1)]):e._e()])},L=[],I=(n("4160"),n("159b"),n("99af"),{getAll:function(e){return q(e,[])}}),F=20;function q(e,t){return e.skip(t.length).limit(F).get().then((function(n){return n.data.length==F?q(e,t.concat(n.data)):t.concat(n.data)}))}var B,z,V=I,Y=Object(D["a"])(V,B,z,!1,null,null,null),R=Y.exports,W={name:"Zhui",data:function(){return{userChannels:[],showExplore:!1}},mounted:function(){var e=this,t=this.cloud.database();R.getAll(t.collection("ty_user_channel").where({}).orderBy("top","desc").orderBy("updateTime","desc")).then((function(n){e.userChannels=n,e.showExplore=!0,e.userChannels.forEach(function(e){t.collection("ty_user_channel_data_message").where({"channelData.channel._id":e.channel._id}).orderBy("createTime","desc").limit(1).get().then(function(t){this.$set(e,"channelDataMessage",t.data[0])}.bind(this))}.bind(e))}))},methods:{switchNotify:function(e,t){this.cloud.database().collection("ty_user_channel").doc(e).update({notify:t})}}},J=W,H=(n("fd8b"),Object(D["a"])(J,N,L,!1,null,"49775edd",null)),Z=H.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h1",[e._v("探索")]),n("el-input",{attrs:{placeholder:"输入你关心的人",clearable:"","prefix-icon":"el-icon-search"},on:{change:function(t){return e.search(e.keyword)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)},K=[],Q={name:"Explore",data:function(){return{keyword:""}},methods:{search:function(e){this.$router.push({path:"/search",query:{keyword:e}})}}},X=Q,ee=(n("01b9"),Object(D["a"])(X,G,K,!1,null,"3eb20750",null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("div",{staticClass:"inp"},[n("el-input",{attrs:{placeholder:"输入你关心的人",clearable:"","prefix-icon":"el-icon-search"},on:{change:function(t){return e.$router.replace({query:{keyword:e.keywordVal}})}},model:{value:e.keywordVal,callback:function(t){e.keywordVal=t},expression:"keywordVal"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.searchProgress&&100!=e.searchProgress,expression:"searchProgress != 0 && searchProgress != 100"}],staticStyle:{"margin-bottom":"20px"}},[n("el-progress",{attrs:{percentage:e.searchProgress,"show-text":!1,"stroke-width":3}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.channels.length,expression:"channels.length"}]},[n("div",{staticClass:"not-importent"},[e._v("已收录")]),e._l(e.channels,(function(t){return n("div",{key:t._id,staticClass:"padding-box channel flex-start",on:{click:function(n){return e.$router.push("/channel/"+t._id)}}},[n("ChannelTemplateLogo",{attrs:{"main-color":t.channelTemplate.mainColor,text:t.channelTemplate.name.substr(0,1)}}),n("div",[n("div",[e._v(" "+e._s(t.name)+" ")]),n("div",{staticClass:"not-importent"},[e._v(e._s(t.channelTemplate.name))])])],1)}))],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.maybeChannels.length,expression:"maybeChannels.length"}]},[n("div",{staticClass:"not-importent"},[e._v("建议")]),e._l(e.maybeChannels,(function(t){return n("div",{key:t._id,staticClass:"padding-box channel flex-start",on:{click:function(n){return e.openMaybeChannel(t.name,t.channelTemplate._id)}}},[n("ChannelTemplateLogo",{attrs:{"main-color":t.channelTemplate.mainColor,text:t.channelTemplate.name.substr(0,1)}}),n("div",[n("div",[n("a",[e._v(" "+e._s(t.name)+" ")])]),n("div",{staticClass:"not-importent"},[e._v(" "+e._s(t.channelTemplate.name)+" ")])])],1)}))],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showNewChannelDoor,expression:"showNewChannelDoor"}]},[n("div",{staticClass:"not-importent"},[e._v("定制")]),n("div",{staticClass:"padding-box channel flex-start",staticStyle:{"word-break":"break-all"}},[n("ChannelTemplateLogo",{attrs:{text:"链"}}),n("div",{on:{click:function(t){return e.$router.push({path:"/new-channel",query:{url:e.keyword}})}}},[e._v(" "+e._s(e.keyword)+" ")])],1)])])},ae=[],se=(n("ac1f"),n("841c"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo",style:{background:e.mainColor}},[n("div",{staticClass:"text-logo"},[e._v(" "+e._s(e.text)+" ")])])}),re=[],oe={name:"ChannelTemplateLogo",props:{text:String,mainColor:{type:String,value:"gray"}}},ie=oe,ce=(n("8ab9"),Object(D["a"])(ie,se,re,!1,null,"180a1f30",null)),le=ce.exports,ue={name:"Search",props:["keyword"],data:function(){return{templates:[],channels:[],maybeChannels:[],finishedSearchCount:0,showNewChannelDoor:!1,keywordVal:this.keyword}},components:{ChannelTemplateLogo:le},mounted:function(){var e=this;R.getAll(this.cloud.database().collection("ty_channel_template").where({})).then((function(t){e.templates=t,e.keyword&&e.search(e.keyword)}))},watch:{keyword:function(e){e&&this.search(e)}},computed:{searchProgress:function(){return this.templates.length?Math.floor(this.finishedSearchCount/this.templates.length*100):0}},methods:{search:function(e){var t=this;console.log("搜索："+e),this.showNewChannelDoor=!1,/^https?:\/\//.test(e)&&(this.showNewChannelDoor=!0),this.channels=[],this.maybeChannels=[],this.finishedSearchCount=0,this.templates.forEach((function(n){t.cloud.callFunction({name:"resolveTyChannel",data:{templateId:n._id,key:e}}).then((function(e){t.finishedSearchCount++,e.result.errCode?405==e.result.errCode?t.maybeChannels=t.maybeChannels.concat(e.result.advices.map((function(e){return{name:"".concat(e),channelTemplate:n}}))):console.error(e.result.errMsg):t.channels=t.channels.concat([e.result.channel])})).catch((function(e){t.finishedSearchCount++,console.error(e)}))}))},openMaybeChannel:function(e,t){var n=this;this.cloud.callFunction({name:"resolveTyChannel",data:{templateId:t,key:e}}).then((function(e){e.result.errCode?console.error(e.result.errMsg):n.$router.push("/channel/"+e.result.channel._id)})).catch((function(e){console.error(e)}))}}},he=ue,de=(n("b627"),Object(D["a"])(he,ne,ae,!1,null,"53287d84",null)),pe=de.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"more"},[n("div",[n("div",[e._m(0),n("div",{staticClass:"not-importent"},["ANONYMOUS"==e.user.loginType?n("div",{key:"user-youke"},[n("span",[e._v("游客")])]):n("div",{key:"user-email"},[n("span",[e._v(e._s(e.user.email))])])])]),n("div",{staticClass:"login-area"},["ANONYMOUS"==e.user.loginType?n("el-button-group",{key:"no-eamil"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/sign-in")}}},[e._v("登录")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/sign-up")}}},[e._v("注册")])],1):n("el-button-group",{key:"with-eamil"},[n("el-button",{attrs:{type:"info"},on:{click:e.signOut}},[e._v("退出登录")])],1)],1)]),n("p",[n("el-badge",{staticClass:"item",attrs:{value:"新",hidden:!e.lastUnreadedMessage}},[n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/message-box")}}},[e._v("消息")])],1)],1),n("p",[n("el-link",{attrs:{href:"https://support.qq.com/product/290950",target:"_blank",type:"primary"}},[e._v("反馈")])],1),n("p",[n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/about")}}},[e._v("关于")])],1)])},me=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-head"},[n("div",{staticStyle:{margin:"auto"}},[n("i",{staticClass:"el-icon-user-solid"})])])}],ve={name:"More",data:function(){return{user:this.cloudAuth.currentUser,lastUnreadedMessage:null}},mounted:function(){var e=this;this.cloud.database().collection("ty_user_channel_data_message").where({readed:!1}).orderBy("createTime","desc").limit(1).get().then((function(t){e.lastUnreadedMessage=t.data[0]||null}))},methods:{signIn:function(){var e=this,t=prompt("请输入邮箱");if(t){var n=prompt("请输入密码");n&&this.cloudAuth.signInWithEmailAndPassword(t,n).then((function(t){console.log("登录成功",t),e.user=t.user})).catch((function(e){console.error("登录失败",e),alert("邮箱或密码错误")}))}},signUp:function(){var e=this;this.updateUsername().then((function(){e.setPassword().then((function(){e.updateEmail()}))}))},updateEmail:function(){var e=this,t=prompt("请输入登录邮箱");return t?this.user.updateEmail(t).then((function(){return alert("验证邮件已发送"),e.user.refresh()})).catch((function(e){return console.error("更新失败",e),Promise.reject()})):Promise.reject()},setPassword:function(){var e=this;if(this.user.hasPassword)return Promise.resolve();var t=prompt("请设置登录密码");return t?this.cloudAuth.currentUser.updatePassword(t).then((function(){return e.user.refresh()})).catch((function(e){return console.error("更新密码失败",e),Promise.reject()})):Promise.reject()},updateUsername:function(){var e=this;return this.cloudAuth.currentUser.updateUsername(this.user.uid).then((function(){return e.user.refresh()})).catch((function(e){return console.error("更新用户名失败",e),Promise.reject()}))},signOut:function(){var e=this;this.cloudAuth.signOut().then((function(){e.cloudAuth.anonymousAuthProvider().signIn().then((function(t){console.log("登录成功",t),e.user=e.cloudAuth.currentUser})).catch((function(e){console.error("登录失败",e)}))}))}}},ge=ve,ye=(n("69a8"),Object(D["a"])(ge,fe,me,!1,null,"207305ae",null)),_e=ye.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"channel"},[e.channel?n("div",[n("div",{staticClass:"flex-between"},[n("h1",[e._v(" "+e._s(e.channel.name)+" ")]),n("div",{staticStyle:{flex:"none"}},[e.userChannel?n("div",{key:"unsub"},[n("div",[n("el-button",{attrs:{round:""},on:{click:e.unsub}},[e._v(" 已订阅 ")])],1)]):n("div",{key:"sub"},[n("el-button",{attrs:{type:"primary",round:""},on:{click:e.sub}},[e._v("订阅")])],1)])]),n("div",{staticClass:"flex-start cells"},[n("div",{staticClass:"cell channel-template"},[n("div",{staticClass:"cell-icon"},[n("router-link",{attrs:{to:"/channel-template/"+e.channel.channelTemplate._id}},[n("i",{staticClass:"el-icon-folder"})])],1),n("div",{staticClass:"not-importent"},[e._v(" "+e._s(e.channel.channelTemplate.name)+" ")])]),e.channel.openResourceUrl?n("div",{staticClass:"cell"},[n("div",{staticClass:"cell-icon"},[n("a",{attrs:{href:e.channel.openResourceUrl,target:"_blank"}},[n("i",{staticClass:"el-icon-link"})])]),n("div",{staticClass:"not-importent"},[e._v("网页")])]):e._e(),e.userChannel?n("div",{staticClass:"notify-switch cell"},[n("div",{staticClass:"cell-icon",class:{"notify-switch-on":e.userChannel.notify}},[e.cloudAuth.currentUser.email?n("div",{on:{click:function(t){e.userChannel.notify=!e.userChannel.notify,e.switchNotify()}}},[n("i",{staticClass:"el-icon-bell"})]):n("div",{on:{click:function(t){return e.$router.push("/more")}}},[n("i",{staticClass:"el-icon-bell"})])]),n("div",{staticClass:"not-importent"},[e._v("通知我")])]):e._e()]),n("el-divider",{attrs:{"content-position":"left"}},[n("i",{staticClass:"el-icon-time"})]),n("div",{staticClass:"channel-datas"},e._l(e.channelDatas,(function(t){return n("div",{key:t._id,staticClass:"flex-start channel-data"},[n("div",{staticClass:"not-importent"},[n("span",[e._v(e._s(e._f("formatPass")(t.createTime)))])]),n("div",{staticClass:"datas"},e._l(t.channel.attrs||t.channel.channelTemplate.attrs,(function(a){return n("div",{key:a.name},[n("span",[e._v(e._s(a.name))]),n("span",{staticClass:"not-importent data-value"},[e._v(e._s(t.data[a.name]))])])})),0)])})),0)],1):e._e()])},we=[],Ce={name:"Channel",props:["id"],data:function(){return{channel:null,userChannel:null,channelDatas:[]}},watch:{"userChannel.notify":function(e){this.userChannel&&this.cloud.database().collection("ty_user_channel").doc(this.userChannel._id).update({notify:e})}},mounted:function(){var e=this,t=this.cloud.database();t.collection("ty_channel").doc(this.id).get().then((function(t){e.channel=t.data[0]})),t.collection("ty_user_channel").where({"channel._id":this.id}).get().then((function(n){e.userChannel=n.data[0]||null,t.collection("ty_user_channel_data_message").where({"channelData.channel._id":e.id}).update({readed:!0}),t.collection("ty_user_channel_data_message").where({"channelData.channel._id":e.id,notify:"wait"}).update({data:{notify:"skip"}})})),t.collection("ty_channel_data").where({"channel._id":this.id,dataChanged:!0}).orderBy("createTime","desc").limit(20).get().then((function(t){e.channelDatas=t.data}))},methods:{sub:function(){var e=this;console.log("sub"),this.cloud.database().collection("ty_user_channel").add({channel:this.channel,notify:!1,createTime:Date.now()}).then((function(t){e.cloud.database().collection("ty_user_channel").doc(t.id).get().then((function(t){e.userChannel=t.data[0]}))}))},unsub:function(){var e=this;console.log("unsub"),this.cloud.database().collection("ty_user_channel").doc(this.userChannel._id).remove().then((function(){e.userChannel=null}))},switchNotify:function(){this.userChannel&&this.cloud.database().collection("ty_user_channel").doc(this.userChannel._id).update({notify:this.userChannel.notify})}}},ke=Ce,xe=(n("597f"),Object(D["a"])(ke,be,we,!1,null,"0af75908",null)),Te=xe.exports,$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.document?n("div",{staticClass:"new-channel"},[n("h1",[e._v(e._s(e.document.title))]),e._l(e.textAndDivList,(function(t){return n("div",{key:t.insideId,staticClass:"item",style:{paddingLeft:20*t.depth+"px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedSelectors,expression:"checkedSelectors"}],attrs:{type:"checkbox",id:t.insideId},domProps:{value:t.selector,checked:Array.isArray(e.checkedSelectors)?e._i(e.checkedSelectors,t.selector)>-1:e.checkedSelectors},on:{change:function(n){var a=e.checkedSelectors,s=n.target,r=!!s.checked;if(Array.isArray(a)){var o=t.selector,i=e._i(a,o);s.checked?i<0&&(e.checkedSelectors=a.concat([o])):i>-1&&(e.checkedSelectors=a.slice(0,i).concat(a.slice(i+1)))}else e.checkedSelectors=r}}}),n("label",{attrs:{for:t.insideId}},[e._v(" "+e._s("text"==t.type?t.content:">>"))])])})),n("div",{staticStyle:{margin:"15px 0"}},[n("el-button",{attrs:{type:"primary",round:""},on:{click:e.submit}},[e._v("确定")])],1)],2):e._e()},Pe=[],Se=(n("5319"),{name:"NewChannel",props:["url"],data:function(){return{document:null,checkedSelectors:[]}},mounted:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading"});this.cloud.callFunction({name:"loadWebDocument",data:{url:this.url}}).then((function(n){if(n.result.errCode)alert(n.result.errMsg);else{var a=0;n.result.document.list.forEach((function(e){e.depth=a,"div"==e.type?a++:"/div"==e.type&&a--})),e.document=n.result.document}t.close()})).catch((function(e){t.close(),console.error(e)}))},computed:{textAndDivList:function(){return this.document.list.filter((function(e){return"text"==e.type||"div"==e.type}))}},methods:{submit:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading"});this.cloud.callFunction({name:"resolveTyChannel",data:{templateId:"other",resource:{resourceUrl:this.document.url,channelName:this.document.title,openResourceUrl:this.document.url,attrs:this.checkedSelectors.map((function(e,t){return{path:e,name:"追更数据".concat(t+1)}}))}}}).then((function(n){t.close(),n.result.errCode?alert(n.result.errMsg):e.$router.replace("/channel/"+n.result.channel._id)})).catch((function(e){t.close(),console.error(e)}))}}}),je=Se,Ae=(n("f102"),Object(D["a"])(je,$e,Pe,!1,null,"b59726d0",null)),Oe=Ae.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-box",staticStyle:{overflow:"auto"}},[n("h1",[e._v("消息列表")]),e._l(e.messages,(function(t){return n("div",{key:t._id,staticClass:"flex-start message"},[n("ChannelTemplateLogo",{attrs:{"main-color":t.channelData.channel.channelTemplate.mainColor,text:t.channelData.channel.channelTemplate.name.substr(0,1)}}),n("div",{staticClass:"flex-start channel-data"},[n("el-link",{attrs:{type:"primary"},on:{click:function(n){return e.$router.push("/channel/"+t.channelData.channel._id)}}},[e._v(e._s(t.channelData.channel.name))]),n("div",{staticClass:"not-importent"},[n("span",[e._v(e._s(e._f("formatPass")(t.createTime)))])]),n("div",{staticClass:"datas"},e._l(t.channelData.channel.attrs||t.channelData.channel.channelTemplate.attrs,(function(a){return n("div",{key:a.name,staticClass:"data"},[n("span",[e._v(e._s(a.name))]),n("span",{staticClass:"not-importent data-value"},[e._v(e._s(t.channelData.data[a.name]))])])})),0)],1)],1)})),n("div",{directives:[{name:"show",rawName:"v-show",value:e.more,expression:"more"}],staticClass:"load-more"},[n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.loadMessages(e.messages)}}},[e._v("加载更多")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded&&!e.messages.length,expression:"loaded && !messages.length"}],staticClass:"nothing not-importent"},[e._v(" 啥也没有 ")])],2)},Me=[],Ee={name:"MessageBox",data:function(){return{messages:[],loaded:!1,more:!1,pageSize:20}},components:{ChannelTemplateLogo:le},mounted:function(){this.loadMessages(),this.cloud.callFunction({name:"readAllTyUserMessage"}).then((function(e){console.log(e.result)}))},methods:{loadMessages:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.cloud.database().collection("ty_user_channel_data_message").where({}).orderBy("createTime","desc").skip(t.length).limit(this.pageSize).get().then((function(n){e.messages=t.concat(n.data),e.more=n.data.length==e.pageSize,e.loaded=!0}))}}},Ue=Ee,Ne=(n("a46d"),Object(D["a"])(Ue,De,Me,!1,null,"a968740c",null)),Le=Ne.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("关于爱追更")]),n("h2",[e._v("第1章 爱")]),n("p",[e._v("在茫茫网络世界中，你发现了真爱，TA不定期发布动态")]),n("h2",[e._v("第2章 追")]),n("p",[e._v("订阅TA的频道，本应用帮你实时追踪")]),n("h2",[e._v("第3章 更")]),n("p",[e._v("TA更新动态，你第一时间收到通知，把爱的首赞及留言放在前排")]),n("div",{staticStyle:{"margin-top":"50px"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/explore")}}},[e._v("现在就去找到TA")])],1)])},Fe=[],qe=(n("acd7"),{}),Be=Object(D["a"])(qe,Ie,Fe,!1,null,"63117360",null),ze=Be.exports,Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sign-in"},[n("h1",[e._v("登录")]),n("div",[n("p",[n("el-input",{attrs:{placeholder:"邮箱","prefix-icon":"el-icon-user"},model:{value:e.account,callback:function(t){e.account="string"===typeof t?t.trim():t},expression:"account"}})],1),n("p",[n("el-input",{attrs:{placeholder:"密码","prefix-icon":"el-icon-key","show-password":""},model:{value:e.password,callback:function(t){e.password="string"===typeof t?t.trim():t},expression:"password"}})],1),n("div",{staticClass:"flex-start"},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.signIn}},[e._v(" 登录 ")])],1),n("p",{staticClass:"not-importent",staticStyle:{"margin-left":"10px"}},[n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/sign-up")}}},[e._v("注册")])],1)])])])},Ye=[],Re={name:"SignIn",data:function(){return{account:"",password:""}},methods:{signIn:function(){var e=this;if(this.account&&this.password){var t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading"});this.cloudAuth.signInWithEmailAndPassword(this.account,this.password).then((function(n){console.log("登录成功",n),t.close(),e.$router.back()})).catch((function(n){console.error("登录失败",n),t.close(),e.$message.error("邮箱或密码错误")}))}else this.$message({message:"账户名或密码不能为空",type:"warning"})}}},We=Re,Je=(n("cf33"),Object(D["a"])(We,Ve,Ye,!1,null,"649f9c38",null)),He=Je.exports,Ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sign-up"},[n("h1",[e._v("注册")]),n("div",[n("p",[n("el-input",{attrs:{placeholder:"邮箱","prefix-icon":"el-icon-user"},model:{value:e.account,callback:function(t){e.account="string"===typeof t?t.trim():t},expression:"account"}})],1),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.user.hasPassword,expression:"!user.hasPassword"}]},[n("el-input",{attrs:{placeholder:"密码（包含字母和数字，长度要求8～32位）","prefix-icon":"el-icon-key","show-password":""},model:{value:e.password,callback:function(t){e.password="string"===typeof t?t.trim():t},expression:"password"}})],1),n("div",{staticClass:"flex-start"},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.signUp}},[e._v(" 注册 ")])],1),n("p",{staticClass:"not-importent",staticStyle:{"margin-left":"10px"}},[n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/sign-in")}}},[e._v("登录")])],1)])])])},Ge=[],Ke={name:"SignUp",data:function(){return{account:"",password:"",user:this.cloudAuth.currentUser}},methods:{signUp:function(){var e=this;this.account&&(this.user.hasPassword||this.password)?this.updateUsername().then((function(){e.setPassword().then((function(){e.updateEmail()}))})):this.$message({message:"账户名或密码不能为空",type:"warning"})},updateEmail:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading"});return this.user.updateEmail(this.account).then((function(){return t.close(),e.$message({message:"验证邮件已发送",type:"success"}),e.user.refresh().then((function(){e.$router.push("/sign-in")}))})).catch((function(n){return t.close(),console.error("更新失败",n),e.$message({message:"请重新输入邮箱",type:"warning"}),Promise.reject()}))},setPassword:function(){var e=this;if(this.user.hasPassword)return Promise.resolve();var t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading"});return this.cloudAuth.currentUser.updatePassword(this.password).then((function(){return t.close(),e.user.refresh()})).catch((function(n){return t.close(),console.error("更新密码失败",n),e.$message({message:"密码不合法",type:"warning"}),Promise.reject()}))},updateUsername:function(){var e=this;return this.cloudAuth.currentUser.updateUsername(this.user.uid).then((function(){return e.user.refresh()})).catch((function(e){return console.error("更新用户名失败",e),Promise.reject()}))}}},Qe=Ke,Xe=(n("fc7f"),Object(D["a"])(Qe,Ze,Ge,!1,null,"484cfe1f",null)),et=Xe.exports,tt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.channelTemplate?n("div",{staticClass:"channel-template"},[n("h1",[e._v(e._s(e.channelTemplate.name))]),n("p",[e._v(e._s(e.channelTemplate.desc))]),e.channelTemplate.keyName?n("div",[n("div",{staticStyle:{"margin-top":"30px"}},[n("el-input",{attrs:{placeholder:"请输入"+e.channelTemplate.keyName,clearable:"","prefix-icon":"el-icon-search"},on:{change:function(t){return e.search(e.keyword)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e.advices.length?n("div",[n("p",{staticClass:"not-importent"},[e._v("建议")]),e._l(e.advices,(function(t){return n("div",{key:t,staticClass:"padding-box channel flex-start",on:{click:function(n){return e.search(t)}}},[n("ChannelTemplateLogo",{attrs:{"main-color":e.channelTemplate.mainColor,text:e.channelTemplate.name.substr(0,1)}}),n("div",[n("div",[n("a",[e._v(" "+e._s(t)+" ")])])])],1)}))],2):e._e()]):e._e()]):e._e()},nt=[],at={name:"ChannelTemplate",props:["id"],data:function(){return{channelTemplate:null,advices:[],keyword:""}},components:{ChannelTemplateLogo:le},mounted:function(){var e=this,t=this.cloud.database();t.collection("ty_channel_template").doc(this.id).get().then((function(t){e.channelTemplate=t.data[0]}))},methods:{search:function(e){var t=this,n=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading"});this.cloud.callFunction({name:"resolveTyChannel",data:{templateId:this.channelTemplate._id,key:e}}).then((function(e){n.close(),e.result.errCode?405==e.result.errCode?t.advices=e.result.advices:t.$message({message:e.result.errMsg,type:"warning"}):t.$router.push("/channel/"+e.result.channel._id)})).catch((function(e){n.close(),console.error(e),t.$message({message:"操作失败，请稍后重试",type:"warning"})}))}}},st=at,rt=(n("e370"),Object(D["a"])(st,tt,nt,!1,null,"1a747694",null)),ot=rt.exports,it=n("d148");n("0fae"),n("b8b1");function ct(e){return e=e.toString(),e[1]?e:"0"+e}P["default"].use(U["a"]),P["default"].component($.a.name,$.a),P["default"].component(x.a.name,x.a),P["default"].component(C.a.name,C.a),P["default"].component(b.a.name,b.a),P["default"].component(y.a.name,y.a),P["default"].component(v.a.name,v.a),P["default"].use(f.a),P["default"].use(d.a),P["default"].use(u.a),P["default"].use(c.a),P["default"].use(o.a.directive),P["default"].prototype.$loading=o.a.service,P["default"].prototype.$message=s.a,P["default"].filter("formatPass",(function(e){var t=(new Date).getTime();if(t-e<6e4)return"刚刚";var n=new Date(e),a=n.getFullYear(),s=n.getMonth()+1,r=n.getDate(),o=n.getHours(),i=n.getMinutes(),c=new Date(t),l=c.getFullYear(),u=c.getMonth()+1,h=c.getDate();return a==l?s==u&&r==h?"今天 "+[o,i].map(ct).join(":"):[s,r].map(ct).join("-")+" "+[o,i].map(ct).join(":"):[a,s,r].map(ct).join("-")+" "+[o,i].map(ct).join(":")})),P["default"].config.productionTip=!1;var lt=[{path:"/",redirect:"/zhui"},{path:"/zhui",component:Z},{path:"/explore",component:te},{path:"/search",component:pe,props:function(e){return{keyword:e.query.keyword}}},{path:"/more",component:_e},{path:"/channel/:id",component:Te,props:!0},{path:"/new-channel",component:Oe,props:function(e){return{url:e.query.url}}},{path:"/channel-template/:id",component:ot,props:!0},{path:"/message-box",component:Le},{path:"/about",component:ze},{path:"/sign-in",component:He},{path:"/sign-up",component:et}],ut=new U["a"]({routes:lt});function ht(){var e=P["default"].prototype.cloud=it["a"].init({env:"dev-9g0suwuw61afb9f3"}),t=P["default"].prototype.cloudAuth=e.auth({persistence:"local"});return t.hasLoginState()?(console.log("无需重复登录"),Promise.resolve()):t.anonymousAuthProvider().signIn().then((function(e){return console.log("登录成功",e),Promise.resolve()})).catch((function(e){return console.error("登录失败",e),Promise.reject()}))}ht().then((function(){new P["default"]({render:function(e){return e(E)},router:ut}).$mount("#app")}))},"597f":function(e,t,n){"use strict";n("d3ce")},"69a8":function(e,t,n){"use strict";n("1895")},"6c36":function(e,t,n){},"7e18":function(e,t,n){"use strict";n("6c36")},"7f61":function(e,t,n){},"8ab9":function(e,t,n){"use strict";n("930e")},"930e":function(e,t,n){},a138:function(e,t,n){},a46d:function(e,t,n){"use strict";n("7f61")},ab1b:function(e,t,n){},acd7:function(e,t,n){"use strict";n("ab1b")},b627:function(e,t,n){"use strict";n("c13b")},b8b1:function(e,t,n){},c13b:function(e,t,n){},cd63:function(e,t,n){},cf33:function(e,t,n){"use strict";n("1b22")},d3ce:function(e,t,n){},e370:function(e,t,n){"use strict";n("a138")},f102:function(e,t,n){"use strict";n("cd63")},fc7f:function(e,t,n){"use strict";n("1466")},fd8b:function(e,t,n){"use strict";n("4dbd")}});
//# sourceMappingURL=app.30950e1e.js.map