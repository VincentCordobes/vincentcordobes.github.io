(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=(n(170),n(153),n(182));e.default=function(){return i.a.createElement(a.b,{steps:["\n      X---Y---Z  topic\n     /\nA---B---C  master","\n        topic\n        ↓\nA---B---C  master","\n          X'--Y'--Z' topic\n         /\nA---B---C  master"],positions:[[-87,50,-40],[32,10,-40],[]],renderExtra:function(t){return 1==t&&Object(a.c)(function(t){return i.a.createElement(a.a,{exitX:-10,exitY:-10,transform:"translate(108px, -47px)",key:"somewhere"+t},"X---Y---Z")})}})}},153:function(t,e,n){"use strict";var r=n(0),i=n.n(r);e.a=function(t){var e=t.children;return i.a.createElement("div",{id:"layout"},e)}},182:function(t,e,n){"use strict";n.d(e,"a",function(){return f}),n.d(e,"c",function(){return d});n(33),n(73);var r,i=n(0),a=n.n(i),o=n(170),s=n(153),c={type:"spring",stiffness:300,damping:50},u=o.b.div({pre:{opacity:0,transition:{duration:500}},enter:{opacity:1,transition:{duration:500}},exit:{opacity:0,transition:{duration:500}}}),p=o.b.div({pre:{opacity:0,x:function(t){return t.preX},transition:c},enter:{opacity:1,x:0,transition:c},exit:{opacity:0,x:function(t){return t.exitX},transition:c}}),f=Object(o.b)(Object(i.forwardRef)(function(t,e){var n=t.children,r=t.style,i=t.transform;return a.a.createElement("div",{ref:e,style:r},a.a.createElement("div",{style:{fontSize:13,color:"#b1b1b1",position:"absolute",margin:"auto",transform:i}},x("tmp: "+n)))}))({pre:{opacity:0,x:0,y:0,transition:{duration:500}},enter:{opacity:1,x:0,y:0,transition:{duration:500}},exit:{opacity:0,x:function(t){return t.exitX},y:function(t){return t.exitY},transition:c}}),l=(r=0,function(t){var e=t.ascii,n=(t.prefix,t.preX),i=t.exitX;return a.a.createElement(p,{preX:n,exitX:i,key:e+r++},x(e))}),m=function(t){var e=t.ascii;return a.a.createElement(u,{key:e+0},x(e))},d=function(){var t=0;return function(e){return e(t++)}}(),y=function(t){var e=t.steps,n=t.positions,r=t.renderExtra,i=e.map(function(t){var e=t.split("\n");e[0];return e.slice(1)});if(n.some(function(t){return t.length!==i.length&&t.length>0}))throw new Error("There must be positions for each steps!");if(!i.every(function(t){return t.length===n.length}))throw new Error("Positions.length must be equal to the number of lines");return i.map(function(t,r){return t.map(function(t,i){var a=n[i];if(a.length){var o={ascii:t,preX:-a[(r-1+e.length)%e.length],exitX:a[r]};return l(o)}return m({ascii:t})})}).map(function(t,e){return r&&t.push(r(e)),t})};function x(t){return t.replace(/\s/g," ")}e.b=function(t){var e=t.steps,n=t.positions,r=t.renderExtra,c=Object(i.useState)(0),u=c[0],p=c[1];return a.a.createElement(s.a,null,a.a.createElement("div",{style:{width:272,marginRight:"auto",marginLeft:"auto",userSelect:"none",position:"relative"}},a.a.createElement("figure",{style:{cursor:"pointer"},onClick:function(){return p((u+1)%e.length)}},a.a.createElement("div",{className:"mono",style:{fontSize:16}},a.a.createElement(o.a,{preEnterPose:"pre"},y({steps:e,positions:n,renderExtra:r})[u])),a.a.createElement("figcaption",{style:{marginTop:15}},"Step ",u," (tap to animate)"))))}}}]);
//# sourceMappingURL=component---src-pages-git-rebase-figure-1-js-5c95d213182d661068ea.js.map