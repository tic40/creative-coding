(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{7924:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sketches/[name]",function(){return n(8188)}])},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=u.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,s=Promise,(null!=s&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](a):a instanceof s)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i({},r,e));var a,s;var c=r=i({},r,t);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return n(c);r.loadableGenerated&&delete(r=i({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,o(n,r);delete r.ssr}return n(r)};a(n(7294));var u=a(n(4302));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=i},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},s=n(7161),c=n(6319);var l=[],f=[],d=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,i;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this,t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,r=this._opts;if(n.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var i=this;this._delay=setTimeout((function(){i._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var u=this;this._timeout=setTimeout((function(){u._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),i&&r(t,i),e}();function w(e){return function(e,t){var n=function(){if(!i){var t=new p(e,r);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=o.default.lazy(r.loader));var i=null;if(!d&&"function"===typeof r.webpack&&!r.suspense){var a=r.webpack();f.push((function(e){var t=!0,r=!1,i=void 0;try{for(var u,o=a[Symbol.iterator]();!(t=(u=o.next()).done);t=!0){var s=u.value;if(-1!==e.indexOf(s))return n()}}catch(c){r=!0,i=c}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}))}var l=r.suspense?function(e,t){return o.default.createElement(r.lazy,u({},e,{ref:t}))}:function(e,t){n();var u=o.default.useContext(c.LoadableContext),a=s.useSubscription(i);return o.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),u&&Array.isArray(r.modules)&&r.modules.forEach((function(e){u(e)})),o.default.useMemo((function(){return a.loading||a.error?o.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:i.retry}):a.loaded?o.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return l.preload=function(){return!r.suspense&&n()},l.displayName="LoadableComponent",o.default.forwardRef(l)}(h,e)}function v(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return v(e,t)}))}w.preloadAll=function(){return new Promise((function(e,t){v(l).then(e,t)}))},w.preloadReady=function(e){var t=void 0===e?[]:e;return new Promise((function(e){var n=function(){return d=!0,e()};v(f,t).then(n,n)}))},window.__NEXT_PRELOADREADY=w.preloadReady;var m=w;t.default=m},8188:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return o}});var r=n(5893),i=n(5152),u=n(9008),a=(0,i.default)((function(){return n.e(257).then(n.t.bind(n,4210,23))}),{loadableGenerated:{webpack:function(){return[4210]},modules:["sketches/[name].tsx -> react-p5"]},loading:function(){return(0,r.jsx)(r.Fragment,{})},ssr:!1}),o=!0;t.default=function(e){var t=e.name,i=n(417)("./".concat(t));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.default,{children:[(0,r.jsxs)("title",{children:[t," | ","tic40/creative-coding"]}),(0,r.jsx)("meta",{name:"description",content:"".concat(t," | tic40/creative-coding")}),(0,r.jsx)("link",{rel:"icon",href:"../favicon.ico"})]}),(0,r.jsx)("div",{className:"sketch-holder",children:(0,r.jsx)(a,{setup:i.setup,draw:i.draw,preload:i.preload,mouseClicked:i.mouseClicked})})]})}},5338:function(e,t,n){"use strict";function r(e,t){e.createCanvas(e.windowWidth,e.windowHeight).parent(t)}function i(e){e.clear(),e.circle(e.mouseX,e.mouseY,100)}n.r(t),n.d(t,{setup:function(){return r},draw:function(){return i}})},1089:function(e,t,n){"use strict";function r(e,t){e.createCanvas(e.windowWidth,e.windowHeight).parent(t)}function i(e){e.circle(e.mouseX,e.mouseY,e.random(100))}n.r(t),n.d(t,{setup:function(){return r},draw:function(){return i}})},2201:function(e,t,n){"use strict";n.r(t),n.d(t,{draw:function(){return I},setup:function(){return k}});var r,i=Math.pow,u=Math.sqrt,a=Math.sin,o=Math.cos,s=Math.PI,c=1.70158,l=1.525*c,f=c+1,d=2*s/3,h=2*s/4.5,p=function(e){var t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},w={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return 1-(1-e)*(1-e)},easeInOutQuad:function(e){return e<.5?2*e*e:1-i(-2*e+2,2)/2},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return 1-i(1-e,3)},easeInOutCubic:function(e){return e<.5?4*e*e*e:1-i(-2*e+2,3)/2},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1-i(1-e,4)},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-i(-2*e+2,4)/2},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1-i(1-e,5)},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1-i(-2*e+2,5)/2},easeInSine:function(e){return 1-o(e*s/2)},easeOutSine:function(e){return a(e*s/2)},easeInOutSine:function(e){return-(o(s*e)-1)/2},easeInExpo:function(e){return 0===e?0:i(2,10*e-10)},easeOutExpo:function(e){return 1===e?1:1-i(2,-10*e)},easeInOutExpo:function(e){return 0===e?0:1===e?1:e<.5?i(2,20*e-10)/2:(2-i(2,-20*e+10))/2},easeInCirc:function(e){return 1-u(1-i(e,2))},easeOutCirc:function(e){return u(1-i(e-1,2))},easeInOutCirc:function(e){return e<.5?(1-u(1-i(2*e,2)))/2:(u(1-i(-2*e+2,2))+1)/2},easeInBack:function(e){return f*e*e*e-c*e*e},easeOutBack:function(e){return 1+f*i(e-1,3)+c*i(e-1,2)},easeInOutBack:function(e){return e<.5?i(2*e,2)*(7.189819*e-l)/2:(i(2*e-2,2)*((l+1)*(2*e-2)+l)+2)/2},easeInElastic:function(e){return 0===e?0:1===e?1:-i(2,10*e-10)*a((10*e-10.75)*d)},easeOutElastic:function(e){return 0===e?0:1===e?1:i(2,-10*e)*a((10*e-.75)*d)+1},easeInOutElastic:function(e){return 0===e?0:1===e?1:e<.5?-i(2,20*e-10)*a((20*e-11.125)*h)/2:i(2,-20*e+10)*a((20*e-11.125)*h)/2+1},easeInBounce:function(e){return 1-p(1-e)},easeOutBounce:p,easeInOutBounce:function(e){return e<.5?(1-p(1-2*e))/2:(1+p(2*e-1))/2}},v=["linear","easeInQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInBack","easeOutBack","easeInOutBack","easeInElastic","easeOutElastic","easeInOutElastic","easeInBounce","easeOutBounce","easeInOutBounce"],m=0,y=0,g=0,_=0,b=0,O=0;function k(e,t){e.createCanvas(e.windowWidth,e.windowHeight).parent(t),y=e.height-e.height/10,g=e.height/10,m=e.width/2,_=g,b=y,x()}function I(e){if((O+=1)>=140){O=0;var t=_;return _=b,b=t,void x()}if(!(O>100)){e.clear(),e.strokeWeight(0),e.textSize(16),v.forEach((function(t,n){t==r?e.fill("#FF0000"):e.fill(150),e.text(t,16,e.height/10+16*n)})),e.strokeWeight(5),e.stroke(0),e.line(m,y,m,g),e.stroke("#FF0000");var n=e.lerp(_,b,w[r](O/100));e.line(m+40,n,m-40,n)}}function x(){r=v[Math.floor(Math.random()*v.length)]}},7087:function(e,t,n){"use strict";n.r(t),n.d(t,{preload:function(){return a},setup:function(){return o},draw:function(){return s},mouseClicked:function(){return c}});var r,i=0,u=8;function a(e){r=e.loadImage("../sushi/sushi_oke_nigiri.png")}function o(e,t){e.createCanvas(e.windowWidth,e.windowHeight).parent(t),e.imageMode(e.CENTER)}function s(e){i+=1,e.clear();for(var t=e.width/u,n=t,a=t/2,o=n/2,s=!0;o<=e.height;){for(var c=0;c<u;c++){var l=a+t*c,f=o;s?c===u-1?f+=i%n:l+=i%t:0===c?f-=i%n:l-=i%t,e.translate(l,f),e.rotate(i/100),e.image(r,0,0,t,n),e.resetMatrix()}o+=n,s=!s}}function c(e){64<(u*=2)&&(u=8)}},8684:function(e,t,n){"use strict";var r;n.r(t),n.d(t,{setup:function(){return a},draw:function(){return o}});var i=0,u=0;function a(e,t){e.createCanvas(e.windowWidth,e.windowHeight).parent(t);e.windowWidth,e.windowHeight;r=[{x:e.windowWidth/5,y:e.windowHeight/5},{x:e.windowWidth/5*4,y:e.windowHeight/5*4},{x:e.windowWidth/5*4,y:e.windowHeight/5},{x:e.windowWidth/5,y:e.windowHeight/5*4}]}function o(e){e.clear(),e.fill("#FF0000"),e.noStroke();var t=!0,n=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(t=(o=s.next()).done);t=!0){var c=o.value,l=c.x,f=c.y;e.circle(l,f,30)}}catch(v){n=!0,a=v}finally{try{t||null==s.return||s.return()}finally{if(n)throw a}}var d=r[u],h=r[(u+1)%r.length],p=e.lerp(d.x,h.x,i),w=e.lerp(d.y,h.y,i);e.circle(p,w,30),(i+=.01)>1&&(i=0,u++,u%=r.length)}},2637:function(e,t,n){"use strict";n.r(t),n.d(t,{setup:function(){return a},draw:function(){return o}});var r=0,i=0,u=!1;function a(e,t){e.createCanvas(e.windowWidth,e.windowHeight).parent(t),r=0,i=e.height/2}function o(e){e.width<=r&&(u=!0),r<=0&&(u=!1),u?r-=2:r+=2,e.clear(),e.background(0),e.strokeWeight(1),e.stroke("#f0f0f0"),e.noFill(),e.line(0,i,e.width,i),e.line(r,i-10,r,i+10);var t=e.map(r,0,e.width,300,0);e.strokeWeight(6),e.stroke("#f0f0f0"),e.noFill(),e.circle(r,i,t)}},9109:function(e,t,n){"use strict";n.r(t),n.d(t,{preload:function(){return a},setup:function(){return o},draw:function(){return s},mouseClicked:function(){return c}});var r,i=0,u=2;function a(e){r=e.loadImage("../sushi/sushi_oke_nigiri.png")}function o(e,t){e.createCanvas(e.windowWidth,e.windowHeight).parent(t),e.imageMode(e.CENTER)}function s(e){if((i+=1)<=100){e.clear();for(var t=e.width/u,n=r.height*(t/r.width),a=t/2,o=n/2;o<=e.height;){for(var s=0;s<u;s++){var c=a+t*s;e.image(r,c,o,t*(i/100),n*(i/100))}o+=n}}else;}function c(e){i=0,50<(u=Math.floor(1.5*u))&&(u=2)}},5152:function(e,t,n){e.exports=n(638)},9008:function(e,t,n){e.exports=n(5443)},417:function(e,t,n){var r={"./circle":5338,"./circle.tsx":5338,"./circle_random":1089,"./circle_random.tsx":1089,"./easing":2201,"./easing.tsx":2201,"./kaiten_sushi":7087,"./kaiten_sushi.tsx":7087,"./linear_interpolation":8684,"./linear_interpolation.tsx":8684,"./map":2637,"./map.tsx":2637,"./sushi":9109,"./sushi.tsx":9109};function i(e){var t=u(e);return n(t)}function u(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=u,e.exports=i,i.id=417}},function(e){e.O(0,[774,888,179],(function(){return t=7924,e(e.s=t);var t}));var t=e.O();_N_E=t}]);