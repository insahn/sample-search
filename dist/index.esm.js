import e,{useState as t}from"react";import{gql as n,useQuery as r}from"@apollo/client";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){var e,t,n=(e=["\n  query($search: String, $sort: [UserSort], $perPage: Int, $page: Int) {\n    Page(perPage: $perPage, page: $page) {\n      users(search: $search, sort: $sort) {\n        id\n        name\n      }\n      pageInfo {\n        total\n        currentPage\n        lastPage\n        hasNextPage\n        perPage\n      }\n    }\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}var i=n(u());export default function(){var n,o,u=a(t(1),2),l=u[0],c=u[1],f=a(t(""),2),s=f[0],g=f[1],p=e.useCallback((function(){c((function(e){return e+1}))}),[]),d=e.useCallback((function(){c((function(e){return e-1}))}),[]),m=e.useCallback((function(e){return g(e.target.value)}),[]),y=r(i,{variables:{search:s,sort:"USERNAME_DESC",page:l,perPage:20}}),b=y.loading,v=y.data;return e.createElement(e.Fragment,null,e.createElement("div",{style:{marginBottom:"20px"}},e.createElement("span",{style:{paddingRight:"10px"}},"Search user"),e.createElement("input",{type:"text",value:s,onChange:m}),e.createElement("button",{onClick:function(){return d()},disabled:l<=1||b},"prev"),e.createElement("button",{onClick:function(){return p()},disabled:!(null!=v&&null!==(n=v.Page)&&void 0!==n&&n.pageInfo.hasNextPage)||b},"next")),b?"Loading...":e.createElement("div",null,null==v||null===(o=v.Page)||void 0===o?void 0:o.users.map((function(t){return e.createElement("div",{key:t.id},t.id,": ",t.name)}))))}
//# sourceMappingURL=index.esm.js.map