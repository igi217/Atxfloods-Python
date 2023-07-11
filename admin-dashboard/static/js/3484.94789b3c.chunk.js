"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3484],{43518:function(e,t,n){var a=n(72791),s=n(10491),r=n(80184);t.Z=function(e){var t=(0,s.L)((function(e){return e.hasPerm})),n=a.useMemo((function(){return e.prefix}),[e.prefix]);return(0,r.jsxs)(r.Fragment,{children:[e.onChangeStatus?(0,r.jsx)("span",{"data-title":"Change Status",className:"".concat(t("status_".concat(n))?"":"disabled"),children:(0,r.jsx)("i",{className:"me-2 fa-solid fa-check-circle text-primary pointer",onClick:e.onChangeStatus})}):"",e.onView?(0,r.jsx)("span",{"data-title":"View Data",className:"".concat(t("view_".concat(n))?"":"disabled"),children:(0,r.jsx)("i",{className:"fa-solid fa-eye pointer me-2 text-info",onClick:e.onView})}):"",e.onEdit?(0,r.jsx)("span",{"data-title":"Edit Data",className:"".concat(t("change_".concat(n))?"":"disabled"),children:(0,r.jsx)("i",{className:"fa-solid fa-pen-to-square pointer me-2 text-warning",onClick:e.onEdit})}):"",e.onDelete?(0,r.jsx)("span",{"data-title":"Delete Data",className:"mx-3 ".concat(t("delete_".concat(n))?"":"disabled"),children:(0,r.jsx)("i",{className:" fa-solid fa-trash pointer text-danger",onClick:e.onDelete})}):(0,r.jsx)(r.Fragment,{})]})}},3484:function(e,t,n){n.r(t);var a=n(74165),s=n(15861),r=n(70885),i=n(72791),c=n(43513),o=n(83442),l=n(78983),u=n(43518),d=n(9085),f=n(16871),m=n(43504),p=n(80184);t.default=function(){var e=(0,f.s0)(),t=i.useState([]),n=(0,r.Z)(t,2),h=n[0],x=n[1],g=i.useState(!0),v=(0,r.Z)(g,2),j=v[0],w=v[1];i.useEffect((function(){var e=window.sessionStorage;e.type&&e.message&&(d.Am[e.type](e.message),e.clear())}),[]);var _=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Do you really want to delete this record?")){e.next=3;break}return e.abrupt("return");case 3:return n=o.ZP.privilegeDelete+t,e.next=6,fetch(n,{method:"GET",headers:{Authorization:(0,o.kE)()}});case 6:return s=e.sent,e.next=9,s.json();case 9:200===e.sent.status&&(w(!j),d.Am.success("Record deleted successfully!"));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=[{name:"Id",selector:function(e){return e.id},sortable:!0},{name:"Privileges",selector:function(e){return e.name},sortable:!0},{name:"Last Modified",selector:function(e){return new Date(e.updated_at).toLocaleString()},sortable:!0},{name:"Action",selector:function(t){return(0,p.jsx)(u.Z,{prefix:"crossing",onEdit:function(){return function(t){e("/privileges/edit",{state:t})}(t)},onDelete:function(){return _(t.id)}})},sortable:!0}];return i.useEffect((function(){var e=o.ZP.privilegeRoles;(0,s.Z)((0,a.Z)().mark((function t(){var n,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{method:"GET",headers:{Authorization:(0,o.kE)()}});case 2:return n=t.sent,t.next=5,n.json();case 5:s=t.sent,console.log(s),x(s.data);case 8:case"end":return t.stop()}}),t)})))()}),[j]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.Ix,{position:"top-right",theme:"colored",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,p.jsx)(l.xH,{className:"my-2",children:(0,p.jsx)(l.sl,{children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-6",children:(0,p.jsx)("h5",{className:"d-inline text-uppercase",children:"Privileges"})}),(0,p.jsx)("div",{className:"col-md-2 ms-auto",children:(0,p.jsx)(m.rU,{to:"/privileges/add",className:"btn btn-primary w-100",children:"Add Privilege"})})]})})}),(0,p.jsx)(c.ZP,{columns:b,data:h})]})}}}]);
//# sourceMappingURL=3484.94789b3c.chunk.js.map