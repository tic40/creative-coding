(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{7924:function(t,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sketches/[name]",function(){return i(9027)}])},7404:function(t,n,i){"use strict";var e=i(5893),r=i(9008);n.Z=function(t){var n=t.title,i=t.description;return(0,e.jsxs)(r.default,{children:[(0,e.jsx)("title",{children:n}),(0,e.jsx)("meta",{property:"description",content:i}),(0,e.jsx)("meta",{property:"og:title",content:n}),(0,e.jsx)("meta",{property:"og:description",content:i}),(0,e.jsx)("meta",{property:"og:image",content:"https://avatars.githubusercontent.com/u/739402?v=4?s=400"}),(0,e.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,e.jsx)("link",{rel:"icon",href:"".concat("/creative-coding/","/favicon.ico")})]})}},9027:function(t,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return s}});var e=i(5893),r=i(5152),a=i(7404),o=(0,r.default)((function(){return i.e(257).then(i.t.bind(i,4210,23))}),{loadableGenerated:{webpack:function(){return[4210]}},loading:function(){return(0,e.jsx)(e.Fragment,{})},ssr:!1}),s=!0;n.default=function(t){var n=t.name,r=i(417)("./".concat(n));return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.Z,{title:"".concat(n," | ").concat("tic40/creative-coding"),description:"".concat(n," | ").concat("tic40/creative-coding")}),(0,e.jsx)("div",{className:"sketch-holder",children:(0,e.jsx)(o,{setup:r.setup,draw:r.draw,preload:r.preload,mouseClicked:r.mouseClicked})})]})}},1997:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return h},mouseClicked:function(){return c},setup:function(){return u}});var e,r,a,o=function(){function t(n,i,e,r,a){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=i,this.vx=e,this.vy=r,this.p=a}return t.prototype.update=function(){this.x+=this.vx,this.y+=this.vy,this.x<=0?(this.x=0,this.vx*=-1):this.x>=this.p.width-1&&(this.x=this.p.width-1,this.vx*=-1),this.y<=0?(this.y=0,this.vy*=-1):this.y>=this.p.height-1&&(this.y=this.p.height-1,this.vy*=-1)},t.createRandom=function(t){return new this(t.random(0,t.width),t.random(0,t.height),t.random(-3,3),t.random(-3,3),t)},t}(),s=!1;function u(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.noFill(),e=o.createRandom(t),r=o.createRandom(t),a={r:t.random(255),g:t.random(255),b:t.random(255)}}function h(t){e.update(),r.update(),function(t){a.r+=t.random([-2,2]),a.g+=t.random([-2,2]),a.b+=t.random([-2,2]),a.r=t.constrain(a.r,0,255),a.g=t.constrain(a.g,0,255),a.b=t.constrain(a.b,0,255)}(t),t.stroke(a.r,a.g,a.b,100),t.line(e.x,e.y,r.x,r.y)}function c(t){s=!s,t.clear(),s?t.background(180):t.background(255)}},9738:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return c},mouseClicked:function(){return d},setup:function(){return h}});var e,r,a,o=-.8,s=["#de9610","#c93a40","#d06d8c","#fff001","#65ace4","#a0c238","#56a764","#d16b16","#0074bf","#9460a0","#cc528b","#f2cf01"],u=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n.x,this.y=n.y,this.vx=n.vx,this.vy=n.vy,this.r=n.r,this.color=n.color}var n=t.prototype;return n.update=function(){this.vy+=.1,this.x+=this.vx,this.y+=this.vy;var t=this.r;this.x<t&&(this.x=t,this.vx*=o);var n=r.width-this.r;this.x>=n&&(this.x=n-1,this.vx*=o);var i=a-this.r;this.y>=i&&(this.y=i-1,this.vy*=o)},n.draw=function(){r.fill(this.color),r.circle(this.x,this.y,2*this.r)},t}();function h(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),r=t,function(){e=[],a=r.height-r.height/10;for(var t=0;t<120;t++){var n=new u({x:r.random(r.width),y:r.random(-r.width,0),vx:r.random(-3,3),vy:r.random(.1,5),r:r.random([6,8,10,12,14,16,18,20]),color:r.random(s)});e.push(n)}}()}function c(t){t.clear(),t.fill(220),t.rect(0,a,t.width,a),t.noStroke(),e.forEach((function(t){t.update(),t.draw()}))}function d(){e.forEach((function(t){t.vy=r.random(-8,-4)}))}},3906:function(t,n,i){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}i.r(n),i.d(n,{draw:function(){return d},mouseClicked:function(){return l},setup:function(){return c}});var r,a,o=function(){function t(n){e(this,t),this.baseBulletSpeed=5,this.baseBulletSize=8,this.moveSpeed=5,this.x=n.x,this.y=n.y,this.p=n.p,this.bullets=[],this.destX=this.x,this.destY=this.y,this.shotType=n.shotType||"aim"}var n=t.prototype;return n.shoot=function(){"3way"===this.shotType?this.nWayShot(2):"5way"===this.shotType?this.nWayShot(3):"allRound"===this.shotType?this.allRoundShot():"aimBig"===this.shotType?this.aimShot(10*this.baseBulletSize,this.baseBulletSpeed):this.aimShot()},n.aimShot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.baseBulletSize,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.baseBulletSpeed,i=this.p,e=new(this.bullet())({x:this.x,y:this.y,angle:i.atan2(i.mouseY-this.y,i.mouseX-i.width/2),speed:n,size:t,color:"#65ace4"});this.bullets.push(e)},n.allRoundShot=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.baseBulletSize,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.baseBulletSpeed,i=this.p,e=0;e<i.TWO_PI;e+=.2){var r=new(this.bullet())({x:this.x,y:this.y,angle:e,speed:n,size:t,color:"#65ace4"});this.bullets.push(r)}},n.nWayShot=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.baseBulletSize,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.baseBulletSpeed,e=this.p,r=e.atan2(e.mouseY-this.y,e.mouseX-e.width/2),a=[-1,1],o=0;o<t;o++)for(var s=0;s<(0===o?1:2);s++){var u=r+.1*o*a[s],h=new(this.bullet())({x:this.x,y:this.y,angle:u,speed:i,size:n,color:"#65ace4"});this.bullets.push(h)}},n.update=function(){var t=this,n=this.p;Math.abs(this.x-this.destX)<.01&&Math.abs(this.y-this.destY)<.01&&(this.destX=n.constrain(this.x+n.random(-30,30),0,n.width),this.destY=n.constrain(this.y+n.random(-30,30),0,n.height));var i=n.createVector(this.x,this.y);i.lerp(this.destX,this.destY,0,.1),this.x=i.x,this.y=i.y,this.bullets.forEach((function(t){return t.update(n)})),this.bullets=this.bullets.filter((function(n){return t.inScreen(n.x,n.y)}))},n.draw=function(){var t=this;this.p.fill("#65ace4"),this.p.rect(this.x-5,this.y-5,10,10),this.bullets.forEach((function(n){return n.draw(t.p)}))},n.inScreen=function(t,n){return t>=0&&t<this.p.width&&n>=0&&n<this.p.height},n.bullet=function(){return u},t}(),s=function(){function t(n,i,r){e(this,t),this.x=n,this.y=i,this.p=r,this.bullets=[]}var n=t.prototype;return n.shoot=function(){this.normalShot()},n.normalShot=function(){var t=this.p,n=new(this.bullet())({x:this.x,y:this.y,angle:t.radians(-90),speed:8,size:8,color:"#56a764"});this.bullets.push(n),console.log(n.angle)},n.update=function(){var t=this,n=this.p;this.x=n.mouseX,this.y=n.mouseY,this.bullets.forEach((function(t){return t.update(n)})),this.bullets=this.bullets.filter((function(n){return t.inScreen(n.x,n.y)}))},n.draw=function(){var t=this;this.p.fill("#56a764"),this.p.rect(this.p.mouseX-5,this.p.mouseY-10,10,10),this.bullets.forEach((function(n){return n.draw(t.p)}))},n.bullet=function(){return u},n.inScreen=function(t,n){return t>=0&&t<this.p.width&&n>=0&&n<this.p.height},t}(),u=function(){function t(n){e(this,t),this.x=n.x,this.y=n.y,this.angle=n.angle,this.speed=n.speed,this.size=n.size||8,this.color=n.color||"#FFFFFF"}var n=t.prototype;return n.update=function(t){this.x+=t.cos(this.angle)*this.speed,this.y+=t.sin(this.angle)*this.speed},n.draw=function(t){t.noStroke(),t.fill(this.color),t.circle(this.x,this.y,this.size)},t}(),h=["aim","3way","5way","allRound","aimBig"];function c(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),r=new o({x:t.width/2,y:t.height/5,p:t,shotType:t.random(h)}),a=new s(t.width/2,t.height-10,t)}function d(t){t.clear(),t.frameCount%200===0&&(r.shotType=t.random(h)),t.frameCount%("aimBig"===r.shotType?20:10)===0&&r.shoot(),r.update(),a.update(),r.draw(),a.draw()}function l(){a.shoot()}},574:function(t,n,i){"use strict";function e(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n)}function r(t){t.clear(),t.circle(t.mouseX,t.mouseY,100)}i.r(n),i.d(n,{draw:function(){return r},setup:function(){return e}})},2761:function(t,n,i){"use strict";function e(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n)}function r(t){t.circle(t.mouseX,t.mouseY,t.random(100))}i.r(n),i.d(n,{draw:function(){return r},setup:function(){return e}})},8121:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return f},mouseClicked:function(){return p},setup:function(){return l}});var e,r,a,o,s,u,h=0,c=!0,d=!1;function l(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),w(t)}function f(t){h++,t.clear(),t.background(0),function(t){for(var n=[],i=[],o=0;o<t.TWO_PI;o+=t.TWO_PI/30)if(c){var s=t.width/2+t.cos(e+o)*r,u=t.height/4+t.sin(e+o)*a;t.circle(s,u,8),t.circle(s,t.height-u,8),n.push({x:s,y:u}),i.push({x:s,y:t.height-u})}else{var h=t.width/4+t.cos(e+o)*r,l=t.height/2+t.sin(e+o)*a;t.circle(h,l,8),t.circle(t.width-h,t.height-l,8),n.push({x:h,y:l}),i.push({x:t.width-h,y:t.height-l})}for(var f=0;f<3;f++){var p=i.pop();p&&i.unshift(p)}if(d){t.push(),t.stroke(240),t.noFill();for(var w=0;w<n.length;w++)t.line(n[w].x,n[w].y,i[w].x,i[w].y);t.pop()}}(t),e+=.02,r+=o?u:-u,a-=s?u:-u,300<h&&w(t)}function p(){d=!d}function w(t){h=0,r=t.random(-150,150),a=0,e=0,u=t.random(.4,1.2),o=Math.floor(t.random(0,10))%2===0,s=Math.floor(t.random(0,10))%2===0,c=Math.floor(t.random(0,10))%2===0}},6257:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return a},setup:function(){return r}});var e=0;function r(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.colorMode(t.HSB)}function a(t){e++,e%=t.height/19,t.clear(),t.background(0);for(var n=t.dist(0,0,t.width/2,t.height/2),i=0;i<20;i++)for(var r=0;r<20;r++){var a=t.width/19*r,o=t.height/19*i,s=t.dist(a,o,t.mouseX,t.mouseY),u=t.map(s,0,n,0,360);t.fill(u,255,255),t.noStroke(),t.circle(a,o+e,10)}}},8003:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return E},setup:function(){return C}});var e,r=Math.pow,a=Math.sqrt,o=Math.sin,s=Math.cos,u=Math.PI,h=1.70158,c=1.525*h,d=h+1,l=2*u/3,f=2*u/4.5,p=function(t){var n=7.5625,i=2.75;return t<1/i?n*t*t:t<2/i?n*(t-=1.5/i)*t+.75:t<2.5/i?n*(t-=2.25/i)*t+.9375:n*(t-=2.625/i)*t+.984375},w={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return 1-(1-t)*(1-t)},easeInOutQuad:function(t){return t<.5?2*t*t:1-r(-2*t+2,2)/2},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1-r(1-t,3)},easeInOutCubic:function(t){return t<.5?4*t*t*t:1-r(-2*t+2,3)/2},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1-r(1-t,4)},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-r(-2*t+2,4)/2},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1-r(1-t,5)},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1-r(-2*t+2,5)/2},easeInSine:function(t){return 1-s(t*u/2)},easeOutSine:function(t){return o(t*u/2)},easeInOutSine:function(t){return-(s(u*t)-1)/2},easeInExpo:function(t){return 0===t?0:r(2,10*t-10)},easeOutExpo:function(t){return 1===t?1:1-r(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:t<.5?r(2,20*t-10)/2:(2-r(2,-20*t+10))/2},easeInCirc:function(t){return 1-a(1-r(t,2))},easeOutCirc:function(t){return a(1-r(t-1,2))},easeInOutCirc:function(t){return t<.5?(1-a(1-r(2*t,2)))/2:(a(1-r(-2*t+2,2))+1)/2},easeInBack:function(t){return d*t*t*t-h*t*t},easeOutBack:function(t){return 1+d*r(t-1,3)+h*r(t-1,2)},easeInOutBack:function(t){return t<.5?r(2*t,2)*(7.189819*t-c)/2:(r(2*t-2,2)*((c+1)*(2*t-2)+c)+2)/2},easeInElastic:function(t){return 0===t?0:1===t?1:-r(2,10*t-10)*o((10*t-10.75)*l)},easeOutElastic:function(t){return 0===t?0:1===t?1:r(2,-10*t)*o((10*t-.75)*l)+1},easeInOutElastic:function(t){return 0===t?0:1===t?1:t<.5?-r(2,20*t-10)*o((20*t-11.125)*f)/2:r(2,-20*t+10)*o((20*t-11.125)*f)/2+1},easeInBounce:function(t){return 1-p(1-t)},easeOutBounce:p,easeInOutBounce:function(t){return t<.5?(1-p(1-2*t))/2:(1+p(2*t-1))/2}},y=["linear","easeInQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInBack","easeOutBack","easeInOutBack","easeInElastic","easeOutElastic","easeInOutElastic","easeInBounce","easeOutBounce","easeInOutBounce"],v=0,g=0,x=0,m=0,b=0,k=0;function C(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),g=t.height-t.height/10,x=t.height/10,v=t.width/2,m=x,b=g,S()}function E(t){if((k+=1)>=140){k=0;var n=m;return m=b,b=n,void S()}if(!(k>100)){t.clear(),t.strokeWeight(0),t.textSize(16),y.forEach((function(n,i){n==e?t.fill("#FF0000"):t.fill(150),t.text(n,16,t.height/10+16*i)})),t.strokeWeight(5),t.stroke(0),t.line(v,g,v,x),t.stroke("#FF0000");var i=t.lerp(m,b,w[e](k/100));t.line(v+40,i,v-40,i)}}function S(){e=y[Math.floor(Math.random()*y.length)]}},8500:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return a},setup:function(){return r}});var e;function r(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.noFill(),t.stroke(200);var i=Math.min(8,(t.width-50)/80);e=[];for(var r=0;r<80;r++)e.push({x:t.width/2,y:t.height/2,radius:10+r*i})}function a(t){t.clear(),t.background(0),e.forEach((function(n,i){n.y+=0===i?(t.mouseY-n.y)/4:(e[i-1].y-n.y)/4,t.ellipse(n.x,n.y,n.radius,n.radius/4)}))}},5238:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return a},setup:function(){return r}});var e;function r(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.noStroke(),(e=t.createGraphics(t.windowWidth,t.windowHeight)).noStroke();for(var i=0;i<t.height;i+=2)for(var r=0;r<t.width;r+=2){o(r,i,t.noise(r/100,i/100))}}function a(t){if(!(t.frameCount%3)){t.clear(),t.image(e,0,0),e.copy(e,1,0,t.width-1,t.height,0,0,t.width-1,t.height);for(var n=t.width-1,i=(n+t.frameCount/3)/100,r=0;r<t.height;r+=2){o(n,r,t.noise(i,r/100))}}}function o(t,n,i){i<=.325?e.fill("#5e539e"):i<=.5?e.fill("#5584c5"):i<=.53125?e.fill("#7ac1a5"):i<=.5625?e.fill("#a2d7a4"):i<=.6875?e.fill("#d3d599"):i<=.775?e.fill("#808080"):e.fill("#DA3E32"),e.rect(t,n,2,2)}},9388:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return u},mouseClicked:function(){return h},preload:function(){return o},setup:function(){return s}});var e,r=0,a=8;function o(t){e=t.loadImage("../sushi/sushi_oke_nigiri.png")}function s(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.imageMode(t.CENTER)}function u(t){r+=1,t.clear();for(var n=t.width/a,i=n,o=n/2,s=i/2,u=!0;s<=t.height;){for(var h=0;h<a;h++){var c=o+n*h,d=s;u?h===a-1?d+=r%i:c+=r%n:0===h?d-=r%i:c-=r%n,t.translate(c,d),t.rotate(r/100),t.image(e,0,0,n,i),t.resetMatrix()}s+=i,u=!u}}function h(t){64<(a*=2)&&(a=8)}},4921:function(t,n,i){"use strict";var e,r,a;i.r(n),i.d(n,{draw:function(){return c},mouseClicked:function(){return d},setup:function(){return s}});var o=[];function s(t,n){(e=t).createCanvas(e.windowWidth,e.windowHeight).parent(n),e.angleMode(e.DEGREES),e.stroke(0),e.noFill(),a=0,r=3,o=[];for(var i={x:0,y:e.height/4*3},s={x:e.width,y:e.height/4*3},h=1;h<=5;h++)o[h]=[],u(h,i,s,h)}function u(t,n,i,r){if(0!==t){var a=h(n,i,1/3),s=h(n,i,2/3),c=e.atan2(s.y-a.y,s.x-a.x)-60,d=e.dist(a.x,a.y,s.x,s.y),l={x:a.x+e.cos(c)*d,y:a.y+e.sin(c)*d};u(t-1,n,a,r),u(t-1,a,l,r),u(t-1,l,s,r),u(t-1,s,i,r)}else o[r].push({a:n,b:i})}function h(t,n,i){return{x:e.lerp(t.x,n.x,i),y:e.lerp(t.y,n.y,i)}}function c(t){if(!(o[r].length<=a)){var n=o[r][a],i=n.a,e=n.b;t.line(i.x,i.y,e.x,e.y),a++}}function d(){r=5<=r?1:r+1,a=0,e.clear(),e.stroke(0),e.noFill()}},4743:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return s},mouseClicked:function(){return u},setup:function(){return o}});var e,r=function(){function t(n,i){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=n,this.p=i,this.drawData=[],this.stack=[],this.command=this.generateCommand(this.data.start,0),this.prepare()}var n=t.prototype;return n.prepare=function(){var t=this.data.startAngle,n=this.data.x,i=this.data.y,e=this.p,r=!0,a=!1,o=void 0;try{for(var s,u=this.command[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){var h=s.value;switch(h){case"+":t-=this.data.angle;break;case"-":t+=this.data.angle;break;case"[":this.stack.push({angle:t,x:n,y:i});break;case"]":var c,d=this.stack.pop();d&&(t=(c=[d.angle,d.x,d.y])[0],n=c[1],i=c[2]);break;case"F":var l=n+e.cos(t)*this.data.length,f=i+e.sin(t)*this.data.length;this.drawData.push({x:n,y:i,tx:l,ty:f}),n=l,i=f;break;case"X":break;default:console.error("illegal command: ".concat(h))}}}catch(p){a=!0,o=p}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}},n.generateCommand=function(t,n){var i=this.data;if(i.depth<=n)return t;var e=Array.from(t).map((function(t){return i.rules[t]||t})).join("");return this.generateCommand(e,n+1)},n.draw=function(t){var n=this.p;n.stroke(0),n.noFill();for(var i=0;i<t;i++){if(0==this.drawData.length)return;var e=this.drawData.shift();e&&n.line(e.x,e.y,e.tx,e.ty)}},t}();function a(t){var n=t.random([{length:1,depth:8},{length:2,depth:7},{length:2,depth:6},{length:3,depth:6},{length:3,depth:5},{length:4,depth:5},{length:5,depth:5}]),i={start:"X",rules:{X:"F-[[X]+X]+F[+FX]-X",F:"FF"},length:n.length,depth:n.depth,x:t.width/2,y:t.height,startAngle:-90,angle:t.random(20,25)};e=new r(i,t)}function o(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.angleMode(t.DEGREES),a(t)}function s(t){t.stroke(0),t.noFill();var n=e.drawData.length,i=10;1e4<n?i=500:5e3<n?i=100:1e3<n&&(i=50),e.draw(i)}function u(t){t.clear(),a(t)}},4027:function(t,n,i){"use strict";var e;i.r(n),i.d(n,{draw:function(){return s},setup:function(){return o}});var r=0,a=0;function o(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n);t.windowWidth,t.windowHeight;e=[{x:t.windowWidth/5,y:t.windowHeight/5},{x:t.windowWidth/5*4,y:t.windowHeight/5*4},{x:t.windowWidth/5*4,y:t.windowHeight/5},{x:t.windowWidth/5,y:t.windowHeight/5*4}]}function s(t){t.clear(),t.fill("#FF0000"),t.noStroke();var n=!0,i=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){var h=s.value,c=h.x,d=h.y;t.circle(c,d,30)}}catch(y){i=!0,o=y}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}var l=e[a],f=e[(a+1)%e.length],p=t.lerp(l.x,f.x,r),w=t.lerp(l.y,f.y,r);t.circle(p,w,30),(r+=.01)>1&&(r=0,a++,a%=e.length)}},9125:function(t,n,i){"use strict";var e,r,a,o,s,u,h,c;function d(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.stroke(240),t.noFill(),t.background(0),0,e=t.random(t.width/4,t.width/2),r=t.random(t.height/4,t.height/2),a=t.random(t.TWO_PI),o=t.random(t.TWO_PI),s=t.random(.04,.08),u=t.random(.04,.08),h=t.width/2+t.cos(a)*e,c=t.height/2+t.sin(o)*r}function l(t){var n=t.width/2+t.cos(a)*e,i=t.height/2+t.sin(o)*r;t.line(h,c,n,i),a+=s,o+=u,h=n,c=i}i.r(n),i.d(n,{draw:function(){return l},setup:function(){return d}})},4154:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return h},mouseClicked:function(){return c},setup:function(){return u}});var e=function(){function t(n,i,e,r,a,o){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=i,this.vector=e,this.r=r,this.life=500,this.color=a,this.type=o}var n=t.prototype;return n.update=function(){this.x+=this.vector.x,this.y+=this.vector.y,this.life--},n.draw=function(t){t.fill(this.color),"rect"===this.type?t.rect(this.x,this.y,2*this.r,2*this.r,2):"triangle"===this.type?t.triangle(this.x,this.y,this.x+this.r,this.y-1.5*this.r,this.x+2*this.r,this.y):t.circle(this.x,this.y,2*this.r)},t}(),r=!1,a=[],o=["#de9610","#c93a40","#d06d8c","#fff001","#65ace4","#a0c238","#56a764","#d16b16","#0074bf","#9460a0","#cc528b","#f2cf01"],s=["circle","rect","triangle"];function u(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),d(t)}function h(t){t.clear(),r?t.background(0):t.background(250),t.noStroke(),t.frameCount%100===0&&(d(t),a=a.filter((function(t){return 0<t[0].life}))),a.forEach((function(n){n.forEach((function(n){n.update(),n.draw(t)}))}))}function c(){r=!r}function d(t){for(var n=[],i={x:t.random(0,t.width),y:t.random(0,t.height)},r=0;r<100;r++){var u=t.random(-5,5),h=t.random(-5,5),c=t.createVector(u,h),d=new e(i.x,i.y,c,t.random(5,15),t.random(o),t.random(s));n.push(d)}a.push(n)}},285:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return s},setup:function(){return o}});var e,r=0,a=[];function o(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),a=[];for(var i=0;i<120;i++){var e=t.random(0,t.width),r=t.random(0,t.height),o=t.random(1.4,2);a.push({x:e,y:r,r:o})}}function s(t){r+=1,t.clear(),t.background(0),e||(e={x:t.random(0,t.width),y:t.random(0,t.width),r:t.random(2,4),dir:t.random(0,360),speed:t.random(3,7),life:100});var n=!0,i=!1,o=void 0;try{for(var s,u=a[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){var h=s.value,c=h.x,d=h.y,l=h.r;t.circle(c,d,l)}}catch(g){i=!0,o=g}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}t.translate(t.width/2,t.height/2),t.circle(0,0,12);for(var f=7;f<=15;f++){var p=t.map(f*f*f,0,3375,0,(Math.min(t.height,t.width)-30)/2),w=r*f*.1+100*f,y=t.cos(w/100)*p,v=t.sin(w/100)*p;t.circle(y,v,8),t.push(),t.stroke(50),t.noFill(),t.circle(0,0,2*p),t.pop()}e&&(e.x+=t.cos(t.radians(e.dir))*e.speed,e.y+=t.sin(t.radians(e.dir))*e.speed,e.life--,t.circle(e.x,e.y,e.r),e.life<=0&&(e=null))}},9374:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return c},mouseClicked:function(){return d},setup:function(){return h}});var e,r=40,a=10,o=0,s=0,u=3;function h(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.stroke(80),function(t){var n=20,i=Math.floor(t.random(t.height,t.height/2));e=[{x:n,y:i}]}(t)}function c(t){if(!(++o%u)){t.clear(),t.background(230);var n=function(t){var n=1,i=Math.floor(t.random(1,100));n*=i<=50?2:i<=70?3:i<=80?5:i<=90?10:i<=95?20:i<=97?30:i<=99?40:100;var r=e[e.length-1].x+1,a=Math.floor(t.random(1,100))>=99?20*n:n,o=100===Math.floor(t.random(1,100))?2*-n:-n,s=e[e.length-1].y+Math.floor(t.random(o,a));return{x:r,y:s}}(t);if(e.push(n),t.width/2<e.length&&(e.shift(),e=e.map((function(t){return{x:t.x-1,y:t.y}}))),n.y<0&&(s-=n.y,e=e.map((function(t){return{x:t.x,y:t.y-n.y}}))),t.height-a<n.y){var i=n.y-(t.height-a);s<i?(s=0,e=e.map((function(n){return{x:n.x,y:Math.min(t.height-a,n.y-s)}}))):(s-=i,e=e.map((function(n){return{x:n.x,y:Math.min(t.height-a,n.y-i)}})))}!function(t){t.push(),t.stroke(200),t.fill(160);for(var n=t.height-a;0<=n;n-=r){var i=n+Math.floor((s+r-1)/r);t.line(10,i,t.width,i);var e=Math.floor((t.height-a-n+s+r-1)/r);t.text(e,10,i)}t.pop()}(t),function(t){for(var n=0;n<e.length-1;n++){var i=e[n],r=e[n+1];t.line(i.x,i.y,r.x,r.y)}}(t)}}function d(){3<++u&&(u=1)}},7618:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return u},setup:function(){return s}});var e,r=[],a=function t(n,i,e,r,a,o,s){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.size=n,this.x=i,this.y=e,this.angle=r,this.dir=a,this.dist=o,this.color=s,this.hist=[],this.life=500};function o(t){var n=t.random(10,30),i=t.random(0,255),e=t.random(0,255),o=t.random(0,255),s=t.color(i,e,o);r.push(new a(n,t.random(t.width/2-100,t.width/2+100),t.random(t.height/2-100,t.height/2+100),0,t.random(0,360),t.dist(0,0,n,n),s))}function s(t,n){t.createCanvas(t.windowWidth,t.windowHeight),t.angleMode(t.DEGREES),t.rectMode(t.CENTER),t.stroke(0),t.noFill(),e=0,r=[],o(t)}function u(t){e++,t.clear(),e%100===0&&o(t),r=r.filter((function(t){return 0<=t.life}));var n=!0,i=!1,a=void 0;try{for(var s,u=r[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){var h=s.value;t.width<=h.x+h.size&&(h.dir=t.random(90,270)),h.x-h.size<=0&&(h.dir=t.random(-90,90)),t.height<=h.y+h.size&&(h.dir=t.random(180,360)),h.y-h.size<=0&&(h.dir=t.random(0,180));var c=25<h.life?255:t.map(h.life,0,25,0,255);h.color.setAlpha(c),t.stroke(h.color),t.translate(h.x,h.y),t.rotate(h.angle),t.rect(0,0,2*h.size,2*h.size),t.resetMatrix();for(var d=[],l=0;l<4;l++){var f=h.angle+90*l+45,p=h.x+t.cos(f)*h.dist,w=h.y+t.sin(f)*h.dist;d.push({x:p,y:w})}h.hist.unshift(d);for(var y=h.hist[0],v=1;v<h.hist.length;v++){for(var g=h.hist[v],x=0;x<4;x++){var m=t.map(v,0,128,h.life,0);h.color.setAlpha(m),t.stroke(h.color),t.line(y[x].x,y[x].y,g[x].x,g[x].y)}y=g}h.hist.length>=128&&h.hist.pop(),h.x+=2*t.cos(h.dir),h.y+=2*t.sin(h.dir),h.angle+=1,h.life--}}catch(b){i=!0,a=b}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}}},6519:function(t,n,i){"use strict";var e,r,a;i.r(n),i.d(n,{draw:function(){return c},mouseClicked:function(){return d},setup:function(){return s}});var o=[];function s(t,n){(e=t).createCanvas(e.windowWidth,e.windowHeight).parent(n),e.angleMode(e.DEGREES),e.noStroke(),e.fill(0),a=0,r=3,o=[];for(var i=Math.min(e.height,e.width)-20,s={x:(e.width-i)/2,y:e.height-20},h={x:s.x+i,y:s.y},c={x:s.x+e.cos(-60)*i,y:s.y+e.sin(-60)*i},d=1;d<=8;d++)o[d]=[],u(d,s,h,c,d)}function u(t,n,i,e,r){if(0!==t){var a=h(n,i,.5),s=h(i,e,.5),c=h(e,n,.5);u(t-1,n,a,c,r),u(t-1,a,i,s,r),u(t-1,c,s,e,r)}else o[r].push({a:n,b:i,c:e})}function h(t,n,i){return{x:e.lerp(t.x,n.x,i),y:e.lerp(t.y,n.y,i)}}function c(t){if(!(o[r].length<=a))for(var n=0;n<(r<6?1:6);n++){if(o[r].length<=a)return;var i=o[r][a],e=i.a,s=i.b,u=i.c;t.triangle(e.x,e.y,s.x,s.y,u.x,u.y),a++}}function d(){r=8<=r?1:r+1,a=0,e.clear(),e.noStroke(),e.fill(0)}},6915:function(t,n,i){"use strict";i.r(n),i.d(n,{draw:function(){return u},mouseClicked:function(){return h},preload:function(){return o},setup:function(){return s}});var e,r=0,a=2;function o(t){e=t.loadImage("../sushi/sushi_oke_nigiri.png")}function s(t,n){t.createCanvas(t.windowWidth,t.windowHeight).parent(n),t.imageMode(t.CENTER)}function u(t){if((r+=1)<=100){t.clear();for(var n=t.width/a,i=e.height*(n/e.width),o=n/2,s=i/2;s<=t.height;){for(var u=0;u<a;u++){var h=o+n*u;t.image(e,h,s,n*(r/100),i*(r/100))}s+=i}}else;}function h(t){r=0,50<(a=Math.floor(1.5*a))&&(a=2)}},417:function(t,n,i){var e={"./bounce":1997,"./bounce.tsx":1997,"./bouncing_ball":9738,"./bouncing_ball.tsx":9738,"./bullet":3906,"./bullet.tsx":3906,"./circle":574,"./circle.tsx":574,"./circle_random":2761,"./circle_random.tsx":2761,"./circular":8121,"./circular.tsx":8121,"./dots":6257,"./dots.tsx":6257,"./easing":8003,"./easing.tsx":8003,"./ellipse":8500,"./ellipse.tsx":8500,"./heat_map":5238,"./heat_map.tsx":5238,"./kaiten_sushi":9388,"./kaiten_sushi.tsx":9388,"./koch_curve":4921,"./koch_curve.tsx":4921,"./l_system_tree":4743,"./l_system_tree.tsx":4743,"./linear":4027,"./linear.tsx":4027,"./lissajous_curve":9125,"./lissajous_curve.tsx":9125,"./particle":4154,"./particle.tsx":4154,"./planet":285,"./planet.tsx":285,"./random_walk":9374,"./random_walk.tsx":9374,"./rectangle_fish":7618,"./rectangle_fish.tsx":7618,"./sierpinski_gasket":6519,"./sierpinski_gasket.tsx":6519,"./sushi":6915,"./sushi.tsx":6915};function r(t){var n=a(t);return i(n)}function a(t){if(!i.o(e,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e[t]}r.keys=function(){return Object.keys(e)},r.resolve=a,t.exports=r,r.id=417}},function(t){t.O(0,[947,774,888,179],(function(){return n=7924,t(t.s=n);var n}));var n=t.O();_N_E=n}]);