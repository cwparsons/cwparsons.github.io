/*! For license information please see component---src-pages-index-js-c61864e71237539f0e57.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,r){"use strict";var a,n=r("q1tI"),i=(a=n)&&"object"==typeof a&&"default"in a?a.default:a;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function u(){s=e(c.map((function(e){return e.props}))),d.canUseDOM?t(s):r&&(s=r(s))}var d=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.peek=function(){return s},n.rewind=function(){if(n.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e};var o=n.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},o.render=function(){return i.createElement(a,this.props)},n}(n.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),o(d,"canUseDOM",l),d}}},"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),l=a(r("8OQS")),s=a(r("pVnL")),c=a(r("q1tI")),u=a(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,r=e.fixed,a=p(t||r||[]);return a&&a.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),r=m(t);return h[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),r&&c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function T(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function C(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var A=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+c+o+l+r+a+t+i+n+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=c.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(I,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return a.length>1?c.default.createElement("picture",null,n(a),l):l})),I=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:r,srcSet:a,src:n},p,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=m(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,C=e.draggable,A=h||g;if(!A)return null;var P=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,s.default)({opacity:P?1:0,transition:x?"opacity "+y+"ms":"none"},l),j="boolean"==typeof b?"lightgray":b,R={transitionDelay:y+"ms"},z=(0,s.default)({opacity:this.state.imgLoaded?0:1},x&&R,l,f),M={title:t,alt:this.state.isVisible?"":r,style:z,className:m,itemProp:w},B=this.state.isHydrated?p(A):A[0];if(h)return c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:B.maxWidth?B.maxWidth+"px":null,maxHeight:B.maxHeight?B.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),j&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&R)}),B.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:B.base64,spreadProps:M,imageVariants:A,generateSources:O}),B.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:B.tracedSVG,spreadProps:M,imageVariants:A,generateSources:T}),this.state.isVisible&&c.default.createElement("picture",null,E(A),c.default.createElement(I,{alt:r,title:t,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,s.default)({alt:r,title:t,loading:S},B,{imageVariants:A}))}}));if(g){var F=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},i);return"inherit"===i.display&&delete F.display,c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},j&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:j,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},x&&R)}),B.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:B.base64,spreadProps:M,imageVariants:A,generateSources:O}),B.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:B.tracedSVG,spreadProps:M,imageVariants:A,generateSources:T}),this.state.isVisible&&c.default.createElement("picture",null,E(A),c.default.createElement(I,{alt:r,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,s.default)({alt:r,title:t,loading:S},B,{imageVariants:A}))}}))}return null},t}(c.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),k=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function j(e){return function(t,r,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[r]=e,n),t,"prop",a)}}P.propTypes={resolutions:x,sizes:k,fixed:j(u.default.oneOfType([x,u.default.arrayOf(x)])),fluid:j(u.default.oneOfType([k,u.default.arrayOf(k)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var R=P;t.default=R},FFHO:function(e,t,r){e.exports={container:"main-module--container--1lrTs",portrait:"main-module--portrait--c9eSQ",narrative:"main-module--narrative--1muMv"}},KZbO:function(e,t,r){e.exports={diploma:"diploma-module--diploma--T1tWy",name:"diploma-module--name--1zUyK",link:"diploma-module--link--2hyeH",coatofarms:"diploma-module--coatofarms--cv7Iy",school:"diploma-module--school--1gcbC",narrative:"diploma-module--narrative--1W01s",degree:"diploma-module--degree--1AICW",date:"diploma-module--date--fqjy1",seal:"diploma-module--seal--2oXDE"}},RXBc:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),i=r("Wbzz"),o=r("9eSz"),l=r.n(o),s=r("FFHO"),c=r.n(s),u=function(){var e=Object(i.c)("4181155024").image;return n.a.createElement(n.a.Fragment,null,n.a.createElement("picture",{className:c.a.portrait},n.a.createElement(l.a,{fixed:e.childImageSharp.fixed})),n.a.createElement("h1",{className:c.a.narrative},"Hi. I’m ",n.a.createElement("b",null,"Christopher Parsons"),",",n.a.createElement("br",null),"a front-end developer living in Toronto, Canada."))},d=r("TSYQ"),f=r.n(d),m=r("zhBr"),p=r.n(m),h=function(){return n.a.createElement("div",{className:p.a.wrapper},n.a.createElement("div",{className:f()(p.a.card,p.a.back),itemScope:!0,itemType:"http://schema.org/Person"},n.a.createElement("div",{className:p.a.container},n.a.createElement("a",{className:f()(p.a.name,p.a["p-name"],p.a["u-url"]),href:"https://www.habaneroconsulting.com/team/christopher-parsons",itemProp:"name"},"Christopher ",n.a.createElement("b",null,"Parsons")),n.a.createElement("div",{className:p.a.title,itemProp:"jobTitle"},"Front-End Architect"),n.a.createElement("div",{className:p.a.contact},n.a.createElement("a",{className:f()(p.a.link,p.a.phone),href:"tel:14162605959,196",itemProp:"telephone"},"416.260.5959 x196"),n.a.createElement("a",{className:f()(p.a.link,p.a.phone),href:"tel:18668416201,196",itemProp:"telephone"},"866.841.6201"," ",n.a.createElement("span",{className:p.a.phoneType},"Toll-Free")),n.a.createElement("a",{className:f()(p.a.link,p.a.email),href:"mailto:cparsons@habaneroconsulting.com",itemProp:"email"},"cparsons@habaneroconsulting.com"),n.a.createElement("a",{className:f()(p.a.link,p.a.url),href:"https://www.habaneroconsulting.com",itemProp:"url"},"habaneroconsulting.com")))),n.a.createElement("div",{className:f()(p.a.card,p.a.front)},n.a.createElement("div",{className:p.a.container},n.a.createElement("a",{className:p.a.organization,href:"https://www.habaneroconsulting.com",title:"Habanero",itemProp:"organization"},"Habanero"),n.a.createElement("address",{className:p.a.address,itemProp:"address"},n.a.createElement("span",{itemProp:"streetAddress"},"705 - 119 Spadina Avenue"),", ",n.a.createElement("span",{itemProp:"addressLocality"},"Toronto"),", ",n.a.createElement("span",{itemProp:"addressRegion"},"Ontario")," ",n.a.createElement("span",{itemProp:"postalCode"},"M5V 2L1")))))},g=r("KZbO"),b=r.n(g),y=function(){var e=Object(i.c)("2078930851").image;return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:c.a.narrative},"I received my ",n.a.createElement("abbr",{title:"Bachelor of Science"},"B.Sc.")," in Computing Science",n.a.createElement("br",null)," from Simon Fraser University."),n.a.createElement("div",{className:b.a.diploma},n.a.createElement("a",{className:b.a.link,href:"http://www.sfu.ca"},n.a.createElement(l.a,{fixed:e.childImageSharp.fixed}),n.a.createElement("div",{className:b.a.school},"Simon Fraser University")),n.a.createElement("div",{className:b.a.narrative},"The chancellor and senate of Simon Fraser University",n.a.createElement("br",null),"on the recommendation of",n.a.createElement("br",null),"the Faculty of Applied Sciences",n.a.createElement("br",null),"have awarded"),n.a.createElement("div",{className:b.a.name},"Christopher Whitelaw Parsons"),n.a.createElement("div",{className:b.a.narrative},"The degree of"),n.a.createElement("div",{className:b.a.degree},"Bachelor of Science"),n.a.createElement("div",{className:b.a.narrative},"In testimony whereof we have sealed and subscribed",n.a.createElement("br",null),"this diploma by our hand."),n.a.createElement("div",{className:b.a.date},"September 2012"),n.a.createElement("div",{className:b.a.seal},"Seal of Simon Fraser University")))},v=function(e){var t=e.alt,r=e.imgName;return n.a.createElement(i.a,{query:"1054392641",render:function(e){var a=e.allImageSharp.edges.find((function(e){return e.node.fluid.originalName===r}));return a?n.a.createElement(l.a,{alt:t,fluid:a.node.fluid}):null}})},w=r("ViYK"),E=r("ci+7"),S=r.n(E),T=function(e){return n.a.createElement("li",{className:S.a.item,key:e.img+"-key"},n.a.createElement("a",{className:S.a.link,href:e.url,rel:"nofollow"},n.a.createElement("div",{className:S.a.frame},n.a.createElement(v,{alt:e.alt,imgName:e.img})),n.a.createElement("span",{className:S.a.title},e.name),n.a.createElement("span",{className:S.a.desc,dangerouslySetInnerHTML:{__html:e.desc}})))},O=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:c.a.narrative},"I’ve worked on some fun projects:"),n.a.createElement("div",{className:S.a.portfolio},n.a.createElement("ul",{className:S.a.list},w&&w.items&&w.items.map(T))))},C=r("Z2AO"),A=r.n(C),N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:c.a.narrative},"I can be found around the web:"),n.a.createElement("ul",{className:A.a.list},n.a.createElement("li",{className:A.a.item},n.a.createElement("a",{className:A.a.icon,href:"https://github.com/cwparsons"},"GitHub")),n.a.createElement("li",{className:A.a.item},n.a.createElement("a",{className:A.a.icon,href:"https://www.linkedin.com/in/cwlparsons"},"LinkedIn")),n.a.createElement("li",{className:A.a.item},n.a.createElement("a",{className:A.a.icon,href:"http://www.last.fm/user/Whtlw"},"last.fm"))))},L=r("qhky"),I=function(e){var t=e.description,r=e.lang,a=e.meta,o=e.keywords,l=(e.title,Object(i.c)("63159454").site),s=t||l.siteMetadata.description;return n.a.createElement(L.a,{htmlAttributes:{lang:r},title:l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l.siteMetadata.title},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:l.siteMetadata.title},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)})};I.defaultProps={lang:"en",meta:[],keywords:[],description:""};var P=I;t.default=function(e){e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(P,null),n.a.createElement("main",{className:c.a.container,role:"main"},n.a.createElement("div",{className:"h-card"},n.a.createElement(u,null),n.a.createElement("section",null,n.a.createElement(h,null)),n.a.createElement("section",null,n.a.createElement(O,null)),n.a.createElement("section",null,n.a.createElement(y,null)),n.a.createElement("section",null,n.a.createElement(N,null)))))}},TSYQ:function(e,t,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=n.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)r.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},ViYK:function(e){e.exports=JSON.parse('{"items":[{"name":"Open source image resizer","url":"https://github.com/habaneroconsulting/image-resizer","img":"imageresizer.png","desc":"Front-end architect.<br> Built with React."},{"name":"GO Intranet Accelerator","url":"https://www.habaneroconsulting.com/stories/insights/2020/recorded-webinar-its-time-to-modernize-your-intranet?theme=go","img":"gointranetaccelerator.png","desc":"Front-end architect.<br> Built with <abbr title=\\"SharePoint Framework\\">SPFx</abbr> for modern SharePoint."},{"name":"Toronto Pearosn","url":"https://www.torontopearson.com","img":"torontopearson.png","desc":"Front-end architect.<br> Built with Sitecore."},{"name":"Petro-Canada.ca","url":"https://www.petro-canada.ca","img":"petrocanadaca.png","desc":"Front-end architect.<br> Built with Sitecore."},{"name":"Connect with GO","url":"https://www.connectwithgo.com","img":"connectwithgo.png","desc":"Front-end architect.<br> Built with Sitecore."},{"name":"YVR.ca","url":"http://www.yvr.ca","img":"yvrca.png","desc":"ACI-NA\'s 2016 Best Airport Website.<br> Lead front-end developer. Built with Sitecore."},{"name":"Goldcorp\'s Conveyor","url":"https://www.habaneroconsulting.com/stories/success-stories/improving-alignment-and-productivity--with-a-new-digital-workplace-at-goldcorp","img":"conveyorgoldcorpcom.png","desc":"Nielsen Norman Group\'s 10 Best Intranets of 2017.<br> Lead front-end developer. Built with SharePoint."},{"name":"HabaneroConsulting.com","url":"https://www.habaneroconsulting.com","img":"habaneroconsultingcom.png","desc":"Lead developer.<br> Built with Sitecore."},{"name":"CAPP\'s Context Magazine","url":"http://context.capp.ca","img":"contextcappca.png","desc":"Best Association Website at <abbr title=\\"Canadian Online Publishing Awards\\">COPA</abbr> 2017.<br> Lead front-end developer. Built with Sitecore."},{"name":"FreeholdBrewing.ca","url":"https://www.freeholdbrewing.ca","img":"freeholdbrewingca.png","desc":"Lead developer.<br> Built with Craft CMS."},{"name":"ENMAX.ca","url":"https://www.habaneroconsulting.com/stories/success-stories/enmax-is-powering-a-better-customer-experience-with-sharepoint-2013","img":"enmax.png","desc":"Front-end developer.<br> Built with SharePoint."},{"name":"ICBC’s Practice Knowledge Test","url":"http://practicetest.icbc.com","img":"practicetesticbccom.png","desc":"Lead developer.<br> Built with AngularJS."}]}')},Z2AO:function(e,t,r){e.exports={list:"socialmedia-module--list--2AIJ3",item:"socialmedia-module--item--3a4lL",icon:"socialmedia-module--icon--2TSAE"}},ZhWT:function(e,t){var r="undefined"!=typeof Element,a="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var l,s,c,u;if(Array.isArray(t)){if((l=t.length)!=o.length)return!1;for(s=l;0!=s--;)if(!e(t[s],o[s]))return!1;return!0}if(a&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],o.get(s.value[0])))return!1;return!0}if(n&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((l=t.length)!=o.length)return!1;for(s=l;0!=s--;)if(t[s]!==o[s])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((l=(c=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(s=l;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,c[s]))return!1;if(r&&t instanceof Element)return!1;for(s=l;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!t.$$typeof)&&!e(t[c[s]],o[c[s]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},"ci+7":function(e,t,r){e.exports={portfolio:"portfolio-module--portfolio--1qRB4",list:"portfolio-module--list--2mqnz",item:"portfolio-module--item--2V8CT",link:"portfolio-module--link--GIsTS",frame:"portfolio-module--frame--2Wnca",ltIe9:"portfolio-module--lt-ie9--1a_Qf",image:"portfolio-module--image--1kIQm",noJs:"portfolio-module--no-js--3_xah",title:"portfolio-module--title--1tUWV",desc:"portfolio-module--desc--3_LvE"}},qhky:function(e,t,r){"use strict";(function(e){var a,n,i,o,l=r("17x9"),s=r.n(l),c=r("8+s/"),u=r.n(c),d=r("ZhWT"),f=r.n(d),m=r("q1tI"),p=r.n(m),h=r("YVoz"),g=r.n(h),b="bodyAttributes",y="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(w).map((function(e){return w[e]})),"charset"),S="cssText",T="href",O="http-equiv",C="innerHTML",A="itemprop",N="name",L="property",I="rel",P="src",x="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",R="defer",z="encodeSpecialCharacters",M="onChangeClientState",B="titleTemplate",F=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),H=[w.NOSCRIPT,w.SCRIPT,w.STYLE],V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},U=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},D=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=X(e,w.TITLE),r=X(e,B);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var a=X(e,j);return t||a||void 0},K=function(e){return X(e,M)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var a=Object.keys(r),n=0;n<a.length;n++){var i=a[n].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Z=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+V(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],s=l.toLowerCase();-1===t.indexOf(s)||r===I&&"canonical"===e[r].toLowerCase()||s===I&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(l)||l!==C&&l!==S&&l!==A||(r=l)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][c]&&(n[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),o=0;o<i.length;o++){var l=i[o],s=g()({},a[l],n[l]);a[l]=s}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var a=e[r];if(a.hasOwnProperty(t))return a[t]}return null},$=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,ie=function(e,t){var r=e.baseTag,a=e.bodyAttributes,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;se(w.BODY,a),se(w.HTML,n),le(d,f);var m={baseTag:ce(w.BASE,r),linkTags:ce(w.LINK,i),metaTags:ce(w.META,o),noscriptTags:ce(w.NOSCRIPT,l),scriptTags:ce(w.SCRIPT,c),styleTags:ce(w.STYLE,u)},p={},h={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,a=t.oldTags;r.length&&(p[e]=r),a.length&&(h[e]=m[e].oldTags)})),t&&t(),s(e,p,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(w.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var a=r.getAttribute("data-react-helmet"),n=a?a.split(","):[],i=[].concat(n),o=Object.keys(t),l=0;l<o.length;l++){var s=o[l],c=t[s]||"";r.getAttribute(s)!==c&&r.setAttribute(s,c),-1===n.indexOf(s)&&n.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);n.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(w.HEAD),a=r.querySelectorAll(e+"[data-react-helmet]"),n=Array.prototype.slice.call(a),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===C)r.innerHTML=t.innerHTML;else if(a===S)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[a]?"":t[a];r.setAttribute(a,l)}r.setAttribute("data-react-helmet","true"),n.some((function(e,t){return o=t,r.isEqualNode(e)}))?n.splice(o,1):i.push(r)})),n.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:n,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var a=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+a:a}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[k[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(a={key:e})["data-react-helmet"]=!0,n=de(r,a),[p.a.createElement(w.TITLE,n,e)];var e,r,a,n},toString:function(){return function(e,t,r,a){var n=ue(r),i=oe(t);return n?"<"+e+' data-react-helmet="true" '+n+">"+D(i,a)+"</"+e+">":"<"+e+' data-react-helmet="true">'+D(i,a)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var a,n=((a={key:r})["data-react-helmet"]=!0,a);return Object.keys(t).forEach((function(e){var r=k[e]||e;if(r===C||r===S){var a=t.innerHTML||t.cssText;n.dangerouslySetInnerHTML={__html:a}}else n[r]=t[e]})),p.a.createElement(e,n)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,a){var n=Object.keys(a).filter((function(e){return!(e===C||e===S)})).reduce((function(e,t){var n=void 0===a[t]?t:t+'="'+D(a[t],r)+'"';return e?e+" "+n:n}),""),i=a.innerHTML||a.cssText||"",o=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+n+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},me=function(e){var t=e.baseTag,r=e.bodyAttributes,a=e.encode,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,s=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(w.BASE,t,a),bodyAttributes:fe(b,r,a),htmlAttributes:fe(y,n,a),link:fe(w.LINK,i,a),meta:fe(w.META,o,a),noscript:fe(w.NOSCRIPT,l,a),script:fe(w.SCRIPT,s,a),style:fe(w.STYLE,c,a),title:fe(w.TITLE,{title:d,titleAttributes:f},a)}},pe=u()((function(e){return{baseTag:Q([T,x],e),bodyAttributes:J(b,e),defer:X(e,R),encode:X(e,z),htmlAttributes:J(y,e),linkTags:Z(w.LINK,[I,T],e),metaTags:Z(w.META,[N,E,O,L,A],e),noscriptTags:Z(w.NOSCRIPT,[C],e),onChangeClientState:K(e),scriptTags:Z(w.SCRIPT,[P,C],e),styleTags:Z(w.STYLE,[S],e),title:G(e),titleAttributes:J(v,e)}}),(function(e){ne&&re(ne),e.defer?ne=te((function(){ie(e,(function(){ne=null}))})):(ie(e),ne=null)}),me)((function(){return null})),he=(n=pe,o=i=function(e){function t(){return q(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,n=e.newChildProps,i=e.nestedChildren;return W({},a,((t={})[r.type]=[].concat(a[r.type]||[],[W({},n,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,n=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(a.type){case w.TITLE:return W({},n,((t={})[a.type]=o,t.titleAttributes=W({},i),t));case w.BODY:return W({},n,{bodyAttributes:W({},i)});case w.HTML:return W({},n,{htmlAttributes:W({},i)})}return W({},n,((r={})[a.type]=W({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=W({},t);return Object.keys(e).forEach((function(t){var a;r=W({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,a={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[F[r]||r]=e[r],t}),t)}(U(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:a=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),a=W({},r);return t&&(a=this.mapChildrenToProps(t,a)),p.a.createElement(n,a)},_(t,null,[{key:"canUseDOM",set:function(e){n.canUseDOM=e}}]),t}(p.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=n.peek,i.rewind=function(){var e=n.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind,t.a=he}).call(this,r("yLpj"))},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(a){"object"==typeof window&&(r=window)}e.exports=r},zhBr:function(e,t,r){e.exports={card:"card-module--card--33J3s",wrapper:"card-module--wrapper--3n2Lp",ltIe9:"card-module--lt-ie9--2fF_p",back:"card-module--back--24o97",container:"card-module--container--gdzEv",front:"card-module--front--2Q-0i",link:"card-module--link--nfqLz",name:"card-module--name--3GaX_",contact:"card-module--contact--2BgoR",phone:"card-module--phone--3cFLR",phoneType:"card-module--phone-type--1COmU",email:"card-module--email--o9UXB",organization:"card-module--organization--3pUOL",address:"card-module--address--1YrYB"}}}]);
//# sourceMappingURL=component---src-pages-index-js-c61864e71237539f0e57.js.map