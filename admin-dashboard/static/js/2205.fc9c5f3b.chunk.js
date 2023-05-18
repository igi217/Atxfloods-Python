"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2205],{32205:function(e,s,a){a.r(s);var r=a(74165),n=a(15861),t=a(70885),i=a(72791),l=a(78983),c=a(16871),d=a(83442),m=a(9085),o=(a(4828),a(80184));s.default=function(){var e=i.useState({}),s=(0,t.Z)(e,2),a=s[0],x=s[1],h=i.useState([]),u=(0,t.Z)(h,2),j=u[0],p=u[1],b=(0,c.s0)(),f=function(e){var s={};return new FormData(e).forEach((function(e,a){if(Object.prototype.hasOwnProperty.call(s,a)){var r=s[a];Array.isArray(r)||(r=s[a]=[r]),r.push(e)}else s[a]=e})),s},N=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(s){var a,n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),(a=f(s.target)).is_active="true"===a.is_active,n=d.ZP.subAdminAdd,e.next=6,fetch(n,{method:"POST",headers:{Authorization:(0,d.kE)(),"Content-Type":"application/json"},body:JSON.stringify(a)});case 6:return t=e.sent,e.next=9,t.json();case 9:200===e.sent.status&&(s.target.reset(),b("/subadmin/list"),(0,d.hK)("success","Record Created Successfully"));case 11:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),g=function(e,s){var a=document.querySelectorAll('[name="user_permissions"]');"all"!==s?a.forEach((function(a){a.checked=!1,s.includes(a.value)&&(a.checked=e.target.checked)})):a.forEach((function(s){s.checked=e.target.checked}))};return i.useEffect((function(){(0,n.Z)((0,r.Z)().mark((function e(){var s,a,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=d.ZP.userPermissions,e.next=3,fetch(s,{method:"GET",headers:{Authorization:(0,d.kE)(),"Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,x(n.data),p(n.roles);case 9:case"end":return e.stop()}}),e)})))()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.Ix,{position:"top-right",theme:"colored",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,o.jsx)(l.xH,{children:(0,o.jsx)(l.sl,{children:(0,o.jsxs)(l.lx,{onSubmit:N,children:[(0,o.jsxs)(l.rb,{children:[(0,o.jsx)(l.b7,{md:6,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["First Name",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.jO,{type:"text",placeholder:"Enter First Name",name:"first_name",required:!0})]})}),(0,o.jsx)(l.b7,{md:6,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["Last Name",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.jO,{type:"text",placeholder:"Enter Last Name",name:"last_name",required:!0})]})})]}),(0,o.jsxs)(l.rb,{children:[(0,o.jsx)(l.b7,{md:6,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["User Name",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.jO,{type:"text",placeholder:"Enter User Name",name:"username",required:!0})]})}),(0,o.jsx)(l.b7,{md:6,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["Password",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.jO,{type:"password",placeholder:"Enter Password",name:"password",pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$",required:!0}),(0,o.jsxs)("span",{className:"error_text",children:[(0,o.jsx)("i",{className:"fa-solid fa-exclamation-circle ms-1"})," Password length should be between 8 and 12 ",(0,o.jsx)("br",{}),(0,o.jsx)("i",{className:"fa-solid fa-exclamation-circle ms-1"})," It must contain atleast 1 lowercase character and 1 uppercase character ",(0,o.jsx)("br",{}),(0,o.jsx)("i",{className:"fa-solid fa-exclamation-circle ms-1"})," It must contain atleast 1 number and 1 symbol ",(0,o.jsx)("br",{})]})]})})]}),(0,o.jsxs)(l.rb,{children:[(0,o.jsx)(l.b7,{md:6,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["Email",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.jO,{type:"email",placeholder:"Enter Email",name:"email",required:!0}),(0,o.jsx)("span",{className:"error_text",children:"Should be a valid Email Address"})]})}),(0,o.jsx)(l.b7,{md:6,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["Contact No",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.jO,{type:"tel",placeholder:"Enter Contact Number",name:"phone",required:!0}),(0,o.jsx)("span",{className:"error_text",children:"Should be a valid Contact Number"})]})}),(0,o.jsx)(l.b7,{md:12,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["Jurisdiction",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.jO,{type:"text",placeholder:"Enter Jurisdiction",name:"jurisdiction",required:!0})]})})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"address",children:["Address",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.PB,{rows:"3",name:"address",required:!0})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"lat",children:["Latitude Range ",(0,o.jsx)("span",{children:"(Latitude Range : > 25.8419 & < 36.5008)"}),(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsxs)(l.rb,{children:[(0,o.jsxs)(l.b7,{xs:!0,children:[(0,o.jsx)(l.jO,{type:"number",placeholder:"Max Latitude",step:1e-8,name:"max_lat",min:25.8419,max:36.5008,"aria-label":"Max Latitude Range",required:!0}),(0,o.jsx)("span",{className:"error_text",children:"It should be a valid Texus Latitude (Range : > 25.8419 & < 36.5008)"})]}),"to",(0,o.jsxs)(l.b7,{xs:!0,children:[(0,o.jsx)(l.jO,{type:"number",placeholder:"Min Latitude",step:1e-8,name:"min_lat",min:25.8419,max:36.5008,"aria-label":"Min Latitude Range",required:!0}),(0,o.jsx)("span",{className:"error_text",children:"It should be a valid Texus Latitude (Range : > 25.8419 & < 36.5008)"})]})]})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"lon",children:["Longitude Range",(0,o.jsx)("span",{children:" (Longitude Range : > -106.6168 & < -93.5074)"}),(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsxs)(l.rb,{children:[(0,o.jsxs)(l.b7,{xs:!0,children:[(0,o.jsx)(l.jO,{type:"number",placeholder:"Max Longitude",step:1e-8,name:"max_lon",max:-93.5074,min:-106.6168,"aria-label":"Max Longitude Range",required:!0}),(0,o.jsx)("span",{className:"error_text",children:"It should be a valid Texus Longitude (Range : > -106.6168 & < -93.5074)"})]}),"to",(0,o.jsxs)(l.b7,{xs:!0,children:[(0,o.jsx)(l.jO,{type:"number",placeholder:"Min Longitude",step:1e-8,name:"min_lon",max:-93.5074,min:-106.6168,"aria-label":"Min Longitude Range",required:!0}),(0,o.jsx)("span",{className:"error_text",children:"It should be a valid Texus Longitude (Range : > -106.6168 & < -93.5074)"})]})]})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"status",children:["Status",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsxs)(l.LX,{className:"form-control","aria-label":"Default select example",name:"is_active",required:!0,children:[(0,o.jsx)("option",{children:"Select Status"}),(0,o.jsx)("option",{value:!0,children:"Active"}),(0,o.jsx)("option",{value:!1,children:"Inactive"})]})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"lon",children:["User Permissions",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsxs)(l.rb,{children:[(0,o.jsx)(l.b7,{md:3,className:"my-3 fw-bold",onChange:function(e){return g(e,"all")},children:(0,o.jsx)(l.EC,{type:"radio",label:"All Privileges",name:"default_permissions"})}),j.map((function(e,s){return(0,o.jsx)(l.b7,{md:3,className:"my-3 fw-bold",onChange:function(s){return g(s,e.permissions)},children:(0,o.jsx)(l.EC,{type:"radio",label:e.name,name:"default_permissions"})},s)}))]}),(0,o.jsx)(l.rb,{children:Object.keys(a).map((function(e,s){return(0,o.jsxs)(l.b7,{md:12,className:"my-1 perm-box-main",style:{textTransform:"capitalize"},children:[(0,o.jsx)("h6",{className:"my-2",children:e}),(0,o.jsx)(l.rb,{children:Object.keys(a[e]).map((function(s,r){return(0,o.jsx)(l.b7,{md:3,className:"permission-box",children:(0,o.jsx)(l.EC,{type:"checkbox",value:s,label:a[e][s],name:"user_permissions"})},r)}))}),(0,o.jsxs)("span",{className:"error_text",children:[(0,o.jsx)("i",{className:"fa-solid fa-exclamation-circle me-2"}),"You must check first permission to make other permissions work properly"]})]},s)}))})]}),(0,o.jsx)("div",{className:"mb-3",children:(0,o.jsx)(l.u5,{type:"submit",color:"primary",className:"px-4",children:"Create"})})]})})})]})}}}]);
//# sourceMappingURL=2205.fc9c5f3b.chunk.js.map