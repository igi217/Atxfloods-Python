"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3393],{93393:function(e,a,s){s.r(a);var t=s(74165),n=s(15861),r=(s(72791),s(78983)),l=s(16871),i=s(83442),d=s(9085),c=s(80184);a.default=function(){var e=(0,l.s0)(),a=(0,l.TH)().state,s=function(e){var a={};return new FormData(e).forEach((function(e,s){if(Object.prototype.hasOwnProperty.call(a,s)){var t=a[s];Array.isArray(t)||(t=a[s]=[t]),t.push(e)}else a[s]=isFinite(e)?parseFloat(e):e})),a},u=function(){var r=(0,n.Z)((0,t.Z)().mark((function n(r){var l,c,u,o;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),l=s(r.target),c=i.ZP.jurisdictionUpdate+a.id,t.prev=3,t.next=6,fetch(c,{method:"POST",headers:{Authorization:(0,i.kE)(),"Content-Type":"application/json"},body:JSON.stringify(l)});case 6:if(200===(u=t.sent).status){t.next=9;break}throw u;case 9:return t.next=11,u.json();case 11:200===t.sent.status&&(r.target.reset(),e("/jurisdictions"),(0,i.hK)("success","Record Updated Successfully")),t.next=21;break;case 15:return t.prev=15,t.t0=t.catch(3),t.next=19,t.t0.json();case 19:o=t.sent,d.Am.error(o.message);case 21:case"end":return t.stop()}}),n,null,[[3,15]])})));return function(e){return r.apply(this,arguments)}}();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.Ix,{position:"top-right",theme:"colored",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,c.jsx)(r.xH,{children:(0,c.jsx)(r.sl,{children:(0,c.jsxs)(r.lx,{onSubmit:u,children:[(0,c.jsxs)(r.rb,{children:[(0,c.jsx)(r.b7,{md:12,children:(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsxs)(r.L8,{htmlFor:"name",children:["Abbreviation",(0,c.jsx)("span",{className:"text-danger",children:"*"})]}),(0,c.jsx)(r.jO,{type:"text",defaultValue:a.short_name,placeholder:"Enter Abbreviation",name:"short_name",required:!0})]})}),(0,c.jsx)(r.b7,{md:12,children:(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsxs)(r.L8,{htmlFor:"name",children:["Full Name",(0,c.jsx)("span",{className:"text-danger",children:"*"})]}),(0,c.jsx)(r.jO,{type:"text",placeholder:"Enter Full Name",name:"name",defaultValue:a.name,required:!0})]})})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsxs)(r.L8,{htmlFor:"lat",children:["Latitude Range ",(0,c.jsx)("span",{children:"(Latitude Range : > 25.8419 & < 36.5008)"}),(0,c.jsx)("span",{className:"text-danger",children:"*"})]}),(0,c.jsxs)(r.rb,{children:[(0,c.jsxs)(r.b7,{xs:!0,children:[(0,c.jsx)(r.jO,{type:"number",defaultValue:a.min_lat,placeholder:"Min Latitude",step:1e-8,name:"min_lat",min:25.8419,max:36.5008,"aria-label":"Min Latitude Range",required:!0}),(0,c.jsx)("span",{className:"error_text",children:"It should be a valid Texus Latitude (Range : > 25.8419 & < 36.5008)"})]}),"to",(0,c.jsxs)(r.b7,{xs:!0,children:[(0,c.jsx)(r.jO,{type:"number",defaultValue:a.max_lat,placeholder:"Max Latitude",step:1e-8,name:"max_lat",min:25.8419,max:36.5008,"aria-label":"Max Latitude Range",required:!0}),(0,c.jsx)("span",{className:"error_text",children:"It should be a valid Texus Latitude (Range : > 25.8419 & < 36.5008)"})]})]})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsxs)(r.L8,{htmlFor:"lon",children:["Longitude Range",(0,c.jsx)("span",{children:" (Longitude Range : > -106.6168 & < -93.5074)"}),(0,c.jsx)("span",{className:"text-danger",children:"*"})]}),(0,c.jsxs)(r.rb,{children:[(0,c.jsxs)(r.b7,{xs:!0,children:[(0,c.jsx)(r.jO,{type:"number",defaultValue:a.min_lon,placeholder:"Min Longitude",step:1e-8,name:"min_lon",max:-93.5074,min:-106.6168,"aria-label":"Min Longitude Range",required:!0}),(0,c.jsx)("span",{className:"error_text",children:"It should be a valid Texus Longitude (Range : > -106.6168 & < -93.5074)"})]}),"to",(0,c.jsxs)(r.b7,{xs:!0,children:[(0,c.jsx)(r.jO,{type:"number",defaultValue:a.max_lon,placeholder:"Max Longitude",step:1e-8,name:"max_lon",max:-93.5074,min:-106.6168,"aria-label":"Max Longitude Range",required:!0}),(0,c.jsx)("span",{className:"error_text",children:"It should be a valid Texus Longitude (Range : > -106.6168 & < -93.5074)"})]})]})]}),(0,c.jsx)("div",{className:"mb-3",children:(0,c.jsx)(r.u5,{type:"submit",color:"primary",className:"px-4",children:"Update"})})]})})})]})}}}]);
//# sourceMappingURL=3393.856506ff.chunk.js.map