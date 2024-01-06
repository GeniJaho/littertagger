import{o as a,d as n,m as k,r as y,a as s,t as g,b as l,w as u,k as x,q as b,F as p,g as v,f as c}from"./app-NAMudLdh.js";import{_ as w}from"./PrimaryButton-w61ay0-5.js";import{_ as h}from"./ToggleInput-M0J8pXoj.js";const $=["type"],_={__name:"IconPrimaryButton",props:{type:{type:String,default:"submit"}},setup(i){return(o,r)=>(a(),n("button",{type:i.type,class:"inline-flex items-center px-2.5 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"},[k(o.$slots,"default")],8,$))}},j=["type"],V={__name:"IconDangerButton",props:{type:{type:String,default:"button"}},setup(i){return(o,r)=>(a(),n("button",{type:i.type,class:"inline-flex items-center justify-center px-2.5 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"},[k(o.$slots,"default")],8,j))}},B={class:"col-span-1 flex flex-col divide-y divide-gray-200 dark:divide-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow"},C={class:"px-4 py-5 sm:p-6 flex-1"},S={class:"flex items-center justify-between space-x-3"},U={class:"truncate text-lg font-bold text-gray-900 dark:text-gray-100"},T=s("i",{class:"fas fa-fw fa-trash-alt text-xs"},null,-1),A={class:"mt-6"},D={class:"flex flex-row justify-between space-x-2"},E=["value"],I={class:"mt-2 flex flex-row justify-between space-x-2"},M=["value"],N={class:"mt-2 flex flex-row justify-between space-x-2"},P=["value"],F={class:"mt-4 text-sm text-gray-500 flex flex-wrap space-x-1"},O=["onClick"],q=s("svg",{class:"h-1.5 w-1.5 fill-green-500",viewBox:"0 0 6 6","aria-hidden":"true"},[s("circle",{cx:"3",cy:"3",r:"3"})],-1),L={class:"px-4 py-5 sm:p-6 flex flex-row justify-between"},z={class:"flex flex-col justify-center"},G=s("i",{class:"far fa-fw fa-copy text-xs"},null,-1),R={__name:"PhotoItem",props:{item:Object,tags:Object},setup(i){const o=i,r=y(o.tags.material[0].id),m=y(o.tags.brand[0].id),f=y(o.tags.event[0].id);return(d,t)=>(a(),n("li",B,[s("div",C,[s("div",S,[s("h3",U,g(i.item.name),1),l(V,{onClick:t[0]||(t[0]=e=>d.$emit("remove-item",i.item.pivot.id))},{default:u(()=>[T]),_:1})]),s("div",A,[s("div",D,[x(s("select",{id:"add-material-tag","onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),name:"add-tag",class:"block w-full lg:w-48 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"},[(a(!0),n(p,null,v(i.tags.material,e=>(a(),n("option",{value:e.id},g(e.name),9,E))),256))],512),[[b,r.value]]),l(w,{class:"whitespace-nowrap",onClick:t[2]||(t[2]=e=>d.$emit("add-tag-to-item",i.item.pivot,r.value)),disabled:!r.value},{default:u(()=>[c(" Add Material ")]),_:1},8,["disabled"])]),s("div",I,[x(s("select",{id:"add-brand-tag","onUpdate:modelValue":t[3]||(t[3]=e=>m.value=e),name:"add-tag",class:"block w-full lg:w-48 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"},[(a(!0),n(p,null,v(i.tags.brand,e=>(a(),n("option",{value:e.id},g(e.name),9,M))),256))],512),[[b,m.value]]),l(w,{class:"whitespace-nowrap",onClick:t[4]||(t[4]=e=>d.$emit("add-tag-to-item",i.item.pivot,m.value)),disabled:!m.value},{default:u(()=>[c(" Add Brand ")]),_:1},8,["disabled"])]),s("div",N,[x(s("select",{id:"add-event-tag","onUpdate:modelValue":t[5]||(t[5]=e=>f.value=e),name:"add-tag",class:"block w-full lg:w-48 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"},[(a(!0),n(p,null,v(i.tags.event,e=>(a(),n("option",{value:e.id},g(e.name),9,P))),256))],512),[[b,f.value]]),l(w,{class:"whitespace-nowrap",onClick:t[6]||(t[6]=e=>d.$emit("add-tag-to-item",i.item.pivot,f.value)),disabled:!f.value},{default:u(()=>[c(" Add Event ")]),_:1},8,["disabled"])]),s("div",F,[(a(!0),n(p,null,v(i.item.pivot.tags,e=>(a(),n("span",{key:e.id,onClick:H=>d.$emit("remove-tag-from-item",i.item.pivot,e.id),class:"inline-flex cursor-pointer items-center gap-x-1.5 rounded-full px-2 py-1 mb-2 mr-2 text-xs font-medium text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-200"},[q,c(" "+g(e.name),1)],8,O))),128))])])]),s("div",L,[s("div",z,[l(h,{modelValue:i.item.pivot.picked_up,"onUpdate:modelValue":[t[7]||(t[7]=e=>i.item.pivot.picked_up=e),t[8]||(t[8]=e=>d.$emit("toggle-picked-up",i.item.pivot.id))],class:"block w-full"},{label:u(()=>[c("Picked Up")]),_:1},8,["modelValue"])]),l(_,{onClick:t[9]||(t[9]=e=>d.$emit("copy-item",i.item.pivot.id))},{default:u(()=>[G]),_:1})])]))}};export{R as default};
