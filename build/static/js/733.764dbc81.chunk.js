"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[733],{1882:function(e,t,r){r.d(t,{v:function(){return a}});const n=r(7).T5+"/api/v1/product/",a={GET_ALL_PRODUCTS:n+"?publish=false",GET_BY_ID:n,EDIT_BY_ID:n}},5177:function(e,t,r){var n=r(2791);t.Z=()=>{const e=(0,n.useRef)(!0);return(0,n.useEffect)((()=>()=>{e.current=!1}),[]),e}},2412:function(e,t,r){var n=r(3263),a=r(1882);t.Z=new class{async getAll(){return(await n.Z.get(a.v.GET_ALL_PRODUCTS)).data}async getById(e){return(await n.Z.get(`${a.v.GET_BY_ID}/${e}`)).data}}},2733:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(2791),a=r(6871),s=r(3735),i=r(2412),o=r(9434),c=r(3967),u=r(8096),l=r(4925),d=r(8029),h=r(7071),m=r(4554),p=r(4518),x=r(1724),y=r(5705),Z=r(5177),g=r(6739),b=r(3263),z=r(1882);var I=new class{constructor(){}async toggleVisibility(e,t,r){try{const t=await b.Z.patch(z.v.EDIT_BY_ID+e,{price:520},{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5haHVlbHNlYmFzdGlhbmRpYXpAZ21haWwuY29tIiwiaWQiOiIwMjZhOGVlNy1hZTUzLTQ3OTktYmE3NC0zMzA5MzkyYWNhZDMiLCJpYXQiOjE2NzYyODc0MDUsImV4cCI6MTY3NjM3MzgwNX0.UTCCbeuQg0jLoXZEE1qo9oEvNixJikx3z1HfpelH0-8"}});console.log(t)}catch(n){console.log(n)}}async editById(e,t,r){return await b.Z.patch(z.v.EDIT_BY_ID+e,t,{headers:{Authorization:`Bearer ${r}`}})}async create(){try{return b.Z.patch()}catch(e){}}},j=r(184);var f=e=>{let{...t}=e;const r=(0,o.v9)((e=>e.auth.user.token)),n=t.data,a=(0,c.Z)(),s=(0,Z.Z)();(0,o.v9)((e=>e.customization));return n?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h2",{children:"Datos del producto"}),(0,j.jsx)(y.J9,{initialValues:{name:n.name,size:n.size,stock:n.stock,description:"esto es una prueba",submit:null},validationSchema:x.Ry().shape({name:x.Z_().required("Debes ingresar un nombre de usuario")}),onSubmit:async(e,t)=>{let{setErrors:a,setStatus:i,setSubmitting:o}=t;try{const{submit:t,...a}=e,c=await I.editProductById(n.id,a,r);console.log(c),s.current&&(i({success:!0}),o(!1))}catch(c){s.current&&(i({success:!1}),a({submit:c.message}),o(!1))}},children:e=>{let{errors:r,handleBlur:n,handleChange:s,handleSubmit:i,isSubmitting:o,touched:c,values:x}=e;return(0,j.jsxs)("form",{noValidate:!0,onSubmit:i,...t,children:[(0,j.jsxs)(u.Z,{fullWidth:!0,error:Boolean(c.name&&r.name),sx:{...a.typography.customInput},children:[(0,j.jsx)(l.Z,{htmlFor:"outlined-adornment-product-name",children:"Nombre completo"}),(0,j.jsx)(d.Z,{id:"outlined-adornment-product-name",type:"text",value:x.name,name:"name",onBlur:n,onChange:s,inputProps:{}}),c.name&&r.name&&(0,j.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text--register",children:r.name})]}),(0,j.jsxs)(u.Z,{fullWidth:!0,error:Boolean(c.size&&r.size),sx:{...a.typography.customInput},children:[(0,j.jsx)(l.Z,{htmlFor:"outlined-adornment-product-size",children:"Tama\xf1o del producto"}),(0,j.jsx)(d.Z,{id:"outlined-adornment-product-size",type:"text",value:x.size,name:"size",onBlur:n,onChange:s,inputProps:{}}),c.size&&r.size&&(0,j.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text--register",children:r.name})]}),(0,j.jsxs)(u.Z,{fullWidth:!0,error:Boolean(c.stock&&r.stock),sx:{...a.typography.customInput},children:[(0,j.jsx)(l.Z,{htmlFor:"outlined-adornment-product-stock",children:"Stock del producto"}),(0,j.jsx)(d.Z,{id:"outlined-adornment-product-stock",type:"number",value:x.stock,name:"stock",onBlur:n,onChange:s,inputProps:{}}),c.size&&r.size&&(0,j.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text--register",children:r.name})]}),(0,j.jsx)(m.Z,{sx:{mt:2},children:(0,j.jsx)(g.Z,{children:(0,j.jsx)(p.Z,{disableElevation:!0,disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Actualizar datos"})})})]})}})]}):(0,j.jsx)("p",{children:"Esperando..."})};var v=()=>{const[e,t]=(0,n.useState)(void 0),r=(0,a.UO)().id;return(0,n.useEffect)((()=>{i.Z.getById(r).then(t)}),[]),(0,j.jsx)(s.Z,{title:"Actualizar datos",children:(0,j.jsx)(f,{data:e})})}}}]);
//# sourceMappingURL=733.764dbc81.chunk.js.map