import{T as m,r as d,o as c,d as u,b as o,u as a,w as r,F as p,Z as f,a as e,n as _,f as w,h as b}from"./app-6e6cbdeb.js";import{A as g}from"./AuthenticationCard-5309d5f8.js";import{_ as h}from"./AuthenticationCardLogo-b3a3574e.js";import{_ as x}from"./InputError-e7fefc11.js";import{_ as y}from"./InputLabel-9503b7e8.js";import{_ as v}from"./PrimaryButton-e022dc45.js";import{_ as V}from"./TextInput-32bdf904.js";import"./_plugin-vue_export-helper-c27b6911.js";const k=e("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),C=["onSubmit"],$={class:"flex justify-end mt-4"},z={__name:"ConfirmPassword",setup(A){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(B,i)=>(c(),u(p,null,[o(a(f),{title:"Secure Area"}),o(g,null,{logo:r(()=>[o(h)]),default:r(()=>[k,e("form",{onSubmit:b(n,["prevent"])},[e("div",null,[o(y,{for:"password",value:"Password"}),o(V,{id:"password",ref_key:"passwordInput",ref:t,modelValue:a(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>a(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(x,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",$,[o(v,{class:_(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,C)]),_:1})],64))}};export{z as default};