(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"AOu/":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),a=(n("Efxr"),n("Bl7J"),n("j7Zm"));e.default=()=>i.a.createElement(a.b,{steps:["\n      X---Y---Z  topic\n     /\nA---B---C  master","\n        topic\n        ↓\nA---B---C  master","\n          X'--Y'--Z' topic\n         /\nA---B---C  master"],positions:[[-87,50,-40],[32,10,-40],[]],renderExtra:t=>1==t&&Object(a.c)(t=>i.a.createElement(a.a,{exitX:-10,exitY:-10,transform:"translate(108px, -47px)",key:"somewhere"+t},"X---Y---Z"))})},j7Zm:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return f}));var r=n("q1tI"),i=n.n(r),a=n("Efxr"),o=n("Bl7J");const s={type:"spring",stiffness:300,damping:50},c=a.b.div({pre:{opacity:0,transition:{duration:500}},enter:{opacity:1,transition:{duration:500}},exit:{opacity:0,transition:{duration:500}}}),l=a.b.div({pre:{opacity:0,x:t=>{let{preX:e}=t;return e},transition:s},enter:{opacity:1,x:0,transition:s},exit:{opacity:0,x:t=>{let{exitX:e}=t;return e},transition:s}}),p=Object(a.b)(Object(r.forwardRef)((t,e)=>{let{children:n,style:r,transform:a}=t;return i.a.createElement("div",{ref:e,style:r},i.a.createElement("div",{style:{fontSize:13,color:"#b1b1b1",position:"absolute",margin:"auto",transform:a}},x("tmp: "+n)))}))({pre:{opacity:0,x:0,y:0,transition:{duration:500}},enter:{opacity:1,x:0,y:0,transition:{duration:500}},exit:{opacity:0,x:t=>{let{exitX:e}=t;return e},y:t=>{let{exitY:e}=t;return e},transition:s}}),u=(()=>{let t=0;return e=>{let{ascii:n,prefix:r,preX:a,exitX:o}=e;return i.a.createElement(l,{preX:a,exitX:o,key:n+t++},x(n))}})(),m=t=>{let{ascii:e}=t;return i.a.createElement(c,{key:e+0},x(e))},f=(()=>{let t=0;return e=>e(t++)})();function x(t){return t.replace(/\s/g," ")}e.b=function(t){let{steps:e,positions:n,renderExtra:s}=t;const{0:c,1:l}=Object(r.useState)(0);return i.a.createElement(o.a,null,i.a.createElement("div",{style:{width:272,marginRight:"auto",marginLeft:"auto",marginTop:-5,userSelect:"none",position:"relative",lineHeight:1.5}},i.a.createElement("figure",{style:{cursor:"pointer"},onClick:()=>l((c+1)%e.length)},i.a.createElement("div",{className:"mono",style:{fontSize:16}},i.a.createElement(a.a,{preEnterPose:"pre"},(t=>{let{steps:e,positions:n,renderExtra:r}=t;const i=e.map(t=>{const[e,...n]=t.split("\n");return n});if(n.some(t=>t.length!==i.length&&t.length>0))throw new Error("There must be positions for each steps!");if(!i.every(t=>t.length===n.length))throw new Error("Positions.length must be equal to the number of lines");return i.map((t,r)=>t.map((t,i)=>{const a=n[i];if(a.length){const n={ascii:t,preX:-a[(r-1+e.length)%e.length],exitX:a[r]};return u(n)}return m({ascii:t})})).map((t,e)=>(r&&t.push(r(e)),t))})({steps:e,positions:n,renderExtra:s})[c])),i.a.createElement("figcaption",{style:{marginTop:15}},"Step ",c," (tap to animate)"))))}}}]);
//# sourceMappingURL=component---src-pages-git-rebase-figure-1-js-525ae7433be7316a624b.js.map