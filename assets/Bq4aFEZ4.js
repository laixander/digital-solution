import{_ as D,U as G,a as L,G as d,b as T}from"./CfuhQ4U8.js";import{G as U,M as z,B as I,a as j,_ as B,F as A}from"./BMzamU86.js";import{_ as F}from"./lbjaXXQM.js";import{_ as M,a as P}from"./kjV7kXnb.js";import{D as b}from"./cuDL1KAs.js";import{_ as O}from"./C2KKqcoF.js";import{S as $}from"./BukOdAS1.js";import{r as o,o as E,c as R,b as a,w as s,a as t,u as n,d as r,F as W}from"./BJE7q9Cv.js";import"./DIIb8Gem.js";const H={class:"hs-accordion-group p-3 w-full flex flex-col flex-wrap","data-hs-accordion-always-open":""},Y={class:"flex flex-col space-y-1"},q={class:"flex flex-col xl:flex-row gap-4"},J={class:"w-full md:max-w-xl p-4 mx-auto space-y-6 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"},K={class:"text-gray-700 font-semibold flex items-center gap-3"},Q={class:"space-y-1"},X={class:"space-y-1"},Z={class:"space-y-1"},ee={class:"space-y-1"},te={class:"space-y-1"},ae={class:"space-y-1"},se={class:"space-y-1"},le={class:"space-y-1"},oe={class:"space-y-1"},fe={__name:"new-course",setup(re){const f=o(["Department of Science","Department of Information Technology","Department of Engineering","Department of Medicine"]),m=o(null),v=o(["Basic Algebra","Natural Science","Computer Programming","English Literature"]),p=o(null),y=o(["Passed/Failed","Grade Letter","Grade Points","Percentage","Descriptor"]),c=o(null),k=[{label:"Lecture",value:"lecture"},{label:"Laboratory",value:"laboratory"},{label:"Mixed",value:"mixed"}],x=o("lecture"),_=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],g=o("yes"),w=o([{title:"Courses",href:"./"},{title:"Course"}]);return(ne,e)=>{const h=D,C=B,u=F,S=L,V=M,i=P,N=T;return E(),R(W,null,[a(h,null,{pageTitle:s(()=>[a(O,{items:w.value},null,8,["items"])]),_:1}),a(S,{"app-name":"Course Management System"},{appLogo:s(()=>[a(C,{className:"size-16"})]),menu:s(()=>[t("nav",H,[t("ul",Y,[t("li",null,[a(u,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms"},{default:s(()=>[a(n(U),{class:"shrink-0 size-4"}),e[5]||(e[5]=r(" Analytics "))]),_:1})]),t("li",null,[a(u,{class:"flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white",to:"/cms/courses"},{default:s(()=>[a(n($),{class:"shrink-0 size-4"}),e[6]||(e[6]=r(" Courses "))]),_:1})]),t("li",null,[a(u,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/course-offerings"},{default:s(()=>[a(n(z),{class:"shrink-0 size-4"}),e[7]||(e[7]=r(" Course Offerings "))]),_:1})]),t("li",null,[a(u,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/program-offerings"},{default:s(()=>[a(n(I),{class:"shrink-0 size-4"}),e[8]||(e[8]=r(" Program Offerings "))]),_:1})]),t("li",null,[a(u,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/curricula"},{default:s(()=>[a(n(j),{class:"shrink-0 size-4"}),e[9]||(e[9]=r(" Curricula "))]),_:1})]),t("li",null,[a(u,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/block-sections"},{default:s(()=>[a(n(G),{class:"shrink-0 size-4"}),e[10]||(e[10]=r(" Block Sections "))]),_:1})])])])]),_:1}),a(N,null,{mainContent:s(()=>[t("div",q,[t("div",J,[t("div",null,[t("h3",K,[a(n(A),{class:"shrink-0 size-8 text-rose-500",strokeWidth:"1.5"}),e[11]||(e[11]=r(" New Course "))]),e[12]||(e[12]=t("div",{class:"bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-4 dark:from-neutral-700 dark:via-neutral-900"},[t("div",{class:"bg-rose-500 w-8 h-0.5 dark:bg-neutral-600"})],-1))]),a(V),t("div",Q,[e[13]||(e[13]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"},[t("span",{class:"text-red-600"},"*"),r("Department: ")],-1)),a(d,{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=l=>m.value=l),options:f.value,placeholder:"Select Department"},null,8,["modelValue","options"])]),t("div",X,[e[14]||(e[14]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"},[t("span",{class:"text-red-600"},"*"),r("Subject: ")],-1)),a(d,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=l=>p.value=l),options:v.value,placeholder:"Select Subject"},null,8,["modelValue","options"])]),t("div",Z,[e[15]||(e[15]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Type: ",-1)),a(b,{items:k,groupName:"typeSelection",modelValue:x.value,"onUpdate:modelValue":e[2]||(e[2]=l=>x.value=l)},null,8,["modelValue"])]),t("div",ee,[e[16]||(e[16]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Lecture Unit: ",-1)),a(i,{"min-value":0,"max-value":3,step:1,"start-value":0,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",te,[e[17]||(e[17]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Lecture Faculty Unit: ",-1)),a(i,{"min-value":0,"max-value":3,step:1,"start-value":0,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",ae,[e[18]||(e[18]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Lecture hours: ",-1)),a(i,{"min-value":0,"max-value":3,step:1,"start-value":0,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",se,[e[19]||(e[19]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Course Duration (Week): ",-1)),a(i,{"min-value":0,"max-value":24,step:1,"start-value":0,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",le,[e[20]||(e[20]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," GPA counted: ",-1)),a(b,{items:_,groupName:"gpaSelection",modelValue:g.value,"onUpdate:modelValue":e[3]||(e[3]=l=>g.value=l)},null,8,["modelValue"])]),t("div",oe,[e[21]||(e[21]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Grade Type: ",-1)),a(d,{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=l=>c.value=l),options:y.value,placeholder:"Select Grade Type"},null,8,["modelValue","options"])]),e[22]||(e[22]=t("div",{class:"flex items-center justify-center gap-2"},[t("button",{type:"button",class:"w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"}," Cancel "),t("button",{type:"button",class:"w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"}," Save ")],-1))])])]),_:1})],64)}}};export{fe as default};
