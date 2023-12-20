import{_ as c}from"./AppLayout-87415248.js";import p from"./DeleteUserForm-f0ac36b7.js";import l from"./LogoutOtherBrowserSessionsForm-0eca5edd.js";import{S as s}from"./SectionBorder-a765f384.js";import f from"./TwoFactorAuthenticationForm-5ecd7b20.js";import u from"./UpdatePasswordForm-ce87f620.js";import d from"./UpdateProfileInformationForm-d3b2f2e2.js";import{o,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app-d7073bf7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-f5472f73.js";import"./SectionTitle-26fbbcd3.js";import"./DangerButton-b57220ef.js";import"./DialogModal-7b614f9b.js";import"./TextInput-bb40d65a.js";import"./SecondaryButton-cc0bf555.js";import"./ActionMessage-8f7ec102.js";import"./PrimaryButton-ddcbeb4b.js";import"./InputLabel-9ba94251.js";import"./FormSection-5c0f8986.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};
