"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[594],{157:function(e,t,r){r.d(t,{E1:function(){return p},Up:function(){return i},cv:function(){return u}});var n=r(861),a=r(757),c=r.n(a),o=r(912),s="cd08058c291f007122df115265286adb",u=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"cat",e.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:s,query:"".concat(t)}});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},594:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),o=r.n(c),s=r(157),u=r(791),i=r(689),p=r(184);t.default=function(){var e=(0,i.UO)({}).movieId,t=(0,u.useState)(),r=(0,a.Z)(t,2),c=r[0],l=r[1],h=(0,u.useState)(null),f=(0,a.Z)(h,2),d=f[0],v=f[1];if(console.log("card"),console.log(e),(0,u.useEffect)((function(){function t(){return(t=(0,n.Z)(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("card11"),t.next=4,(0,s.E1)(e);case 4:r=t.sent,v(null),l(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),v("Error \ud83d\ude12. Please reload page \ud83d\udc4d");case 12:return t.prev=12,t.finish(12);case 14:case"end":return t.stop()}}),t,null,[[0,9,12,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(Number(e))}),[e]),c){console.log(d),console.log(c);var m=c.poster_path,g=c.original_title,w=c.overview,x=c.genres,k=c.vote_average,b=m?"https://image.tmdb.org/t/p/w500".concat(m):"https://www.pngall.com/wp-content/uploads/7/Gallery-PNG-Free-Download.png",y=10*k,j=x.map((function(e){return e.name})).join(" ");return c&&(0,p.jsxs)("main",{children:[(0,p.jsx)("button",{children:"Go back"}),(0,p.jsx)("img",{src:b,alt:"11",width:"240"}),(0,p.jsx)("h1",{children:g}),(0,p.jsxs)("p",{children:["User Score: ",y,"%"]}),(0,p.jsx)("h2",{children:"Overviev"}),(0,p.jsx)("p",{children:w}),(0,p.jsx)("h2",{children:"Genres"}),(0,p.jsxs)("p",{children:[" ",j]})]})}}}}]);
//# sourceMappingURL=594.fc69c67f.chunk.js.map