"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[56],{794:function(n,t,e){e.d(t,{Mc:function(){return f},eH:function(){return d},mv:function(){return x},oJ:function(){return h},wr:function(){return o}});var r=e(861),c=e(757),a=e.n(c),i="https://api.themoviedb.org/3/",u="2f202abcab3fe0934220a17698275697";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"trending/movie/day?api_key=").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie/?api_key=").concat(u,"&query=").concat(t));case 2:return e=n.sent,console.log(e),n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},56:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(885),c=e(791),a=e(731),i=e(689),u=e(794),o=e(654),s=e(184);var f=function(n){var t=n.movieData,e=t.backdrop_path,r=t.title,c=t.vote_average,u=t.overview,f=t.genres.map((function(n){return n.name})).join(", "),p=(0,o.A)(e),h=Math.floor(10*c)+"%";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:p,alt:r})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:r}),(0,s.jsxs)("h3",{children:["User Score: ",h]}),(0,s.jsx)("h3",{children:"Overview"}),(0,s.jsx)("p",{children:u}),(0,s.jsx)("h3",{children:"Genres"}),(0,s.jsx)("p",{children:f})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(a.rU,{to:"cast",children:"Cast"}),(0,s.jsx)(a.rU,{to:"reviews",children:"Reviews"})]}),(0,s.jsx)(i.j3,{})]})};var p=function(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],o=t[1],p=(0,i.UO)().movieId;return(0,c.useEffect)((function(){(0,u.Mc)(p).then((function(n){o(n)}))}),[p]),(0,s.jsxs)("div",{children:[(0,s.jsx)(a.rU,{to:"/",children:"Go back"}),e&&(0,s.jsx)(f,{movieData:e})]})}},654:function(n,t,e){e.d(t,{A:function(){return r}});var r=function(n){return"https://www.themoviedb.org/t/p/w220_and_h330_face"+n}},861:function(n,t,e){function r(n,t,e,r,c,a,i){try{var u=n[a](i),o=u.value}catch(s){return void e(s)}u.done?t(o):Promise.resolve(o).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var i=n.apply(t,e);function u(n){r(i,c,a,u,o,"next",n)}function o(n){r(i,c,a,u,o,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=56.1b856b83.chunk.js.map