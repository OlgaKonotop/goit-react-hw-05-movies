"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[795],{157:function(t,e,n){n.d(e,{E1:function(){return p},Up:function(){return s},cv:function(){return i},ff:function(){return l},gm:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(912),o="cd08058c291f007122df115265286adb",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:o}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"cat",t.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:o,query:"".concat(e)}});case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:255,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o,"&page=1"));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},795:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r,a=n(861),c=n(439),u=n(757),o=n.n(u),i=n(87),s=n(689),p=n(184),f=function(t){var e=t.gallery,n=(0,s.TH)();return console.log(e.title),(0,p.jsx)(p.Fragment,{children:e.map((function(t){return(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"/movies/".concat(t.id),state:{from:n},children:t.title})},t.id)}))})},l=n(791),h=n(157),v=n(168),d=n(444).ZP.h1(r||(r=(0,v.Z)(["\n  margin-bottom: 20px;\n"]))),m=function(){console.log("home");var t=(0,l.useState)(),e=(0,c.Z)(t,2),n=e[0],r=e[1],u=(0,l.useState)(null),i=(0,c.Z)(u,2),s=i[0],v=i[1];if((0,l.useEffect)((function(){function t(){return(t=(0,a.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,h.cv)();case 3:e=t.sent,r(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),v("Error \ud83d\ude12. Please reload page \ud83d\udc4d");case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})))).apply(this,arguments)}console.log("home2"),function(){t.apply(this,arguments)}()}),[]),n)return console.log(n),console.log(s),(0,p.jsxs)("main",{children:[(0,p.jsx)(d,{children:"Trending today"}),(0,p.jsx)("ul",{}),(0,p.jsx)(f,{gallery:n})]})}}}]);
//# sourceMappingURL=795.f3ee0c1a.chunk.js.map