(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{150:function(t,e,n){"use strict";n.r(e);n(73);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(159),u=n(269),s=n(396),h=n.n(s),d=n(402),l=n.n(d),m=n(406),f=n.n(m),p=n(408),y=n.n(p),v=n(411),b=n.n(v),w=n(418),x=n.n(w),D=n(423),g=n.n(D),E=n(424);function k(t){return{datasets:[{backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgb(54, 162, 235)",borderWidth:1,label:"activities count",data:t}]}}function C(){for(var t=u.DateTime.fromObject({month:4,year:2018}),e=u.DateTime.local(),n=[],a=t;a<e;a=a.plus({month:1}))n.push({x:a.toJSDate(),y:0});return n}var M=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={data:C()},n}r()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;fetch("https://dl.dropboxusercontent.com/s/dpbdlobcf6y1snn/workout.gpi?raw=1",{method:"GET",headers:{"Cache-Control":"no-cache"}}).then(function(t){return t.text()}).then(function(t){return t.split("\n")}).then(function(t){return t.slice(2)}).then(y()(g.a)).then(h()(u.DateTime.fromISO)).then(h()(function(t){return t.toFormat("yyyy MM")})).then(l()(g.a)).then(f()(b.a)).then(x.a).then(function(e){return t.setState({data:h()(function(t){var e=t[0],n=t[1];return{x:u.DateTime.fromFormat(e,"yyyy MM").toJSDate(),y:n}},e)})})},n.render=function(){var t=this.state.data;return i.a.createElement(c.a,null,i.a.createElement("div",{style:{width:500,height:500}},i.a.createElement(E.a,{data:k(t),height:"500",width:"500",options:T})))},e}(i.a.Component),T={responsive:!0,scales:{xAxes:[{type:"time",display:!0}],yAxes:[{display:!0,ticks:{min:0,max:20}}]}};e.default=M},159:function(t,e,n){"use strict";var a=n(0),r=n.n(a);e.a=function(t){var e=t.children;return r.a.createElement("div",{id:"layout"},r.a.createElement("div",{id:"container"},e))}}}]);
//# sourceMappingURL=component---src-pages-activities-js-f0e34ca4bcabe5158f42.js.map