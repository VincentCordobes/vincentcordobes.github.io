(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,n){"use strict";n.r(t);n(74);var a=n(0),i=n.n(a),r=(n(48),n(284)),o=(n(498),n(157)),c=["\n      E---F---G  topic\n     /\nA---B---C---D  master","\n            topic \n            ↓\nA---B---C---D  master          somewhere: E---F---G","\n              E' topic \n             /\nA---B---C---D  master          somewhere: F---G","\n              E'--F' topic \n             /\nA---B---C---D  master          somewhere: G","\n              E'--F'--G' topic\n             /\nA---B---C---D  master"];var s=r.b.div({initialPose:"closed",open:{staggerChildren:15}}),l=r.b.div({open:{scale:1,transition:{type:"spring",stiffness:300}},closed:{scale:0,transition:{type:"spring",stiffness:50}}});function u(e){return e.motif.split("").map(function(e,t){return i.a.createElement(l,{style:{fontSize:20},key:"c"+t}," "===e?" ":e)})}var p=r.b.div({enter:{opacity:1,transition:{duration:500}},exit:{opacity:0,transition:{duration:500}}}),f=function(e){var t=e.value,n=e.displayed,o=Object(a.useState)(null),c=o[0],l=o[1];return c!==t&&l(t),i.a.createElement(s,{style:{display:"flex",flexDirection:"column-reverse"},pose:n?"open":"closed"},i.a.createElement(r.a,null,t.split("\n").filter(Boolean).reverse().map(function(e){return i.a.createElement(p,{key:e,style:{display:"flex"}},i.a.createElement(u,{motif:e}))})))};t.default=function(){var e=Object(a.useState)(0),t=e[0],n=e[1],r=Object(a.useState)(!1),s=r[0],l=r[1];return Object(a.useEffect)(function(){var e=setTimeout(function(){l(!0)},200);return function(){return clearTimeout(e)}},[]),i.a.createElement(o.a,null,i.a.createElement("button",{onClick:function(){n(Math.abs((t-1)%c.length))}},"back")," ",i.a.createElement("button",{onClick:function(){n((t+1)%c.length)}},"next (",t,")"),i.a.createElement(f,{displayed:s,value:c[t]}))}},157:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children;return i.a.createElement("div",{id:"layout"},t)}}}]);
//# sourceMappingURL=component---src-pages-git-js-d7fd50125709240c3c01.js.map