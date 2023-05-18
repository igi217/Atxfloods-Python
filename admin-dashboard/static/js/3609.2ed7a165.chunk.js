"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3609],{53609:function(e,a,n){n.r(a);var t=n(74165),s=n(15861),l=n(1413),r=n(70885),o=n(42982),i=n(72791),c=n(78559),d=n(78983),u=n(16871),m=n(83442),x=n(9085),h=n(10491),p=n(4828),j=n(80184),f={open:1,closed:0,caution:2},g=function(e,a){var n=a.map((function(a){return a[e]})),t=Math.min.apply(Math,(0,o.Z)(n)),s=Math.max.apply(Math,(0,o.Z)(n));"lon"===e&&s-t>180&&(n=n.map((function(e){return e<s-180?e+360:e})),t=Math.min.apply(Math,(0,o.Z)(n)),s=Math.max.apply(Math,(0,o.Z)(n)));var l=(t+s)/2;return"lon"===e&&l>180&&(l-=360),l};a.default=function(){var e=(0,h.L)((function(e){return e.user})),a=(0,u.TH)(),n=i.useRef(15),o=i.useState({lat:a.state.lat,lon:a.state.lon}),v=(0,r.Z)(o,2),_=v[0],N=v[1],b=(0,u.s0)(),y=function(e){var a=e.querySelectorAll(".form-control"),n={};return a.forEach((function(e){n[e.name]=e.value})),n};i.useEffect((function(){var a,t=(a=[{lat:e.max_lat,lon:e.max_lon},{lat:e.min_lat,lon:e.min_lon}],{lat:g("lat",a),lon:g("lon",a)}),s=c.map("map").setView([_.lat||t.lat,_.lon||t.lon],n.current);s.on("zoomend",(function(e){n.current=s.getZoom()})),c.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en",{}).addTo(s);var r=c.marker([_.lat||t.lat,_.lon||t.lon],{draggable:!0,icon:c.icon({iconUrl:p,iconSize:[50,50],iconAnchor:[0,0]})}).on("dragend",(function(){var a=r.getLatLng(),n=a.lat,t=a.lng;n>e.max_lat||n<e.min_lat||t>e.max_lon||t<e.min_lon?N((0,l.Z)({},_)):N({lat:n.toFixed(4),lon:t.toFixed(4)})})).addTo(s);return function(){s.remove()}}),[_,e]);var L=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(n){var s,l,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(s=y(n.target)).status=parseInt(s.status),s.lat=parseFloat(s.lat),s.lon=parseFloat(s.lon),l=m.ZP.updateCrossing+a.state.id,e.next=8,fetch(l,{method:"POST",headers:{Authorization:(0,m.kE)(),"Content-Type":"application/json"},body:JSON.stringify(s)});case 8:return r=e.sent,e.next=11,r.json();case 11:200===e.sent.status&&(b("/crossings"),(0,m.hK)("success","Record updated Successfully"));case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x.Ix,{position:"top-right",theme:"colored",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,j.jsx)(d.xH,{className:"my-2",children:(0,j.jsxs)(d.sl,{children:[(0,j.jsx)("h5",{className:"d-inline text-uppercase",children:"Edit Crossing"}),(0,j.jsx)("span",{onClick:function(){return b(-1)},className:"btn text-uppercase btn-sm px-4  btn-primary float-right",children:"Back"})]})}),(0,j.jsx)(d.xH,{children:(0,j.jsx)(d.sl,{children:(0,j.jsxs)(d.lx,{onSubmit:L,children:[(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsxs)(d.L8,{htmlFor:"name",children:["Crossing Name",(0,j.jsx)("span",{className:"text-danger",children:"*"})]}),(0,j.jsx)(d.jO,{type:"text",placeholder:"Enter Crossing Name",name:"name",defaultValue:a.state.name})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsxs)(d.L8,{htmlFor:"jurisdiction",children:["Your jurisdiction",(0,j.jsx)("span",{className:"text-danger",children:"*"})]}),(0,j.jsx)(d.jO,{type:"text",placeholder:"Enter Your Jurisdiction",name:"jurisdiction",defaultValue:a.state.jurisdiction})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsxs)(d.L8,{htmlFor:"address",children:["Address",(0,j.jsx)("span",{className:"text-danger",children:"*"})]}),(0,j.jsx)(d.PB,{rows:"3",name:"address",defaultValue:a.state.address})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsxs)(d.L8,{htmlFor:"lat",children:["Latitude",(0,j.jsxs)("span",{children:[" (Allowed Range : > ",e.min_lat," & < ",e.max_lat,")"]}),(0,j.jsx)("span",{className:"text-danger",children:"*"})]}),(0,j.jsx)(d.jO,{type:"number",placeholder:"Enter Latitude",step:1e-8,min:e.min_lat,max:e.max_lat,name:"lat",onChange:function(e){return N((function(a){return(0,l.Z)((0,l.Z)({},a),{},{lat:e.target.value})}))},value:_.lat,required:!0}),(0,j.jsxs)("span",{className:"error_text",children:["It should be a valid  Latitude (Allowed Range : > ",e.min_lat," & < ",e.max_lat,")"]})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsxs)(d.L8,{htmlFor:"lon",children:["Longitude",(0,j.jsxs)("span",{children:[" (Allowed Range : > ",e.min_lon," & < ",e.max_lon,")"]}),(0,j.jsx)("span",{className:"text-danger",children:"*"})]}),(0,j.jsx)(d.jO,{type:"number",placeholder:"Enter Longitude",step:1e-8,max:e.max_lon,min:e.min_lon,name:"lon",onChange:function(e){return N((function(a){return(0,l.Z)((0,l.Z)({},a),{},{lon:e.target.value})}))},value:_.lon,required:!0}),(0,j.jsxs)("span",{className:"error_text",children:["It should be a valid Longitude (Allowed Range : > ",e.min_lon," & < ",e.max_lon,")"]})]}),(0,j.jsx)("div",{className:"mb-3",children:(0,j.jsx)("div",{id:"map"})}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(d.L8,{htmlFor:"comment",children:"Comments"}),(0,j.jsx)(d.PB,{rows:"3",name:"comment",defaultValue:a.state.comment})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsxs)(d.L8,{htmlFor:"status",children:["Status",(0,j.jsx)("span",{className:"text-danger",children:"*"})]}),(0,j.jsxs)(d.LX,{className:"form-control","aria-label":"Default select example",name:"status",defaultValue:f[a.state.status],children:[(0,j.jsx)("option",{value:"0",children:"Closed"}),(0,j.jsx)("option",{value:"1",children:"Open"}),(0,j.jsx)("option",{value:"2",children:"Caution"})]})]}),(0,j.jsx)("div",{className:"mb-3",children:(0,j.jsx)(d.u5,{type:"submit",color:"primary",className:"px-4",children:"Update"})})]})})})]})}}}]);
//# sourceMappingURL=3609.2ed7a165.chunk.js.map