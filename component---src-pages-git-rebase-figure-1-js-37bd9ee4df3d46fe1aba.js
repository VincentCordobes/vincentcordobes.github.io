(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"AOu/":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),a=(n("Efxr"),n("Bl7J"),n("j7Zm"));e.default=function(){return i.a.createElement(a.b,{steps:["\n      X---Y---Z  topic\n     /\nA---B---C  master","\n        topic\n        ↓\nA---B---C  master","\n          X'--Y'--Z' topic\n         /\nA---B---C  master"],positions:[[-87,50,-40],[32,10,-40],[]],renderExtra:function(t){return 1==t&&Object(a.c)((function(t){return i.a.createElement(a.a,{exitX:-10,exitY:-10,transform:"translate(108px, -47px)",key:"somewhere"+t},"X---Y---Z")}))}})}},j7Zm:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return x}));var r,i=n("q1tI"),a=n.n(i),o=n("Efxr"),s=n("Bl7J"),u={type:"spring",stiffness:300,damping:50},c=o.b.div({pre:{opacity:0,transition:{duration:500}},enter:{opacity:1,transition:{duration:500}},exit:{opacity:0,transition:{duration:500}}}),p=o.b.div({pre:{opacity:0,x:function(t){return t.preX},transition:u},enter:{opacity:1,x:0,transition:u},exit:{opacity:0,x:function(t){return t.exitX},transition:u}}),f=Object(o.b)(Object(i.forwardRef)((function(t,e){var n=t.children,r=t.style,i=t.transform;return a.a.createElement("div",{ref:e,style:r},a.a.createElement("div",{style:{fontSize:13,color:"#b1b1b1",position:"absolute",margin:"auto",transform:i}},d("tmp: "+n)))})))({pre:{opacity:0,x:0,y:0,transition:{duration:500}},enter:{opacity:1,x:0,y:0,transition:{duration:500}},exit:{opacity:0,x:function(t){return t.exitX},y:function(t){return t.exitY},transition:u}}),l=(r=0,function(t){var e=t.ascii,n=(t.prefix,t.preX),i=t.exitX;return a.a.createElement(p,{preX:n,exitX:i,key:e+r++},d(e))}),m=function(t){var e=t.ascii;return a.a.createElement(c,{key:e+0},d(e))},x=function(){var t=0;return function(e){return e(t++)}}();function d(t){return t.replace(/\s/g," ")}e.b=function(t){var e=t.steps,n=t.positions,r=t.renderExtra,u=Object(i.useState)(0),c=u[0],p=u[1];return a.a.createElement(s.a,null,a.a.createElement("div",{style:{width:272,marginRight:"auto",marginLeft:"auto",marginTop:-5,userSelect:"none",position:"relative",lineHeight:1.5}},a.a.createElement("figure",{style:{cursor:"pointer"},onClick:function(){return p((c+1)%e.length)}},a.a.createElement("div",{className:"mono",style:{fontSize:16}},a.a.createElement(o.a,{preEnterPose:"pre"},function(t){var e=t.steps,n=t.positions,r=t.renderExtra,i=e.map((function(t){var e=t.split("\n");e[0];return e.slice(1)}));if(n.some((function(t){return t.length!==i.length&&t.length>0})))throw new Error("There must be positions for each steps!");if(!i.every((function(t){return t.length===n.length})))throw new Error("Positions.length must be equal to the number of lines");return i.map((function(t,r){return t.map((function(t,i){var a=n[i];if(a.length){var o={ascii:t,preX:-a[(r-1+e.length)%e.length],exitX:a[r]};return l(o)}return m({ascii:t})}))})).map((function(t,e){return r&&t.push(r(e)),t}))}({steps:e,positions:n,renderExtra:r})[c])),a.a.createElement("figcaption",{style:{marginTop:15}},"Step ",c," (tap to animate)"))))}}}]);
//# sourceMappingURL=component---src-pages-git-rebase-figure-1-js-37bd9ee4df3d46fe1aba.js.map