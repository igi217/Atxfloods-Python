"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8742],{58742:function(e,a,s){s.r(a);var t=s(74165),n=s(15861),r=s(70885),c=s(72791),l=s(78983),i=s(16871),d=s(83442),o=s(80184);a.default=function(){var e,a,s,m,u,h=(0,i.UO)().id,x=c.useState({start:"",end:""}),f=(0,r.Z)(x,2),j=f[0],v=f[1],g=c.useState({}),p=(0,r.Z)(g,2),N=p[0],_=p[1],w=c.useState(64),y=(0,r.Z)(w,2),S=y[0],b=y[1],k=c.useRef();c.useEffect((function(){(0,n.Z)((0,t.Z)().mark((function e(){var a,s,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.ZP.singleCamera+h+"?per_page=".concat(S),e.next=3,fetch(a,{method:"POST",headers:{Authorization:(0,d.kE)(),"Content-Type":"application/json"},body:JSON.stringify(j)});case 3:return s=e.sent,e.next=6,s.json();case 6:n=e.sent,_(n.attributes[0]);case 8:case"end":return e.stop()}}),e)})))()}),[h,j,S]);return c.useEffect((function(){var e=function(e){var a,s=null===(a=k.current)||void 0===a?void 0:a.scrollHeight;s&&window.scrollY+window.innerHeight>=s&&b((function(e){return e+64}))};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]),Object.keys(N).length?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.xH,{className:"my-2",children:(0,o.jsx)(l.sl,{children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-md-6",children:[(0,o.jsxs)("h5",{children:["Display Name: ",N.name]}),(0,o.jsxs)("h5",{children:["Address: ",N.address]})]}),(0,o.jsxs)("div",{className:"col-md-6",children:[(0,o.jsxs)("h5",{className:"float-end",children:["Camera Id: ",N.unique_id]}),(0,o.jsxs)("h5",{className:"float-end",children:["Latest Image Captured At: ",null!==N&&void 0!==N&&null!==(e=N.images)&&void 0!==e&&null!==(a=e[0])&&void 0!==a&&a.created_at?new Date(null===N||void 0===N||null===(s=N.images)||void 0===s||null===(m=s[0])||void 0===m?void 0:m.created_at).toLocaleString():"No Image Available"]})]})]})})}),(0,o.jsx)(l.xH,{className:"my-2",children:(0,o.jsx)(l.sl,{children:(0,o.jsxs)("form",{className:"row",onSubmit:function(e){e.preventDefault();var a=new FormData(e.target),s=new Date(a.get("start")).toISOString(),t=new Date(a.get("end")).toISOString();v({start:s,end:t})},children:[(0,o.jsxs)("div",{className:"col-5",children:[(0,o.jsx)(l.L8,{children:"Start DateTime"}),(0,o.jsx)(l.jO,{type:"datetime-local",className:"search-text",name:"start"})]}),(0,o.jsxs)("div",{className:"col-5",children:[(0,o.jsx)(l.L8,{children:"End DateTime"}),(0,o.jsx)(l.jO,{type:"datetime-local",className:"search-text",name:"end"})]}),(0,o.jsxs)("div",{className:"col-2",children:[(0,o.jsx)(l.L8,{style:{opacity:0},children:"Search"}),(0,o.jsx)(l.u5,{type:"submit",className:"float-end w-100",color:"primary",children:"Search"})]})]})})}),(0,o.jsxs)("div",{className:"row",ref:k,children:[null===(u=N.images)||void 0===u?void 0:u.map((function(e,a){return(0,o.jsx)(l.b7,{xs:6,children:(0,o.jsx)(l.xH,{children:(0,o.jsxs)(l.sl,{className:"camera-feed",children:[(0,o.jsxs)("p",{className:"float-end",children:["Captured: ",new Date(e.created_at).toLocaleString()]}),(0,o.jsxs)("a",{className:"link-dark m-2",href:"".concat(d.ZP.base,"uploads/").concat(e.image_name),target:"_blank",rel:"noreferrer",children:[" ",(0,o.jsx)("img",{className:"img-fluid",loading:"lazy",src:"".concat(d.ZP.base,"uploads/").concat(e.image_name),alt:e.image_name})]})]})})},a)})),N.images.length?"":"No Images are available"]})]}):(0,o.jsx)(l.LQ,{color:"primary"})}}}]);
//# sourceMappingURL=8742.7deacabd.chunk.js.map