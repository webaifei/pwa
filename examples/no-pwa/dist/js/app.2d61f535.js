(function(e){function t(t){for(var n,a,u=t[0],c=t[1],l=t[2],s=0,p=[];s<u.length;s++)a=u[s],o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},i=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9389f1ff"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=n);var i,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e),i=function(t){l.onerror=l.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+i+")");a.type=n,a.request=i,r[1](a)}o[e]=void 0}};var s=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,c.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=r("b970"),i=(r("8590"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("van-nav-bar",{attrs:{title:"标题","left-text":"返回","right-text":"list","left-arrow":""},on:{"click-right":e.onClickRight,"click-left":e.onClickLeft}}),r("router-view")],1)}),a=[],u={methods:{onClickRight:function(){this.$router.push("/about")},onClickLeft:function(){this.$router.back()}}},c=u,l=r("2877"),s=Object(l["a"])(c,i,a,!1,null,null,null);s.options.__file="App.vue";var f=s.exports,p=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("van-swipe",{attrs:{autoplay:3e3}},e._l(e.images,function(e,t){return r("van-swipe-item",{key:t},[r("img",{staticClass:"item",attrs:{src:e}})])})),r("ul",{directives:[{name:"waterfall-lower",rawName:"v-waterfall-lower",value:e.loadMore,expression:"loadMore"}],attrs:{"waterfall-disabled":"disabled","waterfall-offset":"400"}},e._l(e.list,function(e){return r("li",{key:e.id},[r("van-card",{attrs:{title:e.title,desc:e.desc,num:e.num,price:e.price,thumb:e.thumb}})],1)}))],1)},b=[],d=r("f210"),g=r("9395"),h=r("ea39"),v={data:function(){return{images:["//m.360buyimg.com/mobilecms/jfs/t1/20/28/6321/90696/5b9f3ba2Ed1c88b47/acb5719ab32a090f.jpg!cr_1125x549_0_72","//m.360buyimg.com/mobilecms/s1125x690_jfs/t1/422/7/6095/166725/5ba0a85aE4016b739/e0856889d1c4e519.jpg!cr_1125x549_0_72!q70.jpg.dpg","//m.360buyimg.com/mobilecms/jfs/t1/2866/29/4425/101141/5b9c76a9E1d2428f0/31cdeaa65e5b59e4.jpg!cr_1125x549_0_72",r("9cf2")],disabled:!1,list:[{id:0,title:"品牌电脑",num:10,price:"2000.00",thumb:"http://m.360buyimg.com/mobilecms/s300x300_jfs/t1/3902/9/5700/431086/5ba09bfcEe9576792/845a5283708bfa66.jpg!q70.jpg"},{id:1,title:"品牌电脑",num:10,price:"2000.00",thumb:"http://m.360buyimg.com/mobilecms/s300x300_jfs/t1/4412/31/5742/365907/5ba09c13E5ce1144f/462eb3b6719addef.jpg!q70.jpg"},{id:2,title:"品牌电脑",num:10,price:"2000.00",thumb:" http://m.360buyimg.com/mobilecms/s300x300_jfs/t1/811/22/1670/495640/5b93d82eEc2ff6f25/1ab6ec3a71674416.jpg!q70.jpg"},{id:3,title:"品牌电脑",num:10,price:"2000.00",thumb:"http://m.360buyimg.com/mobilecms/s300x300_jfs/t1/4470/12/1485/355915/5b93f667E0d29b84a/ff104d3c72cec6cb.jpg!q70.jpg"},{id:4,title:"品牌电脑",num:10,price:"2000.00",thumb:"http://m.360buyimg.com/mobilecms/s300x300_jfs/t19243/276/1141184961/190978/77edb1ae/5abe2782Ne9270f27.jpg!q70.jpg"}]}},directives:{WaterfallLower:Object(o["a"])("lower")},methods:{loadMore:function(){var e=this;this.disabled=!0,setTimeout(function(){var t,r=e.list.map(function(e,t){var r=Object(g["a"])({},e);return r.id=h(),r});(t=e.list).push.apply(t,Object(d["a"])(r)),e.disabled=!1},500)}}},j=v,y=(r("910f"),Object(l["a"])(j,m,b,!1,null,"2143af82",null));y.options.__file="Home.vue";var _=y.exports;n["a"].use(p["a"]);var w=new p["a"]({routes:[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]});n["a"].use(o["b"]),n["a"].config.productionTip=!1,new n["a"]({router:w,render:function(e){return e(f)}}).$mount("#app")},"910f":function(e,t,r){"use strict";var n=r("eb86"),o=r.n(n);o.a},"9cf2":function(e,t,r){e.exports=r.p+"img/local-goods.d2869a93.jpg"},eb86:function(e,t,r){}});
//# sourceMappingURL=app.2d61f535.js.map