(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1752:function(e,t,r){e.exports=r(6949)},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},7404:function(e,t,r){"use strict";var n=r(5893),o=r(9008),a=r.n(o);t.Z=function(e){var t=e.title,r=e.description;return(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{property:"description",content:r}),(0,n.jsx)("meta",{property:"og:title",content:t}),(0,n.jsx)("meta",{property:"og:description",content:r}),(0,n.jsx)("meta",{property:"og:image",content:"https://avatars.githubusercontent.com/u/739402?v=4?s=400"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,n.jsx)("link",{rel:"icon",href:"".concat("/creative-coding/","/favicon.ico")})]})}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(u){i=!0,o=u}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,c=(a=r(7294))&&a.__esModule?a:{default:a},i=r(1003),u=r(880),l=r(9246);function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s={};function d(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var p=c.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,a=void 0===n?!0!==Boolean(!1):n,p=e.href,v=e.as,y=e.children,h=e.prefetch,m=e.passHref,b=e.replace,g=e.shallow,j=e.scroll,x=e.locale,w=e.onClick,E=e.onMouseEnter,O=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=y,a&&"string"===typeof r&&(r=c.default.createElement("a",null,r));var k,_=!1!==h,C=u.useRouter(),M=c.default.useMemo((function(){var e=o(i.resolveHref(C,p,!0),2),t=e[0],r=e[1];return{href:t,as:v?i.resolveHref(C,v):r||t}}),[C,p,v]),I=M.href,S=M.as,A=c.default.useRef(I),L=c.default.useRef(S);a&&(k=c.default.Children.only(r));var N=a?k&&"object"===typeof k&&k.ref:t,R=o(l.useIntersection({rootMargin:"200px"}),3),P=R[0],U=R[1],T=R[2],H=c.default.useCallback((function(e){L.current===S&&A.current===I||(T(),L.current=S,A.current=I),P(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[S,N,I,T,P]);c.default.useEffect((function(){var e=U&&_&&i.isLocalURL(I),t="undefined"!==typeof x?x:C&&C.locale,r=s[I+"%"+S+(t?"%"+t:"")];e&&!r&&d(C,I,S,{locale:t})}),[S,I,U,x,_,C]);var K={ref:H,onClick:function(e){a||"function"!==typeof w||w(e),a&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:c}))}(e,C,I,S,b,g,j,x)},onMouseEnter:function(e){a||"function"!==typeof E||E(e),a&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),i.isLocalURL(I)&&d(C,I,S,{priority:!0})}};if(!a||m||"a"===k.type&&!("href"in k.props)){var B="undefined"!==typeof x?x:C&&C.locale,D=C&&C.isLocaleDomain&&i.getDomainLocale(S,B,C&&C.locales,C&&C.domainLocales);K.href=D||i.addBasePath(i.addLocale(S,B,C&&C.defaultLocale))}return a?c.default.cloneElement(k,K):c.default.createElement("a",Object.assign({},O,K),r)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(u){i=!0,o=u}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],v=o(a.useState(t?t.current:null),2),y=v[0],h=v[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),l.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){if(c.delete(e),a.unobserve(e),0===c.size){a.disconnect(),u.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:r}))}),[n,y,r,d]),b=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!i&&!d){var e=c.requestIdleCallback((function(){return p(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&h(t.current)}),[t]),[m,d,b]};var a=r(7294),c=r(4686),i="undefined"!==typeof IntersectionObserver;var u=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4186:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(1752),a=r(1664),c=r.n(a),i=r(7404);t.default=function(){var e=(0,o.default)().publicRuntimeConfig.sketchFileNames;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{title:"tic40/creative-coding",description:"tic40/creative-coding"}),(0,n.jsxs)("main",{className:"m-4",children:[(0,n.jsx)("h1",{className:"text-4xl",children:(0,n.jsx)(c(),{href:"/",children:(0,n.jsx)("a",{children:"tic40/creative-coding"})})}),(0,n.jsx)("div",{className:"my-5 flex-wrap flex gap-3",children:e.map((function(e){return(0,n.jsx)("div",{children:(0,n.jsx)(c(),{href:"/sketches/".concat(e),children:(0,n.jsx)("a",{className:"bg-transparent text-blue-700 py-1 px-3 border border-blue-500 rounded",children:e})})},"sketch-".concat(e))}))}),(0,n.jsx)("footer",{children:(0,n.jsx)("a",{href:"https://github.com/tic40/creative-coding",target:"_blank",rel:"noreferrer",children:"GitHub"})})]})]})}},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);