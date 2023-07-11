"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3442],{43518:function(e,t,n){var a=n(72791),s=n(10491),r=n(80184);t.Z=function(e){var t=(0,s.L)((function(e){return e.hasPerm})),n=a.useMemo((function(){return e.prefix}),[e.prefix]);return(0,r.jsxs)(r.Fragment,{children:[e.onChangeStatus?(0,r.jsx)("span",{"data-title":"Change Status",className:"".concat(t("status_".concat(n))?"":"disabled"),children:(0,r.jsx)("i",{className:"me-2 fa-solid fa-check-circle text-primary pointer",onClick:e.onChangeStatus})}):"",e.onView?(0,r.jsx)("span",{"data-title":"View Data",className:"".concat(t("view_".concat(n))?"":"disabled"),children:(0,r.jsx)("i",{className:"fa-solid fa-eye pointer me-2 text-info",onClick:e.onView})}):"",e.onEdit?(0,r.jsx)("span",{"data-title":"Edit Data",className:"".concat(t("change_".concat(n))?"":"disabled"),children:(0,r.jsx)("i",{className:"fa-solid fa-pen-to-square pointer me-2 text-warning",onClick:e.onEdit})}):"",(0,r.jsx)("span",{"data-title":"Delete Data",className:"mx-3 ".concat(t("delete_".concat(n))?"":"disabled"),children:(0,r.jsx)("i",{className:" fa-solid fa-trash pointer text-danger",onClick:e.onDelete})})]})}},4392:function(e,t,n){var a=n(74165),s=n(15861),r=(n(72791),n(78983)),o=n(83442),c=n(80184);t.Z=function(e){var t=e.id,n=e.setCurrent,i=e.setLoad,u=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var s,r,c,u,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=document.querySelector("#statusInput").value,r=document.querySelector("#commentInput").value,c=JSON.stringify({status:s,comment:r}),u=o.ZP.updateCrossingStatus+t,e.next=6,fetch(u,{method:"POST",headers:{Authorization:(0,o.kE)(),"Content-Type":"application/json"},body:c});case 6:return l=e.sent,e.next=9,l.json();case 9:200===e.sent.status&&(i((function(e){return!e})),n(null));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.Tk,{backdrop:!1,keyboard:!1,portal:!1,visible:!!t,alignment:"center",children:(0,c.jsxs)(r.sD,{children:[(0,c.jsxs)("h6",{className:"my-3 custom-header",children:["Update Status",(0,c.jsx)("span",{onClick:function(){return n(null)},children:"\xd7"})]}),(0,c.jsxs)(r.lx,{children:[(0,c.jsxs)(r.LX,{"aria-label":"Default select example",id:"statusInput",children:[(0,c.jsx)("option",{value:"1",children:"Open"}),(0,c.jsx)("option",{value:"0",children:"Close"}),(0,c.jsx)("option",{value:"2",children:"Caution"}),(0,c.jsx)("option",{value:"3",children:"Long time closure"})]}),(0,c.jsx)(r.L8,{htmlFor:"address",children:"Comments"}),(0,c.jsx)(r.PB,{id:"commentInput",rows:"3",name:"comment"}),(0,c.jsx)(r.u5,{type:"button",className:"my-3 px-3",onClick:u,children:"Save"})]})]})})})}},93442:function(e,t,n){n.r(t);var a=n(1413),s=n(74165),r=n(15861),o=n(70885),c=n(72791),i=n(43513),u=n(83442),l=n(43518),d=n(9085),p=n(78983),m=n(16871),h=n(4392),f=n(80184);t.default=function(e){var t=(0,m.s0)(),n=c.useState([]),x=(0,o.Z)(n,2),j=x[0],g=x[1],v=c.useState({per_page:100,page_number:1}),w=(0,o.Z)(v,2),Z=w[0],y=w[1],S=c.useState({search:"",status:""}),b=(0,o.Z)(S,2),C=b[0],k=b[1],_=c.useState(null),N=(0,o.Z)(_,2),P=N[0],E=N[1],A=c.useState(!0),D=(0,o.Z)(A,2),L=D[0],O=D[1],T=c.useState(0),I=(0,o.Z)(T,2),q=I[0],F=I[1],z=[{name:"Id",selector:function(e){return e.id},sortable:!0},{name:"Name",selector:function(e){return e.name},sortable:!0},{name:"Jurisdiction",selector:function(e){return(0,f.jsx)("span",{className:"text-uppercase",children:e.jurisdiction})},sortable:!0},{name:"Address",selector:function(e){return e.address},sortable:!0},{name:"Status",selector:function(e){return(0,f.jsx)("span",{className:"status-".concat(e.status.replace(" ","")),children:e.status})},sortable:!0},{name:"Last Modified",selector:function(e){return new Date(e.updated_at).toLocaleString()},sortable:!0},{name:"Action",selector:function(e){return(0,f.jsx)(l.Z,{prefix:"crossing",onView:function(){return R(e)},onEdit:function(){return V(e)},onDelete:function(){return B(e.id)},onChangeStatus:function(){return E(e.id)}})},sortable:!0}],R=function(e){console.log(e),t("/crossings/view",{state:e})},V=function(e){t("/crossings/edit",{state:e})},B=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Do you really want to delete this record?")){e.next=3;break}return e.abrupt("return");case 3:return n=u.ZP.deleteCrossing+t,e.next=6,fetch(n,{method:"GET",headers:{Authorization:(0,u.kE)()}});case 6:return a=e.sent,e.next=9,a.json();case 9:200===e.sent.status&&(O(!L),d.Am.success("Record deleted successfully!"));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n,a,r,o,c,i,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector(".import-form"),n=u.ZP.crossingsImport,e.next=4,fetch(n,{method:"POST",headers:{Authorization:(0,u.kE)()},body:new FormData(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,t.reset(),o=r.data,c=o.errors,i=o.successfull,l=o.warnings,c.forEach((function(e){d.Am.error(e)})),l.forEach((function(e){d.Am.warning(e)})),i&&d.Am.success(i+" Imported Seccessfully");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.useEffect((function(){var e=window.sessionStorage;e.type&&e.message&&(d.Am[e.type](e.message),e.clear())}),[]),c.useEffect((function(){var e=u.ZP.crossings;(0,r.Z)((0,s.Z)().mark((function t(){var n,a;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e+"?per_page=".concat(Z.per_page,"&page_number=").concat(Z.page_number,"&search=").concat(C.search,"&status=").concat(C.status),{method:"GET",headers:{Authorization:(0,u.kE)()}});case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,g(a.data),F(a.total);case 8:case"end":return t.stop()}}),t)})))()}),[Z,L,C]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Ix,{position:"top-right",theme:"colored",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,f.jsx)(p.xH,{className:"my-2",children:(0,f.jsx)(p.sl,{children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-5",children:(0,f.jsx)(p.jO,{type:"text",placeholder:"Search..",className:"search-text"})}),(0,f.jsx)("div",{className:"col-5",children:(0,f.jsxs)(p.LX,{className:"search-status",children:[(0,f.jsx)("option",{hidden:!0,value:"",children:"Select"}),(0,f.jsx)("option",{value:"0",children:"Closed"}),(0,f.jsx)("option",{value:"1",children:"Open"}),(0,f.jsx)("option",{value:"2",children:"Caution"}),(0,f.jsx)("option",{value:"3",children:"Long time closure"})]})}),(0,f.jsx)("div",{className:"col-2",children:(0,f.jsx)(p.u5,{type:"button",className:"float-end w-100",color:"primary",onClick:function(){var e=document.querySelector(".search-text").value,t=document.querySelector(".search-status").value;k({search:e,status:t})},children:"Search"})})]})})}),(0,f.jsx)(i.ZP,{columns:z,data:j,pagination:!0,paginationServer:!0,paginationPerPage:100,paginationRowsPerPageOptions:[100,50,30],paginationTotalRows:q,onChangeRowsPerPage:function(e){return y((0,a.Z)((0,a.Z)({},Z),{},{per_page:e}))},onChangePage:function(e,t){return y((0,a.Z)((0,a.Z)({},Z),{},{page_number:e}))}}),(0,f.jsx)("form",{encType:"multipart/from-data",className:"d-none import-form",children:(0,f.jsx)("input",{type:"file",name:"file",id:"file",accept:".xlsx",onChange:G})}),(0,f.jsx)(h.Z,{id:P,setCurrent:E,setLoad:O})]})}}}]);
//# sourceMappingURL=3442.e824b1b0.chunk.js.map