(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7fqM":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),s=n.n(a),i=(n("i8i4"),n("Efxr")),o=n("Bl7J");const l=["\n      E---F---G  topic\n     /\nA---B---C---D  master","\n            topic \n            ↓\nA---B---C---D  master          somewhere: E---F---G","\n              E' topic \n             /\nA---B---C---D  master          somewhere: F---G","\n              E'--F' topic \n             /\nA---B---C---D  master          somewhere: G","\n              E'--F'--G' topic\n             /\nA---B---C---D  master"];const r=i.b.div({initialPose:"closed",open:{staggerChildren:15}}),c=i.b.div({open:{scale:1,transition:{type:"spring",stiffness:300}},closed:{scale:0,transition:{type:"spring",stiffness:50}}});function p(e){let{motif:t}=e;return t.split("").map((e,t)=>s.a.createElement(c,{style:{fontSize:20},key:"c"+t}," "===e?" ":e))}const u=i.b.div({enter:{opacity:1,transition:{duration:500}},exit:{opacity:0,transition:{duration:500}}}),m=e=>{let{value:t,displayed:n}=e;const{0:o,1:l}=Object(a.useState)(null);return o!==t&&l(t),s.a.createElement(r,{style:{display:"flex",flexDirection:"column-reverse"},pose:n?"open":"closed"},s.a.createElement(i.a,null,t.split("\n").filter(Boolean).reverse().map(e=>s.a.createElement(u,{key:e,style:{display:"flex"}},s.a.createElement(p,{motif:e})))))};t.default=function(){const{0:e,1:t}=Object(a.useState)(0),{0:n,1:i}=Object(a.useState)(!1);return Object(a.useEffect)(()=>{const e=setTimeout(()=>{i(!0)},200);return()=>clearTimeout(e)},[]),s.a.createElement(o.a,null,s.a.createElement("button",{onClick:()=>{t(Math.abs((e-1)%l.length))}},"back")," ",s.a.createElement("button",{onClick:()=>{t((e+1)%l.length)}},"next (",e,")"),s.a.createElement(m,{displayed:n,value:l[e]}))}}}]);
//# sourceMappingURL=component---src-pages-git-js-3c1393908f1a709822a6.js.map