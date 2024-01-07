import{r as _,T as p,o as m,c as f,w as s,f as t,a as b,b as l,u as a,n as y}from"./app-AMhzwQ-d.js";import{_ as g}from"./ActionMessage-DLRvnOYU.js";import{_ as k}from"./FormSection-Ta4SjjPl.js";import{_ as d}from"./InputError-syDamDYv.js";import{_ as h}from"./PrimaryButton-UUUlzHuB.js";import{_ as i}from"./ToggleInput-OlTNMWho.js";import"./SectionTitle-EKlM2xVy.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const V={class:"col-span-6 sm:col-span-4"},L={__name:"SettingsForm",props:{user:Object},setup(u){_(null);const r=u,e=p({picked_up_by_default:r.user.settings.picked_up_by_default,recycled_by_default:r.user.settings.recycled_by_default}),n=()=>{e.post(route("user-settings.update"),{preserveScroll:!0})};return(w,o)=>(m(),f(k,{onSubmitted:n},{title:s(()=>[t(" Settings ")]),description:s(()=>[t(" General settings related to tagging, uploads, etc. ")]),form:s(()=>[b("div",V,[l(i,{id:"picked_up_by_default",modelValue:a(e).picked_up_by_default,"onUpdate:modelValue":o[0]||(o[0]=c=>a(e).picked_up_by_default=c),class:"mt-1 block w-full"},{label:s(()=>[t(" Litter is picked up by default ")]),description:s(()=>[t(" When enabled, litter objects in your photos will be marked as picked up by default. You can always change the status of each object individually. ")]),_:1},8,["modelValue"]),l(d,{message:a(e).errors.picked_up_by_default,class:"mt-2"},null,8,["message"]),l(i,{id:"recycled_by_default",modelValue:a(e).recycled_by_default,"onUpdate:modelValue":o[1]||(o[1]=c=>a(e).recycled_by_default=c),class:"mt-4 block w-full"},{label:s(()=>[t(" Litter is recycled by default ")]),description:s(()=>[t(" When enabled, litter objects in your photos will be marked as recycled by default. You can always change the status of each object individually. ")]),_:1},8,["modelValue"]),l(d,{message:a(e).errors.recycled_by_default,class:"mt-2"},null,8,["message"])])]),actions:s(()=>[l(g,{on:a(e).recentlySuccessful,class:"mr-3"},{default:s(()=>[t(" Saved. ")]),_:1},8,["on"]),l(h,{class:y({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:s(()=>[t(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{L as default};