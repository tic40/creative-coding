(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{7924:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sketches/[name]",function(){return n(8188)}])},2889:function(t,e,n){"use strict";var i=n(5893),r=n(9008);e.Z=function(t){var e=t.title,n=t.description;return(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:e}),(0,i.jsx)("meta",{property:"description",content:n}),(0,i.jsx)("meta",{property:"og:title",content:e}),(0,i.jsx)("meta",{property:"og:description",content:n}),(0,i.jsx)("meta",{property:"og:image",content:"https://avatars.githubusercontent.com/u/739402?v=4?s=400"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,i.jsx)("link",{rel:"icon",href:"".concat("/creative-coding/","/favicon.ico")})]})}},638:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){i(t,e,n[e])}))}return t}e.default=function(t,e){var n=o.default,i={loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};a=t,s=Promise,(null!=s&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](a):a instanceof s)?i.loader=function(){return t}:"function"===typeof t?i.loader=t:"object"===typeof t&&(i=r({},i,t));var a,s;var c=i=r({},i,e);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return n(c);i.loadableGenerated&&delete(i=r({},i,i.loadableGenerated)).loadableGenerated;if("boolean"===typeof i.ssr){if(!i.ssr)return delete i.ssr,u(n,i);delete i.ssr}return n(i)};a(n(7294));var o=a(n(4302));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return delete e.webpack,delete e.modules,t(e)}},6319:function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.LoadableContext=void 0;var r=((i=n(7294))&&i.__esModule?i:{default:i}).default.createContext(null);e.LoadableContext=r},4302:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){r(t,e,n[e])}))}return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,u=(a=n(7294))&&a.__esModule?a:{default:a},s=n(7161),c=n(6319);var l=[],h=[],d=!1;function f(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then((function(t){return n.loading=!1,n.loaded=t,t})).catch((function(t){throw n.loading=!1,n.error=t,t})),n}var p=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._loadFn=e,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var e,n,r;return e=t,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,n=this._opts;if(e.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var i=this;this._delay=setTimeout((function(){i._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var r=this;this._timeout=setTimeout((function(){r._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){t._update({}),t._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}])&&i(e.prototype,n),r&&i(e,r),t}();function y(t){return function(t,e){var n=function(){if(!r){var e=new p(t,i);r={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return r.promise()},i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},e);i.suspense&&(i.lazy=u.default.lazy(i.loader));var r=null;if(!d&&!i.suspense){var a=i.webpack?i.webpack():i.modules;a&&h.push((function(t){var e=!0,i=!1,r=void 0;try{for(var o,u=a[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var s=o.value;if(-1!==t.indexOf(s))return n()}}catch(c){i=!0,r=c}finally{try{e||null==u.return||u.return()}finally{if(i)throw r}}}))}var l=i.suspense?function(t,e){return u.default.createElement(i.lazy,o({},t,{ref:e}))}:function(t,e){n();var o=u.default.useContext(c.LoadableContext),a=s.useSubscription(r);return u.default.useImperativeHandle(e,(function(){return{retry:r.retry}}),[]),o&&Array.isArray(i.modules)&&i.modules.forEach((function(t){o(t)})),u.default.useMemo((function(){return a.loading||a.error?u.default.createElement(i.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?u.default.createElement(function(t){return t&&t.__esModule?t.default:t}(a.loaded),t):null}),[t,a])};return l.preload=function(){return!i.suspense&&n()},l.displayName="LoadableComponent",u.default.forwardRef(l)}(f,t)}function v(t,e){for(var n=[];t.length;){var i=t.pop();n.push(i(e))}return Promise.all(n).then((function(){if(t.length)return v(t,e)}))}y.preloadAll=function(){return new Promise((function(t,e){v(l).then(t,e)}))},y.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var n=function(){return d=!0,e()};v(h,t).then(n,n)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var w=y;e.default=w},8188:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return u}});var i=n(5893),r=n(5152),o=n(2889),a=(0,r.default)((function(){return n.e(257).then(n.t.bind(n,4210,23))}),{loadableGenerated:{webpack:function(){return[4210]}},loading:function(){return(0,i.jsx)(i.Fragment,{})},ssr:!1}),u=!0;e.default=function(t){var e=t.name,r=n(417)("./".concat(e));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{title:"".concat(e," | ").concat("tic40/creative-coding"),description:"".concat(e," | ").concat("tic40/creative-coding")}),(0,i.jsx)("div",{className:"sketch-holder",children:(0,i.jsx)(a,{setup:r.setup,draw:r.draw,preload:r.preload,mouseClicked:r.mouseClicked})})]})}},6967:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e),n.d(e,{setup:function(){return c},draw:function(){return l},mouseClicked:function(){return h}});var r,o,a,u=function(){function t(e,n,i,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n,this.vx=i,this.vy=r,this.p=o}var e,n,r;return e=t,r=[{key:"createRandom",value:function(t){return new this(t.random(0,t.width),t.random(0,t.height),t.random(-3,3),t.random(-3,3),t)}}],(n=[{key:"update",value:function(){this.x+=this.vx,this.y+=this.vy,this.x<=0?(this.x=0,this.vx*=-1):this.x>=this.p.width-1&&(this.x=this.p.width-1,this.vx*=-1),this.y<=0?(this.y=0,this.vy*=-1):this.y>=this.p.height-1&&(this.y=this.p.height-1,this.vy*=-1)}}])&&i(e.prototype,n),r&&i(e,r),t}(),s=!1;function c(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.noFill(),r=u.createRandom(t),o=u.createRandom(t),a={r:t.random(255),g:t.random(255),b:t.random(255)}}function l(t){r.update(),o.update(),function(t){a.r+=t.random([-2,2]),a.g+=t.random([-2,2]),a.b+=t.random([-2,2]),a.r=t.constrain(a.r,0,255),a.g=t.constrain(a.g,0,255),a.b=t.constrain(a.b,0,255)}(t),t.stroke(a.r,a.g,a.b,100),t.line(r.x,r.y,o.x,o.y)}function h(t){s=!s,t.clear(),s?t.background(180):t.background(255)}},5416:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.r(e),n.d(e,{setup:function(){return d},draw:function(){return f},mouseClicked:function(){return p}});var a,u,s=function(){function t(e){i(this,t),this.baseBulletSpeed=5,this.baseBulletSize=8,this.moveSpeed=5,this.x=e.x,this.y=e.y,this.p=e.p,this.bullets=[],this.destX=this.x,this.destY=this.y,this.shotType=e.shotType||"aim"}return o(t,[{key:"shoot",value:function(){"3Way"===this.shotType?this.nWayShot(2):"5Way"===this.shotType?this.nWayShot(3):"allRound"===this.shotType?this.allRoundShot():"aimBig"===this.shotType?this.aimShot(10*this.baseBulletSize,this.baseBulletSpeed):this.aimShot()}},{key:"aimShot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.baseBulletSize,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.baseBulletSpeed,n=this.p,i=new(this.bullet())({x:this.x,y:this.y,angle:n.atan2(n.mouseY-this.y,n.mouseX-n.width/2),speed:e,size:t,color:"#65ace4"});this.bullets.push(i)}},{key:"allRoundShot",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.baseBulletSize,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.baseBulletSpeed,n=this.p,i=0;i<n.TWO_PI;i+=.2){var r=new(this.bullet())({x:this.x,y:this.y,angle:i,speed:e,size:t,color:"#65ace4"});this.bullets.push(r)}}},{key:"nWayShot",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.baseBulletSize,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.baseBulletSpeed,i=this.p,r=i.atan2(i.mouseY-this.y,i.mouseX-i.width/2),o=[-1,1],a=0;a<t;a++)for(var u=0;u<(0===a?1:2);u++){var s=r+.1*a*o[u],c=new(this.bullet())({x:this.x,y:this.y,angle:s,speed:n,size:e,color:"#65ace4"});this.bullets.push(c)}}},{key:"update",value:function(){var t=this,e=this.p;Math.abs(this.x-this.destX)<.01&&Math.abs(this.y-this.destY)<.01&&(this.destX=e.constrain(this.x+e.random(-30,30),0,e.width),this.destY=e.constrain(this.y+e.random(-30,30),0,e.height));var n=e.createVector(this.x,this.y);n.lerp(this.destX,this.destY,0,.1),this.x=n.x,this.y=n.y,this.bullets.forEach((function(t){return t.update(e)})),this.bullets=this.bullets.filter((function(e){return t.inScreen(e.x,e.y)}))}},{key:"draw",value:function(){var t=this;this.p.fill("#65ace4"),this.p.rect(this.x-5,this.y-5,10,10),this.bullets.forEach((function(e){return e.draw(t.p)}))}},{key:"inScreen",value:function(t,e){return t>=0&&t<this.p.width&&e>=0&&e<this.p.height}},{key:"bullet",value:function(){return l}}]),t}(),c=function(){function t(e,n,r){i(this,t),this.x=e,this.y=n,this.p=r,this.bullets=[]}return o(t,[{key:"shoot",value:function(){this.normalShot()}},{key:"normalShot",value:function(){var t=this.p,e=new(this.bullet())({x:this.x,y:this.y,angle:t.radians(-90),speed:8,size:10,color:"#56a764"});this.bullets.push(e),console.log(e.angle)}},{key:"update",value:function(){var t=this,e=this.p;this.x=e.mouseX,this.y=e.mouseY,this.bullets.forEach((function(t){return t.update(e)})),this.bullets=this.bullets.filter((function(e){return t.inScreen(e.x,e.y)}))}},{key:"draw",value:function(){var t=this;this.p.fill("#56a764"),this.p.rect(this.p.mouseX-5,this.p.mouseY-10,10,10),this.bullets.forEach((function(e){return e.draw(t.p)}))}},{key:"bullet",value:function(){return l}},{key:"inScreen",value:function(t,e){return t>=0&&t<this.p.width&&e>=0&&e<this.p.height}}]),t}(),l=function(){function t(e){i(this,t),this.x=e.x,this.y=e.y,this.angle=e.angle,this.speed=e.speed,this.size=e.size||8,this.color=e.color||"#FFFFFF"}return o(t,[{key:"update",value:function(t){this.x+=t.cos(this.angle)*this.speed,this.y+=t.sin(this.angle)*this.speed}},{key:"draw",value:function(t){t.noStroke(),t.fill(this.color),t.circle(this.x,this.y,this.size)}}]),t}(),h=["aim","3Way","5way","allRound","aimBig"];function d(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),a=new s({x:t.width/2,y:t.height/5,p:t,shotType:t.random(h)}),u=new c(t.width/2,t.height-10,t)}function f(t){t.clear(),t.frameCount%200===0&&(a.shotType=t.random(h)),t.frameCount%("aimBig"===a.shotType?20:10)===0&&a.shoot(),a.update(),u.update(),a.draw(),u.draw()}function p(){u.shoot()}},5338:function(t,e,n){"use strict";function i(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e)}function r(t){t.clear(),t.circle(t.mouseX,t.mouseY,100)}n.r(e),n.d(e,{setup:function(){return i},draw:function(){return r}})},1089:function(t,e,n){"use strict";function i(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e)}function r(t){t.circle(t.mouseX,t.mouseY,t.random(100))}n.r(e),n.d(e,{setup:function(){return i},draw:function(){return r}})},8243:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return d},draw:function(){return f},mouseClicked:function(){return p}});var i,r,o,a,u,s,c=0,l=!0,h=!1;function d(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),y(t)}function f(t){c++,t.clear(),t.background(0),function(t){for(var e=[],n=[],a=0;a<t.TWO_PI;a+=t.TWO_PI/30)if(l){var u=t.width/2+t.cos(i+a)*r,s=t.height/4+t.sin(i+a)*o;t.circle(u,s,8),t.circle(u,t.height-s,8),e.push({x:u,y:s}),n.push({x:u,y:t.height-s})}else{var c=t.width/4+t.cos(i+a)*r,d=t.height/2+t.sin(i+a)*o;t.circle(c,d,8),t.circle(t.width-c,t.height-d,8),e.push({x:c,y:d}),n.push({x:t.width-c,y:t.height-d})}for(var f=0;f<3;f++){var p=n.pop();p&&n.unshift(p)}if(h){t.push(),t.stroke(240),t.noFill();for(var y=0;y<e.length;y++)t.line(e[y].x,e[y].y,n[y].x,n[y].y);t.pop()}}(t),i+=.02,r+=a?s:-s,o-=u?s:-s,300<c&&y(t)}function p(){h=!h}function y(t){c=0,r=t.random(-150,150),o=0,i=0,s=t.random(.4,1.2),a=Math.floor(t.random(0,10))%2===0,u=Math.floor(t.random(0,10))%2===0,l=Math.floor(t.random(0,10))%2===0}},5508:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return r},draw:function(){return o}});var i=0;function r(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.colorMode(t.HSB)}function o(t){i++,i%=t.height/19,t.clear(),t.background(0);for(var e=t.dist(0,0,t.width/2,t.height/2),n=0;n<20;n++)for(var r=0;r<20;r++){var o=t.width/19*r,a=t.height/19*n,u=t.dist(o,a,t.mouseX,t.mouseY),s=t.map(u,0,e,0,360);t.fill(s,255,255),t.noStroke(),t.circle(o,a+i,10)}}},2201:function(t,e,n){"use strict";n.r(e),n.d(e,{draw:function(){return O},setup:function(){return _}});var i,r=Math.pow,o=Math.sqrt,a=Math.sin,u=Math.cos,s=Math.PI,c=1.70158,l=1.525*c,h=c+1,d=2*s/3,f=2*s/4.5,p=function(t){var e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},y={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return 1-(1-t)*(1-t)},easeInOutQuad:function(t){return t<.5?2*t*t:1-r(-2*t+2,2)/2},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1-r(1-t,3)},easeInOutCubic:function(t){return t<.5?4*t*t*t:1-r(-2*t+2,3)/2},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1-r(1-t,4)},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-r(-2*t+2,4)/2},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1-r(1-t,5)},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1-r(-2*t+2,5)/2},easeInSine:function(t){return 1-u(t*s/2)},easeOutSine:function(t){return a(t*s/2)},easeInOutSine:function(t){return-(u(s*t)-1)/2},easeInExpo:function(t){return 0===t?0:r(2,10*t-10)},easeOutExpo:function(t){return 1===t?1:1-r(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:t<.5?r(2,20*t-10)/2:(2-r(2,-20*t+10))/2},easeInCirc:function(t){return 1-o(1-r(t,2))},easeOutCirc:function(t){return o(1-r(t-1,2))},easeInOutCirc:function(t){return t<.5?(1-o(1-r(2*t,2)))/2:(o(1-r(-2*t+2,2))+1)/2},easeInBack:function(t){return h*t*t*t-c*t*t},easeOutBack:function(t){return 1+h*r(t-1,3)+c*r(t-1,2)},easeInOutBack:function(t){return t<.5?r(2*t,2)*(7.189819*t-l)/2:(r(2*t-2,2)*((l+1)*(2*t-2)+l)+2)/2},easeInElastic:function(t){return 0===t?0:1===t?1:-r(2,10*t-10)*a((10*t-10.75)*d)},easeOutElastic:function(t){return 0===t?0:1===t?1:r(2,-10*t)*a((10*t-.75)*d)+1},easeInOutElastic:function(t){return 0===t?0:1===t?1:t<.5?-r(2,20*t-10)*a((20*t-11.125)*f)/2:r(2,-20*t+10)*a((20*t-11.125)*f)/2+1},easeInBounce:function(t){return 1-p(1-t)},easeOutBounce:p,easeInOutBounce:function(t){return t<.5?(1-p(1-2*t))/2:(1+p(2*t-1))/2}},v=["linear","easeInQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInBack","easeOutBack","easeInOutBack","easeInElastic","easeOutElastic","easeInOutElastic","easeInBounce","easeOutBounce","easeInOutBounce"],w=0,m=0,g=0,b=0,x=0,k=0;function _(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),m=t.height-t.height/10,g=t.height/10,w=t.width/2,b=g,x=m,C()}function O(t){if((k+=1)>=140){k=0;var e=b;return b=x,x=e,void C()}if(!(k>100)){t.clear(),t.strokeWeight(0),t.textSize(16),v.forEach((function(e,n){e==i?t.fill("#FF0000"):t.fill(150),t.text(e,16,t.height/10+16*n)})),t.strokeWeight(5),t.stroke(0),t.line(w,m,w,g),t.stroke("#FF0000");var n=t.lerp(b,x,y[i](k/100));t.line(w+40,n,w-40,n)}}function C(){i=v[Math.floor(Math.random()*v.length)]}},3354:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return r},draw:function(){return o}});var i;function r(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.noFill(),t.stroke(200);var n=Math.min(8,(t.width-50)/80);i=[];for(var r=0;r<80;r++)i.push({x:t.width/2,y:t.height/2,radius:10+r*n})}function o(t){t.clear(),t.background(0),i.forEach((function(e,n){e.y+=0===n?(t.mouseY-e.y)/4:(i[n-1].y-e.y)/4,t.ellipse(e.x,e.y,e.radius,e.radius/4)}))}},3608:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return r},draw:function(){return o}});var i;function r(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.noStroke(),(i=t.createGraphics(t.windowWidth,t.windowHeight)).noStroke();for(var n=0;n<t.height;n+=2)for(var r=0;r<t.width;r+=2){a(r,n,t.noise(r/100,n/100))}}function o(t){if(!(t.frameCount%3)){t.clear(),t.image(i,0,0),i.copy(i,1,0,t.width-1,t.height,0,0,t.width-1,t.height);for(var e=t.width-1,n=(e+t.frameCount/3)/100,r=0;r<t.height;r+=2){a(e,r,t.noise(n,r/100))}}}function a(t,e,n){n<=.325?i.fill("#5e539e"):n<=.5?i.fill("#5584c5"):n<=.53125?i.fill("#7ac1a5"):n<=.5625?i.fill("#a2d7a4"):n<=.6875?i.fill("#d3d599"):n<=.775?i.fill("#808080"):i.fill("#DA3E32"),i.rect(t,e,2,2)}},7087:function(t,e,n){"use strict";n.r(e),n.d(e,{preload:function(){return a},setup:function(){return u},draw:function(){return s},mouseClicked:function(){return c}});var i,r=0,o=8;function a(t){i=t.loadImage("../sushi/sushi_oke_nigiri.png")}function u(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.imageMode(t.CENTER)}function s(t){r+=1,t.clear();for(var e=t.width/o,n=e,a=e/2,u=n/2,s=!0;u<=t.height;){for(var c=0;c<o;c++){var l=a+e*c,h=u;s?c===o-1?h+=r%n:l+=r%e:0===c?h-=r%n:l-=r%e,t.translate(l,h),t.rotate(r/100),t.image(i,0,0,e,n),t.resetMatrix()}u+=n,s=!s}}function c(t){64<(o*=2)&&(o=8)}},3471:function(t,e,n){"use strict";var i;n.r(e),n.d(e,{setup:function(){return a},draw:function(){return u}});var r=0,o=0;function a(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e);t.windowWidth,t.windowHeight;i=[{x:t.windowWidth/5,y:t.windowHeight/5},{x:t.windowWidth/5*4,y:t.windowHeight/5*4},{x:t.windowWidth/5*4,y:t.windowHeight/5},{x:t.windowWidth/5,y:t.windowHeight/5*4}]}function u(t){t.clear(),t.fill("#FF0000"),t.noStroke();var e=!0,n=!1,a=void 0;try{for(var u,s=i[Symbol.iterator]();!(e=(u=s.next()).done);e=!0){var c=u.value,l=c.x,h=c.y;t.circle(l,h,30)}}catch(v){n=!0,a=v}finally{try{e||null==s.return||s.return()}finally{if(n)throw a}}var d=i[o],f=i[(o+1)%i.length],p=t.lerp(d.x,f.x,r),y=t.lerp(d.y,f.y,r);t.circle(p,y,30),(r+=.01)>1&&(r=0,o++,o%=i.length)}},3218:function(t,e,n){"use strict";var i,r,o,a,u,s,c,l;function h(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.stroke(240),t.noFill(),t.background(0),0,i=t.random(t.width/4,t.width/2),r=t.random(t.height/4,t.height/2),o=t.random(t.TWO_PI),a=t.random(t.TWO_PI),u=t.random(.04,.08),s=t.random(.04,.08),c=t.width/2+t.cos(o)*i,l=t.height/2+t.sin(a)*r}function d(t){var e=t.width/2+t.cos(o)*i,n=t.height/2+t.sin(a)*r;t.line(c,l,e,n),o+=u,a+=s,c=e,l=n}n.r(e),n.d(e,{setup:function(){return h},draw:function(){return d}})},9351:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e),n.d(e,{setup:function(){return c},draw:function(){return l},mouseClicked:function(){return h}});var r=function(){function t(e,n,i,r,o,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n,this.vector=i,this.r=r,this.life=500,this.color=o,this.type=a}var e,n,r;return e=t,(n=[{key:"update",value:function(){this.x+=this.vector.x,this.y+=this.vector.y,this.life--}},{key:"draw",value:function(t){t.fill(this.color),"rect"===this.type?t.rect(this.x,this.y,2*this.r,2*this.r,2):"triangle"===this.type?t.triangle(this.x,this.y,this.x+this.r,this.y-1.5*this.r,this.x+2*this.r,this.y):t.circle(this.x,this.y,2*this.r)}}])&&i(e.prototype,n),r&&i(e,r),t}(),o=!1,a=[],u=["#de9610","#c93a40","#d06d8c","#fff001","#65ace4","#a0c238","#56a764","#d16b16","#0074bf","#9460a0","#cc528b","#f2cf01"],s=["circle","rect","triangle"];function c(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),d(t)}function l(t){t.clear(),o?t.background(0):t.background(250),t.noStroke(),t.frameCount%100===0&&(d(t),a=a.filter((function(t){return 0<t[0].life}))),a.forEach((function(e){e.forEach((function(e){e.update(),e.draw(t)}))}))}function h(){o=!o}function d(t){for(var e=[],n={x:t.random(0,t.width),y:t.random(0,t.height)},i=0;i<100;i++){var o=t.random(-5,5),c=t.random(-5,5),l=t.createVector(o,c),h=new r(n.x,n.y,l,t.random(5,15),t.random(u),t.random(s));e.push(h)}a.push(e)}},8902:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return a},draw:function(){return u}});var i,r=0,o=[];function a(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),o=[];for(var n=0;n<120;n++){var i=t.random(0,t.width),r=t.random(0,t.height),a=t.random(1.4,2);o.push({x:i,y:r,r:a})}}function u(t){r+=1,t.clear(),t.background(0),i||(i={x:t.random(0,t.width),y:t.random(0,t.width),r:t.random(2,4),dir:t.random(0,360),speed:t.random(3,7),life:100});var e=!0,n=!1,a=void 0;try{for(var u,s=o[Symbol.iterator]();!(e=(u=s.next()).done);e=!0){var c=u.value,l=c.x,h=c.y,d=c.r;t.circle(l,h,d)}}catch(m){n=!0,a=m}finally{try{e||null==s.return||s.return()}finally{if(n)throw a}}t.translate(t.width/2,t.height/2),t.circle(0,0,12);for(var f=7;f<=15;f++){var p=t.map(f*f*f,0,3375,0,(Math.min(t.height,t.width)-30)/2),y=r*f*.1+100*f,v=t.cos(y/100)*p,w=t.sin(y/100)*p;t.circle(v,w,8),t.push(),t.stroke(50),t.noFill(),t.circle(0,0,2*p),t.pop()}i&&(i.x+=t.cos(t.radians(i.dir))*i.speed,i.y+=t.sin(t.radians(i.dir))*i.speed,i.life--,t.circle(i.x,i.y,i.r),i.life<=0&&(i=null))}},3458:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return c},draw:function(){return l},mouseClicked:function(){return h}});var i,r=40,o=10,a=0,u=0,s=3;function c(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.stroke(80),function(t){var e=20,n=Math.floor(t.random(t.height,t.height/2));i=[{x:e,y:n}]}(t)}function l(t){if(!(++a%s)){t.clear(),t.background(230);var e=function(t){var e=1,n=Math.floor(t.random(1,100));e*=n<=50?2:n<=70?3:n<=80?5:n<=90?10:n<=95?20:n<=97?30:n<=99?40:100;var r=i[i.length-1].x+1,o=Math.floor(t.random(1,100))>=99?20*e:e,a=100===Math.floor(t.random(1,100))?2*-e:-e,u=i[i.length-1].y+Math.floor(t.random(a,o));return{x:r,y:u}}(t);if(i.push(e),t.width/2<i.length&&(i.shift(),i=i.map((function(t){return{x:t.x-1,y:t.y}}))),e.y<0&&(u-=e.y,i=i.map((function(t){return{x:t.x,y:t.y-e.y}}))),t.height-o<e.y){var n=e.y-(t.height-o);u<n?(u=0,i=i.map((function(e){return{x:e.x,y:Math.min(t.height-o,e.y-u)}}))):(u-=n,i=i.map((function(e){return{x:e.x,y:Math.min(t.height-o,e.y-n)}})))}!function(t){t.push(),t.stroke(200),t.fill(160);for(var e=t.height-o;0<=e;e-=r){var n=e+Math.floor((u+r-1)/r);t.line(10,n,t.width,n);var i=Math.floor((t.height-o-e+u+r-1)/r);t.text(i,10,n)}t.pop()}(t),function(t){for(var e=0;e<i.length-1;e++){var n=i[e],r=i[e+1];t.line(n.x,n.y,r.x,r.y)}}(t)}}function h(){3<++s&&(s=1)}},4435:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return u},draw:function(){return s}});var i,r=[],o=function t(e,n,i,r,o,a,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.size=e,this.x=n,this.y=i,this.angle=r,this.dir=o,this.dist=a,this.color=u,this.hist=[],this.life=500};function a(t){var e=t.random(10,30),n=t.random(0,255),i=t.random(0,255),a=t.random(0,255),u=t.color(n,i,a);r.push(new o(e,t.random(t.width/2-100,t.width/2+100),t.random(t.height/2-100,t.height/2+100),0,t.random(0,360),t.dist(0,0,e,e),u))}function u(t,e){t.createCanvas(t.windowWidth,t.windowHeight),t.angleMode(t.DEGREES),t.rectMode(t.CENTER),t.stroke(0),t.noFill(),i=0,r=[],a(t)}function s(t){i++,t.clear(),i%100===0&&a(t),r=r.filter((function(t){return 0<=t.life}));var e=!0,n=!1,o=void 0;try{for(var u,s=r[Symbol.iterator]();!(e=(u=s.next()).done);e=!0){var c=u.value;t.width<=c.x+c.size&&(c.dir=t.random(90,270)),c.x-c.size<=0&&(c.dir=t.random(-90,90)),t.height<=c.y+c.size&&(c.dir=t.random(180,360)),c.y-c.size<=0&&(c.dir=t.random(0,180));var l=25<c.life?255:t.map(c.life,0,25,0,255);c.color.setAlpha(l),t.stroke(c.color),t.translate(c.x,c.y),t.rotate(c.angle),t.rect(0,0,2*c.size,2*c.size),t.resetMatrix();for(var h=[],d=0;d<4;d++){var f=c.angle+90*d+45,p=c.x+t.cos(f)*c.dist,y=c.y+t.sin(f)*c.dist;h.push({x:p,y:y})}c.hist.unshift(h);for(var v=c.hist[0],w=1;w<c.hist.length;w++){for(var m=c.hist[w],g=0;g<4;g++){var b=t.map(w,0,128,c.life,0);c.color.setAlpha(b),t.stroke(c.color),t.line(v[g].x,v[g].y,m[g].x,m[g].y)}v=m}c.hist.length>=128&&c.hist.pop(),c.x+=2*t.cos(c.dir),c.y+=2*t.sin(c.dir),c.angle+=1,c.life--}}catch(x){n=!0,o=x}finally{try{e||null==s.return||s.return()}finally{if(n)throw o}}}},9109:function(t,e,n){"use strict";n.r(e),n.d(e,{preload:function(){return a},setup:function(){return u},draw:function(){return s},mouseClicked:function(){return c}});var i,r=0,o=2;function a(t){i=t.loadImage("../sushi/sushi_oke_nigiri.png")}function u(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.imageMode(t.CENTER)}function s(t){if((r+=1)<=100){t.clear();for(var e=t.width/o,n=i.height*(e/i.width),a=e/2,u=n/2;u<=t.height;){for(var s=0;s<o;s++){var c=a+e*s;t.image(i,c,u,e*(r/100),n*(r/100))}u+=n}}else;}function c(t){r=0,50<(o=Math.floor(1.5*o))&&(o=2)}},5152:function(t,e,n){t.exports=n(638)},9008:function(t,e,n){t.exports=n(5443)},417:function(t,e,n){var i={"./bounce":6967,"./bounce.tsx":6967,"./bullet":5416,"./bullet.tsx":5416,"./circle":5338,"./circle.tsx":5338,"./circle_random":1089,"./circle_random.tsx":1089,"./circular":8243,"./circular.tsx":8243,"./dots":5508,"./dots.tsx":5508,"./easing":2201,"./easing.tsx":2201,"./ellipse":3354,"./ellipse.tsx":3354,"./heat_map":3608,"./heat_map.tsx":3608,"./kaiten_sushi":7087,"./kaiten_sushi.tsx":7087,"./linear":3471,"./linear.tsx":3471,"./lissajous_curve":3218,"./lissajous_curve.tsx":3218,"./particle":9351,"./particle.tsx":9351,"./planet":8902,"./planet.tsx":8902,"./random_walk":3458,"./random_walk.tsx":3458,"./rectangle_fish":4435,"./rectangle_fish.tsx":4435,"./sushi":9109,"./sushi.tsx":9109};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=417}},function(t){t.O(0,[774,888,179],(function(){return e=7924,t(t.s=e);var e}));var e=t.O();_N_E=e}]);