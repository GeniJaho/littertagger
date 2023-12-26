import{_ as p}from"./AppLayout-7e69f739.js";import c from"./DeleteUserForm-f2491ad4.js";import l from"./LogoutOtherBrowserSessionsForm-3a2e646d.js";import{S as s}from"./SectionBorder-4841a941.js";import u from"./TwoFactorAuthenticationForm-bb80d142.js";import f from"./UpdatePasswordForm-b6cff11b.js";import d from"./UpdateProfileInformationForm-a05fce0b.js";import _ from"./SettingsForm-6011e06f.js";import{o,c as h,w as n,a as m,d as r,b as t,e as a,F as g}from"./app-6e6cbdeb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-39597478.js";import"./SectionTitle-78acea6e.js";import"./DangerButton-c5484e04.js";import"./DialogModal-b86e04d1.js";import"./InputError-e7fefc11.js";import"./SecondaryButton-8cdf4309.js";import"./TextInput-32bdf904.js";import"./ActionMessage-a5687832.js";import"./PrimaryButton-e022dc45.js";import"./InputLabel-9503b7e8.js";import"./FormSection-333b824c.js";const $=m("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),k={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},y={key:1},x={key:2},K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(i){return(e,B)=>(o(),h(p,{title:"Profile"},{header:n(()=>[$]),default:n(()=>[m("div",null,[m("div",k,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",y,[t(f,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),t(_,{user:e.$page.props.auth.user,class:"mt-10 sm:mt-0"},null,8,["user"]),t(s),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",x,[t(u,{"requires-confirmation":i.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(g,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{K as default};