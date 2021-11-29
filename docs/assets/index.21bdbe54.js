import{d as v,r as h,o as i,c,a as o,t as g,F as $,p as k,b as I,e as u,f as _,g as d,h as V,i as b,w as y,v as C,j as w,k as A,l as H,m as S,n as x,q as E}from"./vendor.29e57414.js";const W=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}};W();var p=(e,n)=>{const s=e.__vccOpts||e;for(const[l,t]of n)s[l]=t;return s};const m=e=>(k("data-v-8203a322"),e=e(),I(),e),j=m(()=>o("p",null,[u(" Recommended IDE setup: "),o("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),u(" + "),o("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),D=m(()=>o("p",null,[u("See "),o("code",null,"README.md"),u(" for more information.")],-1)),N=m(()=>o("p",null,[o("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),u(" | "),o("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),O=m(()=>o("p",null,[u(" Edit "),o("code",null,"components/HelloWorld.vue"),u(" to test hot module replacement. ")],-1)),P=v({props:{msg:null},setup(e){const n=h(0);return(s,l)=>(i(),c($,null,[o("h1",null,g(e.msg),1),j,D,N,o("button",{type:"button",onClick:l[0]||(l[0]=t=>n.value++)},"count is: "+g(n.value),1),O],64))}});var L=p(P,[["__scopeId","data-v-8203a322"]]),M="/latex-to-web/assets/logo.03d6d6da.png";const R={name:"Home",components:{HelloWorld:L}},q={class:"home"},B=o("img",{alt:"Vue logo",class:"mx-auto",src:M},null,-1);function F(e,n,s,l,t,r){const a=_("HelloWorld");return i(),c("div",q,[B,d(a,{msg:"Welcome to Your Vue.js App"})])}var K=p(R,[["render",F]]);const T=v({name:"ChildInput",props:{title:String},emits:["update:title"],setup(e,{emit:n}){const{title:s}=V(e);return{titleComputed:b({get:()=>s.value,set:t=>{n("update:title",t)}})}}}),U=o("p",null,"child",-1);function Y(e,n,s,l,t,r){return i(),c("div",null,[U,y(o("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=a=>e.titleComputed=a)},null,512),[[C,e.titleComputed]])])}var z=p(T,[["render",Y]]);const G=v({name:"ParentInput",components:{ChildInput:z},setup(){const e=h("");return{titleComputed:b({get:()=>e.value,set:s=>e.value=s})}}}),J=o("p",null,"parent",-1);function Q(e,n,s,l,t,r){const a=_("ChildInput");return i(),c("div",null,[J,y(o("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=f=>e.titleComputed=f)},null,512),[[C,e.titleComputed]]),d(a,{title:e.titleComputed,"onUpdate:title":n[1]||(n[1]=f=>e.titleComputed=f)},null,8,["title"])])}var X=p(G,[["render",Q]]);const Z={name:"About",components:{Parent:X},setup(){const e=h();return console.log(e.value),w(()=>{console.log(e.value),e.value!=null&&A.render("c = \\pm\\sqrt{a^2 + b^2}",e.value,{throwOnError:!1}),console.log(e.value)}),{renderKatex:e}}},ee=o("div",{class:"about"},[o("h1",null,"This is About page")],-1),te=o("p",null,"$a$ \\[a\\]",-1),oe={ref:"renderKatex"};function ne(e,n,s,l,t,r){const a=_("Parent");return i(),c($,null,[ee,te,o("div",null,[o("p",oe,"aaaa",512)]),o("div",null,[d(a)])],64)}var se=p(Z,[["render",ne]]);const re=[{path:"/",component:K},{path:"/about",component:se}],le=H({history:S("/latex-to-web/"),routes:re});const ae={},ue={id:"nav"},ie=u("Home"),ce=u(" | "),de=u("About");function pe(e,n){const s=_("router-link"),l=_("router-view");return i(),c($,null,[o("div",ue,[d(s,{to:"/"},{default:x(()=>[ie]),_:1}),ce,d(s,{to:"/about"},{default:x(()=>[de]),_:1})]),d(l)],64)}var _e=p(ae,[["render",pe]]);E(_e).use(le).mount("#app");
