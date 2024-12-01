import{_ as U,U as G,a as T,G as m,b as z}from"./C6T9lhkw.js";import{G as j,M as B,B as F,a as A,_ as M,F as P}from"./BDSzngQ3.js";import{_ as O}from"./BGmf7vnk.js";import{_ as $,a as E}from"./90foRuuS.js";import{D as y}from"./BnqbxaD8.js";import{_ as R}from"./s_iMqJzQ.js";import{S as W}from"./erlzYXfM.js";import{r as o,o as p,c,b as a,w as s,a as t,u,d as r,q as f,F as q}from"./BWVgAOeX.js";import"./BKq9DFWF.js";const H={class:"hs-accordion-group p-3 w-full flex flex-col flex-wrap","data-hs-accordion-always-open":""},Y={class:"flex flex-col space-y-1"},J={class:"flex flex-col xl:flex-row gap-4"},K={class:"w-full md:max-w-xl p-4 mx-auto space-y-6 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"},Q={class:"text-gray-700 font-semibold flex items-center gap-3"},X={class:"space-y-1"},Z={class:"space-y-1"},ee={class:"space-y-1"},te={key:0,class:"space-y-6"},ae={class:"space-y-1"},se={class:"space-y-1"},le={class:"space-y-1"},oe={key:1,class:"space-y-6"},re={class:"space-y-1"},ne={class:"space-y-1"},ue={class:"space-y-1"},ie={class:"space-y-1"},de={class:"space-y-1"},me={class:"space-y-1"},pe={class:"space-y-1"},Ce={__name:"new-course",setup(ce){const k=o(["Department of Science","Department of Information Technology","Department of Engineering","Department of Medicine"]),b=o(null),w=o(["Basic Algebra","Natural Science","Computer Programming","English Literature"]),x=o(null),_=o(["Passed/Failed","Grade Letter","Grade Points","Percentage","Descriptor"]),g=o(null),h=[{label:"Lecture",value:"lecture"},{label:"Laboratory",value:"laboratory"},{label:"Mixed",value:"mixed"}],i=o("lecture"),C=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],v=o("yes"),N=o([{title:"Courses",href:"./"},{title:"Course"}]);return(be,e)=>{const V=U,S=M,d=O,L=T,D=$,n=E,I=z;return p(),c(q,null,[a(V,null,{pageTitle:s(()=>[a(R,{items:N.value},null,8,["items"])]),_:1}),a(L,{"app-name":"Course Management System"},{appLogo:s(()=>[a(S,{className:"size-16"})]),menu:s(()=>[t("nav",H,[t("ul",Y,[t("li",null,[a(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms"},{default:s(()=>[a(u(j),{class:"shrink-0 size-4"}),e[5]||(e[5]=r(" Analytics "))]),_:1})]),t("li",null,[a(d,{class:"flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white",to:"/cms/courses"},{default:s(()=>[a(u(W),{class:"shrink-0 size-4"}),e[6]||(e[6]=r(" Courses "))]),_:1})]),t("li",null,[a(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/course-offerings"},{default:s(()=>[a(u(B),{class:"shrink-0 size-4"}),e[7]||(e[7]=r(" Course Offerings "))]),_:1})]),t("li",null,[a(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/program-offerings"},{default:s(()=>[a(u(F),{class:"shrink-0 size-4"}),e[8]||(e[8]=r(" Program Offerings "))]),_:1})]),t("li",null,[a(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/curricula"},{default:s(()=>[a(u(A),{class:"shrink-0 size-4"}),e[9]||(e[9]=r(" Curricula "))]),_:1})]),t("li",null,[a(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/block-sections"},{default:s(()=>[a(u(G),{class:"shrink-0 size-4"}),e[10]||(e[10]=r(" Block Sections "))]),_:1})])])])]),_:1}),a(I,null,{mainContent:s(()=>[t("div",J,[t("div",K,[t("div",null,[t("h3",Q,[a(u(P),{class:"shrink-0 size-8 text-rose-500",strokeWidth:"1.5"}),e[11]||(e[11]=r(" New Course "))]),e[12]||(e[12]=t("div",{class:"bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-4 dark:from-neutral-700 dark:via-neutral-900"},[t("div",{class:"bg-rose-500 w-8 h-0.5 dark:bg-neutral-600"})],-1))]),a(D),t("div",X,[e[13]||(e[13]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"},[t("span",{class:"text-red-600"},"*"),r("Department: ")],-1)),a(m,{modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=l=>b.value=l),options:k.value,placeholder:"Select Department"},null,8,["modelValue","options"])]),t("div",Z,[e[14]||(e[14]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"},[t("span",{class:"text-red-600"},"*"),r("Subject: ")],-1)),a(m,{modelValue:x.value,"onUpdate:modelValue":e[1]||(e[1]=l=>x.value=l),options:w.value,placeholder:"Select Subject"},null,8,["modelValue","options"])]),t("div",ee,[e[15]||(e[15]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Type: ",-1)),a(y,{items:h,groupName:"typeSelection",modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=l=>i.value=l)},null,8,["modelValue"])]),i.value==="lecture"||i.value==="mixed"?(p(),c("div",te,[t("div",ae,[e[16]||(e[16]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Lecture Unit: ",-1)),a(n,{"min-value":0,"max-value":3,step:1,"start-value":0,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",se,[e[17]||(e[17]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Lecture Faculty Unit: ",-1)),a(n,{"min-value":0,"max-value":3,step:1,"start-value":0,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",le,[e[18]||(e[18]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Lecture hours: ",-1)),a(n,{"min-value":0,"max-value":3,step:1,"start-value":0,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})])])):f("",!0),i.value==="laboratory"||i.value==="mixed"?(p(),c("div",oe,[t("div",re,[e[19]||(e[19]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Laboratory Unit: ",-1)),a(n,{"min-value":0,"max-value":3,step:1,"start-value":0,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",ne,[e[20]||(e[20]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Laboratory hours: ",-1)),a(n,{"min-value":0,"max-value":3,step:1,"start-value":0,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",ue,[e[21]||(e[21]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Laboratory Type: ",-1)),a(n,{"min-value":0,"max-value":3,step:1,"start-value":0,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",ie,[e[22]||(e[22]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Laboratory Faculty Unit: ",-1)),a(n,{"min-value":0,"max-value":3,step:1,"start-value":0,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})])])):f("",!0),t("div",de,[e[23]||(e[23]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Course Duration (Week): ",-1)),a(n,{"min-value":0,"max-value":24,step:1,"start-value":0,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",me,[e[24]||(e[24]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," GPA counted: ",-1)),a(y,{items:C,groupName:"gpaSelection",modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=l=>v.value=l)},null,8,["modelValue"])]),t("div",pe,[e[25]||(e[25]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Grade Type: ",-1)),a(m,{modelValue:g.value,"onUpdate:modelValue":e[4]||(e[4]=l=>g.value=l),options:_.value,placeholder:"Select Grade Type"},null,8,["modelValue","options"])]),e[26]||(e[26]=t("div",{class:"flex items-center justify-center gap-2"},[t("button",{type:"button",class:"w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"}," Cancel "),t("button",{type:"button",class:"w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"}," Save ")],-1))])])]),_:1})],64)}}};export{Ce as default};
