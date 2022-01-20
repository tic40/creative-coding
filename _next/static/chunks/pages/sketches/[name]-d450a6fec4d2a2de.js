(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{7924:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sketches/[name]",function(){return n(8188)}])},2889:function(t,e,n){"use strict";var r=n(5893),i=n(9008);e.Z=function(t){var e=t.title,n=t.description;return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{property:"description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:e}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:image",content:"https://avatars.githubusercontent.com/u/739402?v=4?s=400"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("link",{rel:"icon",href:"".concat("/creative-coding/","/favicon.ico")})]})}},638:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){r(t,e,n[e])}))}return t}e.default=function(t,e){var n=o.default,r={loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};a=t,s=Promise,(null!=s&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](a):a instanceof s)?r.loader=function(){return t}:"function"===typeof t?r.loader=t:"object"===typeof t&&(r=i({},r,t));var a,s;var c=r=i({},r,e);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return n(c);r.loadableGenerated&&delete(r=i({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};a(n(7294));var o=a(n(4302));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return delete e.webpack,delete e.modules,t(e)}},6319:function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.LoadableContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);e.LoadableContext=i},4302:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){i(t,e,n[e])}))}return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,u=(a=n(7294))&&a.__esModule?a:{default:a},s=n(7161),c=n(6319);var l=[],d=[],f=!1;function h(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then((function(t){return n.loading=!1,n.loaded=t,t})).catch((function(t){throw n.loading=!1,n.error=t,t})),n}var p=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._loadFn=e,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var e,n,i;return e=t,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,n=this._opts;if(e.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var i=this;this._timeout=setTimeout((function(){i._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){t._update({}),t._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}])&&r(e.prototype,n),i&&r(e,i),t}();function w(t){return function(t,e){var n=function(){if(!i){var e=new p(t,r);i={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return i.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},e);r.suspense&&(r.lazy=u.default.lazy(r.loader));var i=null;if(!f&&!r.suspense){var a=r.webpack?r.webpack():r.modules;a&&d.push((function(t){var e=!0,r=!1,i=void 0;try{for(var o,u=a[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var s=o.value;if(-1!==t.indexOf(s))return n()}}catch(c){r=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(r)throw i}}}))}var l=r.suspense?function(t,e){return u.default.createElement(r.lazy,o({},t,{ref:e}))}:function(t,e){n();var o=u.default.useContext(c.LoadableContext),a=s.useSubscription(i);return u.default.useImperativeHandle(e,(function(){return{retry:i.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(t){o(t)})),u.default.useMemo((function(){return a.loading||a.error?u.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:i.retry}):a.loaded?u.default.createElement(function(t){return t&&t.__esModule?t.default:t}(a.loaded),t):null}),[t,a])};return l.preload=function(){return!r.suspense&&n()},l.displayName="LoadableComponent",u.default.forwardRef(l)}(h,t)}function v(t,e){for(var n=[];t.length;){var r=t.pop();n.push(r(e))}return Promise.all(n).then((function(){if(t.length)return v(t,e)}))}w.preloadAll=function(){return new Promise((function(t,e){v(l).then(t,e)}))},w.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var n=function(){return f=!0,e()};v(d,t).then(n,n)}))},window.__NEXT_PRELOADREADY=w.preloadReady;var m=w;e.default=m},8188:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return u}});var r=n(5893),i=n(5152),o=n(2889),a=(0,i.default)((function(){return n.e(257).then(n.t.bind(n,4210,23))}),{loadableGenerated:{webpack:function(){return[4210]}},loading:function(){return(0,r.jsx)(r.Fragment,{})},ssr:!1}),u=!0;e.default=function(t){var e=t.name,i=n(417)("./".concat(e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{title:"".concat(e," | ").concat("tic40/creative-coding"),description:"".concat(e," | ").concat("tic40/creative-coding")}),(0,r.jsx)("div",{className:"sketch-holder",children:(0,r.jsx)(a,{setup:i.setup,draw:i.draw,preload:i.preload,mouseClicked:i.mouseClicked})})]})}},6967:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n.d(e,{setup:function(){return c},draw:function(){return l},mouseClicked:function(){return d}});var i,o,a,u=function(){function t(e,n,r,i,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n,this.vx=r,this.vy=i,this.p=o}var e,n,i;return e=t,i=[{key:"createRandom",value:function(t){return new this(t.random(0,t.width),t.random(0,t.height),t.random(-3,3),t.random(-3,3),t)}}],(n=[{key:"update",value:function(){this.x+=this.vx,this.y+=this.vy,this.x<=0?(this.x=0,this.vx*=-1):this.x>=this.p.width-1&&(this.x=this.p.width-1,this.vx*=-1),this.y<=0?(this.y=0,this.vy*=-1):this.y>=this.p.height-1&&(this.y=this.p.height-1,this.vy*=-1)}}])&&r(e.prototype,n),i&&r(e,i),t}(),s=!1;function c(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.noFill(),i=u.createRandom(t),o=u.createRandom(t),a={r:t.random(255),g:t.random(255),b:t.random(255)}}function l(t){i.update(),o.update(),function(t){a.r+=t.random([-2,2]),a.g+=t.random([-2,2]),a.b+=t.random([-2,2]),a.r=t.constrain(a.r,0,255),a.g=t.constrain(a.g,0,255),a.b=t.constrain(a.b,0,255)}(t),t.stroke(a.r,a.g,a.b,100),t.line(i.x,i.y,o.x,o.y)}function d(t){s=!s,t.clear(),s?t.background(180):t.background(255)}},5338:function(t,e,n){"use strict";function r(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e)}function i(t){t.clear(),t.circle(t.mouseX,t.mouseY,100)}n.r(e),n.d(e,{setup:function(){return r},draw:function(){return i}})},1089:function(t,e,n){"use strict";function r(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e)}function i(t){t.circle(t.mouseX,t.mouseY,t.random(100))}n.r(e),n.d(e,{setup:function(){return r},draw:function(){return i}})},8243:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return f},draw:function(){return h},mouseClicked:function(){return p}});var r,i,o,a,u,s,c=0,l=!0,d=!1;function f(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),w(t)}function h(t){c++,t.clear(),t.background(0),function(t){for(var e=[],n=[],a=0;a<t.TWO_PI;a+=t.TWO_PI/30)if(l){var u=t.width/2+t.cos(r+a)*i,s=t.height/4+t.sin(r+a)*o;t.circle(u,s,8),t.circle(u,t.height-s,8),e.push({x:u,y:s}),n.push({x:u,y:t.height-s})}else{var c=t.width/4+t.cos(r+a)*i,f=t.height/2+t.sin(r+a)*o;t.circle(c,f,8),t.circle(t.width-c,t.height-f,8),e.push({x:c,y:f}),n.push({x:t.width-c,y:t.height-f})}for(var h=0;h<3;h++){var p=n.pop();p&&n.unshift(p)}if(d){t.push(),t.stroke(240),t.noFill();for(var w=0;w<e.length;w++)t.line(e[w].x,e[w].y,n[w].x,n[w].y);t.pop()}}(t),r+=.02,i+=a?s:-s,o-=u?s:-s,300<c&&w(t)}function p(){d=!d}function w(t){c=0,i=t.random(-150,150),o=0,r=0,s=t.random(.4,1.2),a=Math.floor(t.random(0,10))%2===0,u=Math.floor(t.random(0,10))%2===0,l=Math.floor(t.random(0,10))%2===0}},5508:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return i},draw:function(){return o}});var r=0;function i(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.colorMode(t.HSB)}function o(t){r++,r%=t.height/19,t.clear(),t.background(0);for(var e=t.dist(0,0,t.width/2,t.height/2),n=0;n<20;n++)for(var i=0;i<20;i++){var o=t.width/19*i,a=t.height/19*n,u=t.dist(o,a,t.mouseX,t.mouseY),s=t.map(u,0,e,0,360);t.fill(s,255,255),t.noStroke(),t.circle(o,a+r,10)}}},2201:function(t,e,n){"use strict";n.r(e),n.d(e,{draw:function(){return k},setup:function(){return O}});var r,i=Math.pow,o=Math.sqrt,a=Math.sin,u=Math.cos,s=Math.PI,c=1.70158,l=1.525*c,d=c+1,f=2*s/3,h=2*s/4.5,p=function(t){var e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},w={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return 1-(1-t)*(1-t)},easeInOutQuad:function(t){return t<.5?2*t*t:1-i(-2*t+2,2)/2},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1-i(1-t,3)},easeInOutCubic:function(t){return t<.5?4*t*t*t:1-i(-2*t+2,3)/2},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1-i(1-t,4)},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-i(-2*t+2,4)/2},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1-i(1-t,5)},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1-i(-2*t+2,5)/2},easeInSine:function(t){return 1-u(t*s/2)},easeOutSine:function(t){return a(t*s/2)},easeInOutSine:function(t){return-(u(s*t)-1)/2},easeInExpo:function(t){return 0===t?0:i(2,10*t-10)},easeOutExpo:function(t){return 1===t?1:1-i(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:t<.5?i(2,20*t-10)/2:(2-i(2,-20*t+10))/2},easeInCirc:function(t){return 1-o(1-i(t,2))},easeOutCirc:function(t){return o(1-i(t-1,2))},easeInOutCirc:function(t){return t<.5?(1-o(1-i(2*t,2)))/2:(o(1-i(-2*t+2,2))+1)/2},easeInBack:function(t){return d*t*t*t-c*t*t},easeOutBack:function(t){return 1+d*i(t-1,3)+c*i(t-1,2)},easeInOutBack:function(t){return t<.5?i(2*t,2)*(7.189819*t-l)/2:(i(2*t-2,2)*((l+1)*(2*t-2)+l)+2)/2},easeInElastic:function(t){return 0===t?0:1===t?1:-i(2,10*t-10)*a((10*t-10.75)*f)},easeOutElastic:function(t){return 0===t?0:1===t?1:i(2,-10*t)*a((10*t-.75)*f)+1},easeInOutElastic:function(t){return 0===t?0:1===t?1:t<.5?-i(2,20*t-10)*a((20*t-11.125)*h)/2:i(2,-20*t+10)*a((20*t-11.125)*h)/2+1},easeInBounce:function(t){return 1-p(1-t)},easeOutBounce:p,easeInOutBounce:function(t){return t<.5?(1-p(1-2*t))/2:(1+p(2*t-1))/2}},v=["linear","easeInQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInBack","easeOutBack","easeInOutBack","easeInElastic","easeOutElastic","easeInOutElastic","easeInBounce","easeOutBounce","easeInOutBounce"],m=0,y=0,g=0,x=0,b=0,_=0;function O(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),y=t.height-t.height/10,g=t.height/10,m=t.width/2,x=g,b=y,C()}function k(t){if((_+=1)>=140){_=0;var e=x;return x=b,b=e,void C()}if(!(_>100)){t.clear(),t.strokeWeight(0),t.textSize(16),v.forEach((function(e,n){e==r?t.fill("#FF0000"):t.fill(150),t.text(e,16,t.height/10+16*n)})),t.strokeWeight(5),t.stroke(0),t.line(m,y,m,g),t.stroke("#FF0000");var n=t.lerp(x,b,w[r](_/100));t.line(m+40,n,m-40,n)}}function C(){r=v[Math.floor(Math.random()*v.length)]}},3354:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return i},draw:function(){return o}});var r;function i(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.noFill(),t.stroke(200);var n=Math.min(8,(t.width-50)/80);r=[];for(var i=0;i<80;i++)r.push({x:t.width/2,y:t.height/2,radius:10+i*n})}function o(t){t.clear(),t.background(0),r.forEach((function(e,n){e.y+=0===n?(t.mouseY-e.y)/4:(r[n-1].y-e.y)/4,t.ellipse(e.x,e.y,e.radius,e.radius/4)}))}},3608:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return i},draw:function(){return o}});var r;function i(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.noStroke(),(r=t.createGraphics(t.windowWidth,t.windowHeight)).noStroke();for(var n=0;n<t.height;n+=2)for(var i=0;i<t.width;i+=2){a(i,n,t.noise(i/100,n/100))}}function o(t){if(!(t.frameCount%3)){t.clear(),t.image(r,0,0),r.copy(r,1,0,t.width-1,t.height,0,0,t.width-1,t.height);for(var e=t.width-1,n=(e+t.frameCount/3)/100,i=0;i<t.height;i+=2){a(e,i,t.noise(n,i/100))}}}function a(t,e,n){n<=.325?r.fill("#5e539e"):n<=.5?r.fill("#5584c5"):n<=.53125?r.fill("#7ac1a5"):n<=.5625?r.fill("#a2d7a4"):n<=.6875?r.fill("#d3d599"):n<=.775?r.fill("#808080"):r.fill("#DA3E32"),r.rect(t,e,2,2)}},7087:function(t,e,n){"use strict";n.r(e),n.d(e,{preload:function(){return a},setup:function(){return u},draw:function(){return s},mouseClicked:function(){return c}});var r,i=0,o=8;function a(t){r=t.loadImage("../sushi/sushi_oke_nigiri.png")}function u(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.imageMode(t.CENTER)}function s(t){i+=1,t.clear();for(var e=t.width/o,n=e,a=e/2,u=n/2,s=!0;u<=t.height;){for(var c=0;c<o;c++){var l=a+e*c,d=u;s?c===o-1?d+=i%n:l+=i%e:0===c?d-=i%n:l-=i%e,t.translate(l,d),t.rotate(i/100),t.image(r,0,0,e,n),t.resetMatrix()}u+=n,s=!s}}function c(t){64<(o*=2)&&(o=8)}},3471:function(t,e,n){"use strict";var r;n.r(e),n.d(e,{setup:function(){return a},draw:function(){return u}});var i=0,o=0;function a(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e);t.windowWidth,t.windowHeight;r=[{x:t.windowWidth/5,y:t.windowHeight/5},{x:t.windowWidth/5*4,y:t.windowHeight/5*4},{x:t.windowWidth/5*4,y:t.windowHeight/5},{x:t.windowWidth/5,y:t.windowHeight/5*4}]}function u(t){t.clear(),t.fill("#FF0000"),t.noStroke();var e=!0,n=!1,a=void 0;try{for(var u,s=r[Symbol.iterator]();!(e=(u=s.next()).done);e=!0){var c=u.value,l=c.x,d=c.y;t.circle(l,d,30)}}catch(v){n=!0,a=v}finally{try{e||null==s.return||s.return()}finally{if(n)throw a}}var f=r[o],h=r[(o+1)%r.length],p=t.lerp(f.x,h.x,i),w=t.lerp(f.y,h.y,i);t.circle(p,w,30),(i+=.01)>1&&(i=0,o++,o%=r.length)}},3218:function(t,e,n){"use strict";var r,i,o,a,u,s,c,l;function d(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.stroke(240),t.noFill(),t.background(0),0,r=t.random(t.width/4,t.width/2),i=t.random(t.height/4,t.height/2),o=t.random(t.TWO_PI),a=t.random(t.TWO_PI),u=t.random(.04,.08),s=t.random(.04,.08),c=t.width/2+t.cos(o)*r,l=t.height/2+t.sin(a)*i}function f(t){var e=t.width/2+t.cos(o)*r,n=t.height/2+t.sin(a)*i;t.line(c,l,e,n),o+=u,a+=s,c=e,l=n}n.r(e),n.d(e,{setup:function(){return d},draw:function(){return f}})},8902:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return a},draw:function(){return u}});var r,i=0,o=[];function a(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),o=[];for(var n=0;n<120;n++){var r=t.random(0,t.width),i=t.random(0,t.height),a=t.random(1.4,2);o.push({x:r,y:i,r:a})}}function u(t){i+=1,t.clear(),t.background(0),r||(r={x:t.random(0,t.width),y:t.random(0,t.width),r:t.random(2,4),dir:t.random(0,360),speed:t.random(3,7),life:100});var e=!0,n=!1,a=void 0;try{for(var u,s=o[Symbol.iterator]();!(e=(u=s.next()).done);e=!0){var c=u.value,l=c.x,d=c.y,f=c.r;t.circle(l,d,f)}}catch(y){n=!0,a=y}finally{try{e||null==s.return||s.return()}finally{if(n)throw a}}t.translate(t.width/2,t.height/2),t.circle(0,0,12);for(var h=7;h<=15;h++){var p=t.map(h*h*h,0,3375,0,(Math.min(t.height,t.width)-30)/2),w=i*h*.1+100*h,v=t.cos(w/100)*p,m=t.sin(w/100)*p;t.circle(v,m,8),t.push(),t.stroke(50),t.noFill(),t.circle(0,0,2*p),t.pop()}r&&(r.x+=t.cos(t.radians(r.dir))*r.speed,r.y+=t.sin(t.radians(r.dir))*r.speed,r.life--,t.circle(r.x,r.y,r.r),r.life<=0&&(r=null))}},3458:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return c},draw:function(){return l},mouseClicked:function(){return d}});var r,i=40,o=10,a=0,u=0,s=3;function c(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.stroke(80),function(t){var e=20,n=Math.floor(t.random(t.height,t.height/2));r=[{x:e,y:n}]}(t)}function l(t){if(!(++a%s)){t.clear(),t.background(230);var e=function(t){var e=1,n=Math.floor(t.random(1,100));e*=n<=50?2:n<=70?3:n<=80?5:n<=90?10:n<=95?20:n<=97?30:n<=99?40:100;var i=r[r.length-1].x+1,o=Math.floor(t.random(1,100))>=99?20*e:e,a=100===Math.floor(t.random(1,100))?2*-e:-e,u=r[r.length-1].y+Math.floor(t.random(a,o));return{x:i,y:u}}(t);if(r.push(e),t.width/2<r.length&&(r.shift(),r=r.map((function(t){return{x:t.x-1,y:t.y}}))),e.y<0&&(u-=e.y,r=r.map((function(t){return{x:t.x,y:t.y-e.y}}))),t.height-o<e.y){var n=e.y-(t.height-o);u<n?(u=0,r=r.map((function(e){return{x:e.x,y:Math.min(t.height-o,e.y-u)}}))):(u-=n,r=r.map((function(e){return{x:e.x,y:Math.min(t.height-o,e.y-n)}})))}!function(t){t.push(),t.stroke(200),t.fill(160);for(var e=t.height-o;0<=e;e-=i){var n=e+Math.floor((u+i-1)/i);t.line(10,n,t.width,n);var r=Math.floor((t.height-o-e+u+i-1)/i);t.text(r,10,n)}t.pop()}(t),function(t){for(var e=0;e<r.length-1;e++){var n=r[e],i=r[e+1];t.line(n.x,n.y,i.x,i.y)}}(t)}}function d(){3<++s&&(s=1)}},4435:function(t,e,n){"use strict";n.r(e),n.d(e,{setup:function(){return u},draw:function(){return s}});var r,i=[],o=function t(e,n,r,i,o,a,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.size=e,this.x=n,this.y=r,this.angle=i,this.dir=o,this.dist=a,this.color=u,this.hist=[],this.life=500};function a(t){var e=t.random(10,30),n=t.random(0,255),r=t.random(0,255),a=t.random(0,255),u=t.color(n,r,a);i.push(new o(e,t.random(t.width/2-100,t.width/2+100),t.random(t.height/2-100,t.height/2+100),0,t.random(0,360),t.dist(0,0,e,e),u))}function u(t,e){t.createCanvas(t.windowWidth,t.windowHeight),t.angleMode(t.DEGREES),t.rectMode(t.CENTER),t.stroke(0),t.noFill(),r=0,i=[],a(t)}function s(t){r++,t.clear(),r%100===0&&a(t),i=i.filter((function(t){return 0<=t.life}));var e=!0,n=!1,o=void 0;try{for(var u,s=i[Symbol.iterator]();!(e=(u=s.next()).done);e=!0){var c=u.value;t.width<=c.x+c.size&&(c.dir=t.random(90,270)),c.x-c.size<=0&&(c.dir=t.random(-90,90)),t.height<=c.y+c.size&&(c.dir=t.random(180,360)),c.y-c.size<=0&&(c.dir=t.random(0,180));var l=25<c.life?255:t.map(c.life,0,25,0,255);c.color.setAlpha(l),t.stroke(c.color),t.translate(c.x,c.y),t.rotate(c.angle),t.rect(0,0,2*c.size,2*c.size),t.resetMatrix();for(var d=[],f=0;f<4;f++){var h=c.angle+90*f+45,p=c.x+t.cos(h)*c.dist,w=c.y+t.sin(h)*c.dist;d.push({x:p,y:w})}c.hist.unshift(d);for(var v=c.hist[0],m=1;m<c.hist.length;m++){for(var y=c.hist[m],g=0;g<4;g++){var x=t.map(m,0,128,c.life,0);c.color.setAlpha(x),t.stroke(c.color),t.line(v[g].x,v[g].y,y[g].x,y[g].y)}v=y}c.hist.length>=128&&c.hist.pop(),c.x+=2*t.cos(c.dir),c.y+=2*t.sin(c.dir),c.angle+=1,c.life--}}catch(b){n=!0,o=b}finally{try{e||null==s.return||s.return()}finally{if(n)throw o}}}},9109:function(t,e,n){"use strict";n.r(e),n.d(e,{preload:function(){return a},setup:function(){return u},draw:function(){return s},mouseClicked:function(){return c}});var r,i=0,o=2;function a(t){r=t.loadImage("../sushi/sushi_oke_nigiri.png")}function u(t,e){t.createCanvas(t.windowWidth,t.windowHeight).parent(e),t.imageMode(t.CENTER)}function s(t){if((i+=1)<=100){t.clear();for(var e=t.width/o,n=r.height*(e/r.width),a=e/2,u=n/2;u<=t.height;){for(var s=0;s<o;s++){var c=a+e*s;t.image(r,c,u,e*(i/100),n*(i/100))}u+=n}}else;}function c(t){i=0,50<(o=Math.floor(1.5*o))&&(o=2)}},5152:function(t,e,n){t.exports=n(638)},9008:function(t,e,n){t.exports=n(5443)},417:function(t,e,n){var r={"./bounce":6967,"./bounce.tsx":6967,"./circle":5338,"./circle.tsx":5338,"./circle_random":1089,"./circle_random.tsx":1089,"./circular":8243,"./circular.tsx":8243,"./dots":5508,"./dots.tsx":5508,"./easing":2201,"./easing.tsx":2201,"./ellipse":3354,"./ellipse.tsx":3354,"./heat_map":3608,"./heat_map.tsx":3608,"./kaiten_sushi":7087,"./kaiten_sushi.tsx":7087,"./linear":3471,"./linear.tsx":3471,"./lissajous_curve":3218,"./lissajous_curve.tsx":3218,"./planet":8902,"./planet.tsx":8902,"./random_walk":3458,"./random_walk.tsx":3458,"./rectangle_fish":4435,"./rectangle_fish.tsx":4435,"./sushi":9109,"./sushi.tsx":9109};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=417}},function(t){t.O(0,[774,888,179],(function(){return e=7924,t(t.s=e);var e}));var e=t.O();_N_E=e}]);