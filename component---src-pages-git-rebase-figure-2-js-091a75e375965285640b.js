(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Oyfi:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),a=(n("Efxr"),n("Bl7J"),n("j7Zm"));e.default=()=>i.a.createElement(a.b,{steps:["\n            E---F  topicB\n           /\n      C---D  topicA\n     /\nA---B  master","\n    topicB\n    |\n    | C---D  topicA\n    ↓/\nA---B  master","\n     E'--F' topicB\n    /\n    | C---D  topicA\n    |/\nA---B  master"],positions:[[-150,80,70],[-70,0,70],[],[],[]],renderExtra:t=>1==t&&Object(a.c)(t=>i.a.createElement(a.a,{exitX:-30,exitY:-15,transform:"translate(68px, -94px)",key:"somewhere"+t},"E---F"))})},j7Zm:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return f}));var r=n("q1tI"),i=n.n(r),a=n("Efxr"),o=n("Bl7J");const s={type:"spring",stiffness:300,damping:50},c=a.b.div({pre:{opacity:0,transition:{duration:500}},enter:{opacity:1,transition:{duration:500}},exit:{opacity:0,transition:{duration:500}}}),p=a.b.div({pre:{opacity:0,x:t=>{let{preX:e}=t;return e},transition:s},enter:{opacity:1,x:0,transition:s},exit:{opacity:0,x:t=>{let{exitX:e}=t;return e},transition:s}}),l=Object(a.b)(Object(r.forwardRef)((t,e)=>{let{children:n,style:r,transform:a}=t;return i.a.createElement("div",{ref:e,style:r},i.a.createElement("div",{style:{fontSize:13,color:"#b1b1b1",position:"absolute",margin:"auto",transform:a}},x("tmp: "+n)))}))({pre:{opacity:0,x:0,y:0,transition:{duration:500}},enter:{opacity:1,x:0,y:0,transition:{duration:500}},exit:{opacity:0,x:t=>{let{exitX:e}=t;return e},y:t=>{let{exitY:e}=t;return e},transition:s}}),u=(()=>{let t=0;return e=>{let{ascii:n,prefix:r,preX:a,exitX:o}=e;return i.a.createElement(p,{preX:a,exitX:o,key:n+t++},x(n))}})(),m=t=>{let{ascii:e}=t;return i.a.createElement(c,{key:e+0},x(e))},f=(()=>{let t=0;return e=>e(t++)})();function x(t){return t.replace(/\s/g," ")}e.b=function(t){let{steps:e,positions:n,renderExtra:s}=t;const{0:c,1:p}=Object(r.useState)(0);return i.a.createElement(o.a,null,i.a.createElement("div",{style:{width:272,marginRight:"auto",marginLeft:"auto",marginTop:-5,userSelect:"none",position:"relative",lineHeight:1.5}},i.a.createElement("figure",{style:{cursor:"pointer"},onClick:()=>p((c+1)%e.length)},i.a.createElement("div",{className:"mono",style:{fontSize:16}},i.a.createElement(a.a,{preEnterPose:"pre"},(t=>{let{steps:e,positions:n,renderExtra:r}=t;const i=e.map(t=>{const[e,...n]=t.split("\n");return n});if(n.some(t=>t.length!==i.length&&t.length>0))throw new Error("There must be positions for each steps!");if(!i.every(t=>t.length===n.length))throw new Error("Positions.length must be equal to the number of lines");return i.map((t,r)=>t.map((t,i)=>{const a=n[i];if(a.length){const n={ascii:t,preX:-a[(r-1+e.length)%e.length],exitX:a[r]};return u(n)}return m({ascii:t})})).map((t,e)=>(r&&t.push(r(e)),t))})({steps:e,positions:n,renderExtra:s})[c])),i.a.createElement("figcaption",{style:{marginTop:15}},"Step ",c," (tap to animate)"))))}}}]);
//# sourceMappingURL=component---src-pages-git-rebase-figure-2-js-091a75e375965285640b.js.map