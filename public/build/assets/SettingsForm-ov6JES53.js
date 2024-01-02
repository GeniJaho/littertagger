import{o as p,d as f,a,n as i,m as u,r as _,T as g,c as b,w as t,f as o,b as r,u as l}from"./app-vi6GXwMX.js";import{_ as k}from"./ActionMessage-feJwjgqQ.js";import{_ as h}from"./FormSection-2V60moXy.js";import{_ as y}from"./InputError-NiWrNqND.js";import{_ as x}from"./PrimaryButton-e1Ru7fM-.js";import"./SectionTitle-7kdM_JTv.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const V={class:"flex items-center"},v=["value","aria-checked"],w={class:"ml-3"},$={class:"flex flex-col"},S={class:"text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"},B={class:"text-sm text-gray-600 dark:text-gray-400"},j={__name:"ToggleInput",props:{modelValue:Boolean},emits:["update:modelValue"],setup(s){return(n,e)=>(p(),f("div",V,[a("button",{type:"button",value:s.modelValue,onClick:e[0]||(e[0]=d=>n.$emit("update:modelValue",!s.modelValue)),class:i([s.modelValue?"bg-indigo-600":"bg-gray-200","relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"]),role:"switch","aria-checked":s.modelValue},[a("span",{"aria-hidden":"true",class:i([s.modelValue?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"])},null,2)],10,v),a("span",w,[a("span",$,[a("span",S,[u(n.$slots,"label")]),a("span",B,[u(n.$slots,"description")])])])]))}},C={class:"col-span-6 sm:col-span-4"},I={__name:"SettingsForm",props:{user:Object},setup(s){_(null);const e=g({picked_up_by_default:s.user.settings.picked_up_by_default}),d=()=>{e.post(route("user-settings.update"),{preserveScroll:!0})};return(N,c)=>(p(),b(h,{onSubmitted:d},{title:t(()=>[o(" Settings ")]),description:t(()=>[o(" General settings related to tagging, uploads, etc. ")]),form:t(()=>[a("div",C,[r(j,{id:"picked_up_by_default",ref:"pickedUpByDefault",modelValue:l(e).picked_up_by_default,"onUpdate:modelValue":c[0]||(c[0]=m=>l(e).picked_up_by_default=m),class:"mt-1 block w-full"},{label:t(()=>[o(" Litter is picked up by default ")]),description:t(()=>[o(" When enabled, litter objects in your photos will be marked as picked up by default. You can always change the status of each object individually. ")]),_:1},8,["modelValue"]),r(y,{message:l(e).errors.picked_up_by_default,class:"mt-2"},null,8,["message"])])]),actions:t(()=>[r(k,{on:l(e).recentlySuccessful,class:"mr-3"},{default:t(()=>[o(" Saved. ")]),_:1},8,["on"]),r(x,{class:i({"opacity-25":l(e).processing}),disabled:l(e).processing},{default:t(()=>[o(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{I as default};