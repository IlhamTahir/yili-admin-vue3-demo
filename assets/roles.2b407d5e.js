import{i as V,p as $,P as w}from"./index.4fd52637.js";import{a as R,u as L}from"./useEditDialog.29026079.js";import{b as N,f as y,K as q,J as j,c as v,w as n,u as e,r as s,o as d,i as o,q as x,e as J,g as O,F as z,h as A,L as U,I as K,j as P,N as G}from"./vendor.8cdf7cde.js";const H=i=>V.get("/roles",{params:i}),M=i=>V.post("/roles",i),Q=(i,m)=>V.post(`/roles/${i}`,m),I={list:H,create:M,edit:Q},W=N({__name:"role-edit-dialog",props:{show:{type:Boolean,default:!1},data:null},emits:["close","confirm"],setup(i,{emit:m}){const u=i,D={name:[{required:!0,message:"\u89D2\u8272\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},C={id:"",name:"",label:"",permissions:[]},a=y(u.data||C);q(u,c=>{a.value=c.data||C});const h=j(()=>u.show),g=y(null),F=()=>{m("confirm",a.value)};return(c,t)=>{const p=s("t-input"),_=s("t-form-item"),b=s("t-tree"),B=s("t-form"),r=s("t-dialog");return d(),v(r,{ref:"dialog",width:"900px",visible:e(h),header:a.value.id?"\u7F16\u8F91\u89D2\u8272":"\u521B\u5EFA\u89D2\u8272",onClose:t[3]||(t[3]=l=>c.$emit("close")),onConfirm:F},{default:n(()=>[o(B,{ref_key:"form",ref:g,class:"dialog-form",data:a.value,rules:D},{default:n(()=>[o(_,{label:"\u89D2\u8272\u540D\u79F0",name:"name"},{default:n(()=>[a.value.id?(d(),v(p,{key:0,disabled:"",value:a.value.name},null,8,["value"])):x("",!0),a.value.id?x("",!0):(d(),v(p,{key:1,placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",modelValue:a.value.name,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value.name=l)},null,8,["modelValue"]))]),_:1}),o(_,{label:"\u89D2\u8272\u6807\u8BC6",name:"label"},{default:n(()=>[o(p,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u6807\u8BC6",modelValue:a.value.label,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value.label=l)},null,8,["modelValue"])]),_:1}),o(_,{label:"\u6743\u9650\u96C6",name:"permissions"},{default:n(()=>[o(b,{data:e($),hover:"","expand-all":"",checkable:!0,"value-mode":"all",modelValue:a.value.permissions,"onUpdate:modelValue":t[2]||(t[2]=l=>a.value.permissions=l)},null,8,["data","modelValue"])]),_:1})]),_:1},8,["data"])]),_:1},8,["visible","header"])}}}),X={class:"action-area"},Y=P("\u521B\u5EFA\u89D2\u8272 "),Z={class:"search-area"},ee=P(" \u7F16\u8F91 "),ne=N({__name:"roles",setup(i){const m=[{colKey:"id",title:"ID"},{colKey:"name",title:"\u89D2\u8272\u540D\u79F0"},{colKey:"label",title:"\u89D2\u8272\u6807\u8BC6"},{colKey:"operation",title:"\u64CD\u4F5C"}],u=J({name:"",label:""}),{showDialog:D,editData:C,handleCreate:a,onDialogClose:h,handleEdit:g,handleConfirm:F}=R(I,"\u89D2\u8272"),{data:c,fetchData:t,pagination:p,loading:_,onPageChange:b}=L(I,u);return(B,r)=>{const l=s("t-button"),k=s("t-input"),S=s("t-table"),T=s("t-card"),E=G("permission");return d(),O(z,null,[o(T,null,{default:n(()=>[A("div",X,[U((d(),v(l,{onClick:e(a)},{default:n(()=>[Y]),_:1},8,["onClick"])),[[E,e(w).USER_ROLES_CREATE]])]),A("div",Z,[o(k,{class:"search-input",modelValue:u.name,"onUpdate:modelValue":r[0]||(r[0]=f=>u.name=f),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"]),o(k,{class:"search-input",modelValue:u.label,"onUpdate:modelValue":r[1]||(r[1]=f=>u.label=f),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6"},null,8,["modelValue"]),o(l,{onClick:e(t)},{icon:n(()=>[o(e(K),{name:"search"})]),_:1},8,["onClick"])]),o(S,{loading:e(_),"row-key":"index",columns:m,data:e(c),pagination:e(p),onPageChange:e(b)},{operation:n(f=>[U((d(),v(l,{variant:"text",theme:"primary",onClick:ae=>e(g)(f)},{default:n(()=>[o(e(K),{name:"edit"}),ee]),_:2},1032,["onClick"])),[[E,e(w).USER_LIST_EDIT]])]),_:1},8,["loading","data","pagination","onPageChange"])]),_:1}),o(W,{show:e(D),data:e(C),onClose:e(h),onConfirm:e(F)},null,8,["show","data","onClose","onConfirm"])],64)}}});export{ne as default};
