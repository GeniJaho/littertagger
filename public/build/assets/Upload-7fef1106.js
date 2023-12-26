import{_ as P}from"./AppLayout-7e69f739.js";import{L as _,K as $,o as v,d as F,a as i,b as c,u as b,w as p,f as O,i as k,c as N}from"./app-6e6cbdeb.js";import{r as j,O as y,c as E,s as T,p as B,F as C,a as M,b as S,d as z,e as A}from"./filepond-plugin-image-preview.min-b439317b.js";import{_ as U}from"./PrimaryButton-e022dc45.js";import"./_plugin-vue_export-helper-c27b6911.js";/*!
 * vue-filepond v7.0.4
 * A handy FilePond adapter component for Vue
 * 
 * Copyright (c) 2023 PQINA
 * https://pqina.nl/filepond
 * 
 * Licensed under the MIT license.
 */const V=["setOptions","on","off","onOnce","appendTo","insertAfter","insertBefore","isAttachedTo","replaceElement","restoreElement","destroy"],q=T(),L=n=>({string:String,boolean:Boolean,array:Array,function:Function,int:Number,serverapi:Object,object:Object})[n],d={},h=[],m=[];let K={};const D=(...n)=>{j(...n),h.length=0;for(const e in y){if(/^on/.test(e)){h.push(e);continue}let t=[String,L(y[e])];e=="labelFileProcessingError"&&t.push(Function),d[e]={type:t,default:void 0}}return{name:"FilePond",props:d,render(){const e=Object.entries({id:this.id,name:this.name,type:"file",class:this.className,required:this.required,multiple:this.allowMultiple,accept:this.acceptedFileTypes,capture:this.captureMethod}).reduce((t,[s,o])=>(o!==void 0&&(t[s]=o),t),{});return _("div",{class:{"filepond--wrapper":!0}},[_("input",e)])},created(){this.watchers=Object.keys(d).map(e=>this.$watch(e,t=>{this._pond&&(this._pond[e]=t)}))},mounted(){if(!q)return;this._element=this.$el.querySelector("input");const e=h.reduce((s,o)=>(s[o]=(...a)=>{this.$emit("input",this._pond?this._pond.getFiles():[]),this.$emit(o.substr(2),...a)},s),{}),t={};Object.keys(d).forEach(s=>{this[s]!==void 0&&(t[s]=this[s])}),this._pond=E(this._element,Object.assign({},K,e,t)),Object.keys(this._pond).filter(s=>!V.includes(s)).forEach(s=>{this[s]=this._pond[s]}),m.push(this._pond)},beforeUnmount(){const{detached:e}=this.$options;if(!this.$el.offsetParent){e.call(this);return}const t=(o,a)=>{const r=((o[0]||{}).removedNodes||[])[0];!r||!r.contains(this.$el)||(a.disconnect(),e.call(this))};new MutationObserver(t).observe(document.documentElement,{childList:!0,subtree:!0})},detached(){if(this.watchers.forEach(t=>t()),!this._pond)return;this._pond.destroy();const e=m.indexOf(this._pond);e>=0&&m.splice(e,1),this._pond=null}}},H={class:"p-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700"},I=i("h1",{class:"text-2xl font-medium text-gray-900 dark:text-white"}," Drag and drop your photos here ",-1),R={class:"mt-6 text-gray-500 dark:text-gray-400"},X={class:"mt-2"},G={class:"flex justify-center"},J={__name:"UploadPhotos",setup(n){const e=$(),t=D(A,z,S,M,C,B),s={url:".",process:{url:"/upload",method:"POST",withCredentials:!1,headers:{"X-CSRF-TOKEN":e.props.csrf_token},timeout:12e4,onload:null,onerror:null,ondata:null},fetch:null,revert:null},o=["image/jpeg","image/jpg","image/png","image/webp",".heic",".heif"],a=(l,r)=>new Promise((f,x)=>{var g;if(r)return f(r);const u=(g=l.name.split(".").pop())==null?void 0:g.toLowerCase();o.find(w=>w.split(".").pop()===u)!==void 0?f("."+u):x("."+u)});return(l,r)=>(v(),F("div",null,[i("div",H,[I,i("div",R,[i("div",X,[c(b(t),{name:"photo",ref:"pond","allow-multiple":"true","allow-revert":"false","accepted-file-types":o,"file-validate-type-detect-type":a,"file-validate-type-label-expected-types":"Only images are allowed","max-file-size":"20MB","image-transform-output-strip-image-head":"false","image-transform-output-quality":"75","image-resize-target-width":"1024","image-resize-target-height":"1024","image-resize-mode":"contain","image-resize-upscale":"false",server:s},null,512),i("div",G,[c(b(k),{href:l.route("my-photos")},{default:p(()=>[c(U,null,{default:p(()=>[O("My Photos")]),_:1})]),_:1},8,["href"])])])])])]))}},Q=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Upload Photos ",-1),W={class:"py-12"},Y={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Z={class:"bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg"},ne={__name:"Upload",setup(n){return(e,t)=>(v(),N(P,{title:"Upload Photos"},{header:p(()=>[Q]),default:p(()=>[i("div",W,[i("div",Y,[i("div",Z,[c(J)])])])]),_:1}))}};export{ne as default};