(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(t,e,n){"use strict";n.r(e);var r=n(7),a=n.n(r),i=n(0),o=n.n(i),l=n(168),u=(n(193),n(158));var c=function(){var t=Object(i.useState)(0),e=t[0],n=t[1];return Object(i.useEffect)(function(){var t=setTimeout(function(){return function t(e,n){setTimeout(function(){e(n),n<3&&t(e,n+1)},200)}(n,0)},1e3);return function(){return clearTimeout(t)}},[]),o.a.createElement("div",null,":wq".substring(0,e),e>0&&o.a.createElement("div",{className:"vim-cursor"}))},s=n(198);n(319),n(320),n(321);function d(){return o.a.createElement("header",null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/",rel:"home"},"Home")))))}n.d(e,"pageQuery",function(){return p});var m=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.pageContext,n=e.previous,r=e.next;return o.a.createElement(u.a,null,o.a.createElement("div",{id:"blog-post"},o.a.createElement(s.a,{title:t.frontmatter.title,description:t.frontmatter.spoiler,slug:t.fields.slug}),o.a.createElement(d,null),o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("small",{style:{display:"block"}},t.frontmatter.date),o.a.createElement("div",{id:"blog-post-content",dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement(c,null),(n||r)&&o.a.createElement("hr",null),o.a.createElement("ul",{id:"blog-post-footer"},o.a.createElement("li",null,n&&o.a.createElement(l.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(l.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))))},e}(o.a.Component),p=(e.default=m,"271126158")},158:function(t,e,n){"use strict";var r=n(0),a=n.n(r);e.a=function(t){var e=t.children;return a.a.createElement("div",{id:"layout"},e)}},168:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return m}),n.d(e,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(151),u=n.n(l);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return l.withPrefix}),n.d(e,"navigate",function(){return l.navigate}),n.d(e,"push",function(){return l.push}),n.d(e,"replace",function(){return l.replace}),n.d(e,"navigateTo",function(){return l.navigateTo});var c=n(172),s=n.n(c);n.d(e,"PageRenderer",function(){return s.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var m=a.a.createContext({}),p=function(t){return a.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},172:function(t,e,n){var r;t.exports=(r=n(192))&&r.default||r},192:function(t,e,n){"use strict";n.r(e);n(32);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(54),u=n(2),c=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},198:function(t,e,n){"use strict";n(32);var r=n(199),a=n(0),i=n.n(a),o=n(230),l=n.n(o),u=n(4),c=n.n(u),s=n(168),d="3236765318";function m(t){var e=t.meta,n=t.image,a=t.title,o=t.description,u=t.slug;return i.a.createElement(s.StaticQuery,{query:d,render:function(t){var r=t.site.siteMetadata,c=o||r.description,s=n?r.siteUrl+"/"+n:null,d=""+r.siteUrl+u;return i.a.createElement(l.a,Object.assign({htmlAttributes:{lang:"en"}},a?{titleTemplate:"%s - "+r.title,title:a}:{title:r.title},{meta:[{name:"google-site-verification",content:"kjM2mfXvQ9XJ7BqEPTHNHWZ62wJsC5G_GtuPX1oy0EY"},{name:"description",content:c},{property:"og:url",content:d},{property:"og:title",content:a||r.title},{name:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.social.twitter},{name:"twitter:title",content:a||r.title},{name:"twitter:description",content:c}].concat(s?[{property:"og:image",content:s},{name:"twitter:image",content:s}]:[]).concat(e)}))},data:r})}m.defaultProps={meta:[],title:"",slug:""},m.propTypes={description:c.a.string,image:c.a.string,meta:c.a.array,slug:c.a.string,title:c.a.string.isRequired},e.a=m},199:function(t){t.exports={data:{site:{siteMetadata:{title:"Vincent's page",author:"Vincent Cordobes",description:"I am a software developer 🦁 Highly interested in functional programming",siteUrl:"https://vincentcordobes.github.io",social:{twitter:"@VincentCordobes"}}}}}},320:function(t,e,n){},321:function(t,e,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c4f0889480bef339e18e.js.map