import{T as m,r as d,o as c,d as p,b as a,u as o,w as r,F as u,Z as f,a as e,n as _,f as w,h as g}from"./app-vi6GXwMX.js";import{A as b}from"./AuthenticationCard-pImOdqA3.js";import{_ as h}from"./AuthenticationCardLogo-dj5ZqC8l.js";import{_ as x}from"./InputError-NiWrNqND.js";import{_ as y}from"./InputLabel-zM5lH1K5.js";import{_ as v}from"./PrimaryButton-e1Ru7fM-.js";import{_ as V}from"./TextInput-UOpFqGeD.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const k=e("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),C={class:"flex justify-end mt-4"},q={__name:"ConfirmPassword",setup($){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(A,i)=>(c(),p(u,null,[a(o(f),{title:"Secure Area"}),a(b,null,{logo:r(()=>[a(h)]),default:r(()=>[k,e("form",{onSubmit:g(n,["prevent"])},[e("div",null,[a(y,{for:"password",value:"Password"}),a(V,{id:"password",ref_key:"passwordInput",ref:t,modelValue:o(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>o(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(x,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",C,[a(v,{class:_(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{q as default};