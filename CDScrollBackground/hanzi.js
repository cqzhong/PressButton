/*! Hanzi Writer v2.0.2 | https://chanind.github.io/hanzi-writer */
!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.HanziWriter=i():t.HanziWriter=i()}("undefined"!=typeof self?self:this,function(){return function(n){var r={};function o(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=n,o.c=r,o.d=function(t,i,n){o.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var i=t&&t.t?function(){return t.default}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="",o(o.s=9)}([function(e,t,i){"use strict";(function(t){var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var i=t.performance&&function(){return t.performance.now()}||function(){return Date.now()},n=t.requestAnimationFrame||function(t){return setTimeout(function(){return t(i())},1e3/60)},r=t.cancelAnimationFrame||clearTimeout,o=function(t){for(var n=Object(t),i=arguments.length,r=Array(1<i?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return r.forEach(function(t){if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}),n},h=Object.assign||o;var s=0;e.exports={e:o,arrLast:function(t){return t[t.length-1]},assign:h,average:function(t){return t.reduce(function(t,i){return i+t},0)/t.length},callIfExists:function(t,i){return t&&t(i),i},cancelAnimationFrame:r,colorStringToVals:function(t){var i=t.toUpperCase().trim();if(/^#([A-F0-9]{3}){1,2}$/.test(i)){var n=i.substring(1).split("");3===n.length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]);var r=""+n.join("");return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16),a:1}}var o=i.match(/^RGBA?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+))?\)$/);if(o)return{r:parseInt(o[1],10),g:parseInt(o[2],10),b:parseInt(o[3],10),a:parseFloat(o[4]||1,10)};throw new Error("Invalid color: "+t)},copyAndMergeDeep:function t(i,n){var r=h({},i);for(var o in n){var s=i[o],e=n[o];s!==e&&(s&&e&&"object"===(void 0===s?"undefined":u(s))&&"object"===(void 0===e?"undefined":u(e))&&!Array.isArray(e)?r[o]=t(s,e):r[o]=e)}return r},counter:function(){return++s},emptyFunc:function(){},inflate:function(t,i){for(var n=t.split("."),r={},o=r,s=0;s<n.length;s++){var e=s===n.length-1?i:{};o[n[s]]=e,o=e}return r},objRepeat:function(t,i){for(var n={},r=0;r<i;r++)n[r]=t;return n},performanceNow:i,requestAnimationFrame:n,timeout:function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;return new Promise(function(t,i){setTimeout(t,n)})},trim:function(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}}}).call(t,i(1))},function(Ga,Ha){var Ia;Ia=function(){return this}();try{Ia=Ia||Function("return this")()||eval("this")}catch(t){"object"==typeof window&&(Ia=window)}Ga.exports=Ia},function(t,i,n){"use strict";var r=n(0),e=r.average,v=r.arrLast,u=function(t,i){return{x:t.x-i.x,y:t.y-i.y}},s=function(t){return Math.sqrt(Math.pow(t.x,2)+Math.pow(t.y,2))},l=function(t,i){return s(u(t,i))},h=function(t){var i=10*(1<arguments.length&&void 0!==arguments[1]?arguments[1]:1);return{x:Math.round(i*t.x)/i,y:Math.round(i*t.y)/i}},d=function(t){var r=t[0];return t.slice(1).reduce(function(t,i){var n=l(i,r);return r=i,t+n},0)},p=function(t,i,n){var r=u(i,t),o=n/s(r);return{x:i.x+o*r.x,y:i.y+o*r.y}},a=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:.05,u=t.slice(0,1);return t.slice(1).forEach(function(t){var i=u[u.length-1],n=l(t,i);if(e<n)for(var r=Math.ceil(n/e),o=n/r,s=0;s<r;s++)u.push(p(t,i,-1*o*(s+1)));else u.push(t)}),u},c=function(t){for(var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:30,n=d(t)/(i-1),r=[t[0]],o=v(t),s=t.slice(1),e=0;e<i-2;e++)for(var u=v(r),h=n,a=!1;!a;){var c=l(u,s[0]);if(c<h)h-=c,u=s.shift();else{var f=p(u,s[0],h-c);r.push(f),a=!0}}return r.push(o),r},f=function(t){if(t.length<3)return t;var s=[t[0],t[1]];return t.slice(2).forEach(function(t,i){var n=s.length,r=u(t,s[n-1]),o=u(s[n-1],s[n-2]);r.y*o.x-r.x*o.y==0&&s.pop(),s.push(t)}),s};t.exports={round:h,equals:function(t,i){return t.x===i.x&&t.y===i.y},distance:l,getPathString:function(t){var i=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=h(t[0]),r=t.slice(1),o="M "+n.x+" "+n.y;return r.forEach(function(t){var i=h(t);o+=" L "+i.x+" "+i.y}),i&&(o+="Z"),o},frechetDist:function(r,o){for(var s=[],t=0;t<r.length;t++){s.push([]);for(var i=0;i<o.length;i++)s[t].push(-1)}return function t(i,n){return-1<s[i][n]||(s[i][n]=0===i&&0===n?l(r[0],o[0]):0<i&&0===n?Math.max(t(i-1,0),l(r[i],o[0])):0===i&&0<n?Math.max(t(0,n-1),l(r[0],o[n])):0<i&&0<n?Math.max(Math.min(t(i-1,n),t(i-1,n-1),t(i,n-1)),l(r[i],o[n])):1/0),s[i][n]}(r.length-1,o.length-1)},length:d,rotate:function(t,i){return t.map(function(t){return{x:Math.cos(i)*t.x-Math.sin(i)*t.y,y:Math.sin(i)*t.x+Math.cos(i)*t.y}})},subtract:u,extendStart:function(t,i){var n=f(t);if(n.length<2)return n;var r=n[1],o=n[0],s=p(r,o,i),e=n.slice(1);return e.unshift(s),e},cosineSimilarity:function(t,i){return(t.x*i.x+t.y*i.y)/s(t)/s(i)},outlineCurve:c,u:p,h:f,subdivideCurve:a,normalizeCurve:function(t){var i=c(t),n={x:e(i.map(function(t){return t.x})),y:e(i.map(function(t){return t.y}))},r=i.map(function(t){return u(t,n)}),o=Math.sqrt(e([Math.pow(r[0].x,2)+Math.pow(r[0].y,2),Math.pow(v(r).x,2)+Math.pow(v(r).y,2)])),s=r.map(function(t){return{x:t.x/o,y:t.y/o}});return a(s)}}},function(t,i,n){"use strict";(function(n){function r(t,i,n){t.setAttributeNS(null,i,n)}t.exports={createElm:function(t){return n.document.createElementNS("http://www.w3.org/2000/svg",t)},attrs:function(i,n){Object.keys(n).forEach(function(t){return r(i,t,n[t])})},attr:r,removeElm:function(t){t&&t.parentNode.removeChild(t)},urlIdRef:function(t){var i="";return n.location&&n.location.href&&(i=n.location.href.replace(/#[^#]*$/,"")),"url("+i+"#"+t+")"}}}).call(i,n(1))},function(t,i,n){"use strict";var h=n(5),e=n(0).objRepeat,u=function(t,i,n){return[new h("character."+t+".strokes",e({opacity:1,displayPortion:1},i.strokes.length),{duration:n,force:!0})]},a=function(t,i,n){return[new h("character."+t+".opacity",0,{duration:n,force:!0})].concat(u(t,i,0))},c=function(t,i,n){var r,o,s,e=i.strokeNum,u=(i.getLength()+600)/(3*n);return[new h("character."+t,{opacity:1,strokes:(r={},o=e,s={displayPortion:0,opacity:1},o in r?Object.defineProperty(r,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[o]=s,r)}),new h("character."+t+".strokes."+e+".displayPortion",1,{duration:u})]},f=function(n,t,i,r,o){var s=a(n,t,i);return(s=s.concat(u(n,t,0))).push(new h("character."+n,{opacity:1,strokes:e({opacity:0},t.strokes.length)},{force:!0})),t.strokes.forEach(function(t,i){0<i&&s.push(new h.Pause(o)),s=s.concat(c(n,t,r))}),s};t.exports={showStrokes:u,showCharacter:function(t,i,n){return[new h("character."+t,{opacity:1,strokes:e({opacity:1,displayPortion:1},i.strokes.length)},{duration:n,force:!0})]},hideCharacter:a,animateCharacter:f,animateCharacterLoop:function(t,i,n,r,o,s){var e=f(t,i,n,r,o);return e.push(new h.Pause(s)),e},animateStroke:c,animateSingleStroke:function(o,s,t,i){return[new h("character."+o,function(t){for(var i=t.character[o],n={opacity:1,strokes:{}},r=0;r<s.strokes.length;r++)n.strokes[r]={opacity:i.opacity*i.strokes[r].opacity};return n})].concat(c(o,s.strokes[t],i))},showStroke:function(t,i,n){return[new h("character."+t+".strokes."+i,{displayPortion:1,opacity:1},{duration:n,force:!0})]},updateColor:function(t,i,n){return[new h("options."+t,i,{duration:n})]}}},function(t,i,n){"use strict";var r=n(0),o=r.inflate,s=r.performanceNow,e=r.requestAnimationFrame,u=r.cancelAnimationFrame;function h(t,i){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};this.scope=t,this.f=i,this.v=n.duration||0,this.w=n.force,this.k=this.C.bind(this)}function a(t){this.v=t}h.prototype.run=function(t){var i=this;return this.M||this.S(t),0===this.v&&t.updateState(this.M),0===this.v||function t(i,n){for(var r in n)if(n.hasOwnProperty(r)){var o=n[r],s=i[r];if(0<=o){if(o!==s)return!1}else if(!t(s,o))return!1}return!0}(t.state,this.M)?Promise.resolve():(this.j=t,this.P=t.state,this.O=s(),this.A=e(this.k),new Promise(function(t){i.F=t}))},h.prototype.C=function(t){var i,n=Math.min(1,(t-this.O)/this.v);if(1===n)this.j.updateState(this.M),this.A=null,this.cancel(this.j);else{var r=(i=n,-Math.cos(i*Math.PI)/2+.5);this.j.updateState(function t(i,n,r){var o={};for(var s in n){var e=n[s],u=i[s];o[s]=0<=e?r*(e-u)+u:t(u,e,r)}return o}(this.P,this.M,r)),this.A=e(this.k)}},h.prototype.S=function(t){var i=this.f;"function"==typeof this.f&&(i=this.f(t.state)),this.M=o(this.scope,i)},h.prototype.cancel=function(t){this.F&&this.F(),this.F=null,this.A&&u(this.A),this.A=null,this.w&&(this.M||this.S(t),t.updateState(this.M))},a.prototype.run=function(){var i=this,t=new Promise(function(t){i.F=t});return this.I=setTimeout(function(){return i.cancel()},this.v),t},a.prototype.cancel=function(){clearTimeout(this.I),this.F&&this.F(),this.F=!1},h.Pause=a,t.exports=h},function(t,i,n){"use strict";function r(){}r.prototype.D=function(t){return.999*this.T*(1-t)},r.prototype.R=function(t){var i=t.strokeColor,n=t.radicalColor;return n&&this.W.isInRadical?n:i},t.exports=r},function(n,t,i){"use strict";(function(i){function t(){}t.prototype.addPointerStartListener=function(i){var n=this;this.node.addEventListener("mousedown",function(t){i(n.z(t,n.H))}),this.node.addEventListener("touchstart",function(t){i(n.z(t,n.L))})},t.prototype.addPointerMoveListener=function(i){var n=this;this.node.addEventListener("mousemove",function(t){i(n.z(t,n.H))}),this.node.addEventListener("touchmove",function(t){i(n.z(t,n.L))})},t.prototype.addPointerEndListener=function(t){i.document.addEventListener("mouseup",t),i.document.addEventListener("touchend",t)},t.prototype.getBoundingClientRect=function(){return this.node.getBoundingClientRect()},t.prototype.z=function(t,i){var n=this;return{getPoint:function(){return i.call(n,t)},preventDefault:function(){return t.preventDefault()}}},t.prototype.H=function(t){var i=this.getBoundingClientRect();return{x:t.clientX-i.left,y:t.clientY-i.top}},t.prototype.L=function(t){var i=this.getBoundingClientRect();return{x:t.touches[0].clientX-i.left,y:t.touches[0].clientY-i.top}},n.exports=t}).call(t,i(1))},function(t,i,n){"use strict";t.exports={drawPath:function(i,t){i.beginPath();var n=t[0],r=t.slice(1);i.moveTo(n.x,n.y),r.forEach(function(t){i.lineTo(t.x,t.y)}),i.stroke()},pathStringToCanvas:function(t){var i=t.split(/(^|\s+)(?=[A-Z])/).filter(function(t){return" "!==t}),e=[function(t){return t.beginPath()}];return i.forEach(function(t){var i,n=t.split(/\s+/),r=(i=n,Array.isArray(i)?i:Array.from(i)),o=r[0],s=r.slice(1).map(function(t){return parseFloat(t)});"M"===o?e.push(function(t){return t.moveTo.apply(t,s)}):"L"===o?e.push(function(t){return t.lineTo.apply(t,s)}):"C"===o?e.push(function(t){return t.bezierCurveTo.apply(t,s)}):"Q"===o&&e.push(function(t){return t.quadraticCurveTo.apply(t,s)})}),function(i){return e.forEach(function(t){return t(i)})}}}},function(t,i,n){"use strict";var o=n(10),s=n(11),e=n(14),r=n(15),u=n(19),h=n(25),a=n(31),c=n(32),f=n(4),v=n(0),l=v.assign,d=v.callIfExists,p=v.trim,y=v.colorStringToVals,w={charDataLoader:a,onLoadCharDataError:null,onLoadCharDataSuccess:null,showOutline:!0,showCharacter:!0,renderer:"svg",width:null,height:null,padding:20,strokeAnimationSpeed:1,strokeFadeDuration:400,strokeHighlightDuration:200,strokeHighlightSpeed:2,delayBetweenStrokes:1e3,delayBetweenLoops:2e3,strokeColor:"#555",radicalColor:null,highlightColor:"#AAF",outlineColor:"#DDD",drawingColor:"#333",leniency:1,showHintAfterMisses:3,highlightOnComplete:!0,highlightCompleteColor:null,drawingFadeDuration:300,drawingWidth:4,strokeWidth:2,outlineWidth:2,rendererOverride:{}};function g(){if(0<arguments.length){var t=void 0,i={},n=arguments.length<=0?void 0:arguments[0];1<arguments.length&&(i="string"==typeof(arguments.length<=1?void 0:arguments[1])?(console.warn("Using new HanziWriter() to set a character is deprecated. Use HanziWriter.create() instead"),t=arguments.length<=1?void 0:arguments[1],(arguments.length<=2?void 0:arguments[2])||{}):arguments.length<=1?void 0:arguments[1]),this.U(n,i),t&&this.setCharacter(t)}}g.prototype.showCharacter=function(){var t=this,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._.showCharacter=!0,this.G(function(){return t.j.run(f.showCharacter("main",t.N,"number"==typeof i.duration?i.duration:t._.strokeFadeDuration)).then(function(t){return d(i.onComplete,t)})})},g.prototype.hideCharacter=function(){var t=this,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._.showCharacter=!1,this.G(function(){return t.j.run(f.hideCharacter("main",t.N,"number"==typeof i.duration?i.duration:t._.strokeFadeDuration)).then(function(t){return d(i.onComplete,t)})})},g.prototype.animateCharacter=function(){var t=this,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.cancelQuiz(),this.G(function(){return t.j.run(f.animateCharacter("main",t.N,t._.strokeFadeDuration,t._.strokeAnimationSpeed,t._.delayBetweenStrokes)).then(function(t){return d(i.onComplete,t)})})},g.prototype.animateStroke=function(t){var i=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return this.cancelQuiz(),this.G(function(){return i.j.run(f.animateSingleStroke("main",i.N,t,i._.strokeAnimationSpeed)).then(function(t){return d(n.onComplete,t)})})},g.prototype.loopCharacterAnimation=function(){var t=this;0<arguments.length&&void 0!==arguments[0]&&arguments[0];return this.cancelQuiz(),this.G(function(){return t.j.run(f.animateCharacterLoop("main",t.N,t._.strokeFadeDuration,t._.strokeAnimationSpeed,t._.delayBetweenStrokes,t._.delayBetweenLoops),{loop:!0})})},g.prototype.showOutline=function(){var t=this,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._.showOutline=!0,this.G(function(){return t.j.run(f.showCharacter("outline",t.N,"number"==typeof i.duration?i.duration:t._.strokeFadeDuration)).then(function(t){return d(i.onComplete,t)})})},g.prototype.hideOutline=function(){var t=this,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._.showOutline=!1,this.G(function(){return t.j.run(f.hideCharacter("outline",t.N,"number"==typeof i.duration?i.duration:t._.strokeFadeDuration)).then(function(t){return d(i.onComplete,t)})})},g.prototype.updateColor=function(o,s){var e=this,u=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return this.G(function(){var t="number"==typeof u.duration?u.duration:e._.strokeFadeDuration,i=s;"radicalColor"!==o||s||(i=e._.strokeColor);var n=y(i);e._[o]=s;var r=f.updateColor(o,n,t);return"radicalColor"!==o||s||(r=r.concat(f.updateColor(o,null,0))),e.j.run(r).then(function(t){return d(u.onComplete,t)})})},g.prototype.quiz=function(){var t=this,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.G(function(){t.cancelQuiz(),t.V=new r(t.N,t.j,t.$),t.V.startQuiz(l({},t._,i))})},g.prototype.cancelQuiz=function(){this.V&&(this.V.cancel(),this.V=null)},g.prototype.setCharacter=function(n){var r=this;return this.cancelQuiz(),this.q=n,this.B&&this.B.destroy(),this.j&&this.j.cancelAll(),this.B=null,this.Q=this.Z.loadCharData(n).then(function(t){if(!r.Z.loadingFailed){r.N=s(n,t),r.$=new e(r._);var i=new r.J.HanziWriterRenderer(r.N,r.$);r.B=i,r.j=new o(r.N,r._,function(t){i.render(t)}),r.B.mount(r.target,r.j.state),r.B.render(r.j.state)}}),this.Q},g.prototype.U=function(t,i){var n="canvas"===i.renderer?h:u,r=i.rendererOverride||{};return this.J={HanziWriterRenderer:r.HanziWriterRenderer||n.HanziWriterRenderer,createRenderTarget:r.createRenderTarget||n.createRenderTarget},this.target=this.J.createRenderTarget(t,i.width,i.height),this._=this.K(i),this.Z=new c(this._),this.X(),this.V=null,this},g.prototype.K=function(t){var i=l({},w,t);return t.strokeAnimationDuration&&!t.strokeAnimationSpeed&&(i.strokeAnimationSpeed=500/i.strokeAnimationDuration),t.strokeHighlightDuration&&!t.strokeHighlightSpeed&&(i.strokeHighlightSpeed=500/i.strokeHighlightDuration),t.highlightCompleteColor||(i.highlightCompleteColor=i.highlightColor),this.Y(i)},g.prototype.Y=function(t){var i=l({},t);if(i.width&&!i.height)i.height=i.width;else if(i.height&&!i.width)i.width=i.height;else if(!i.width&&!i.height){var n=this.target.getBoundingClientRect(),r=n.width,o=n.height,s=Math.min(r,o);i.width=s,i.height=s}return i},g.prototype.G=function(t){var i=this;if(this.Z.loadingFailed)throw Error("Failed to load character data. Call setCharacter and try again.");return this.Q.then(function(){if(!i.Z.loadingFailed)return t()})},g.prototype.X=function(){var i=this;this.target.addPointerStartListener(function(t){!i.isLoadingCharData&&i.V&&(t.preventDefault(),i.tt("startUserStroke",t.getPoint()))}),this.target.addPointerMoveListener(function(t){!i.isLoadingCharData&&i.V&&(t.preventDefault(),i.tt("continueUserStroke",t.getPoint()))}),this.target.addPointerEndListener(function(){return i.tt("endUserStroke")})},g.prototype.tt=function(t){var i;if(this.V){for(var n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(i=this.V)[t].apply(i,r)}},g.create=function(t,i){var n=new g(t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:{});return n.setCharacter(i),n};var k=null,m=null;g.loadCharacterData=function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=void 0;return n=k&&m===i?k:new c(l({},w,i)),m=i,(k=n).loadCharData(t)},g.getScalingTransform=function(t,i){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,r=new e({width:t,height:i,padding:n});return{x:r.xOffset,y:r.yOffset,scale:r.scale,transform:p("\n      translate("+r.xOffset+", "+(r.height-r.yOffset)+")\n      scale("+r.scale+", "+-1*r.scale+")\n    ").replace(/\s+/g," ")}},t.exports=g},function(t,i,n){"use strict";var r=n(0),o=r.copyAndMergeDeep,s=r.colorStringToVals;function e(t,i,n){this.it=n,this.nt=[],this.state={options:{drawingFadeDuration:i.drawingFadeDuration,drawingWidth:i.drawingWidth,drawingColor:s(i.drawingColor),strokeColor:s(i.strokeColor),outlineColor:s(i.outlineColor),radicalColor:s(i.radicalColor||i.strokeColor),highlightColor:s(i.highlightColor)},character:{main:{opacity:i.showCharacter?1:0,strokes:{}},outline:{opacity:i.showOutline?1:0,strokes:{}},highlight:{opacity:1,strokes:{}}},userStrokes:null};for(var r=0;r<t.strokes.length;r++)this.state.character.main.strokes[r]={opacity:1,displayPortion:1},this.state.character.outline.strokes[r]={opacity:1,displayPortion:1},this.state.character.highlight.strokes[r]={opacity:0,displayPortion:1}}e.prototype.updateState=function(t){var i=o(this.state,t);this.it(i,this.state),this.state=i},e.prototype.run=function(n){var r=this,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},s=n.map(function(t){return t.scope}).filter(function(t){return t});return this.cancelMutations(s),new Promise(function(t){var i={rt:!0,ot:0,F:t,st:n,et:o.loop,ut:s};r.nt.push(i),r.ht(i)})},e.prototype.ht=function(i){var t=this;if(i.rt){var n=i.st;if(i.ot>=n.length){if(!i.et)return i.rt=!1,this.nt=this.nt.filter(function(t){return t!==i}),void i.F({canceled:!1});i.ot=0}i.st[i.ot].run(this).then(function(){i.rt&&(i.ot++,t.ht(i))})}},e.prototype.cancelMutations=function(t){var r=this;this.nt.forEach(function(n){n.ut.forEach(function(i){t.forEach(function(t){(0<=i.indexOf(t)||0<=t.indexOf(i))&&r.at(n)})})})},e.prototype.cancelAll=function(){this.cancelMutations([""])},e.prototype.at=function(i){i.rt=!1;for(var t=i.ot;t<i.st.length;t++)i.st[t].cancel(this);i.F&&i.F({canceled:!0}),this.nt=this.nt.filter(function(t){return t!==i})},t.exports=e},function(t,i,n){"use strict";var s=function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var n=[],r=!0,o=!1,s=void 0;try{for(var e,u=t[Symbol.iterator]();!(r=(e=u.next()).done)&&(n.push(e.value),!i||n.length!==i);r=!0);}catch(t){o=!0,s=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw s}}return n}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")},e=n(12),r=n(13),o=function(o){return o.strokes.map(function(t,i){var n,r=o.medians[i].map(function(t){var i=s(t,2);return{x:i[0],y:i[1]}});return new e(t,r,i,(n=i,o.radStrokes&&0<=o.radStrokes.indexOf(n)))})};t.exports=function(t,i){var n=o(i);return new r(t,n)}},function(t,i,n){"use strict";var r=n(2),o=r.subtract,s=r.distance,e=r.length;function u(t,i,n){var r=3<arguments.length&&void 0!==arguments[3]&&arguments[3];this.path=t,this.points=i,this.strokeNum=n,this.isInRadical=r}u.prototype.getStartingPoint=function(){return this.points[0]},u.prototype.getEndingPoint=function(){return this.points[this.points.length-1]},u.prototype.getLength=function(){return e(this.points)},u.prototype.getVectors=function(){var n=this.points[0];return this.points.slice(1).map(function(t){var i=o(t,n);return n=t,i})},u.prototype.getDistance=function(i){var t=this.points.map(function(t){return s(t,i)});return Math.min.apply(Math,t)},u.prototype.getAverageDistance=function(t){var n=this;return t.reduce(function(t,i){return t+n.getDistance(i)},0)/t.length},t.exports=u},function(t,i,n){"use strict";t.exports=function(t,i){this.symbol=t,this.strokes=i}},function(t,i,n){"use strict";var a=[{x:0,y:-124},{x:1024,y:900}];function r(t){this._=t,this.width=t.width,this.height=t.height,this.ct()}r.prototype.convertExternalPoint=function(t){return{x:(t.x-this.xOffset)/this.scale,y:(this.height-this.yOffset-t.y)/this.scale}},r.prototype.ct=function(){var t=a,i=t[1].x-t[0].x,n=t[1].y-t[0].y,r=this.width-2*this._.padding,o=this.height-2*this._.padding,s=r/i,e=o/n;this.scale=Math.min(s,e);var u=this._.padding+(r-this.scale*i)/2,h=this._.padding+(o-this.scale*n)/2;this.xOffset=-1*t[0].x*this.scale+u,this.yOffset=-1*t[0].y*this.scale+h},t.exports=r},function(t,i,n){"use strict";var r=n(16),o=n(17),s=n(0),e=s.callIfExists,u=s.counter,h=n(18),a=n(2),c=n(4),f=function(t){return{pathString:a.getPathString(t.externalPoints),points:t.points.map(function(t){return a.round(t)})}};function v(t,i,n){this.N=t,this.j=i,this.rt=!1,this.$=n}v.prototype.startQuiz=function(t){this.rt=!0,this._=t,this.ft=0,this.vt=0,this.lt=0,this.dt=[],this.j.run(h.startQuiz(this.N,t.strokeFadeDuration))},v.prototype.startUserStroke=function(t){var i=this.$.convertExternalPoint(t);if(!this.rt)return null;if(this.pt)return this.endUserStroke();var n=u();this.pt=new o(n,i,t),this.j.run(h.startUserStroke(n,i))},v.prototype.continueUserStroke=function(t){if(this.pt){var i=this.$.convertExternalPoint(t);this.pt.appendPoint(i,t);var n=this.pt.points.slice(0);this.j.run(h.updateUserStroke(this.pt.id,n))}},v.prototype.endUserStroke=function(){if(this.pt)if(this.j.run(h.removeUserStroke(this.pt.id,this._.drawingFadeDuration)),1!==this.pt.points.length){var t=this.yt(),i=0<this.j.state.character.outline.opacity;r(this.pt,this.N,this.ft,{isOutlineVisible:i,leniency:this._.leniency})?this.wt(t):(this.gt(),this.vt>=this._.showHintAfterMisses&&this.j.run(h.highlightStroke(t,this._.highlightColor,this._.strokeHighlightSpeed))),this.pt=null}else this.pt=null},v.prototype.cancel=function(){this.rt=!1,this.pt&&this.j.run(h.removeUserStroke(this.pt.id,this._.drawingFadeDuration))},v.prototype.wt=function(t){e(this._.onCorrectStroke,{character:this.N.symbol,strokeNum:this.ft,mistakesOnStroke:this.vt,totalMistakes:this.lt,strokesRemaining:this.N.strokes.length-this.ft-1,drawnPath:f(this.pt)});var i=c.showStroke("main",this.ft,this._.strokeFadeDuration);this.ft+=1,this.vt=0,this.ft===this.N.strokes.length&&(this.rt=!1,e(this._.onComplete,{character:this.N.symbol,totalMistakes:this.lt}),this._.highlightOnComplete&&(i=i.concat(h.highlightCompleteChar(this.N,this._.highlightCompleteColor,2*this._.strokeHighlightDuration)))),this.j.run(i)},v.prototype.gt=function(){this.vt+=1,this.lt+=1,e(this._.onMistake,{character:this.N.symbol,strokeNum:this.ft,mistakesOnStroke:this.vt,totalMistakes:this.lt,strokesRemaining:this.N.strokes.length-this.ft,drawnPath:f(this.pt)})},v.prototype.yt=function(){return this.N.strokes[this.ft]},t.exports=v},function(t,i,n){"use strict";var r=n(0),h=r.average,l=r.assign,o=n(2),a=o.cosineSimilarity,d=o.equals,j=o.frechetDist,P=o.distance,c=o.subtract,O=o.normalizeCurve,x=o.rotate,A=o.length,F=function(t,i){var n,r,o,s=(r=[],o=(n=t)[0],n.slice(1).forEach(function(t){r.push(c(t,o)),o=t}),r),e=i.getVectors(),u=s.map(function(i){var t=e.map(function(t){return a(t,i)});return Math.max.apply(Math,t)});return 0<h(u)},I=[Math.PI/16,Math.PI/32,0,-1*Math.PI/32,-1*Math.PI/16],p=function(t,i,n){var r=n.leniency,o=void 0===r?1:r,s=n.isOutlineVisible,e=void 0!==s&&s,u=i.getAverageDistance(t),h=u<=350*(e||0<i.strokeNum?.5:1)*o;if(!h)return{isMatch:!1,avgDist:u};var a,c,f,v,l,d,p,y,w,g,k,m,b=(a=t,f=o,v=P((c=i).getStartingPoint(),a[0]),l=P(c.getEndingPoint(),a[a.length-1]),v<=250*f&&l<=250*f),C=F(t,i),M=(d=t,p=i.points,y=o,w=O(d),g=O(p),k=1/0,I.forEach(function(t){var i=j(w,x(g,t));i<k&&(k=i)}),k<=.4*y),S=(m=i,.35<=o*(A(t)+25)/(m.getLength()+25));return{isMatch:h&&b&&C&&M&&S,avgDist:u}};t.exports=function(t,i,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=function(t){if(t.length<2)return t;var i=[t[0]];return t.slice(1).forEach(function(t){d(t,i[i.length-1])||i.push(t)}),i}(t.points);if(o.length<2)return null;var s=p(o,i.strokes[n],r);if(!s.isMatch)return!1;for(var e=i.strokes.slice(n+1),u=s.avgDist,h=0;h<e.length;h++){var a=p(o,e[h],r);a.isMatch&&a.avgDist<u&&(u=a.avgDist)}if(u<s.avgDist){var c=.6*(u+s.avgDist)/(2*s.avgDist),f=(r.leniency||1)*c,v=l({},r,{leniency:f});return p(o,i.strokes[n],v).isMatch}return!0}},function(t,i,n){"use strict";function r(t,i,n){this.id=t,this.points=[i],this.externalPoints=[n]}r.prototype.appendPoint=function(t,i){this.points.push(t),this.externalPoints.push(i)},t.exports=r},function(t,i,n){"use strict";var h=n(5),r=n(4),o=n(0).objRepeat;t.exports={highlightCompleteChar:function(t,i,n){return[new h("character.highlight.strokeColor",i)].concat(r.hideCharacter("highlight",t)).concat(r.showCharacter("highlight",t,n/2)).concat(r.hideCharacter("highlight",t,n/2))},highlightStroke:function(t,i,n){var r,o,s,e=t.strokeNum,u=(t.getLength()+600)/(3*n);return[new h("character.highlight.strokeColor",i),new h("character.highlight",{opacity:1,strokes:(r={},o=e,s={displayPortion:0,opacity:0},o in r?Object.defineProperty(r,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[o]=s,r)}),new h("character.highlight.strokes."+e,{displayPortion:1,opacity:1},{duration:u}),new h("character.highlight.strokes."+e+".opacity",0,{duration:u})]},startQuiz:function(t,i){return r.hideCharacter("main",t,i).concat([new h("character.highlight",{opacity:1,strokes:o({opacity:0},t.strokes.length)},{force:!0}),new h("character.main",{opacity:1,strokes:o({opacity:0},t.strokes.length)},{force:!0})])},startUserStroke:function(t,i){return[new h("quiz.activeUserStrokeId",t,{force:!0}),new h("userStrokes."+t,{points:[i],opacity:1},{force:!0})]},updateUserStroke:function(t,i){return[new h("userStrokes."+t+".points",i,{force:!0})]},removeUserStroke:function(t,i){return[new h("userStrokes."+t+".opacity",0,{duration:i}),new h("userStrokes."+t,null,{force:!0})]}}},function(t,i,n){"use strict";var r=n(20),o=n(24);t.exports={HanziWriterRenderer:r,createRenderTarget:o.init}},function(t,i,n){"use strict";var r=n(21),e=n(23),u=n(0).assign,o=n(3);function s(t,i){this.N=t,this.$=i,this.kt=new r(t),this.mt=new r(t),this.bt=new r(t),this.Ct={}}s.prototype.mount=function(t){var i=t.createSubRenderTarget(),n=i.svg;o.attr(n,"transform","\n    translate("+this.$.xOffset+", "+(this.$.height-this.$.yOffset)+")\n    scale("+this.$.scale+", "+-1*this.$.scale+")\n  "),this.mt.mount(i),this.kt.mount(i),this.bt.mount(i),this.Mt=i},s.prototype.render=function(r){var o=this;this.mt.render({opacity:r.character.outline.opacity,strokes:r.character.outline.strokes,strokeColor:r.options.outlineColor}),this.kt.render({opacity:r.character.main.opacity,strokes:r.character.main.strokes,strokeColor:r.options.strokeColor,radicalColor:r.options.radicalColor}),this.bt.render({opacity:r.character.highlight.opacity,strokes:r.character.highlight.strokes,strokeColor:r.options.highlightColor});var s=r.userStrokes||{};Object.keys(this.Ct).forEach(function(t){s[t]||(o.Ct[t].destroy(),delete o.Ct[t])}),Object.keys(s).forEach(function(t){if(s[t]){var i=u({strokeWidth:r.options.drawingWidth,strokeColor:r.options.drawingColor},s[t]),n=o.Ct[t];n||((n=new e).mount(o.Mt,i),o.Ct[t]=n),n.render(i)}})},s.prototype.destroy=function(){o.removeElm(this.Mt.svg),this.Mt.defs.innerHTML=""},t.exports=s},function(t,i,n){"use strict";var r=n(22);function o(t){this.St={},this.jt=t.strokes.map(function(t){return new r(t)})}o.prototype.mount=function(t){var n=t.createSubRenderTarget();this.Pt=n.svg,this.jt.forEach(function(t,i){t.mount(n)})},o.prototype.render=function(t){if(t!==this.St){t.opacity!==this.St.opacity&&(this.Pt.style.opacity=t.opacity,0===t.opacity?this.Pt.style.display="none":0===this.St.opacity&&(this.Pt.style.display="initial"));var i=!this.St||t.strokeColor!==this.St.strokeColor||t.radicalColor!==this.St.radicalColor;if(i||t.strokes!==this.St.strokes)for(var n=0;n<this.jt.length;n++)!i&&this.St.strokes&&t.strokes[n]===this.St.strokes[n]||this.jt[n].render({strokeColor:t.strokeColor,radicalColor:t.radicalColor,opacity:t.strokes[n].opacity,displayPortion:t.strokes[n].displayPortion});this.St=t}},t.exports=o},function(t,i,n){"use strict";var r=n(0).counter,e=n(3),o=n(2),s=o.extendStart,u=o.getPathString,h=n(6);function a(t){this.St={},this.W=t,this.T=t.getLength()+100}(a.prototype=Object.create(h.prototype)).mount=function(t){this.Ot=e.createElm("path"),this.xt=e.createElm("clipPath"),this.At=e.createElm("path");var i="mask-"+r();e.attr(this.xt,"id",i),e.attr(this.At,"d",this.W.path),this.Ot.style.opacity=0,e.attr(this.Ot,"clip-path",e.urlIdRef(i));var n=s(this.W.points,100);return e.attr(this.Ot,"d",u(n)),e.attrs(this.Ot,{stroke:"#FFFFFF","stroke-width":200,fill:"none","stroke-linecap":"round","stroke-linejoin":"miter","stroke-dasharray":this.T+","+this.T}),this.xt.appendChild(this.At),t.defs.appendChild(this.xt),t.svg.appendChild(this.Ot),this},a.prototype.render=function(t){if(t!==this.St){t.displayPortion!==this.St.displayPortion&&(this.Ot.style.strokeDashoffset=this.D(t.displayPortion));var i=this.R(t);if(i!==this.R(this.St)){var n=i.r,r=i.g,o=i.b,s=i.a;e.attrs(this.Ot,{stroke:"rgba("+n+","+r+","+o+","+s+")"})}t.opacity!==this.St.opacity&&(this.Ot.style.opacity=t.opacity),this.St=t}},t.exports=a},function(t,i,n){"use strict";var e=n(3),u=n(2).getPathString;function r(){this.St={}}r.prototype.mount=function(t){this.Ft=e.createElm("path"),t.svg.appendChild(this.Ft)},r.prototype.render=function(t){if(t!==this.St){if(t.strokeColor!==this.St.strokeColor||t.strokeWidth!==this.St.strokeWidth){var i=t.strokeColor,n=i.r,r=i.g,o=i.b,s=i.a;e.attrs(this.Ft,{fill:"none",stroke:"rgba("+n+","+r+","+o+","+s+")","stroke-width":t.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round"})}t.opacity!==this.St.opacity&&e.attr(this.Ft,"opacity",t.opacity),t.points!==this.St.points&&e.attr(this.Ft,"d",u(t.points)),this.St=t}},r.prototype.destroy=function(){e.removeElm(this.Ft)},t.exports=r},function(i,t,r){"use strict";(function(u){var t=r(3),h=t.createElm,a=t.attrs,n=r(7);function c(t,i){this.svg=t,this.defs=i,this.node=t,this.node.createSVGPoint&&(this.It=this.node.createSVGPoint())}(c.prototype=Object.create(n.prototype)).createSubRenderTarget=function(){var t=h("g");return this.svg.appendChild(t),new c(t,this.defs)},c.prototype.H=function(t){if(this.It){this.It.x=t.clientX,this.It.y=t.clientY;var i=this.It.matrixTransform(this.node.getScreenCTM().inverse());return{x:i.x,y:i.y}}return n.prototype.H.call(this,t)},c.prototype.L=function(t){if(this.It){this.It.x=t.touches[0].clientX,this.It.y=t.touches[0].clientY;var i=this.It.matrixTransform(this.node.getScreenCTM().inverse());return{x:i.x,y:i.y}}return n.prototype.L.call(this,t)},c.init=function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"100%",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"100%",r=void 0,o=t;"string"==typeof t&&(o=u.document.getElementById(t));var s=o.nodeName.toUpperCase();"SVG"===s||"G"===s?r=o:(r=h("svg"),o.appendChild(r)),a(r,{width:i,height:n});var e=h("defs");return r.appendChild(e),new c(r,e)},i.exports=c}).call(t,r(1))},function(t,i,n){"use strict";var r=n(26),o=n(30);t.exports={HanziWriterRenderer:r,createRenderTarget:o.init}},function(t,i,n){"use strict";var r=n(27),s=n(29),e=n(0).assign;function o(t,i){this.N=t,this.$=i,this.kt=new r(t),this.mt=new r(t),this.bt=new r(t)}o.prototype.mount=function(t){this.Dt=t},o.prototype.Tt=function(t){var i=this.Dt.getContext();i.clearRect(0,0,this.$.width,this.$.height),i.save(),i.translate(this.$.xOffset,this.$.height-this.$.yOffset),i.scale(this.$.scale,-1*this.$.scale),t(i),i.restore(),i.draw&&i.draw()},o.prototype.render=function(o){var t=this;this.Tt(function(n){t.mt.render(n,{opacity:o.character.outline.opacity,strokes:o.character.outline.strokes,strokeColor:o.options.outlineColor}),t.kt.render(n,{opacity:o.character.main.opacity,strokes:o.character.main.strokes,strokeColor:o.options.strokeColor,radicalColor:o.options.radicalColor}),t.bt.render(n,{opacity:o.character.highlight.opacity,strokes:o.character.highlight.strokes,strokeColor:o.options.highlightColor});var r=o.userStrokes||{};Object.keys(r).forEach(function(t){if(r[t]){var i=e({strokeWidth:o.options.drawingWidth,strokeColor:o.options.drawingColor},r[t]);s(n,i)}})})},o.prototype.destroy=function(){},t.exports=o},function(t,i,n){"use strict";var r=n(28);function o(t){this.jt=t.strokes.map(function(t){return new r(t)})}o.prototype.render=function(t,i){if(!(i.opacity<.05))for(var n=0;n<this.jt.length;n++)this.jt[n].render(t,{strokeColor:i.strokeColor,radicalColor:i.radicalColor,opacity:i.strokes[n].opacity*i.opacity,displayPortion:i.strokes[n].displayPortion})},t.exports=o},function(e,t,u){"use strict";(function(n){var r=u(2).extendStart,t=u(8),a=t.drawPath,o=t.pathStringToCanvas,i=u(6);function s(t){var i=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];this.W=t,this.T=t.getLength()+100,i&&n.Path2D?this.Rt=new n.Path2D(this.W.path):this.Wt=o(this.W.path),this.Et=r(this.W.points,100)}(s.prototype=Object.create(i.prototype)).render=function(t,i){if(!(i.opacity<.05)){t.save(),this.Rt?t.clip(this.Rt):(this.Wt(t),t.globalAlpha=0,t.stroke(),t.clip());var n=this.R(i),r=n.r,o=n.g,s=n.b,e=n.a,u=1===e?"rgb("+r+","+o+","+s+")":"rgb("+r+","+o+","+s+","+e+")",h=this.D(i.displayPortion);t.globalAlpha=i.opacity,t.strokeStyle=u,t.fillStyle=u,t.lineWidth=200,t.lineCap="round",t.lineJoin="round",t.setLineDash([this.T,this.T],h),t.lineDashOffset=h,a(t,this.Et),t.restore()}},e.exports=s}).call(t,u(1))},function(t,i,n){"use strict";var u=n(8).drawPath;t.exports=function(t,i){if(!(i.opacity<.05)){var n=i.strokeColor,r=n.r,o=n.g,s=n.b,e=n.a;t.save(),t.globalAlpha=i.opacity,t.lineWidth=i.strokeWidth,t.strokeStyle="rgba("+r+","+o+","+s+","+e+")",t.lineCap="round",t.lineJoin="round",u(t,i.points),t.restore()}}},function(i,t,n){"use strict";(function(s){var t=n(7);function e(t){this.node=t}(e.prototype=Object.create(t.prototype)).getContext=function(){return this.node.getContext("2d")},e.init=function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"100%",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"100%",r=void 0,o=t;return"string"==typeof t&&(o=s.document.getElementById(t)),"CANVAS"===o.nodeName.toUpperCase()?r=o:(r=s.document.createElement("canvas"),o.appendChild(r)),r.setAttribute("width",i),r.setAttribute("height",n),new e(r)},i.exports=e}).call(t,n(1))},function(t,i,n){"use strict";(function(o){t.exports=function(t,i,n){var r=new o.XMLHttpRequest;r.overrideMimeType&&r.overrideMimeType("application/json"),r.open("GET","https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/"+t+".json",!0),r.onerror=function(t){n(r,t)},r.onreadystatechange=function(){4===r.readyState&&(200===r.status?i(JSON.parse(r.responseText)):0!==r.status&&n&&n(r))},r.send(null)}}).call(i,n(1))},function(t,i,n){"use strict";var r=n(0).callIfExists;function o(t){this.zt=0,this._=t,this.Ht=!1,this.Lt=null,this.loadingFailed=!1}o.prototype.Ut=function(t,i){var n=this,r=function(t){i===n.zt&&n.F(t)},o=this._.charDataLoader(t,r,function(t){i===n.zt&&n._t(t)});o&&r(o)},o.prototype.Gt=function(){var n=this;this.Lt=new Promise(function(t,i){n.F=t,n._t=i}).then(function(t){return n.Ht=!1,r(n._.onLoadCharDataSuccess,t),t},function(t){if(n.Ht=!1,n.loadingFailed=!0,r(n._.onLoadCharDataError,t),!n._.onLoadCharDataError){if(t instanceof Error)throw t;var i=new Error("Failed to load char data for "+n.Nt);throw i.reason=t,i}})},o.prototype.loadCharData=function(t){return this.Nt=t,this.Ht||this.Gt(),this.loadingFailed=!1,this.Ht=!0,this.zt++,this.Ut(t,this.zt),this.Lt},t.exports=o}])});