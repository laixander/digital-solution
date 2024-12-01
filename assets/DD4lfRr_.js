import{_ as N,a as L,G as r,b as T}from"./CfuhQ4U8.js";import{_ as G,F as I}from"./BMzamU86.js";import{_ as U,m as j}from"./QdjxvZFd.js";import{_ as F,a as P}from"./kjV7kXnb.js";import{D as b}from"./cuDL1KAs.js";import{_ as $}from"./C2KKqcoF.js";import{r as s,o as A,c as E,b as a,w as n,u as x,a as t,d as i,F as M}from"./BJE7q9Cv.js";import"./BukOdAS1.js";import"./DIIb8Gem.js";import"./lbjaXXQM.js";import"./DW5lH2HW.js";import"./CdsIh_FC.js";const B={class:"flex flex-col xl:flex-row gap-4"},R={class:"w-full md:max-w-xl p-4 mx-auto space-y-6 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"},z={class:"text-gray-700 font-semibold flex items-center gap-3"},O={class:"space-y-1"},W={class:"space-y-1"},H={class:"space-y-1"},Y={class:"space-y-1"},q={class:"space-y-1"},J={class:"space-y-1"},K={class:"space-y-1"},Q={class:"space-y-1"},X={class:"space-y-1"},ce={__name:"edit-details",setup(Z){const g=s(["Department of Science","Department of Information Technology","Department of Engineering","Department of Medicine"]),m=s("Department of Science"),v=s(["Basic Algebra","Natural Science","Computer Programming","English Literature"]),d=s("Natural Science"),f=s(["Passed/Failed","Grade Letter","Grade Points","Percentage","Descriptor"]),u=s("Grade Points"),y=[{label:"Lecture",value:"lecture"},{label:"Laboratory",value:"laboratory"},{label:"Mixed",value:"mixed"}],p=s("lecture"),_=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],c=s("yes"),k=s([{title:"Courses",href:"/cms/courses"},{title:"Edit Course"}]);return(ee,e)=>{const w=N,C=G,V=U,S=L,h=F,l=P,D=T;return A(),E(M,null,[a(w,null,{pageTitle:n(()=>[a($,{items:k.value},null,8,["items"])]),_:1}),a(S,{"app-name":"Course Management System"},{appLogo:n(()=>[a(C,{className:"size-16"})]),menu:n(()=>[a(V,{"menu-items":x(j)},null,8,["menu-items"])]),_:1}),a(D,null,{mainContent:n(()=>[t("div",B,[t("div",R,[t("div",null,[t("h3",z,[a(x(I),{class:"shrink-0 size-8 text-rose-500",strokeWidth:"1.5"}),e[5]||(e[5]=i(" Edit Course "))]),e[6]||(e[6]=t("div",{class:"bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-4 dark:from-neutral-700 dark:via-neutral-900"},[t("div",{class:"bg-rose-500 w-8 h-0.5 dark:bg-neutral-600"})],-1))]),a(h,{imageURL:"/digital-solution/img/placeholder.jpg"}),t("div",O,[e[7]||(e[7]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"},[t("span",{class:"text-red-600"},"*"),i("Department: ")],-1)),a(r,{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=o=>m.value=o),options:g.value,placeholder:"Select Department"},null,8,["modelValue","options"])]),t("div",W,[e[8]||(e[8]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"},[t("span",{class:"text-red-600"},"*"),i("Subject: ")],-1)),a(r,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=o=>d.value=o),options:v.value,placeholder:"Select Subject"},null,8,["modelValue","options"])]),t("div",H,[e[9]||(e[9]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Type: ",-1)),a(b,{items:y,groupName:"typeSelection",modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=o=>p.value=o)},null,8,["modelValue"])]),t("div",Y,[e[10]||(e[10]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Lecture Unit: ",-1)),a(l,{"min-value":0,"max-value":3,step:1,"start-value":3,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",q,[e[11]||(e[11]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Lecture Faculty Unit: ",-1)),a(l,{"min-value":0,"max-value":3,step:1,"start-value":3,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",J,[e[12]||(e[12]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Lecture hours: ",-1)),a(l,{"min-value":0,"max-value":3,step:1,"start-value":3,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",K,[e[13]||(e[13]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Course Duration (Week): ",-1)),a(l,{"min-value":0,"max-value":24,step:1,"start-value":12,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",Q,[e[14]||(e[14]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," GPA counted: ",-1)),a(b,{items:_,groupName:"gpaSelection",modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=o=>c.value=o)},null,8,["modelValue"])]),t("div",X,[e[15]||(e[15]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Grade Type: ",-1)),a(r,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=o=>u.value=o),options:f.value,placeholder:"Select Grade Type"},null,8,["modelValue","options"])]),e[16]||(e[16]=t("div",{class:"flex items-center justify-center gap-2"},[t("button",{type:"button",class:"w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"}," Cancel "),t("button",{type:"button",class:"w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"}," Save ")],-1))])])]),_:1})],64)}}};export{ce as default};
