import{X as C,C as S,_ as V,U as z,a as B,b as j}from"./Cq7XIrmS.js";import{G as L,M as $,B as E,a as N,_ as A}from"./YiPCoh6T.js";import{_ as D}from"./BcHLl8tE.js";import{r as h,e as T,o as x,c as m,f as M,v as U,a as e,b as s,u as a,w as r,d as l,F as k,g as q,t as c,n as G}from"./BVo6frXB.js";import{_ as O,a as P,B as I}from"./CKpDyshp.js";import{S as F}from"./B9-spM5C.js";import{P as R}from"./BosDU5Al.js";import"./BzlDyzKj.js";const H={class:"relative inline-block"},X={class:"peer-checked:text-white text-amber-500 w-6 h-6 absolute top-0.5 left-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500"},J={class:"peer-checked:text-green-600 text-white w-6 h-6 absolute top-0.5 right-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500"},K={__name:"DsToggleSwitch",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(b,{emit:g}){const p=b,f=g,i=h(p.modelValue);return T(i,t=>f("update:modelValue",t)),(t,o)=>(x(),m("div",H,[M(e("input",{type:"checkbox",id:"hs-default-switch-with-icons",class:"peer relative w-[3.25rem] h-7 p-px bg-amber-400 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-600 before:inline-block before:size-6 before:bg-white checked:before:bg-green-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-green-200","onUpdate:modelValue":o[0]||(o[0]=u=>i.value=u)},null,512),[[U,i.value]]),o[1]||(o[1]=e("label",{for:"hs-default-switch-with-icons",class:"sr-only"},"Switch Status",-1)),e("span",X,[s(a(C),{class:"shrink-0 w-3 h-3"})]),e("span",J,[s(a(S),{class:"shrink-0 w-3 h-3"})])]))}},Q={class:"hs-accordion-group p-3 w-full flex flex-col flex-wrap","data-hs-accordion-always-open":""},W={class:"flex flex-col space-y-1"},Y={class:"flex gap-4"},Z={class:"w-full max-w-md bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"},ee={class:"relative"},te={class:"absolute right-2 top-2"},se={class:"inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white"},ae={class:"w-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"},re={class:"flex items-center justify-between p-4 border-b border-gray-200"},oe={type:"button",class:"py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white text-nowrap hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none","aria-haspopup":"dialog","aria-expanded":"false","aria-controls":"hs-offcanvas-right","data-hs-overlay":"#hs-offcanvas-right"},ne={class:"p-4"},le={class:"min-w-full divide-y divide-gray-200 dark:divide-neutral-700"},ie={class:"divide-y divide-gray-200 dark:divide-neutral-700"},de={class:"hidden px-6 py-4 whitespace-nowrap text-sm font-medium uppercase text-gray-800 dark:text-neutral-200"},ue={class:"px-6 py-4 whitespace-nowrap text-sm font-medium uppercase text-gray-800 dark:text-neutral-200"},ce={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"},pe={class:"flex items-center gap-3"},xe={class:"inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white"},me={class:"px-6 py-4 whitespace-nowrap text-end text-sm font-medium"},we={__name:"details",setup(b){const g=h([{title:"Courses",href:"./"},{title:"Details"}]),p=h([{id:1,type:"Prerequisite",subject:"English Communication Skills",tag:"ENG 101",status:!0},{id:2,type:"Co-requisite",subject:"Introduction to English Language Studies",tag:"ELS 101",status:!1},{id:3,type:"Substitute",subject:"Elementary Communication Skills",tag:"ELC 101",status:!1}]),f=(i,t)=>{const o=p.value.find(u=>u.id===i);o&&(o.status=t)};return(i,t)=>{const o=V,u=A,d=D,y=B,_=K,v=j;return x(),m(k,null,[s(o,null,{pageTitle:r(()=>[s(O,{items:a(g)},null,8,["items"])]),_:1}),s(y,{"app-name":"Course Management System"},{appLogo:r(()=>[s(u,{className:"size-16"})]),menu:r(()=>[e("nav",Q,[e("ul",W,[e("li",null,[s(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms"},{default:r(()=>[s(a(L),{class:"shrink-0 size-4"}),t[0]||(t[0]=l(" Analytics "))]),_:1})]),e("li",null,[s(d,{class:"flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white",to:"/cms/courses"},{default:r(()=>[s(a(F),{class:"shrink-0 size-4"}),t[1]||(t[1]=l(" Courses "))]),_:1})]),e("li",null,[s(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/course-offerings"},{default:r(()=>[s(a($),{class:"shrink-0 size-4"}),t[2]||(t[2]=l(" Course Offerings "))]),_:1})]),e("li",null,[s(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/program-offerings"},{default:r(()=>[s(a(E),{class:"shrink-0 size-4"}),t[3]||(t[3]=l(" Program Offerings "))]),_:1})]),e("li",null,[s(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/curricula"},{default:r(()=>[s(a(N),{class:"shrink-0 size-4"}),t[4]||(t[4]=l(" Curricula "))]),_:1})]),e("li",null,[s(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/block-sections"},{default:r(()=>[s(a(z),{class:"shrink-0 size-4"}),t[5]||(t[5]=l(" Block Sections "))]),_:1})])])])]),_:1}),s(v,null,{mainContent:r(()=>[e("div",Y,[e("div",Z,[e("div",ee,[t[7]||(t[7]=e("img",{class:"w-full object-cover h-32",src:P,alt:"Blog Image"},null,-1)),e("div",te,[e("span",se,[s(a(I),{class:"shrink-0 size-3.5"}),t[6]||(t[6]=l(" Lecture "))])])])]),e("div",ae,[e("div",re,[t[9]||(t[9]=e("h3",{class:"font-semibold text-gray-800"}," Course Requirements ",-1)),e("button",oe,[t[8]||(t[8]=l(" New Requirement ")),s(a(R),{class:"shrink-0 size-4"})])]),e("div",ne,[e("table",le,[t[10]||(t[10]=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"hidden px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"}," ID"),e("th",{scope:"col",class:"px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"}," Type"),e("th",{scope:"col",class:"px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"}," Subject"),e("th",{scope:"col",class:"px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"}," Status"),e("th",{scope:"col",class:"px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"}," Action")])],-1)),e("tbody",ie,[(x(!0),m(k,null,q(a(p),n=>(x(),m("tr",{key:n.id},[e("td",de,c(n.id),1),e("td",ue,c(n.type),1),e("td",ce,[e("div",pe,[e("span",xe,c(n.tag),1),l(" "+c(n.subject),1)])]),e("td",{class:G(["px-6 py-4 whitespace-nowrap text-sm dark:text-neutral-200",n.status?"text-green-500":"text-amber-500"])},c(n.status?"Active":"Suspended"),3),e("td",me,[s(_,{modelValue:n.status,"onUpdate:modelValue":w=>f(n.id,w)},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])])])])])]),_:1})],64)}}};export{we as default};
