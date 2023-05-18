"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2133],{82133:function(e,n,a){a.r(n);var t=a(1413),r=a(74165),s=a(15861),l=a(37762),o=a(70885),i=a(42982),c=a(72791),d=a(78559),u=a(78983),m=a(16871),h=a(43504),x=a(83442),p=a(9085),f=a(10491),j=a(4828),v=a(80184),g=function(e,n){var a=n.map((function(n){return n[e]})),t=Math.min.apply(Math,(0,i.Z)(a)),r=Math.max.apply(Math,(0,i.Z)(a));"lon"===e&&r-t>180&&(a=a.map((function(e){return e<r-180?e+360:e})),t=Math.min.apply(Math,(0,i.Z)(a)),r=Math.max.apply(Math,(0,i.Z)(a)));var s=(t+r)/2;return"lon"===e&&s>180&&(s-=360),s};n.default=function(){var e=(0,f.L)((function(e){return e.user})),n=c.useState({lat:void 0,lon:void 0}),a=(0,o.Z)(n,2),i=a[0],y=a[1],_=c.useRef(15),b=(0,m.s0)(),N=c.useState(!1),Z=(0,o.Z)(N,2),w=Z[0],L=Z[1],C=c.useState({}),F=(0,o.Z)(C,2),S=F[0],k=F[1],A=function(e){var n,a=new FormData(e),t={},r=(0,l.Z)(a);try{for(r.s();!(n=r.n()).done;){var s=n.value;t[s[0]]=s[1]}}catch(o){r.e(o)}finally{r.f()}return t},O=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var a,t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(a=A(n.target)).status=parseInt(a.status),a.lat=parseFloat(a.lat),a.lon=parseFloat(a.lon),t=x.ZP.createCameras,e.next=8,fetch(t,{method:"POST",headers:{Authorization:(0,x.kE)(),"Content-Type":"application/json"},body:JSON.stringify(a)});case 8:return s=e.sent,e.next=11,s.json();case 11:200===e.sent.status&&(b("/cameras"),(0,x.hK)("success","Record Inserted Successfully"));case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return c.useEffect((function(){var n,a=(n=[{lat:e.max_lat,lon:e.max_lon},{lat:e.min_lat,lon:e.min_lon}],{lat:g("lat",n),lon:g("lon",n)}),r=d.map("map").setView([i.lat||a.lat,i.lon||a.lon],_.current);d.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en",{}).addTo(r),r.on("zoomend",(function(e){_.current=r.getZoom()}));var s=d.marker([i.lat||a.lat,i.lon||a.lon],{draggable:!0,icon:d.icon({iconUrl:j,iconSize:[50,50],iconAnchor:[0,0]})}).on("dragend",(function(){var n=s.getLatLng(),a=n.lat,r=n.lng;a>e.max_lat||a<e.min_lat||r>e.max_lon||r<e.min_lon?y((0,t.Z)({},i)):y({lat:a.toFixed(4),lon:r.toFixed(4)})})).addTo(r);return function(){r.remove()}}),[i,e,S]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.Ix,{position:"top-right",theme:"colored",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,v.jsx)(u.xH,{className:"my-2",children:(0,v.jsxs)(u.sl,{children:[(0,v.jsx)("h5",{className:"d-inline text-uppercase",children:"Add Cameras"}),(0,v.jsx)(h.rU,{to:"/cameras",className:"btn text-uppercase btn-sm px-4  btn-primary float-right",children:"Back"})]})}),(0,v.jsx)(u.xH,{children:(0,v.jsx)(u.sl,{children:(0,v.jsxs)(u.lx,{onSubmit:O,children:[(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsxs)(u.L8,{htmlFor:"name",children:["Display Name",(0,v.jsx)("span",{className:"text-danger",children:"*"})]}),(0,v.jsx)(u.jO,{type:"text",placeholder:"Enter the Display Name",name:"name",required:!0})]}),(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsxs)(u.L8,{htmlFor:"address",children:["Address",(0,v.jsx)("span",{className:"text-danger",children:"*"})]}),(0,v.jsx)(u.PB,{rows:"3",name:"address",required:!0})]}),(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsxs)(u.L8,{htmlFor:"name",children:["Camera Id",(0,v.jsx)("span",{className:"text-danger",children:"*"})]}),(0,v.jsx)(u.jO,{type:"text",placeholder:"Unique Camera Id.",name:"unique_id",required:!0})]}),(0,v.jsx)("div",{className:"mb-3",children:(0,v.jsx)(u.kV,{size:"xl",name:"display_status",value:"true",label:"Display on Frontend",onChange:function(){L(!w),k({})}})}),(0,v.jsxs)("div",{className:w?"":"d-none",children:[(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsxs)(u.L8,{htmlFor:"lat",children:["Latitude",(0,v.jsx)("span",{})," (Allowed Range : > ",e.min_lat," & < ",e.max_lat,")",(0,v.jsx)("span",{className:"text-danger",children:"*"})]}),(0,v.jsx)(u.jO,{type:"number",placeholder:"Enter Latitude",step:1e-8,min:e.min_lat,max:e.max_lat,name:"lat",onChange:function(e){return y((function(n){return(0,t.Z)((0,t.Z)({},n),{},{lat:e.target.value})}))},value:i.lat,required:w}),(0,v.jsxs)("span",{className:"error_text",children:["It should be a valid  Latitude (Allowed Range : > ",e.min_lat," & < ",e.max_lat,")"]})]}),(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsxs)(u.L8,{htmlFor:"lon",children:["Longitude ",(0,v.jsxs)("span",{children:[" (Allowed Range : > ",e.min_lon," & < ",e.max_lon,")"]}),(0,v.jsx)("span",{className:"text-danger",children:"*"})]}),(0,v.jsx)(u.jO,{type:"number",placeholder:"Enter Longitude",step:1e-8,max:e.max_lon,min:e.min_lon,name:"lon",onChange:function(e){return y((function(n){return(0,t.Z)((0,t.Z)({},n),{},{lon:e.target.value})}))},value:i.lon,required:w}),(0,v.jsxs)("span",{className:"error_text",children:["It should be a valid Longitude (Allowed Range : > ",e.min_lon," & < ",e.max_lon,")"]})]}),(0,v.jsx)("div",{className:"mb-3",children:(0,v.jsx)("div",{id:"map"})})]}),(0,v.jsx)("div",{className:"mb-3",children:(0,v.jsx)(u.u5,{type:"submit",color:"primary",className:"px-4",children:"Create"})})]})})})]})}},37762:function(e,n,a){a.d(n,{Z:function(){return r}});var t=a(40181);function r(e,n){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=(0,t.Z)(e))||n&&e&&"number"===typeof e.length){a&&(e=a);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){i=!0,l=e},f:function(){try{o||null==a.return||a.return()}finally{if(i)throw l}}}}}}]);
//# sourceMappingURL=2133.6089dbe6.chunk.js.map