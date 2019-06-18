!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-native-web-player"]=t(require("react")):e["react-native-web-player"]=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,r){e.exports=r(5)()},function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),p=n(f),d=r(0),y=n(d),h={title:"text",transpilerTitle:"text",playerTitle:"text",workspacesTitle:"text",code:"text",entry:"text",initialTab:"text",platform:"text",statusBarHeight:"text",statusBarColor:"text",fullscreen:"text",width:"text",scale:"text",assetRoot:"text",workspaceCSS:"text",playerCSS:"text",playerStyleSheet:"text",files:"json",vendorComponents:"json",panes:"json",styles:"json",console:"json",workspaces:"json"},b=function(e){return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")},m=function(e){return Object.keys(e).reduce(function(t,r){var n=e[r];return void 0===n?t:(t[r]="json"===h[r]?JSON.stringify(n):n,t)},{})},v={iframe:{width:"100%",height:"100%"}},x=(u=i=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),n=l({},e);delete n.style,delete n.className,delete n.baseURL;var s=m(n),i="#"+b(s);return r.hash=i,r}return s(t,e),c(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.style!==e.style||this.props.baseURL!==e.baseURL}},{key:"render",value:function(){var e=this.hash,t=this.props,r=t.style,n=t.className,o=t.baseURL;return p.default.createElement("div",{style:r,className:n},p.default.createElement("iframe",{style:v.iframe,frameBorder:0,allowFullScreen:!0,src:""+o+e}))}}]),t}(f.Component),i.propTypes={style:y.default.any,className:y.default.string,baseURL:y.default.string,title:y.default.string,transpilerTitle:y.default.string,playerTitle:y.default.string,code:y.default.string,entry:y.default.string,initialTab:y.default.string,platform:y.default.string,fullscreen:y.default.bool,width:y.default.number,scale:y.default.number,assetRoot:y.default.string,workspaceCSS:y.default.string,playerCSS:y.default.string,playerStyleSheet:y.default.string,files:y.default.array,vendorComponents:y.default.array,panes:y.default.array,styles:y.default.object,console:y.default.object},i.defaultProps={baseURL:"https://cdn.rawgit.com/dabbott/react-native-web-player/gh-v2.0.0-alpha.4/index.html"},u);t.default=x},function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,r){"use strict";function n(e,t,r,n,a,s,i,u){if(o(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,a,s,i,u],f=0;l=new Error(t.replace(/%s/g,function(){return c[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var o=function(e){};e.exports=n},function(e,t,r){"use strict";var n=r(3),o=r(4),a=r(6);e.exports=function(){function e(e,t,r,n,s,i){i!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])});