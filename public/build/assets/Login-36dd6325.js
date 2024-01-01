import{T as w,o as n,d,b as t,u as s,w as m,F as b,Z as k,t as x,e as u,a,c as y,f as c,i as h,n as v,h as V}from"./app-2a21d1cd.js";import{A as $}from"./AuthenticationCard-949fe010.js";import{_ as B}from"./AuthenticationCardLogo-9fd391f4.js";import{_ as C}from"./Checkbox-3d1875f2.js";import{_ as f}from"./InputError-cc43ff97.js";import{_ as p}from"./InputLabel-8f6bbb95.js";import{_ as F}from"./PrimaryButton-368b9b9b.js";import{_ as g}from"./TextInput-11860653.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},q={class:"mt-4"},L={class:"block mt-4"},P={class:"flex items-center"},R=a("span",{class:"ml-2 text-sm text-gray-600 dark:text-gray-400"},"Remember me",-1),S={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=w({email:"wastewizard@litterhero.com",password:"password",remember:!0}),_=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,o)=>(n(),d(b,null,[t(s(k),{title:"Log in"}),t($,null,{logo:m(()=>[t(B)]),default:m(()=>[l.status?(n(),d("div",N,x(l.status),1)):u("",!0),a("form",{onSubmit:V(_,["prevent"])},[a("div",null,[t(p,{for:"email",value:"Email"}),t(g,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(f,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",q,[t(p,{for:"password",value:"Password"}),t(g,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),a("div",L,[a("label",P,[t(C,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),R])]),a("div",S,[l.canResetPassword?(n(),y(s(h),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:m(()=>[c(" Forgot your password? ")]),_:1},8,["href"])):u("",!0),t(F,{class:v(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[c(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{G as default};
