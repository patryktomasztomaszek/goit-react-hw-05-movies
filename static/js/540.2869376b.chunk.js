"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[540],{794:function(n,t,e){e.d(t,{Mc:function(){return p},eH:function(){return l},mv:function(){return d},oJ:function(){return h},wr:function(){return s}});var r=e(861),c=e(757),a=e.n(c),u="https://api.themoviedb.org/3/",o="2f202abcab3fe0934220a17698275697";function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/search/movie/?api_key=".concat(o,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},540:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(861),c=e(885),a=e(757),u=e.n(a),o=e(791),s=e(731),i=e(184);var p=function(n){var t=n.movieData,e=t.backdrop_path,r=t.title,c=t.id,a="https://www.themoviedb.org/t/p/w220_and_h330_face"+e;return(0,i.jsx)("li",{children:(0,i.jsxs)(s.rU,{to:"/movies/".concat(c),children:[(0,i.jsx)("img",{src:a,alt:r}),(0,i.jsx)("h2",{children:r})]})})};var f=function(n){var t=n.moviesData,e=t.results;return console.log(t),(0,i.jsx)(i.Fragment,{children:e.length>0?(0,i.jsx)("ul",{children:e.map((function(n){return(0,i.jsx)(p,{movieData:n},n.id)}))}):(0,i.jsx)("p",{children:"No results found!"})})},h=e(794);var v=function(){var n=(0,o.useState)(null),t=(0,c.Z)(n,2),e=t[0],a=t[1],p=(0,s.lr)(),v=(0,c.Z)(p,2),l=v[0],m=v[1],d=(0,o.useCallback)((0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!(t=l.get("query"))){n.next=7;break}return n.next=5,(0,h.mv)(t);case 5:e=n.sent,a(e);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])}))),[l]);return(0,o.useEffect)((function(){d()}),[d]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("form",{onSubmit:function(n){n.preventDefault();var t=n.target.input.value;if(null===t||null!==t.match(/^ *$/))return alert("Type in something!");m({query:t}),n.currentTarget.reset()},children:(0,i.jsx)("input",{name:"input"})}),e&&(0,i.jsx)(f,{moviesData:e})]})}},861:function(n,t,e){function r(n,t,e,r,c,a,u){try{var o=n[a](u),s=o.value}catch(i){return void e(i)}o.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var u=n.apply(t,e);function o(n){r(u,c,a,o,s,"next",n)}function s(n){r(u,c,a,o,s,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=540.2869376b.chunk.js.map