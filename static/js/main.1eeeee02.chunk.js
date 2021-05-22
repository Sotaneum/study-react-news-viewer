(this["webpackJsonpnews-viewer"]=this["webpackJsonpnews-viewer"]||[]).push([[0],{36:function(e,n,t){e.exports=t(68)},68:function(e,n,t){"use strict";t.r(n);var a,r,c,l,i=t(0),o=t.n(i),m=t(30),u=t.n(m),s=t(1),p=t(7),d=t(8),b=t(11),h=[{name:"all",text:"\uc804\uccb4\ubcf4\uae30"},{name:"business",text:"\ube44\uc988\ub2c8\uc2a4"},{name:"entertainment",text:"\uc5d4\ud130\ud14c\uc778\uba3c\ud2b8"},{name:"health",text:"\uac74\uac15"},{name:"science",text:"\uacfc\ud559"},{name:"sports",text:"\uc2a4\ud3ec\uce20"},{name:"technology",text:"\uae30\uc220"}],f=d.a.div(a||(a=Object(p.a)(["\n  display: flex;\n  padding: 1rem;\n  width: 768px;\n  margin: 0 auto;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    overflow-x: auto;\n  }\n"]))),g=Object(d.a)(b.b)(r||(r=Object(p.a)(["\n  font-size: 1.125rem;\n  cursor: pointer;\n  white-space: pre;\n  text-decoration: none;\n  color: inherit;\n  padding-bottom: 0.25rem;\n\n  &:hover {\n    color: #495057;\n  }\n\n  &.active {\n    font-weight: 600;\n    border-bottom: 2px solid #22b8cf;\n    color: #22b8cf;\n    &:hover {\n      color: #3bc9db;\n    }\n  }\n\n  & + & {\n    margin-left: 1rem;\n  }\n"]))),v=function(){return o.a.createElement(f,null,h.map((function(e){return o.a.createElement(g,{key:e.name,activeClassName:"active",exact:"all"===e.name,to:"all"===e.name?"/":"/".concat(e.name)},e.text)})))},x=t(10),E=d.a.div(c||(c=Object(p.a)(["\n  display: flex;\n  .thumbnail {\n    margin-right: 1rem;\n    img {\n      display: block;\n      width: 160px;\n      height: 100px;\n      object-fit: cover;\n    }\n  }\n  .contents {\n    h2 {\n      margin: 0;\n      a {\n        color: black;\n      }\n    }\n    p {\n      margin: 0;\n      line-height: 1.5;\n      margin-top: 0.5rem;\n      white-space: normal;\n    }\n  }\n  & + & {\n    margin-top: 3rem;\n  }\n"]))),w=function(e){var n=e.article,t=n.title,a=n.description,r=n.url,c=n.urlToImage;return o.a.createElement(E,null,c&&o.a.createElement("div",{className:"thumbnail"},o.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:c,alt:"thumbnail"}))),o.a.createElement("div",{className:"contents"},o.a.createElement("h2",null,o.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},t)),o.a.createElement("p",null,a)))},j=t(34),y=t.n(j),O=t(18),k=t.n(O),N=t(35);var S=d.a.div(l||(l=Object(p.a)(["\n  box-sizing: border-box;\n  padding-bottom: 3rem;\n  width: 768px;\n  margin: 0 auto;\n  margin-top: 2rem;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n"]))),z=function(e){var n=e.category,t=function(e,n){var t=Object(i.useState)(!1),a=Object(x.a)(t,2),r=a[0],c=a[1],l=Object(i.useState)(null),o=Object(x.a)(l,2),m=o[0],u=o[1],s=Object(i.useState)(null),p=Object(x.a)(s,2),d=p[0],b=p[1];return Object(i.useEffect)((function(){(function(){var n=Object(N.a)(k.a.mark((function n(){var t;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,n.next=4,e();case 4:t=n.sent,u(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),b(n.t0);case 11:c(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}})()()}),n),[r,m,d]}((function(){var e="all"===n?"":"&category=".concat(n);return y.a.get("http://newsapi.org/v2/top-headlines?country=kr".concat(e,"&apiKey=").concat("8931841bf4494b39877666d3264b9f08"))}),[n]),a=Object(x.a)(t,3),r=a[0],c=a[1],l=a[2];if(r)return o.a.createElement(S,null,"\ub300\uae30 \uc911 ...");if(!c)return null;if(l)return o.a.createElement(S,null,"\uc5d0\ub7ec \ubc1c\uc0dd!");var m=c.data.articles;return o.a.createElement(S,null,m.map((function(e){return o.a.createElement(w,{key:e.url,article:e})})))},I=function(e){var n=e.match.params.category||"all";return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null),o.a.createElement(z,{category:n}))},J=function(){return o.a.createElement(s.a,{path:"/:category?",component:I})};u.a.render(o.a.createElement(b.a,null,o.a.createElement(J,null),":"),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.1eeeee02.chunk.js.map