"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[312],{157:function(e,t,n){n.d(t,{E1:function(){return p},Up:function(){return i},cv:function(){return s}});var r=n(861),a=n(757),c=n.n(a),o=n(912),u="cd08058c291f007122df115265286adb",s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:u}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"cat",e.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:u,query:"".concat(t)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},312:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),o=n.n(c),u=n(87),s=n(689),i=n(184),p=function(e){var t=e.gallery,n=(0,s.TH)();return console.log(t.title),(0,i.jsx)(i.Fragment,{children:t.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})},l=n(791),f=n(157),h=function(){console.log("home");var e=(0,l.useState)(),t=(0,a.Z)(e,2),n=t[0],c=t[1],u=(0,l.useState)(null),s=(0,a.Z)(u,2),h=s[0],d=s[1];if((0,l.useEffect)((function(){function e(){return(e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.cv)();case 3:t=e.sent,c(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d("Error \ud83d\ude12. Please reload page \ud83d\udc4d");case 10:return e.prev=10,e.finish(10);case 12:case"end":return e.stop()}}),e,null,[[0,7,10,12]])})))).apply(this,arguments)}console.log("home2"),function(){e.apply(this,arguments)}()}),[]),n)return console.log(n),console.log(h),(0,i.jsxs)("main",{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)("ul",{}),(0,i.jsx)(p,{gallery:n})]})}}}]);
//# sourceMappingURL=312.d0ae395c.chunk.js.map