(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{7924:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sketches/[name]",function(){return e(9027)}])},7404:function(t,n,e){"use strict";var r=e(5893),i=e(9008);n.Z=function(t){var n=t.title,e=t.description;return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{property:"description",content:e}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:e}),(0,r.jsx)("meta",{property:"og:image",content:"https://avatars.githubusercontent.com/u/739402?v=4?s=400"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("link",{rel:"icon",href:"".concat("/creative-coding/","/favicon.ico")})]})}},9027:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return s}});var r=e(5893),i=e(5152),a=e(7404),o=(0,i.default)((function(){return e.e(257).then(e.t.bind(e,4210,23))}),{loadableGenerated:{webpack:function(){return[4210]}},loading:function(){return(0,r.jsx)(r.Fragment,{})},ssr:!1}),s=!0;n.default=function(t){var n=t.name,i=e(417)("./".concat(n));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:"".concat(n," | ").concat("tic40/creative-coding"),description:"".concat(n," | ").concat("tic40/creative-coding")}),(0,r.jsx)("div",{className:"sketch-holder",children:(0,r.jsx)(o,{setup:i.setup,draw:i.draw,preload:i.preload,mouseClicked:i.mouseClicked})})]})}},1997:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return c},mouseClicked:function(){return h},setup:function(){return u}});var r,i,a,o=function(){function t(n,e,r,i,a){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=e,this.vx=r,this.vy=i,this.p=a}return t.prototype.update=function(){this.x+=this.vx,this.y+=this.vy,this.x<=0?(this.x=0,this.vx*=-1):this.x>=this.p.width-1&&(this.x=this.p.width-1,this.vx*=-1),this.y<=0?(this.y=0,this.vy*=-1):this.y>=this.p.height-1&&(this.y=this.p.height-1,this.vy*=-1)},t.createRandom=function(t){return new this(t.random(0,t.width),t.random(0,t.height),t.random(-3,3),t.random(-3,3),t)},t}(),s=!1;function u(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.noFill(),r=o.createRandom(t),i=o.createRandom(t),a={r:t.random(255),g:t.random(255),b:t.random(255)}}function c(t){r.update(),i.update(),function(t){a.r+=t.random([-2,2]),a.g+=t.random([-2,2]),a.b+=t.random([-2,2]),a.r=t.constrain(a.r,0,255),a.g=t.constrain(a.g,0,255),a.b=t.constrain(a.b,0,255)}(t),t.stroke(a.r,a.g,a.b,100),t.line(r.x,r.y,i.x,i.y)}function h(t){s=!s,t.clear(),s?t.background(180):t.background(255)}},9738:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return h},mouseClicked:function(){return f},setup:function(){return c}});var r,i,a,o=-.8,s=["#de9610","#c93a40","#d06d8c","#fff001","#65ace4","#a0c238","#56a764","#d16b16","#0074bf","#9460a0","#cc528b","#f2cf01"],u=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n.x,this.y=n.y,this.vx=n.vx,this.vy=n.vy,this.r=n.r,this.color=n.color}var n=t.prototype;return n.update=function(){this.vy+=.1,this.x+=this.vx,this.y+=this.vy;var t=this.r;this.x<t&&(this.x=t,this.vx*=o);var n=i.width-this.r;this.x>=n&&(this.x=n-1,this.vx*=o);var e=a-this.r;this.y>=e&&(this.y=e-1,this.vy*=o)},n.draw=function(){i.fill(this.color),i.circle(this.x,this.y,2*this.r)},t}();function c(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),i=t,function(){r=[],a=i.height-i.height/10;for(var t=0;t<120;t++){var n=new u({x:i.random(i.width),y:i.random(-i.width,0),vx:i.random(-3,3),vy:i.random(.1,5),r:i.random([6,8,10,12,14,16,18,20]),color:i.random(s)});r.push(n)}}()}function h(t){t.clear(),t.fill(220),t.rect(0,a,t.width,a),t.noStroke(),r.forEach((function(t){t.update(),t.draw()}))}function f(){r.forEach((function(t){t.vy=i.random(-8,-4)}))}},3906:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.r(n),e.d(n,{draw:function(){return f},mouseClicked:function(){return l},setup:function(){return h}});var i,a,o=function(){function t(n){r(this,t),this.baseBulletSpeed=5,this.baseBulletSize=8,this.moveSpeed=5,this.x=n.x,this.y=n.y,this.p=n.p,this.bullets=[],this.destX=this.x,this.destY=this.y,this.shotType=n.shotType||"aim"}var n=t.prototype;return n.shoot=function(){"3way"===this.shotType?this.nWayShot(2):"5way"===this.shotType?this.nWayShot(3):"allRound"===this.shotType?this.allRoundShot():"aimBig"===this.shotType?this.aimShot(10*this.baseBulletSize,this.baseBulletSpeed):this.aimShot()},n.aimShot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.baseBulletSize,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.baseBulletSpeed,e=this.p,r=new(this.bullet())({x:this.x,y:this.y,angle:e.atan2(e.mouseY-this.y,e.mouseX-e.width/2),speed:n,size:t,color:"#65ace4"});this.bullets.push(r)},n.allRoundShot=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.baseBulletSize,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.baseBulletSpeed,e=this.p,r=0;r<e.TWO_PI;r+=.2){var i=new(this.bullet())({x:this.x,y:this.y,angle:r,speed:n,size:t,color:"#65ace4"});this.bullets.push(i)}},n.nWayShot=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.baseBulletSize,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.baseBulletSpeed,r=this.p,i=r.atan2(r.mouseY-this.y,r.mouseX-r.width/2),a=[-1,1],o=0;o<t;o++)for(var s=0;s<(0===o?1:2);s++){var u=i+.1*o*a[s],c=new(this.bullet())({x:this.x,y:this.y,angle:u,speed:e,size:n,color:"#65ace4"});this.bullets.push(c)}},n.update=function(){var t=this,n=this.p;Math.abs(this.x-this.destX)<.01&&Math.abs(this.y-this.destY)<.01&&(this.destX=n.constrain(this.x+n.random(-30,30),0,n.width),this.destY=n.constrain(this.y+n.random(-30,30),0,n.height));var e=n.createVector(this.x,this.y);e.lerp(this.destX,this.destY,0,.1),this.x=e.x,this.y=e.y,this.bullets.forEach((function(t){return t.update(n)})),this.bullets=this.bullets.filter((function(n){return t.inScreen(n.x,n.y)}))},n.draw=function(){var t=this;this.p.fill("#65ace4"),this.p.rect(this.x-5,this.y-5,10,10),this.bullets.forEach((function(n){return n.draw(t.p)}))},n.inScreen=function(t,n){return t>=0&&t<this.p.width&&n>=0&&n<this.p.height},n.bullet=function(){return u},t}(),s=function(){function t(n,e,i){r(this,t),this.x=n,this.y=e,this.p=i,this.bullets=[]}var n=t.prototype;return n.shoot=function(){this.normalShot()},n.normalShot=function(){var t=this.p,n=new(this.bullet())({x:this.x,y:this.y,angle:t.radians(-90),speed:8,size:8,color:"#56a764"});this.bullets.push(n),console.log(n.angle)},n.update=function(){var t=this,n=this.p;this.x=n.mouseX,this.y=n.mouseY,this.bullets.forEach((function(t){return t.update(n)})),this.bullets=this.bullets.filter((function(n){return t.inScreen(n.x,n.y)}))},n.draw=function(){var t=this;this.p.fill("#56a764"),this.p.rect(this.p.mouseX-5,this.p.mouseY-10,10,10),this.bullets.forEach((function(n){return n.draw(t.p)}))},n.bullet=function(){return u},n.inScreen=function(t,n){return t>=0&&t<this.p.width&&n>=0&&n<this.p.height},t}(),u=function(){function t(n){r(this,t),this.x=n.x,this.y=n.y,this.angle=n.angle,this.speed=n.speed,this.size=n.size||8,this.color=n.color||"#FFFFFF"}var n=t.prototype;return n.update=function(t){this.x+=t.cos(this.angle)*this.speed,this.y+=t.sin(this.angle)*this.speed},n.draw=function(t){t.noStroke(),t.fill(this.color),t.circle(this.x,this.y,this.size)},t}(),c=["aim","3way","5way","allRound","aimBig"];function h(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),i=new o({x:t.width/2,y:t.height/5,p:t,shotType:t.random(c)}),a=new s(t.width/2,t.height-10,t)}function f(t){t.clear(),t.frameCount%200===0&&(i.shotType=t.random(c)),t.frameCount%("aimBig"===i.shotType?20:10)===0&&i.shoot(),i.update(),a.update(),i.draw(),a.draw()}function l(){a.shoot()}},574:function(t,n,e){"use strict";var r;function i(t,n){r=[],t.createCanvas(t.windowWidth,t.windowHeight).parent(n)}function a(t){t.clear(),r.push({x:t.mouseX,y:t.mouseY,size:10}),r=r.slice(-500);var n=!0,e=!1,i=void 0;try{for(var a,o=r[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){a.value.size+=.5}}catch(d){e=!0,i=d}finally{try{n||null==o.return||o.return()}finally{if(e)throw i}}var s=!0,u=!1,c=void 0;try{for(var h,f=r[Symbol.iterator]();!(s=(h=f.next()).done);s=!0){var l=h.value;t.circle(l.x,l.y,l.size)}}catch(d){u=!0,c=d}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}}e.r(n),e.d(n,{draw:function(){return a},setup:function(){return i}})},2761:function(t,n,e){"use strict";var r;function i(t,n){r=[],t.createCanvas(t.windowWidth,t.windowHeight).parent(n)}function a(t){t.clear(),r.push({x:t.random(t.windowWidth),y:t.random(t.windowHeight),size:t.random(10,100)});var n=!0,e=!1,i=void 0;try{for(var a,o=r[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){a.value.size-=.5}}catch(d){e=!0,i=d}finally{try{n||null==o.return||o.return()}finally{if(e)throw i}}r=r.filter((function(t){return 0<t.size}));var s=!0,u=!1,c=void 0;try{for(var h,f=r[Symbol.iterator]();!(s=(h=f.next()).done);s=!0){var l=h.value;t.circle(l.x,l.y,l.size)}}catch(d){u=!0,c=d}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}}e.r(n),e.d(n,{draw:function(){return a},setup:function(){return i}})},8121:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return d},mouseClicked:function(){return p},setup:function(){return l}});var r,i,a,o,s,u,c=0,h=!0,f=!1;function l(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),y(t)}function d(t){c++,t.clear(),t.background(0),function(t){for(var n=[],e=[],o=0;o<t.TWO_PI;o+=t.TWO_PI/30)if(h){var s=t.width/2+t.cos(r+o)*i,u=t.height/4+t.sin(r+o)*a;t.circle(s,u,8),t.circle(s,t.height-u,8),n.push({x:s,y:u}),e.push({x:s,y:t.height-u})}else{var c=t.width/4+t.cos(r+o)*i,l=t.height/2+t.sin(r+o)*a;t.circle(c,l,8),t.circle(t.width-c,t.height-l,8),n.push({x:c,y:l}),e.push({x:t.width-c,y:t.height-l})}for(var d=0;d<3;d++){var p=e.pop();p&&e.unshift(p)}if(f){t.push(),t.stroke(240),t.noFill();for(var y=0;y<n.length;y++)t.line(n[y].x,n[y].y,e[y].x,e[y].y);t.pop()}}(t),r+=.02,i+=o?u:-u,a-=s?u:-u,300<c&&y(t)}function p(){f=!f}function y(t){c=0,i=t.random(-150,150),a=0,r=0,u=t.random(.4,1.2),o=Math.floor(t.random(0,10))%2===0,s=Math.floor(t.random(0,10))%2===0,h=Math.floor(t.random(0,10))%2===0}},6257:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return a},setup:function(){return i}});var r=0;function i(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.colorMode(t.HSB)}function a(t){r++,r%=t.height/19,t.clear(),t.background(0);for(var n=t.dist(0,0,t.width/2,t.height/2),e=0;e<20;e++)for(var i=0;i<20;i++){var a=t.width/19*i,o=t.height/19*e,s=t.dist(a,o,t.mouseX,t.mouseY),u=t.map(s,0,n,0,360);t.fill(u,255,255),t.noStroke(),t.circle(a,o+r,10)}}},8003:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return C},setup:function(){return k}});var r,i,a,o,s=Math.pow,u=Math.sqrt,c=Math.sin,h=Math.cos,f=Math.PI,l=1.70158,d=1.525*l,p=l+1,y=2*f/3,v=2*f/4.5,w=function(t){var n=7.5625,e=2.75;return t<1/e?n*t*t:t<2/e?n*(t-=1.5/e)*t+.75:t<2.5/e?n*(t-=2.25/e)*t+.9375:n*(t-=2.625/e)*t+.984375},m={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return 1-(1-t)*(1-t)},easeInOutQuad:function(t){return t<.5?2*t*t:1-s(-2*t+2,2)/2},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1-s(1-t,3)},easeInOutCubic:function(t){return t<.5?4*t*t*t:1-s(-2*t+2,3)/2},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1-s(1-t,4)},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-s(-2*t+2,4)/2},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1-s(1-t,5)},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1-s(-2*t+2,5)/2},easeInSine:function(t){return 1-h(t*f/2)},easeOutSine:function(t){return c(t*f/2)},easeInOutSine:function(t){return-(h(f*t)-1)/2},easeInExpo:function(t){return 0===t?0:s(2,10*t-10)},easeOutExpo:function(t){return 1===t?1:1-s(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:t<.5?s(2,20*t-10)/2:(2-s(2,-20*t+10))/2},easeInCirc:function(t){return 1-u(1-s(t,2))},easeOutCirc:function(t){return u(1-s(t-1,2))},easeInOutCirc:function(t){return t<.5?(1-u(1-s(2*t,2)))/2:(u(1-s(-2*t+2,2))+1)/2},easeInBack:function(t){return p*t*t*t-l*t*t},easeOutBack:function(t){return 1+p*s(t-1,3)+l*s(t-1,2)},easeInOutBack:function(t){return t<.5?s(2*t,2)*(7.189819*t-d)/2:(s(2*t-2,2)*((d+1)*(2*t-2)+d)+2)/2},easeInElastic:function(t){return 0===t?0:1===t?1:-s(2,10*t-10)*c((10*t-10.75)*y)},easeOutElastic:function(t){return 0===t?0:1===t?1:s(2,-10*t)*c((10*t-.75)*y)+1},easeInOutElastic:function(t){return 0===t?0:1===t?1:t<.5?-s(2,20*t-10)*c((20*t-11.125)*v)/2:s(2,-20*t+10)*c((20*t-11.125)*v)/2+1},easeInBounce:function(t){return 1-w(1-t)},easeOutBounce:w,easeInOutBounce:function(t){return t<.5?(1-w(1-2*t))/2:(1+w(2*t-1))/2}},x=["linear","easeInQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInBack","easeOutBack","easeInOutBack","easeInElastic","easeOutElastic","easeInOutElastic","easeInBounce","easeOutBounce","easeInOutBounce"],g=0,b=0;function k(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),o=[],x.forEach((function(n,e){var r=t.createButton(n);r.position(10,16*(e+1)),r.mouseClicked((function(){a=n,b=0})),o[e]=r})),r=t.height-t.height/10,i=t.height/10,g=t.width/2,S()}function C(t){var n;if((b+=1)>=140)return b=0,r=(n=[i,r])[0],i=n[1],void S();if(!(b>100)){t.clear(),t.strokeWeight(0),x.forEach((function(t,n){o[n].style("color: ".concat(t==a?"red":"#000"))})),t.strokeWeight(5),t.stroke(0),t.line(g,r,g,i),t.stroke("red");var e=t.lerp(r,i,m[a](b/100));t.line(g+40,e,g-40,e)}}function S(){a=x[Math.floor(Math.random()*x.length)]}},8500:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return a},setup:function(){return i}});var r;function i(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.noFill(),t.stroke(200);var e=Math.min(8,(t.width-50)/80);r=[];for(var i=0;i<80;i++)r.push({x:t.width/2,y:t.height/2,radius:10+i*e})}function a(t){t.clear(),t.background(0),r.forEach((function(n,e){n.y+=0===e?(t.mouseY-n.y)/4:(r[e-1].y-n.y)/4,t.ellipse(n.x,n.y,n.radius,n.radius/4)}))}},5238:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return a},setup:function(){return i}});var r;function i(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.noStroke(),(r=t.createGraphics(t.windowWidth,t.windowHeight)).noStroke();for(var e=0;e<t.height;e+=2)for(var i=0;i<t.width;i+=2){o(i,e,t.noise(i/100,e/100))}}function a(t){if(!(t.frameCount%3)){t.clear(),t.image(r,0,0),r.copy(r,1,0,t.width-1,t.height,0,0,t.width-1,t.height);for(var n=t.width-1,e=(n+t.frameCount/3)/100,i=0;i<t.height;i+=2){o(n,i,t.noise(e,i/100))}}}function o(t,n,e){e<=.325?r.fill("#5e539e"):e<=.5?r.fill("#5584c5"):e<=.53125?r.fill("#7ac1a5"):e<=.5625?r.fill("#a2d7a4"):e<=.6875?r.fill("#d3d599"):e<=.775?r.fill("#808080"):r.fill("#DA3E32"),r.rect(t,n,2,2)}},9388:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return u},mouseClicked:function(){return c},preload:function(){return o},setup:function(){return s}});var r,i=0,a=8;function o(t){r=t.loadImage("../sushi/sushi_oke_nigiri.png")}function s(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.imageMode(t.CENTER)}function u(t){i+=1,t.clear();for(var n=t.width/a,e=n,o=n/2,s=e/2,u=!0;s<=t.height;){for(var c=0;c<a;c++){var h=o+n*c,f=s;u?c===a-1?f+=i%e:h+=i%n:0===c?f-=i%e:h-=i%n,t.translate(h,f),t.rotate(i/100),t.image(r,0,0,n,e),t.resetMatrix()}s+=e,u=!u}}function c(t){64<(a*=2)&&(a=8)}},4921:function(t,n,e){"use strict";var r,i,a;e.r(n),e.d(n,{draw:function(){return h},mouseClicked:function(){return f},setup:function(){return s}});var o=[];function s(t,n){(r=t).createCanvas(r.windowWidth,r.windowHeight).parent(n),r.angleMode(r.DEGREES),r.stroke(0),r.noFill(),a=0,i=3,o=[];for(var e={x:0,y:r.height/4*3},s={x:r.width,y:r.height/4*3},c=1;c<=5;c++)o[c]=[],u(c,e,s,c)}function u(t,n,e,i){if(0!==t){var a=c(n,e,1/3),s=c(n,e,2/3),h=r.atan2(s.y-a.y,s.x-a.x)-60,f=r.dist(a.x,a.y,s.x,s.y),l={x:a.x+r.cos(h)*f,y:a.y+r.sin(h)*f};u(t-1,n,a,i),u(t-1,a,l,i),u(t-1,l,s,i),u(t-1,s,e,i)}else o[i].push({a:n,b:e})}function c(t,n,e){return{x:r.lerp(t.x,n.x,e),y:r.lerp(t.y,n.y,e)}}function h(t){if(!(o[i].length<=a)){var n=o[i][a],e=n.a,r=n.b;t.line(e.x,e.y,r.x,r.y),a++}}function f(){i=5<=i?1:i+1,a=0,r.clear(),r.stroke(0),r.noFill()}},4743:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return s},mouseClicked:function(){return u},setup:function(){return o}});var r,i=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=n,this.p=e,this.drawData=[],this.stack=[],this.command=this.generateCommand(this.data.start,0),this.prepare()}var n=t.prototype;return n.prepare=function(){var t=this.data.startAngle,n=this.data.x,e=this.data.y,r=this.p,i=!0,a=!1,o=void 0;try{for(var s,u=this.command[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;switch(c){case"+":t-=this.data.angle;break;case"-":t+=this.data.angle;break;case"[":this.stack.push({angle:t,x:n,y:e});break;case"]":var h,f=this.stack.pop();f&&(t=(h=[f.angle,f.x,f.y])[0],n=h[1],e=h[2]);break;case"F":var l=n+r.cos(t)*this.data.length,d=e+r.sin(t)*this.data.length;this.drawData.push({x:n,y:e,tx:l,ty:d}),n=l,e=d;break;case"X":break;default:console.error("illegal command: ".concat(c))}}}catch(p){a=!0,o=p}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}},n.generateCommand=function(t,n){var e=this.data;if(e.depth<=n)return t;var r=Array.from(t).map((function(t){return e.rules[t]||t})).join("");return this.generateCommand(r,n+1)},n.draw=function(t){var n=this.p;n.stroke("#42692F"),n.noFill();for(var e=0;e<t;e++){if(0==this.drawData.length)return;var r=this.drawData.shift();r&&n.line(r.x,r.y,r.tx,r.ty)}},t}();function a(t){var n=t.random([{length:1,depth:8},{length:2,depth:7},{length:2,depth:6},{length:3,depth:6},{length:3,depth:5},{length:4,depth:5},{length:5,depth:5}]),e=n.length,a=n.depth,o={start:"X",rules:{X:t.random(["F-[[X]+X]+F[+FX]-X","F+[[X]-X]-F[-FX]+X"]),F:"FF"},length:e,depth:a,x:t.width/2,y:t.height,startAngle:-90,angle:t.random(20,25)};r=new i(o,t)}function o(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.angleMode(t.DEGREES),a(t)}function s(t){var n=r.drawData.length,e=10;1e4<n?e=500:5e3<n?e=100:1e3<n&&(e=50),r.draw(e)}function u(t){t.clear(),a(t)}},7061:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.r(n),e.d(n,{draw:function(){return k},mouseClicked:function(){return B},setup:function(){return b}});var a,o,s,u,c,h,f,l,d,p="#009ad6",y=0,v=1,w=10,m="background: #4CAF50; opacity: 0.9; color: white; padding: 6px; border: 1px solid #FFF;",x=1,g=1;function b(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),(c=t.createButton("Start")).position(5,5),c.mousePressed(_),c.style(m),(h=t.createButton("Clear")).position(5,55),h.mousePressed((function(){return I(t)})),h.style(m),(f=t.createButton("Random")).position(5,105),f.mousePressed((function(){return F(t)})),f.style(m),(l=t.createButton("Step")).position(5,155),l.mousePressed((function(){return S(t)})),l.style(m),(d=t.createButton("Fast")).position(5,205),d.mousePressed(O),d.style(m),I(t),F(t),E(t)}function k(t){g||1==x&&t.frameCount%10||t.frameCount%2||S(t)}function C(t,n){for(var e=0,r=-1;r<=1;r++)for(var i=-1;i<=1;i++){var u=t+r,c=n+i;u<0||o<=u||c<0||a<=c||(0===r&&0===i||s[u][c]===v&&e++)}return e}function S(t){for(var n=0;n<o;n++)for(var e=0;e<a;e++){var r=C(n,e);s[n][e]===y?3===r&&(u[n][e]=v):u[n][e]=[2,3].includes(r)?v:y}E(t)}function E(t){t.clear();for(var n=0;n<o;n++)for(var e=0;e<a;e++){u[n][e]===v?t.fill(p):t.noFill();var r=n*w,c=e*w;t.rect(c,r,w,w)}s=u.map((function(t){return i(t)}))}function O(){x^=1,d.html(x?"Fast":"Slow")}function _(){g^=1,c.html(g?"Start":"Stop")}function I(t){o=t.round(t.height/w),a=t.round(t.width/w),s=new Array(o).fill(0).map((function(){return new Array(a).fill(0)})),u=s.map((function(t){return i(t)}))}function F(t){I(t);for(var n=0;n<o;n++)for(var e=0;e<a;e++){var r=t.random(100)>50?v:y;s[n][e]=u[n][e]=r}}function B(t){var n=t.floor(t.mouseX/w),e=t.floor(t.mouseY/w);u[e][n]=u[e][n]===y?v:y,E(t)}},4027:function(t,n,e){"use strict";var r,i;function a(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),r=30,i=t.width-30}function o(t){t.clear();var n,e=t.frameCount%100/100;t.rect(10,t.height/2-50,10,100),t.rect(t.width-20,t.height/2-50,10,100),0===e&&(r=(n=[i,r])[0],i=n[1]);var a=t.lerp(r,i,e);t.circle(a,t.height/2,30)}e.r(n),e.d(n,{draw:function(){return o},setup:function(){return a}})},9125:function(t,n,e){"use strict";var r,i,a,o,s,u,c,h;function f(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.stroke(240),t.noFill(),t.background(0),0,r=t.random(t.width/4,t.width/2),i=t.random(t.height/4,t.height/2),a=t.random(t.TWO_PI),o=t.random(t.TWO_PI),s=t.random(.04,.08),u=t.random(.04,.08),c=t.width/2+t.cos(a)*r,h=t.height/2+t.sin(o)*i}function l(t){var n=t.width/2+t.cos(a)*r,e=t.height/2+t.sin(o)*i;t.line(c,h,n,e),a+=s,o+=u,c=n,h=e}e.r(n),e.d(n,{draw:function(){return l},setup:function(){return f}})},1811:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return E},setup:function(){return g}});var r,i,a,o,s,u,c,h,f,l,d,p={floor:"#FFF",wall:"#333",start:"#00A000",goal:"red"},y="floor",v="wall",w=12,m="background: #4CAF50; opacity: 0.9; color: white; padding: 6px; border: 1px solid #FFF;",x=[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];function g(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),(u=t.createButton("Solve")).position(5,5),u.mousePressed((function(){d?b(t):(f=new Array(i).fill(1/0).map((function(){return new Array(r).fill(1/0)})),function(){f[o.y][o.x]=0;var t=[];for(t.push({x:o.x,y:o.y});t.length;){var n=t.pop();if(n){var e=n.x,r=n.y,i=f[r][e]+1,s=!0,u=!1,c=void 0;try{for(var h,l=x[Symbol.iterator]();!(s=(h=l.next()).done);s=!0){var d=h.value,p=d.x,y=d.y,w=e+p,m=r+y;a[m][w]!==v&&(f[m][w]<=i||(f[m][w]=i,t.push({x:w,y:m})))}}catch(g){u=!0,c=g}finally{try{s||null==l.return||l.return()}finally{if(u)throw c}}}}}(),d=!0,l=[],k(s.x,s.y)),u.html(d?"Reset":"Solve")})),u.style(m),(c=t.createButton("\uff0b")).position(64,5),c.mousePressed((function(){2!==w&&(w-=2,b(t))})),c.style(m),(h=t.createButton("\u30fc")).position(96,5),h.mousePressed((function(){30!==w&&(w+=2,b(t))})),h.style(m),b(t)}function b(t){i=t.round(t.height/w),r=t.round(t.width/w),i%2==0&&i--,r%2==0&&r--,d=!1,function(t){a=new Array(i).fill(y).map((function(){return new Array(r).fill(y)}));for(var n=0;n<i;n++)for(var e=0;e<r;e++)0!==e&&e!==r-1||(a[n][e]=v),0!==n&&n!==i-1||(a[n][e]=v),e%2===0&&n%2===0&&(a[n][e]=v);for(var u=2;u<i-1;u+=2)for(var c=2;c<r-1;c+=2){var h=[{x:1,y:0},{x:0,y:1},{x:-1,y:0}];for(2===u&&h.push({x:0,y:-1});;){var f=t.random(h),l=c+f.x,d=u+f.y;if(0<=l&&l<r&&0<=d&&d<i&&a[d][l]===y){a[d][l]=v;break}}}t.clear();for(var w=0;w<i;w++)for(var m=0;m<r;m++)S(t,m,w,p[a[w][m]]);(function(t){for(;o={x:t.floor(t.random(1,r-2)),y:t.floor(t.random(1,i-2))},a[o.y][o.x]!==y;);for(;s={x:t.floor(t.random(1,r-2)),y:t.floor(t.random(1,i-2))},a[s.y][s.x]!==y||C(s.x,s.y););})(t),S(t,o.x,o.y,p.start),S(t,s.x,s.y,p.goal)}(t)}function k(t,n){if(!C(t,n)){l.push({x:t,y:n});var e={cost:1/0,x:-1,y:-1},r=!0,i=!1,a=void 0;try{for(var o,s=x[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=u.x,h=u.y,d=t+c,p=n+h;f[p][d]<e.cost&&(e.cost=f[p][d],e.x=d,e.y=p)}}catch(y){i=!0,a=y}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}k(e.x,e.y)}}function C(t,n){return o.x===t&&o.y===n}function S(t,n,e,r){var i=n*w,a=e*w;t.fill(r),t.noStroke(),t.rect(i,a,w,w)}function E(t){if(d){var n=l.pop();if(n){var e=n.x,r=n.y;C(e,r)||function(t,n){return s.x===t&&s.y===n}(e,r)||S(t,e,r,"#67A8DD")}}}},4154:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return c},mouseClicked:function(){return h},setup:function(){return u}});var r=function(){function t(n,e,r,i,a,o){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=e,this.vector=r,this.r=i,this.life=500,this.color=a,this.type=o}var n=t.prototype;return n.update=function(){this.x+=this.vector.x,this.y+=this.vector.y,this.life--},n.draw=function(t){t.fill(this.color),"rect"===this.type?t.rect(this.x,this.y,2*this.r,2*this.r,2):"triangle"===this.type?t.triangle(this.x,this.y,this.x+this.r,this.y-1.5*this.r,this.x+2*this.r,this.y):t.circle(this.x,this.y,2*this.r)},t}(),i=!1,a=[],o=["#de9610","#c93a40","#d06d8c","#fff001","#65ace4","#a0c238","#56a764","#d16b16","#0074bf","#9460a0","#cc528b","#f2cf01"],s=["circle","rect","triangle"];function u(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),f(t)}function c(t){t.clear(),i?t.background(0):t.background(250),t.noStroke(),t.frameCount%100===0&&(f(t),a=a.filter((function(t){return 0<t[0].life}))),a.forEach((function(n){n.forEach((function(n){n.update(),n.draw(t)}))}))}function h(){i=!i}function f(t){for(var n=[],e={x:t.random(0,t.width),y:t.random(0,t.height)},i=0;i<100;i++){var u=t.random(-5,5),c=t.random(-5,5),h=t.createVector(u,c),f=new r(e.x,e.y,h,t.random(5,15),t.random(o),t.random(s));n.push(f)}a.push(n)}},285:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return s},setup:function(){return o}});var r,i=0,a=[];function o(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),a=[];for(var e=0;e<120;e++){var r=t.random(0,t.width),i=t.random(0,t.height),o=t.random(1.4,2);a.push({x:r,y:i,r:o})}}function s(t){i+=1,t.clear(),t.background(0),r||(r={x:t.random(0,t.width),y:t.random(0,t.width),r:t.random(2,4),dir:t.random(0,360),speed:t.random(3,7),life:100});var n=!0,e=!1,o=void 0;try{for(var s,u=a[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){var c=s.value,h=c.x,f=c.y,l=c.r;t.circle(h,f,l)}}catch(m){e=!0,o=m}finally{try{n||null==u.return||u.return()}finally{if(e)throw o}}t.translate(t.width/2,t.height/2),t.circle(0,0,12);for(var d=7;d<=15;d++){var p=t.map(d*d*d,0,3375,0,(Math.min(t.height,t.width)-30)/2),y=i*d*.1+100*d,v=t.cos(y/100)*p,w=t.sin(y/100)*p;t.circle(v,w,8),t.push(),t.stroke(50),t.noFill(),t.circle(0,0,2*p),t.pop()}r&&(r.x+=t.cos(t.radians(r.dir))*r.speed,r.y+=t.sin(t.radians(r.dir))*r.speed,r.life--,t.circle(r.x,r.y,r.r),r.life<=0&&(r=null))}},9374:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return h},mouseClicked:function(){return f},setup:function(){return c}});var r,i=40,a=10,o=0,s=0,u=3;function c(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.stroke(80),function(t){var n=20,e=Math.floor(t.random(t.height,t.height/2));r=[{x:n,y:e}]}(t)}function h(t){if(!(++o%u)){t.clear(),t.background(230);var n=function(t){var n=1,e=Math.floor(t.random(1,100));n*=e<=50?2:e<=70?3:e<=80?5:e<=90?10:e<=95?20:e<=97?30:e<=99?40:100;var i=r[r.length-1].x+1,a=Math.floor(t.random(1,100))>=99?20*n:n,o=100===Math.floor(t.random(1,100))?2*-n:-n,s=r[r.length-1].y+Math.floor(t.random(o,a));return{x:i,y:s}}(t);if(r.push(n),t.width/2<r.length&&(r.shift(),r=r.map((function(t){return{x:t.x-1,y:t.y}}))),n.y<0&&(s-=n.y,r=r.map((function(t){return{x:t.x,y:t.y-n.y}}))),t.height-a<n.y){var e=n.y-(t.height-a);s<e?(s=0,r=r.map((function(n){return{x:n.x,y:Math.min(t.height-a,n.y-s)}}))):(s-=e,r=r.map((function(n){return{x:n.x,y:Math.min(t.height-a,n.y-e)}})))}!function(t){t.push(),t.stroke(200),t.fill(160);for(var n=t.height-a;0<=n;n-=i){var e=n+Math.floor((s+i-1)/i);t.line(10,e,t.width,e);var r=Math.floor((t.height-a-n+s+i-1)/i);t.text(r,10,e)}t.pop()}(t),function(t){for(var n=0;n<r.length-1;n++){var e=r[n],i=r[n+1];t.line(e.x,e.y,i.x,i.y)}}(t)}}function f(){3<++u&&(u=1)}},6519:function(t,n,e){"use strict";var r,i,a;e.r(n),e.d(n,{draw:function(){return h},mouseClicked:function(){return f},setup:function(){return s}});var o=[];function s(t,n){(r=t).createCanvas(r.windowWidth,r.windowHeight).parent(n),r.angleMode(r.DEGREES),r.noStroke(),r.fill(0),a=0,i=3,o=[];for(var e=Math.min(r.height,r.width)-20,s={x:(r.width-e)/2,y:r.height-20},c={x:s.x+e,y:s.y},h={x:s.x+r.cos(-60)*e,y:s.y+r.sin(-60)*e},f=1;f<=8;f++)o[f]=[],u(f,s,c,h,f)}function u(t,n,e,r,i){if(0!==t){var a=c(n,e,.5),s=c(e,r,.5),h=c(r,n,.5);u(t-1,n,a,h,i),u(t-1,a,e,s,i),u(t-1,h,s,r,i)}else o[i].push({a:n,b:e,c:r})}function c(t,n,e){return{x:r.lerp(t.x,n.x,e),y:r.lerp(t.y,n.y,e)}}function h(t){if(!(o[i].length<=a))for(var n=0;n<(i<6?1:6);n++){if(o[i].length<=a)return;var e=o[i][a],r=e.a,s=e.b,u=e.c;t.triangle(r.x,r.y,s.x,s.y,u.x,u.y),a++}}function f(){i=8<=i?1:i+1,a=0,r.clear(),r.noStroke(),r.fill(0)}},9730:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return s},mouseClicked:function(){return u},setup:function(){return o}});var r,i=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=n,this.p=e,this.drawData=[],this.stack=[],this.command=this.generateCommand(this.data.start,0),this.prepare()}var n=t.prototype;return n.prepare=function(){var t=this.data.startAngle,n=this.data.x,e=this.data.y,r=this.p,i=!0,a=!1,o=void 0;try{for(var s,u=this.command[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){switch(s.value){case"+":t-=this.data.angle;break;case"-":t+=this.data.angle;break;case"[":this.stack.push({angle:t,x:n,y:e});break;case"]":var c,h=this.stack.pop();h&&(t=(c=[h.angle,h.x,h.y])[0],n=c[1],e=c[2]);break;case"F":var f=n+r.cos(t)*this.data.length,l=e+r.sin(t)*this.data.length;this.drawData.push({x:n,y:e,tx:f,ty:l}),n=f,e=l}}}catch(d){a=!0,o=d}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}},n.generateCommand=function(t,n){var e=this.data;if(e.depth<=n)return t;var r=Array.from(t).map((function(t){return e.rules[t]||t})).join("");return this.generateCommand(r,n+1)},n.draw=function(t){var n=this.p;n.stroke(0);for(var e=0;e<t;e++){if(0==this.drawData.length)return;var r=this.drawData.shift();r&&n.line(r.x,r.y,r.tx,r.ty)}},t}();function a(t){r=new i({start:"X",rules:{X:"+YF-XFX-FY+",Y:"-XF+YFY+FX-"},length:5,depth:6,x:10,y:10,startAngle:90,angle:90},t)}function o(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.angleMode(t.DEGREES),a(t)}function s(t){t.stroke(0),t.noFill();var n=r.drawData.length,e=10;5e3<n?e=50:1e3<n&&(e=25),r.draw(e)}function u(t){t.clear(),a(t)}},6915:function(t,n,e){"use strict";e.r(n),e.d(n,{draw:function(){return u},mouseClicked:function(){return c},preload:function(){return o},setup:function(){return s}});var r,i=0,a=2;function o(t){r=t.loadImage("../sushi/sushi_oke_nigiri.png")}function s(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.imageMode(t.CENTER)}function u(t){if((i+=1)<=100){t.clear();for(var n=t.width/a,e=r.height*(n/r.width),o=n/2,s=e/2;s<=t.height;){for(var u=0;u<a;u++){var c=o+n*u;t.image(r,c,s,n*(i/100),e*(i/100))}s+=e}}else;}function c(t){i=0,50<(a=Math.floor(1.5*a))&&(a=2)}},417:function(t,n,e){var r={"./bounce":1997,"./bounce.tsx":1997,"./bouncing_ball":9738,"./bouncing_ball.tsx":9738,"./bullet":3906,"./bullet.tsx":3906,"./circle":574,"./circle.tsx":574,"./circle_random":2761,"./circle_random.tsx":2761,"./circular":8121,"./circular.tsx":8121,"./dots":6257,"./dots.tsx":6257,"./easing":8003,"./easing.tsx":8003,"./ellipse":8500,"./ellipse.tsx":8500,"./heat_map":5238,"./heat_map.tsx":5238,"./kaiten_sushi":9388,"./kaiten_sushi.tsx":9388,"./koch_curve":4921,"./koch_curve.tsx":4921,"./l_system_tree":4743,"./l_system_tree.tsx":4743,"./life_game":7061,"./life_game.tsx":7061,"./linear":4027,"./linear.tsx":4027,"./lissajous_curve":9125,"./lissajous_curve.tsx":9125,"./maze":1811,"./maze.tsx":1811,"./particle":4154,"./particle.tsx":4154,"./planet":285,"./planet.tsx":285,"./random_walk":9374,"./random_walk.tsx":9374,"./sierpinski_gasket":6519,"./sierpinski_gasket.tsx":6519,"./space_filling_curve":9730,"./space_filling_curve.tsx":9730,"./sushi":6915,"./sushi.tsx":6915};function i(t){var n=a(t);return e(n)}function a(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=a,t.exports=i,i.id=417}},function(t){t.O(0,[947,774,888,179],(function(){return n=7924,t(t.s=n);var n}));var n=t.O();_N_E=n}]);