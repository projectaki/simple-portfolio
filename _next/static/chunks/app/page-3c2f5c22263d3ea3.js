(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9774:function(e,t,r){Promise.resolve().then(r.bind(r,3932))},3932:function(e,t,r){"use strict";r.r(t),r.d(t,{Commits:function(){return l}});var n=r(4357),s=r(6439);function l(){let[e,t]=(0,s.useState)(!1),[r,l]=(0,s.useState)(null),a=(0,s.useCallback)(async()=>{t(!0);try{let e=await fetch("https://gh_proxy.akosegypro.workers.dev").then(async e=>{let t=await e.json();return t});l(e)}finally{t(!1)}},[]);return(0,s.useEffect)(()=>{let e=setInterval(a,6e4);return a(),()=>clearInterval(e)},[a]),(0,n.jsxs)("div",{className:"mt-8",children:[(0,n.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold text-black mb-0",children:"Last commit"}),e?(0,n.jsx)("img",{src:"/spinner.svg",alt:""}):"just refreshed"]}),(0,n.jsx)("ul",{className:"bg-white   max-w-lg",children:(0,n.jsx)("li",{className:" border-gray-300 py-2",children:(0,n.jsx)("span",{className:"text-gray-600 text-sm",children:function(e){if(!e)return"";let t=new Date(e),r=t.toLocaleString();return r}(null==r?void 0:r.commit)})})})]})}},7543:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6439),s=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,c={},i=null,u=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,n)&&!o.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:s,type:e,key:i,ref:u,props:c,_owner:a.current}}t.jsx=c,t.jsxs=c},4357:function(e,t,r){"use strict";e.exports=r(7543)}},function(e){e.O(0,[702,431,744],function(){return e(e.s=9774)}),_N_E=e.O()}]);