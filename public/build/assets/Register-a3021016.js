import{T as p,o as f,d as c,b as e,u as o,w as l,F as _,Z as w,a,f as d,e as y,i as h,n as v,h as k}from"./app-d7073bf7.js";import{A as x}from"./AuthenticationCard-d6f46444.js";import{_ as V}from"./AuthenticationCardLogo-76b78821.js";import{_ as b}from"./Checkbox-7a5bb719.js";import{_ as u,a as i}from"./TextInput-bb40d65a.js";import{_ as n}from"./InputLabel-9ba94251.js";import{_ as $}from"./PrimaryButton-ddcbeb4b.js";import"./_plugin-vue_export-helper-c27b6911.js";const P=["onSubmit"],q={class:"mt-4"},C={class:"mt-4"},N={class:"mt-4"},U={key:0,class:"mt-4"},A={class:"flex items-center"},F={class:"ml-2"},T=["href"],B=["href"],R={class:"flex items-center justify-end mt-4"},H={__name:"Register",setup(S){const s=p({name:"",email:"",password:"",password_confirmation:"",terms:!1}),g=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(m,r)=>(f(),c(_,null,[e(o(w),{title:"Register"}),e(x,null,{logo:l(()=>[e(V)]),default:l(()=>[a("form",{onSubmit:k(g,["prevent"])},[a("div",null,[e(n,{for:"name",value:"Name"}),e(u,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":r[0]||(r[0]=t=>o(s).name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.name},null,8,["message"])]),a("div",q,[e(n,{for:"email",value:"Email"}),e(u,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":r[1]||(r[1]=t=>o(s).email=t),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),a("div",C,[e(n,{for:"password",value:"Password"}),e(u,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":r[2]||(r[2]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),a("div",N,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(u,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":r[3]||(r[3]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),m.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(f(),c("div",U,[e(n,{for:"terms"},{default:l(()=>[a("div",A,[e(b,{id:"terms",checked:o(s).terms,"onUpdate:checked":r[4]||(r[4]=t=>o(s).terms=t),name:"terms",required:""},null,8,["checked"]),a("div",F,[d(" I agree to the "),a("a",{target:"_blank",href:m.route("terms.show"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},"Terms of Service",8,T),d(" and "),a("a",{target:"_blank",href:m.route("policy.show"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},"Privacy Policy",8,B)])]),e(i,{class:"mt-2",message:o(s).errors.terms},null,8,["message"])]),_:1})])):y("",!0),a("div",R,[e(o(h),{href:m.route("login"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:l(()=>[d(" Already registered? ")]),_:1},8,["href"]),e($,{class:v(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:l(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{H as default};
