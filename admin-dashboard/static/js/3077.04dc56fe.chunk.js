"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3077],{93077:function(e,a,t){t.r(a);var n=t(1413),r=t(74165),s=t(15861),c=t(70885),o=t(72791),i=t(43513),l=t(83442),u=t(78983),m=t(9085),d=t(80184),p=function(){var e=new Date;return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()-1)};a.default=function(){var e=o.useState(p()),a=(0,c.Z)(e,2),t=a[0],g=a[1],f=o.useState([]),h=(0,c.Z)(f,2),x=h[0],_=h[1],j=o.useState({per_page:100,page_number:1}),v=(0,c.Z)(j,2),w=v[0],N=v[1],S=o.useState(0),b=(0,c.Z)(S,2),Z=b[0],y=b[1],P=[{name:"Camera Id",selector:function(e){return e.unique_id}},{name:"Date",selector:function(e){return new Date(e.date).toLocaleDateString()}},{name:"Name",selector:function(e){return e.name},sortable:!0},{name:"No. of Images",selector:function(e){return e.image},sortable:!0},{name:"Camera Efficiency",selector:function(e){return(e.image/480*100).toFixed(2)+"%"},sortable:!0}];o.useEffect((function(){var e=window.sessionStorage;e.type&&e.message&&(m.Am[e.type](e.message),e.clear())}),[]),o.useEffect((function(){var e=l.ZP.cameraReport;(0,s.Z)((0,r.Z)().mark((function a(){var n,s;return(0,r.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(e+"?per_page=".concat(w.per_page,"&page_number=").concat(w.page_number),{method:"POST",headers:{Authorization:(0,l.kE)()},body:JSON.stringify({date:t})});case 2:return n=a.sent,a.next=5,n.json();case 5:s=a.sent,_(s.data),y(s.totalResult);case 8:case"end":return a.stop()}}),a)})))()}),[w,t]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m.Ix,{position:"top-right",theme:"colored",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,d.jsx)(u.xH,{className:"my-2",children:(0,d.jsx)(u.sl,{children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("h5",{className:"text-uppercase",children:"Statistics"})})})})}),(0,d.jsx)(u.xH,{className:"my-2",children:(0,d.jsx)(u.sl,{children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-5 float-end ms-auto",children:(0,d.jsx)(u.jO,{type:"date",defaultValue:t,placeholder:"Search..",className:"search-date",max:p()})}),(0,d.jsx)("div",{className:"col-2",children:(0,d.jsx)(u.u5,{type:"button",className:"float-end w-100",color:"primary",onClick:function(){var e=document.querySelector(".search-date").value;g(e)},children:"Search"})})]})})}),(0,d.jsx)(i.ZP,{columns:P,data:x,pagination:!0,onSelectedRowsChange:function(){},paginationServer:!0,paginationTotalRows:Z,paginationPerPage:100,paginationRowsPerPageOptions:[100,50,30],className:"camera-table",onChangeRowsPerPage:function(e){return N((0,n.Z)((0,n.Z)({},w),{},{per_page:e}))},onChangePage:function(e,a){return N((0,n.Z)((0,n.Z)({},w),{},{page_number:e}))}})]})}}}]);
//# sourceMappingURL=3077.04dc56fe.chunk.js.map