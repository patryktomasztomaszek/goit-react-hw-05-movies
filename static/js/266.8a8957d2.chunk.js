"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{794:function(n,t,e){e.d(t,{Mc:function(){return f},eH:function(){return d},mv:function(){return m},oJ:function(){return h},wr:function(){return o}});var r=e(861),c=e(757),a=e.n(c),u="https://api.themoviedb.org/3/",i="2f202abcab3fe0934220a17698275697";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/search/movie/?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},266:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(885),c=e(791),a=e(794),u=e(731),i=e(184);var o=function(n){var t=n.movieData,e=t.backdrop_path,r=t.title,c=t.id,a="https://www.themoviedb.org/t/p/w220_and_h330_face"+e;return(0,i.jsx)("li",{children:(0,i.jsxs)(u.rU,{to:"/movies/".concat(c),children:[(0,i.jsx)("img",{src:a,alt:r}),(0,i.jsx)("h2",{children:r})]})})};var s=function(n){var t=n.moviesData.results;return(0,i.jsx)("ul",{children:t.map((function(n){return(0,i.jsx)(o,{movieData:n},n.id)}))})};var f=function(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],u=t[1];return(0,c.useEffect)((function(){(0,a.wr)().then((function(n){u(n)}))}),[]),(0,i.jsx)("div",{children:e&&(0,i.jsx)(s,{moviesData:e})})}},861:function(n,t,e){function r(n,t,e,r,c,a,u){try{var i=n[a](u),o=i.value}catch(s){return void e(s)}i.done?t(o):Promise.resolve(o).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var u=n.apply(t,e);function i(n){r(u,c,a,i,o,"next",n)}function o(n){r(u,c,a,i,o,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=266.8a8957d2.chunk.js.map