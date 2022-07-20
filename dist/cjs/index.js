"use strict";var e=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=r(e),n=function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},n.apply(this,arguments)};var o,a={exports:{}},i={exports:{}},c={};var u,f,s,p,l,y,d,m,b,v,h,g,O,S,w={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function E(){return f||(f=1,function(e){"production"===process.env.NODE_ENV?e.exports=function(){if(o)return c;o=1;var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,O=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var o=e.$$typeof;switch(o){case r:switch(e=e.type){case s:case p:case n:case i:case a:case y:return e;default:switch(e=e&&e.$$typeof){case f:case l:case b:case m:case u:return e;default:return o}}case t:return o}}}function w(e){return S(e)===p}return c.AsyncMode=s,c.ConcurrentMode=p,c.ContextConsumer=f,c.ContextProvider=u,c.Element=r,c.ForwardRef=l,c.Fragment=n,c.Lazy=b,c.Memo=m,c.Portal=t,c.Profiler=i,c.StrictMode=a,c.Suspense=y,c.isAsyncMode=function(e){return w(e)||S(e)===s},c.isConcurrentMode=w,c.isContextConsumer=function(e){return S(e)===f},c.isContextProvider=function(e){return S(e)===u},c.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},c.isForwardRef=function(e){return S(e)===l},c.isFragment=function(e){return S(e)===n},c.isLazy=function(e){return S(e)===b},c.isMemo=function(e){return S(e)===m},c.isPortal=function(e){return S(e)===t},c.isProfiler=function(e){return S(e)===i},c.isStrictMode=function(e){return S(e)===a},c.isSuspense=function(e){return S(e)===y},c.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===p||e===i||e===a||e===y||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===u||e.$$typeof===f||e.$$typeof===l||e.$$typeof===h||e.$$typeof===g||e.$$typeof===O||e.$$typeof===v)},c.typeOf=S,c}():e.exports=(u||(u=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,s=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,l=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,d=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var l=e.$$typeof;switch(l){case r:var m=e.type;switch(m){case u:case f:case n:case a:case o:case p:return m;default:var b=m&&m.$$typeof;switch(b){case c:case s:case d:case y:case i:return b;default:return l}}case t:return l}}}var O=u,S=f,E=c,x=i,j=r,$=s,P=n,T=d,_=y,C=t,N=a,I=o,k=p,R=!1;function A(e){return g(e)===f}w.AsyncMode=O,w.ConcurrentMode=S,w.ContextConsumer=E,w.ContextProvider=x,w.Element=j,w.ForwardRef=$,w.Fragment=P,w.Lazy=T,w.Memo=_,w.Portal=C,w.Profiler=N,w.StrictMode=I,w.Suspense=k,w.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||g(e)===u},w.isConcurrentMode=A,w.isContextConsumer=function(e){return g(e)===c},w.isContextProvider=function(e){return g(e)===i},w.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},w.isForwardRef=function(e){return g(e)===s},w.isFragment=function(e){return g(e)===n},w.isLazy=function(e){return g(e)===d},w.isMemo=function(e){return g(e)===y},w.isPortal=function(e){return g(e)===t},w.isProfiler=function(e){return g(e)===a},w.isStrictMode=function(e){return g(e)===o},w.isSuspense=function(e){return g(e)===p},w.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===f||e===a||e===o||e===p||e===l||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===i||e.$$typeof===c||e.$$typeof===s||e.$$typeof===b||e.$$typeof===v||e.$$typeof===h||e.$$typeof===m)},w.typeOf=g}()),w)}(i)),i.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function x(){if(y)return l;y=1;return l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function j(){return m?d:(m=1,d=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var $=E();a.exports=function(){if(g)return h;g=1;var e=E(),r=function(){if(p)return s;p=1;var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}return s=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(o,a){for(var i,c,u=n(o),f=1;f<arguments.length;f++){for(var s in i=Object(arguments[f]))r.call(i,s)&&(u[s]=i[s]);if(e){c=e(i);for(var p=0;p<c.length;p++)t.call(i,c[p])&&(u[c[p]]=i[c[p]])}}return u},s}(),t=x(),n=j(),o=function(){if(v)return b;v=1;var e=function(){};if("production"!==process.env.NODE_ENV){var r=x(),t={},n=j();e=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function o(o,a,i,c,u){if("production"!==process.env.NODE_ENV)for(var f in o)if(n(o,f)){var s;try{if("function"!=typeof o[f]){var p=Error((c||"React class")+": "+i+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}s=o[f](a,f,c,i,null,r)}catch(e){s=e}if(!s||s instanceof Error||e((c||"React class")+": type specification of "+i+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in t)){t[s.message]=!0;var l=u?u():"";e("Failed "+i+" type: "+s.message+(null!=l?l:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(t={})},b=o}(),a=function(){};function i(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),h=function(c,u){var f="function"==typeof Symbol&&Symbol.iterator,s="<<anonymous>>",p={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:d(i),arrayOf:function(e){return d((function(r,n,o,a,i){if("function"!=typeof e)return new y("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var c=r[n];if(!Array.isArray(c))return new y("Invalid "+a+" `"+i+"` of type `"+h(c)+"` supplied to `"+o+"`, expected an array.");for(var u=0;u<c.length;u++){var f=e(c,u,o,a,i+"["+u+"]",t);if(f instanceof Error)return f}return null}))},element:d((function(e,r,t,n,o){var a=e[r];return c(a)?null:new y("Invalid "+n+" `"+o+"` of type `"+h(a)+"` supplied to `"+t+"`, expected a single ReactElement.")})),elementType:d((function(r,t,n,o,a){var i=r[t];return e.isValidElementType(i)?null:new y("Invalid "+o+" `"+a+"` of type `"+h(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return d((function(r,t,n,o,a){if(!(r[t]instanceof e)){var i=e.name||s;return new y("Invalid "+o+" `"+a+"` of type `"+((c=r[t]).constructor&&c.constructor.name?c.constructor.name:s)+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}var c;return null}))},node:d((function(e,r,t,n,o){return v(e[r])?null:new y("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return d((function(r,o,a,i,c){if("function"!=typeof e)return new y("Property `"+c+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var u=r[o],f=h(u);if("object"!==f)return new y("Invalid "+i+" `"+c+"` of type `"+f+"` supplied to `"+a+"`, expected an object.");for(var s in u)if(n(u,s)){var p=e(u,s,a,i,c+"."+s,t);if(p instanceof Error)return p}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),i;function r(r,t,n,o,a){for(var i=r[t],c=0;c<e.length;c++)if(l(i,e[c]))return null;var u=JSON.stringify(e,(function(e,r){return"symbol"===g(r)?String(r):r}));return new y("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+u+".")}return d(r)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var r=0;r<e.length;r++){var o=e[r];if("function"!=typeof o)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+O(o)+" at index "+r+"."),i}return d((function(r,o,a,i,c){for(var u=[],f=0;f<e.length;f++){var s=(0,e[f])(r,o,a,i,c,t);if(null==s)return null;s.data&&n(s.data,"expectedType")&&u.push(s.data.expectedType)}return new y("Invalid "+i+" `"+c+"` supplied to `"+a+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")}))},shape:function(e){return d((function(r,n,o,a,i){var c=r[n],u=h(c);if("object"!==u)return new y("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");for(var f in e){var s=e[f];if("function"!=typeof s)return b(o,a,i,f,g(s));var p=s(c,f,o,a,i+"."+f,t);if(p)return p}return null}))},exact:function(e){return d((function(o,a,i,c,u){var f=o[a],s=h(f);if("object"!==s)return new y("Invalid "+c+" `"+u+"` of type `"+s+"` supplied to `"+i+"`, expected `object`.");var p=r({},o[a],e);for(var l in p){var d=e[l];if(n(e,l)&&"function"!=typeof d)return b(i,c,u,l,g(d));if(!d)return new y("Invalid "+c+" `"+u+"` key `"+l+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(o[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(f,l,i,c,u+"."+l,t);if(m)return m}return null}))}};function l(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function y(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function d(e){if("production"!==process.env.NODE_ENV)var r={},n=0;function o(o,i,c,f,p,l,d){if(f=f||s,l=l||c,d!==t){if(u){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var b=f+":"+c;!r[b]&&n<3&&(a("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[b]=!0,n++)}}return null==i[c]?o?null===i[c]?new y("The "+p+" `"+l+"` is marked as required in `"+f+"`, but its value is `null`."):new y("The "+p+" `"+l+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(i,c,f,p,l)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function m(e){return d((function(r,t,n,o,a,i){var c=r[t];return h(c)!==e?new y("Invalid "+o+" `"+a+"` of type `"+g(c)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,r,t,n,o){return new y((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||c(e))return!0;var r=function(e){var r=e&&(f&&e[f]||e["@@iterator"]);if("function"==typeof r)return r}(e);if(!r)return!1;var t,n=r.call(e);if(r!==e.entries){for(;!(t=n.next()).done;)if(!v(t.value))return!1}else for(;!(t=n.next()).done;){var o=t.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function h(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function g(e){if(null==e)return""+e;var r=h(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function O(e){var r=g(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return y.prototype=Error.prototype,p.checkPropTypes=o,p.resetWarningCache=o.resetWarningCache,p.PropTypes=p,p},h}()($.isElement,!0)}else a.exports=function(){if(S)return O;S=1;var e=x();function r(){}function t(){}return t.resetWarningCache=r,O=function(){function n(r,t,n,o,a,i){if(i!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return n}n.isRequired=n;var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:r};return a.PropTypes=a,a}}()();function P(r){var o=r.children,a=r.onClose,i=r.exceptions,c=void 0===i?[]:i,u=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(r,["children","onClose","exceptions"]),f=e.useRef(null);return function(r,t,n){e.useEffect((function(){function e(e){n.some((function(r){var t=r;return"string"==typeof r&&(t=document.getElementById(r)),t&&(t.contains(e.target)||t.isEqualNode(e.target))}))||r.current&&!r.current.contains(e.target)&&t()}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[r,t,n])}(f,a,c),t.default.createElement("div",n({ref:f},u),o)}P.propTypes={children:a.exports.element.isRequired,onClose:a.exports.func},module.exports=P;
//# sourceMappingURL=index.js.map