(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return v});var a=n(7),r=n.n(a),i=n(0),l=n.n(i),o=n(174),c=n(193),s=n.n(c),u=n(226),m=n.n(u),d=n(159),p=n(220),f=n(221);n(146),n(147),n(148);function g(){return l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.a,{to:"/",rel:"home"},"Home")))))}var E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.pageContext,n=t.previous,a=t.next,r=m()("frontmatter.thumbnail.childImageSharp.sizes.src",e);return l.a.createElement(d.a,null,l.a.createElement("div",{id:"blog-post"},l.a.createElement(f.a,{title:e.frontmatter.title,description:e.frontmatter.spoiler,image:r,slug:e.fields.slug}),l.a.createElement(s.a,null,l.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css",integrity:"sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y",crossorigin:"anonymous"})),l.a.createElement(g,null),l.a.createElement("h1",null,e.frontmatter.title),l.a.createElement("p",null,l.a.createElement("small",{className:"mono"},e.frontmatter.date)),l.a.createElement("div",{id:"blog-post-content",dangerouslySetInnerHTML:{__html:e.html}}),l.a.createElement(p.a,null),(n||a)&&l.a.createElement("hr",null),l.a.createElement("ul",{id:"blog-post-footer"},l.a.createElement("li",null,n&&l.a.createElement(o.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),l.a.createElement("li",null,a&&!m()("frontmatter.draft",a)&&l.a.createElement(o.a,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →")))))},t}(l.a.Component);t.default=E;var v="342199498"},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children;return r.a.createElement("div",{id:"layout"},r.a.createElement("div",{id:"container"},t))}},174:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(32),c=n.n(o);n.d(t,"a",function(){return c.a});n(175);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},175:function(e,t,n){var a;e.exports=(a=n(192))&&a.default||a},192:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(54),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},220:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(269);t.a=function(){var e=Object(a.useState)(0),t=e[0],n=e[1];return r.a.createElement("div",null,0===t&&r.a.createElement(i.a,{onEnter:function(){return function e(t,n){setTimeout(function(){t(n),n<3&&e(t,n+1)},200)}(n,t)}}),":wq".substring(0,t),r.a.createElement("div",{className:"vim-cursor"}))}},221:function(e,t,n){"use strict";n(33);var a=n(222),r=n(0),i=n.n(r),l=n(193),o=n.n(l),c=n(4),s=n.n(c),u=n(174),m="3236765318";function d(e){var t=e.meta,n=e.image,r=e.title,l=e.description,c=e.slug;return i.a.createElement(u.b,{query:m,render:function(e){var a=e.site.siteMetadata,s=l||a.description,u=n?""+a.siteUrl+n:null,m=""+a.siteUrl+c;return i.a.createElement(o.a,Object.assign({htmlAttributes:{lang:"en"}},r?{titleTemplate:"%s | "+a.title,title:r}:{title:a.title},{meta:[{name:"google-site-verification",content:"kjM2mfXvQ9XJ7BqEPTHNHWZ62wJsC5G_GtuPX1oy0EY"},{name:"description",content:s},{property:"og:url",content:m},{property:"og:title",content:r||a.title},{name:"og:description",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.social.twitter},{name:"twitter:title",content:r||a.title},{name:"twitter:description",content:s}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))},data:a})}d.defaultProps={meta:[],title:"",slug:""},d.propTypes={description:s.a.string,image:s.a.string,meta:s.a.array,slug:s.a.string,title:s.a.string.isRequired},t.a=d},222:function(e){e.exports={data:{site:{siteMetadata:{title:"Vincent Cordobes",author:"Vincent Cordobes",description:"Personal blog by Vincent Cordobes. I write mostly about software development",siteUrl:"https://vincentcordobes.github.io",social:{twitter:"@VincentCordobes"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f2497acbcd45248421c7.js.map