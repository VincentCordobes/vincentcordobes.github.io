(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"AOu/":function(e,t,n){"use strict";n.r(t);var r=n("nNWW"),i=n.n(r),a=(n("8lfe"),n("Bl7J"),n("j7Zm"));t.default=()=>i.a.createElement(a.b,{steps:["\n      X---Y---Z  topic\n     /\nA---B---C  master","\n        topic\n        ↓\nA---B---C  master","\n          X'--Y'--Z' topic\n         /\nA---B---C  master"],positions:[[-87,50,-40],[32,10,-40],[]],renderExtra:e=>1==e&&Object(a.c)(e=>i.a.createElement(a.a,{exitX:-10,exitY:-10,transform:"translate(108px, -47px)",key:"somewhere"+e},"X---Y---Z"))})},j7Zm:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f}));var r=n("nNWW"),i=n.n(r),a=n("8lfe"),o=n("Bl7J");const s={type:"spring",stiffness:300,damping:50},l=a.b.div({pre:{opacity:0,transition:{duration:500}},enter:{opacity:1,transition:{duration:500}},exit:{opacity:0,transition:{duration:500}}}),c=a.b.div({pre:{opacity:0,x:e=>{let{preX:t}=e;return t},transition:s},enter:{opacity:1,x:0,transition:s},exit:{opacity:0,x:e=>{let{exitX:t}=e;return t},transition:s}}),p=Object(a.b)(Object(r.forwardRef)((e,t)=>{let{children:n,style:r,transform:a}=e;return i.a.createElement("div",{ref:t,style:r},i.a.createElement("div",{style:{fontSize:13,color:"#b1b1b1",position:"absolute",margin:"auto",transform:a}},d("tmp: "+n)))}))({pre:{opacity:0,x:0,y:0,transition:{duration:500}},enter:{opacity:1,x:0,y:0,transition:{duration:500}},exit:{opacity:0,x:e=>{let{exitX:t}=e;return t},y:e=>{let{exitY:t}=e;return t},transition:s}}),u=(()=>{let e=0;return t=>{let{ascii:n,prefix:r,preX:a,exitX:o}=t;return i.a.createElement(c,{preX:a,exitX:o,key:n+e++},d(n))}})(),m=e=>{let{ascii:t}=e;return i.a.createElement(l,{key:t+0},d(t))},f=(()=>{let e=0;return t=>t(e++)})();function d(e){return e.replace(/\s/g," ")}t.b=function(e){let{steps:t,positions:n,renderExtra:s}=e;const{0:l,1:c}=Object(r.useState)(0);return i.a.createElement(o.a,null,i.a.createElement("div",{style:{width:272,marginRight:"auto",marginLeft:"auto",marginTop:-5,userSelect:"none",position:"relative",lineHeight:1.5}},i.a.createElement("figure",{style:{cursor:"pointer"},onClick:()=>c((l+1)%t.length)},i.a.createElement("div",{className:"mono",style:{fontSize:16}},i.a.createElement(a.a,{preEnterPose:"pre"},(e=>{let{steps:t,positions:n,renderExtra:r}=e;const i=t.map(e=>{const[t,...n]=e.split("\n");return n});if(n.some(e=>e.length!==i.length&&e.length>0))throw new Error("There must be positions for each steps!");if(!i.every(e=>e.length===n.length))throw new Error("Positions.length must be equal to the number of lines");return i.map((e,r)=>e.map((e,i)=>{const a=n[i];if(a.length){const n={ascii:e,preX:-a[(r-1+t.length)%t.length],exitX:a[r]};return u(n)}return m({ascii:e})})).map((e,t)=>(r&&e.push(r(t)),e))})({steps:t,positions:n,renderExtra:s})[l])),i.a.createElement("figcaption",{style:{marginTop:15}},"Step ",l," (tap to animate)"))))}}}]);
//# sourceMappingURL=component---src-pages-git-rebase-figure-1-js-b93a27fd0c52cd5e4d4c.js.map