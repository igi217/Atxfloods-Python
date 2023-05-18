/*! For license information please see 6805.15400322.chunk.js.LICENSE.txt */
(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6805],{6805:function(e,r,n){"use strict";n.r(r);var t=n(70885),o=n(72791),c=n(81694),i=n.n(c),s=n(78983),a=n(15005),l=n(89774),u=n(80184),d=function(){var e=(0,o.useState)("rgb(255, 255, 255)"),r=(0,t.Z)(e,2),n=r[0],c=r[1],i=(0,o.createRef)();return(0,o.useEffect)((function(){var e=i.current.parentNode.firstChild,r=window.getComputedStyle(e).getPropertyValue("background-color");c(r)}),[i]),(0,u.jsx)("table",{className:"table w-100",ref:i,children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"text-medium-emphasis",children:"HEX:"}),(0,u.jsx)("td",{className:"font-weight-bold",children:(0,a.rgbToHex)(n)})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"text-medium-emphasis",children:"RGB:"}),(0,u.jsx)("td",{className:"font-weight-bold",children:n})]})]})})},f=function(e){var r=e.className,n=e.children,t=i()(r,"theme-color w-75 rounded mb-3");return(0,u.jsxs)(s.b7,{xs:12,sm:6,md:4,xl:2,className:"mb-4",children:[(0,u.jsx)("div",{className:t,style:{paddingTop:"75%"}}),n,(0,u.jsx)(d,{})]})};r.default=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s.xH,{className:"mb-4",children:[(0,u.jsxs)(s.bn,{children:["Theme colors",(0,u.jsx)(l.cG,{href:"https://coreui.io/docs/utilities/colors/"})]}),(0,u.jsx)(s.sl,{children:(0,u.jsxs)(s.rb,{children:[(0,u.jsx)(f,{className:"bg-primary",children:(0,u.jsx)("h6",{children:"Brand Primary Color"})}),(0,u.jsx)(f,{className:"bg-secondary",children:(0,u.jsx)("h6",{children:"Brand Secondary Color"})}),(0,u.jsx)(f,{className:"bg-success",children:(0,u.jsx)("h6",{children:"Brand Success Color"})}),(0,u.jsx)(f,{className:"bg-danger",children:(0,u.jsx)("h6",{children:"Brand Danger Color"})}),(0,u.jsx)(f,{className:"bg-warning",children:(0,u.jsx)("h6",{children:"Brand Warning Color"})}),(0,u.jsx)(f,{className:"bg-info",children:(0,u.jsx)("h6",{children:"Brand Info Color"})}),(0,u.jsx)(f,{className:"bg-light",children:(0,u.jsx)("h6",{children:"Brand Light Color"})}),(0,u.jsx)(f,{className:"bg-dark",children:(0,u.jsx)("h6",{children:"Brand Dark Color"})})]})})]})})}},15005:function(e,r){!function(e,r){for(var n in r)e[n]=r[n]}(r,function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";n.r(r),n.d(r,"deepObjectsMerge",(function(){return t})),n.d(r,"getColor",(function(){return a})),n.d(r,"getStyle",(function(){return s})),n.d(r,"hexToRgb",(function(){return l})),n.d(r,"hexToRgba",(function(){return u})),n.d(r,"makeUid",(function(){return d})),n.d(r,"omitByKeys",(function(){return f})),n.d(r,"pickByKeys",(function(){return h})),n.d(r,"rgbToHex",(function(){return p}));var t=function e(r,n){for(var t=0,o=Object.keys(n);t<o.length;t++){var c=o[t];n[c]instanceof Object&&Object.assign(n[c],e(r[c],n[c]))}return Object.assign(r||{},n),r},o=function(){for(var e={},r=document.styleSheets,n="",t=r.length-1;t>-1;t--){for(var o=r[t].cssRules,c=o.length-1;c>-1;c--)if(".ie-custom-properties"===o[c].selectorText){n=o[c].cssText;break}if(n)break}return(n=n.substring(n.lastIndexOf("{")+1,n.lastIndexOf("}"))).split(";").forEach((function(r){if(r){var n=r.split(": ")[0],t=r.split(": ")[1];n&&t&&(e["--".concat(n.trim())]=t.trim())}})),e},c=function(){return Boolean(document.documentMode)&&document.documentMode>=10},i=function(e){return e.match(/^--.*/i)},s=function(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(i(e)&&c()){var t=o();r=t[e]}else r=window.getComputedStyle(n,null).getPropertyValue(e).replace(/^\s/,"");return r},a=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,n="--".concat(e),t=s(n,r);return t||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var r,n,t;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),t=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),t=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(n,", ").concat(t,")")},u=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var n,t,o,c=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!c)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(n=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(n=parseInt(e.slice(1,2),16),t=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(n,", ").concat(t,", ").concat(o,", ").concat(r/100,")")},d=function(){return"uid-"+Math.random().toString(36).substr(2)},f=function(e,r){for(var n={},t=Object.keys(e),o=0;o<t.length;o++)!r.includes(t[o])&&(n[t[o]]=e[t[o]]);return n},h=function(e,r){for(var n={},t=0;t<r.length;t++)n[r[t]]=e[r[t]];return n},p=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var r=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!r)throw new Error("".concat(e," is not a valid rgb color"));var n="0".concat(parseInt(r[1],10).toString(16)),t="0".concat(parseInt(r[2],10).toString(16)),o="0".concat(parseInt(r[3],10).toString(16));return"#".concat(n.slice(-2)).concat(t.slice(-2)).concat(o.slice(-2))},g={deepObjectsMerge:t,getColor:a,getStyle:s,hexToRgb:l,hexToRgba:u,makeUid:d,omitByKeys:f,pickByKeys:h,rgbToHex:p};r.default=g}]))},81694:function(e,r){var n;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var s in n)t.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(r,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=6805.15400322.chunk.js.map