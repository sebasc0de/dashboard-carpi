"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[390],{4812:function(e,t,n){n.d(t,{_:function(){return r},v:function(){return i}});const r=n(7).T5+"/api/v1/user/",i={GET_ALL:r,GET_BY_ID:r,EDIT_BY_ID:r}},4453:function(e,t,n){n.d(t,{z:function(){return c}});var r=n(3504),i=n(184);const c=e=>{let{text:t,link:n}=e;return(0,i.jsx)(r.rU,{to:n,children:(0,i.jsx)("button",{children:t})})}},4135:function(e,t,n){n.d(t,{s:function(){return i}});n(9026);var r=n(184);const i=e=>{let{state:t}=e;console.log(t);const n=t?"Activo":"Deshabilitado";return(0,r.jsx)("td",{className:t?"state success":"state fail",children:n})}},7327:function(e,t,n){n.d(t,{DM:function(){return s},Iy:function(){return a},R6:function(){return o},jh:function(){return r},oK:function(){return c},wk:function(){return i}});const r=["Imagen","Nombre","Carpi Id","Tama\xf1o","peso","color","precio","tipo","stock","en promocion","publicado"],i=["Nombre","Caracteristicas","Medidas","Otras caracteristicas","Aplicaciones","Preguntas frecuentes"],c=["Nombre","Direccion","Telefono","Cuit","Email","Descuento","Direccion fisica","Direccion envios","Jefe de compras","Direccion showroom","Fabrica","Deposito"],o=["Email","Nombre completo","Activo","Direccion","Telefono","Pais","Provincia","Ciudad"],a=["","Rol","Permisos"],s=["","Estado","Nombre completo","Direccion de entrega"]},6390:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(1889),i=n(4453),c=n(7327),o=n(1923),a=n(4135),s=n(3504),l=n(4789),d=n(184);const u=e=>{let{data:t,labels:n}=e;return!t|!n?(0,d.jsx)("p",{children:"Loading"}):(0,d.jsx)("div",{className:l.Z.container,children:(0,d.jsxs)("table",{children:[(0,d.jsx)("tr",{children:n.map(((e,t)=>(0,d.jsx)("th",{children:e},t)))}),t.map((e=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.rU,{to:`/users/${e.id}`,children:e.email})}),(0,d.jsx)("td",{children:e.fullName}),(0,d.jsx)(a.s,{state:e.isActive}),(0,d.jsx)("td",{children:"Phone"}),(0,d.jsx)("td",{children:"Cuit"}),(0,d.jsx)("td",{children:"Email"}),(0,d.jsx)("td",{children:"Direccion fisica"}),(0,d.jsx)("td",{children:"Direccion de envio"}),(0,d.jsx)("td",{children:"Jefe de compras"}),(0,d.jsx)("td",{children:"Informacion adicional"})]},e.id)))]})})};var f=n(2791),h=n(3735),_=n(3263),m=n(4812);var x=new class{async getAll(e){return(await _.Z.get(m.v.GET_ALL,{headers:{Authorization:`Bearer ${e}`}})).data}async getById(e){return(await _.Z.get(`${m.v.GET_BY_ID}/${e}`)).data}},j=n(9434);var b=()=>{const e=(0,j.v9)((e=>e.auth.user)),[t,n]=(0,f.useState)([]);return(0,f.useEffect)((()=>{x.getAll(e.token).then(n)}),[]),(0,d.jsx)(h.Z,{title:"Usuarios",secondary:(0,d.jsx)(i.z,{text:"Crear usuario",link:"/create-user"}),children:(0,d.jsx)(r.ZP,{container:!0,spacing:o.dv,children:(0,d.jsx)(r.ZP,{item:!0,xs:12,sm:12,children:(0,d.jsx)(u,{data:t,labels:c.R6})})})})}},9026:function(){},4789:function(e,t){t.Z={container:"table_container__mP24f",published:"table_published__kFIbO",actionButtons:"table_actionButtons__fiSmj",orderButton:"table_orderButton__akJZX",link:"table_link__026kr",discount:"table_discount__NZ0ZN"}}}]);
//# sourceMappingURL=390.c8b9bc25.chunk.js.map