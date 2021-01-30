!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("@apollo/client")):"function"==typeof define&&define.amd?define(["react","@apollo/client"],t):"object"==typeof exports?exports.SampleSearch=t(require("react"),require("@apollo/client")):e.SampleSearch=t(e.react,e["@apollo/client"])}(self,(function(e,t){return function(){"use strict";var n={352:function(e,t,n){n.r(t),n.d(t,{SampleSearch:function(){return f}});var r=n(297),o=n.n(r),a=n(74);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(){var e,t,n=(e=["\n  query($search: String, $sort: [UserSort], $perPage: Int, $page: Int) {\n    Page(perPage: $perPage, page: $page) {\n      users(search: $search, sort: $sort) {\n        id\n        name\n      }\n      pageInfo {\n        total\n        currentPage\n        lastPage\n        hasNextPage\n        perPage\n      }\n    }\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return n},n}var c=(0,a.gql)(l()),f=function(){var e,t,n=u(o().useState(1),2),r=n[0],i=n[1],l=u(o().useState(""),2),f=l[0],s=l[1],p=o().useCallback((function(){i((function(e){return e+1}))}),[]),d=o().useCallback((function(){i((function(e){return e-1}))}),[]),g=o().useCallback((function(e){s(e.target.value),i(1)}),[]),y=(0,a.useQuery)(c,{variables:{search:f,sort:"USERNAME_DESC",page:r,perPage:5}}),m=y.loading,b=y.data;return o().createElement(o().Fragment,null,o().createElement("div",{style:{marginBottom:"20px"}},o().createElement("span",{style:{paddingRight:"10px"}},"Search user"),o().createElement("input",{type:"text",value:f,onChange:g}),o().createElement("button",{onClick:function(){return d()},disabled:r<=1||m},"prev"),o().createElement("button",{onClick:function(){return p()},disabled:!(null!=b&&null!==(e=b.Page)&&void 0!==e&&e.pageInfo.hasNextPage)||m},"next")),m?"Loading...":o().createElement("div",null,null==b||null===(t=b.Page)||void 0===t?void 0:t.users.map((function(e){return o().createElement("div",{key:e.id},e.id,": ",e.name)}))))}},74:function(e){e.exports=t},297:function(t){t.exports=e}},r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={exports:{}};return n[e](t,t.exports,o),t.exports}return o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(352)}()}));
//# sourceMappingURL=index.js.map