import{_ as N,a as I,G as g,b as E}from"./DoQMwojH.js";import{_ as M,F as U}from"./CGMJUDf1.js";import{_ as F}from"./D65Gmg2j.js";import{_ as A,a as B}from"./DZIpuyoq.js";import{e as R,r as s,o as $,c as H,b as a,w as i,u as l,a as t,d as b,i as d,F as W}from"./D9bQWTo4.js";import{m as z}from"./KBW82MDn.js";import{D as x}from"./eEfRPnGg.js";import{_ as O}from"./D-2urguP.js";import"./FCK28RRG.js";import"./CaratvA7.js";import"./CUXnjQBr.js";import"./6oj77RWt.js";import"./Bh-AGMKk.js";import"./UZ7DkShg.js";const Y={class:"flex flex-col xl:flex-row gap-4"},q={class:"w-full md:max-w-xl p-4 mx-auto space-y-6 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"},J={class:"text-gray-700 font-semibold flex items-center gap-3"},K={class:"space-y-1"},Q={class:"space-y-1"},X={class:"space-y-1"},Z={class:"space-y-1"},ee={class:"space-y-1"},te={class:"space-y-1"},ae={class:"space-y-1"},oe={class:"space-y-1"},se={class:"space-y-1"},he={__name:"[id]",setup(le){const v=[{id:1,subject:"English Communication Skills",department:"Department of Language and Literature",type:"Lecture",gradeType:"Grade Points",image:"/digital-solution/img/placeholder.jpg"},{id:2,subject:"Mathematics for Engineers",department:"Department of Mathematics",type:"Lecture",gradeType:"Percentage",image:"/digital-solution/img/placeholder-2.jpg"},{id:3,subject:"Data Structures and Algorithms",department:"Department of Computer Science",type:"Mixed",gradeType:"Grade Points",image:"/digital-solution/img/placeholder-3.jpg"},{id:4,subject:"Fundamentals of Physics",department:"Department of Physics",type:"Laboratory",gradeType:"Pass/Fail",image:"/digital-solution/img/placeholder-4.jpg"},{id:5,subject:"Introduction to Psychology",department:"Department of Social Sciences",type:"Lecture",gradeType:"Grade Points",image:"/digital-solution/img/placeholder-5.jpg"},{id:6,subject:"Chemistry for Health Sciences",department:"Department of Chemistry",type:"Laboratory",gradeType:"Percentage",image:"/digital-solution/img/placeholder-6.jpg"},{id:7,subject:"History of Western Civilization",department:"Department of History",type:"Lecture",gradeType:"Grade Points",image:"/digital-solution/img/placeholder-7.jpg"},{id:8,subject:"Advanced Software Engineering",department:"Department of Computer Science",type:"Mixed",gradeType:"Grade Points",image:"/digital-solution/img/placeholder-8.jpg"},{id:9,subject:"Business Management Basics",department:"Department of Business Administration",type:"Lecture",gradeType:"Grade Points",image:"/digital-solution/img/placeholder-9.jpg"},{id:10,subject:"Physical Education and Wellness",department:"Department of Physical Education",type:"Lecture",gradeType:"Pass/Fail",image:"/digital-solution/img/placeholder-10.jpg"}],_=R().params.id,n=s(v.find(f=>f.id===parseInt(_,10))),h=s(["Department of Science","Department of Information Technology","Department of Engineering","Department of Medicine"]),m=n.value.department,k=s(["Basic Algebra","Natural Science","Computer Programming","English Literature"]),u=n.value.subject,w=s(["Pass/Fail","Grade Letter","Grade Points","Percentage","Descriptor"]),p=n.value.gradeType,j=[{label:"Lecture",value:"lecture"},{label:"Laboratory",value:"laboratory"},{label:"Mixed",value:"mixed"}],c=n.value.type.toLowerCase(),C=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],y=s("yes"),D=s([{title:"Courses",href:"/cms/courses"},{title:"Edit Course"}]);return(f,e)=>{const S=N,L=M,T=F,P=I,V=A,r=B,G=E;return $(),H(W,null,[a(S,null,{pageTitle:i(()=>[a(O,{items:D.value},null,8,["items"])]),_:1}),a(P,{"app-name":"Course Management System"},{appLogo:i(()=>[a(L,{className:"size-16"})]),menu:i(()=>[a(T,{"menu-items":l(z)},null,8,["menu-items"])]),_:1}),a(G,null,{mainContent:i(()=>[t("div",Y,[t("div",q,[t("div",null,[t("h3",J,[a(l(U),{class:"shrink-0 size-8 text-rose-500",strokeWidth:"1.5"}),e[5]||(e[5]=b(" Edit Course "))]),e[6]||(e[6]=t("div",{class:"bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-4 dark:from-neutral-700 dark:via-neutral-900"},[t("div",{class:"bg-rose-500 w-8 h-0.5 dark:bg-neutral-600"})],-1))]),a(V,{imageURL:n.value.image},null,8,["imageURL"]),t("div",K,[e[7]||(e[7]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"},[t("span",{class:"text-red-600"},"*"),b("Department: ")],-1)),a(g,{modelValue:l(m),"onUpdate:modelValue":e[0]||(e[0]=o=>d(m)?m.value=o:null),options:h.value,placeholder:"Select Department"},null,8,["modelValue","options"])]),t("div",Q,[e[8]||(e[8]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"},[t("span",{class:"text-red-600"},"*"),b("Subject: ")],-1)),a(g,{modelValue:l(u),"onUpdate:modelValue":e[1]||(e[1]=o=>d(u)?u.value=o:null),options:k.value,placeholder:"Select Subject"},null,8,["modelValue","options"])]),t("div",X,[e[9]||(e[9]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Type: ",-1)),a(x,{items:j,groupName:"typeSelection",modelValue:l(c),"onUpdate:modelValue":e[2]||(e[2]=o=>d(c)?c.value=o:null)},null,8,["modelValue"])]),t("div",Z,[e[10]||(e[10]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Lecture Unit: ",-1)),a(r,{"min-value":0,"max-value":3,step:1,"start-value":3,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",ee,[e[11]||(e[11]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Lecture Faculty Unit: ",-1)),a(r,{"min-value":0,"max-value":3,step:1,"start-value":3,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",te,[e[12]||(e[12]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Lecture hours: ",-1)),a(r,{"min-value":0,"max-value":3,step:1,"start-value":3,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",ae,[e[13]||(e[13]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Course Duration (Week): ",-1)),a(r,{"min-value":0,"max-value":24,step:1,"start-value":12,showNumberInput:!0,activeColor:"#2563eb",inactiveColor:"#d1d5db"})]),t("div",oe,[e[14]||(e[14]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," GPA counted: ",-1)),a(x,{items:C,groupName:"gpaSelection",modelValue:y.value,"onUpdate:modelValue":e[3]||(e[3]=o=>y.value=o)},null,8,["modelValue"])]),t("div",se,[e[15]||(e[15]=t("label",{class:"block text-sm text-gray-700 font-medium mb-2 dark:text-white"}," Grade Type: ",-1)),a(g,{modelValue:l(p),"onUpdate:modelValue":e[4]||(e[4]=o=>d(p)?p.value=o:null),options:w.value,placeholder:"Select Grade Type"},null,8,["modelValue","options"])]),e[16]||(e[16]=t("div",{class:"flex items-center justify-center gap-2"},[t("button",{type:"button",class:"w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"}," Cancel "),t("button",{type:"button",class:"w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"}," Save ")],-1))])])]),_:1})],64)}}};export{he as default};