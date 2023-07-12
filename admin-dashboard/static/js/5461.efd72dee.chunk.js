"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5461],{43518:function(e,t,n){var a=n(72791),s=n(10491),r=n(80184);t.Z=function(e){var t=(0,s.L)((function(e){return e.hasPerm})),n=a.useMemo((function(){return e.prefix}),[e.prefix]);return(0,r.jsxs)(r.Fragment,{children:[e.onChangeStatus?(0,r.jsx)("span",{"data-title":"Change Status",className:"".concat(t("status_".concat(n))?"":"disabled"),children:(0,r.jsx)("i",{className:"me-2 fa-solid fa-check-circle text-primary pointer",onClick:e.onChangeStatus})}):"",e.onView?(0,r.jsx)("span",{"data-title":"View Data",className:"".concat(t("view_".concat(n))?"":"disabled"),children:(0,r.jsx)("i",{className:"fa-solid fa-eye pointer me-2 text-info",onClick:e.onView})}):"",e.onEdit?(0,r.jsx)("span",{"data-title":"Edit Data",className:"".concat(t("change_".concat(n))?"":"disabled"),children:(0,r.jsx)("i",{className:"fa-solid fa-pen-to-square pointer me-2 text-warning",onClick:e.onEdit})}):"",e.onDelete?(0,r.jsx)("span",{"data-title":"Delete Data",className:"mx-3 ".concat(t("delete_".concat(n))?"":"disabled"),children:(0,r.jsx)("i",{className:" fa-solid fa-trash pointer text-danger",onClick:e.onDelete})}):(0,r.jsx)(r.Fragment,{})]})}},4392:function(e,t,n){var a=n(74165),s=n(15861),r=(n(72791),n(78983)),c=n(83442),o=n(80184);t.Z=function(e){var t=e.id,n=e.setCurrent,i=e.setLoad,u=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var s,r,o,u,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=document.querySelector("#statusInput").value,r=document.querySelector("#commentInput").value,o=JSON.stringify({status:s,comment:r}),u=c.ZP.updateCrossingStatus+t,e.next=6,fetch(u,{method:"POST",headers:{Authorization:(0,c.kE)(),"Content-Type":"application/json"},body:o});case 6:return l=e.sent,e.next=9,l.json();case 9:200===e.sent.status&&(i((function(e){return!e})),n(null));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.Tk,{backdrop:!1,keyboard:!1,portal:!1,visible:!!t,alignment:"center",children:(0,o.jsxs)(r.sD,{children:[(0,o.jsxs)("h6",{className:"my-3 custom-header",children:["Update Status",(0,o.jsx)("span",{onClick:function(){return n(null)},children:"\xd7"})]}),(0,o.jsxs)(r.lx,{children:[(0,o.jsxs)(r.LX,{"aria-label":"Default select example",id:"statusInput",children:[(0,o.jsx)("option",{value:"1",children:"Open"}),(0,o.jsx)("option",{value:"0",children:"Close"}),(0,o.jsx)("option",{value:"2",children:"Caution"}),(0,o.jsx)("option",{value:"3",children:"Long time closure"})]}),(0,o.jsx)(r.L8,{htmlFor:"address",children:"Comments"}),(0,o.jsx)(r.PB,{id:"commentInput",rows:"3",name:"comment"}),(0,o.jsx)(r.u5,{type:"button",className:"my-3 px-3",onClick:u,children:"Save"})]})]})})})}},35461:function(e,t,n){n.r(t);var a=n(1413),s=n(74165),r=n(15861),c=n(70885),o=n(72791),i=n(43513),u=n(83442),l=n(43518),d=n(9085),m=n(78983),p=n(16871),f=n(4392),h=n(80184);t.default=function(e){var t=(0,p.s0)(),n=o.useState([]),x=(0,c.Z)(n,2),j=x[0],g=x[1],b=o.useState({per_page:100,page_number:1}),v=(0,c.Z)(b,2),Z=v[0],w=v[1],y=o.useState({search:"",status:""}),_=(0,c.Z)(y,2),k=_[0],C=_[1],N=o.useState(null),S=(0,c.Z)(N,2),P=S[0],E=S[1],D=o.useState(!0),A=(0,c.Z)(D,2),L=A[0],O=A[1],T=o.useState(0),F=(0,c.Z)(T,2),I=F[0],q=F[1],R=[{name:"Id",selector:function(e){return e.id},sortable:!0},{name:"Jurisdiction",selector:function(e){return(0,h.jsx)("span",{className:"text-uppercase",children:e.jurisdiction})},sortable:!0},{name:"First Name",selector:function(e){return e.first_name},sortable:!0},{name:"Last Name",selector:function(e){return e.last_name},sortable:!0},{name:"Username",selector:function(e){return e.username},sortable:!0},{name:"Email",selector:function(e){return e.email},sortable:!0},{name:"Contact Number",selector:function(e){return(0,h.jsxs)("a",{className:"fw-bold text-dark text-decoration-none",href:"tel:".concat(e.phone),children:[(0,h.jsx)("i",{className:"fa-solid fa-phone me-1"}),e.phone]})},sortable:!0},{name:"Admin Type",selector:function(e){return e.type},sortable:!0},{name:"Action",selector:function(e){return(0,h.jsx)(l.Z,{prefix:"crossing",onEdit:function(){return V(e)},onDelete:function(){return z(e.id)}})},sortable:!0}],V=function(e){t("/subadmin/edit",{state:e})},z=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Do you really want to delete this record?")){e.next=3;break}return e.abrupt("return");case 3:return n=u.ZP.subAdminDelete+t,e.next=6,fetch(n,{method:"GET",headers:{Authorization:(0,u.kE)()}});case 6:return a=e.sent,e.next=9,a.json();case 9:200===e.sent.status&&(O(!L),d.Am.success("Record deleted successfully!"));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function B(){return(B=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.EZ)(u.ZP.subAdminList+"?per_page=10000&page_number=1","subadmins.csv","data");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o.useEffect((function(){var e=window.sessionStorage;e.type&&e.message&&(d.Am[e.type](e.message),e.clear())}),[]),o.useEffect((function(){var e=u.ZP.subAdminList;(0,r.Z)((0,s.Z)().mark((function t(){var n,a;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e+"?per_page=".concat(Z.per_page,"&page_number=").concat(Z.page_number,"&search=").concat(k.search),{method:"GET",headers:{Authorization:(0,u.kE)()}});case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,g(a.data),q(a.total);case 8:case"end":return t.stop()}}),t)})))()}),[Z,L,k]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Ix,{position:"top-right",theme:"colored",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,h.jsx)(m.xH,{className:"my-2",children:(0,h.jsx)(m.sl,{children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-5",children:(0,h.jsx)(m.jO,{type:"text",placeholder:"Search..",className:"search-text"})}),(0,h.jsx)("div",{className:"col-2",children:(0,h.jsx)(m.u5,{type:"button",className:"float-end w-100",color:"primary",onClick:function(){var e=document.querySelector(".search-text").value;C({search:e,status:1})},children:"Search"})}),(0,h.jsx)("div",{className:"col-2",children:(0,h.jsx)(m.u5,{type:"button",className:"float-end w-100",color:"success",onClick:function(){return B.apply(this,arguments)},children:"Download CSV"})})]})})}),(0,h.jsx)(i.ZP,{columns:R,data:j,pagination:!0,paginationServer:!0,paginationTotalRows:I,paginationPerPage:100,paginationRowsPerPageOptions:[100,50,30],onChangeRowsPerPage:function(e){return w((0,a.Z)((0,a.Z)({},Z),{},{per_page:e}))},onChangePage:function(e,t){return w((0,a.Z)((0,a.Z)({},Z),{},{page_number:e}))}}),(0,h.jsx)(f.Z,{id:P,setCurrent:E,setLoad:O})]})}}}]);
//# sourceMappingURL=5461.efd72dee.chunk.js.map