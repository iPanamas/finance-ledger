parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/hero/showcase.webp":[["showcase.b41fc024.webp","KIsD"],"KIsD"],"./../images/hero/showcase@2x.webp":[["showcase@2x.76893f67.webp","n5dz"],"n5dz"]}],"skFC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={header:document.querySelector(".header"),form:document.querySelector(".contact-form"),message:document.querySelector(".contact-require"),inputName:document.querySelector(".contact-form__input[data-name]"),inputEmail:document.querySelector(".contact-form__input[data-email]")};exports.refs=e;
},{}],"iwE8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.headerOpacity=void 0;var o=require("./referenceEl");const{header:e}=o.refs,t=()=>{0!==scrollY&&(e.style.backgroundColor="#000000",e.style.opacity="0.8"),window.onscroll=(()=>{window.matchMedia("(min-width: 1360px)").matches&&(window.scrollY>70?(e.style.backgroundColor="#000000",e.style.opacity="0.8"):(e.style.backgroundColor="transparent",e.style.opacity="1")),window.matchMedia("(max-width: 1359px)").matches&&(window.scrollY>120?(e.style.backgroundColor="#000000",e.style.opacity="0.8"):(e.style.backgroundColor="transparent",e.style.opacity="1")),window.matchMedia("(max-width: 767px)").matches&&(window.scrollY>40?(e.style.backgroundColor="#000000",e.style.opacity="0.8"):(e.style.backgroundColor="transparent",e.style.opacity="1"))})};exports.headerOpacity=t;
},{"./referenceEl":"skFC"}],"FNyO":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],n="Expected a function",e=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),v=Object.prototype,p=v.toString,y=Math.max,d=Math.min,m=function(){return s.Date.now()};function b(t,e,i){var r,o,u,f,a,c,l=0,s=!1,v=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function b(n){var e=r,i=o;return r=o=void 0,l=n,f=t.apply(i,e)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||v&&t-l>=u}function h(){var t=m();if(g(t))return x(t);a=setTimeout(h,function(t){var n=e-(t-c);return v?d(n,u-(t-l)):n}(t))}function x(t){return a=void 0,p&&r?b(t):(r=o=void 0,f)}function T(){var t=m(),n=g(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(h,e),s?b(t):f}(c);if(v)return a=setTimeout(h,e),b(c)}return void 0===a&&(a=setTimeout(h,e)),f}return e=O(e)||0,j(i)&&(s=!!i.leading,u=(v="maxWait"in i)?y(O(i.maxWait)||0,e):u,p="trailing"in i?!!i.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},T.flush=function(){return void 0===a?f:x(m())},T}function g(t,e,i){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(n);return j(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),b(t,e,{leading:r,maxWait:e,trailing:o})}function j(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){return!!t&&"object"==typeof t}function x(t){return"symbol"==typeof t||h(t)&&p.call(t)==i}function O(t){if("number"==typeof t)return t;if(x(t))return e;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?a(t.slice(2),i?2:8):o.test(t)?e:+t}module.exports=g;
},{}],"A7Dh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.validationForm=void 0;var e=require("./referenceEl"),s=require("lodash.throttle");const{form:t,message:a,inputName:i,inputEmail:l}=e.refs,d=()=>{a.classList.add("visually-hidden");const e=()=>{""===i.value&&""===l.value||a.classList.add("visually-hidden")};i.addEventListener("input",s(e,1e3)),l.addEventListener("input",s(e,1e3));t.addEventListener("submit",e=>{const s=t.elements.name.value,i=t.elements.email.value;""===s||""===i?(e.preventDefault(),a.classList.remove("visually-hidden")):(a.classList.add("visually-hidden"),t.reset())})};exports.validationForm=d;
},{"lodash.throttle":"FNyO","./referenceEl":"skFC"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var r=require("./js/headerOpacity"),a=require("./js/validationForm");(0,r.headerOpacity)(),(0,a.validationForm)();
},{"./sass/main.scss":"clu1","./js/headerOpacity":"iwE8","./js/validationForm":"A7Dh"}]},{},["Focm"], null)
//# sourceMappingURL=/src.2b16f111.js.map