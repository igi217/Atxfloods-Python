"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3494],{23494:function(e,n,a){a.r(n);var t=a(74165),s=a(15861),r=a(1413),l=a(70885),o=a(42982),i=a(72791),c=a(78559),d=a(78983),m=a(16871),u=a(43504),x=a(83442),h=a(9085),p=a(10491),j=a(4828),f=a(80184),g=function(e,n){var a=n.map((function(n){return n[e]})),t=Math.min.apply(Math,(0,o.Z)(a)),s=Math.max.apply(Math,(0,o.Z)(a));"lon"===e&&s-t>180&&(a=a.map((function(e){return e<s-180?e+360:e})),t=Math.min.apply(Math,(0,o.Z)(a)),s=Math.max.apply(Math,(0,o.Z)(a)));var r=(t+s)/2;return"lon"===e&&r>180&&(r-=360),r};n.default=function(){var e=(0,m.s0)(),n=(0,p.L)((function(e){return e.user})),a=i.useRef(15),o=i.useState([]),v=(0,l.Z)(o,2),_=v[0],N=v[1],b=i.useState({lat:void 0,lon:void 0}),L=(0,l.Z)(b,2),y=L[0],Z=L[1],C=function(e){var n=e.querySelectorAll(".form-control"),a={};return n.forEach((function(e){a[e.name]=e.value})),a};i.useEffect((function(){var e,t=(e=[{lat:n.max_lat,lon:n.max_lon},{lat:n.min_lat,lon:n.min_lon}],{lat:g("lat",e),lon:g("lon",e)}),s=c.map("map").setView([y.lat||t.lat,y.lon||t.lon],a.current);c.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en",{}).addTo(s),s.on("zoomend",(function(e){a.current=s.getZoom()}));var l=c.marker([y.lat||t.lat,y.lon||t.lon],{draggable:!0,icon:c.icon({iconUrl:j,iconSize:[50,50],iconAnchor:[0,0]})}).on("dragend",(function(){var e=l.getLatLng(),a=e.lat,t=e.lng;a>n.max_lat||a<n.min_lat||t>n.max_lon||t<n.min_lon?Z((0,r.Z)({},y)):Z({lat:a.toFixed(4),lon:t.toFixed(4)})})).addTo(s);return function(){s.remove()}}),[y,n]),i.useEffect((function(){(0,s.Z)((0,t.Z)().mark((function e(){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x.ZP.jurisdictionList+"?per_page=100&page_number=1",{method:"GET",headers:{Authorization:(0,x.kE)(),"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,N(a.data);case 7:case"end":return e.stop()}}),e)})))()}),[]);var w=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(a){var s,r,l;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),(s=C(a.target)).status=parseInt(s.status),s.lat=parseFloat(s.lat),s.lon=parseFloat(s.lon),r=x.ZP.createCrossing,n.next=8,fetch(r,{method:"POST",headers:{Authorization:(0,x.kE)(),"Content-Type":"application/json"},body:JSON.stringify(s)});case 8:return l=n.sent,n.next=11,l.json();case 11:200===n.sent.status&&(e(-1),(0,x.hK)("success","Record Created Successfully"));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h.Ix,{position:"top-right",theme:"colored",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,f.jsx)(d.xH,{className:"my-2",children:(0,f.jsxs)(d.sl,{children:[(0,f.jsx)("h5",{className:"d-inline text-uppercase",children:"Add Crossing"}),(0,f.jsx)(u.rU,{to:"/crossings",className:"btn text-uppercase btn-sm px-4  btn-primary float-right",children:"Back"})]})}),(0,f.jsx)(d.xH,{children:(0,f.jsx)(d.sl,{children:(0,f.jsxs)(d.lx,{onSubmit:w,children:[(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsxs)(d.L8,{htmlFor:"name",children:["Jurisdiction",(0,f.jsx)("span",{className:"text-danger",children:"*"})]}),(0,f.jsx)(d.LX,{className:"form-control",name:"jurisdiction",required:!0,children:_.map((function(e,n){return(0,f.jsx)("option",{value:e.short_name,children:e.name},n)}))})]}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsxs)(d.L8,{htmlFor:"name",children:["Crossing Name",(0,f.jsx)("span",{className:"text-danger",children:"*"})]}),(0,f.jsx)(d.jO,{type:"text",placeholder:"Enter Crossing Name",name:"name",required:!0})]}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsxs)(d.L8,{htmlFor:"address",children:["Address",(0,f.jsx)("span",{className:"text-danger",children:"*"})]}),(0,f.jsx)(d.PB,{rows:"3",name:"address",required:!0})]}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsxs)(d.L8,{htmlFor:"lat",children:["Latitude",(0,f.jsxs)("span",{children:[" (Allowed Range : > ",n.min_lat," & < ",n.max_lat,")"]}),(0,f.jsx)("span",{className:"text-danger",children:"*"})]}),(0,f.jsx)(d.jO,{type:"number",placeholder:"Enter Latitude",step:1e-8,min:n.min_lat,max:n.max_lat,name:"lat",onChange:function(e){return Z((function(n){return(0,r.Z)((0,r.Z)({},n),{},{lat:e.target.value})}))},value:y.lat,required:!0}),(0,f.jsxs)("span",{className:"error_text",children:["It should be a valid  Latitude (Allowed Range : > ",n.min_lat," & < ",n.max_lat,")"]})]}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsxs)(d.L8,{htmlFor:"lon",children:["Longitude",(0,f.jsxs)("span",{children:[" (Allowed Range : > ",n.min_lon," & < ",n.max_lon,")"]}),(0,f.jsx)("span",{className:"text-danger",children:"*"})]}),(0,f.jsx)(d.jO,{type:"number",placeholder:"Enter Longitude",step:1e-8,max:n.max_lon,min:n.min_lon,name:"lon",onChange:function(e){return Z((function(n){return(0,r.Z)((0,r.Z)({},n),{},{lon:e.target.value})}))},value:y.lon,required:!0}),(0,f.jsxs)("span",{className:"error_text",children:["It should be a valid Longitude (Allowed Range : > ",n.min_lon," & < ",n.max_lon,")"]})]}),(0,f.jsx)("div",{className:"mb-3",children:(0,f.jsx)("div",{id:"map"})}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)(d.L8,{htmlFor:"comment",children:"Comments"}),(0,f.jsx)(d.PB,{rows:"3",name:"comment"})]}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsxs)(d.L8,{htmlFor:"status",children:["Status",(0,f.jsx)("span",{className:"text-danger",children:"*"})]}),(0,f.jsxs)(d.LX,{className:"form-control","aria-label":"Default select example",name:"status",required:!0,children:[(0,f.jsx)("option",{hidden:!0,children:"Select Status"}),(0,f.jsx)("option",{value:"0",children:"Closed"}),(0,f.jsx)("option",{value:"1",children:"Open"}),(0,f.jsx)("option",{value:"2",children:"Caution"}),(0,f.jsx)("option",{value:"3",children:"Long time closure"})]})]}),(0,f.jsx)("div",{className:"mb-3",children:(0,f.jsx)(d.u5,{type:"submit",color:"primary",className:"px-4",children:"Create"})})]})})})]})}}}]);
//# sourceMappingURL=3494.992972f2.chunk.js.map