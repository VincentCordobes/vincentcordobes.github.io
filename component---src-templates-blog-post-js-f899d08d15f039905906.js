(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return v});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(171),c=n(197),u=n.n(c),s=n(198),m=n.n(s),d=n(153),p=n(203),f=n(204);n(326),n(327),n(328);function g(){return o.a.createElement("header",null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/",rel:"home"},"Home")))))}var h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.pageContext,n=t.previous,a=t.next,r=m()(e,"frontmatter.thumbnail.childImageSharp.sizes.src");return o.a.createElement(d.a,null,o.a.createElement("div",{id:"blog-post"},o.a.createElement(f.a,{title:e.frontmatter.title,description:e.frontmatter.spoiler,image:r,slug:e.fields.slug}),o.a.createElement(u.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css",integrity:"sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y",crossorigin:"anonymous"})),o.a.createElement(g,null),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",null,o.a.createElement("small",null,e.frontmatter.date)),o.a.createElement("div",{id:"blog-post-content",dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement(p.a,null),(n||a)&&o.a.createElement("hr",null),o.a.createElement("ul",{id:"blog-post-footer"},o.a.createElement("li",null,n&&o.a.createElement(l.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.a.createElement("li",null,a&&o.a.createElement(l.Link,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →")))))},t}(o.a.Component);t.default=h;var v="342199498"},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children;return r.a.createElement("div",{id:"layout"},t)}},171:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(154),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(175),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var m=n(34);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},175:function(e,t,n){var a;e.exports=(a=n(196))&&a.default||a},196:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(54),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},203:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(237);t.a=function(){var e=Object(a.useState)(0),t=e[0],n=e[1];return r.a.createElement("div",null,0===t&&r.a.createElement(i.a,{onEnter:function(){return function e(t,n){setTimeout(function(){t(n),n<3&&e(t,n+1)},200)}(n,t)}}),":wq".substring(0,t),r.a.createElement("div",{className:"vim-cursor"}))}},204:function(e,t,n){"use strict";n(32);var a=n(205),r=n(0),i=n.n(r),o=n(197),l=n.n(o),c=n(4),u=n.n(c),s=n(171),m="3236765318";function d(e){var t=e.meta,n=e.image,r=e.title,o=e.description,c=e.slug;return i.a.createElement(s.StaticQuery,{query:m,render:function(e){var a=e.site.siteMetadata,u=o||a.description,s=n?""+a.siteUrl+n:null,m=""+a.siteUrl+c;return i.a.createElement(l.a,Object.assign({htmlAttributes:{lang:"en"}},r?{titleTemplate:"%s - "+a.title,title:r}:{title:a.title},{meta:[{name:"google-site-verification",content:"kjM2mfXvQ9XJ7BqEPTHNHWZ62wJsC5G_GtuPX1oy0EY"},{name:"description",content:u},{property:"og:url",content:m},{property:"og:title",content:r||a.title},{name:"og:description",content:u},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.social.twitter},{name:"twitter:title",content:r||a.title},{name:"twitter:description",content:u}].concat(s?[{property:"og:image",content:s},{name:"twitter:image",content:s}]:[]).concat(t)}))},data:a})}d.defaultProps={meta:[],title:"",slug:""},d.propTypes={description:u.a.string,image:u.a.string,meta:u.a.array,slug:u.a.string,title:u.a.string.isRequired},t.a=d},205:function(e){e.exports={data:{site:{siteMetadata:{title:"Vincent's page",author:"Vincent Cordobes",description:"I am a software developer 🦁 Highly interested in functional programming",siteUrl:"https://vincentcordobes.github.io",social:{twitter:"@VincentCordobes"}}}}}},326:function(e,t,n){},327:function(e,t,n){},328:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f899d08d15f039905906.js.map