(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(t,n,e){"use strict";e.r(n);e(73);var a=e(7),r=e.n(a),o=e(0),i=e.n(o),c=e(153),u=e(238),s=e(329),h=e.n(s),d=e(418),l=e.n(d),m=e(422),f=e.n(m),p=(e(424),e(427)),y=e.n(p),w=e(430),b=e.n(w),v=e(437),x=e.n(v),D=e(442),k=e.n(D),g=e(443),C=e.n(g),M=(e(447),e(229),e(495));function T(t){return{datasets:[{backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgb(54, 162, 235)",borderWidth:1,label:"activities count",data:t}]}}var E=function(t){function n(n){var e,a;return(e=t.call(this,n)||this).state={data:(a=u.DateTime.local().month,C()(4,a+1).map(function(t){return{x:u.DateTime.fromObject({month:t}).toJSDate(),y:null}}))},e}r()(n,t);var e=n.prototype;return e.componentDidMount=function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/www.dropbox.com/s/dpbdlobcf6y1snn/workout.gpi?raw=1",{method:"GET",headers:{"Cache-Control":"no-cache"}}).then(function(t){return t.text()}).then(function(t){return t.split("\n")}).then(function(t){return t.slice(2)}).then(y()(k.a)).then(h()(u.DateTime.fromISO)).then(h()(function(t){return t.toFormat("yyyy MM")})).then(l()(k.a)).then(f()(b.a)).then(x.a).then(function(n){return t.setState({data:h()(function(t){var n=t[0],e=t[1];return{x:u.DateTime.fromFormat(n,"yyyy MM").toJSDate(),y:e}},n)})})},e.render=function(){var t=this.state.data;return i.a.createElement(c.a,null,i.a.createElement(M.a,{data:T(t),width:200,height:200,options:J}))},n}(i.a.Component),J={scales:{xAxes:[{type:"time",display:!0}],yAxes:[{display:!0,ticks:{min:0,max:20}}]}};n.default=E},153:function(t,n,e){"use strict";var a=e(0),r=e.n(a);n.a=function(t){var n=t.children;return r.a.createElement("div",{id:"layout"},n)}}}]);
//# sourceMappingURL=component---src-pages-activities-js-68d06a9c3864c41a3c97.js.map