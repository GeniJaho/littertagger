import{T as p,r as x,o as r,d as l,b as a,w as t,e as u,f as n,a as o,u as s,F as w,g as C,n as v,t as b,O as G,Q as H}from"./app-vi6GXwMX.js";import{_ as J}from"./ActionMessage-feJwjgqQ.js";import{_ as A}from"./Modal-BosjkuIu.js";import{_ as B}from"./ConfirmationModal-AfxI9JJW.js";import{_ as L}from"./DangerButton-gewQg7jT.js";import{_ as K}from"./DialogModal-4ZLAJulz.js";import{_ as W}from"./FormSection-2V60moXy.js";import{_ as P}from"./InputError-NiWrNqND.js";import{_ as z}from"./InputLabel-zM5lH1K5.js";import{_ as F}from"./PrimaryButton-e1Ru7fM-.js";import{_ as $}from"./SecondaryButton-QInRD4Oe.js";import{S}from"./SectionBorder-Bas0Sobr.js";import{_ as X}from"./TextInput-UOpFqGeD.js";import"./SectionTitle-7kdM_JTv.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const Y={key:0},Z=o("div",{class:"col-span-6"},[o("div",{class:"max-w-xl text-sm text-gray-600 dark:text-gray-400"}," Please provide the email address of the person you would like to add to this team. ")],-1),ee={class:"col-span-6 sm:col-span-4"},te={key:0,class:"col-span-6 lg:col-span-4"},se={class:"relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"},oe=["onClick"],ae={class:"flex items-center"},re={key:0,class:"ml-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},le=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ne=[le],ie={class:"mt-2 text-xs text-gray-600 dark:text-gray-400 text-left"},me={key:1},de={class:"space-y-6"},ce={class:"text-gray-600 dark:text-gray-400"},ue={class:"flex items-center"},ve=["onClick"],fe={key:2},ge={class:"space-y-6"},be={class:"flex items-center"},ye=["src","alt"],_e={class:"ml-4 dark:text-white"},ke={class:"flex items-center"},he=["onClick"],pe={key:1,class:"ml-2 text-sm text-gray-400"},xe=["onClick"],we={key:0},Ce={class:"relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"},Te=["onClick"],Re={class:"flex items-center"},Me={key:0,class:"ml-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},$e=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Se=[$e],je={class:"mt-2 text-xs text-gray-600 dark:text-gray-400"},Ge={__name:"TeamMemberManager",props:{team:Object,availableRoles:Array,userPermissions:Object},setup(i){const _=i,d=p({email:"",role:null}),f=p({role:null}),T=p({}),R=p({}),k=x(!1),M=x(null),h=x(!1),y=x(null),V=()=>{d.post(route("team-members.store",_.team),{errorBag:"addTeamMember",preserveScroll:!0,onSuccess:()=>d.reset()})},O=c=>{G.delete(route("team-invitations.destroy",c),{preserveScroll:!0})},N=c=>{M.value=c,f.role=c.membership.role,k.value=!0},E=()=>{f.put(route("team-members.update",[_.team,M.value]),{preserveScroll:!0,onSuccess:()=>k.value=!1})},I=()=>{h.value=!0},U=()=>{T.delete(route("team-members.destroy",[_.team,H().props.auth.user]))},D=c=>{y.value=c},Q=()=>{R.delete(route("team-members.destroy",[_.team,y.value]),{errorBag:"removeTeamMember",preserveScroll:!0,preserveState:!0,onSuccess:()=>y.value=null})},j=c=>_.availableRoles.find(m=>m.key===c).name;return(c,m)=>(r(),l("div",null,[i.userPermissions.canAddTeamMembers?(r(),l("div",Y,[a(S),a(W,{onSubmitted:V},{title:t(()=>[n(" Add Team Member ")]),description:t(()=>[n(" Add a new team member to your team, allowing them to collaborate with you. ")]),form:t(()=>[Z,o("div",ee,[a(z,{for:"email",value:"Email"}),a(X,{id:"email",modelValue:s(d).email,"onUpdate:modelValue":m[0]||(m[0]=e=>s(d).email=e),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),a(P,{message:s(d).errors.email,class:"mt-2"},null,8,["message"])]),i.availableRoles.length>0?(r(),l("div",te,[a(z,{for:"roles",value:"Role"}),a(P,{message:s(d).errors.role,class:"mt-2"},null,8,["message"]),o("div",se,[(r(!0),l(w,null,C(i.availableRoles,(e,g)=>(r(),l("button",{key:e.key,type:"button",class:v(["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600",{"border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none":g>0,"rounded-b-none":g!=Object.keys(i.availableRoles).length-1}]),onClick:q=>s(d).role=e.key},[o("div",{class:v({"opacity-50":s(d).role&&s(d).role!=e.key})},[o("div",ae,[o("div",{class:v(["text-sm text-gray-600 dark:text-gray-400",{"font-semibold":s(d).role==e.key}])},b(e.name),3),s(d).role==e.key?(r(),l("svg",re,ne)):u("",!0)]),o("div",ie,b(e.description),1)],2)],10,oe))),128))])])):u("",!0)]),actions:t(()=>[a(J,{on:s(d).recentlySuccessful,class:"mr-3"},{default:t(()=>[n(" Added. ")]),_:1},8,["on"]),a(F,{class:v({"opacity-25":s(d).processing}),disabled:s(d).processing},{default:t(()=>[n(" Add ")]),_:1},8,["class","disabled"])]),_:1})])):u("",!0),i.team.team_invitations.length>0&&i.userPermissions.canAddTeamMembers?(r(),l("div",me,[a(S),a(A,{class:"mt-10 sm:mt-0"},{title:t(()=>[n(" Pending Team Invitations ")]),description:t(()=>[n(" These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. ")]),content:t(()=>[o("div",de,[(r(!0),l(w,null,C(i.team.team_invitations,e=>(r(),l("div",{key:e.id,class:"flex items-center justify-between"},[o("div",ce,b(e.email),1),o("div",ue,[i.userPermissions.canRemoveTeamMembers?(r(),l("button",{key:0,class:"cursor-pointer ml-6 text-sm text-red-500 focus:outline-none",onClick:g=>O(e)}," Cancel ",8,ve)):u("",!0)])]))),128))])]),_:1})])):u("",!0),i.team.users.length>0?(r(),l("div",fe,[a(S),a(A,{class:"mt-10 sm:mt-0"},{title:t(()=>[n(" Team Members ")]),description:t(()=>[n(" All of the people that are part of this team. ")]),content:t(()=>[o("div",ge,[(r(!0),l(w,null,C(i.team.users,e=>(r(),l("div",{key:e.id,class:"flex items-center justify-between"},[o("div",be,[o("img",{class:"w-8 h-8 rounded-full object-cover",src:e.profile_photo_url,alt:e.name},null,8,ye),o("div",_e,b(e.name),1)]),o("div",ke,[i.userPermissions.canUpdateTeamMembers&&i.availableRoles.length?(r(),l("button",{key:0,class:"ml-2 text-sm text-gray-400 underline",onClick:g=>N(e)},b(j(e.membership.role)),9,he)):i.availableRoles.length?(r(),l("div",pe,b(j(e.membership.role)),1)):u("",!0),c.$page.props.auth.user.id===e.id?(r(),l("button",{key:2,class:"cursor-pointer ml-6 text-sm text-red-500",onClick:I}," Leave ")):i.userPermissions.canRemoveTeamMembers?(r(),l("button",{key:3,class:"cursor-pointer ml-6 text-sm text-red-500",onClick:g=>D(e)}," Remove ",8,xe)):u("",!0)])]))),128))])]),_:1})])):u("",!0),a(K,{show:k.value,onClose:m[2]||(m[2]=e=>k.value=!1)},{title:t(()=>[n(" Manage Role ")]),content:t(()=>[M.value?(r(),l("div",we,[o("div",Ce,[(r(!0),l(w,null,C(i.availableRoles,(e,g)=>(r(),l("button",{key:e.key,type:"button",class:v(["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600",{"border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none":g>0,"rounded-b-none":g!==Object.keys(i.availableRoles).length-1}]),onClick:q=>s(f).role=e.key},[o("div",{class:v({"opacity-50":s(f).role&&s(f).role!==e.key})},[o("div",Re,[o("div",{class:v(["text-sm text-gray-600 dark:text-gray-400",{"font-semibold":s(f).role===e.key}])},b(e.name),3),s(f).role==e.key?(r(),l("svg",Me,Se)):u("",!0)]),o("div",je,b(e.description),1)],2)],10,Te))),128))])])):u("",!0)]),footer:t(()=>[a($,{onClick:m[1]||(m[1]=e=>k.value=!1)},{default:t(()=>[n(" Cancel ")]),_:1}),a(F,{class:v(["ml-3",{"opacity-25":s(f).processing}]),disabled:s(f).processing,onClick:E},{default:t(()=>[n(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),a(B,{show:h.value,onClose:m[4]||(m[4]=e=>h.value=!1)},{title:t(()=>[n(" Leave Team ")]),content:t(()=>[n(" Are you sure you would like to leave this team? ")]),footer:t(()=>[a($,{onClick:m[3]||(m[3]=e=>h.value=!1)},{default:t(()=>[n(" Cancel ")]),_:1}),a(L,{class:v(["ml-3",{"opacity-25":s(T).processing}]),disabled:s(T).processing,onClick:U},{default:t(()=>[n(" Leave ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),a(B,{show:y.value,onClose:m[6]||(m[6]=e=>y.value=null)},{title:t(()=>[n(" Remove Team Member ")]),content:t(()=>[n(" Are you sure you would like to remove this person from the team? ")]),footer:t(()=>[a($,{onClick:m[5]||(m[5]=e=>y.value=null)},{default:t(()=>[n(" Cancel ")]),_:1}),a(L,{class:v(["ml-3",{"opacity-25":s(R).processing}]),disabled:s(R).processing,onClick:Q},{default:t(()=>[n(" Remove ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Ge as default};