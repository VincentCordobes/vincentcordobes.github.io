(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(174),o=n(226),c=n.n(o),l=n(269);var s=function(e){var t,n=Object(a.useState)((t=l.DateTime.fromISO("1993-08-15"),l.DateTime.local().diff(t,"years").toFormat("y")))[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{style:{marginBottom:"0.6em"}},r.a.createElement("h1",{style:{fontSize:"1.9em"}},"🦁 Vincent Cordobes")),r.a.createElement("p",null,"Hi! I'm a ",n," years old software engineer from France. I like functional programming and statically typed languages."),r.a.createElement("p",null,"You can find me on"," ",r.a.createElement("a",{href:"https://twitter.com/VincentCordobes"},"twitter"),","," ",r.a.createElement("a",{href:"https://github.com/VincentCordobes"},"github"),","," ",r.a.createElement("a",{href:"https://www.instagram.com/vincentcordobes/"},"instagram"),","," ",r.a.createElement("a",{href:"/rss.xml"},"rss"),"."),r.a.createElement("hr",null))},u=n(221),m=n(159);n(220),n(155);n.d(t,"pageQuery",function(){return d});t.default=function(e){var t=c()("data.allMarkdownRemark.edges",e);return r.a.createElement(m.a,null,r.a.createElement(u.a,null),r.a.createElement(s,null),r.a.createElement("p",null,"I occasionally write stuff here either in english or french:"),r.a.createElement("ul",{id:"post-list"},t.map(function(e){var t=e.node,n=c()("frontmatter.title",t)||t.fields.slug,a=c()("frontmatter.lang",t);return r.a.createElement("li",{key:t.fields.slug},r.a.createElement("small",{className:"mono date"},t.frontmatter.date)," - ",r.a.createElement(i.a,{to:t.fields.slug},n),a&&r.a.createElement("small",{className:"mono date"}," (",a,") "))})))};var d="2393812817"},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children;return r.a.createElement("div",{id:"layout"},r.a.createElement("div",{id:"container"},t))}},174:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(32),l=n.n(c);n.d(t,"a",function(){return l.a});n(175);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},175:function(e,t,n){var a;e.exports=(a=n(190))&&a.default||a},190:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(54),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},220:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(268);t.a=function(){var e=Object(a.useState)(0),t=e[0],n=e[1];return r.a.createElement("div",null,0===t&&r.a.createElement(i.a,{onEnter:function(){return function e(t,n){setTimeout(function(){t(n),n<3&&e(t,n+1)},200)}(n,t)}}),":wq".substring(0,t),r.a.createElement("div",{className:"vim-cursor"}))}},221:function(e,t,n){"use strict";n(33);var a=n(222),r=n(0),i=n.n(r),o=n(191),c=n.n(o),l=n(4),s=n.n(l),u=n(174),m="3236765318";function d(e){var t=e.meta,n=e.image,r=e.title,o=e.description,l=e.slug;return i.a.createElement(u.b,{query:m,render:function(e){var a=e.site.siteMetadata,s=o||a.description,u=n?""+a.siteUrl+n:null,m=""+a.siteUrl+l;return i.a.createElement(c.a,Object.assign({htmlAttributes:{lang:"en"}},r?{titleTemplate:"%s | "+a.title,title:r}:{title:a.title},{meta:[{name:"google-site-verification",content:"kjM2mfXvQ9XJ7BqEPTHNHWZ62wJsC5G_GtuPX1oy0EY"},{name:"description",content:s},{property:"og:url",content:m},{property:"og:title",content:r||a.title},{name:"og:description",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.social.twitter},{name:"twitter:title",content:r||a.title},{name:"twitter:description",content:s}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))},data:a})}d.defaultProps={meta:[],title:"",slug:""},d.propTypes={description:s.a.string,image:s.a.string,meta:s.a.array,slug:s.a.string,title:s.a.string.isRequired},t.a=d},222:function(e){e.exports={data:{site:{siteMetadata:{title:"Vincent Cordobes",author:"Vincent Cordobes",description:"Personal blog by Vincent Cordobes. I write mostly about software development",siteUrl:"https://vincentcordobes.github.io",social:{twitter:"@VincentCordobes"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-7b46b5484917bfde82f7.js.map