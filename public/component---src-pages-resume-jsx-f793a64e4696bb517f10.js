(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o});var n=a(0),i=a.n(n),r=a(230);function o(){return i.a.createElement(r.d,null,i.a.createElement(r.f,{title:"Luis Fco Rodriguez Resume"}),i.a.createElement("h1",null,"This is the resume"),i.a.createElement(r.a,null))}},220:function(e,t,a){"use strict";var n=a(221),i=a(0),r=a.n(i),o=a(223),s=a.n(o);function d(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,d=n.data.site,l=t||d.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(i)})}d.defaultProps={lang:"en",meta:[],description:""},t.a=d},221:function(e){e.exports={data:{site:{siteMetadata:{title:"iamluisro.co",description:"This is Luis Fco Rodriguez Rodriguez's website meant to feature my thoughts, my work, and how I can help you and the world.",author:"@iamluisro"}}}}},224:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},225:function(e,t,a){"use strict";a(17),a(18),a(10),a(105),a(158),a(226);var n=a(21);t.__esModule=!0,t.default=void 0;var i,r=n(a(78)),o=n(a(79)),s=n(a(155)),d=n(a(156)),l=n(a(0)),c=n(a(50)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,n=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map(function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:r}),l.default.createElement("source",{media:i,srcSet:a,sizes:r}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function I(e){return e.map(function(e){var t=e.src,a=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:n})})}function E(e){return e.map(function(e){var t=e.src,a=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:n})})}function S(e,t){var a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+l+o+s+a+n+t+r+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,r=l.default.createElement(C,(0,d.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,n(a),r):r},C=l.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,i=e.src,r=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:n,src:i},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var _=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&b&&!t.critical&&!a.seenBefore;var n=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,S=e.loading,k=e.draggable,_=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,d.default)({opacity:_?1:0,transition:N?"opacity "+b+"ms":"none"},s),A="boolean"==typeof h?"lightgray":h,R={transitionDelay:b+"ms"},L=(0,d.default)({opacity:this.state.imgLoaded?0:1},N&&R,s,f),T={title:t,alt:this.state.isVisible?"":a,style:L,className:m};if(p){var M=p,W=M[0];return l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),A&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:A,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&R)}),W.base64&&l.default.createElement(x,{src:W.base64,spreadProps:T,imageVariants:M,generateSources:E}),W.tracedSVG&&l.default.createElement(x,{src:W.tracedSVG,spreadProps:T,imageVariants:M,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(M),l.default.createElement(C,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:S},W,{imageVariants:M}))}}))}if(g){var O=g,j=O[0],V=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},r);return"inherit"===r.display&&delete V.display,l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},A&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:A,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},N&&R)}),j.base64&&l.default.createElement(x,{src:j.base64,spreadProps:T,imageVariants:O,generateSources:E}),j.tracedSVG&&l.default.createElement(x,{src:j.tracedSVG,spreadProps:T,imageVariants:O,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(O),l.default.createElement(C,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:S},j,{imageVariants:O}))}}))}return null},t}(l.default.Component);_.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),P=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});_.propTypes={resolutions:N,sizes:P,fixed:c.default.oneOfType([N,c.default.arrayOf(N)]),fluid:c.default.oneOfType([P,c.default.arrayOf(P)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var A=_;t.default=A},226:function(e,t,a){"use strict";a(227)("fixed",function(e){return function(){return e(this,"tt","","")}})},227:function(e,t,a){var n=a(1),i=a(8),r=a(41),o=/"/g,s=function(e,t,a,n){var i=String(r(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},228:function(e){e.exports={data:{site:{siteMetadata:{title:"iamluisro.co",author:"@iamluisro"}},allContentfulBlogPost:{edges:[{node:{title:"Why I decided to start coding",id:"5b4af902-ebf2-54e4-bdef-2e2511ebec8e",slug:"why-i-decided-to-start-coding",tags:["general"],publishDate:"2019-07-30T00:00-05:00",heroImage:{fluid:{src:"//images.ctfassets.net/n4tz31ybush2/1HPYvN0IRN36gVyMFZkcLU/9a5a36fd94df19d59ff7cffbef1c667b/steve-halama-Yhc7YGZlz3g-unsplash.jpg?w=800&q=50"}},description:{childMarkdownRemark:{html:"<p>Why I dediced to start coding... I had the job I wanted. I had to convince some folks I was the best person to be the new Product Manager at my company. But 9 months in, something just felt broken for me. But why exactly did I do this? </p>"}}}},{node:{title:"¡Canta y no llores, mis Chivas!",id:"99434c65-a39e-5ac3-84b5-ba9083c67215",slug:"chivas-post1",tags:["football","chivas fc"],publishDate:"2019-07-22T00:00-05:00",heroImage:{fluid:{src:"//images.ctfassets.net/n4tz31ybush2/tyrPfPgg2e2hC2jz53WuH/1e73b0535fd615df34abfd25e148a4f3/0_yztEhMcy2zxP0xwi?w=800&q=50"}},description:{childMarkdownRemark:{html:"<p>¡Comenzó una nueva temporada del fútbol mexicano! La temporada 2019–2020 comenzó y las Chivas de Guadalajara, mi equipo favorita de la Liga BBVA comienza lo que parece será otra temporada triste y dura como fan.</p>"}}}},{node:{title:"Static sites are great",id:"977bbcc5-6d12-5964-9d85-b4abf37b57d9",slug:"static-sites-are-great",tags:["javascript","static-sites"],publishDate:"2017-05-16T00:00+02:00",heroImage:{fluid:{src:"//images.ctfassets.net/n4tz31ybush2/4NzwDSDlGECGIiokKomsyI/0dfbc7089545ce06dbc5edcdbb7141be/denys-nevozhai-100695.jpg?w=800&q=50"}},description:{childMarkdownRemark:{html:"<p>Worry less about security, caching, and talking to the server. Static sites are the new thing.</p>"}}}}]}}}},229:function(e){e.exports={data:{site:{siteMetadata:{title:"iamluisro.co",author:"@iamluisro"}},allContentfulPastWork:{edges:[{node:{title:"Personal Website Powered by Gatsby + Contentful + React",id:"73e37d8b-ac31-5d73-a4a4-a82593ffe797",slug:"personal-website-gatsby-contentful-react",tags:["general","technical-projects"],publishDate:"2019-07-31T04:30-05:00",heroImage:{fluid:{src:"//images.ctfassets.net/n4tz31ybush2/6Amc2xW3uF7uXUE3ctZuGa/aeb9a00e78ff68399c94c91bb4b6835f/iamluisro_purple_nobg.png?w=800&q=50"}},description:{childMarkdownRemark:{html:"<p>This is my personal website I built with the help of Gatsby, React, Contentful and Netlify. This is my first technical project. </p>"}}}},{node:{title:"Organizer of Startup Weekend in Mexico City",id:"77825553-e8d3-5d00-8f1d-685ec89d40d4",slug:"startup-weekend-organizer",tags:["other-projects"],publishDate:"2019-07-31T04:00-05:00",heroImage:{fluid:{src:"//images.ctfassets.net/n4tz31ybush2/7fEvykIKl4evKaVx16NAta/c1fd8cf740cb30dc8d33f59a2a973bbb/14379665_1215074861890143_4608694144458218584_o.jpg?w=800&q=50"}},description:{childMarkdownRemark:{html:"<p>I was a Startup Weekend organizer from 2015-2018. Although I've yet to organize an event in 2019, I will always consider myself a Startup Weekend Organizer. Check out the events I've helped organize. </p>"}}}}]}}}},230:function(e,t,a){"use strict";a(107);var n=a(220),i=(a(224),a(0)),r=a.n(i),o=(a(225),a(151)),s=a(228),d=a(103),l=a(19),c=a(222),u=a.n(c),f=function(e){var t=e.children;return console.log(t),!1},m=l.d.div.withConfig({displayName:"ThinkAbout__ThinkContainer",componentId:"p34syz-0"})(["display:grid;margin:1.25em;grid-template-columns:1fr;"]),p=l.d.div.withConfig({displayName:"ThinkAbout__StyledPostDiv",componentId:"p34syz-1"})(["margin:0.67em 0 0.67em 0;padding:0em 0 0.67em 0;box-shadow:0 1px 7px rgba(0,0,0,0.5);border-radius:4px;border:0;"]),g=l.d.div.withConfig({displayName:"ThinkAbout__StyledDescriptionPostDiv",componentId:"p34syz-2"})(["padding:1.25em;"]),h=l.d.img.withConfig({displayName:"ThinkAbout__AboutImg",componentId:"p34syz-3"})(["border-radius:4px 4px 0 0;align-items:center;width:100%;"]),b=Object(l.d)(function(e){return r.a.createElement(d.a,e)}).withConfig({displayName:"ThinkAbout__StyledHeaderLink",componentId:"p34syz-4"})(["margin:0 0 0 0;text-align:center;font-size:2em;text-decoration:none;"]),y=l.d.p.withConfig({displayName:"ThinkAbout__StyledDescription",componentId:"p34syz-5"})(["margin:1em 0 0 0;align-items:center;font-size:1em;color:rgba(0,0,0,0.44);"]),w=Object(l.d)(function(e){return r.a.createElement(d.a,e)}).withConfig({displayName:"ThinkAbout__StyledPostLink",componentId:"p34syz-6"})(["text-decoration:none;margin:0 0 0.67em 0;"]),v=l.d.p.withConfig({displayName:"ThinkAbout__PostinLink",componentId:"p34syz-7"})(["margin:0 0 0 0;font-size:1.5em;font-weight:700;color:black;"]),I=l.d.button.withConfig({displayName:"ThinkAbout__MoreButton",componentId:"p34syz-8"})(["display:grid;cursor:default;margin:auto;background-color:#684a83;color:white;width:43%;font-size:0.9rem;padding:0.6rem;font-weight:500;border-radius:24px;box-shadow:0 1px 1px rgba(0,0,0,0.5);"]),E=l.d.p.withConfig({displayName:"ThinkAbout__StyledPublishedDate",componentId:"p34syz-9"})(["font-size:0.67em;margin:0.67em 0 0 0;"]),S=l.d.button.withConfig({displayName:"ThinkAbout__ReadPostButton",componentId:"p34syz-10"})(["cursor:default;background-color:#684a83;margin:0.67em 0 0 0;color:white;width:33%;font-size:0.9rem;padding:0.6rem;border-radius:24px;box-shadow:0 1px 1px rgba(0,0,0,0.5);"]),k=function(e){var t=s.data;return r.a.createElement(m,null,r.a.createElement(b,{to:"/thinkAbout"},"This is what I think about"),t.allContentfulBlogPost.edges.map(function(e){var t=e.node;return r.a.createElement(p,{key:t.id},r.a.createElement(w,{to:"/"+t.slug},r.a.createElement(h,{src:t.heroImage.fluid.src,alt:t.heroImage.fluid.src}),r.a.createElement(g,null,r.a.createElement(v,null," ",t.title),r.a.createElement(y,{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}),r.a.createElement(E,null," ","Published: ",u()(t.publishDate).format("MMM DD, YYYY")),r.a.createElement(S,null,"Read"))))}),r.a.createElement(d.a,{to:"/thinkAbout",style:{textDecoration:"none"}},r.a.createElement(I,null,"More Thoughts")),r.a.createElement(f,null))},z=l.d.div.withConfig({displayName:"Intro__IntroContainer",componentId:"dz0jgw-0"})(["display:grid;padding:2em 1em 2em 1em;background-color:#684a83;"]),x=l.d.div.withConfig({displayName:"Intro__IntroHead",componentId:"dz0jgw-1"})(["color:#ffff;font-size:2em;margin:0 0 0.67em 0;text-align:center;"]),C=l.d.p.withConfig({displayName:"Intro__IntroTxt",componentId:"dz0jgw-2"})(["margin:0 0 0 0;color:#ffff;font-size:1.5em;text-align:justify;"]);function _(){return r.a.createElement("div",{className:"Intro"},r.a.createElement(z,null,r.a.createElement(x,null,"Thanks for being here!"),r.a.createElement(C,null,"My goal is to solve a customer's needs and provide the best customer experience to ensure company growth, employee satisfaction and customer delight.")))}var N=a(229),P=l.d.div.withConfig({displayName:"PastWork__PastWorkContainer",componentId:"sc-1feen64-0"})(["display:grid;margin:1.25em;grid-template-columns:1fr;"]),A=l.d.div.withConfig({displayName:"PastWork__StyledPostDiv",componentId:"sc-1feen64-1"})(["margin:0.67em 0 0.67em 0;padding:0em 0 0.67em 0;box-shadow:0 1px 7px rgba(0,0,0,0.5);border-radius:4px;border:0;"]),R=l.d.div.withConfig({displayName:"PastWork__StyledDescriptionPostDiv",componentId:"sc-1feen64-2"})(["padding:1.25em;"]),L=l.d.img.withConfig({displayName:"PastWork__AboutImg",componentId:"sc-1feen64-3"})(["border-radius:4px 4px 0 0;align-items:center;width:100%;"]),T=Object(l.d)(function(e){return r.a.createElement(d.a,e)}).withConfig({displayName:"PastWork__StyledHeaderLink",componentId:"sc-1feen64-4"})(["margin:0 0 0 0;text-align:center;font-size:2em;text-decoration:none;"]),M=l.d.p.withConfig({displayName:"PastWork__StyledDescription",componentId:"sc-1feen64-5"})(["margin:1em 0 0 0;align-items:center;font-size:1em;color:rgba(0,0,0,0.44);"]),W=Object(l.d)(function(e){return r.a.createElement(d.a,e)}).withConfig({displayName:"PastWork__StyledPostLink",componentId:"sc-1feen64-6"})(["text-decoration:none;margin:0 0 0.67em 0;"]),O=l.d.p.withConfig({displayName:"PastWork__PostinLink",componentId:"sc-1feen64-7"})(["margin:0 0 0 0;font-size:1.5em;font-weight:700;color:black;"]),j=l.d.button.withConfig({displayName:"PastWork__MoreButton",componentId:"sc-1feen64-8"})(["display:grid;cursor:default;margin:auto;background-color:#684a83;color:white;width:30%;font-size:0.9rem;padding:0.6rem;font-weight:500;border-radius:24px;box-shadow:0 1px 1px rgba(0,0,0,0.5);"]),V=l.d.p.withConfig({displayName:"PastWork__StyledPublishedDate",componentId:"sc-1feen64-9"})(["font-size:0.67em;margin:0.67em 0 0 0;"]),D=l.d.button.withConfig({displayName:"PastWork__ReadPostButton",componentId:"sc-1feen64-10"})(["cursor:default;background-color:#684a83;margin:0.67em 0 0 0;color:white;width:33%;font-size:0.9rem;padding:0.6rem;border-radius:24px;box-shadow:0 1px 1px rgba(0,0,0,0.5);"]);function q(e){e.props;var t=N.data;return r.a.createElement(P,null,r.a.createElement(T,{to:"/pastWork"},"This is what I've done"),t.allContentfulPastWork.edges.map(function(e){var t=e.node;return r.a.createElement(A,{key:t.id},r.a.createElement(W,{to:"/"+t.slug},r.a.createElement(L,{src:t.heroImage.fluid.src,alt:t.heroImage.fluid.src}),r.a.createElement(R,null,r.a.createElement(O,null," ",t.title),r.a.createElement(M,{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}),r.a.createElement(V,null," ",u()(t.publishDate).format("MMM DD, YYYY")),r.a.createElement(D,null,"Read"))))}),r.a.createElement(d.a,{to:"/pastWork",style:{textDecoration:"none"}},r.a.createElement(j,null,"More Projects")))}var H=l.d.div.withConfig({displayName:"Forms__FormContainer",componentId:"sc-9v9bk7-0"})(["margin:0;"]),B=l.d.form.withConfig({displayName:"Forms__StyledForm",componentId:"sc-9v9bk7-1"})(["display:grid;margin:0;"]),Y=l.d.input.withConfig({displayName:"Forms__StyledFormInput",componentId:"sc-9v9bk7-2"})(["margin:1.5em;"]);function G(){return r.a.createElement(H,null,r.a.createElement(B,{method:"post",action:"#","data-netlify":"true",name:"contact"},r.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),r.a.createElement(Y,{type:"text",name:"name",id:"name",placeholder:"your name",required:!0}),r.a.createElement(Y,{type:"text",name:"email",id:"email",placeholder:"your email",required:!0}),r.a.createElement("textarea",{name:"message",id:"message",placeholder:"your message",rows:"4",required:!0}),r.a.createElement(Y,{type:"submit",value:"Send Message"})))}var F=l.d.div.withConfig({displayName:"HowiHelp__StyledDiv",componentId:"sc-1dq4s9m-0"})(["margin:0.67em 0 0em 0;"]),J=l.d.p.withConfig({displayName:"HowiHelp__StyledHeader",componentId:"sc-1dq4s9m-1"})(["font-size:2em;text-align:center;margin:0 0 0.3em 0;"]);function U(){return r.a.createElement(F,null,r.a.createElement(J,null,"How Can I help? "),r.a.createElement(G,null))}function K(){return r.a.createElement("div",{className:"Experience"},r.a.createElement("div",{className:"Experience-container"},"Experience"))}a.d(t,"f",function(){return n.a}),a.d(t,"d",function(){return o.default}),a.d(t,"g",function(){return k}),a.d(t,"c",function(){return _}),a.d(t,"e",function(){return q}),a.d(t,"b",function(){return U}),a.d(t,"a",function(){return K})}}]);
//# sourceMappingURL=component---src-pages-resume-jsx-f793a64e4696bb517f10.js.map