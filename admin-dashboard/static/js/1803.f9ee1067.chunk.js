"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1803],{1803:function(e,s,a){a.r(s);var t=a(74165),r=a(15861),n=a(70885),c=a(72791),i=a(78983),l=a(16871),o=a(83442),u=a(9085),d=a(80184);s.default=function(){var e=c.useState([]),s=(0,n.Z)(e,2),a=(s[0],s[1]),m=(0,l.TH)(),h=(0,l.s0)(),p=function(e){var s=e.querySelectorAll(".form-control"),a={};return s.forEach((function(e){a[e.name]=e.value})),a},x=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(s){var a,r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),a=p(s.target),r=o.ZP.cameraNotificationsUpdate+m.state.id,e.next=5,fetch(r,{method:"POST",headers:{Authorization:(0,o.kE)(),"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:return n=e.sent,e.next=8,n.json();case 8:200===e.sent.status&&(h("/camera/notifications"),(0,o.hK)("success","Record Updated Successfully"));case 10:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return c.useEffect((function(){(0,r.Z)((0,t.Z)().mark((function e(){var s,r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o.ZP.cameras,e.next=3,fetch(s,{headers:{Authorization:(0,o.kE)()}});case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,console.log(n),a(n.attributes);case 9:case"end":return e.stop()}}),e)})))()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.Ix,{position:"top-right",theme:"colored",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,d.jsx)(i.xH,{className:"my-2",children:(0,d.jsxs)(i.sl,{children:[(0,d.jsx)("h5",{className:"d-inline text-uppercase",children:"Camera Notification Edit"}),(0,d.jsx)("span",{onClick:function(){return h(-1)},className:"btn text-uppercase btn-sm px-4  btn-primary float-right",children:"Back"})]})}),(0,d.jsx)(i.xH,{children:(0,d.jsx)(i.sl,{children:(0,d.jsxs)(i.lx,{onSubmit:x,children:[(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsxs)(i.L8,{htmlFor:"name",children:["Display Name",(0,d.jsx)("span",{className:"text-danger",children:"*"})]}),(0,d.jsx)(i.LX,{name:"camera_id",className:"form-control",disabled:!0,children:(0,d.jsx)("option",{value:m.state.camera_id,hidden:!0,children:m.state.camera_name})})]}),(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsxs)(i.L8,{htmlFor:"expected_images",children:["Expected Images",(0,d.jsx)("span",{className:"text-danger",children:"*"})]}),(0,d.jsx)(i.jO,{type:"number",name:"expected_image",min:"1",required:!0,placeholder:" ",defaultValue:m.state.expected_image}),(0,d.jsx)("span",{className:"error_text",children:"Must be a greater than 0"})]}),(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsxs)(i.L8,{htmlFor:"hours",children:["Hours",(0,d.jsx)("span",{className:"text-danger",children:"*"})]}),(0,d.jsx)(i.jO,{type:"number",name:"hours",min:"0",step:.001,required:!0,placeholder:" ",defaultValue:m.state.hours}),(0,d.jsx)("span",{className:"error_text",children:"Must be a valid positive number(upto 2 decimal)"})]}),(0,d.jsx)("div",{className:"mb-3",children:(0,d.jsx)(i.u5,{type:"submit",color:"primary",className:"px-4",children:"Update"})})]})})})]})}}}]);
//# sourceMappingURL=1803.f9ee1067.chunk.js.map